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

var _helper = require('lib/helper');

var helper = _interopRequireWildcard(_helper);

var _style = require('./style.css');

var _style2 = _interopRequireDefault(_style);

var _shippingAddressForm = require('./shippingAddressForm.js');

var _shippingAddressForm2 = _interopRequireDefault(_shippingAddressForm);

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _Divider = require('material-ui/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _Dialog = require('material-ui/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getShippingFieldLabel = function getShippingFieldLabel(_ref) {
  var label = _ref.label,
      key = _ref.key;

  return label && label.length > 0 ? label : helper.getOrderFieldLabelByKey(key);
};

var ShippingFields = function ShippingFields(_ref2) {
  var order = _ref2.order,
      shippingMethod = _ref2.shippingMethod;

  var rows = null;
  if (shippingMethod && shippingMethod.fields && shippingMethod.fields.length > 0) {
    rows = shippingMethod.fields.map(function (field, index) {
      var fieldLabel = getShippingFieldLabel(field);
      var fieldValue = order.shipping_address[field.key];

      return _react2.default.createElement(ShippingFieldDiv, { key: index, label: fieldLabel, value: fieldValue });
    });
  }

  return _react2.default.createElement(
    'div',
    null,
    rows
  );
};

var ShippingFieldDiv = function ShippingFieldDiv(_ref3) {
  var label = _ref3.label,
      value = _ref3.value;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'label',
      null,
      label,
      ': '
    ),
    value
  );
};

var ShippingAddress = function ShippingAddress(_ref4) {
  var order = _ref4.order,
      settings = _ref4.settings;

  var address = order.shipping_address;
  var shippingMethod = order.shipping_method_details;

  return _react2.default.createElement(
    'div',
    { className: _style2.default.address, style: { marginBottom: 20 } },
    _react2.default.createElement(ShippingFields, { order: order, shippingMethod: shippingMethod }),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'label',
        null,
        _text2.default.city,
        ': '
      ),
      address.city,
      address.state && address.state.length > 0 ? ', ' + address.state : '',
      address.postal_code && address.postal_code.length > 0 ? ', ' + address.postal_code : ''
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'label',
        null,
        _text2.default.country,
        ': '
      ),
      address.country
    )
  );
};

var BillingAddress = function BillingAddress(_ref5) {
  var address = _ref5.address,
      settings = _ref5.settings;

  var billinsAddressIsEmpty = address.address1 === '' && address.address2 === '' && address.city === '' && address.company === '' && address.country === '' && address.full_name === '' && address.phone === '' && address.state === '' && address.tax_number === '' && address.postal_code === '';

  if (billinsAddressIsEmpty && settings.hide_billing_address) {
    return null;
  } else if (billinsAddressIsEmpty && !settings.hide_billing_address) {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_Divider2.default, { style: {
          marginTop: 30,
          marginBottom: 30,
          marginLeft: -30,
          marginRight: -30
        } }),
      _react2.default.createElement(
        'div',
        { style: { paddingBottom: 16, paddingTop: 0 } },
        _text2.default.billingAddress
      ),
      _react2.default.createElement(
        'div',
        { className: _style2.default.address },
        _react2.default.createElement(
          'label',
          null,
          _text2.default.sameAsShipping
        )
      )
    );
  } else {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_Divider2.default, { style: {
          marginTop: 30,
          marginBottom: 30,
          marginLeft: -30,
          marginRight: -30
        } }),
      _react2.default.createElement(
        'div',
        { style: { paddingBottom: 16, paddingTop: 0 } },
        _text2.default.billingAddress
      ),
      _react2.default.createElement(
        'div',
        { className: _style2.default.address },
        _react2.default.createElement(
          'div',
          null,
          address.full_name
        ),
        _react2.default.createElement(
          'div',
          null,
          address.company
        ),
        _react2.default.createElement(
          'div',
          null,
          address.address1
        ),
        _react2.default.createElement(
          'div',
          null,
          address.address2
        ),
        _react2.default.createElement(
          'div',
          null,
          address.city,
          ', ',
          address.state && address.state.length > 0 ? address.state + ', ' : '',
          address.postal_code
        ),
        _react2.default.createElement(
          'div',
          null,
          address.country
        ),
        _react2.default.createElement(
          'div',
          null,
          address.phone
        )
      )
    );
  }
};

