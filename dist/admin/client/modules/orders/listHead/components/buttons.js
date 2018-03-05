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

var _deleteConfirmation = require('modules/shared/deleteConfirmation');

var _deleteConfirmation2 = _interopRequireDefault(_deleteConfirmation);

var _FontIcon = require('material-ui/FontIcon');

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _IconMenu = require('material-ui/IconMenu');

var _IconMenu2 = _interopRequireDefault(_IconMenu);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _Dialog = require('material-ui/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _search = require('./search');

var _search2 = _interopRequireDefault(_search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Fragment = _react2.default.Fragment;

var Buttons = function (_React$Component) {
  _inherits(Buttons, _React$Component);

  function Buttons(props) {
    _classCallCheck(this, Buttons);

    var _this = _possibleConstructorReturn(this, (Buttons.__proto__ || Object.getPrototypeOf(Buttons)).call(this, props));

    _this.openDelete = function () {
      _this.setState({ openDelete: true });
    };

    _this.closeDelete = function () {
      _this.setState({ openDelete: false });
    };

    _this.deleteOrders = function () {
      _this.setState({ openDelete: false });
      _this.props.onDelete();
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
          search = _props.search,
          setSearch = _props.setSearch,
          selectedCount = _props.selectedCount,
          onDelete = _props.onDelete,
          onCreate = _props.onCreate;


      return _react2.default.createElement(
        Fragment,
        null,
        _react2.default.createElement(_search2.default, { value: search, setSearch: setSearch }),
        selectedCount > 0 && _react2.default.createElement(
          Fragment,
          null,
          _react2.default.createElement(
            _IconButton2.default,
            { touch: true, tooltipPosition: 'bottom-left', tooltip: _text2.default.actions_delete, onClick: this.openDelete },
            _react2.default.createElement(
              _FontIcon2.default,
              { color: '#fff', className: 'material-icons' },
              'delete'
            )
          ),
          _react2.default.createElement(_deleteConfirmation2.default, {
            open: this.state.openDelete,
            isSingle: false,
            itemsCount: selectedCount,
            onCancel: this.closeDelete,
            onDelete: this.deleteOrders
          })
        ),
        _react2.default.createElement(
          _IconButton2.default,
          { touch: true, tooltipPosition: 'bottom-left', tooltip: _text2.default.orders_titleAdd, onClick: onCreate },
          _react2.default.createElement(
            _FontIcon2.default,
            { color: '#fff', className: 'material-icons' },
            'add'
          )
        )
      );
    }
  }]);

  return Buttons;
}(_react2.default.Component);

exports.default = Buttons;