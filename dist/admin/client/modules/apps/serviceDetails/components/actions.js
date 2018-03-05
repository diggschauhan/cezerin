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

var _api = require('lib/api');

var _api2 = _interopRequireDefault(_api);

var _style = require('./style.css');

var _style2 = _interopRequireDefault(_style);

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _Divider = require('material-ui/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _FontIcon = require('material-ui/FontIcon');

var _FontIcon2 = _interopRequireDefault(_FontIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ActionComponent = function (_React$Component) {
  _inherits(ActionComponent, _React$Component);

  function ActionComponent(props) {
    _classCallCheck(this, ActionComponent);

    var _this = _possibleConstructorReturn(this, (ActionComponent.__proto__ || Object.getPrototypeOf(ActionComponent)).call(this, props));

    _this.handleActionCall = function () {
      var _this$props = _this.props,
          action = _this$props.action,
          serviceId = _this$props.serviceId,
          fetchServiceLogs = _this$props.fetchServiceLogs;

      _this.setState({ loading: true });

      return _api2.default.webstore.services.actions.call(serviceId, action.id).then(function (_ref) {
        var status = _ref.status,
            json = _ref.json;

        _this.setState({ loading: false });
        fetchServiceLogs();
      }).catch(function (error) {
        alert(error);
        _this.setState({ loading: false });
        fetchServiceLogs();
      });
    };

    _this.state = {
      loading: false
    };
    return _this;
  }

  _createClass(ActionComponent, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          action = _props.action,
          serviceId = _props.serviceId;

      return _react2.default.createElement(
        'div',
        { className: _style2.default.action },
        _react2.default.createElement(
          'div',
          { className: 'row middle-xs' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-7', style: { fontSize: '14px' } },
            action.description
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-xs-5', style: { textAlign: 'right' } },
            _react2.default.createElement(_RaisedButton2.default, { label: action.name, primary: true, disabled: this.state.loading, onClick: this.handleActionCall })
          )
        )
      );
    }
  }]);

  return ActionComponent;
}(_react2.default.Component);

var ServiceActions = function ServiceActions(_ref2) {
  var actions = _ref2.actions,
      serviceId = _ref2.serviceId,
      fetchServiceLogs = _ref2.fetchServiceLogs;

  var buttons = actions.map(function (action, index) {
    return _react2.default.createElement(ActionComponent, { key: index, action: action, serviceId: serviceId, fetchServiceLogs: fetchServiceLogs });
  });

  return _react2.default.createElement(
    'div',
    { style: { maxWidth: 720, width: '100%' } },
    _react2.default.createElement(
      'div',
      { className: 'gray-title', style: { margin: '15px 0 15px 20px' } },
      _text2.default.serviceActions
    ),
    _react2.default.createElement(
      _Paper2.default,
      { className: 'paper-box', zDepth: 1 },
      _react2.default.createElement(
        'div',
        null,
        buttons
      )
    )
  );
};

exports.default = ServiceActions;