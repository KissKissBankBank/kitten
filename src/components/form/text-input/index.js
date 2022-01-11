"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.TextInput = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _typography = require("../../../helpers/utils/typography");

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _screenConfig = require("../../../constants/screen-config");

var _classnames = _interopRequireDefault(require("classnames"));

var _excluded = ["valid", "error", "disabled", "name", "digits", "size", "center", "tag", "variant", "className", "style", "rounded", "darkBackground"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var StyledInput = _styledComponents.default.input.withConfig({
  displayName: "text-input__StyledInput",
  componentId: "sc-11wej6v-0"
})(["--input-padding-horizontal:", ";--input-border-width:var(--border-width);--input-height:", ";font-size:", ";line-height:1em;", ";box-sizing:border-box;border-width:var(--input-border-width);border-style:solid;border-radius:0;width:100%;appearance:none;background-color:var(--color-grey-000);color:var(--color-grey-900);border-color:var(--color-grey-400);height:var(--input-height);min-height:var(--input-height);transition:border-color 0.2s ease;::placeholder{color:var(--color-grey-700);}&.k-Form-TextInput--tiny{--input-height:", ";}&.k-Form-TextInput--regular{--input-height:", ";}&.k-Form-TextInput--big{--input-height:", ";@media (min-width:", "px){--input-height:", ";font-size:", ";}}&.k-Form-TextInput--huge{--input-height:", ";@media (min-width:", "px){--input-height:", ";font-size:", ";}}&.k-Form-TextInput--giant{--input-height:", ";@media (min-width:", "px){--input-height:", ";font-size:", ";}}padding:", " var(--input-padding-horizontal);&.k-Form-TextInput--orion{border-radius:var(--border-radius-s);}&.k-Form-TextInput--rounded{border-radius:var(--border-radius-rounded);}&.k-Form-TextInput--alignCenter{text-align:center;}:disabled{color:var(--color-grey-700);border-color:var(--color-grey-200);background-color:var(--color-grey-200);cursor:not-allowed;&:hover{border-color:var(--color-grey-200);}::placeholder{color:var(--color-grey-700);}}&.k-Form-TextInput--valid{color:var(--color-grey-900);border:var(--border-success);}&.k-Form-TextInput--error{color:var(--color-grey-900);border:var(--border-danger);}&:invalid{box-shadow:none;color:var(--color-grey-900);border:var(--border-danger);}&:hover{border:var(--border-hover);}&:focus{color:var(--color-grey-900);border-color:var(--color-grey-500);outline:var(--outline-input);outline-offset:var(--outline-offset-input);}&.k-Form-TextInput-hasDigits{width:calc( var(--input-content-width) * 1ch + (2 * (var(--input-padding-horizontal) + var(--input-border-width))) );}&.k-Form-TextInput-hasDigits_2{text-align:center;}@media (max-width:", "px){font-size:", ";}&.k-Form-TextInput--darkBackground{background-color:var(--color-grey-800);border-color:var(--color-grey-800);color:var(--color-grey-000);::placeholder{color:var(--color-grey-400);}}"], (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(50), (0, _typography.stepToRem)(-1), _typographyConfig.default.fontStyles.light, (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(60), _screenConfig.ScreenConfig.M.min, (0, _typography.pxToRem)(70), (0, _typography.stepToRem)(0), (0, _typography.pxToRem)(70), _screenConfig.ScreenConfig.M.min, (0, _typography.pxToRem)(80), (0, _typography.stepToRem)(0), (0, _typography.pxToRem)(70), _screenConfig.ScreenConfig.M.min, (0, _typography.pxToRem)(90), (0, _typography.stepToRem)(0), (0, _typography.pxToRem)(10), _screenConfig.ScreenConfig.XS.max, (0, _typography.stepToRem)(0));

var StyledTextareaContainer = _styledComponents.default.div.withConfig({
  displayName: "text-input__StyledTextareaContainer",
  componentId: "sc-11wej6v-1"
})(["position:relative;display:flex;textarea.k-Form-TextInput{height:initial;resize:vertical;line-height:1.3;&:disabled{resize:none;}padding-bottom:0;&.k-Form-TextInput--orion{&.k-Form-TextInput--tiny{padding-top:", ";padding-bottom:", ";}&.k-Form-TextInput--regular{padding-top:", ";padding-bottom:", ";}&.k-Form-TextInput--big{padding-top:", ";padding-bottom:", ";@media (min-width:", "px){padding-top:", ";padding-bottom:", ";}}&.k-Form-TextInput--huge{padding-top:", ";padding-bottom:", ";@media (min-width:", "px){padding-top:", ";padding-bottom:", ";}}&.k-Form-TextInput--giant{padding-top:", ";padding-bottom:", ";@media (min-width:", "px){padding-top:", ";padding-bottom:", ";}}}}&.k-Form-TextInput--rounded{border-radius:var(--border-radius-rounded);}&.k-Form-TextInput--darkBackground{background-color:var(--color-grey-800);border-color:var(--color-grey-800);color:var(--color-grey-000);::placeholder{color:var(--color-grey-400);}}.k-Form-TextInput__textareaGradient{position:absolute;left:", ";right:", ";bottom:", ";height:", ";background-image:linear-gradient( to bottom,rgba(255,255,255,0),rgba(255,255,255,0.9) );pointer-events:none;textarea.k-Form-TextInput:disabled + &{display:none;}}.k-Form-TextInput:focus-visible + .k-Form-TextInput__textareaGradient{bottom:", ";}"], (0, _typography.pxToRem)(9), (0, _typography.pxToRem)(9), (0, _typography.pxToRem)(14), (0, _typography.pxToRem)(14), (0, _typography.pxToRem)(18), (0, _typography.pxToRem)(18), _screenConfig.ScreenConfig.M.min, (0, _typography.pxToRem)(21), (0, _typography.pxToRem)(21), (0, _typography.pxToRem)(21), (0, _typography.pxToRem)(21), _screenConfig.ScreenConfig.M.min, (0, _typography.pxToRem)(27), (0, _typography.pxToRem)(27), (0, _typography.pxToRem)(21), (0, _typography.pxToRem)(21), _screenConfig.ScreenConfig.M.min, (0, _typography.pxToRem)(32), (0, _typography.pxToRem)(32), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(3));

var TextInput = /*#__PURE__*/function (_PureComponent) {
  (0, _inheritsLoose2.default)(TextInput, _PureComponent);

  function TextInput() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = TextInput.prototype;

  _proto.render = function render() {
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
        darkBackground = _this$props.darkBackground,
        others = (0, _objectWithoutPropertiesLoose2.default)(_this$props, _excluded);
    var digitsClass = !!digits ? "k-Form-TextInput-hasDigits k-Form-TextInput-hasDigits_" + digits : null;

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
        className: (0, _classnames.default)('k-Form-TextInput', className, digitsClass, "k-Form-TextInput--" + variant, "k-Form-TextInput--" + size, {
          'k-Form-TextInput--valid': valid,
          'k-Form-TextInput--error': error,
          'k-Form-TextInput--disabled': disabled,
          'k-Form-TextInput--alignCenter': center,
          'k-Form-TextInput--rounded': rounded,
          'k-Form-TextInput--darkBackground': darkBackground
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
        className: (0, _classnames.default)('k-Form-TextInput', className, digitsClass, "k-Form-TextInput--" + variant, "k-Form-TextInput--" + size, {
          'k-Form-TextInput--valid': valid,
          'k-Form-TextInput--error': error,
          'k-Form-TextInput--disabled': disabled,
          'k-Form-TextInput--alignCenter': center,
          'k-Form-TextInput--rounded': rounded,
          'k-Form-TextInput--darkBackground': darkBackground
        }),
        style: !!digits ? (0, _extends2.default)({
          '--input-content-width': digits
        }, style) : style
      }, others));
    }
  };

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
  rounded: _propTypes.default.bool,
  darkBackground: _propTypes.default.bool
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
  rounded: false,
  darkBackground: false
};