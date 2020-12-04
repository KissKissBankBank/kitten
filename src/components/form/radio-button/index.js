"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RadioButton = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _typography = require("../../../helpers/utils/typography");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _screenConfig = require("../../../constants/screen-config");

var StyledRadioButton = _styledComponents.default.div.withConfig({
  displayName: "radio-button__StyledRadioButton",
  componentId: "wb11e0-0"
})(["margin:", " 0;&,& *{transition:all .2s ease;}.k-Form-RadioButton__label{display:flex;align-items:flex-start;align-self:flex-start;flex-wrap:wrap;cursor:pointer;}.k-Form-RadioButton__label::before{box-sizing:border-box;display:block;flex-shrink:0;width:", ";height:", ";margin:", " ", " 0 0;content:'';background-position:center;background-repeat:no-repeat;background-color:", ";border:", " solid ", ";border-radius:50%;transition:border .2s,background .2s;}.k-Form-RadioButton__input{position:absolute;opacity:0;cursor:pointer;}.k-Form-RadioButton__input:focus + .k-Form-RadioButton__label::before{outline:none;border-color:", ";}.k-Form-RadioButton__input:checked + .k-Form-RadioButton__label::before{border:", " solid ", ";}&.k-Form-RadioButton--error{.k-Form-RadioButton__label::before{border-color:", ";}.k-Form-RadioButton__input:checked:not(:disabled) + .k-Form-RadioButton__label::before{border-color:", ";}}.k-Form-RadioButton__input:disabled{& + .k-Form-RadioButton__label{border-color:", ";}& + .k-Form-RadioButton__label::before{background-color:", ";border-color:", ";}&:checked + .k-Form-RadioButton__label::before{background-color:", ";border-color:", ";}}.k-Form-RadioButton__labelText{flex:1 0 calc(100% - ", ");", " font-size:", ";line-height:1.5;}:active .k-Form-RadioButton__labelText,.k-Form-RadioButton__input:active + .k-Form-RadioButton__labelText{color:", ";}&.k-Form-RadioButton--largeLabel{.k-Form-RadioButton__label::before{margin-top:", ";}.k-Form-RadioButton__labelText{", " font-size:", ";}}.k-Form-RadioButton__labelText--withContents{", "}.k-Form-RadioButton__labelContents{margin-left:", ";flex:1 0 calc(100% - ", ");line-height:1.5;", " font-size:", ";&:empty{display:none;}}&.k-Form-RadioButton--largeContent .k-Form-RadioButton__labelContents{font-size:", ";}&.k-Form-RadioButton--orion{margin:", " 0;.k-Form-RadioButton__label{box-sizing:border-box;padding:", " ", ";min-height:", ";border-radius:", ";border:2px solid ", ";}.k-Form-RadioButton__input:checked:not(:disabled),.k-Form-RadioButton__input:focus:not(:disabled){& + .k-Form-RadioButton__label{border-color:", ";}}&.k-Form-RadioButton--error{.k-Form-RadioButton__input:not(:disabled) + .k-Form-RadioButton__label{border-color:", ";}}.k-Form-RadioButton__labelText{", ";}@media (min-width:", "px){.k-Form-RadioButton__label{min-height:", ";border-radius:", ";}.k-Form-RadioButton__label::before{margin-top:", ";width:", ";height:", ";}.k-Form-RadioButton__labelText{font-size:", ";flex:1 0 calc(100% - ", ");}.k-Form-RadioButton__labelContents{margin-left:", ";flex:1 0 calc(100% - ", ");}.k-Form-RadioButton__input:checked + .k-Form-RadioButton__label::before{border-width:", ";}}}&.k-Form-RadioButton--check{.k-Form-RadioButton__input:checked + .k-Form-RadioButton__label::before{border-width:", ";background-color:", ";background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 11 8' width='11' height='8' fill='%23fff' %3E%3Cpath d='M.904 4.06l1.414-1.414L4.44 4.768 8.682.525l1.414 1.414L4.44 7.596.904 4.061z' /%3E%3C/svg%3E\");}&.k-Form-RadioButton--error .k-Form-RadioButton__input:checked:not(:disabled) + .k-Form-RadioButton__label::before{background-color:", ";}.k-Form-RadioButton__input:disabled + .k-Form-RadioButton__label::before{background-color:", ";}}"], (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(16), (0, _typography.pxToRem)(16), (0, _typography.pxToRem)(4), (0, _typography.pxToRem)(10), _colorsConfig.default.background1, (0, _typography.pxToRem)(2), _colorsConfig.default.line1, _colorsConfig.default.primary1, (0, _typography.pxToRem)(5), _colorsConfig.default.primary1, _colorsConfig.default.error3, _colorsConfig.default.error, _colorsConfig.default.line2, _colorsConfig.default.line1, _colorsConfig.default.line2, _colorsConfig.default.background1, _colorsConfig.default.line2, (0, _typography.pxToRem)(16 + 10), _typographyConfig.default.fontStyles.light, (0, _typography.stepToRem)(-1), _colorsConfig.default.primary3, (0, _typography.pxToRem)(8), _typographyConfig.default.fontStyles.regular, (0, _typography.stepToRem)(2), _typographyConfig.default.fontStyles.regular, (0, _typography.pxToRem)(16 + 10), (0, _typography.pxToRem)(16 + 10 + 10), _typographyConfig.default.fontStyles.light, (0, _typography.stepToRem)(-2), (0, _typography.stepToRem)(-1), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(25), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(60), (0, _typography.pxToRem)(6), _colorsConfig.default.line1, _colorsConfig.default.primary1, _colorsConfig.default.error3, _typographyConfig.default.fontStyles.regular, _screenConfig.ScreenConfig.S.min, (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(8), (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(20), (0, _typography.stepToRem)(0), (0, _typography.pxToRem)(20 + 10), (0, _typography.pxToRem)(20 + 10), (0, _typography.pxToRem)(20 + 10 + 10), (0, _typography.pxToRem)(6), (0, _typography.pxToRem)(2), _colorsConfig.default.primary1, _colorsConfig.default.error, _colorsConfig.default.line2);

var RadioButton = function RadioButton(_ref) {
  var className = _ref.className,
      id = _ref.id,
      children = _ref.children,
      inputClassName = _ref.inputClassName,
      large = _ref.large,
      largeContent = _ref.largeContent,
      text = _ref.text,
      error = _ref.error,
      disabled = _ref.disabled,
      variant = _ref.variant,
      design = _ref.design,
      inputProps = (0, _objectWithoutProperties2.default)(_ref, ["className", "id", "children", "inputClassName", "large", "largeContent", "text", "error", "disabled", "variant", "design"]);
  return /*#__PURE__*/_react.default.createElement(StyledRadioButton, {
    className: (0, _classnames.default)('k-Form-RadioButton', className, "k-Form-RadioButton--".concat(variant), "k-Form-RadioButton--".concat(design), {
      'k-Form-RadioButton--error': error,
      'k-Form-RadioButton--largeLabel': large,
      'k-Form-RadioButton--largeContent': largeContent
    })
  }, /*#__PURE__*/_react.default.createElement("input", (0, _extends2.default)({
    id: id,
    type: "radio",
    className: (0, _classnames.default)('k-Form-RadioButton__input', inputClassName),
    disabled: disabled
  }, inputProps)), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: id,
    className: "k-Form-RadioButton__label"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: (0, _classnames.default)('k-Form-RadioButton__labelText', {
      'k-Form-RadioButton__labelText--withContents': !!children
    })
  }, text), children && /*#__PURE__*/_react.default.createElement("div", {
    className: "k-Form-RadioButton__labelContents"
  }, children)));
};

exports.RadioButton = RadioButton;
RadioButton.propTypes = {
  text: _propTypes.default.string.isRequired,
  id: _propTypes.default.string.isRequired,
  large: _propTypes.default.bool,
  largeContent: _propTypes.default.bool,
  error: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  variant: _propTypes.default.oneOf(['andromeda', 'orion']),
  design: _propTypes.default.oneOf(['disc', 'check'])
};
RadioButton.defaultProps = {
  large: false,
  largeContent: false,
  error: false,
  disabled: false,
  variant: 'andromeda',
  design: 'disc'
};