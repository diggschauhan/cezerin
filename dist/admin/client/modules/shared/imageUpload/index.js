'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _text = require('lib/text');

var _text2 = _interopRequireDefault(_text);

var _reactDropzone = require('react-dropzone');

var _reactDropzone2 = _interopRequireDefault(_reactDropzone);

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _Snackbar = require('material-ui/Snackbar');

var _Snackbar2 = _interopRequireDefault(_Snackbar);

var _FontIcon = require('material-ui/FontIcon');

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _style = require('./style.css');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImageUpload = function (_React$Component) {
  _inherits(ImageUpload, _React$Component);

  function ImageUpload(props) {
    _classCallCheck(this, ImageUpload);

    var _this = _possibleConstructorReturn(this, (ImageUpload.__proto__ || Object.getPrototypeOf(ImageUpload)).call(this, props));

    _this.onDelete = function () {
      _this.setState({
        imagePreview: null
      });
      _this.props.onDelete();
    };

    _this.onDrop = function (files) {
      var form = new FormData();
      form.append('file', files[0]);
      _this.props.onUpload(form);
    };

    _this.state = {
      imagePreview: _this.props.imageUrl
    };
    return _this;
  }

  _createClass(ImageUpload, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        imagePreview: nextProps.imageUrl
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var imagePreview = this.state.imagePreview;
      var uploading = this.props.uploading;


      var hasPreview = imagePreview !== null && imagePreview !== '';
      var previewIsFileUrl = hasPreview ? imagePreview.startsWith('http') : null;

      var htmlPreview = _react2.default.createElement(
        'div',
        { className: _style2.default.noImage },
        _react2.default.createElement(
          _FontIcon2.default,
          { style: { fontSize: 90, color: '#cccccc' }, className: 'material-icons' },
          'photo_camera'
        ),
        _react2.default.createElement(
          'div',
          { className: _style2.default.dropText },
          _text2.default.help_dropHere
        )
      );

      if (hasPreview && previewIsFileUrl) {
        htmlPreview = _react2.default.createElement('img', { src: imagePreview });
      } else if (hasPreview && !previewIsFileUrl) {
        htmlPreview = _react2.default.createElement('img', { src: imagePreview });
      }

      return _react2.default.createElement(
        _Paper2.default,
        { zDepth: 1, rounded: false, style: { width: 200 } },
        _react2.default.createElement(
          _reactDropzone2.default,
          {
            onDrop: this.onDrop,
            multiple: false,
            disableClick: hasPreview,
            accept: 'image/*',
            ref: function ref(node) {
              _this2.dropzone = node;
            },
            style: {},
            className: _style2.default.dropzone,
            activeClassName: _style2.default.dropzoneActive,
            rejectClassName: _style2.default.dropzoneReject },
          _react2.default.createElement(
            'div',
            { className: _style2.default.preview },
            htmlPreview
          )
        ),
        _react2.default.createElement(
          'div',
          { className: _style2.default.footer },
          _react2.default.createElement(
            _IconButton2.default,
            { touch: true, tooltip: _text2.default.actions_upload, onClick: function onClick() {
                _this2.dropzone.open();
              }, tooltipPosition: 'top-right' },
            _react2.default.createElement(
              _FontIcon2.default,
              { color: 'rgba(0,0,0,0.5)', className: 'material-icons' },
              'file_upload'
            )
          ),
          hasPreview && _react2.default.createElement(
            _IconButton2.default,
            { touch: true, tooltip: _text2.default.actions_delete, onClick: this.onDelete, tooltipPosition: 'top-right' },
            _react2.default.createElement(
              _FontIcon2.default,
              { color: 'rgba(0,0,0,0.5)', className: 'material-icons' },
              'delete'
            )
          )
        ),
        _react2.default.createElement(_Snackbar2.default, {
          open: uploading,
          message: _text2.default.messages_uploading
        })
      );
    }
  }]);

  return ImageUpload;
}(_react2.default.Component);

exports.default = ImageUpload;