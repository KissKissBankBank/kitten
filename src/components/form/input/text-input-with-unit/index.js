"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.TextInputWithUnit = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _textInput = require("../../../form/input/text-input");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _typographyConfig = _interopRequireDefault(require("../../../../constants/typography-config"));

var _typography = require("../../../../helpers/utils/typography");

var _classnames = _interopRequireDefault(require("classnames"));

var _excluded = ["unit", "unitWord", "size", "digits", "className", "valid", "error", "disabled", "wrapperProps"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var StyledTextInputWithUnit = _styledComponents.default.div.withConfig({
  displayName: "text-input-with-unit__StyledTextInputWithUnit",
  componentId: "sc-1ci0duj-0"
})(["position:relative;width:1%;&:not(.k-Form-TextInputWithUnit--hasDigits){width:100%;}.k-Form-TextInputWithUnit__input{border-radius:var(--border-radius-s);padding-right:", ";&[type='number']{appearance:textfield;&::-webkit-inner-spin-button,&::-webkit-outer-spin-button{margin:0;appearance:none;}}}.k-Form-TextInputWithUnit__unit{display:flex;z-index:1;position:absolute;right:", ";top:", ";bottom:", ";min-width:", ";align-items:center;justify-content:center;border-radius:0;box-sizing:border-box;color:var(--color-grey-900);white-space:nowrap;transition:all 0.2s;font-size:", ";", ";background-color:var(--color-grey-000);&.k-Form-TextInputWithUnit__unit--disabled{color:var(--color-grey-700);background-color:var(--color-grey-200);}&.k-Form-TextInputWithUnit__unit--tiny{padding:0 ", ";}&.k-Form-TextInputWithUnit__unit--regular{padding:0 ", ";}&.k-Form-TextInputWithUnit__unit--big,&.k-Form-TextInputWithUnit__unit--huge{padding:0 ", ";}&.k-Form-TextInputWithUnit__unit--giant{padding:0 ", ";}&.k-Form-TextInputWithUnit__unit--hasUnitWord{font-size:", ";}}&:focus-within{.k-Form-TextInputWithUnit__unit{border-color:var(--color-grey-500);color:var(--color-grey-900);}}"], (0, _typography.pxToRem)(42), (0, _typography.pxToRem)(3), (0, _typography.pxToRem)(3), (0, _typography.pxToRem)(3), (0, _typography.pxToRem)(40), (0, _typography.stepToRem)(0), _typographyConfig.default.fontStyles.regular, (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(12), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(25), (0, _typography.stepToRem)(-1));

var TextInputWithUnit = function TextInputWithUnit(_ref) {
  var unit = _ref.unit,
      unitWord = _ref.unitWord,
      size = _ref.size,
      digits = _ref.digits,
      className = _ref.className,
      valid = _ref.valid,
      error = _ref.error,
      disabled = _ref.disabled,
      wrapperProps = _ref.wrapperProps,
      others = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  var input = (0, _react.useRef)(null);
  return /*#__PURE__*/_react.default.createElement(StyledTextInputWithUnit, (0, _extends2.default)({}, wrapperProps, {
    className: (0, _classnames.default)('k-Form-TextInputWithUnit', wrapperProps.className, {
      'k-Form-TextInputWithUnit--hasDigits': !!digits
    })
  }), /*#__PURE__*/_react.default.createElement(_textInput.TextInput, (0, _extends2.default)({
    ref: input
  }, others, {
    valid: valid,
    error: error,
    disabled: disabled,
    size: size,
    className: (0, _classnames.default)('k-Form-TextInputWithUnit__input', className)
  })), /*#__PURE__*/_react.default.createElement("span", {
    className: (0, _classnames.default)('k-Form-TextInputWithUnit__unit', "k-Form-TextInputWithUnit__unit--" + size, {
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
  wrapperProps: {}
};