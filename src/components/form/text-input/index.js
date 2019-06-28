"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextInput = exports.digitsStyles = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _typography = require("../../../helpers/utils/typography");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var borderWidth = (0, _typography.pxToRem)(2);
var styledTextInput = (0, _styledComponents.css)(["font-size:", ";line-height:1.3;font-weight:lighter;box-sizing:border-box;border-width:", ";border-style:solid;border-radius:0;width:100%;height:", ";padding:", " ", ";appearance:none;background-color:", ";color:", ";border-color:", ";:placeholder{color:", ";}:focus{outline:none;border-color:", ";}:disabled{color:", ";border-color:", ";background-color:", ";cursor:not-allowed;}", " ", " ", ""], (0, _typography.stepToRem)(-1), borderWidth, (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(15), _colorsConfig.default.background1, _colorsConfig.default.font1, _colorsConfig.default.line1, _colorsConfig.default.font2, _colorsConfig.default.line2, _colorsConfig.default.font2, _colorsConfig.default.line1, _colorsConfig.default.line1, function (_ref) {
  var valid = _ref.valid;
  return valid && (0, _styledComponents.css)(["color:", ";border-color:", ";:focus{color:", ";border-color:", ";}"], _colorsConfig.default.tertiary2, _colorsConfig.default.tertiary2, _colorsConfig.default.font1, _colorsConfig.default.line2);
}, function (_ref2) {
  var error = _ref2.error;
  return error && (0, _styledComponents.css)(["color:", ";border-color:", ";:focus{color:", ";border-color:", ";}"], _colorsConfig.default.error3, _colorsConfig.default.error3, _colorsConfig.default.font1, _colorsConfig.default.line2);
}, function (_ref3) {
  var tiny = _ref3.tiny;
  return tiny && (0, _styledComponents.css)(["height:", ";"], (0, _typography.pxToRem)(40));
});

var StyledTextarea = _styledComponents.default.div.withConfig({
  displayName: "text-input__StyledTextarea",
  componentId: "sc-11wej6v-0"
})(["position:relative;display:flex;"]);

var StyledInput = _styledComponents.default.input.withConfig({
  displayName: "text-input__StyledInput",
  componentId: "sc-11wej6v-1"
})(["", ""], styledTextInput);

var StyledInputTextarea = _styledComponents.default.textarea.withConfig({
  displayName: "text-input__StyledInputTextarea",
  componentId: "sc-11wej6v-2"
})(["", " height:initial;resize:vertical;:disabled{resize:none;}"], styledTextInput);

var verticalPadding = (0, _typography.pxToRem)(10);

var StyledGradientTextarea = _styledComponents.default.div.withConfig({
  displayName: "text-input__StyledGradientTextarea",
  componentId: "sc-11wej6v-3"
})(["position:absolute;left:", ";right:", ";bottom:", ";height:", ";background-image:linear-gradient( to bottom,rgba(255,255,255,0),", " );pointer-events:none;", ":disabled + &{display:none;}"], verticalPadding, verticalPadding, borderWidth, verticalPadding, _colorsConfig.default.background1, StyledInputTextarea);

var digitsStyles = function digitsStyles(digits) {
  var horizontalPadding = (0, _typography.pxToRem)(15);
  var digitLength = (0, _typography.pxToRem)(15);

  switch (digits) {
    case 'twoDigits':
      width = horizontalPadding * 2 + digitLength * 2;
      textAlign = 'center';
      break;

    case 'sixDigits':
      width = horizontalPadding * 2 + digitLength * 6;
      break;

    case 'twelveDigits':
      width = horizontalPadding * 2 + digitLength * 12;
      break;
  }
};

exports.digitsStyles = digitsStyles;

var TextInput =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(TextInput, _PureComponent);

  function TextInput(props) {
    var _this;

    (0, _classCallCheck2.default)(this, TextInput);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TextInput).call(this, props));
    _this.input = (0, _react.createRef)();
    return _this;
  }

  (0, _createClass2.default)(TextInput, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          valid = _this$props.valid,
          error = _this$props.error,
          disabled = _this$props.disabled,
          name = _this$props.name,
          digits = _this$props.digits,
          tiny = _this$props.tiny,
          tag = _this$props.tag,
          others = (0, _objectWithoutProperties2.default)(_this$props, ["valid", "error", "disabled", "name", "digits", "tiny", "tag"]);

      if (tag == 'textarea') {
        return _react.default.createElement(StyledTextarea, null, _react.default.createElement(StyledInputTextarea, (0, _extends2.default)({
          ref: this.input.focus && this.input.blur,
          valid: valid,
          error: error,
          disabled: disabled,
          tiny: tiny,
          digits: digits,
          name: name
        }, others)), _react.default.createElement(StyledGradientTextarea, null));
      } else {
        return _react.default.createElement(StyledInput, (0, _extends2.default)({
          ref: this.input.focus && this.input.blur,
          valid: valid,
          error: error,
          disabled: disabled,
          tiny: tiny,
          digits: digits,
          name: name
        }, others));
      }
    }
  }]);
  return TextInput;
}(_react.PureComponent);

exports.TextInput = TextInput;
TextInput.propTypes = {
  valid: _propTypes.default.bool,
  error: _propTypes.default.bool,
  tiny: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  name: _propTypes.default.text,
  digits: _propTypes.default.number
};
TextInput.defaultProps = {
  tag: 'input',
  // or 'textarea'
  valid: false,
  error: false,
  tiny: false,
  disabled: false,
  name: 'text',
  digits: null
};