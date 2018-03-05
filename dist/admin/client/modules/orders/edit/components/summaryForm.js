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

var _api = require('lib/api');

var _api2 = _interopRequireDefault(_api);

var _text = require('lib/text');

var _text2 = _interopRequireDefault(_text);

var _style = require('./style.css');

var _style2 = _interopRequireDefault(_style);

var _Divider = require('material-ui/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var validate = function validate(values) {
  var errors = {};
  var requiredFields = [];

  requiredFields.map(function (field) {
    if (values && !values[field]) {
      errors[field] = _text2.default.errors_required;
    }
  });

  return errors;
};

var SummaryForm = function (_React$Component) {
  _inherits(SummaryForm, _React$Component);

  function SummaryForm(props) {
    _classCallCheck(this, SummaryForm);

    var _this = _possibleConstructorReturn(this, (SummaryForm.__proto__ || Object.getPrototypeOf(SummaryForm)).call(this, props));

    _this.fetchData = function (orderId) {
      var filter = {
        order_id: orderId
      };

      _api2.default.orderStatuses.list().then(function (_ref) {
        var status = _ref.status,
            json = _ref.json;

        _this.setState({ orderStatuses: json });
      });

      _api2.default.shippingMethods.list(filter).then(function (_ref2) {
        var status = _ref2.status,
            json = _ref2.json;

        _this.setState({ shippingMethods: json });
      });

      _api2.default.paymentMethods.list(filter).then(function (_ref3) {
        var status = _ref3.status,
            json = _ref3.json;

        _this.setState({ paymentMethods: json });
      });
    };

    _this.state = {
      shippingMethods: [],
      paymentMethods: [],
      orderStatuses: []
    };
    return _this;
  }

  _createClass(SummaryForm, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.fetchData(this.props.initialValues.id);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          handleSubmit = _props.handleSubmit,
          pristine = _props.pristine,
          submitting = _props.submitting,
          initialValues = _props.initialValues,
          onCancel = _props.onCancel;


      var statusItems = this.state.orderStatuses.map(function (item, index) {
        return _react2.default.createElement(_MenuItem2.default, { key: index, value: item.id, primaryText: item.name });
      });
      var shippingItems = this.state.shippingMethods.map(function (item, index) {
        return _react2.default.createElement(_MenuItem2.default, { key: index, value: item.id, primaryText: item.name });
      });
      var paymentItems = this.state.paymentMethods.map(function (item, index) {
        return _react2.default.createElement(_MenuItem2.default, { key: index, value: item.id, primaryText: item.name });
      });

      statusItems.push(_react2.default.createElement(_MenuItem2.default, { key: 'none', value: null, primaryText: _text2.default.noOrderStatus }));

      return _react2.default.createElement(
        'form',
        { onSubmit: handleSubmit, style: {
            display: 'initial',
            width: '100%'
          } },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _reduxForm.Field,
            { component: _reduxFormMaterialUi.SelectField, fullWidth: true, name: 'status_id', floatingLabelText: _text2.default.orderStatus },
            statusItems
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_reduxForm.Field, { component: _reduxFormMaterialUi.TextField, fullWidth: true, name: 'tracking_number', floatingLabelText: _text2.default.trackingNumber })
          ),
          _react2.default.createElement(
            _reduxForm.Field,
            { component: _reduxFormMaterialUi.SelectField, fullWidth: true, name: 'shipping_method_id', floatingLabelText: _text2.default.shippingMethod },
            shippingItems
          ),
          _react2.default.createElement(
            _reduxForm.Field,
            { component: _reduxFormMaterialUi.SelectField, fullWidth: true, name: 'payment_method_id', floatingLabelText: _text2.default.paymentsMethod },
            paymentItems
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_reduxForm.Field, { component: _reduxFormMaterialUi.TextField, fullWidth: true, name: 'comments', floatingLabelText: _text2.default.customerComment })
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_reduxForm.Field, { component: _reduxFormMaterialUi.TextField, fullWidth: true, name: 'note', floatingLabelText: _text2.default.note })
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_reduxForm.Field, { component: _reduxFormMaterialUi.TextField, fullWidth: true, name: 'email', floatingLabelText: _text2.default.email })
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_reduxForm.Field, { component: _reduxFormMaterialUi.TextField, fullWidth: true, name: 'mobile', floatingLabelText: _text2.default.mobile })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: _style2.default.shippingButtons },
          _react2.default.createElement(_FlatButton2.default, {
            label: _text2.default.cancel,
            onClick: onCancel
          }),
          _react2.default.createElement(_FlatButton2.default, {
            label: _text2.default.save,
            primary: true,
            type: 'submit',
            style: { marginLeft: 12 },
            disabled: pristine || submitting
          })
        )
      );
    }
  }]);

  return SummaryForm;
}(_react2.default.Component);

exports.default = (0, _reduxForm.reduxForm)({ form: 'SummaryForm', validate: validate, enableReinitialize: true })(SummaryForm);