"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.PillNumberInput = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typography = require("../../../helpers/utils/typography");

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _nativeInputValueSetter = require("../../../helpers/dom/native-input-value-setter");

var _createEvent = require("../../../helpers/dom/create-event");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const StyledPillNumberInput = _styledComponents.default.div.withConfig({
  displayName: "pill-number-input__StyledPillNumberInput",
  componentId: "sc-ujaaef-0"
})(["display:inline-flex;align-items:center;justify-content:stretch;height:", ";width:", ";padding:0 ", ";border:var(--border);border-radius:var(--border-radius-rounded);transition:border-color 0.2s ease;&:hover{border-color:var(--color-grey-500);}&,& *{box-sizing:border-box;}.k-PillNumberInput__input{flex:1 1 auto;appearance:none;appearance:textfield;border:0;min-width:0;", " font-size:", ";text-align:center;&:disabled{background-color:", ";color:", ";}}.k-PillNumberInput__minusButton,.k-PillNumberInput__plusButton{flex:0 0 auto;padding:0 ", ";border:none;background:none;display:flex;align-items:center;justify-content:center;height:100%;cursor:pointer;svg{transition:fill 0.2s ease;}&:hover svg{fill:", ";}&:active svg{fill:", ";}&:disabled svg{fill:", ";}}&.k-PillNumberInput--disableInput .k-PillNumberInput__input:disabled{background-color:", ";color:", ";}"], (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(85), (0, _typography.pxToRem)(10), _typographyConfig.default.fontStyles['500'], (0, _typography.stepToRem)(-1), _colorsConfig.default.background1, _colorsConfig.default.font2, (0, _typography.pxToRem)(5), _colorsConfig.default.primary1, _colorsConfig.default.primary2, _colorsConfig.default.line2, _colorsConfig.default.background1, _colorsConfig.default.font1);

const PillNumberInput = _ref => {
  let {
    onChange = () => {},
    value = 1,
    step = 1,
    min = 0,
    max = 99,
    inputProps = {},
    minusButtonProps = {},
    plusButtonProps = {},
    className = null,
    disableInput = false,
    disabled = false,
    ...props
  } = _ref;
  const inputRef = (0, _react.useRef)(null);
  const [currentValue, setCurrentValue] = (0, _react.useState)(value);
  const changeEvent = (0, _createEvent.createEvent)('change');

  const handleKeyDown = keyDownEvent => {
    if (keyDownEvent.key === 'ArrowUp' && inputRef.current.value < max) {
      plusOne();
    }

    if (keyDownEvent.key === 'ArrowDown' && inputRef.current.value > min) {
      minusOne();
    }
  };

  const plusOne = () => setResult(parseInt(inputRef.current.value, 10) + step);

  const minusOne = () => setResult(parseInt(inputRef.current.value, 10) - step);

  const setResult = result => {
    if (result !== NaN) {
      setCurrentValue(result);
    } else {
      setCurrentValue(value);
    }
  };

  const handleChange = changeEvent => {
    const inputValue = changeEvent.target.value;

    if (!inputValue) {
      changeEvent.target.value = 0;
    }

    if (parseInt(inputValue, 10) > max) {
      changeEvent.target.value = max;
    }

    if (parseInt(inputValue, 10) < min) {
      changeEvent.target.value = min;
    }

    if (isNaN(parseInt(inputValue, 10)) || /[^0-9]/.test(inputValue)) {
      changeEvent.target.value = value;
    }

    onChange(changeEvent);
  };

  (0, _react.useEffect)(() => {
    _nativeInputValueSetter.nativeInputValueSetter && _nativeInputValueSetter.nativeInputValueSetter.call(inputRef.current, currentValue);
    inputRef.current.dispatchEvent(changeEvent);
  }, [currentValue]);
  return /*#__PURE__*/_react.default.createElement(StyledPillNumberInput, (0, _extends2.default)({
    className: (0, _classnames.default)('k-PillNumberInput', className, {
      'k-PillNumberInput--disableInput': disableInput
    })
  }, props), /*#__PURE__*/_react.default.createElement("button", (0, _extends2.default)({
    "data-button": "minus",
    disabled: disabled || currentValue === min,
    onClick: minusOne,
    tabIndex: "-1",
    "aria-hidden": "true"
  }, minusButtonProps, {
    className: (0, _classnames.default)('k-PillNumberInput__minusButton', minusButtonProps.className)
  }), /*#__PURE__*/_react.default.createElement("svg", {
    width: "8",
    height: "2",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 8 2"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M0 0h8v2H0z"
  }))), /*#__PURE__*/_react.default.createElement("input", (0, _extends2.default)({
    ref: inputRef,
    onChange: handleChange,
    onKeyDown: handleKeyDown,
    type: "text",
    inputMode: "numeric",
    pattern: "[0-9]*",
    "aria-valuemin": min,
    "aria-valuemax": max,
    "aria-valuenow": currentValue,
    role: "spinbutton",
    disabled: disabled || disableInput
  }, inputProps, {
    className: (0, _classnames.default)('k-PillNumberInput__input', inputProps.className)
  })), /*#__PURE__*/_react.default.createElement("button", (0, _extends2.default)({
    "data-button": "plus",
    disabled: disabled || currentValue === max,
    onClick: plusOne,
    tabIndex: "-1",
    "aria-hidden": "true"
  }, plusButtonProps, {
    className: (0, _classnames.default)('k-PillNumberInput__plusButton', plusButtonProps.className)
  }), /*#__PURE__*/_react.default.createElement("svg", {
    width: "8",
    height: "8",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 8 8"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M0 3h8v2H0z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M3 0h2v8h-2z"
  }))));
};

exports.PillNumberInput = PillNumberInput;
PillNumberInput.propTypes = {
  onChange: _propTypes.default.func,
  value: _propTypes.default.number,
  min: _propTypes.default.number,
  max: _propTypes.default.number,
  step: _propTypes.default.number,
  inputProps: _propTypes.default.object,
  minusButtonProps: _propTypes.default.object,
  plusButtonProps: _propTypes.default.object,
  disableInput: _propTypes.default.bool,
  disabled: _propTypes.default.bool
};