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
  key: 'google-analytics',
  name: 'Google Analytics',
  coverUrl: '/admin-assets/images/apps/google_analytics.png',
  description: 'Google Analytics gives you the digital analytics tools you need to analyze data from all touchpoints in one place, for a deeper understanding of the customer experience.\n  <p>This App logs page views and Enhanced ecommerce events:</p>\n  <ol>\n    <li>Page view</li>\n    <li>Product view</li>\n    <li>Search</li>\n    <li>Add to cart</li>\n    <li>Remove from cart</li>\n    <li>Begin checkout</li>\n    <li>Set shipping method</li>\n    <li>Set payment method</li>\n    <li>Purchase</li>\n  </ol>\n  <p>This App will add gtag.js to your site. The Global Site Tag (gtag.js) provides a framework for streamlined web page tagging \u2013 giving you better control while making implementation easier. Using gtag.js lets you benefit from the latest tracking features and integrations as they become available.</p>'
};

var GTAG_CODE = '<!-- Global site tag (gtag.js) - Google Analytics -->\n<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>\n<script>\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag(\'js\', new Date());\n  gtag(\'config\', \'GA_TRACKING_ID\');\n</script>';

var App = exports.App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.handleTrackingIdChange = function (event) {
      _this.setState({
        trackingId: event.target.value
      });
    };

    _this.fetchSettings = function () {
      _api2.default.apps.settings.retrieve('google-analytics').then(function (_ref) {
        var status = _ref.status,
            json = _ref.json;

        var appSettings = json;
        if (appSettings) {
          _this.setState({ trackingId: appSettings.GA_TRACKING_ID });
        }
      }).catch(function (error) {
        console.log(error);
      });
    };

    _this.updateSettings = function () {
      var trackingId = _this.state.trackingId;

      var gtag = trackingId && trackingId.length > 0 ? GTAG_CODE.replace(/GA_TRACKING_ID/g, trackingId) : '';

      _api2.default.apps.settings.update('google-analytics', { GA_TRACKING_ID: trackingId });
      _api2.default.theme.placeholders.update('google-analytics', {
        place: 'head_start',
        value: gtag
      });
    };

    _this.state = {
      trackingId: ''
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
          'Enter your Google Analytics Tracking ID to track page views and other events.'
        ),
        _react2.default.createElement(_TextField2.default, {
          type: 'text',
          value: this.state.trackingId,
          onChange: this.handleTrackingIdChange,
          floatingLabelText: 'Tracking ID',
          hintText: 'UA-XXXXXXXX-X'
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