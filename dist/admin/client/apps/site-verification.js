'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = exports.Description = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _text = require('lib/text');

var _text2 = _interopRequireDefault(_text);

var _api = require('lib/api');

var _api2 = _interopRequireDefault(_api);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Description = exports.Description = {
  key: 'site-verification',
  name: 'Site Verification',
  coverUrl: '/admin-assets/images/apps/site_verification.png',
  description: 'Note that verifying your site with these services is not necessary in order for your site to be indexed by search engines. To use these advanced search engine tools and verify your site with a service, paste the HTML Tag code below.\n  <p>Supported verification services:</p>\n  <ol>\n    <li><a target="_blank" href="https://www.google.com/webmasters/tools/" rel="external noopener noreferrer">Google Search Console</a></li>\n    <li><a target="_blank" href="https://www.bing.com/webmaster/" rel="external noopener noreferrer">Bing Webmaster Center</a></li>\n    <li><a target="_blank" href="https://pinterest.com/website/verify/" rel="external noopener noreferrer">Pinterest Site Verification</a></li>\n    <li><a target="_blank" href="https://webmaster.yandex.com/sites/" rel="external noopener noreferrer">Yandex.Webmaster</a></li>\n  </ol>'
};

var GOOGLE_EXAMPLE = '<meta name="google-site-verification" content="1234" />';
var BING_EXAMPLE = '<meta name="msvalidate.01" content="1234" />';
var PINTEREST_EXAMPLE = '<meta name="p:domain_verify" content="1234" />';
var YANDEX_EXAMPLE = '<meta name="yandex-verification" content="1234" />';

var App = exports.App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.handleGoogleChange = function (event) {
      _this.setState({
        google: event.target.value
      });
    };

    _this.handleBingChange = function (event) {
      _this.setState({
        bing: event.target.value
      });
    };

    _this.handlePinterestChange = function (event) {
      _this.setState({
        pinterest: event.target.value
      });
    };

    _this.handleYandexChange = function (event) {
      _this.setState({
        yandex: event.target.value
      });
    };

    _this.fetchSettings = function () {
      _api2.default.apps.settings.retrieve('site-verification').then(function (_ref) {
        var status = _ref.status,
            json = _ref.json;

        var appSettings = json;
        if (appSettings) {
          _this.setState({
            google: appSettings.google,
            bing: appSettings.bing,
            pinterest: appSettings.pinterest,
            yandex: appSettings.yandex
          });
        }
      }).catch(function (error) {
        console.log(error);
      });
    };

    _this.updateSettings = function () {
      var _this$state = _this.state,
          google = _this$state.google,
          bing = _this$state.bing,
          pinterest = _this$state.pinterest,
          yandex = _this$state.yandex;

      var metaTags = [google, bing, pinterest, yandex].map(function (tag) {
        return tag && tag.length > 0 ? tag : null;
      }).filter(function (tag) {
        return tag !== null;
      }).join('\n');

      _api2.default.apps.settings.update('site-verification', {
        google: google,
        bing: bing,
        pinterest: pinterest,
        yandex: yandex
      });

      _api2.default.theme.placeholders.update('site-verification', {
        place: 'head_start',
        value: metaTags
      });
    };

    _this.state = {
      google: '',
      bing: '',
      pinterest: '',
      yandex: ''
    };
    return _this;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.fetchSettings();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_TextField2.default, {
          type: 'text',
          value: this.state.google,
          onChange: this.handleGoogleChange,
          floatingLabelText: 'Google',
          fullWidth: true,
          hintText: GOOGLE_EXAMPLE
        }),
        _react2.default.createElement(_TextField2.default, {
          type: 'text',
          value: this.state.bing,
          onChange: this.handleBingChange,
          floatingLabelText: 'Bing',
          fullWidth: true,
          hintText: BING_EXAMPLE
        }),
        _react2.default.createElement(_TextField2.default, {
          type: 'text',
          value: this.state.pinterest,
          onChange: this.handlePinterestChange,
          floatingLabelText: 'Pinterest',
          fullWidth: true,
          hintText: PINTEREST_EXAMPLE
        }),
        _react2.default.createElement(_TextField2.default, {
          type: 'text',
          value: this.state.yandex,
          onChange: this.handleYandexChange,
          floatingLabelText: 'Yandex',
          fullWidth: true,
          hintText: YANDEX_EXAMPLE
        }),
        _react2.default.createElement(
          'div',
          { style: { textAlign: 'right', marginTop: 20 } },
          _react2.default.createElement(_RaisedButton2.default, {
            label: _text2.default.save,
            primary: true,
            disabled: false,
            onClick: this.updateSettings
          })
        )
      );
    }
  }]);

  return App;
}(_react2.default.Component);