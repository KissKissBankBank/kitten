"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextInputWithLimit = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _textInput = require("../../../components/form/text-input");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typography = require("../../../helpers/utils/typography");

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var errorColor = (0, _styledComponents.css)(["", ""], function (_ref) {
  var error = _ref.error;
  return error && (0, _styledComponents.css)(["color:", ";"], _colorsConfig.default.error);
});
var FocusTextInput = (0, _styledComponents.default)(_textInput.TextInput).withConfig({
  displayName: "text-input-with-limit__FocusTextInput",
  componentId: "ufrmmb-0"
})([":focus + div{color:", ";", "}"], _colorsConfig.default.font1, errorColor);

var StyledTextInputWithLimit = _styledComponents.default.div.withConfig({
  displayName: "text-input-with-limit__StyledTextInputWithLimit",
  componentId: "ufrmmb-1"
})(["position:relative;display:block;"]);

var StyledCounter = _styledComponents.default.div.withConfig({
  displayName: "text-input-with-limit__StyledCounter",
  componentId: "ufrmmb-2"
})(["", ";font-size:", ";line-height:1.3;position:absolute;right:0;top:0;margin-top:", ";margin-right:", ";color:", ";text-shadow:", " 0 0 ", ",-", " 0 0 ", ",0 ", " 0 ", ",0 -", " 0 ", ",", " ", " ", ",-", " -", " 0 ", ",", " -", " 0 ", ",-", " ", " 0 ", ";pointer-events:none;", " ", ""], _typographyConfig.default.fontStyles.regular, (0, _typography.stepToRem)(-2), (0, _typography.pxToRem)(5), (0, _typography.pxToRem)(5), _colorsConfig.default.font2, (0, _typography.pxToRem)(2), _colorsConfig.default.background1, (0, _typography.pxToRem)(2), _colorsConfig.default.background1, (0, _typography.pxToRem)(2), _colorsConfig.default.background1, (0, _typography.pxToRem)(2), _colorsConfig.default.background1, (0, _typography.pxToRem)(1), (0, _typography.pxToRem)(1), _colorsConfig.default.background1, (0, _typography.pxToRem)(1), (0, _typography.pxToRem)(1), _colorsConfig.default.background1, (0, _typography.pxToRem)(1), (0, _typography.pxToRem)(1), _colorsConfig.default.background1, (0, _typography.pxToRem)(1), (0, _typography.pxToRem)(1), _colorsConfig.default.background1, errorColor, function (_ref2) {
  var disabled = _ref2.disabled;
  return disabled && (0, _styledComponents.css)(["text-shadow:none;"]);
});

var TextInputWithLimit =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(TextInputWithLimit, _PureComponent);

  function TextInputWithLimit(props) {
    var _this;

    (0, _classCallCheck2.default)(this, TextInputWithLimit);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TextInputWithLimit).call(this, props));

    _this.handleChange = function (e) {
      var value = e.target.value;

      _this.setState({
        value: value
      });

      _this.props.onChange(e);
    };

    _this.state = {
      value: props.defaultValue
    };
    return _this;
  }

  (0, _createClass2.default)(TextInputWithLimit, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          valid = _this$props.valid,
          tiny = _this$props.tiny,
          limit = _this$props.limit,
          onChange = _this$props.onChange,
          disabled = _this$props.disabled,
          others = (0, _objectWithoutProperties2.default)(_this$props, ["valid", "tiny", "limit", "onChange", "disabled"]);
      var length = this.state.value ? this.state.value.length : 0;
      var error = length > limit;
      return _react.default.createElement(StyledTextInputWithLimit, null, _react.default.createElement(FocusTextInput, (0, _extends2.default)({}, others, {
        onChange: this.handleChange,
        disabled: disabled,
        tiny: tiny,
        value: this.state.value
      })), _react.default.createElement(StyledCounter, {
        error: error,
        disabled: disabled
      }, limit - length));
    }
  }]);
  return TextInputWithLimit;
}(_react.PureComponent);

exports.TextInputWithLimit = TextInputWithLimit;
TextInputWithLimit.propTypes = {
  limit: _propTypes.default.number,
  defaultValue: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  tiny: _propTypes.default.bool,
  error: _propTypes.default.bool,
  onChange: _propTypes.default.func
};
TextInputWithLimit.defaultProps = {
  limit: 80,
  defaultValue: '',
  disabled: false,
  tiny: false,
  error: false,
  onChange: function onChange() {}
};