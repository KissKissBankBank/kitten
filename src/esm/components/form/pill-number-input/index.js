import _extends from "@babel/runtime/helpers/extends";
import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';
import COLORS from '../../../constants/colors-config';
import { pxToRem, stepToRem } from '../../../helpers/utils/typography';
import TYPOGRAPHY from '../../../constants/typography-config';
import { nativeInputValueSetter } from '../../../helpers/dom/native-input-value-setter';
import { createEvent } from '../../../helpers/dom/create-event';
const StyledPillNumberInput = styled.div.withConfig({
  displayName: "pill-number-input__StyledPillNumberInput",
  componentId: "sc-ujaaef-0"
})(["display:inline-flex;align-items:center;justify-content:stretch;height:", ";width:", ";padding:0 ", ";border:var(--border);border-radius:var(--border-radius-rounded);transition:border-color 0.2s ease;&:hover{border-color:var(--color-grey-500);}&,& *{box-sizing:border-box;}.k-PillNumberInput__input{flex:1 1 auto;appearance:none;appearance:textfield;border:0;min-width:0;", " font-size:", ";text-align:center;&:disabled{background-color:", ";color:", ";}}.k-PillNumberInput__minusButton,.k-PillNumberInput__plusButton{flex:0 0 auto;padding:0 ", ";border:none;background:none;display:flex;align-items:center;justify-content:center;height:100%;cursor:pointer;svg{transition:fill 0.2s ease;}&:hover svg{fill:", ";}&:active svg{fill:", ";}&:disabled svg{fill:", ";}}&.k-PillNumberInput--disableInput .k-PillNumberInput__input:disabled{background-color:", ";color:", ";}"], pxToRem(40), pxToRem(85), pxToRem(10), TYPOGRAPHY.fontStyles['500'], stepToRem(-1), COLORS.background1, COLORS.font2, pxToRem(5), COLORS.primary1, COLORS.primary2, COLORS.line2, COLORS.background1, COLORS.font1);
export const PillNumberInput = _ref => {
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
  const inputRef = useRef(null);
  const [currentValue, setCurrentValue] = useState(value);
  const changeEvent = createEvent('change');

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

  useEffect(() => {
    nativeInputValueSetter && nativeInputValueSetter.call(inputRef.current, currentValue);
    inputRef.current.dispatchEvent(changeEvent);
  }, [currentValue]);
  return /*#__PURE__*/React.createElement(StyledPillNumberInput, _extends({
    className: classNames('k-PillNumberInput', className, {
      'k-PillNumberInput--disableInput': disableInput
    })
  }, props), /*#__PURE__*/React.createElement("button", _extends({
    "data-button": "minus",
    disabled: disabled || currentValue === min,
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
    role: "spinbutton",
    disabled: disabled || disableInput
  }, inputProps, {
    className: classNames('k-PillNumberInput__input', inputProps.className)
  })), /*#__PURE__*/React.createElement("button", _extends({
    "data-button": "plus",
    disabled: disabled || currentValue === max,
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
  plusButtonProps: PropTypes.object,
  disableInput: PropTypes.bool,
  disabled: PropTypes.bool
};