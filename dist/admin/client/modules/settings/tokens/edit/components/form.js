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

var _confirmation = require('modules/shared/confirmation');

var _confirmation2 = _interopRequireDefault(_confirmation);

var _form = require('modules/shared/form');

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _Divider = require('material-ui/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Scopes = ['admin', 'dashboard', 'read:products', 'write:products', 'read:product_categories', 'write:product_categories', 'read:orders', 'write:orders', 'read:customers', 'write:customers', 'read:customer_groups', 'write:customer_groups', 'read:pages', 'write:pages', 'read:order_statuses', 'write:order_statuses', 'read:theme', 'write:theme', 'read:sitemap', '', 'read:shipping_methods', 'write:shipping_methods', 'read:payment_methods', 'write:payment_methods', 'read:settings', 'write:settings', 'read:files', 'write:files'];

var validate = function validate(values) {
  var errors = {};
  var requiredFields = ['name'];

  requiredFields.map(function (field) {
    if (!values.is_system && values && !values[field]) {
      errors[field] = _text2.default.errors_required;
    }
  });

  return errors;
};

var EditTokenForm = function (_React$Component) {
  _inherits(EditTokenForm, _React$Component);

  function EditTokenForm(props) {
    _classCallCheck(this, EditTokenForm);

    var _this = _possibleConstructorReturn(this, (EditTokenForm.__proto__ || Object.getPrototypeOf(EditTokenForm)).call(this, props));

    _this.handleRevoke = function () {
      _this.setState({ showRevokeDialog: true });
    };

    _this.state = {
      showRevokeDialog: false
    };
    return _this;
  }

  _createClass(EditTokenForm, [{
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
          initialValues = _props.initialValues,
          tokenId = _props.tokenId,
          newToken = _props.newToken,
          onDelete = _props.onDelete;

      var isTokenAdded = !!newToken;
      var isAdd = tokenId === null || tokenId === undefined;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'form',
          { onSubmit: handleSubmit },
          _react2.default.createElement(
            _Paper2.default,
            { className: 'paper-box', zDepth: 1 },
            _react2.default.createElement(
              'div',
              { className: _style2.default.innerBox },
              _react2.default.createElement(_reduxForm.Field, { name: 'name', component: _reduxFormMaterialUi.TextField, floatingLabelText: _text2.default.settings_tokenName, fullWidth: true }),
              _react2.default.createElement(_reduxForm.Field, { name: 'email', component: _reduxFormMaterialUi.TextField, floatingLabelText: _text2.default.email, fullWidth: true, disabled: !isAdd, type: 'email' }),
              _react2.default.createElement(_reduxForm.Field, { name: 'expiration', component: _reduxFormMaterialUi.TextField, floatingLabelText: _text2.default.settings_tokenExp, fullWidth: true, type: 'number' }),
              _react2.default.createElement(
                'div',
                { className: 'blue-title' },
                _text2.default.settings_selectScopes
              ),
              _react2.default.createElement(_reduxForm.Field, { name: 'scopes', component: _form.MultiSelect, items: Scopes, disabled: !isAdd })
            ),
            _react2.default.createElement(
              'div',
              { className: 'buttons-box' },
              !isAdd && _react2.default.createElement(_RaisedButton2.default, { label: _text2.default.settings_revokeAccess, secondary: true, style: { float: 'left' }, onClick: this.handleRevoke }),
              _react2.default.createElement(_RaisedButton2.default, { type: 'submit', label: isAdd ? _text2.default.settings_generateToken : _text2.default.save, primary: true, className: _style2.default.button, disabled: pristine || submitting })
            )
          )
        ),
        _react2.default.createElement(_confirmation2.default, {
          open: isTokenAdded,
          title: _text2.default.settings_copyYourNewToken,
          description: newToken,
          submitLabel: _text2.default.actions_done,
          cancelLabel: _text2.default.cancel,
          modal: true
        }),
        _react2.default.createElement(_confirmation2.default, {
          open: this.state.showRevokeDialog,
          title: _text2.default.settings_tokenRevokeTitle,
          description: _text2.default.settings_tokenRevokeDescription,
          onSubmit: onDelete,
          submitLabel: _text2.default.settings_revokeAccess,
          cancelLabel: _text2.default.cancel
        })
      );
    }
  }]);

  return EditTokenForm;
}(_react2.default.Component);

exports.default = (0, _reduxForm.reduxForm)({ form: 'EditTokenForm', validate: validate, enableReinitialize: true })(EditTokenForm);