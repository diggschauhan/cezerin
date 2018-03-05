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

var _List = require('material-ui/List');

var _FontIcon = require('material-ui/FontIcon');

var _FontIcon2 = _interopRequireDefault(_FontIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  selectedItem: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)'
  },
  innerItem: {
    paddingLeft: 55
  },
  nestedListStyle: {
    padding: '0 0 0 15px'
  }
};

var FolderIcon = _react2.default.createElement(
  _FontIcon2.default,
  { className: 'material-icons' },
  'folder'
);
var DraftIcon = _react2.default.createElement(
  _FontIcon2.default,
  { className: 'material-icons' },
  'visibility_off'
);

var Item = function (_React$PureComponent) {
  _inherits(Item, _React$PureComponent);

  function Item(props) {
    _classCallCheck(this, Item);

    var _this = _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).call(this, props));

    _this.handleClick = function () {
      var item = _this.props.item;

      _this.props.onSelect(item.id);
    };

    return _this;
  }

  _createClass(Item, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          item = _props.item,
          opened = _props.opened,
          selectedId = _props.selectedId,
          nestedItems = _props.nestedItems;

      var icon = item.enabled ? FolderIcon : DraftIcon;
      var style = item.id === selectedId ? styles.selectedItem : null;

      return _react2.default.createElement(_List.ListItem, {
        className: 'treeItem',
        initiallyOpen: opened,
        style: style,
        innerDivStyle: styles.innerItem,
        primaryText: item.name,
        nestedItems: nestedItems,
        leftIcon: icon,
        onClick: this.handleClick,
        nestedListStyle: styles.nestedListStyle
      });
    }
  }]);

  return Item;
}(_react2.default.PureComponent);

var Categories = function (_React$Component) {
  _inherits(Categories, _React$Component);

  function Categories(props) {
    _classCallCheck(this, Categories);

    var _this2 = _possibleConstructorReturn(this, (Categories.__proto__ || Object.getPrototypeOf(Categories)).call(this, props));

    _this2.handleClickAll = function () {
      _this2.props.onSelect('all');
    };

    _this2.handleClickRoot = function () {
      _this2.props.onSelect('root');
    };

    return _this2;
  }

  _createClass(Categories, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.onLoad();
    }
  }, {
    key: 'getItem',
    value: function getItem(selectedId, allItems, item, opened) {
      var nestedItems = this.getChildren(selectedId, allItems, item.id, opened);
      return _react2.default.createElement(Item, {
        key: item.id,
        item: item,
        opened: opened,
        selectedId: selectedId,
        nestedItems: nestedItems,
        onSelect: this.props.onSelect
      });
    }
  }, {
    key: 'getChildren',
    value: function getChildren(selectedId, allItems, id, opened) {
      var _this3 = this;

      if (allItems && id) {
        return allItems.filter(function (item) {
          return item.parent_id === id;
        }).map(function (item) {
          return _this3.getItem(selectedId, allItems, item, opened);
        });
      } else {
        return [];
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props2 = this.props,
          selectedId = _props2.selectedId,
          items = _props2.items,
          _props2$showAll = _props2.showAll,
          showAll = _props2$showAll === undefined ? false : _props2$showAll,
          _props2$showRoot = _props2.showRoot,
          showRoot = _props2$showRoot === undefined ? false : _props2$showRoot,
          _props2$showManage = _props2.showManage,
          showManage = _props2$showManage === undefined ? false : _props2$showManage,
          _props2$rootName = _props2.rootName,
          rootName = _props2$rootName === undefined ? _text2.default.productCategories_root : _props2$rootName,
          _props2$allName = _props2.allName,
          allName = _props2$allName === undefined ? _text2.default.productCategories_all : _props2$allName,
          _props2$opened = _props2.opened,
          opened = _props2$opened === undefined ? false : _props2$opened;


      var rows = items.filter(function (item) {
        return item.parent_id === null;
      }).map(function (item) {
        return _this4.getItem(selectedId, items, item, opened);
      });

      return _react2.default.createElement(
        _List.List,
        null,
        showRoot && _react2.default.createElement(_List.ListItem, {
          primaryText: rootName,
          style: 'root' === selectedId ? styles.selectedItem : null,
          innerDivStyle: styles.innerItem,
          leftIcon: _react2.default.createElement(
            _FontIcon2.default,
            { className: 'material-icons' },
            'home'
          ),
          onClick: this.handleClickRoot
        }),
        showAll && _react2.default.createElement(_List.ListItem, {
          className: 'treeItem',
          primaryText: allName,
          style: 'all' === selectedId ? styles.selectedItem : null,
          innerDivStyle: styles.innerItem,
          leftIcon: _react2.default.createElement(
            _FontIcon2.default,
            { className: 'material-icons' },
            'folder'
          ),
          onClick: this.handleClickAll
        }),
        rows,
        showManage && _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/admin/products/categories', style: { textDecoration: 'none' } },
          _react2.default.createElement(_List.ListItem, {
            className: 'treeItem',
            primaryText: _text2.default.productCategories_titleEditMany,
            innerDivStyle: styles.innerItem,
            leftIcon: _react2.default.createElement(
              _FontIcon2.default,
              { className: 'material-icons' },
              'settings'
            )
          })
        )
      );
    }
  }]);

  return Categories;
}(_react2.default.Component);

exports.default = Categories;