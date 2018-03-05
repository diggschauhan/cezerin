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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OptionValueEdit = function (_React$Component) {
  _inherits(OptionValueEdit, _React$Component);

  function OptionValueEdit(props) {
    _classCallCheck(this, OptionValueEdit);

    var _this = _possibleConstructorReturn(this, (OptionValueEdit.__proto__ || Object.getPrototypeOf(OptionValueEdit)).call(this, props));

    _this.onChange = function (e) {
      _this.setState({ value: e.target.value });
    };

    _this.onBlur = function (e) {
      _this.props.onChange(_this.props.value.id, _this.state.value);
    };

    _this.onDelete = function () {
      _this.props.onDelete(_this.props.value.id);
    };

    _this.state = {
      value: props.value.name
    };
    _this.onChange = _this.onChange.bind(_this);
    _this.onBlur = _this.onBlur.bind(_this);
    _this.onDelete = _this.onDelete.bind(_this);
    return _this;
  }

  _createClass(OptionValueEdit, [{
    key: 'render',
    value: function render() {
      var value = this.state.value;


      return _react2.default.createElement(
        'div',
        { className: _style2.default.gridRow },
        _react2.default.createElement(
          'div',
          { className: _style2.default.gridColInput },
          _react2.default.createElement('input', { type: 'text', className: _style2.default.textInput, value: value, onChange: this.onChange, onBlur: this.onBlur })
        ),
        _react2.default.createElement(
          'div',
          { className: _style2.default.gridColButton },
          _react2.default.createElement(
            _IconButton2.default,
            { title: _text2.default.actions_delete, onClick: this.onDelete, tabIndex: -1 },
            _react2.default.createElement(
              _FontIcon2.default,
              { color: '#a1a1a1', className: 'material-icons' },
              'delete'
            )
          )
        )
      );
    }
  }]);

  return OptionValueEdit;
}(_react2.default.Component);

var OptionValueAdd = function (_React$Component2) {
  _inherits(OptionValueAdd, _React$Component2);

  function OptionValueAdd(props) {
    _classCallCheck(this, OptionValueAdd);

    var _this2 = _possibleConstructorReturn(this, (OptionValueAdd.__proto__ || Object.getPrototypeOf(OptionValueAdd)).call(this, props));

    _this2.onChange = function (e) {
      _this2.setState({ value: e.target.value });
    };

    _this2.onCreate = function () {
      if (_this2.state.value !== '') {
        _this2.props.onCreate(_this2.state.value);
        _this2.setState({ value: '' });
      }
    };

    _this2.state = {
      value: ''
    };
    _this2.onChange = _this2.onChange.bind(_this2);
    _this2.onCreate = _this2.onCreate.bind(_this2);
    _this2.handleKeyPress = _this2.handleKeyPress.bind(_this2);
    return _this2;
  }

  _createClass(OptionValueAdd, [{
    key: 'handleKeyPress',
    value: function handleKeyPress(e) {
      if (e.keyCode === 13 || e.which === 13) {
        this.onCreate();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var value = this.state.value;


      return _react2.default.createElement(
        'div',
        { className: _style2.default.gridRow },
        _react2.default.createElement(
          'div',
          { className: _style2.default.gridColInput },
          _react2.default.createElement('input', { type: 'text', className: _style2.default.textInput, value: value, placeholder: _text2.default.newOptionValue, onChange: this.onChange, onKeyPress: this.handleKeyPress })
        ),
        _react2.default.createElement(
          'div',
          { className: _style2.default.gridColButton },
          _react2.default.createElement(
            _IconButton2.default,
            { title: _text2.default.add, onClick: this.onCreate, tabIndex: -1 },
            _react2.default.createElement(
              _FontIcon2.default,
              { color: '#a1a1a1', className: 'material-icons' },
              'add_circle'
            )
          )
        )
      );
    }
  }]);

  return OptionValueAdd;
}(_react2.default.Component);

var OptionValues = function OptionValues(_ref) {
  var optionValues = _ref.optionValues,
      createOptionValue = _ref.createOptionValue,
      updateOptionValue = _ref.updateOptionValue,
      deleteOptionValue = _ref.deleteOptionValue;

  var valueRows = optionValues.map(function (value, index) {
    return _react2.default.createElement(OptionValueEdit, { key: index, value: value, onChange: updateOptionValue, onDelete: deleteOptionValue });
  });

  return _react2.default.createElement(
    _Paper2.default,
    { className: 'paper-box', zDepth: 1 },
    _react2.default.createElement(
      'div',
      { className: 'blue-title', style: { padding: '20px 30px' } },
      _text2.default.optionValues
    ),
    _react2.default.createElement(
      'div',
      { className: _style2.default.grid },
      valueRows,
      _react2.default.createElement(OptionValueAdd, { onCreate: createOptionValue })
    )
  );
};

exports.default = OptionValues;