'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _text = require('lib/text');

var _text2 = _interopRequireDefault(_text);

var _deleteConfirmation = require('modules/shared/deleteConfirmation');

var _deleteConfirmation2 = _interopRequireDefault(_deleteConfirmation);

var _FontIcon = require('material-ui/FontIcon');

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Dialog = require('material-ui/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Buttons = function (_React$Component) {
  _inherits(Buttons, _React$Component);

  function Buttons(props) {
    _classCallCheck(this, Buttons);

    var _this = _possibleConstructorReturn(this, (Buttons.__proto__ || Object.getPrototypeOf(Buttons)).call(this, props));

    _this.showDelete = function () {
      _this.setState({ openDelete: true });
    };

    _this.closeDelete = function () {
      _this.setState({ openDelete: false });
    };

    _this.deleteGroup = function () {
      _this.setState({ openDelete: false });
      _this.props.onDelete(_this.props.paymentMethod.id);
    };

    _this.state = {
      openDelete: false
    };
    return _this;
  }

  _createClass(Buttons, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          paymentMethod = _props.paymentMethod,
          onDelete = _props.onDelete;

      var methodName = paymentMethod && paymentMethod.name && paymentMethod.name.length > 0 ? paymentMethod.name : 'Draft';

      return _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement(
          _IconButton2.default,
          { touch: true, tooltipPosition: 'bottom-left', tooltip: _text2.default.actions_delete, onClick: this.showDelete },
          _react2.default.createElement(
            _FontIcon2.default,
            { color: '#fff', className: 'material-icons' },
            'delete'
          )
        ),
        _react2.default.createElement(_deleteConfirmation2.default, {
          open: this.state.openDelete,
          isSingle: true,
          itemsCount: 1,
          itemName: methodName,
          onCancel: this.closeDelete,
          onDelete: this.deleteGroup
        })
      );
    }
  }]);

  return Buttons;
}(_react2.default.Component);

exports.default = Buttons;