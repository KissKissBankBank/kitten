"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.TextInputWithButton = void 0;

var _extends3 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _deprecated = _interopRequireDefault(require("prop-types-extra/lib/deprecated"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _textInput = require("../../../components/form/text-input");

var _typography = require("../../../helpers/utils/typography");

var _button = require("../../../components/molecules/buttons/button");

var _screenConfig = require("../../../constants/screen-config");

var _excluded = ["valid", "error", "disabled", "size", "value", "rounded", "buttonValue", "modifier", "buttonProps", "inputValue", "className", "inset", "variant"];

var StyledTextInputWithButton = _styledComponents.default.div.withConfig({
  displayName: "text-input-with-button__StyledTextInputWithButton",
  componentId: "sc-1yqni7d-0"
})([".k-Form-TextInputWithButton__button{", ";font-size:", ";line-height:1.3;flex:1 0 auto;appearance:none;cursor:pointer;}&:not(.k-Form-TextInputWithButton--insetButton){display:flex;&.k-Form-TextInputWithButton--orion{gap:", ";}}&.k-Form-TextInputWithButton--insetButton{position:relative;.k-Form-TextInputWithButton__input{padding-right:calc(var(--text-input-size) + ", ");}.k-Form-TextInputWithButton__button{display:flex;align-items:center;justify-content:center;position:absolute;top:", ";bottom:", ";right:", ";min-width:calc(var(--text-input-size) - ", " * 2);border-radius:var(--text-input-button-radius);border:none;background-color:var(--color-grey-000);transition:background-color 0.2s ease;&:hover{background-color:var(--color-grey-300);}&:active{background-color:var(--color-grey-400);}}.k-Form-TextInput--orion + .k-Form-TextInputWithButton__button{--text-input-button-radius:var(--border-radius-s);}&.k-Form-TextInputWithButton--roudedButton .k-Form-TextInputWithButton__button{--text-input-button-radius:var(--border-radius-rounded);}}&.k-Form-TextInputWithButton--tiny{--text-input-size:", ";}&.k-Form-TextInputWithButton--regular{--text-input-size:", ";}&.k-Form-TextInputWithButton--big{--text-input-size:", ";@media (min-width:", "px){--text-input-size:", ";}}&.k-Form-TextInputWithButton--huge{--text-input-size:", ";@media (min-width:", "px){--text-input-size:", ";}}&.k-Form-TextInputWithButton--giant{--text-input-size:", ";@media (min-width:", "px){--text-input-size:", ";}}&.k-Form-TextInputWithButton__button--valid{background-color:var(--color-success-500);border-color:var(--color-success-500);}&.k-Form-TextInputWithButton__button--error{cursor:not-allowed;background-color:var(--color-danger-500);border-color:var(--color-danger-500);}"], _typographyConfig.default.fontStyles.regular, (0, _typography.stepToRem)(-1), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(4), (0, _typography.pxToRem)(4), (0, _typography.pxToRem)(4), (0, _typography.pxToRem)(4), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(60), _screenConfig.ScreenConfig.M.min, (0, _typography.pxToRem)(70), (0, _typography.pxToRem)(70), _screenConfig.ScreenConfig.M.min, (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(70), _screenConfig.ScreenConfig.M.min, (0, _typography.pxToRem)(90));

var TextInputWithButton = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var _extends2;

  var valid = _ref.valid,
      error = _ref.error,
      disabled = _ref.disabled,
      size = _ref.size,
      value = _ref.value,
      rounded = _ref.rounded,
      buttonValue = _ref.buttonValue,
      modifier = _ref.modifier,
      buttonProps = _ref.buttonProps,
      inputValue = _ref.inputValue,
      className = _ref.className,
      inset = _ref.inset,
      variant = _ref.variant,
      others = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  var ButtonComponent = inset ? 'button' : _button.Button;
  return /*#__PURE__*/_react.default.createElement(StyledTextInputWithButton, {
    className: (0, _classnames.default)('k-Form-TextInputWithButton', "k-Form-TextInputWithButton--" + size, "k-Form-TextInputWithButton--" + variant, {
      'k-Form-TextInputWithButton--insetButton': inset,
      'k-Form-TextInputWithButton--roudedButton': rounded
    })
  }, /*#__PURE__*/_react.default.createElement(_textInput.TextInput, (0, _extends3.default)({
    ref: ref || null
  }, others, {
    className: (0, _classnames.default)('k-Form-TextInputWithButton__input', className),
    valid: valid,
    error: error,
    disabled: disabled,
    size: size,
    rounded: rounded,
    value: inputValue,
    variant: variant
  })), /*#__PURE__*/_react.default.createElement(ButtonComponent, (0, _extends3.default)({
    type: "button"
  }, buttonProps, (_extends2 = {
    className: (0, _classnames.default)('k-Form-TextInputWithButton__button', buttonProps == null ? void 0 : buttonProps.className, {
      'k-Form-TextInputWithButton__button--valid': valid,
      'k-Form-TextInputWithButton__button--error': error,
      'k-Form-TextInputWithButton__button--disabled': disabled
    }),
    disabled: disabled,
    variant: variant,
    modifier: modifier,
    size: size
  }, _extends2["disabled"] = disabled, _extends2)), value || buttonValue));
});

exports.TextInputWithButton = TextInputWithButton;
TextInputWithButton.propTypes = {
  valid: _propTypes.default.bool,
  error: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  size: _propTypes.default.string,
  rounded: _propTypes.default.bool,
  inset: _propTypes.default.bool,
  modifier: _propTypes.default.string,
  inputValue: _propTypes.default.string,
  // DEPRECATED: do not use prop `value`. Use `buttonValue` instead.
  value: (0, _deprecated.default)(_propTypes.default.node, 'Use `buttonValue` instead.'),
  buttonValue: _propTypes.default.node
};
TextInputWithButton.defaultProps = {
  valid: false,
  error: false,
  disabled: false,
  size: 'regular',
  buttonValue: 'Button',
  buttonProps: {},
  modifier: 'beryllium',
  rounded: false,
  inset: false
};