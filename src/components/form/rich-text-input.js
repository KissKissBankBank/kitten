"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RichTextInput = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactCkeditorWrapper = _interopRequireDefault(require("react-ckeditor-wrapper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

// Make sure you include a script to React Ckeditor Wrapper.
// For example:
//   <script src="//cdn.ckeditor.com/4.6.2/standard/ckeditor.js"></script>
var RichTextInput =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RichTextInput, _React$Component);

  function RichTextInput(props) {
    var _this;

    _classCallCheck(this, RichTextInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RichTextInput).call(this, props));
    _this.state = {
      content: props.content
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(RichTextInput, [{
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
      var config = _objectSpread({}, this.props.config, {
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