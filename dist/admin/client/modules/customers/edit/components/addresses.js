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

var _addressForm = require('./addressForm.js');

var _addressForm2 = _interopRequireDefault(_addressForm);

var _confirmation = require('modules/shared/confirmation');

var _confirmation2 = _interopRequireDefault(_confirmation);

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _Divider = require('material-ui/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _FontIcon = require('material-ui/FontIcon');

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _IconMenu = require('material-ui/IconMenu');

var _IconMenu2 = _interopRequireDefault(_IconMenu);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _SelectField = require('material-ui/SelectField');

var _SelectField2 = _interopRequireDefault(_SelectField);

var _Dialog = require('material-ui/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Address = function Address(_ref) {
  var address = _ref.address;

  return _react2.default.createElement(
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
  );
};

var iconButtonElement = _react2.default.createElement(
  _IconButton2.default,
  { touch: true },
  _react2.default.createElement(
    _FontIcon2.default,
    { color: 'rgb(189, 189, 189)', className: 'material-icons' },
    'more_vert'
  )
);

var CustomerAddress = function (_React$Component) {
  _inherits(CustomerAddress, _React$Component);

  function CustomerAddress(props) {
    _classCallCheck(this, CustomerAddress);

    var _this = _possibleConstructorReturn(this, (CustomerAddress.__proto__ || Object.getPrototypeOf(CustomerAddress)).call(this, props));

    _this.showEditForm = function () {
      _this.setState({ openEdit: true });
    };

    _this.hideEditForm = function () {
      _this.setState({ openEdit: false });
    };

    _this.handleEditForm = function (address) {
      _this.props.onUpdateAddress(address);
      _this.hideEditForm();
    };

    _this.showDelete = function () {
      _this.setState({ openDelete: true });
    };

    _this.hideDelete = function () {
      _this.setState({ openDelete: false });
    };

    _this.handleDelete = function () {
      _this.props.onDeleteAddress(_this.props.address.id);
      _this.hideDelete();
    };

    _this.handleSetDefaultBillingAddress = function () {
      _this.props.onSetDefaultBillingAddress(_this.props.address.id);
    };

    _this.handleSetDefaultShippingAddress = function () {
      _this.props.onSetDefaultShippingAddress(_this.props.address.id);
    };

    _this.state = {
      openEdit: false,
      openDelete: false
    };
    return _this;
  }

  _createClass(CustomerAddress, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          address = _props.address,
          onUpdateAddress = _props.onUpdateAddress;


      var title = _text2.default.address;
      if (address.default_billing && address.default_shipping) {
        title = _text2.default.shippingAddress + ' / ' + _text2.default.billingAddress;
      } else if (address.default_billing) {
        title = _text2.default.billingAddress;
      } else if (address.default_shipping) {
        title = _text2.default.shippingAddress;
      }

      return _react2.default.createElement(
        _Paper2.default,
        { className: 'paper-box', zDepth: 1 },
        _react2.default.createElement(
          'div',
          { className: _style2.default.innerBox, style: { paddingTop: 15 } },
          _react2.default.createElement(
            'div',
            { className: 'row middle-xs' },
            _react2.default.createElement(
              'div',
              { className: 'col-xs-10' },
              title
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-xs-2' },
              _react2.default.createElement(
                _IconMenu2.default,
                { iconButtonElement: iconButtonElement },
                _react2.default.createElement(
                  _MenuItem2.default,
                  { onClick: this.showEditForm },
                  _text2.default.edit
                ),
                _react2.default.createElement(
                  _MenuItem2.default,
                  { onClick: this.showDelete },
                  _text2.default.actions_delete
                ),
                _react2.default.createElement(
                  _MenuItem2.default,
                  { onClick: this.handleSetDefaultBillingAddress, disabled: address.default_billing === true },
                  _text2.default.setDefaultBillingAddress
                ),
                _react2.default.createElement(
                  _MenuItem2.default,
                  { onClick: this.handleSetDefaultShippingAddress, disabled: address.default_shipping === true },
                  _text2.default.setDefaultShippingAddress
                )
              )
            )
          ),
          _react2.default.createElement(Address, { address: address }),
          _react2.default.createElement(_confirmation2.default, {
            open: this.state.openDelete,
            title: _text2.default.actions_delete,
            description: _text2.default.messages_deleteConfirmation,
            onSubmit: this.handleDelete,
            onCancel: this.hideDelete,
            submitLabel: _text2.default.actions_delete,
            cancelLabel: _text2.default.cancel
          }),
          _react2.default.createElement(
            _Dialog2.default,
            {
              title: _text2.default.editAddress,
              modal: false,
              open: this.state.openEdit,
              onRequestClose: this.hideEditForm,
              autoScrollBodyContent: true,
              contentStyle: { width: 600 }
            },
            _react2.default.createElement(_addressForm2.default, { initialValues: address, onCancel: this.hideEditForm, onSubmit: this.handleEditForm })
          )
        )
      );
    }
  }]);

  return CustomerAddress;
}(_react2.default.Component);

var CustomerAddresses = function CustomerAddresses(_ref2) {
  var customer = _ref2.customer,
      settings = _ref2.settings,
      onUpdateAddress = _ref2.onUpdateAddress,
      onDeleteAddress = _ref2.onDeleteAddress,
      onSetDefaultBillingAddress = _ref2.onSetDefaultBillingAddress,
      onSetDefaultShippingAddress = _ref2.onSetDefaultShippingAddress;

  if (customer && customer.addresses && customer.addresses.length > 0) {
    var addresses = customer.addresses.map(function (address, index) {
      return _react2.default.createElement(CustomerAddress, {
        key: index,
        address: address,
        onUpdateAddress: onUpdateAddress,
        onDeleteAddress: onDeleteAddress,
        onSetDefaultBillingAddress: onSetDefaultBillingAddress,
        onSetDefaultShippingAddress: onSetDefaultShippingAddress });
    });
    return _react2.default.createElement(
      'div',
      null,
      addresses
    );
  } else {
    return null;
  }
};

exports.default = CustomerAddresses;