var OrderCustomer = function (_React$Component) {
  _inherits(OrderCustomer, _React$Component);

  function OrderCustomer(props) {
    _classCallCheck(this, OrderCustomer);

    var _this = _possibleConstructorReturn(this, (OrderCustomer.__proto__ || Object.getPrototypeOf(OrderCustomer)).call(this, props));

    _this.showShippingEdit = function () {
      _this.setState({ openShippingEdit: true });
    };

    _this.hideShippingEdit = function () {
      _this.setState({ openShippingEdit: false });
    };

    _this.saveShippingEdit = function (address) {
      _this.props.onShippingAddressUpdate(address);
      _this.hideShippingEdit();
    };

    _this.state = {
      openShippingEdit: false
    };
    return _this;
  }

  _createClass(OrderCustomer, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          order = _props.order,
          settings = _props.settings;


      var allowEdit = order.closed === false && order.cancelled === false;
      var mapAddress = order.shipping_address.address1 + ' ' + order.shipping_address.city + ' ' + order.shipping_address.state + ' ' + order.shipping_address.postal_code;
      mapAddress = mapAddress.replace(/ /g, '+');
      var mapUrl = 'https://www.google.com/maps/place/' + mapAddress;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { style: { margin: 20, color: 'rgba(0, 0, 0, 0.52)' } },
          _text2.default.customer
        ),
        _react2.default.createElement(
          _Paper2.default,
          { className: 'paper-box', zDepth: 1 },
          _react2.default.createElement(
            'div',
            { className: _style2.default.innerBox },
            _react2.default.createElement(
              'div',
              { className: _style2.default.address },
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { to: '/admin/customer/' + order.customer_id, className: _style2.default.link },
                  order.customer && order.customer.full_name
                )
              ),
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  'a',
                  { href: "MailTo:" + order.email, className: _style2.default.link },
                  order.email
                )
              ),
              _react2.default.createElement(
                'div',
                null,
                order.mobile
              )
            ),
            _react2.default.createElement(_Divider2.default, { style: {
                marginTop: 30,
                marginBottom: 30,
                marginLeft: -30,
                marginRight: -30
              } }),
            _react2.default.createElement(
              'div',
              { style: { paddingBottom: 16, paddingTop: 0 } },
              _text2.default.shippingAddress
            ),
            _react2.default.createElement(ShippingAddress, { order: order, settings: settings }),
            allowEdit && _react2.default.createElement(_RaisedButton2.default, { label: _text2.default.edit, style: { marginRight: 15 }, onClick: this.showShippingEdit }),
            _react2.default.createElement(
              'a',
              { href: mapUrl, target: '_blank' },
              _react2.default.createElement(_FlatButton2.default, { label: 'View map' })
            ),
            _react2.default.createElement(BillingAddress, { address: order.billing_address, settings: settings }),
            _react2.default.createElement(
              _Dialog2.default,
              {
                title: _text2.default.shippingAddress,
                modal: false,
                open: this.state.openShippingEdit,
                onRequestClose: this.hideShippingEdit,
                autoScrollBodyContent: true,
                contentStyle: { width: 600 }
              },
              _react2.default.createElement(_shippingAddressForm2.default, { initialValues: order.shipping_address, onCancel: this.hideShippingEdit, onSubmit: this.saveShippingEdit, shippingMethod: order.shipping_method_details })
            )
          )
        )
      );
    }
  }]);

  return OrderCustomer;
}(_react2.default.Component);

exports.default = OrderCustomer;