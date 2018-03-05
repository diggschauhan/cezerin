'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactRouter = require('react-router');

var _actions = require('../actions');

var _buttons = require('./components/buttons');

var _buttons2 = _interopRequireDefault(_buttons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    settings: state.settings.settings,
    order: state.orders.editOrder
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {
    onDelete: function onDelete() {
      dispatch((0, _actions.deleteCurrentOrder)());
      ownProps.history.push('/admin/orders');
    },
    setCancelled: function setCancelled(orderId) {
      dispatch((0, _actions.cancelOrder)(orderId));
    },
    holdOrder: function holdOrder(orderId) {
      dispatch((0, _actions.updateOrder)({ id: orderId, hold: true }));
    },
    resumeOrder: function resumeOrder(orderId) {
      dispatch((0, _actions.updateOrder)({ id: orderId, hold: false }));
    },
    setClosed: function setClosed(orderId) {
      dispatch((0, _actions.closeOrder)(orderId));
    },
    addItem: function addItem(orderId, productId) {
      dispatch((0, _actions.addOrderItem)(orderId, productId));
    }
  };
};

exports.default = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_buttons2.default));