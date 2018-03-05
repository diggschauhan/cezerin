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
  key: 'facebook-sdk',
  name: 'Facebook SDK',
  coverUrl: '/admin-assets/images/apps/facebook.png',
  description: 'The Facebook SDK for JavaScript provides a rich set of client-side functionality that:\n  <ol>\n    <li>Enables you to use the Like Button and other Social Plugins on your site.</li>\n    <li>Enables you to use Facebook Login to lower the barrier for people to sign up on your site.</li>\n    <li>Makes it easy to call into Facebook\'s Graph API.</li>\n    <li>Launch Dialogs that let people perform various actions like sharing stories.</li>\n    <li>Facilitates communication when you\'re building a game or an app tab on Facebook.</li>\n  </ol>\n  <p>The Facebook SDK for JavaScript doesn\'t have any standalone files that need to be downloaded or installed, instead you simply need to include a short piece of regular JavaScript in your HTML that will asynchronously load the SDK into your pages. The async load means that it does not block loading other elements of your page.</p>'
};

var FACEBOOK_CODE = '<script>\n  window.fbAsyncInit = function() {\n    FB.init({\n      appId            : \'YOUR_APP_ID\',\n      autoLogAppEvents : true,\n      xfbml            : true,\n      version          : \'v2.11\'\n    });\n  };\n\n  (function(d, s, id){\n     var js, fjs = d.getElementsByTagName(s)[0];\n     if (d.getElementById(id)) {return;}\n     js = d.createElement(s); js.id = id;\n     js.src = "https://connect.facebook.net/YOUR_LOCALE/sdk.js";\n     fjs.parentNode.insertBefore(js, fjs);\n   }(document, \'script\', \'facebook-jssdk\'));\n</script>';

var App = exports.App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.handleAppIdChange = function (event) {
      _this.setState({ appId: event.target.value });
    };

    _this.handleLocaleChange = function (event) {
      _this.setState({ locale: event.target.value });
    };

    _this.fetchSettings = function () {
      _api2.default.apps.settings.retrieve('facebook-sdk').then(function (_ref) {
        var status = _ref.status,
            json = _ref.json;

        var appSettings = json;
        if (appSettings) {
          _this.setState({
            appId: appSettings.appId,
            locale: appSettings.locale
          });
        }
      }).catch(function (error) {
        console.log(error);
      });
    };

    _this.updateSettings = function () {
      var _this$state = _this.state,
          appId = _this$state.appId,
          locale = _this$state.locale;

      var htmlCode = appId && appId.length > 0 ? FACEBOOK_CODE.replace(/YOUR_APP_ID/g, appId).replace(/YOUR_LOCALE/g, locale) : '';

      _api2.default.apps.settings.update('facebook-sdk', { appId: appId, locale: locale });
      _api2.default.theme.placeholders.update('facebook-sdk', {
        place: 'body_start',
        value: htmlCode
      });
    };

    _this.state = {
      appId: '',
      locale: 'en_US'
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
        _react2.default.createElement(
          'div',
          null,
          'You can find App ID using the Facebook App Dashboard.'
        ),
        _react2.default.createElement(_TextField2.default, {
          type: 'text',
          fullWidth: true,
          value: this.state.appId,
          onChange: this.handleAppIdChange,
          floatingLabelText: 'App ID'
        }),
        _react2.default.createElement(_TextField2.default, {
          type: 'text',
          fullWidth: true,
          value: this.state.locale,
          onChange: this.handleLocaleChange,
          floatingLabelText: 'Locale',
          hintText: 'en_US'
        }),
        _react2.default.createElement(
          'div',
          { style: { textAlign: 'right' } },
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