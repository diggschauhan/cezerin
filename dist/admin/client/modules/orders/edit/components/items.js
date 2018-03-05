'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderItem = undefined;

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

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _Divider = require('material-ui/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

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

var iconButtonElement = _react2.default.createElement(
  _IconButton2.default,
  { touch: true },
  _react2.default.createElement(
    _FontIcon2.default,
    { color: 'rgb(189, 189, 189)', className: 'material-icons' },
    'more_vert'
  )
);

var ProductOption = function ProductOption(_ref) {
  var option = _ref.option,
      _onChange = _ref.onChange,
      selectedOptions = _ref.selectedOptions;

  var selectedValue = selectedOptions[option.id];
  var values = option.values.sort(function (a, b) {
    return a.name > b.name ? 1 : b.name > a.name ? -1 : 0;
  }).map(function (value, index) {
    return _react2.default.createElement(_MenuItem2.default, { key: index, value: value.id, primaryText: value.name });
  });

  return _react2.default.createElement(
    _SelectField2.default,
    {
      floatingLabelText: option.name,
      fullWidth: true,
      value: selectedValue,
      onChange: function onChange(event, index, value) {
        _onChange(option.id, value);
      } },
    values
  );
};

var ProductOptions = function ProductOptions(_ref2) {
  var options = _ref2.options,
      onChange = _ref2.onChange,
      selectedOptions = _ref2.selectedOptions;

  if (options) {
    var items = options.map(function (option, index) {
      return _react2.default.createElement(ProductOption, { key: index, option: option, onChange: onChange, selectedOptions: selectedOptions });
    });
    return _react2.default.createElement(
      'div',
      { className: 'product-options' },
      items
    );
  } else {
    return null;
  }
};

var OrderItem = exports.OrderItem = function (_React$Component) {
  _inherits(OrderItem, _React$Component);

  function OrderItem(props) {
    _classCallCheck(this, OrderItem);

    var _this = _possibleConstructorReturn(this, (OrderItem.__proto__ || Object.getPrototypeOf(OrderItem)).call(this, props));

    _this.showEditForm = function () {
      _this.setState({ showEdit: true });
    };

    _this.hideEditForm = function () {
      _this.setState({ showEdit: false });
    };

    _this.quantityChange = function (event, index, value) {
      _this.setState({ quantity: value });
    };

    _this.submitEditForm = function () {
      _this.hideEditForm();
      var newVariantId = _this.state.selectedVariant && _this.state.selectedVariant.id ? _this.state.selectedVariant.id : _this.state.variantId;
      _this.props.onItemUpdate(_this.props.item.id, _this.state.quantity, newVariantId);
    };

    _this.deleteItem = function () {
      _this.props.onItemDelete(_this.props.item.id);
    };

    _this.onOptionChange = function (optionId, valueId) {
      _this.setState({ quantity: 1 });
      var selectedOptions = _this.state.selectedOptions;


      if (valueId === '') {
        delete selectedOptions[optionId];
      } else {
        selectedOptions[optionId] = valueId;
      }

      _this.setState({ selectedOptions: selectedOptions });
      _this.findVariantBySelectedOptions();
    };

    _this.findVariantBySelectedOptions = function () {
      var selectedOptions = _this.state.selectedOptions;

      var product = _this.props.item.product;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = product.variants[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var variant = _step.value;

          var variantMutchSelectedOptions = variant.options.every(function (variantOption) {
            return selectedOptions[variantOption.option_id] === variantOption.value_id;
          });
          if (variantMutchSelectedOptions) {
            _this.setState({ selectedVariant: variant });
            return;
          }
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

      _this.setState({ selectedVariant: null });
    };

    _this.getCurrentVariant = function () {
      var variantId = _this.props.item.variant_id;
      var product = _this.props.item.product;
      var variant = null;

      if (variantId && product && product.variants && product.variants.length > 0) {
        variant = product.variants.find(function (v) {
          return v.id === variantId;
        });
      }

      return variant;
    };

    _this.getOptionsByVariant = function () {
      var variantId = _this.props.item.variant_id;
      var product = _this.props.item.product;
      var selectedOptions = {};
      if (variantId && product && product.variants && product.variants.length > 0) {
        var variant = product.variants.find(function (v) {
          return v.id === variantId;
        });
        if (variant) {
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = variant.options[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var option = _step2.value;

              selectedOptions[option.option_id] = option.value_id;
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        }
      }

      return selectedOptions;
    };

    _this.state = {
      quantity: props.item.quantity,
      variantId: props.item.variant_id,
      selectedOptions: _this.getOptionsByVariant(),
      selectedVariant: _this.getCurrentVariant(),
      showEdit: false
    };
    return _this;
  }

  _createClass(OrderItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          item = _props.item,
          settings = _props.settings,
          allowEdit = _props.allowEdit;


      var editFormActions = [_react2.default.createElement(_FlatButton2.default, {
        label: _text2.default.cancel,
        onClick: this.hideEditForm,
        style: { marginRight: 10 }
      }), _react2.default.createElement(_FlatButton2.default, {
        label: _text2.default.save,
        primary: true,
        onClick: this.submitEditForm
      })];

      var quantity = this.state.quantity;
      var _state = this.state,
          selectedOptions = _state.selectedOptions,
          selectedVariant = _state.selectedVariant;

      var product = item.product;
      var price = helper.formatCurrency(item.price, settings);
      var priceTotal = helper.formatCurrency(item.price_total, settings);
      var discountTotal = helper.formatCurrency(item.discount_total, settings);
      var imageUrl = product && product.images.length > 0 ? product.images[0].url : null;
      var thumbnailUrl = helper.getThumbnailUrl(imageUrl, 100);
      var productOptions = product ? product.options : [];

      var maxItems = product ? product.stock_quantity : 0;
      if (selectedVariant) {
        maxItems = selectedVariant.stock_quantity;
      } else if (product && product.options && product.options.length > 0) {
        // product variant not exists with this options
        maxItems = 0;
      }

      var quantityItems = [];
      if (maxItems === 0) {
        quantityItems.push(_react2.default.createElement(_MenuItem2.default, { key: 0, value: 0, primaryText: _text2.default.products_outOfStock }));
        quantity = 0;
      } else {
        for (var i = 1; i <= maxItems, i <= 100; i++) {
          quantityItems.push(_react2.default.createElement(_MenuItem2.default, { key: i, value: i, primaryText: i.toString() }));
        }
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: _style2.default.item + " row row--no-gutter middle-xs" },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-2' },
            thumbnailUrl && thumbnailUrl !== '' && _react2.default.createElement('img', { src: thumbnailUrl, className: _style2.default.itemImage })
          ),
          _react2.default.createElement(
            'div',
            { className: _style2.default.itemName + " col-xs-4" },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/admin/product/' + item.product_id },
              item.name
            ),
            _react2.default.createElement(
              'div',
              null,
              item.variant_name
            ),
            _react2.default.createElement(
              'div',
              null,
              _text2.default.products_sku,
              ': ',
              item.sku
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-xs-2', style: { textAlign: 'right' } },
            price
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-xs-1', style: { textAlign: 'center' } },
            'x ',
            item.quantity
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-xs-2', style: { textAlign: 'right' } },
            priceTotal,
            item.discount_total > 0 && _react2.default.createElement(
              'small',
              { className: _style2.default.itemDiscount },
              discountTotal
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-xs-1', style: { textAlign: 'center' } },
            allowEdit && _react2.default.createElement(
              _IconMenu2.default,
              {
                iconButtonElement: iconButtonElement,
                targetOrigin: { horizontal: 'right', vertical: 'top' },
                anchorOrigin: { horizontal: 'right', vertical: 'top' }
              },
              _react2.default.createElement(
                _MenuItem2.default,
                { onClick: this.showEditForm },
                _text2.default.edit
              ),
              _react2.default.createElement(
                _MenuItem2.default,
                { onClick: this.deleteItem },
                _text2.default.actions_delete
              )
            )
          )
        ),
        _react2.default.createElement(_Divider2.default, null),
        _react2.default.createElement(
          _Dialog2.default,
          {
            title: _text2.default.editOrderItem,
            actions: editFormActions,
            modal: false,
            open: this.state.showEdit,
            onRequestClose: this.hideEditForm,
            contentStyle: { width: 400 }
          },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(ProductOptions, { options: productOptions, onChange: this.onOptionChange, selectedOptions: selectedOptions }),
            _react2.default.createElement(
              _SelectField2.default,
              {
                floatingLabelText: _text2.default.quantity,
                fullWidth: true,
                value: quantity,
                onChange: this.quantityChange },
              quantityItems
            )
          )
        )
      );
    }
  }]);

  return OrderItem;
}(_react2.default.Component);

var OrderItems = function OrderItems(_ref3) {
  var order = _ref3.order,
      settings = _ref3.settings,
      onItemDelete = _ref3.onItemDelete,
      onItemUpdate = _ref3.onItemUpdate;

  var allowEdit = order.closed === false && order.cancelled === false;
  var items = order.items.map(function (item, index) {
    return _react2.default.createElement(OrderItem, { key: index, item: item, settings: settings, onItemDelete: onItemDelete, onItemUpdate: onItemUpdate, allowEdit: allowEdit });
  });
  return _react2.default.createElement(
    'div',
    null,
    items
  );
};

exports.default = OrderItems;