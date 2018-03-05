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
  key: 'jivosite',
  name: 'JivoSite онлайн-консультант',
  coverUrl: '/admin-assets/images/apps/jivosite.png',
  description: 'JivoSite \u2013 \u0447\u0430\u0442 \u0434\u043B\u044F \u0441\u0430\u0439\u0442\u0430 \u0438 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442 \u0434\u043B\u044F \u043E\u0431\u0449\u0435\u043D\u0438\u044F \u0441 \u043A\u043B\u0438\u0435\u043D\u0442\u0430\u043C\u0438 \u0432 \u0441\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0445 \u0441\u0435\u0442\u044F\u0445, \u043C\u0435\u0441\u0441\u0435\u043D\u0434\u0436\u0435\u0440\u0430\u0445 \u0438 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0445 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F\u0445. \u0417\u0430\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0439\u0442\u0435 \u0431\u043E\u043B\u044C\u0448\u0435, \u043D\u0435 \u0443\u043F\u0443\u0441\u043A\u0430\u044F \u043D\u0438 \u043E\u0434\u043D\u043E\u0433\u043E \u043E\u0431\u0440\u0430\u0449\u0435\u043D\u0438\u044F.'
};

var App = exports.App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.handleChange = function (event) {
      _this.setState({
        code: event.target.value
      });
    };

    _this.fetchSettings = function () {
      _api2.default.apps.settings.retrieve('jivosite').then(function (_ref) {
        var status = _ref.status,
            json = _ref.json;

        var appSettings = json;
        if (appSettings) {
          _this.setState({ code: appSettings.code });
        }
      }).catch(function (error) {
        console.log(error);
      });
    };

    _this.updateSettings = function () {
      var code = _this.state.code;


      _api2.default.apps.settings.update('jivosite', { code: code });
      _api2.default.theme.placeholders.update('jivosite', {
        place: 'body_end',
        value: code
      });
    };

    _this.state = {
      code: ''
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
          '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0434 JivoSite'
        ),
        _react2.default.createElement(_TextField2.default, {
          type: 'text',
          multiLine: true,
          fullWidth: true,
          rows: 10,
          value: this.state.code,
          onChange: this.handleChange,
          floatingLabelText: '\u041A\u043E\u0434 \u0447\u0430\u0442\u0430 JivoSite',
          hintText: '<!-- BEGIN JIVOSITE CODE {literal} -->...'
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