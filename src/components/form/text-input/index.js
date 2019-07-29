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

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var borderWidth = (0, _typography.pxToRem)(2);
var verticalPadding = (0, _typography.pxToRem)(10);
var styledTextInput = (0, _styledComponents.css)(["font-size:", ";line-height:1.3;", ";box-sizing:border-box;border-width:", ";border-style:solid;border-radius:0;width:100%;height:", ";padding:", " ", ";appearance:none;background-color:", ";color:", ";border-color:", ";outline:none;", ";::placeholder{color:", ";}:focus{outline:none;color:", ";border-color:", ";}:disabled{color:", ";border-color:", ";background-color:", ";cursor:not-allowed;}", " ", " ", ""], (0, _typography.stepToRem)(-1), _typographyConfig.default.fontStyles.light, borderWidth, (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(15), _colorsConfig.default.background1, _colorsConfig.default.font1, _colorsConfig.default.line1, function (_ref) {
  var digits = _ref.digits;
  return digitsStyles(digits);
}, _colorsConfig.default.font2, _colorsConfig.default.font1, _colorsConfig.default.line2, _colorsConfig.default.font2, _colorsConfig.default.line1, _colorsConfig.default.line1, function (_ref2) {
  var valid = _ref2.valid;
  return valid && (0, _styledComponents.css)(["&:not(:focus){color:", ";border-color:", ";}"], _colorsConfig.default.tertiary2, _colorsConfig.default.tertiary2);
}, function (_ref3) {
  var error = _ref3.error;
  return error && (0, _styledComponents.css)(["&:not(:focus){color:", ";border-color:", ";}"], _colorsConfig.default.error3, _colorsConfig.default.error3);
}, function (_ref4) {
  var tiny = _ref4.tiny;
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

var StyledGradientTextarea = _styledComponents.default.div.withConfig({
  displayName: "text-input__StyledGradientTextarea",
  componentId: "sc-11wej6v-3"
})(["position:absolute;left:", ";right:", ";bottom:", ";height:", ";background-image:linear-gradient( to bottom,rgba(255,255,255,0),", " );pointer-events:none;", ":disabled + &{display:none;}"], verticalPadding, verticalPadding, borderWidth, verticalPadding, _colorsConfig.default.background1, StyledInputTextarea);

var digitsStyles = function digitsStyles(digits) {
  var horizontalPadding = 15;
  var digitLength = 15;

  switch ("".concat(digits)) {
    case '2':
      return (0, _styledComponents.css)(["width:", ";text-align:center;"], (0, _typography.pxToRem)(horizontalPadding * 2 + digitLength * 2));

    case '6':
      return (0, _styledComponents.css)(["width:", ";"], (0, _typography.pxToRem)(horizontalPadding * 2 + digitLength * 6));

    case '12':
      return (0, _styledComponents.css)(["width:", ";"], (0, _typography.pxToRem)(horizontalPadding * 2 + digitLength * 12));
  }
};

exports.digitsStyles = digitsStyles;

var TextInput =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(TextInput, _PureComponent);

  function TextInput() {
    (0, _classCallCheck2.default)(this, TextInput);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TextInput).apply(this, arguments));
  }

  (0, _createClass2.default)(TextInput, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          valid = _this$props.valid,
          error = _this$props.error,
          disabled = _this$props.disabled,
          name = _this$props.name,
          digits = _this$props.digits,
          tiny = _this$props.tiny,
          tag = _this$props.tag,
          others = (0, _objectWithoutProperties2.default)(_this$props, ["valid", "error", "disabled", "name", "digits", "tiny", "tag"]);

      if (tag === 'textarea') {
        return _react.default.createElement(StyledTextarea, null, _react.default.createElement(StyledInputTextarea, (0, _extends2.default)({
          ref: function ref(input) {
            return _this.input = input;
          },
          valid: valid,
          error: error,
          disabled: disabled,
          tiny: tiny,
          digits: digits,
          name: name
        }, others)), _react.default.createElement(StyledGradientTextarea, null));
      } else {
        return _react.default.createElement(StyledInput, (0, _extends2.default)({
          ref: function ref(input) {
            return _this.input = input;
          },
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
  tag: _propTypes.default.string,
  valid: _propTypes.default.bool,
  error: _propTypes.default.bool,
  tiny: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  name: _propTypes.default.string,
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