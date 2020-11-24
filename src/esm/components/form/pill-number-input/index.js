import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';
import COLORS from '../../../constants/colors-config';
import { pxToRem, stepToRem } from '../../../helpers/utils/typography';
import TYPOGRAPHY from '../../../constants/typography-config';
import domElementHelper from '../../../helpers/dom/element-helper';
var StyledPillNumberInput = styled.div.withConfig({
  displayName: "pill-number-input__StyledPillNumberInput",
  componentId: "ujaaef-0"
})(["display:inline-flex;align-items:center;justify-content:stretch;height:", ";width:", ";padding:0 ", ";border:2px solid ", ";border-radius:", ";transition:border-color .2s ease;&:focus-within,&:hover{border-color:", ";}&,& *{box-sizing:border-box;}.k-PillNumberInput__input{flex:1 1 auto;appearance:none;appearance:textfield;border:0;min-width:0;", " font-size:", ";text-align:center;&:focus{outline:none;}}.k-PillNumberInput__minusButton,.k-PillNumberInput__plusButton{flex:0 0 auto;padding:0 ", ";border:none;background:none;display:flex;align-items:center;justify-content:center;height:100%;cursor:pointer;svg{transition:fill .2s ease;}&:hover svg{fill:", ";}&:active svg{fill:", ";}&:disabled svg{fill:", ";}}"], pxToRem(40), pxToRem(85), pxToRem(10), COLORS.line1, pxToRem(20), COLORS.line2, TYPOGRAPHY.fontStyles.regular, stepToRem(-1), pxToRem(5), COLORS.primary1, COLORS.primary2, COLORS.line2);
var nativeInputValueSetter = domElementHelper.canUseDom() && Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
export var PillNumberInput = function PillNumberInput(_ref) {
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
      props = _objectWithoutProperties(_ref, ["onChange", "value", "step", "min", "max", "inputProps", "minusButtonProps", "plusButtonProps", "className"]);

  var inputRef = useRef(null);

  var _useState = useState(value),
      _useState2 = _slicedToArray(_useState, 2),
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

  useEffect(function () {
    nativeInputValueSetter && nativeInputValueSetter.call(inputRef.current, currentValue);
    inputRef.current.dispatchEvent(changeEvent);
  }, [currentValue]);
  return /*#__PURE__*/React.createElement(StyledPillNumberInput, _extends({
    className: classNames('k-PillNumberInput', className)
  }, props), /*#__PURE__*/React.createElement("button", _extends({
    "data-button": "minus",
    disabled: currentValue === min,
    onClick: minusOne,
    tabIndex: "-1",
    "aria-hidden": "true"
  }, minusButtonProps, {
    className: classNames('k-PillNumberInput__minusButton', minusButtonProps.className)
  }), /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "2",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 8 2"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 0h8v2H0z"
  }))), /*#__PURE__*/React.createElement("input", _extends({
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
    className: classNames('k-PillNumberInput__input', inputProps.className)
  })), /*#__PURE__*/React.createElement("button", _extends({
    "data-button": "plus",
    disabled: currentValue === max,
    onClick: plusOne,
    tabIndex: "-1",
    "aria-hidden": "true"
  }, plusButtonProps, {
    className: classNames('k-PillNumberInput__plusButton', plusButtonProps.className)
  }), /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "8",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 8 8"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 3h8v2H0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 0h2v8h-2z"
  }))));
};
PillNumberInput.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  inputProps: PropTypes.object,
  minusButtonProps: PropTypes.object,
  plusButtonProps: PropTypes.object
};