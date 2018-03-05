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

var _index = require('modules/productCategories/head/index');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('modules/customerGroups/head/index');

var _index4 = _interopRequireDefault(_index3);

var _index5 = require('modules/customers/listHead/index');

var _index6 = _interopRequireDefault(_index5);

var _index7 = require('modules/customers/editHead/index');

var _index8 = _interopRequireDefault(_index7);

var _index9 = require('modules/products/listHead/index');

var _index10 = _interopRequireDefault(_index9);

var _index11 = require('modules/products/editHead/index');

var _index12 = _interopRequireDefault(_index11);

var _index13 = require('modules/orders/listHead/index');

var _index14 = _interopRequireDefault(_index13);

var _index15 = require('modules/orders/editHead/index');

var _index16 = _interopRequireDefault(_index15);

var _index17 = require('modules/orderStatuses/head/index');

var _index18 = _interopRequireDefault(_index17);

var _head = require('modules/settings/paymentsEdit/head');

var _head2 = _interopRequireDefault(_head);

var _head3 = require('modules/settings/payments/head');

var _head4 = _interopRequireDefault(_head3);

var _head5 = require('modules/settings/shippingEdit/head');

var _head6 = _interopRequireDefault(_head5);

var _head7 = require('modules/settings/shipping/head');

var _head8 = _interopRequireDefault(_head7);

var _head9 = require('modules/pages/edit/head');

var _head10 = _interopRequireDefault(_head9);

var _head11 = require('modules/pages/list/head');

var _head12 = _interopRequireDefault(_head11);

var _head13 = require('modules/settings/tokens/list/head');

var _head14 = _interopRequireDefault(_head13);

var _head15 = require('modules/settings/webhooks/list/head');

var _head16 = _interopRequireDefault(_head15);

var _head17 = require('modules/settings/webhooks/edit/head');

var _head18 = _interopRequireDefault(_head17);

var _head19 = require('modules/apps/head');

var _head20 = _interopRequireDefault(_head19);

var _head21 = require('modules/files/list/head');

var _head22 = _interopRequireDefault(_head21);

var _drawer = require('./drawer');

var _drawer2 = _interopRequireDefault(_drawer);

