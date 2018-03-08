'use strict';

const winston = require('winston');
const url = require('url');
const handlebars = require('handlebars');
const mongo = require('../../lib/mongo');
const parse = require('../../lib/parse');
const settings = require('../../lib/settings');
const mailer = require('../../lib/mailer');
const SettingsService = require('../settings/settings');
const ObjectID = require('mongodb').ObjectID;
const jwt = require('jsonwebtoken');
const moment = require('moment');
const uaParser = require('ua-parser-js');
const cache = require('lru-cache')({
  max: 10000,
  maxAge: 1000 * 60 * 60 * 24 // 24h
});
const BLACKLIST_CACHE_KEY = 'blacklist';

class SecurityTokensService {
  constructor() {}

  getTokens(params = {}) {
    let filter = {
      is_revoked: false
    };
    const id = parse.getObjectIDIfValid(params.id);
    if (id) {
      filter._id = new ObjectID(id);
    }

    const email = parse.getString(params.email).toLowerCase();
    if (email && email.length > 0) {
      filter.email = email;
    }

    return mongo.db.collection('tokens').find(filter).toArray().then(items => items.map(item => this.changeProperties(item)))
  }

  getTokensBlacklist() {
    const blacklistFromCache = cache.get(BLACKLIST_CACHE_KEY);

    if (blacklistFromCache) {
      return Promise.resolve(blacklistFromCache);
    } else {
      return mongo.db.collection('tokens').find({
        is_revoked: true
      }, {_id: 1}).toArray().then(items => {
        const blacklistFromDB = items.map(item => item._id.toString());
        cache.set(BLACKLIST_CACHE_KEY, blacklistFromDB);
        return blacklistFromDB;
      })
    }
  }

  getSingleToken(id) {
    if (!ObjectID.isValid(id)) {
      return Promise.reject('Invalid identifier');
    }
    return this.getTokens({id: id}).then(items => {
      return items.length > 0
        ? items[0]
        : null;
    })
  }

  getSingleTokenByEmail(email) {
    return this.getTokens({email}).then(items => {
      return items.length > 0
        ? items[0]
        : null;
    })
  }

  addToken(data) {
    return this.getValidDocumentForInsert(data).then(tokenData => mongo.db.collection('tokens').insertMany([tokenData])).then(res => this.getSingleToken(res.ops[0]._id.toString())).then(token => this.getSignedToken(token).then(signedToken => {
      token.token = signedToken;
      return token;
    }))
  }

  updateToken(id, data) {
    if (!ObjectID.isValid(id)) {
      return Promise.reject('Invalid identifier');
    }
    const tokenObjectID = new ObjectID(id);
    const token = this.getValidDocumentForUpdate(id, data);

    return mongo.db.collection('tokens').updateOne({
      _id: tokenObjectID
    }, {$set: token}).then(res => this.getSingleToken(id));
  }

  deleteToken(id) {
    if (!ObjectID.isValid(id)) {
      return Promise.reject('Invalid identifier');
    }
    const tokenObjectID = new ObjectID(id);
    return mongo.db.collection('tokens').updateOne({
      _id: tokenObjectID
    }, {
      $set: {
        is_revoked: true,
        date_created: new Date()
      }
    }).then(res => {
      cache.del(BLACKLIST_CACHE_KEY);
    });
  }

  checkTokenEmailUnique(email) {
    if(email && email.length > 0){
      return mongo.db.collection('tokens').count({email: email, is_revoked: false}).then(count => count === 0
        ? email
        : Promise.reject('Token email must be unique'));
    } else {
      return Promise.resolve(email);
    }
  }

  getValidDocumentForInsert(data) {
    const email = parse.getString(data.email);
    return this.checkTokenEmailUnique(email).then(email => {
      let token = {
        is_revoked: false,
        date_created: new Date()
      }

      token.name = parse.getString(data.name);
      if(email && email.length > 0){
        token.email = email.toLowerCase();
      }
      token.scopes = parse.getArrayIfValid(data.scopes);
      token.expiration = parse.getNumberIfPositive(data.expiration);

      return token;
    })
  }

