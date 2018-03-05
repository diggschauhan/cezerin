'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _text = require('lib/text');

var _text2 = _interopRequireDefault(_text);

var _helper = require('lib/helper');

var helper = _interopRequireWildcard(_helper);

var _deleteConfirmation = require('modules/shared/deleteConfirmation');

var _deleteConfirmation2 = _interopRequireDefault(_deleteConfirmation);

var _style = require('./style.css');

var _style2 = _interopRequireDefault(_style);

var _fileUploader = require('./fileUploader');

var _fileUploader2 = _interopRequireDefault(_fileUploader);

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _FontIcon = require('material-ui/FontIcon');

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _IconMenu = require('material-ui/IconMenu');

var _IconMenu2 = _interopRequireDefault(_IconMenu);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Fragment = _react2.default.Fragment;

var iconButtonElement = _react2.default.createElement(
  _IconButton2.default,
  { touch: true },
  _react2.default.createElement(
    _FontIcon2.default,
    { color: 'rgb(189, 189, 189)', className: 'material-icons' },
    'more_vert'
  )
);

var FileItem = function (_React$Component) {
  _inherits(FileItem, _React$Component);

  function FileItem(props) {
    _classCallCheck(this, FileItem);

    var _this = _possibleConstructorReturn(this, (FileItem.__proto__ || Object.getPrototypeOf(FileItem)).call(this, props));

    _this.showDelete = function () {
      _this.setState({ openDelete: true });
    };

    _this.hideDelete = function () {
      _this.setState({ openDelete: false });
    };

    _this.handleDelete = function () {
      var fileName = _this.props.file.file;
      _this.props.onDelete(fileName);
      _this.hideDelete();
    };

    _this.state = {
      openDelete: false
    };
    return _this;
  }

  _createClass(FileItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          file = _props.file,
          settings = _props.settings;

      var fileName = file.file;
      var fileUrl = settings.domain + '/' + file.file;
      var modifiedDate = (0, _moment2.default)(file.modified);
      var modifiedDateFormated = modifiedDate.format('' + settings.date_format);
      var fileSizeFormated = helper.formatFileSize(file.size);

      return _react2.default.createElement(
        'div',
        { className: _style2.default.item + " row row--no-gutter middle-xs" },
        _react2.default.createElement(
          'div',
          { className: _style2.default.name + " col-xs-5" },
          _react2.default.createElement(
            'a',
            { href: fileUrl, target: '_blank', rel: 'noopener' },
            file.file
          )
        ),
        _react2.default.createElement(
          'div',
          { className: _style2.default.date + " col-xs-3" },
          modifiedDateFormated
        ),
        _react2.default.createElement(
          'div',
          { className: _style2.default.size + " col-xs-2" },
          fileSizeFormated
        ),
        _react2.default.createElement(
          'div',
          { className: _style2.default.more + " col-xs-2" },
          _react2.default.createElement(
            _IconMenu2.default,
            { iconButtonElement: iconButtonElement },
            _react2.default.createElement(
              _MenuItem2.default,
              { onClick: this.showDelete },
              _text2.default.actions_delete
            )
          ),
          _react2.default.createElement(_deleteConfirmation2.default, {
            open: this.state.openDelete,
            isSingle: true,
            itemsCount: 1,
            itemName: fileName,
            onCancel: this.hideDelete,
            onDelete: this.handleDelete
          })
        )
      );
    }
  }]);

  return FileItem;
}(_react2.default.Component);

var FileList = function (_React$Component2) {
  _inherits(FileList, _React$Component2);

  function FileList(props) {
    _classCallCheck(this, FileList);

    return _possibleConstructorReturn(this, (FileList.__proto__ || Object.getPrototypeOf(FileList)).call(this, props));
  }

  _createClass(FileList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.onLoad();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          files = _props2.files,
          settings = _props2.settings,
          onDelete = _props2.onDelete,
          onUpload = _props2.onUpload,
          uploading = _props2.uploading;

      var listItems = files.map(function (file, index) {
        return _react2.default.createElement(FileItem, { key: index, file: file, settings: settings, onDelete: onDelete });
      });

      return _react2.default.createElement(
        Fragment,
        null,
        _react2.default.createElement(
          'div',
          { className: _style2.default.head + " row row--no-gutter" },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-5' },
            _text2.default.fileName
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-xs-3' },
            _text2.default.fileModified
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-xs-2' },
            _text2.default.fileSize
          ),
          _react2.default.createElement('div', { className: 'col-xs-2' })
        ),
        _react2.default.createElement(
          _Paper2.default,
          { className: 'paper-box', zDepth: 1 },
          listItems
        ),
        _react2.default.createElement(_fileUploader2.default, { onUpload: onUpload, uploading: uploading })
      );
    }
  }]);

  return FileList;
}(_react2.default.Component);

exports.default = FileList;