var _FontIcon = require('material-ui/FontIcon');

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _AppBar = require('material-ui/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AppBarTop = function (_React$Component) {
  _inherits(AppBarTop, _React$Component);

  function AppBarTop(props) {
    _classCallCheck(this, AppBarTop);

    var _this = _possibleConstructorReturn(this, (AppBarTop.__proto__ || Object.getPrototypeOf(AppBarTop)).call(this, props));

    _this.handleToggle = function () {
      return _this.setState({ open: !_this.state.open });
    };

    _this.handleClose = function () {
      return _this.setState({ open: false });
    };

    _this.state = { open: false };
    return _this;
  }

  _createClass(AppBarTop, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          location = _props.location,
          productCategoryName = _props.productCategoryName,
          productsSelectedCount = _props.productsSelectedCount,
          customersSelectedCount = _props.customersSelectedCount,
          customerGroupName = _props.customerGroupName,
          ordersSelectedCount = _props.ordersSelectedCount,
          orderStatusName = _props.orderStatusName,
          orderNumber = _props.orderNumber;

      var pathname = location.pathname;

      if (pathname === '/admin/login' || pathname === '/admin/logout') {
        return null;
      }

      var title = _text2.default.dashboard;
      var leftButton = _react2.default.createElement(
        _IconButton2.default,
        { onClick: this.handleToggle },
        _react2.default.createElement(
          _FontIcon2.default,
          { className: 'material-icons' },
          'menu'
        )
      );
      var rightElements = null;
      {/* <IconButton><FontIcon color="#fff" className="material-icons">notifications</FontIcon></IconButton> */}

      if (pathname === '/admin/products') {
        title = _text2.default.products_title;

        if (productCategoryName) {
          title = _react2.default.createElement(
            'span',
            null,
            _text2.default.products_title,
            _react2.default.createElement(
              _FontIcon2.default,
              { style: { top: 6 }, color: '#fff', className: 'material-icons' },
              'chevron_right'
            ),
            productCategoryName
          );
        }

        if (productsSelectedCount > 0) {
          title = productsSelectedCount + ' ' + _text2.default.selected;
        }

        rightElements = _react2.default.createElement(_index10.default, null);
      }
      if (pathname === '/admin/orders') {
        title = _text2.default.orders_title;

        if (orderStatusName) {
          title = _react2.default.createElement(
            'span',
            null,
            _text2.default.orders_title,
            _react2.default.createElement(
              _FontIcon2.default,
              { style: { top: 6 }, color: '#fff', className: 'material-icons' },
              'chevron_right'
            ),
            orderStatusName
          );
        }

        if (ordersSelectedCount > 0) {
          title = ordersSelectedCount + ' ' + _text2.default.selected;
        }

        rightElements = _react2.default.createElement(_index14.default, null);
      } else if (pathname === '/admin/orders/statuses') {
        title = orderStatusName ? _text2.default.editOrderStatus : _text2.default.orderStatuses;
        leftButton = _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/admin/orders' },
          _react2.default.createElement(
            _IconButton2.default,
            null,
            _react2.default.createElement(
              _FontIcon2.default,
              { color: '#fff', className: 'material-icons' },
              'arrow_back'
            )
          )
        );
        rightElements = _react2.default.createElement(_index18.default, null);
      } else if (pathname.startsWith('/admin/order/')) {
        title = orderNumber ? _text2.default.order + ' #' + orderNumber : _text2.default.order;
        leftButton = _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/admin/orders' },
          _react2.default.createElement(
            _IconButton2.default,
            null,
            _react2.default.createElement(
              _FontIcon2.default,
              { color: '#fff', className: 'material-icons' },
              'arrow_back'
            )
          )
        );
        rightElements = _react2.default.createElement(_index16.default, null);
      } else if (pathname.startsWith('/admin/customer/')) {
        title = _text2.default.customer;
        leftButton = _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/admin/customers' },
          _react2.default.createElement(
            _IconButton2.default,
            null,
            _react2.default.createElement(
              _FontIcon2.default,
              { color: '#fff', className: 'material-icons' },
              'arrow_back'
            )
          )
        );
        rightElements = _react2.default.createElement(_index8.default, null);
      } else if (pathname.startsWith('/admin/product/') && pathname.includes('/option/')) {
        var productId = pathname.split('/')[3];
        title = _text2.default.editProductOption;
        leftButton = _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/admin/product/' + productId },
          _react2.default.createElement(
            _IconButton2.default,
            null,
            _react2.default.createElement(
              _FontIcon2.default,
              { color: '#fff', className: 'material-icons' },
              'arrow_back'
            )
          )
        );
      } else if (pathname.startsWith('/admin/product/')) {
        title = _text2.default.products_titleEdit;
        leftButton = _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/admin/products' },
          _react2.default.createElement(
            _IconButton2.default,
            null,
            _react2.default.createElement(
              _FontIcon2.default,
              { color: '#fff', className: 'material-icons' },
              'arrow_back'
            )
          )
        );
        rightElements = _react2.default.createElement(_index12.default, null);
      } else if (pathname === '/admin/products/categories') {
        title = productCategoryName ? _text2.default.productCategories_titleEdit : _text2.default.productCategories_title;
        leftButton = _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/admin/products' },
          _react2.default.createElement(
            _IconButton2.default,
            null,
            _react2.default.createElement(
              _FontIcon2.default,
              { color: '#fff', className: 'material-icons' },
              'arrow_back'
            )
          )
        );
        rightElements = _react2.default.createElement(_index2.default, null);
      } else if (pathname === '/admin/customers') {
        title = _text2.default.customers_title;

        if (customerGroupName) {
          title = _react2.default.createElement(
            'span',
            null,
            _text2.default.customers_title,
            _react2.default.createElement(
              _FontIcon2.default,
              { style: { top: 6 }, color: '#fff', className: 'material-icons' },
              'chevron_right'
            ),
            customerGroupName
          );
        }

        if (customersSelectedCount > 0) {
          title = customersSelectedCount + ' ' + _text2.default.selected;
        }

        rightElements = _react2.default.createElement(_index6.default, null);
      } else if (pathname === '/admin/customers/groups') {
        title = customerGroupName ? _text2.default.customerGroups_titleEdit : _text2.default.customerGroups_title;
        leftButton = _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/admin/customers' },
          _react2.default.createElement(
            _IconButton2.default,
            null,
            _react2.default.createElement(
              _FontIcon2.default,
              { color: '#fff', className: 'material-icons' },
              'arrow_back'
            )
          )
        );
        rightElements = _react2.default.createElement(_index4.default, null);
      } else if (pathname === '/admin/settings/email') {
        title = _text2.default.settings_emailSettings;
      } else if (pathname === '/admin/settings/email/smtp') {
        title = _text2.default.settings_smtpSettings;
        leftButton = _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/admin/settings/email' },
          _react2.default.createElement(
            _IconButton2.default,
            null,
            _react2.default.createElement(
              _FontIcon2.default,
              { color: '#fff', className: 'material-icons' },
              'arrow_back'
            )
          )
        );
      } else if (pathname === '/admin/settings/email/templates/order_confirmation') {
        title = _text2.default.settings_orderConfirmation;
        leftButton = _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/admin/settings/email' },
          _react2.default.createElement(
            _IconButton2.default,
            null,
            _react2.default.createElement(
              _FontIcon2.default,
              { color: '#fff', className: 'material-icons' },
              'arrow_back'
            )
          )
        );
      } else if (pathname === '/admin/settings/email/templates/customer_registration') {
        title = _text2.default.settings_customerRegistration;
        leftButton = _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/admin/settings/email' },
          _react2.default.createElement(
            _IconButton2.default,
            null,
            _react2.default.createElement(
              _FontIcon2.default,
              { color: '#fff', className: 'material-icons' },
              'arrow_back'
            )
          )
        );
      } else if (pathname === '/admin/settings/email/templates/customer_recovery') {
        title = _text2.default.settings_customerRecovery;
        leftButton = _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/admin/settings/email' },
          _react2.default.createElement(
            _IconButton2.default,
            null,
            _react2.default.createElement(
              _FontIcon2.default,
              { color: '#fff', className: 'material-icons' },
              'arrow_back'
            )
          )
        );
      } else if (pathname === '/admin/settings/theme') {
        title = _text2.default.settings_themeSettings;
      } else if (pathname === '/admin/settings/checkout') {
        title = _text2.default.settings_checkoutSettings;
      } else if (pathname === '/admin/settings/checkout/fields/email') {
        title = _text2.default.email;
        leftButton = _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/admin/settings/checkout' },
          _react2.default.createElement(
            _IconButton2.default,
            null,
            _react2.default.createElement(
              _FontIcon2.default,
              { color: '#fff', className: 'material-icons' },
              'arrow_back'
            )
          )
        );
      } else if (pathname === '/admin/settings/checkout/fields/mobile') {
        title = _text2.default.mobile;
        leftButton = _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/admin/settings/checkout' },
          _react2.default.createElement(
            _IconButton2.default,
            null,
            _react2.default.createElement(
              _FontIcon2.default,
              { color: '#fff', className: 'material-icons' },
              'arrow_back'
            )
          )
        );
      } else if (pathname === '/admin/settings/checkout/fields/country') {
        title = _text2.default.country;
        leftButton = _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/admin/settings/checkout' },
          _react2.default.createElement(
            _IconButton2.default,
            null,
            _react2.default.createElement(
              _FontIcon2.default,
              { color: '#fff', className: 'material-icons' },
              'arrow_back'
            )
          )
        );
      } else if (pathname === '/admin/settings/checkout/fields/state') {
        title = _text2.default.state;
        leftButton = _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/admin/settings/checkout' },
          _react2.default.createElement(
            _IconButton2.default,
            null,
            _react2.default.createElement(
              _FontIcon2.default,
              { color: '#fff', className: 'material-icons' },
              'arrow_back'
            )
          )
        );
      } else if (pathname === '/admin/settings/checkout/fields/city') {
        title = _text2.default.city;
        leftButton = _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/admin/settings/checkout' },
          _react2.default.createElement(
            _IconButton2.default,
            null,
            _react2.default.createElement(
              _FontIcon2.default,
              { color: '#fff', className: 'material-icons' },
              'arrow_back'
            )
          )
        );
      } else if (pathname === '/admin/settings/shipping') {
        title = _text2.default.settings_shippingMethods;
        rightElements = _react2.default.createElement(_head8.default, null);
      } else if (pathname === '/admin/settings/payments') {
        title = _text2.default.settings_paymentsMethods;
        rightElements = _react2.default.createElement(_head4.default, null);
      } else if (pathname === '/admin/settings/shipping/add') {
        title = _text2.default.settings_addShippingMethod;
        leftButton = _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/admin/settings/shipping' },
          _react2.default.createElement(
            _IconButton2.default,
            null,
            _react2.default.createElement(
              _FontIcon2.default,
              { color: '#fff', className: 'material-icons' },
              'arrow_back'
            )
          )
        );
      } else if (pathname === '/admin/settings/payments/add') {
        title = _text2.default.settings_addPaymentMethod;
        leftButton = _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/admin/settings/payments' },
          _react2.default.createElement(
            _IconButton2.default,
            null,
            _react2.default.createElement(
              _FontIcon2.default,
              { color: '#fff', className: 'material-icons' },
              'arrow_back'
            )
          )
        );
      } else if (pathname.startsWith('/admin/settings/shipping/')) {
        title = _text2.default.settings_editShippingMethod;
        leftButton = _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/admin/settings/shipping' },
          _react2.default.createElement(
            _IconButton2.default,
            null,
            _react2.default.createElement(
              _FontIcon2.default,
              { color: '#fff', className: 'material-icons' },
              'arrow_back'
            )
          )
        );
        rightElements = _react2.default.createElement(_head6.default, null);
      } else if (pathname.startsWith('/admin/settings/payments/')) {
        title = _text2.default.settings_editPaymentMethod;
        leftButton = _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/admin/settings/payments' },
          _react2.default.createElement(
            _IconButton2.default,
            null,
            _react2.default.createElement(
              _FontIcon2.default,
              { color: '#fff', className: 'material-icons' },
              'arrow_back'
            )
          )
        );
        rightElements = _react2.default.createElement(_head2.default, null);
      } else if (pathname === '/admin/settings/general' || pathname === '/admin/settings') {
        title = _text2.default.settings_generalSettings;
      } else if (pathname === '/admin/settings/general/logo') {
        title = _text2.default.logo;
        leftButton = _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/admin/settings' },
          _react2.default.createElement(
            _IconButton2.default,
            null,
            _react2.default.createElement(
              _FontIcon2.default,
              { color: '#fff', className: 'material-icons' },
              'arrow_back'
            )
          )
        );
      } else if (pathname === '/admin/pages') {
        title = _text2.default.settings_pages;
        rightElements = _react2.default.createElement(_head12.default, null);
      } else if (pathname === '/admin/pages/add') {
        title = _text2.default.settings_addPage;
        leftButton = _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/admin/pages' },
          _react2.default.createElement(
            _IconButton2.default,
            null,
            _react2.default.createElement(
              _FontIcon2.default,
              { color: '#fff', className: 'material-icons' },
              'arrow_back'
            )
          )
        );
      } else if (pathname.startsWith('/admin/pages/')) {
        title = _text2.default.settings_editPage;
        leftButton = _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/admin/pages' },
          _react2.default.createElement(
            _IconButton2.default,
            null,
            _react2.default.createElement(
              _FontIcon2.default,
              { color: '#fff', className: 'material-icons' },
              'arrow_back'
            )
          )
        );
        rightElements = _react2.default.createElement(_head10.default, null);
      } else if (pathname === '/admin/files') {
        title = _text2.default.files;
        rightElements = _react2.default.createElement(_head22.default, null);
      } else if (pathname === '/admin/settings/tokens') {
        title = _text2.default.settings_tokens;
        rightElements = _react2.default.createElement(_head14.default, null);
      } else if (pathname === '/admin/settings/tokens/add') {
        title = _text2.default.settings_addToken;
        leftButton = _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/admin/settings/tokens' },
          _react2.default.createElement(
            _IconButton2.default,
            null,
            _react2.default.createElement(
              _FontIcon2.default,
              { color: '#fff', className: 'material-icons' },
              'arrow_back'
            )
          )
        );
      } else if (pathname.startsWith('/admin/settings/tokens/')) {
        title = _text2.default.settings_editToken;
        leftButton = _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/admin/settings/tokens' },
          _react2.default.createElement(
            _IconButton2.default,
            null,
            _react2.default.createElement(
              _FontIcon2.default,
              { color: '#fff', className: 'material-icons' },
              'arrow_back'
            )
          )
        );
      } else if (pathname === '/admin/settings/webhooks') {
        title = _text2.default.webhooks;
        rightElements = _react2.default.createElement(_head16.default, null);
      } else if (pathname === '/admin/settings/webhooks/add') {
        title = _text2.default.webhookAdd;
        leftButton = _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/admin/settings/webhooks' },
          _react2.default.createElement(
            _IconButton2.default,
            null,
            _react2.default.createElement(
              _FontIcon2.default,
              { color: '#fff', className: 'material-icons' },
              'arrow_back'
            )
          )
        );
      } else if (pathname.startsWith('/admin/settings/webhooks/')) {
        title = _text2.default.webhookEdit;
        leftButton = _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/admin/settings/webhooks' },
          _react2.default.createElement(
            _IconButton2.default,
            null,
            _react2.default.createElement(
              _FontIcon2.default,
              { color: '#fff', className: 'material-icons' },
              'arrow_back'
            )
          )
        );
        rightElements = _react2.default.createElement(_head18.default, null);
      } else if (pathname === '/admin/apps') {
        title = _text2.default.apps;
        rightElements = _react2.default.createElement(_head20.default, null);
      } else if (pathname === '/admin/apps/login') {
        title = _text2.default.loginTitle;
        rightElements = _react2.default.createElement(_head20.default, null);
        leftButton = _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/admin/apps' },
          _react2.default.createElement(
            _IconButton2.default,
            null,
            _react2.default.createElement(
              _FontIcon2.default,
              { color: '#fff', className: 'material-icons' },
              'arrow_back'
            )
          )
        );
      } else if (pathname === '/admin/apps/account') {
        title = _text2.default.account;
        leftButton = _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/admin/apps' },
          _react2.default.createElement(
            _IconButton2.default,
            null,
            _react2.default.createElement(
              _FontIcon2.default,
              { color: '#fff', className: 'material-icons' },
              'arrow_back'
            )
          )
        );
      } else if (pathname.startsWith('/admin/apps/service/') || pathname.startsWith('/admin/apps/app/')) {
        title = _text2.default.apps;
        leftButton = _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/admin/apps' },
          _react2.default.createElement(
            _IconButton2.default,
            null,
            _react2.default.createElement(
              _FontIcon2.default,
              { color: '#fff', className: 'material-icons' },
              'arrow_back'
            )
          )
        );
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_AppBar2.default, {
          className: 'appBar',
          titleStyle: { fontSize: 18 },
          title: title,
          iconElementLeft: leftButton,
          iconElementRight: rightElements
        }),
        _react2.default.createElement(_drawer2.default, { open: this.state.open, onClose: this.handleClose, currentUrl: pathname })
      );
    }
  }]);

  return AppBarTop;
}(_react2.default.Component);

exports.default = AppBarTop;