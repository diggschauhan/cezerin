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
  key: 'facebook-customer-chat',
  name: 'Facebook Customer Chat',
  coverUrl: '/admin-assets/images/apps/messenger.png',
  description: '<p>The Messenger Platform\'s customer chat plugin allows you to integrate your Messenger experience directly into your website. This allows your customers to interact with your business anytime with the same personalized, rich-media experience they get in Messenger.</p>\n  <p><img src=\'/admin-assets/images/apps/facebook-customer-chat-plugin.png\' /></p>\n  <p>The customer chat plugin automatically loads recent chat history between the person and your business, meaning recent interactions with your business on messenger.com, in the Messenger app, or in the customer chat plugin on your website will be visible. This helps create a single experience for your customers, and enables you to continue the conversation even after they have left your webpage. No need to capture their information to follow up, just use the same conversation in Messenger.</p>\n  <p>To access your Facebook\'s Page ID:</p>\n  <ol>\n    <li>Open your Facebook page.</li>\n    <li>Click the About tab.</li>\n    <li>Scroll down to the bottom of the Page Info section.</li>\n    <li>Next to Facebook Page ID, you can find your page ID.</li>\n  </ol>'
};

var CHAT_CODE = '<div class="fb-customerchat" page_id="PAGE_ID" minimized="IS_MINIMIZED"></div>';

var App = exports.App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.handlePageIdChange = function (event) {
      _this.setState({ pageId: event.target.value });
    };

    _this.handleMinimizedChange = function (event) {
      _this.setState({ minimized: event.target.value });
    };

    _this.fetchSettings = function () {
      _api2.default.apps.settings.retrieve('facebook-customer-chat').then(function (_ref) {
        var status = _ref.status,
            json = _ref.json;

        var appSettings = json;
        if (appSettings) {
          _this.setState({
            pageId: appSettings.pageId,
            minimized: appSettings.minimized
          });
        }
      }).catch(function (error) {
        console.log(error);
      });
    };

    _this.updateSettings = function () {
      var _this$state = _this.state,
          pageId = _this$state.pageId,
          minimized = _this$state.minimized;

      var htmlCode = pageId && pageId.length > 0 ? CHAT_CODE.replace(/PAGE_ID/g, pageId).replace(/IS_MINIMIZED/g, minimized) : '';

      _api2.default.apps.settings.update('facebook-customer-chat', { pageId: pageId, minimized: minimized });
      _api2.default.theme.placeholders.update('facebook-customer-chat', {
        place: 'body_end',
        value: htmlCode
      });
    };

    _this.state = {
      pageId: '',
      minimized: 'false'
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
          fullWidth: true,
          value: this.state.pageId,
          onChange: this.handlePageIdChange,
          floatingLabelText: 'Page ID'
        }),
        _react2.default.createElement(_TextField2.default, {
          type: 'text',
          fullWidth: true,
          value: this.state.minimized,
          onChange: this.handleMinimizedChange,
          floatingLabelText: 'minimized',
          hintText: 'false'
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