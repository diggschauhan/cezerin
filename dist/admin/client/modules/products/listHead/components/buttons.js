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

var _select = require('modules/productCategories/select');

var _select2 = _interopRequireDefault(_select);

var _deleteConfirmation = require('modules/shared/deleteConfirmation');

var _deleteConfirmation2 = _interopRequireDefault(_deleteConfirmation);

var _FontIcon = require('material-ui/FontIcon');

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _IconMenu = require('material-ui/IconMenu');

var _IconMenu2 = _interopRequireDefault(_IconMenu);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Dialog = require('material-ui/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

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

    _this.showMoveTo = function () {
      _this.setState({ openMoveTo: true });
    };

    _this.openDelete = function () {
      _this.setState({ openDelete: true });
    };

    _this.closeDelete = function () {
      _this.setState({ openDelete: false });
    };

    _this.deleteProduct = function () {
      _this.setState({ openDelete: false });
      _this.props.onDelete();
    };

    _this.closeMoveTo = function () {
      _this.setState({ openMoveTo: false });
    };

    _this.saveMoveTo = function () {
      _this.setState({ openMoveTo: false });
      _this.props.onMoveTo(_this.state.categoryIdMoveTo);
    };

    _this.selectMoveTo = function (categoryId) {
      _this.setState({ categoryIdMoveTo: categoryId });
    };

    _this.state = {
      categoryIdMoveTo: null,
      openMoveTo: false,
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


      var actionsMoveTo = [_react2.default.createElement(_FlatButton2.default, {
        label: _text2.default.cancel,
        onClick: this.closeMoveTo,
        style: { marginRight: 10 }
      }), _react2.default.createElement(_FlatButton2.default, {
        label: _text2.default.actions_moveHere,
        primary: true,
        keyboardFocused: true,
        onClick: this.saveMoveTo
      })];

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
          _react2.default.createElement(
            _IconButton2.default,
            { touch: true, tooltipPosition: 'bottom-left', tooltip: _text2.default.actions_moveTo, onClick: this.showMoveTo },
            _react2.default.createElement(
              _FontIcon2.default,
              { color: '#fff', className: 'material-icons' },
              'folder'
            )
          ),
          _react2.default.createElement(_deleteConfirmation2.default, {
            open: this.state.openDelete,
            isSingle: false,
            itemsCount: selectedCount,
            onCancel: this.closeDelete,
            onDelete: this.deleteProduct
          }),
          _react2.default.createElement(
            _Dialog2.default,
            {
              title: _text2.default.actions_moveTo,
              actions: actionsMoveTo,
              modal: false,
              open: this.state.openMoveTo,
              onRequestClose: this.closeMoveTo,
              autoScrollBodyContent: true
            },
            _react2.default.createElement(_select2.default, {
              onSelect: this.selectMoveTo,
              selectedId: this.state.categoryIdMoveTo,
              opened: true
            })
          )
        ),
        _react2.default.createElement(
          _IconButton2.default,
          { touch: true, tooltipPosition: 'bottom-left', tooltip: _text2.default.addProduct, onClick: onCreate },
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