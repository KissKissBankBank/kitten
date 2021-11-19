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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var StyledInput = _styledComponents.default.input.withConfig({
  displayName: "text-input__StyledInput",
  componentId: "sc-11wej6v-0"
})(["--input-padding-horizontal:", ";--input-border-width:var(--border-width);--input-height:", ";font-size:", ";line-height:1em;", ";box-sizing:border-box;border-width:", ";border-width:var(--input-border-width);border-style:solid;border-radius:0;width:100%;appearance:none;background-color:", ";color:", ";border-color:var(--color-grey-400);height:var(--input-height);min-height:var(--input-height);transition:border-color 0.2s ease;::placeholder{color:", ";}&.k-Form-TextInput--tiny{--input-height:", ";}&.k-Form-TextInput--regular{--input-height:", ";}&.k-Form-TextInput--big{--input-height:", ";@media (min-width:", "px){--input-height:", ";font-size:", ";}}&.k-Form-TextInput--huge{--input-height:", ";@media (min-width:", "px){--input-height:", ";font-size:", ";}}&.k-Form-TextInput--giant{--input-height:", ";@media (min-width:", "px){--input-height:", ";font-size:", ";}}padding:", " ", ";padding:", " var(--input-padding-horizontal);&.k-Form-TextInput--orion{border-radius:", ";&.k-Form-TextInput--big,&.k-Form-TextInput--huge,&.k-Form-TextInput--giant{border-radius:", ";@media (min-width:", "px){--input-padding-horizontal:", ";border-radius:", ";font-size:", ";@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){padding:", " ", ";}}}}&.k-Form-TextInput--rounded{border-radius:var(--input-height);}&.k-Form-TextInput--alignCenter{text-align:center;}:disabled{color:", ";border-color:", ";background-color:", ";cursor:not-allowed;::placeholder{color:", ";}}&.k-Form-TextInput--valid{color:", ";border-color:", ";}&.k-Form-TextInput--error{color:", ";border-color:", ";}&:invalid{box-shadow:none;color:", ";border-color:", ";}&:hover{border-color:var(--color-grey-500);}&:focus{color:", ";border-color:", ";}&.k-Form-TextInput-hasDigits{width:calc( var(--input-content-width) * 1ch + (2 * (var(--input-padding-horizontal) + var(--input-border-width))) );}&.k-Form-TextInput-hasDigits_2{text-align:center;}@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){&.k-Form-TextInput-hasDigits_2{text-align:center;width:calc(2em + ", ");&.k-Form-TextInput--orion{width:calc(2em + ", ");@media (min-width:", "px){width:calc(2em + ", ");}}}&.k-Form-TextInput-hasDigits_4{width:calc(4em + ", ");&.k-Form-TextInput--orion{width:calc(4em + ", ");@media (min-width:", "px){width:calc(4em + ", ");}}}&.k-Form-TextInput-hasDigits_12{width:calc(12em + ", ");&.k-Form-TextInput--orion{width:calc(12em + ", ");@media (min-width:", "px){width:calc(12em + ", ");}}}}@media (max-width:", "px){font-size:", ";}"], (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(50), (0, _typography.stepToRem)(-1), _typographyConfig.default.fontStyles.light, (0, _typography.pxToRem)(1), _colorsConfig.default.background1, _colorsConfig.default.font1, _colorsConfig.default.font3, (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(60), _screenConfig.ScreenConfig.M.min, (0, _typography.pxToRem)(70), (0, _typography.stepToRem)(0), (0, _typography.pxToRem)(70), _screenConfig.ScreenConfig.M.min, (0, _typography.pxToRem)(80), (0, _typography.stepToRem)(0), (0, _typography.pxToRem)(70), _screenConfig.ScreenConfig.M.min, (0, _typography.pxToRem)(90), (0, _typography.stepToRem)(0), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(4), (0, _typography.pxToRem)(6), _screenConfig.ScreenConfig.M.min, (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(8), (0, _typography.stepToRem)(0), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(30), _colorsConfig.default.font1, _colorsConfig.default.line2, _colorsConfig.default.line1, _colorsConfig.default.line3, _colorsConfig.default.font1, _colorsConfig.default.tertiary2, _colorsConfig.default.font1, _colorsConfig.default.error3, _colorsConfig.default.font1, _colorsConfig.default.error3, _colorsConfig.default.font1, _colorsConfig.default.font2, (0, _typography.pxToRem)(2 * (10 + 2)), (0, _typography.pxToRem)(2 * (15 + 2)), _screenConfig.ScreenConfig.M.min, (0, _typography.pxToRem)(2 * (30 + 2)), (0, _typography.pxToRem)(2 * (10 + 2)), (0, _typography.pxToRem)(2 * (15 + 2)), _screenConfig.ScreenConfig.M.min, (0, _typography.pxToRem)(2 * (30 + 2)), (0, _typography.pxToRem)(2 * (10 + 2)), (0, _typography.pxToRem)(2 * (15 + 2)), _screenConfig.ScreenConfig.M.min, (0, _typography.pxToRem)(2 * (30 + 2)), _screenConfig.ScreenConfig.XS.max, (0, _typography.stepToRem)(0));

var StyledTextareaContainer = _styledComponents.default.div.withConfig({
  displayName: "text-input__StyledTextareaContainer",
  componentId: "sc-11wej6v-1"
})(["position:relative;display:flex;textarea.k-Form-TextInput{height:initial;resize:vertical;line-height:1.3;&:disabled{resize:none;}padding-bottom:0;&.k-Form-TextInput--orion{&.k-Form-TextInput--tiny{padding-top:", ";padding-bottom:", ";}&.k-Form-TextInput--regular{padding-top:", ";padding-bottom:", ";}&.k-Form-TextInput--big{padding-top:", ";padding-bottom:", ";@media (min-width:", "px){padding-top:", ";padding-bottom:", ";}}&.k-Form-TextInput--huge{padding-top:", ";padding-bottom:", ";@media (min-width:", "px){padding-top:", ";padding-bottom:", ";}}&.k-Form-TextInput--giant{padding-top:", ";padding-bottom:", ";@media (min-width:", "px){padding-top:", ";padding-bottom:", ";}}}}&.k-Form-TextInput--rounded{border-radius:var(--input-height);}.k-Form-TextInput__textareaGradient{position:absolute;left:", ";right:", ";bottom:", ";height:", ";background-image:linear-gradient( to bottom,rgba(255,255,255,0),", " );pointer-events:none;textarea.k-Form-TextInput:disabled + &{display:none;}}"], (0, _typography.pxToRem)(9), (0, _typography.pxToRem)(9), (0, _typography.pxToRem)(14), (0, _typography.pxToRem)(14), (0, _typography.pxToRem)(18), (0, _typography.pxToRem)(18), _screenConfig.ScreenConfig.M.min, (0, _typography.pxToRem)(21), (0, _typography.pxToRem)(21), (0, _typography.pxToRem)(21), (0, _typography.pxToRem)(21), _screenConfig.ScreenConfig.M.min, (0, _typography.pxToRem)(27), (0, _typography.pxToRem)(27), (0, _typography.pxToRem)(21), (0, _typography.pxToRem)(21), _screenConfig.ScreenConfig.M.min, (0, _typography.pxToRem)(32), (0, _typography.pxToRem)(32), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(3), (0, _typography.pxToRem)(10), _colorsConfig.default.background1);

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
          size = _this$props.size,
          center = _this$props.center,
          tag = _this$props.tag,
          variant = _this$props.variant,
          className = _this$props.className,
          style = _this$props.style,
          rounded = _this$props.rounded,
          others = (0, _objectWithoutProperties2.default)(_this$props, ["valid", "error", "disabled", "name", "digits", "size", "center", "tag", "variant", "className", "style", "rounded"]);
      var digitsClass = !!digits ? "k-Form-TextInput-hasDigits k-Form-TextInput-hasDigits_".concat(digits) : null;

      if (tag === 'textarea') {
        return /*#__PURE__*/_react.default.createElement(StyledTextareaContainer, {
          className: (0, _classnames.default)('k-Form-TextInput__textareaContainer')
        }, /*#__PURE__*/_react.default.createElement(StyledInput, (0, _extends2.default)({
          ref: function ref(input) {
            return _this.input = input;
          },
          as: "textarea",
          disabled: disabled,
          name: name,
          className: (0, _classnames.default)('k-Form-TextInput', className, digitsClass, "k-Form-TextInput--".concat(variant), "k-Form-TextInput--".concat(size), {
            'k-Form-TextInput--valid': valid,
            'k-Form-TextInput--error': error,
            'k-Form-TextInput--disabled': disabled,
            'k-Form-TextInput--alignCenter': center,
            'k-Form-TextInput--rounded': rounded
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
          className: (0, _classnames.default)('k-Form-TextInput', className, digitsClass, "k-Form-TextInput--".concat(variant), "k-Form-TextInput--".concat(size), {
            'k-Form-TextInput--valid': valid,
            'k-Form-TextInput--error': error,
            'k-Form-TextInput--disabled': disabled,
            'k-Form-TextInput--alignCenter': center,
            'k-Form-TextInput--rounded': rounded
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
  size: _propTypes.default.oneOf(['tiny', 'regular', 'big', 'huge', 'giant']),
  center: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  name: _propTypes.default.string,
  digits: _propTypes.default.number,
  variant: _propTypes.default.oneOf(['orion', 'andromeda']),
  rounded: _propTypes.default.bool
};
TextInput.defaultProps = {
  tag: 'input',
  // or 'textarea'
  valid: false,
  error: false,
  size: 'regular',
  center: false,
  disabled: false,
  name: 'text',
  digits: null,
  variant: 'orion',
  rounded: false
};