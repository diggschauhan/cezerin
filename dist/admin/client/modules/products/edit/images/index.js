'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _reactRouter = require('react-router');

var _actions = require('../../actions');

var _images = require('./components/images');

var _images2 = _interopRequireDefault(_images);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state, ownProps) {
  var productId = ownProps.match.params.productId;

  var oldImages = state.products.editProduct ? state.products.editProduct.images : [];

  return {
    images: state.products.editProductImages || oldImages,
    uploadingImages: state.products.uploadingImages,
    productId: productId
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {
    onImageDelete: function onImageDelete(productId, imageId) {
      dispatch((0, _actions.deleteImage)(productId, imageId));
    },
    onImageSort: function onImageSort(productId, images) {
      dispatch((0, _actions.updateImages)(productId, images));
    },
    fetchData: function fetchData() {
      // const { productId } = ownProps.match.params;
      // dispatch(fetchImages(productId));
    },
    onImageUpload: function onImageUpload(form) {
      var productId = ownProps.match.params.productId;

      dispatch((0, _actions.uploadImages)(productId, form));
    }
  };
};

exports.default = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_images2.default));