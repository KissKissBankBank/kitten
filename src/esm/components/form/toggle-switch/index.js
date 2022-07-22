import _extends from "@babel/runtime/helpers/extends";
import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import COLORS from '../../../constants/colors-config';
import TYPOGRAPHY from '../../../constants/typography-config';
import { pxToRem, stepToRem } from '../../../helpers/utils/typography';
import { LockIcon } from '../../graphics/icons/lock-icon';
const SwitchWrapper = styled.div.withConfig({
  displayName: "toggle-switch__SwitchWrapper",
  componentId: "sc-ski4b0-0"
})(["--toggleSwitch-width:", ";--toggleSwitch-height:", ";--toggleSwitch-border:var(--border-width);--toggleSwitch-borderRadius:var(--border-radius-rounded);--toggleSwitch-duration:0.15s;display:inline-flex;align-items:center;cursor:pointer;gap:", ";.k-ToggleSwitch--disabled{cursor:not-allowed;}.k-ToggleSwitch--reverseOrder{flex-direction:row-reverse;}.k-ToggleSwitch--locked .k-ToggleSwitch__button{color:var(--toggleSwitch-disabledColor);border-color:currentColor;}.k-ToggleSwitch__button{display:inline-block;position:relative;box-sizing:border-box;width:var(--toggleSwitch-width);height:var(--toggleSwitch-height);color:var(--toggleSwitch-defaultColor);background-color:currentColor;border:var(--toggleSwitch-border) solid ", ";border-radius:var(--toggleSwitch-borderRadius);transition:color var(--toggleSwitch-duration) ease,border-color var(--toggleSwitch-duration) ease,background-color var(--toggleSwitch-duration) ease;cursor:pointer;&:focus{border-color:", ";.k-ToggleSwitch__circle{border-color:", ";}}.k-ToggleSwitch__circle{position:absolute;box-sizing:border-box;display:inline-flex;align-items:center;justify-content:center;left:calc(-1 * var(--toggleSwitch-border));top:calc(-1 * var(--toggleSwitch-border));width:var(--toggleSwitch-height);height:var(--toggleSwitch-height);background-color:", ";border:var(--toggleSwitch-border) solid ", ";border-radius:var(--border-radius-rounded);transition:left var(--toggleSwitch-duration) ease,color var(--toggleSwitch-duration) ease,border-color var(--toggleSwitch-duration) ease,background-color var(--toggleSwitch-duration) ease;}&[aria-pressed='true']{color:var(--toggleSwitch-checkedColor);border-color:currentColor;.k-ToggleSwitch__circle{left:calc( var(--toggleSwitch-width) - var(--toggleSwitch-height) - var(--toggleSwitch-border) );border-color:currentColor;}}&:active{color:var(--toggleSwitch-activeColor);&,.k-ToggleSwitch__circle{border-color:var(--toggleSwitch-activeColor);}}&[disabled]{cursor:not-allowed;.k-ToggleSwitch__circle{pointer-events:none;}}}.k-ToggleSwitch__label{padding-left:", ";", " font-size:", ";color:", ";transition:color var(--toggleSwitch-duration) ease;cursor:pointer;::selection{background:transparent;}::-moz-selection{background:transparent;}}&:hover .k-ToggleSwitch__label{color:", ";}&:active .k-ToggleSwitch__label{color:", ";}& button[disabled] + .k-ToggleSwitch__label{color:var(--toggleSwitch-disabledColor);cursor:not-allowed;}"], pxToRem(60), pxToRem(30), pxToRem(10), COLORS.line2, COLORS.primary1, COLORS.primary1, COLORS.background1, COLORS.line2, pxToRem(10), TYPOGRAPHY.fontStyles['400'], stepToRem(0), COLORS.font1, COLORS.primary1, COLORS.primary3);
export const ToggleSwitch = _ref => {
  let {
    activeColor,
    checkedColor,
    defaultColor,
    disabled,
    disabledColor,
    id,
    isChecked,
    isLabelVisible,
    label,
    labelProps,
    locked,
    reverseOrder,
    switchProps,
    onChange,
    style,
    ...others
  } = _ref;
  const [isPressed, setPressedState] = useState(isChecked);

  const handleClick = () => {
    onChange && onChange(!isPressed);
    setPressedState(current => !current);
  };

  return /*#__PURE__*/React.createElement(SwitchWrapper, _extends({
    className: classNames('k-ToggleSwitch', {
      'k-ToggleSwitch--disabled': disabled || locked,
      'k-ToggleSwitch--reverseOrder': reverseOrder,
      'k-ToggleSwitch--locked': locked
    }),
    style: {
      '--toggleSwitch-activeColor': activeColor,
      '--toggleSwitch-checkedColor': checkedColor,
      '--toggleSwitch-defaultColor': defaultColor,
      '--toggleSwitch-disabledColor': disabledColor,
      ...style
    }
  }, others), /*#__PURE__*/React.createElement("button", _extends({
    className: classNames('k-ToggleSwitch__button'),
    type: "button",
    disabled: disabled || locked,
    "aria-pressed": isPressed,
    "aria-label": isLabelVisible ? null : label,
    "aria-labelledby": isLabelVisible ? id + "_label" : null,
    id: id,
    onClick: handleClick
  }, switchProps), /*#__PURE__*/React.createElement("span", {
    className: "k-ToggleSwitch__circle",
    "aria-hidden": "true"
  }, locked && /*#__PURE__*/React.createElement(LockIcon, {
    width: "12",
    color: COLORS.font1
  }))), isLabelVisible && /*#__PURE__*/React.createElement("label", _extends({
    className: classNames('k-ToggleSwitch__label')
  }, labelProps, {
    htmlFor: id,
    id: id + "_label"
  }), label));
};
ToggleSwitch.defaultProps = {
  activeColor: COLORS.primary3,
  checkedColor: COLORS.primary1,
  defaultColor: COLORS.line1,
  disabled: false,
  disabledColor: COLORS.line2,
  isChecked: false,
  isLabelVisible: true,
  label: 'switch',
  locked: false,
  reverseOrder: false,
  onChange: () => {}
};
ToggleSwitch.propTypes = {
  activeColor: PropTypes.string,
  checkedColor: PropTypes.string,
  defaultColor: PropTypes.string,
  disabled: PropTypes.bool,
  disabledColor: PropTypes.string,
  id: PropTypes.string.isRequired,
  isChecked: PropTypes.bool,
  isLabelVisible: PropTypes.bool,
  label: PropTypes.string,
  locked: PropTypes.bool,
  reverseOrder: PropTypes.bool,
  onChange: PropTypes.func
};