'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _text = require('lib/text');

var _text2 = _interopRequireDefault(_text);

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _Divider = require('material-ui/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _FontIcon = require('material-ui/FontIcon');

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _List = require('material-ui/List');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CheckoutFieldItem = function CheckoutFieldItem(_ref) {
  var name = _ref.name,
      status = _ref.status,
      path = _ref.path;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_Divider2.default, null),
    _react2.default.createElement(
      _reactRouterDom.Link,
      { to: '/admin/settings/checkout/fields/' + path, style: { textDecoration: 'none' } },
      _react2.default.createElement(_List.ListItem, {
        rightIcon: _react2.default.createElement(
          _FontIcon2.default,
          { className: 'material-icons' },
          'keyboard_arrow_right'
        ),
        primaryText: _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-6' },
            name
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-xs-6', style: { color: 'rgba(0, 0, 0, 0.4)' } },
            status
          )
        )
      })
    )
  );
};

var EmailSettings = function (_React$Component) {
  _inherits(EmailSettings, _React$Component);

  function EmailSettings(props) {
    _classCallCheck(this, EmailSettings);

    var _this = _possibleConstructorReturn(this, (EmailSettings.__proto__ || Object.getPrototypeOf(EmailSettings)).call(this, props));

    _this.getFieldStatus = function (fieldName) {
      var fields = _this.props.checkoutFields || [];
      var field = fields.find(function (item) {
        return item.name === fieldName;
      });
      var fieldStatus = field ? field.status : 'required';
      switch (fieldStatus) {
        case 'optional':
          return _text2.default.settings_fieldOptional;
          break;
        case 'hidden':
          return _text2.default.settings_fieldHidden;
          break;
        default:
          return _text2.default.settings_fieldRequired;
      }
    };

    return _this;
  }

  _createClass(EmailSettings, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.onLoad();
    }
  }, {
    key: 'render',
    value: function render() {
      var checkoutFields = this.props.checkoutFields;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { style: { margin: 20, color: 'rgba(0, 0, 0, 0.52)' } },
          _text2.default.settings_checkoutFields
        ),
        _react2.default.createElement(
          _Paper2.default,
          { className: 'paper-box', zDepth: 1 },
          _react2.default.createElement(
            'div',
            { style: { width: '100%' } },
            _react2.default.createElement(
              _List.List,
              { style: { padding: 0 } },
              _react2.default.createElement(CheckoutFieldItem, { name: _text2.default.email, status: this.getFieldStatus('email'), path: 'email' }),
              _react2.default.createElement(CheckoutFieldItem, { name: _text2.default.mobile, status: this.getFieldStatus('mobile'), path: 'mobile' }),
              _react2.default.createElement(CheckoutFieldItem, { name: _text2.default.country, status: this.getFieldStatus('country'), path: 'country' }),
              _react2.default.createElement(CheckoutFieldItem, { name: _text2.default.state, status: this.getFieldStatus('state'), path: 'state' }),
              _react2.default.createElement(CheckoutFieldItem, { name: _text2.default.city, status: this.getFieldStatus('city'), path: 'city' }),
              _react2.default.createElement(CheckoutFieldItem, { name: _text2.default.customerComment, status: this.getFieldStatus('comments'), path: 'comments' })
            )
          )
        )
      );
    }
  }]);

  return EmailSettings;
}(_react2.default.Component);

exports.default = EmailSettings;