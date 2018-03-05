'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reduxForm = require('redux-form');

var _reduxFormMaterialUi = require('redux-form-material-ui');

var _text = require('lib/text');

var _text2 = _interopRequireDefault(_text);

var _style = require('./style.css');

var _style2 = _interopRequireDefault(_style);

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EmailTemplate = function (_React$Component) {
  _inherits(EmailTemplate, _React$Component);

  function EmailTemplate(props) {
    _classCallCheck(this, EmailTemplate);

    return _possibleConstructorReturn(this, (EmailTemplate.__proto__ || Object.getPrototypeOf(EmailTemplate)).call(this, props));
  }

  _createClass(EmailTemplate, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.onLoad();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          handleSubmit = _props.handleSubmit,
          pristine = _props.pristine,
          submitting = _props.submitting,
          initialValues = _props.initialValues;


      return _react2.default.createElement(
        'form',
        { onSubmit: handleSubmit, style: {
            display: 'initial',
            width: '100%'
          } },
        _react2.default.createElement(
          _Paper2.default,
          { className: 'paper-box', zDepth: 1 },
          _react2.default.createElement(
            'div',
            { className: _style2.default.innerBox },
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(_reduxForm.Field, { component: _reduxFormMaterialUi.TextField, fullWidth: true, name: 'subject', floatingLabelText: _text2.default.settings_emailSubject })
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(_reduxForm.Field, { component: _reduxFormMaterialUi.TextField, fullWidth: true, name: 'body', multiLine: true, floatingLabelText: _text2.default.settings_emailBody })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'buttons-box' },
            _react2.default.createElement(_RaisedButton2.default, { type: 'submit', label: _text2.default.save, primary: true, className: _style2.default.button, disabled: pristine || submitting })
          )
        )
      );
    }
  }]);

  return EmailTemplate;
}(_react2.default.Component);

exports.default = (0, _reduxForm.reduxForm)({ form: 'EmailTemplate', enableReinitialize: true })(EmailTemplate);