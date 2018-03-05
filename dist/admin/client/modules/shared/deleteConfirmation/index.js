'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _text = require('lib/text');

var _text2 = _interopRequireDefault(_text);

var _Dialog = require('material-ui/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ConfirmationDialog = function (_React$Component) {
  _inherits(ConfirmationDialog, _React$Component);

  function ConfirmationDialog(props) {
    _classCallCheck(this, ConfirmationDialog);

    var _this = _possibleConstructorReturn(this, (ConfirmationDialog.__proto__ || Object.getPrototypeOf(ConfirmationDialog)).call(this, props));

    _this.close = function () {
      _this.setState({ open: false });
    };

    _this.handleCancel = function () {
      _this.close();
      if (_this.props.onCancel) {
        _this.props.onCancel();
      }
    };

    _this.handleDelete = function () {
      _this.close();
      if (_this.props.onDelete) {
        _this.props.onDelete();
      }
    };

    _this.state = {
      open: props.open
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
          _props$isSingle = _props.isSingle,
          isSingle = _props$isSingle === undefined ? true : _props$isSingle,
          _props$itemsCount = _props.itemsCount,
          itemsCount = _props$itemsCount === undefined ? 0 : _props$itemsCount,
          _props$itemName = _props.itemName,
          itemName = _props$itemName === undefined ? '' : _props$itemName;


      var title = isSingle ? _text2.default.singleDeleteTitle.replace('{name}', itemName) : _text2.default.multipleDeleteTitle.replace('{count}', itemsCount);

      var description = isSingle ? _text2.default.singleDeleteDescription : _text2.default.multipleDeleteDescription.replace('{count}', itemsCount);

      var actions = [_react2.default.createElement(_FlatButton2.default, {
        label: _text2.default.cancel,
        onClick: this.handleCancel,
        style: { marginRight: 10 }
      }), _react2.default.createElement(_FlatButton2.default, {
        label: _text2.default.actions_delete,
        primary: true,
        keyboardFocused: true,
        onClick: this.handleDelete
      })];

      return _react2.default.createElement(
        _Dialog2.default,
        {
          title: title,
          actions: actions,
          modal: false,
          open: this.state.open,
          onRequestClose: this.handleCancel,
          contentStyle: { maxWidth: 540 },
          titleStyle: { fontSize: '18px', lineHeight: '28px' }
        },
        _react2.default.createElement(
          'div',
          { style: { wordWrap: 'break-word' } },
          description
        )
      );
    }
  }]);

  return ConfirmationDialog;
}(_react2.default.Component);

exports.default = ConfirmationDialog;