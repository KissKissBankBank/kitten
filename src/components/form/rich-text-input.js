"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RichTextInput = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _reactCkeditorWrapper = _interopRequireDefault(require("react-ckeditor-wrapper"));

// Via "https://github.com/luigiinred/react-ckeditor-wrapper"
// Make sure you include a script to React Ckeditor Wrapper.
// For example:
//   <script src="//cdn.ckeditor.com/4.6.2/standard/ckeditor.js"></script>
var RichTextInput =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(RichTextInput, _React$Component);

  function RichTextInput(props) {
    var _this;

    (0, _classCallCheck2.default)(this, RichTextInput);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(RichTextInput).call(this, props));
    _this.state = {
      content: props.content
    };
    _this.handleChange = _this.handleChange.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(RichTextInput, [{
    key: "handleChange",
    value: function handleChange(value) {
      this.setState({
        content: value
      });
      this.props.onChange({
        value: value
      });
    }
  }, {
    key: "config",
    value: function config() {
      var config = (0, _extends2.default)({}, this.props.config, {
        defaultLanguage: this.props.locale,
        toolbar: this.props.toolbar
      });
      return config;
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(_reactCkeditorWrapper.default, {
        value: this.state.content,
        config: this.config(),
        onChange: this.handleChange
      });
    }
  }]);
  return RichTextInput;
}(_react.default.Component);

exports.RichTextInput = RichTextInput;
RichTextInput.defaultProps = {
  onChange: function onChange() {},
  content: '',
  locale: 'en',
  config: {
    removePlugins: 'elementspath',
    resize_enabled: false
  },
  toolbar: [{
    name: 'basicstyles',
    items: ['Bold', 'Italic', 'Underline', 'Link', 'Image']
  }, {
    name: 'clipboard',
    items: ['Undo', 'Redo']
  }]
};