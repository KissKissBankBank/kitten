"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PillNumberInput = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typography = require("../../../helpers/utils/typography");

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var StyledPillNumberInput = _styledComponents.default.div.withConfig({
  displayName: "pill-number-input__StyledPillNumberInput",
  componentId: "ujaaef-0"
})(["display:inline-flex;align-items:center;justify-content:stretch;height:", ";width:", ";padding:0 ", ";border:2px solid ", ";border-radius:", ";transition:border-color .2s ease;&:focus-within,&:hover{border-color:", ";}&,& *{box-sizing:border-box;}.k-PillNumberInput__input{flex:1 1 auto;appearance:none;appearance:textfield;border:0;min-width:0;", " font-size:", ";text-align:center;&:focus{outline:none;}}.k-PillNumberInput__minusButton,.k-PillNumberInput__plusButton{flex:0 0 auto;padding:0 ", ";border:none;background:none;display:flex;align-items:center;justify-content:center;height:100%;cursor:pointer;svg{transition:fill .2s ease;}&:hover svg{fill:", ";}&:active svg{fill:", ";}&:disabled svg{fill:", ";}}"], (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(85), (0, _typography.pxToRem)(10), _colorsConfig.default.line1, (0, _typography.pxToRem)(20), _colorsConfig.default.line2, _typographyConfig.default.fontStyles.regular, (0, _typography.stepToRem)(-1), (0, _typography.pxToRem)(5), _colorsConfig.default.primary1, _colorsConfig.default.primary2, _colorsConfig.default.line2);

var nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;

var PillNumberInput = function PillNumberInput(_ref) {
  var _ref$onChange = _ref.onChange,
      onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? 1 : _ref$value,
      _ref$step = _ref.step,
      step = _ref$step === void 0 ? 1 : _ref$step,
      _ref$min = _ref.min,
      min = _ref$min === void 0 ? 0 : _ref$min,
      _ref$max = _ref.max,
      max = _ref$max === void 0 ? 99 : _ref$max,
      _ref$inputProps = _ref.inputProps,
      inputProps = _ref$inputProps === void 0 ? {} : _ref$inputProps,
      _ref$minusButtonProps = _ref.minusButtonProps,
      minusButtonProps = _ref$minusButtonProps === void 0 ? {} : _ref$minusButtonProps,
      _ref$plusButtonProps = _ref.plusButtonProps,
      plusButtonProps = _ref$plusButtonProps === void 0 ? {} : _ref$plusButtonProps,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? null : _ref$className,
      props = (0, _objectWithoutProperties2.default)(_ref, ["onChange", "value", "step", "min", "max", "inputProps", "minusButtonProps", "plusButtonProps", "className"]);
  var inputRef = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(value),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      currentValue = _useState2[0],
      setCurrentValue = _useState2[1];

  var changeEvent = new Event('change', {
    bubbles: true
  });

  var handleKeyDown = function handleKeyDown(keyDownEvent) {
    if (keyDownEvent.key === 'ArrowUp' && inputRef.current.value < max) {
      plusOne();
    }

    if (keyDownEvent.key === 'ArrowDown' && inputRef.current.value > min) {
      minusOne();
    }
  };

  var plusOne = function plusOne() {
    return setResult(parseInt(inputRef.current.value, 10) + step);
  };

  var minusOne = function minusOne() {
    return setResult(parseInt(inputRef.current.value, 10) - step);
  };

  var setResult = function setResult(result) {
    if (result !== NaN) {
      setCurrentValue(result);
    } else {
      setCurrentValue(value);
    }
  };

  var handleChange = function handleChange(changeEvent) {
    var inputValue = changeEvent.target.value;

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

  (0, _react.useEffect)(function () {
    nativeInputValueSetter.call(inputRef.current, currentValue);
    inputRef.current.dispatchEvent(changeEvent);
  }, [currentValue]);
  return /*#__PURE__*/_react.default.createElement(StyledPillNumberInput, (0, _extends2.default)({
    className: (0, _classnames.default)('k-PillNumberInput', className)
  }, props), /*#__PURE__*/_react.default.createElement("button", (0, _extends2.default)({
    "data-button": "minus",
    disabled: currentValue === min,
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
    role: "spinbutton"
  }, inputProps, {
    className: (0, _classnames.default)('k-PillNumberInput__input', inputProps.className)
  })), /*#__PURE__*/_react.default.createElement("button", (0, _extends2.default)({
    "data-button": "plus",
    disabled: currentValue === max,
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
  plusButtonProps: _propTypes.default.object
};