'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reduxForm = require('redux-form');

var _reduxFormMaterialUi = require('redux-form-material-ui');

var _gatewaySettings = require('./gatewaySettings.js');

var _gatewaySettings2 = _interopRequireDefault(_gatewaySettings);

var _availablePaymentGateways = require('../availablePaymentGateways');

var _text = require('lib/text');

var _text2 = _interopRequireDefault(_text);

var _style = require('./style.css');

var _style2 = _interopRequireDefault(_style);

var _Dialog = require('material-ui/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EditPaymentGatewayForm = function (_React$Component) {
  _inherits(EditPaymentGatewayForm, _React$Component);

  function EditPaymentGatewayForm(props) {
    _classCallCheck(this, EditPaymentGatewayForm);

    var _this = _possibleConstructorReturn(this, (EditPaymentGatewayForm.__proto__ || Object.getPrototypeOf(EditPaymentGatewayForm)).call(this, props));

    _this.handleOpen = function () {
      _this.setState({ open: true });
    };

    _this.handleClose = function () {
      _this.setState({ open: false });
    };

    _this.state = {
      open: false
    };
    return _this;
  }

  _createClass(EditPaymentGatewayForm, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.onLoad();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.gateway !== this.props.gateway) {
        this.props.onLoad(nextProps.gateway);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          handleSubmit = _props.handleSubmit,
          pristine = _props.pristine,
          submitting = _props.submitting,
          initialValues = _props.initialValues;

      var gatewayDetails = _availablePaymentGateways.AVAILABLE_PAYMENT_GATEWAYS.find(function (item) {
        return item.key === _this2.props.gateway;
      });

      if (this.props.gateway && this.props.gateway.length > 0) {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_RaisedButton2.default, { onClick: this.handleOpen, label: _text2.default.drawer_settings, style: { margin: '15px 0 30px 0' } }),
          _react2.default.createElement(
            _Dialog2.default,
            {
              title: gatewayDetails.name,
              modal: false,
              open: this.state.open,
              autoScrollBodyContent: true,
              contentStyle: { width: 600 },
              onRequestClose: this.handleClose
            },
            _react2.default.createElement(
              'form',
              { onSubmit: handleSubmit, style: { display: 'initial', width: '100%' } },
              _react2.default.createElement(_gatewaySettings2.default, { gateway: this.props.gateway }),
              _react2.default.createElement(
                'div',
                { className: _style2.default.buttons },
                _react2.default.createElement(_FlatButton2.default, {
                  label: _text2.default.cancel,
                  onClick: this.handleClose
                }),
                _react2.default.createElement(_FlatButton2.default, {
                  label: _text2.default.save,
                  primary: true,
                  type: 'submit',
                  onClick: this.handleClose,
                  style: { marginLeft: 12 },
                  disabled: pristine || submitting
                })
              )
            )
          )
        );
      } else {
        return null;
      }
    }
  }]);

  return EditPaymentGatewayForm;
}(_react2.default.Component);

exports.default = (0, _reduxForm.reduxForm)({ form: 'EditPaymentGatewayForm', enableReinitialize: true })(EditPaymentGatewayForm);