'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _reduxForm = require('redux-form');

var _reduxFormMaterialUi = require('redux-form-material-ui');

var _api = require('lib/api');

var _api2 = _interopRequireDefault(_api);

var _helper = require('lib/helper');

var helper = _interopRequireWildcard(_helper);

var _text = require('lib/text');

var _text2 = _interopRequireDefault(_text);

var _style = require('./style.css');

var _style2 = _interopRequireDefault(_style);

var _productSearch = require('modules/shared/productSearch');

var _productSearch2 = _interopRequireDefault(_productSearch);

var _reactTagsinput = require('react-tagsinput');

var _reactTagsinput2 = _interopRequireDefault(_reactTagsinput);

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _FontIcon = require('material-ui/FontIcon');

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _IconMenu = require('material-ui/IconMenu');

var _IconMenu2 = _interopRequireDefault(_IconMenu);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TagsField = function TagsField(_ref) {
  var input = _ref.input,
      placeholder = _ref.placeholder;

  var tagsArray = input.value && Array.isArray(input.value) ? input.value : [];
  return _react2.default.createElement(_reactTagsinput2.default, {
    value: tagsArray,
    inputProps: { placeholder: placeholder },
    onChange: function onChange(tags) {
      input.onChange(tags);
    }
  });
};

var ProductShort = function ProductShort(_ref2) {
  var id = _ref2.id,
      name = _ref2.name,
      thumbnailUrl = _ref2.thumbnailUrl,
      priceFormatted = _ref2.priceFormatted,
      enabled = _ref2.enabled,
      discontinued = _ref2.discontinued,
      actions = _ref2.actions;
  return _react2.default.createElement(
    'div',
    { className: _style2.default.relatedProduct + (enabled === false || discontinued === true ? ' ' + _style2.default.relatedProductDisabled : '') },
    _react2.default.createElement(
      'div',
      { className: _style2.default.relatedProductImage },
      thumbnailUrl && thumbnailUrl !== '' && _react2.default.createElement('img', { src: thumbnailUrl })
    ),
    _react2.default.createElement(
      'div',
      { className: _style2.default.relatedProductText },
      _react2.default.createElement(
        _reactRouterDom.Link,
        { to: '/admin/product/' + id },
        name
      ),
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'div',
        null,
        priceFormatted
      )
    ),
    _react2.default.createElement(
      'div',
      { className: _style2.default.relatedProductActions },
      actions
    )
  );
};

var RelatedProductActions = function RelatedProductActions(_ref3) {
  var fields = _ref3.fields,
      index = _ref3.index;
  return _react2.default.createElement(
    _IconMenu2.default,
    {
      targetOrigin: { horizontal: 'right', vertical: 'top' },
      anchorOrigin: { horizontal: 'right', vertical: 'top' },
      iconButtonElement: _react2.default.createElement(
        _IconButton2.default,
        { touch: true },
        _react2.default.createElement(
          _FontIcon2.default,
          { color: '#777', className: 'material-icons' },
          'more_vert'
        )
      )
    },
    _react2.default.createElement(_MenuItem2.default, { primaryText: _text2.default.actions_delete, onClick: function onClick() {
        return fields.remove(index);
      } }),
    index > 0 && _react2.default.createElement(_MenuItem2.default, { primaryText: _text2.default.actions_moveUp, onClick: function onClick() {
        return fields.move(index, index - 1);
      } }),
    index + 1 < fields.length && _react2.default.createElement(_MenuItem2.default, { primaryText: _text2.default.actions_moveDown, onClick: function onClick() {
        return fields.move(index, index + 1);
      } })
  );
};

var RelatedProduct = function RelatedProduct(_ref4) {
  var settings = _ref4.settings,
      product = _ref4.product,
      actions = _ref4.actions;

  if (product) {
    var priceFormatted = helper.formatCurrency(product.price, settings);
    var imageUrl = product && product.images.length > 0 ? product.images[0].url : null;
    var thumbnailUrl = helper.getThumbnailUrl(imageUrl, 100);
    return _react2.default.createElement(ProductShort, {
      id: product.id,
      name: product.name,
      thumbnailUrl: thumbnailUrl,
      priceFormatted: priceFormatted,
      enabled: product.enabled,
      discontinued: product.discontinued,
      actions: actions
    });
  } else {
    // product doesn't exist
    return _react2.default.createElement(ProductShort, {
      id: '-',
      name: '',
      thumbnailUrl: '',
      priceFormatted: '',
      actions: actions
    });
  }
};

