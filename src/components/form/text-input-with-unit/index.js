"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextInputWithUnit = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _textInput = require("../../../components/form/text-input");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _typography = require("../../../helpers/utils/typography");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _classnames = _interopRequireDefault(require("classnames"));

var StyledTextInputWithUnit = _styledComponents.default.div.withConfig({
  displayName: "text-input-with-unit__StyledTextInputWithUnit",
  componentId: "gjmccx-0"
})(["position:relative;width:1%;&:not(.k-Form-TextInputWithUnit--hasDigits){width:100%;}.k-Form-TextInputWithUnit__input{padding-right:", ";&[type='number']{appearance:textfield;&::-webkit-inner-spin-button,&::-webkit-outer-spin-button{margin:0;appearance:none;}}}.k-Form-TextInputWithUnit__unit{display:flex;z-index:1;position:absolute;right:", ";top:", ";bottom:", ";min-width:", ";align-items:center;justify-content:center;border-left:", " solid ", ";border-radius:0;box-sizing:border-box;color:", ";white-space:nowrap;transition:all 0.2s;font-size:", ";", ";background-color:", ";&.k-Form-TextInputWithUnit__unit--valid{border-color:", ";color:", ";}&.k-Form-TextInputWithUnit__unit--error{border-color:", ";color:", ";}&.k-Form-TextInputWithUnit__unit--disabled{color:", ";background-color:", ";}&.k-Form-TextInputWithUnit__unit--tiny{padding:0 ", ";}&.k-Form-TextInputWithUnit__unit--regular{padding:0 ", ";}&.k-Form-TextInputWithUnit__unit--big,&.k-Form-TextInputWithUnit__unit--huge{padding:0 ", ";}&.k-Form-TextInputWithUnit__unit--giant{padding:0 ", ";}&.k-Form-TextInputWithUnit__unit--hasUnitWord{font-size:", ";}}&:focus-within{.k-Form-TextInputWithUnit__unit{border-color:", ";color:", ";}}&.k-Form-TextInputWithUnit--orion{.k-Form-TextInputWithUnit__input{border-radius:", ";padding-right:", ";}.k-Form-TextInputWithUnit__unit{border:none;}}"], (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(42), (0, _typography.pxToRem)(2), _colorsConfig.default.line1, _colorsConfig.default.font1, (0, _typography.stepToRem)(0), _typographyConfig.default.fontStyles.regular, _colorsConfig.default.background1, _colorsConfig.default.tertiary2, _colorsConfig.default.valid, _colorsConfig.default.error3, _colorsConfig.default.error, _colorsConfig.default.font2, _colorsConfig.default.line1, (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(25), (0, _typography.stepToRem)(-1), _colorsConfig.default.line2, _colorsConfig.default.font1, (0, _typography.pxToRem)(4), (0, _typography.pxToRem)(42));

var TextInputWithUnit = function TextInputWithUnit(_ref) {
  var unit = _ref.unit,
      unitWord = _ref.unitWord,
      size = _ref.size,
      variant = _ref.variant,
      digits = _ref.digits,
      className = _ref.className,
      valid = _ref.valid,
      error = _ref.error,
      disabled = _ref.disabled,
      wrapperProps = _ref.wrapperProps,
      others = (0, _objectWithoutProperties2.default)(_ref, ["unit", "unitWord", "size", "variant", "digits", "className", "valid", "error", "disabled", "wrapperProps"]);
  var input = (0, _react.useRef)(null);
  return /*#__PURE__*/_react.default.createElement(StyledTextInputWithUnit, (0, _extends2.default)({}, wrapperProps, {
    className: (0, _classnames.default)('k-Form-TextInputWithUnit', "k-Form-TextInputWithUnit--".concat(variant), wrapperProps.className, {
      'k-Form-TextInputWithUnit--hasDigits': !!digits
    })
  }), /*#__PURE__*/_react.default.createElement(_textInput.TextInput, (0, _extends2.default)({
    ref: input
  }, others, {
    valid: valid,
    error: error,
    disabled: disabled,
    size: size,
    className: (0, _classnames.default)('k-Form-TextInputWithUnit__input', className),
    variant: variant
  })), /*#__PURE__*/_react.default.createElement("span", {
    className: (0, _classnames.default)('k-Form-TextInputWithUnit__unit', "k-Form-TextInputWithUnit__unit--".concat(size), {
      'k-Form-TextInputWithUnit__unit--valid': valid,
      'k-Form-TextInputWithUnit__unit--error': error,
      'k-Form-TextInputWithUnit__unit--disabled': disabled,
      'k-Form-TextInputWithUnit__unit--hasUnitWord': !unit && !!unitWord
    })
  }, unit || unitWord));
};

exports.TextInputWithUnit = TextInputWithUnit;
TextInputWithUnit.propTypes = {
  type: _propTypes.default.string,
  valid: _propTypes.default.bool,
  error: _propTypes.default.bool,
  center: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  unit: _propTypes.default.string,
  unitWord: _propTypes.default.bool,
  digits: _propTypes.default.number,
  variant: _propTypes.default.oneOf(['andromeda', 'orion']),
  size: _propTypes.default.oneOf(['tiny', 'regular', 'big', 'huge', 'giant']),
  wrapperProps: _propTypes.default.object
};
TextInputWithUnit.defaultProps = {
  unit: 'λ',
  unitWord: false,
  type: 'number',
  valid: false,
  error: false,
  center: false,
  size: 'regular',
  disabled: false,
  digits: null,
  variant: 'orion',
  wrapperProps: {}
};