'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _api = require('lib/api');

var _api2 = _interopRequireDefault(_api);

var _imageUpload = require('modules/shared/imageUpload');

var _imageUpload2 = _interopRequireDefault(_imageUpload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ThemeImageUpload = function (_React$Component) {
  _inherits(ThemeImageUpload, _React$Component);

  function ThemeImageUpload(props) {
    _classCallCheck(this, ThemeImageUpload);

    var _this = _possibleConstructorReturn(this, (ThemeImageUpload.__proto__ || Object.getPrototypeOf(ThemeImageUpload)).call(this, props));

    _this.onDelete = function () {
      var fileName = _this.props.input.value;
      _api2.default.theme.assets.deleteFile(fileName).then(function () {
        _this.props.input.onChange('');
      });
    };

    _this.onUpload = function (formData) {
      _api2.default.theme.assets.uploadFile(formData).then(function (_ref) {
        var status = _ref.status,
            json = _ref.json;

        var fileName = json.file;
        _this.props.input.onChange(fileName);
      });
    };

    return _this;
  }

  _createClass(ThemeImageUpload, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          input = _props.input,
          label = _props.label;

      var imageUrl = input.value && input.value.length > 0 ? '/assets/images/' + input.value : null;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'p',
          null,
          label
        ),
        _react2.default.createElement(_imageUpload2.default, {
          uploading: false,
          imageUrl: imageUrl,
          onDelete: this.onDelete,
          onUpload: this.onUpload
        })
      );
    }
  }]);

  return ThemeImageUpload;
}(_react2.default.Component);

exports.default = ThemeImageUpload;