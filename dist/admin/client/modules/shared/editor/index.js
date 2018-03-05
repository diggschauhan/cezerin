'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _tinymce = require('../tinymce');

var _tinymce2 = _interopRequireDefault(_tinymce);

var _settings = require('lib/settings');

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var config = {
  inline: true,
  plugins: ['autolink lists link image charmap preview anchor', 'searchreplace visualblocks code fullscreen', 'media table paste code textcolor directionality'],
  toolbar1: 'image media | styleselect | bold italic bullist numlist link alignleft aligncenter alignright alignjustify',
  toolbar2: 'undo redo | forecolor paste removeformat table | outdent indent | preview code'
};

var Editor = function (_React$Component) {
  _inherits(Editor, _React$Component);

  function Editor(props) {
    _classCallCheck(this, Editor);

    var _this = _possibleConstructorReturn(this, (Editor.__proto__ || Object.getPrototypeOf(Editor)).call(this, props));

    _this.onChange = function (e) {
      var content = e.target.getContent();
      _this.setState({ value: content });
      _this.props.input.onChange(content);
    };

    _this.state = {
      value: props.input.value
    };
    return _this;
  }

  _createClass(Editor, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.state.value !== nextProps.input.value) {
        this.setState({
          value: nextProps.input.value
        });
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return this.state.value !== nextState.value;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_tinymce2.default, {
        entityId: this.props.entityId,
        content: this.state.value,
        config: {
          language: _settings2.default.language,
          themes: config.themes,
          inline: config.inline,
          plugins: config.plugins,
          toolbar1: config.toolbar1,
          toolbar2: config.toolbar2,
          menubar: false
        },
        onChange: this.onChange
      });
    }
  }]);

  return Editor;
}(_react2.default.Component);

exports.default = Editor;