  getValidDocumentForUpdate(id, data) {
    if (Object.keys(data).length === 0) {
      return new Error('Required fields are missing');
    }

    let token = {
      'date_updated': new Date()
    }

    if (data.name !== undefined) {
      token.name = parse.getString(data.name);
    }

    if (data.expiration !== undefined) {
      token.expiration = parse.getNumberIfPositive(data.expiration);
    }

    return token;
  }

  changeProperties(item) {
    if (item) {
      item.id = item._id.toString();
      delete item._id;
      delete item.is_revoked;
    }

    return item;
  }

  getSignedToken(token) {
    return new Promise((resolve, reject) => {
      const jwtOptions = {};

      let payload = {
        scopes: token.scopes,
        jti: token.id
      }

      if (token.email && token.email.length > 0) {
        payload.email = token.email.toLowerCase()
      }

      if (token.expiration) {
        // convert hour to sec
        jwtOptions.expiresIn = token.expiration * 60 * 60;
      }

      jwt.sign(payload, settings.jwtSecretKey, jwtOptions, (err, token) => {
        if (err) {
          reject(err)
        } else {
          resolve(token)
        }
      });
    })
  }

  getDashboardSigninUrl(email) {
    winston.info(`called in dashboard sign in : ${email}`);
    return SettingsService.getSettings().then(generalSettings =>
      this.getSingleTokenByEmail(email).then(token => {
        if(token) {
          return this.getSignedToken(token).then(signedToken => {
            const loginUrl = url.resolve(generalSettings.domain, settings.adminLoginUrl);
            return `${loginUrl}?token=${signedToken}`;
          })
        } else {
          return null;
        }
      })
    )
  }

  getIP(req) {
    let ip = req.get('x-forwarded-for') || req.ip;

    if(ip && ip.includes(', ')) {
      ip = ip.split(', ')[0];
    }

    if(ip && ip.includes('::ffff:')) {
      ip = ip.replace('::ffff:', '');
    }

    if(ip === '::1'){
      ip = 'env-0287497.mj.milesweb.cloud';
    }

    return ip;
  }

  getTextFromHandlebars(text, context) {
    const template = handlebars.compile(text, { noEscape: true });
    return template(context);
  }

  getSigninMailSubject() {
    return 'New sign-in from {{from}}';
  }

  getSigninMailBody() {
    return `<div style="color: #202020; line-height: 1.5;">
      Your email address {{email}} was just used to request<br />a sign in email to {{domain}} dashboard.
      <div style="padding: 60px 0px;"><a href="{{link}}" style="background-color: #3f51b5; color: #ffffff; padding: 12px 26px; font-size: 18px; border-radius: 28px; text-decoration: none;">Click here to sign in</a></div>
      <b>Request from</b>
      <div style="color: #727272; padding: 0 0 20px 0;">{{requestFrom}}</div>
      If this was not you, you can safely ignore this email.<br /><br />
      Best,<br />
      Cezerin Robot`;
  }

  async sendDashboardSigninUrl(req) {
    const email = req.body.email;
    const userAgent = uaParser(req.get('user-agent'));
    const country = req.get('cf-ipcountry') || '';
    const ip = this.getIP(req);
    const date = moment(new Date()).format('dddd, MMMM DD, YYYY h:mm A');
    const link = await this.getDashboardSigninUrl(email);

    if(link) {
      const linkObj = url.parse(link);
      const domain = `${linkObj.protocol}//${linkObj.host}`;
      const device = userAgent.device.vendor ? userAgent.device.vendor + ' ' + userAgent.device.model + ', ' : '';
      const requestFrom = `${device}${userAgent.os.name}, ${userAgent.browser.name}<br />
      ${date}<br />
      IP: ${ip}<br />
      ${country}`;

      const message = {
        to: email,
        subject: this.getTextFromHandlebars(this.getSigninMailSubject(), { from: userAgent.os.name }),
        html: this.getTextFromHandlebars(this.getSigninMailBody(), { link, email, domain, requestFrom })
      };
      const emailSent = await mailer.send(message);
      return { sent: emailSent, error: null };
    } else {
      return { sent: false, error: 'Access Denied' };
    }
  }
}

module.exports = new SecurityTokensService();
