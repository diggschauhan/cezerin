'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _text = require('lib/text');

var _text2 = _interopRequireDefault(_text);

var _cezerinClient = require('cezerin-client');

var _cezerinClient2 = _interopRequireDefault(_cezerinClient);

var _settings = require('lib/settings');

var _settings2 = _interopRequireDefault(_settings);

var _auth = require('lib/auth');

var auth = _interopRequireWildcard(_auth);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginForm = function (_React$Component) {
  _inherits(LoginForm, _React$Component);

  function LoginForm(props) {
    _classCallCheck(this, LoginForm);

    var _this = _possibleConstructorReturn(this, (LoginForm.__proto__ || Object.getPrototypeOf(LoginForm)).call(this, props));

    _this.handleChange = function (event) {
      _this.setState({
        email: event.target.value
      });
    };

    _this.handleKeyPress = function (e) {
      if (e.keyCode === 13 || e.which === 13) {
        _this.handleSubmit();
      }
    };

    _this.handleSubmit = function () {
      _this.setState({
        isFetching: true,
        isAuthorized: false,
        emailIsSent: false,
        error: null
      });

      _cezerinClient2.default.authorize(_settings2.default.apiBaseUrl, _this.state.email).then(function (authorizeResponse) {
        _this.setState({
          isFetching: false,
          isAuthorized: false,
          emailIsSent: authorizeResponse.json.sent,
          error: authorizeResponse.json.error
        });
      }).catch(function (error) {
        _this.setState({
          isFetching: false,
          isAuthorized: false,
          emailIsSent: false,
          error: error
        });
      });
    };

    _this.state = {
      email: localStorage.getItem('dashboard_email') || '',
      isFetching: false,
      isAuthorized: false,
      emailIsSent: false,
      error: null
    };
    return _this;
  }

  _createClass(LoginForm, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      auth.checkTokenFromUrl();
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          email = _state.email,
          isFetching = _state.isFetching,
          isAuthorized = _state.isAuthorized,
          emailIsSent = _state.emailIsSent,
          error = _state.error;


      var response = null;
      if (isFetching) {
        response = _react2.default.createElement(
          'div',
          { className: 'loginSuccessResponse' },
          _text2.default.messages_loading
        );
      } else if (emailIsSent) {
        response = _react2.default.createElement(
          'div',
          { className: 'loginSuccessResponse' },
          _text2.default.loginLinkSent
        );
      } else if (emailIsSent === false && error) {
        response = _react2.default.createElement(
          'div',
          { className: 'loginErrorResponse' },
          error
        );
      }

      return _react2.default.createElement(
        'div',
        { className: 'row col-full-height center-xs middle-xs' },
        _react2.default.createElement(
          'div',
          { className: 'col-xs-12 col-sm-8 col-md-6 col-lg-4' },
          _react2.default.createElement(
            _Paper2.default,
            { className: 'loginBox', zDepth: 1 },
            _react2.default.createElement(
              'div',
              { className: 'loginTitle' },
              _text2.default.loginTitle
            ),
            _react2.default.createElement(
              'div',
              { className: 'loginDescription' },
              _text2.default.loginDescription
            ),
            _react2.default.createElement(
              'div',
              { className: 'loginInput' },
              _react2.default.createElement(_TextField2.default, {
                type: 'email',
                value: email,
                onChange: this.handleChange,
                onKeyPress: this.handleKeyPress,
                label: _text2.default.email,
                fullWidth: true,
                hintStyle: { width: '100%' },
                hintText: _text2.default.email
              })
            ),
            _react2.default.createElement(_RaisedButton2.default, {
              label: _text2.default.loginButton,
              primary: true,
              disabled: isFetching || emailIsSent,
              onClick: this.handleSubmit
            }),
            response
          )
        )
      );
    }
  }]);

  return LoginForm;
}(_react2.default.Component);

exports.default = LoginForm;