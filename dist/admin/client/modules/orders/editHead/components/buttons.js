'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _text = require('lib/text');

var _text2 = _interopRequireDefault(_text);

var _confirmation = require('modules/shared/confirmation');

var _confirmation2 = _interopRequireDefault(_confirmation);

var _productSearch = require('modules/shared/productSearch');

var _productSearch2 = _interopRequireDefault(_productSearch);

var _deleteConfirmation = require('modules/shared/deleteConfirmation');

var _deleteConfirmation2 = _interopRequireDefault(_deleteConfirmation);

var _FontIcon = require('material-ui/FontIcon');

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _IconMenu = require('material-ui/IconMenu');

var _IconMenu2 = _interopRequireDefault(_IconMenu);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _Divider = require('material-ui/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Buttons = function (_React$Component) {
  _inherits(Buttons, _React$Component);

  function Buttons(props) {
    _classCallCheck(this, Buttons);

    var _this = _possibleConstructorReturn(this, (Buttons.__proto__ || Object.getPrototypeOf(Buttons)).call(this, props));

    _this.showClose = function () {
      _this.setState({ showClose: true });
    };

    _this.hideClose = function () {
      _this.setState({ showClose: false });
    };

    _this.setClosed = function () {
      _this.hideClose();
      _this.props.setClosed(_this.props.order.id);
    };

    _this.showCancel = function () {
      _this.setState({ showCancel: true });
    };

    _this.hideCancel = function () {
      _this.setState({ showCancel: false });
    };

    _this.setCancelled = function () {
      _this.hideCancel();
      _this.props.setCancelled(_this.props.order.id);
    };

    _this.openDelete = function () {
      _this.setState({ openDelete: true });
    };

    _this.closeDelete = function () {
      _this.setState({ openDelete: false });
    };

    _this.deleteOrder = function () {
      _this.closeDelete();
      _this.props.onDelete();
    };

    _this.holdOrder = function () {
      _this.props.holdOrder(_this.props.order.id);
    };

    _this.resumeOrder = function () {
      _this.props.resumeOrder(_this.props.order.id);
    };

    _this.showAddItem = function () {
      _this.setState({ showAddItem: true });
    };

    _this.hideAddItem = function () {
      _this.setState({ showAddItem: false });
    };

    _this.addItem = function (productId) {
      _this.hideAddItem();
      _this.props.addItem(_this.props.order.id, productId);
    };

    _this.state = {
      showClose: false,
      showCancel: false,
      openDelete: false,
      showAddItem: false
    };
    return _this;
  }

  _createClass(Buttons, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          settings = _props.settings,
          order = _props.order,
          onDelete = _props.onDelete;


      if (order) {
        var orderName = _text2.default.order + ' #' + order.number;

        var menuItems = [];
        if (order.closed) {
          //
        } else if (order.cancelled) {
          //
        } else {
          menuItems.push(_react2.default.createElement(_MenuItem2.default, { key: 'addItem', primaryText: _text2.default.addOrderItem, onClick: this.showAddItem }));
          menuItems.push(_react2.default.createElement(_Divider2.default, { key: 'dev1' }));
          if (order.hold) {
            menuItems.push(_react2.default.createElement(_MenuItem2.default, { key: 'resume', primaryText: _text2.default.resumeOrder, onClick: this.resumeOrder }));
          } else {
            menuItems.push(_react2.default.createElement(_MenuItem2.default, { key: 'hold', primaryText: _text2.default.holdOrder, onClick: this.holdOrder }));
          }
          menuItems.push(_react2.default.createElement(_MenuItem2.default, { key: 'close', primaryText: _text2.default.closeOrder, onClick: this.showClose }));
          menuItems.push(_react2.default.createElement(_MenuItem2.default, { key: 'cancel', primaryText: _text2.default.cancelOrder, onClick: this.showCancel }));
        }

        return _react2.default.createElement(
          'span',
          null,
          _react2.default.createElement(_productSearch2.default, {
            open: this.state.showAddItem,
            title: _text2.default.addOrderItem,
            settings: settings,
            onSubmit: this.addItem,
            onCancel: this.hideAddItem,
            submitLabel: _text2.default.add,
            cancelLabel: _text2.default.cancel
          }),
          _react2.default.createElement(_confirmation2.default, {
            open: this.state.showClose,
            title: orderName,
            description: _text2.default.closeOrderConfirmation,
            onSubmit: this.setClosed,
            onCancel: this.hideClose,
            submitLabel: _text2.default.closeOrder,
            cancelLabel: _text2.default.cancel
          }),
          _react2.default.createElement(_confirmation2.default, {
            open: this.state.showCancel,
            title: orderName,
            description: _text2.default.cancelOrderConfirmation,
            onSubmit: this.setCancelled,
            onCancel: this.hideCancel,
            submitLabel: _text2.default.cancelOrder,
            cancelLabel: _text2.default.cancel
          }),
          _react2.default.createElement(_deleteConfirmation2.default, {
            open: this.state.openDelete,
            isSingle: true,
            itemsCount: 1,
            itemName: orderName,
            onCancel: this.closeDelete,
            onDelete: this.deleteOrder
          }),
          _react2.default.createElement(
            _IconMenu2.default,
            {
              iconButtonElement: _react2.default.createElement(
                _IconButton2.default,
                { touch: true },
                _react2.default.createElement(
                  _FontIcon2.default,
                  { color: '#fff', className: 'material-icons' },
                  'more_vert'
                )
              ),
              targetOrigin: { horizontal: 'right', vertical: 'top' },
              anchorOrigin: { horizontal: 'right', vertical: 'top' }
            },
            menuItems,
            _react2.default.createElement(_MenuItem2.default, { primaryText: _text2.default.deleteOrder, onClick: this.openDelete })
          )
        );
      } else {
        return _react2.default.createElement('span', null);
      }
    }
  }]);

  return Buttons;
}(_react2.default.Component);

exports.default = Buttons;