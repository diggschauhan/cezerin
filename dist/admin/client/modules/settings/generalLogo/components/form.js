'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _imageUpload = require('modules/shared/imageUpload');

var _imageUpload2 = _interopRequireDefault(_imageUpload);

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GeneralLogoSettingsForm = function (_React$Component) {
  _inherits(GeneralLogoSettingsForm, _React$Component);

  function GeneralLogoSettingsForm() {
    _classCallCheck(this, GeneralLogoSettingsForm);

    return _possibleConstructorReturn(this, (GeneralLogoSettingsForm.__proto__ || Object.getPrototypeOf(GeneralLogoSettingsForm)).apply(this, arguments));
  }

  _createClass(GeneralLogoSettingsForm, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.onLoad();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          onImageUpload = _props.onImageUpload,
          onImageDelete = _props.onImageDelete,
          settings = _props.settings;

      var imageUrl = settings && settings.logo ? settings.logo : '';

      return _react2.default.createElement(
        _Paper2.default,
        { className: 'paper-box', zDepth: 1 },
        _react2.default.createElement(
          'div',
          { style: { padding: 30 } },
          _react2.default.createElement(_imageUpload2.default, {
            uploading: false,
            imageUrl: imageUrl,
            onDelete: onImageDelete,
            onUpload: onImageUpload
          })
        )
      );
    }
  }]);

  return GeneralLogoSettingsForm;
}(_react2.default.Component);

exports.default = GeneralLogoSettingsForm;