var ProductsArray = function (_React$Component) {
  _inherits(ProductsArray, _React$Component);

  function ProductsArray(props) {
    _classCallCheck(this, ProductsArray);

    var _this = _possibleConstructorReturn(this, (ProductsArray.__proto__ || Object.getPrototypeOf(ProductsArray)).call(this, props));

    _this.showAddItem = function () {
      _this.setState({ showAddItem: true });
    };

    _this.hideAddItem = function () {
      _this.setState({ showAddItem: false });
    };

    _this.addItem = function (productId) {
      _this.hideAddItem();
      _this.props.fields.push(productId);
    };

    _this.fetchProducts = function (ids) {
      if (ids && Array.isArray(ids) && ids.length > 0) {
        _api2.default.products.list({
          limit: 50,
          fields: 'id,name,enabled,discontinued,price,on_sale,regular_price,images',
          ids: ids
        }).then(function (productsResponse) {
          _this.setState({ products: productsResponse.json.data });
        });
      } else {
        _this.setState({
          products: []
        });
      }
    };

    _this.state = {
      showAddItem: false,
      products: []
    };
    return _this;
  }

  _createClass(ProductsArray, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var ids = this.props.fields.getAll();
      this.fetchProducts(ids);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var currentIds = this.props.fields.getAll();
      var newIds = nextProps.fields.getAll();

      if (currentIds !== newIds) {
        this.fetchProducts(newIds);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          settings = _props.settings,
          fields = _props.fields,
          _props$meta = _props.meta,
          touched = _props$meta.touched,
          error = _props$meta.error,
          submitFailed = _props$meta.submitFailed;
      var products = this.state.products;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _Paper2.default,
          { className: _style2.default.relatedProducts, zDepth: 1 },
          fields.map(function (field, index) {
            var actions = _react2.default.createElement(RelatedProductActions, { fields: fields, index: index });
            var productId = fields.get(index);
            var product = products.find(function (item) {
              return item.id === productId;
            });
            return _react2.default.createElement(RelatedProduct, { key: index, settings: settings, product: product, actions: actions });
          }),
          _react2.default.createElement(_productSearch2.default, {
            open: this.state.showAddItem,
            title: _text2.default.addOrderItem,
            settings: settings,
            onSubmit: this.addItem,
            onCancel: this.hideAddItem,
            submitLabel: _text2.default.add,
            cancelLabel: _text2.default.cancel
          })
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_RaisedButton2.default, { label: _text2.default.addOrderItem, onClick: this.showAddItem })
        )
      );
    }
  }]);

  return ProductsArray;
}(_react2.default.Component);

var ProductAdditionalForm = function ProductAdditionalForm(_ref5) {
  var handleSubmit = _ref5.handleSubmit,
      pristine = _ref5.pristine,
      reset = _ref5.reset,
      submitting = _ref5.submitting,
      initialValues = _ref5.initialValues,
      settings = _ref5.settings;

  return _react2.default.createElement(
    'form',
    { onSubmit: handleSubmit },
    _react2.default.createElement(
      _Paper2.default,
      { className: 'paper-box', zDepth: 1 },
      _react2.default.createElement(
        'div',
        { className: _style2.default.innerBox },
        _text2.default.tags,
        _react2.default.createElement(_reduxForm.Field, { name: 'tags', component: TagsField, placeholder: _text2.default.newTag }),
        _react2.default.createElement(
          'div',
          { style: { marginBottom: 20 } },
          _react2.default.createElement(_reduxForm.Field, { name: 'position', component: _reduxFormMaterialUi.TextField, floatingLabelText: _text2.default.position, fullWidth: false, type: 'number' })
        ),
        _text2.default.relatedProducts,
        _react2.default.createElement(_reduxForm.FieldArray, { name: 'related_product_ids', component: ProductsArray, settings: settings })
      ),
      _react2.default.createElement(
        'div',
        { className: "buttons-box " + (pristine ? "buttons-box-pristine" : "buttons-box-show") },
        _react2.default.createElement(_FlatButton2.default, { label: _text2.default.cancel, className: _style2.default.button, onClick: reset, disabled: pristine || submitting }),
        _react2.default.createElement(_RaisedButton2.default, { type: 'submit', label: _text2.default.save, primary: true, className: _style2.default.button, disabled: pristine || submitting })
      )
    )
  );
};

exports.default = (0, _reduxForm.reduxForm)({
  form: 'ProductAdditionalForm',
  enableReinitialize: true
})(ProductAdditionalForm);