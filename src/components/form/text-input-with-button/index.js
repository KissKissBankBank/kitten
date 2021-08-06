"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextInputWithButton = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _textInput = require("../../../components/form/text-input");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _typography = require("../../../helpers/utils/typography");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _modifierStyles = require("../../../components/molecules/buttons/button/helpers/modifier-styles");

var _deprecated = _interopRequireDefault(require("prop-types-extra/lib/deprecated"));

var _screenConfig = require("../../../constants/screen-config");

var StyledTextInputWithButton = _styledComponents.default.div.withConfig({
  displayName: "text-input-with-button__StyledTextInputWithButton",
  componentId: "sc-1yqni7d-0"
})([".k-Form-TextInputWithButton__button{", ";font-size:", ";line-height:1.3;flex:1 0 auto;appearance:none;cursor:pointer;}&:not(.k-Form-TextInputWithButton--insetButton){display:flex;.k-Form-TextInputWithButton__input{border-right:0;}.k-Form-TextInputWithButton__button{border-radius:0;padding:0 ", ";", ";}&.k-Form-TextInputWithButton--roudedButton{.k-Form-TextInputWithButton__input{border-top-right-radius:0;border-bottom-right-radius:0;}.k-Form-TextInputWithButton__button{border-top-right-radius:var(--text-input-size);border-bottom-right-radius:var(--text-input-size);}}}&.k-Form-TextInputWithButton--insetButton{position:relative;.k-Form-TextInputWithButton__input{padding-right:calc(var(--text-input-size) + ", ");}.k-Form-TextInputWithButton__button{display:flex;align-items:center;justify-content:center;position:absolute;top:", ";bottom:", ";right:", ";min-width:calc(var(--text-input-size) - ", " * 2);border-radius:var(--text-input-button-radius);border:none;background-color:", ";transition:background-color 0.2s ease;&:hover{background-color:", ";}&:active{background-color:", ";}&:focus{outline:", " solid ", ";outline-offset:", ";}&:focus:not(:focus-visible){outline-color:transparent;}&:focus-visible{outline-color:", ";}}.k-Form-TextInput--orion + .k-Form-TextInputWithButton__button{--text-input-button-radius:", ";}.k-Form-TextInput--big + .k-Form-TextInputWithButton__button,.k-Form-TextInput--huge + .k-Form-TextInputWithButton__button,.k-Form-TextInput--giant + .k-Form-TextInputWithButton__button{--text-input-button-radius:", ";@media (min-width:", "px){--text-input-button-radius:", ";}}&.k-Form-TextInputWithButton--roudedButton{--text-input-button-radius:var(--text-input-size);}}&.k-Form-TextInputWithButton--tiny{--text-input-size:", ";}&.k-Form-TextInputWithButton--regular{--text-input-size:", ";}&.k-Form-TextInputWithButton--big{--text-input-size:", ";@media (min-width:", "px){--text-input-size:", ";}}&.k-Form-TextInputWithButton--huge{--text-input-size:", ";@media (min-width:", "px){--text-input-size:", ";}}&.k-Form-TextInputWithButton--giant{--text-input-size:", ";@media (min-width:", "px){--text-input-size:", ";}}&.k-Form-TextInputWithButton__button--valid{background-color:", ";border-color:", ";}&.k-Form-TextInputWithButton__button--error{cursor:not-allowed;background-color:", ";border-color:", ";}"], _typographyConfig.default.fontStyles.regular, (0, _typography.stepToRem)(-1), (0, _typography.pxToRem)(30), function (_ref) {
  var modifier = _ref.modifier;
  return (0, _modifierStyles.modifierStyles)(modifier);
}, (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(4), (0, _typography.pxToRem)(4), (0, _typography.pxToRem)(4), (0, _typography.pxToRem)(4), _colorsConfig.default.background1, _colorsConfig.default.line1, _colorsConfig.default.line2, _colorsConfig.default.primary4, (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(2), _colorsConfig.default.primary4, (0, _typography.pxToRem)(4), (0, _typography.pxToRem)(6), _screenConfig.ScreenConfig.M.min, (0, _typography.pxToRem)(8), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(60), _screenConfig.ScreenConfig.M.min, (0, _typography.pxToRem)(70), (0, _typography.pxToRem)(70), _screenConfig.ScreenConfig.M.min, (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(70), _screenConfig.ScreenConfig.M.min, (0, _typography.pxToRem)(90), _colorsConfig.default.valid, _colorsConfig.default.valid, _colorsConfig.default.error, _colorsConfig.default.error);

var TextInputWithButton = _react.default.forwardRef(function (_ref2, ref) {
  var valid = _ref2.valid,
      error = _ref2.error,
      disabled = _ref2.disabled,
      size = _ref2.size,
      value = _ref2.value,
      rounded = _ref2.rounded,
      buttonValue = _ref2.buttonValue,
      modifier = _ref2.modifier,
      buttonProps = _ref2.buttonProps,
      inputValue = _ref2.inputValue,
      className = _ref2.className,
      inset = _ref2.inset,
      others = (0, _objectWithoutProperties2.default)(_ref2, ["valid", "error", "disabled", "size", "value", "rounded", "buttonValue", "modifier", "buttonProps", "inputValue", "className", "inset"]);
  return /*#__PURE__*/_react.default.createElement(StyledTextInputWithButton, {
    className: (0, _classnames.default)('k-Form-TextInputWithButton', "k-Form-TextInputWithButton--".concat(size), {
      'k-Form-TextInputWithButton--insetButton': inset,
      'k-Form-TextInputWithButton--roudedButton': rounded
    }),
    modifier: modifier
  }, /*#__PURE__*/_react.default.createElement(_textInput.TextInput, (0, _extends2.default)({
    className: (0, _classnames.default)('k-Form-TextInputWithButton__input', className)
  }, others, {
    valid: valid,
    error: error,
    disabled: disabled,
    size: size,
    rounded: rounded,
    value: inputValue,
    ref: ref || null
  })), /*#__PURE__*/_react.default.createElement("button", (0, _extends2.default)({
    type: "button"
  }, buttonProps, {
    className: (0, _classnames.default)('k-Form-TextInputWithButton__button', buttonProps === null || buttonProps === void 0 ? void 0 : buttonProps.className, {
      'k-Form-TextInputWithButton__button--valid': valid,
      'k-Form-TextInputWithButton__button--error': error,
      'k-Form-TextInputWithButton__button--disabled': disabled
    }),
    disabled: disabled
  }), value || buttonValue));
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