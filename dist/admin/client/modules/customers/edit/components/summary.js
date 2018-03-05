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

var _Divider = require('material-ui/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _FontIcon = require('material-ui/FontIcon');

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _IconMenu = require('material-ui/IconMenu');

var _IconMenu2 = _interopRequireDefault(_IconMenu);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _SelectField = require('material-ui/SelectField');

var _SelectField2 = _interopRequireDefault(_SelectField);

var _Dialog = require('material-ui/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CustomerSummary = function (_React$Component) {
  _inherits(CustomerSummary, _React$Component);

  function CustomerSummary(props) {
    _classCallCheck(this, CustomerSummary);

    var _this = _possibleConstructorReturn(this, (CustomerSummary.__proto__ || Object.getPrototypeOf(CustomerSummary)).call(this, props));

    _this.showSummaryEdit = function () {
      _this.setState({ openSummaryEdit: true });
    };

    _this.hideSummaryEdit = function () {
      _this.setState({ openSummaryEdit: false });
    };

    _this.saveSummaryEdit = function (customer) {
      _this.props.onCustomerSummaryUpdate(customer);
      _this.hideSummaryEdit();
    };

    _this.state = {
      openSummaryEdit: false
    };
    return _this;
  }

  _createClass(CustomerSummary, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          customer = _props.customer,
          settings = _props.settings;

      var totalSpent = helper.formatCurrency(customer.total_spent, settings);

      return _react2.default.createElement(
        _Paper2.default,
        { className: 'paper-box', zDepth: 1 },
        _react2.default.createElement(
          'div',
          { className: _style2.default.innerBox },
          _react2.default.createElement(
            'div',
            { className: _style2.default.customerName, style: { paddingBottom: 26, paddingTop: 0 } },
            customer.full_name,
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'small',
                null,
                customer.group_name
              )
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
                _text2.default.email
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-xs-7' },
              _react2.default.createElement(
                'a',
                { href: "MailTo:" + customer.email, className: _style2.default.link },
                customer.email
              )
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
                _text2.default.mobile
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-xs-7' },
              customer.mobile
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
                _text2.default.customers_totalSpent
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-xs-7' },
              totalSpent
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
              customer.note
            )
          ),
          _react2.default.createElement(
            'div',
            { style: { marginTop: 20 } },
            _react2.default.createElement(_RaisedButton2.default, { label: 'Edit', style: { marginRight: 15 }, onClick: this.showSummaryEdit })
          ),
          _react2.default.createElement(
            _Dialog2.default,
            {
              title: _text2.default.customers_titleEdit,
              modal: false,
              open: this.state.openSummaryEdit,
              onRequestClose: this.hideSummaryEdit,
              contentStyle: { width: 600 }
            },
            _react2.default.createElement(_summaryForm2.default, { initialValues: customer, onCancel: this.hideSummaryEdit, onSubmit: this.saveSummaryEdit })
          )
        )
      );
    }
  }]);

  return CustomerSummary;
}(_react2.default.Component);

exports.default = CustomerSummary;