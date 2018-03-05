'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _imageUploadMultiple = require('modules/shared/imageUploadMultiple');

var _imageUploadMultiple2 = _interopRequireDefault(_imageUploadMultiple);

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProductImages = function (_React$Component) {
  _inherits(ProductImages, _React$Component);

  function ProductImages(props) {
    _classCallCheck(this, ProductImages);

    return _possibleConstructorReturn(this, (ProductImages.__proto__ || Object.getPrototypeOf(ProductImages)).call(this, props));
  }

  _createClass(ProductImages, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.fetchData();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          productId = _props.productId,
          images = _props.images,
          onImageDelete = _props.onImageDelete,
          onImageSort = _props.onImageSort,
          onImageUpload = _props.onImageUpload,
          uploadingImages = _props.uploadingImages;

      return _react2.default.createElement(
        _Paper2.default,
        { className: 'paper-box', zDepth: 1 },
        _react2.default.createElement(
          'div',
          { style: { padding: '10px 10px 30px 10px' } },
          _react2.default.createElement(_imageUploadMultiple2.default, { productId: productId, images: images, onImageDelete: onImageDelete, onImageSort: onImageSort, onImageUpload: onImageUpload, uploading: uploadingImages })
        )
      );
    }
  }]);

  return ProductImages;
}(_react2.default.Component);

exports.default = ProductImages;