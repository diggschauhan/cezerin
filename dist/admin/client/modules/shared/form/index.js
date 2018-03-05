'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MultiSelect = exports.ColorField = exports.NumberField = exports.CustomToggle = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Toggle = require('material-ui/Toggle');

var _Toggle2 = _interopRequireDefault(_Toggle);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _Checkbox = require('material-ui/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _List = require('material-ui/List');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CustomToggle = exports.CustomToggle = function CustomToggle(_ref) {
  var input = _ref.input,
      label = _ref.label,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === undefined ? false : _ref$disabled,
      style = _ref.style;

  return _react2.default.createElement(_Toggle2.default, {
    label: label,
    toggled: input.value ? true : false,
    onToggle: function onToggle(event, isInputChecked) {
      input.onChange(isInputChecked);
    },
    className: className,
    disabled: disabled,
    style: style
  });
};

var NumberField = exports.NumberField = function NumberField(_ref2) {
  var input = _ref2.input,
      label = _ref2.label,
      _ref2$className = _ref2.className,
      className = _ref2$className === undefined ? '' : _ref2$className,
      _ref2$disabled = _ref2.disabled,
      disabled = _ref2$disabled === undefined ? false : _ref2$disabled,
      style = _ref2.style;
  return _react2.default.createElement(_TextField2.default, {
    floatingLabelText: label,
    fullWidth: true,
    disabled: disabled,
    value: input.value,
    type: 'number',
    onChange: function onChange(event, value) {
      var number = parseFloat(value);
      number = number ? number : 0;
      input.onChange(number);
    }
  });
};

var ColorField = exports.ColorField = function ColorField(_ref3) {
  var input = _ref3.input,
      _ref3$meta = _ref3.meta,
      touched = _ref3$meta.touched,
      error = _ref3$meta.error;
  return _react2.default.createElement('input', _extends({}, input, { type: 'color' }));
};

var MultiSelect = exports.MultiSelect = function (_React$Component) {
  _inherits(MultiSelect, _React$Component);

  function MultiSelect(props) {
    _classCallCheck(this, MultiSelect);

    var _this = _possibleConstructorReturn(this, (MultiSelect.__proto__ || Object.getPrototypeOf(MultiSelect)).call(this, props));

    _this.onCheckboxChecked = function (item) {
      var selectedItems = _this.state.selectedItems;

      var newSelectedItems = [];
      if (selectedItems.includes(item)) {
        newSelectedItems = selectedItems.filter(function (i) {
          return i !== item;
        });
      } else {
        newSelectedItems = [].concat(_toConsumableArray(selectedItems), [item]);
      }
      newSelectedItems.sort();
      _this.setState({ selectedItems: newSelectedItems });
      _this.props.input.onChange(newSelectedItems);
    };

    _this.isCheckboxChecked = function (item) {
      return _this.state.selectedItems.includes(item);
    };

    var values = Array.isArray(props.input.value) ? props.input.value : [];
    _this.state = {
      selectedItems: values
    };
    return _this;
  }

  _createClass(MultiSelect, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var values = Array.isArray(nextProps.input.value) ? nextProps.input.value : [];
      if (values !== this.state.selectedItems) {
        this.setState({
          selectedItems: values
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          items = _props.items,
          disabled = _props.disabled,
          _props$columns = _props.columns,
          columns = _props$columns === undefined ? 2 : _props$columns;

      var columnsClass = 12 / columns;

      var elements = items.map(function (item, index) {
        return _react2.default.createElement(
          'div',
          { className: 'col-xs-12 col-sm-' + columnsClass, key: index },
          item && item !== '' && _react2.default.createElement(_List.ListItem, { leftCheckbox: _react2.default.createElement(_Checkbox2.default, {
              checked: _this2.isCheckboxChecked(item),
              disabled: disabled,
              onCheck: function onCheck(e, isChecked) {
                _this2.onCheckboxChecked(item);
              }
            }),
            primaryText: item
          })
        );
      });

      return _react2.default.createElement(
        _List.List,
        null,
        _react2.default.createElement(
          'div',
          { className: 'row' },
          elements
        )
      );
    }
  }]);

  return MultiSelect;
}(_react2.default.Component);