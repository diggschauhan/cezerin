'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDropzone = require('react-dropzone');

var _reactDropzone2 = _interopRequireDefault(_reactDropzone);

var _text = require('lib/text');

var _text2 = _interopRequireDefault(_text);

var _style = require('./style.css');

var _style2 = _interopRequireDefault(_style);

var _Snackbar = require('material-ui/Snackbar');

var _Snackbar2 = _interopRequireDefault(_Snackbar);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MultiUploader = function (_React$Component) {
  _inherits(MultiUploader, _React$Component);

  function MultiUploader() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MultiUploader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MultiUploader.__proto__ || Object.getPrototypeOf(MultiUploader)).call.apply(_ref, [this].concat(args))), _this), _this.onDrop = function (files) {
      var form = new FormData();
      files.map(function (file) {
        form.append('file', file);
      });
      _this.props.onUpload(form);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MultiUploader, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var uploading = this.props.uploading;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactDropzone2.default,
          {
            onDrop: this.onDrop,
            multiple: true,
            disableClick: true,
            accept: 'image/*',
            ref: function ref(node) {
              _this2.dropzone = node;
            },
            style: {},
            className: _style2.default.dropzone,
            activeClassName: _style2.default.dropzoneActive,
            rejectClassName: _style2.default.dropzoneReject },
          this.props.children,
          !this.props.children && _react2.default.createElement(
            'div',
            { className: _style2.default.dropzoneEmpty },
            _text2.default.help_dropHere
          )
        ),
        !uploading && _react2.default.createElement(_RaisedButton2.default, { primary: true, label: _text2.default.chooseImage, style: { marginLeft: 20, marginTop: 10 }, onClick: function onClick() {
            _this2.dropzone.open();
          } }),
        _react2.default.createElement(_Snackbar2.default, {
          open: uploading,
          message: _text2.default.messages_uploading
        })
      );
    }
  }]);

  return MultiUploader;
}(_react2.default.Component);

exports.default = MultiUploader;