'use strict';

var _cezerinClient = require('cezerin-client');

var _cezerinClient2 = _interopRequireDefault(_cezerinClient);

var _settings = require('./settings');

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var api = null;
var dashboardToken = localStorage.getItem('dashboard_token');
var webstoreToken = localStorage.getItem('webstore_token');

var DEVELOPER_MODE = _settings2.default.developerMode === true;

if (dashboardToken || DEVELOPER_MODE === true) {
  var _api = new _cezerinClient2.default({
    apiBaseUrl: _settings2.default.apiBaseUrl || '/api/v1',
    apiToken: dashboardToken,
    webstoreToken: webstoreToken
  });
}

module.exports = api;