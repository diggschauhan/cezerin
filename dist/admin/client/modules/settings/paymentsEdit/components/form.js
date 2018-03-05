'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reduxForm = require('redux-form');

var _reduxFormMaterialUi = require('redux-form-material-ui');

var _form = require('modules/shared/form');

var _paymentGateway = require('modules/settings/paymentGateway');

var _paymentGateway2 = _interopRequireDefault(_paymentGateway);

var _availablePaymentGateways = require('modules/settings/paymentGateway/availablePaymentGateways');

var _selectShipping = require('./selectShipping.js');

var _selectShipping2 = _interopRequireDefault(_selectShipping);

var _text = require('lib/text');

var _text2 = _interopRequireDefault(_text);

var _style = require('./style.css');

var _style2 = _interopRequireDefault(_style);

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _Divider = require('material-ui/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _List = require('material-ui/List');

var _Checkbox = require('material-ui/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var validate = function validate(values) {
  var errors = {};
  var requiredFields = ['name'];

  requiredFields.map(function (field) {
    if (values && !values[field]) {
      errors[field] = _text2.default.errors_required;
    }
  });

  return errors;
};

var EditPaymentMethodForm = function (_React$Component) {
  _inherits(EditPaymentMethodForm, _React$Component);

  function EditPaymentMethodForm(props) {
    _classCallCheck(this, EditPaymentMethodForm);

    var _this = _possibleConstructorReturn(this, (EditPaymentMethodForm.__proto__ || Object.getPrototypeOf(EditPaymentMethodForm)).call(this, props));

    _this.onGatewayChange = function (gateway) {
      _this.setState({
        gateway: gateway
      });
    };

    _this.state = {
      gateway: null
    };
    return _this;
  }

  _createClass(EditPaymentMethodForm, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.onLoad();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.initialValues !== this.props.initialValues) {
        this.setState({
          gateway: nextProps.initialValues.gateway
        });
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
          initialValues = _props.initialValues,
          shippingMethods = _props.shippingMethods,
          methodId = _props.methodId,
          settings = _props.settings;

      var isAdd = methodId === null || methodId === undefined;
      var paymentGateways = [];
      paymentGateways.push(_react2.default.createElement(_MenuItem2.default, { value: '', key: 'none', primaryText: 'None' }));
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = _availablePaymentGateways.AVAILABLE_PAYMENT_GATEWAYS[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var gateway = _step.value;

          paymentGateways.push(_react2.default.createElement(_MenuItem2.default, { value: gateway.key, key: gateway.key, primaryText: gateway.name }));
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return _react2.default.createElement(
        'form',
        { onSubmit: handleSubmit },
        _react2.default.createElement(
          _Paper2.default,
          { className: 'paper-box', zDepth: 1 },
          _react2.default.createElement(
            'div',
            { className: _style2.default.innerBox },
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'col-xs-12 col-sm-4' },
                _react2.default.createElement(
                  'div',
                  { className: 'blue-title' },
                  _text2.default.paymentGateway
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-xs-12 col-sm-8' },
                _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(
                    _reduxForm.Field,
                    { component: _reduxFormMaterialUi.SelectField, autoWidth: true, fullWidth: true, name: 'gateway', floatingLabelFixed: true, floatingLabelText: _text2.default.paymentGateway, onChange: function onChange(event, currentValue, prevValue) {
                        _this2.onGatewayChange(currentValue);
                      } },
                    paymentGateways
                  )
                ),
                _react2.default.createElement(_paymentGateway2.default, { gateway: this.state.gateway })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'row', style: { marginTop: '40px' } },
              _react2.default.createElement(
                'div',
                { className: 'col-xs-12 col-sm-4' },
                _react2.default.createElement(
                  'div',
                  { className: 'blue-title' },
                  _text2.default.description
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-xs-12 col-sm-8' },
                _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(_reduxForm.Field, { component: _reduxFormMaterialUi.TextField, fullWidth: true, name: 'name', floatingLabelText: _text2.default.settings_paymentMethodName })
                ),
                _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(_reduxForm.Field, { component: _reduxFormMaterialUi.TextField, fullWidth: true, name: 'description', multiLine: true, floatingLabelText: _text2.default.description })
                ),
                _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(_reduxForm.Field, { component: _form.CustomToggle, name: 'enabled', label: _text2.default.enabled, style: { paddingTop: 16, paddingBottom: 20 } })
                ),
                _react2.default.createElement(_Divider2.default, null)
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'row', style: { marginTop: '40px' } },
              _react2.default.createElement(
                'div',
                { className: 'col-xs-12 col-sm-4' },
                _react2.default.createElement(
                  'div',
                  { className: 'blue-title' },
                  _text2.default.settings_conditions
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-xs-12 col-sm-8' },
                _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(_reduxForm.Field, { component: _reduxFormMaterialUi.TextField, fullWidth: true, name: 'conditions.countries', floatingLabelText: _text2.default.settings_countries, hintText: 'US,UK,AU,SG' })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'row' },
                  _react2.default.createElement(
                    'div',
                    { className: 'col-xs-6' },
                    _react2.default.createElement(_reduxForm.Field, { component: _reduxFormMaterialUi.TextField, name: 'conditions.subtotal_min', type: 'number', fullWidth: true, floatingLabelText: _text2.default.settings_minSubtotal + (' (' + settings.currency_symbol + ')') })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'col-xs-6' },
                    _react2.default.createElement(_reduxForm.Field, { component: _reduxFormMaterialUi.TextField, name: 'conditions.subtotal_max', type: 'number', fullWidth: true, floatingLabelText: _text2.default.settings_maxSubtotal + (' (' + settings.currency_symbol + ')') })
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'gray-title', style: { marginTop: '30px' } },
                  _text2.default.settings_onlyShippingMethods
                ),
                _react2.default.createElement(_reduxForm.Field, { name: 'conditions.shipping_method_ids', component: _selectShipping2.default, shippingMethods: shippingMethods })
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'buttons-box' },
            _react2.default.createElement(_RaisedButton2.default, { type: 'submit', label: isAdd ? _text2.default.add : _text2.default.save, primary: true, className: _style2.default.button, disabled: pristine || submitting })
          )
        )
      );
    }
  }]);

  return EditPaymentMethodForm;
}(_react2.default.Component);

exports.default = (0, _reduxForm.reduxForm)({ form: 'EditPaymentMethodForm', validate: validate, enableReinitialize: true })(EditPaymentMethodForm);