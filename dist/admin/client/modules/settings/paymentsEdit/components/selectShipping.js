'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reduxForm = require('redux-form');

var _List = require('material-ui/List');

var _Checkbox = require('material-ui/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectShippingMethodsField = function (_React$Component) {
  _inherits(SelectShippingMethodsField, _React$Component);

  function SelectShippingMethodsField(props) {
    _classCallCheck(this, SelectShippingMethodsField);

    var _this = _possibleConstructorReturn(this, (SelectShippingMethodsField.__proto__ || Object.getPrototypeOf(SelectShippingMethodsField)).call(this, props));

    _initialiseProps.call(_this);

    var ids = Array.isArray(props.input.value) ? props.input.value : [];
    _this.state = {
      selectedIds: ids
    };
    return _this;
  }

  _createClass(SelectShippingMethodsField, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var newIds = Array.isArray(nextProps.input.value) ? nextProps.input.value : [];
      if (newIds !== this.state.selectedIds) {
        this.setState({
          selectedIds: newIds
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var items = this.props.shippingMethods.map(function (method) {
        return _react2.default.createElement(_List.ListItem, { key: method.id,
          leftCheckbox: _react2.default.createElement(_Checkbox2.default, { checked: _this2.isCheckboxChecked(method.id), onCheck: function onCheck(e, isChecked) {
              _this2.onCheckboxChecked(method.id);
            } }),
          primaryText: method.name,
          secondaryText: method.description
        });
      });

      return _react2.default.createElement(
        _List.List,
        null,
        items
      );
    }
  }]);

  return SelectShippingMethodsField;
}(_react2.default.Component);

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.onCheckboxChecked = function (methodId) {
    var ids = _this3.state.selectedIds;
    if (ids.includes(methodId)) {
      ids = ids.filter(function (id) {
        return id !== methodId;
      });
    } else {
      ids.push(methodId);
    }
    _this3.setState({ selectedIds: ids });
    _this3.props.input.onChange(ids);
  };

  this.isCheckboxChecked = function (methodId) {
    return _this3.state.selectedIds.includes(methodId);
  };
};

exports.default = SelectShippingMethodsField;