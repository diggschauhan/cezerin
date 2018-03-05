'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

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

    _this.handleCancel = function () {
      _this.setState({ open: false });
      if (_this.props.onCancel) {
        _this.props.onCancel();
      }
    };

    _this.handleSubmit = function () {
      _this.setState({ open: false });
      if (_this.props.onSubmit) {
        _this.props.onSubmit();
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
          title = _props.title,
          description = _props.description,
          submitLabel = _props.submitLabel,
          cancelLabel = _props.cancelLabel,
          _props$modal = _props.modal,
          modal = _props$modal === undefined ? false : _props$modal;


      var actions = [_react2.default.createElement(_FlatButton2.default, {
        label: cancelLabel,
        onClick: this.handleCancel,
        style: { marginRight: 10 }
      }), _react2.default.createElement(_FlatButton2.default, {
        label: submitLabel,
        primary: true,
        keyboardFocused: true,
        onClick: this.handleSubmit
      })];

      return _react2.default.createElement(
        _Dialog2.default,
        {
          title: title,
          actions: actions,
          modal: modal,
          open: this.state.open,
          onRequestClose: this.handleCancel
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