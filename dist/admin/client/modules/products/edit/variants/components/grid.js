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

var _style = require('./style.css');

var _style2 = _interopRequireDefault(_style);

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _FontIcon = require('material-ui/FontIcon');

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _DropDownMenu = require('material-ui/DropDownMenu');

var _DropDownMenu2 = _interopRequireDefault(_DropDownMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VariantInput = function (_React$Component) {
  _inherits(VariantInput, _React$Component);

  function VariantInput(props) {
    _classCallCheck(this, VariantInput);

    var _this = _possibleConstructorReturn(this, (VariantInput.__proto__ || Object.getPrototypeOf(VariantInput)).call(this, props));

    _this.onChange = function (e) {
      _this.setState({ value: e.target.value });
    };

    _this.onBlur = function (e) {
      _this.props.onChange(_this.props.variantId, _this.state.value);
    };

    _this.state = {
      value: props.value
    };
    _this.onChange = _this.onChange.bind(_this);
    _this.onBlur = _this.onBlur.bind(_this);
    return _this;
  }

  _createClass(VariantInput, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          type = _props.type,
          placeholder = _props.placeholder;
      var value = this.state.value;


      return _react2.default.createElement('input', { type: type, className: _style2.default.textInput, placeholder: placeholder, value: value, onChange: this.onChange, onBlur: this.onBlur, min: '0' });
    }
  }]);

  return VariantInput;
}(_react2.default.Component);

var VariantRow = function VariantRow(_ref) {
  var variant = _ref.variant,
      options = _ref.options,
      onSkuChange = _ref.onSkuChange,
      onPriceChange = _ref.onPriceChange,
      onStockChange = _ref.onStockChange,
      onWeightChange = _ref.onWeightChange,
      onOptionChange = _ref.onOptionChange,
      onDeleteVariant = _ref.onDeleteVariant;

  var cols = options.map(function (option, index) {
    var variantOption = variant.options.find(function (i) {
      return i.option_id === option.id;
    });
    var variantOptionValueId = variantOption ? variantOption.value_id : null;

    if (option.values && option.values.length > 0) {
      var menuItems = option.values.sort(function (a, b) {
        return a.name > b.name ? 1 : b.name > a.name ? -1 : 0;
      }).map(function (value, index) {
        return _react2.default.createElement(_MenuItem2.default, { key: index, value: value.id, primaryText: value.name });
      });
      return _react2.default.createElement(
        'div',
        { key: option.id, className: _style2.default.gridCol },
        _react2.default.createElement(
          _DropDownMenu2.default,
          { value: variantOptionValueId, style: { width: '100%' }, underlineStyle: { border: 'none' }, onChange: function onChange(event, key, value) {
              onOptionChange(variant.id, option.id, value);
            } },
          menuItems
        )
      );
    } else {
      return _react2.default.createElement('div', { key: option.id, className: _style2.default.gridCol });
    }
  });

  return _react2.default.createElement(
    'div',
    { className: _style2.default.gridRow },
    _react2.default.createElement(
      'div',
      { className: _style2.default.gridCol },
      _react2.default.createElement(VariantInput, { type: 'text', placeholder: '', variantId: variant.id, value: variant.sku, onChange: onSkuChange })
    ),
    _react2.default.createElement(
      'div',
      { className: _style2.default.gridCol },
      _react2.default.createElement(VariantInput, { type: 'number', placeholder: '0', variantId: variant.id, value: variant.price, onChange: onPriceChange })
    ),
    _react2.default.createElement(
      'div',
      { className: _style2.default.gridCol },
      _react2.default.createElement(VariantInput, { type: 'number', placeholder: '0', variantId: variant.id, value: variant.stock_quantity, onChange: onStockChange })
    ),
    _react2.default.createElement(
      'div',
      { className: _style2.default.gridCol },
      _react2.default.createElement(VariantInput, { type: 'number', placeholder: '0', variantId: variant.id, value: variant.weight, onChange: onWeightChange })
    ),
    cols,
    _react2.default.createElement(
      'div',
      { className: _style2.default.gridCol },
      _react2.default.createElement(
        _IconButton2.default,
        { title: _text2.default.actions_delete, onClick: function onClick() {
            onDeleteVariant(variant.id);
          }, tabIndex: -1 },
        _react2.default.createElement(
          _FontIcon2.default,
          { color: '#a1a1a1', className: 'material-icons' },
          'delete'
        )
      )
    )
  );
};

var ProductVariantsGrid = function ProductVariantsGrid(_ref2) {
  var settings = _ref2.settings,
      options = _ref2.options,
      variants = _ref2.variants,
      createVariant = _ref2.createVariant,
      deleteVariant = _ref2.deleteVariant,
      createOption = _ref2.createOption,
      productId = _ref2.productId,
      onSkuChange = _ref2.onSkuChange,
      onPriceChange = _ref2.onPriceChange,
      onStockChange = _ref2.onStockChange,
      onWeightChange = _ref2.onWeightChange,
      onOptionChange = _ref2.onOptionChange;

  var hasOptions = options && options.length > 0;
  var hasVariants = variants && variants.length > 0;

  var headRowCols = hasOptions ? options.map(function (option, index) {
    return _react2.default.createElement(
      'div',
      { key: index, className: _style2.default.gridCol },
      _react2.default.createElement(
        _reactRouterDom.Link,
        { title: _text2.default.editProductOption, to: '/admin/product/' + productId + '/option/' + option.id },
        option.name
      )
    );
  }) : null;

  var variantRows = hasVariants ? variants.map(function (variant, index) {
    return _react2.default.createElement(VariantRow, {
      key: index,
      variant: variant,
      options: options,
      onSkuChange: onSkuChange,
      onPriceChange: onPriceChange,
      onStockChange: onStockChange,
      onWeightChange: onWeightChange,
      onOptionChange: onOptionChange,
      onDeleteVariant: deleteVariant
    });
  }) : null;

  return _react2.default.createElement(
    _Paper2.default,
    { className: 'paper-box', zDepth: 1 },
    _react2.default.createElement(
      'div',
      { className: _style2.default.grid },
      _react2.default.createElement(
        'div',
        { className: _style2.default.gridHeadRow },
        _react2.default.createElement(
          'div',
          { className: _style2.default.gridCol },
          _text2.default.products_sku
        ),
        _react2.default.createElement(
          'div',
          { className: _style2.default.gridCol },
          _text2.default.products_price
        ),
        _react2.default.createElement(
          'div',
          { className: _style2.default.gridCol },
          _text2.default.products_stock
        ),
        _react2.default.createElement(
          'div',
          { className: _style2.default.gridCol },
          _text2.default.products_weight
        ),
        headRowCols,
        _react2.default.createElement('div', { className: _style2.default.gridCol })
      ),
      variantRows
    ),
    _react2.default.createElement(
      'div',
      { className: _style2.default.innerBox },
      _react2.default.createElement(_RaisedButton2.default, { label: _text2.default.addVariant, onClick: createVariant, style: { marginRight: 20 }, disabled: !hasOptions }),
      _react2.default.createElement(_RaisedButton2.default, { label: _text2.default.addOption, onClick: createOption })
    )
  );
};

exports.default = ProductVariantsGrid;