'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _text = require('lib/text');

var _text2 = _interopRequireDefault(_text);

var _api = require('lib/api');

var _api2 = _interopRequireDefault(_api);

var _barChart = require('./barChart');

var _barChart2 = _interopRequireDefault(_barChart);

var _utils = require('./utils');

var utils = _interopRequireWildcard(_utils);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OrdersBar = function (_React$Component) {
  _inherits(OrdersBar, _React$Component);

  function OrdersBar(props) {
    _classCallCheck(this, OrdersBar);

    var _this = _possibleConstructorReturn(this, (OrdersBar.__proto__ || Object.getPrototypeOf(OrdersBar)).call(this, props));

    _this.fetchData = function () {
      var filter = {
        draft: false,
        cancelled: false,
        date_placed_min: (0, _moment2.default)().subtract(1, 'months').hour(0).minute(0).second(0).toISOString()
      };

      _api2.default.orders.list(filter).then(function (_ref) {
        var status = _ref.status,
            json = _ref.json;

        var reportData = utils.getReportDataFromOrders(json);
        var ordersData = utils.getOrdersDataFromReportData(reportData);
        var salesData = utils.getSalesDataFromReportData(reportData);
        _this.setState({ ordersData: ordersData, salesData: salesData });
      }).catch(function (error) {
        console.log(error);
      });
    };

    _this.state = {
      ordersData: null,
      salesData: null
    };
    return _this;
  }

  _createClass(OrdersBar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.fetchData();
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          ordersData = _state.ordersData,
          salesData = _state.salesData;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_barChart2.default, {
          data: ordersData,
          legendDisplay: true,
          title: _text2.default.drawer_orders
        }),
        _react2.default.createElement(_barChart2.default, {
          data: salesData,
          legendDisplay: false,
          title: _text2.default.salesReport
        })
      );
    }
  }]);

  return OrdersBar;
}(_react2.default.Component);

exports.default = OrdersBar;