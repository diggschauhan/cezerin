'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _text = require('lib/text');

var _text2 = _interopRequireDefault(_text);

var _helper = require('lib/helper');

var helper = _interopRequireWildcard(_helper);

var _style = require('./style.css');

var _style2 = _interopRequireDefault(_style);

var _summaryForm = require('./summaryForm.js');

var _summaryForm2 = _interopRequireDefault(_summaryForm);

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _Dialog = require('material-ui/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getOrderStates = function getOrderStates(order) {
  var states = [];

  if (order.hold) {
    states.push(_react2.default.createElement(
      'span',
      { key: 'hold', className: _style2.default.holdState },
      _text2.default.orders_hold
    ));
  }

  if (order.paid) {
    states.push(_react2.default.createElement(
      'span',
      { key: 'paid', className: _style2.default.paidState },
      _text2.default.orders_paid
    ));
  }

  if (order.delivered) {
    states.push(_react2.default.createElement(
      'span',
      { key: 'delivered', className: _style2.default.deliveredState },
      _text2.default.orders_delivered
    ));
  }

  if (order.cancelled) {
    return [_react2.default.createElement(
      'span',
      { key: 'cancelled', className: _style2.default.cancelledState },
      _text2.default.orders_cancelled
    )];
  }

  if (order.closed) {
    return [_react2.default.createElement(
      'span',
      { key: 'closed', className: _style2.default.closedState },
      _text2.default.orders_closed
    )];
  }

  if (states.length === 0 && order.draft) {
    states.unshift(_react2.default.createElement(
      'span',
      { key: 'draft', className: _style2.default.draftState },
      _text2.default.orders_draft
    ));
  }

  return states;
};

var OrderSummary = function (_React$Component) {
  _inherits(OrderSummary, _React$Component);

  function OrderSummary(props) {
    _classCallCheck(this, OrderSummary);

    var _this = _possibleConstructorReturn(this, (OrderSummary.__proto__ || Object.getPrototypeOf(OrderSummary)).call(this, props));

    _this.showSummaryEdit = function () {
      _this.setState({ openSummaryEdit: true });
    };

    _this.hideSummaryEdit = function () {
      _this.setState({ openSummaryEdit: false });
    };

    _this.saveSummaryEdit = function (order) {
      _this.props.onOrderSummaryUpdate(order);
      _this.hideSummaryEdit();
    };

    _this.state = {
      openSummaryEdit: false
    };
    return _this;
  }

  _createClass(OrderSummary, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          order = _props.order,
          settings = _props.settings,
          onCheckout = _props.onCheckout,
          processingCheckout = _props.processingCheckout;

      var allowEdit = order.closed === false && order.cancelled === false;
      var isDraft = order.draft === true;
      var dateCreated = (0, _moment2.default)(order.date_placed || order.date_created);
      var dateCreatedFormated = dateCreated.format(settings.date_format + ', ' + settings.time_format);
      var states = getOrderStates(order);

      var referrerDomain = order.referrer_url;

      try {
        var url = new URL(order.referrer_url);
        referrerDomain = url.hostname;
      } catch (e) {}

      var referrerLink = order.referrer_url && order.referrer_url.includes('http') ? _react2.default.createElement(
        'a',
        { className: _style2.default.link, href: order.referrer_url, target: '_blank' },
        referrerDomain
      ) : order.referrer_url;

      return _react2.default.createElement(
        _Paper2.default,
        { className: 'paper-box', zDepth: 1 },
        _react2.default.createElement(
          'div',
          { className: _style2.default.innerBox },
          _react2.default.createElement(
            'div',
            { className: _style2.default.states },
            states
          ),
          _react2.default.createElement(
            'div',
            { className: _style2.default.summaryRow + " row" },
            _react2.default.createElement(
              'div',
              { className: 'col-xs-5' },
              _react2.default.createElement(
                'span',
                null,
                _text2.default.orderDate
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-xs-7' },
              dateCreatedFormated
            )
          ),
          _react2.default.createElement(
            'div',
            { className: _style2.default.summaryRow + " row" },
            _react2.default.createElement(
              'div',
              { className: 'col-xs-5' },
              _react2.default.createElement(
                'span',
                null,
                _text2.default.orderStatus
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-xs-7' },
              order.status
            )
          ),
          _react2.default.createElement(
            'div',
            { className: _style2.default.summaryRow + " row" },
            _react2.default.createElement(
              'div',
              { className: 'col-xs-5' },
              _react2.default.createElement(
                'span',
                null,
                _text2.default.referrer
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-xs-7' },
              referrerLink
            )
          ),
          _react2.default.createElement(
            'div',
            { className: _style2.default.summaryRow + " row" },
            _react2.default.createElement(
              'div',
              { className: 'col-xs-5' },
              _react2.default.createElement(
                'span',
                null,
                _text2.default.trackingNumber
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-xs-7' },
              order.tracking_number
            )
          ),
          _react2.default.createElement(
            'div',
            { className: _style2.default.summaryRow + " row" },
            _react2.default.createElement(
              'div',
              { className: 'col-xs-5' },
              _react2.default.createElement(
                'span',
                null,
                _text2.default.shippingStatus
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-xs-7' },
              order.shipping_status
            )
          ),
          _react2.default.createElement(
            'div',
            { className: _style2.default.summaryRow + " row" },
            _react2.default.createElement(
              'div',
              { className: 'col-xs-5' },
              _react2.default.createElement(
                'span',
                null,
                _text2.default.shippingMethod
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-xs-7' },
              order.shipping_method
            )
          ),
          _react2.default.createElement(
            'div',
            { className: _style2.default.summaryRow + " row" },
            _react2.default.createElement(
              'div',
              { className: 'col-xs-5' },
              _react2.default.createElement(
                'span',
                null,
                _text2.default.paymentsMethod
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-xs-7' },
              order.payment_method
            )
          ),
          _react2.default.createElement(
            'div',
            { className: _style2.default.summaryRow + " row" },
            _react2.default.createElement(
              'div',
              { className: 'col-xs-5' },
              _react2.default.createElement(
                'span',
                null,
                _text2.default.customerComment
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-xs-7' },
              order.comments
            )
          ),
          _react2.default.createElement(
            'div',
            { className: _style2.default.summaryRow + " row" },
            _react2.default.createElement(
              'div',
              { className: 'col-xs-5' },
              _react2.default.createElement(
                'span',
                null,
                _text2.default.note
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-xs-7' },
              order.note
            )
          ),
          _react2.default.createElement(
            'div',
            { style: { marginTop: 20 } },
            allowEdit && _react2.default.createElement(_RaisedButton2.default, { label: 'Edit', style: { marginRight: 15 }, onClick: this.showSummaryEdit }),
            isDraft && _react2.default.createElement(_RaisedButton2.default, { label: _text2.default.placeOrder, primary: true, onClick: onCheckout, disabled: processingCheckout })
          ),
          _react2.default.createElement(
            _Dialog2.default,
            {
              title: _text2.default.order,
              modal: false,
              open: this.state.openSummaryEdit,
              onRequestClose: this.hideSummaryEdit,
              autoScrollBodyContent: true,
              contentStyle: { width: 600 }
            },
            _react2.default.createElement(_summaryForm2.default, { initialValues: order, onCancel: this.hideSummaryEdit, onSubmit: this.saveSummaryEdit })
          )
        )
      );
    }
  }]);

  return OrderSummary;
}(_react2.default.Component);

exports.default = OrderSummary;