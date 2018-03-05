'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _text = require('lib/text');

var _text2 = _interopRequireDefault(_text);

var _api = require('lib/api');

var _api2 = _interopRequireDefault(_api);

var _helper = require('lib/helper');

var helper = _interopRequireWildcard(_helper);

var _Dialog = require('material-ui/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _Table = require('material-ui/Table');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchBox = function SearchBox(_ref) {
  var text = _ref.text,
      onChange = _ref.onChange;

  return _react2.default.createElement(_TextField2.default, {
    fullWidth: true,
    floatingLabelText: _text2.default.products_search,
    onChange: onChange,
    value: text
  });
};

var SearchResult = function SearchResult(_ref2) {
  var products = _ref2.products,
      selectedId = _ref2.selectedId,
      settings = _ref2.settings,
      onSelect = _ref2.onSelect;

  var rows = products.map(function (product, index) {
    var priceFormatted = helper.formatCurrency(product.price, settings);
    var isSelected = product.id === selectedId;

    return _react2.default.createElement(
      _Table.TableRow,
      { key: index, selected: isSelected },
      _react2.default.createElement(
        _Table.TableRowColumn,
        null,
        product.name
      ),
      _react2.default.createElement(
        _Table.TableRowColumn,
        null,
        product.category_name
      ),
      _react2.default.createElement(
        _Table.TableRowColumn,
        null,
        product.sku
      ),
      _react2.default.createElement(
        _Table.TableRowColumn,
        { style: { textAlign: 'right' } },
        priceFormatted
      )
    );
  });

  return _react2.default.createElement(
    _Table.Table,
    {
      height: '400px',
      selectable: true,
      multiSelectable: false,
      onRowSelection: onSelect },
    _react2.default.createElement(
      _Table.TableBody,
      null,
      rows
    )
  );
};

var ConfirmationDialog = function (_React$Component) {
  _inherits(ConfirmationDialog, _React$Component);

  function ConfirmationDialog(props) {
    _classCallCheck(this, ConfirmationDialog);

    var _this = _possibleConstructorReturn(this, (ConfirmationDialog.__proto__ || Object.getPrototypeOf(ConfirmationDialog)).call(this, props));

    _this.handleCancel = function () {
      _this.setState({ open: false });
      if (_this.props.onCancel) {
        _this.props.onCancel();
      }
    };

    _this.handleSubmit = function () {
      _this.setState({ open: false });
      if (_this.props.onSubmit) {
        _this.props.onSubmit(_this.state.selectedId);
      }
    };

    _this.handleRowSelection = function (selectedRows) {
      if (selectedRows && selectedRows.length > 0) {
        var selectedIndex = selectedRows[0];
        var selectedProductId = _this.state.products && _this.state.products.length >= selectedIndex ? _this.state.products[selectedIndex].id : null;
        _this.setState({
          selectedId: selectedProductId
        });
      }
    };

    _this.handleSearch = function (event, value) {
      _this.setState({ search: value });

      _api2.default.products.list({
        limit: 50,
        enabled: true,
        discontinued: false,
        fields: 'id,name,category_id,category_name,sku,enabled,discontinued,price,on_sale,regular_price',
        search: value
      }).then(function (productsResponse) {
        _this.setState({
          products: productsResponse.json.data
        });
      });
    };

    _this.state = {
      open: props.open,
      products: [],
      search: '',
      selectedId: null
    };
    return _this;
  }

  _createClass(ConfirmationDialog, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.state.open !== nextProps.open) {
        this.setState({
          open: nextProps.open
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          submitLabel = _props.submitLabel,
          cancelLabel = _props.cancelLabel,
          _props$modal = _props.modal,
          modal = _props$modal === undefined ? false : _props$modal,
          settings = _props.settings;


      var actions = [_react2.default.createElement(_FlatButton2.default, {
        label: cancelLabel,
        onClick: this.handleCancel,
        style: { marginRight: 10 }
      }), _react2.default.createElement(_FlatButton2.default, {
        label: submitLabel,
        primary: true,
        onClick: this.handleSubmit
      })];

      return _react2.default.createElement(
        _Dialog2.default,
        {
          title: title,
          actions: actions,
          actionsContainerStyle: { borderTop: '1px solid rgb(224, 224, 224)' },
          modal: modal,
          open: this.state.open,
          onRequestClose: this.handleCancel
        },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(SearchBox, { text: this.state.search, onChange: this.handleSearch }),
          _react2.default.createElement(SearchResult, { products: this.state.products, selectedId: this.state.selectedId, onSelect: this.handleRowSelection, settings: settings })
        )
      );
    }
  }]);

  return ConfirmationDialog;
}(_react2.default.Component);

exports.default = ConfirmationDialog;