"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextInput = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _typography = require("../../../helpers/utils/typography");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _screenConfig = require("../../../constants/screen-config");

var _classnames = _interopRequireDefault(require("classnames"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var StyledInput = _styledComponents.default.input.withConfig({
  displayName: "text-input__StyledInput",
  componentId: "sc-11wej6v-0"
})(["--input-padding-horizontal:", ";--input-border-width:", ";font-size:", ";line-height:1em;", ";box-sizing:border-box;border-width:", ";border-width:var(--input-border-width);border-style:solid;border-radius:0;width:100%;appearance:none;background-color:", ";color:", ";border-color:", ";outline:none;::placeholder{color:", ";}height:", ";&.k-Form-TextInput--tiny{height:", ";}&.k-Form-TextInput--huge{height:", ";@media (min-width:", "px){height:", ";font-size:", ";}}&.k-Form-TextInput--giant{height:", ";@media (min-width:", "px){height:", ";font-size:", ";}}padding:", " ", ";padding:", " var(--input-padding-horizontal);&.k-Form-TextInput--orion{border-radius:", ";height:", ";@media (min-width:", "px){--input-padding-horizontal:", ";border-radius:", ";height:", ";font-size:", ";@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){padding:", " ", ";}}}&.k-Form-TextInput--alignCenter{text-align:center;}:disabled{color:", ";border-color:", ";background-color:", ";cursor:not-allowed;}&.k-Form-TextInput--valid{color:", ";border-color:", ";}&.k-Form-TextInput--error{color:", ";border-color:", ";}&:invalid{box-shadow:none;outline:none;color:", ";border-color:", ";}&:focus{outline:none;color:", ";border-color:", ";}&.k-Form-TextInput-hasDigits{width:calc( var(--input-content-width) * 1ch + (2 * (var(--input-padding-horizontal) + var(--input-border-width))) );}&.k-Form-TextInput-hasDigits_2{text-align:center;}@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){&.k-Form-TextInput-hasDigits_2{text-align:center;width:calc(2em + ", ");&.k-Form-TextInput--orion{width:calc(2em + ", ");@media (min-width:", "px){width:calc(2em + ", ");}}}&.k-Form-TextInput-hasDigits_4{width:calc(4em + ", ");&.k-Form-TextInput--orion{width:calc(4em + ", ");@media (min-width:", "px){width:calc(4em + ", ");}}}&.k-Form-TextInput-hasDigits_12{width:calc(12em + ", ");&.k-Form-TextInput--orion{width:calc(12em + ", ");@media (min-width:", "px){width:calc(12em + ", ");}}}}"], (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(2), (0, _typography.stepToRem)(-1), _typographyConfig.default.fontStyles.light, (0, _typography.pxToRem)(2), _colorsConfig.default.background1, _colorsConfig.default.font1, _colorsConfig.default.line1, _colorsConfig.default.font2, (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(70), _screenConfig.ScreenConfig.M.min, (0, _typography.pxToRem)(80), (0, _typography.stepToRem)(0), (0, _typography.pxToRem)(70), _screenConfig.ScreenConfig.M.min, (0, _typography.pxToRem)(90), (0, _typography.stepToRem)(0), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(6), (0, _typography.pxToRem)(60), _screenConfig.ScreenConfig.M.min, (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(8), (0, _typography.pxToRem)(70), (0, _typography.stepToRem)(0), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(30), _colorsConfig.default.font2, _colorsConfig.default.line1, _colorsConfig.default.line1, _colorsConfig.default.tertiary2, _colorsConfig.default.tertiary2, _colorsConfig.default.error3, _colorsConfig.default.error3, _colorsConfig.default.error3, _colorsConfig.default.error3, _colorsConfig.default.font1, _colorsConfig.default.line2, (0, _typography.pxToRem)(2 * (10 + 2)), (0, _typography.pxToRem)(2 * (15 + 2)), _screenConfig.ScreenConfig.M.min, (0, _typography.pxToRem)(2 * (30 + 2)), (0, _typography.pxToRem)(2 * (10 + 2)), (0, _typography.pxToRem)(2 * (15 + 2)), _screenConfig.ScreenConfig.M.min, (0, _typography.pxToRem)(2 * (30 + 2)), (0, _typography.pxToRem)(2 * (10 + 2)), (0, _typography.pxToRem)(2 * (15 + 2)), _screenConfig.ScreenConfig.M.min, (0, _typography.pxToRem)(2 * (30 + 2)));

var StyledTextareaContainer = _styledComponents.default.div.withConfig({
  displayName: "text-input__StyledTextareaContainer",
  componentId: "sc-11wej6v-1"
})(["position:relative;display:flex;textarea.k-Form-TextInput{height:initial;resize:vertical;line-height:1.3;&:disabled{resize:none;}padding-bottom:0;&.k-Form-TextInput--orion{padding:", " ", " 0;min-height:", ";@media (min-width:", "px){padding:", " ", " 0;min-height:", ";}}}.k-Form-TextInput__textareaGradient{position:absolute;left:", ";right:", ";bottom:", ";height:", ";background-image:linear-gradient( to bottom,rgba(255,255,255,0),", " );pointer-events:none;textarea.k-Form-TextInput:disabled + &{display:none;}}"], (0, _typography.pxToRem)(21), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(60), _screenConfig.ScreenConfig.M.min, (0, _typography.pxToRem)(25), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(70), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(3), (0, _typography.pxToRem)(10), _colorsConfig.default.background1);

var TextInput = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2.default)(TextInput, _PureComponent);

  var _super = _createSuper(TextInput);

  function TextInput() {
    (0, _classCallCheck2.default)(this, TextInput);
    return _super.apply(this, arguments);
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
          huge = _this$props.huge,
          giant = _this$props.giant,
          center = _this$props.center,
          tag = _this$props.tag,
          variant = _this$props.variant,
          className = _this$props.className,
          style = _this$props.style,
          others = (0, _objectWithoutProperties2.default)(_this$props, ["valid", "error", "disabled", "name", "digits", "tiny", "huge", "giant", "center", "tag", "variant", "className", "style"]);
      var digitsClass = !!digits ? "k-Form-TextInput-hasDigits k-Form-TextInput-hasDigits_".concat(digits) : null;

      if (tag === 'textarea') {
        return /*#__PURE__*/_react.default.createElement(StyledTextareaContainer, {
          className: (0, _classnames.default)('k-Form-TextInput__textareaContainer', "k-Form-TextInput__textareaContainer--".concat(variant))
        }, /*#__PURE__*/_react.default.createElement(StyledInput, (0, _extends2.default)({
          ref: function ref(input) {
            return _this.input = input;
          },
          as: "textarea",
          disabled: disabled,
          name: name,
          className: (0, _classnames.default)('k-Form-TextInput', className, digitsClass, "k-Form-TextInput--".concat(variant), {
            'k-Form-TextInput--valid': valid,
            'k-Form-TextInput--error': error,
            'k-Form-TextInput--disabled': disabled,
            'k-Form-TextInput--tiny': tiny,
            'k-Form-TextInput--huge': huge,
            'k-Form-TextInput--giant': giant,
            'k-Form-TextInput--alignCenter': center
          }),
          style: !!digits ? (0, _extends2.default)({
            '--input-content-width': digits
          }, style) : style
        }, others)), /*#__PURE__*/_react.default.createElement("div", {
          className: "k-Form-TextInput__textareaGradient"
        }));
      } else {
        return /*#__PURE__*/_react.default.createElement(StyledInput, (0, _extends2.default)({
          ref: function ref(input) {
            return _this.input = input;
          },
          disabled: disabled,
          name: name,
          className: (0, _classnames.default)('k-Form-TextInput', className, digitsClass, "k-Form-TextInput--".concat(variant), {
            'k-Form-TextInput--valid': valid,
            'k-Form-TextInput--error': error,
            'k-Form-TextInput--disabled': disabled,
            'k-Form-TextInput--tiny': tiny,
            'k-Form-TextInput--huge': huge,
            'k-Form-TextInput--giant': giant,
            'k-Form-TextInput--alignCenter': center
          }),
          style: !!digits ? (0, _extends2.default)({
            '--input-content-width': digits
          }, style) : style
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
  huge: _propTypes.default.bool,
  giant: _propTypes.default.bool,
  center: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  name: _propTypes.default.string,
  digits: _propTypes.default.number,
  variant: _propTypes.default.string
};
TextInput.defaultProps = {
  tag: 'input',
  // or 'textarea'
  valid: false,
  error: false,
  tiny: false,
  huge: false,
  giant: false,
  center: false,
  disabled: false,
  name: 'text',
  digits: null,
  variant: 'andromeda'
};