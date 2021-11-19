import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import COLORS from '../../../constants/colors-config';
import TYPOGRAPHY from '../../../constants/typography-config';
import { pxToRem, stepToRem } from '../../../helpers/utils/typography';
import { LockIcon } from '../../../components/graphics/icons/lock-icon';
var SwitchWrapper = styled.div.withConfig({
  displayName: "toggle-switch__SwitchWrapper",
  componentId: "ski4b0-0"
})(["--toggleSwitch-width:", ";--toggleSwitch-height:", ";--toggleSwitch-border:var(--border-width);--toggleSwitch-borderRadius:", ";--toggleSwitch-duration:0.15s;display:inline-flex;align-items:center;cursor:pointer;gap:", ";.k-ToggleSwitch--disabled{cursor:not-allowed;}.k-ToggleSwitch--reverseOrder{flex-direction:row-reverse;}.k-ToggleSwitch--locked .k-ToggleSwitch__button{color:var(--toggleSwitch-disabledColor);border-color:currentColor;}.k-ToggleSwitch__button{display:inline-block;position:relative;box-sizing:border-box;width:var(--toggleSwitch-width);height:var(--toggleSwitch-height);color:var(--toggleSwitch-defaultColor);background-color:currentColor;border:var(--toggleSwitch-border) solid ", ";border-radius:var(--toggleSwitch-borderRadius);transition:color var(--toggleSwitch-duration) ease,border-color var(--toggleSwitch-duration) ease,background-color var(--toggleSwitch-duration) ease;cursor:pointer;&:focus{border-color:", ";.k-ToggleSwitch__circle{border-color:", ";}}.k-ToggleSwitch__circle{position:absolute;box-sizing:border-box;display:inline-flex;align-items:center;justify-content:center;left:calc(-1 * var(--toggleSwitch-border));top:calc(-1 * var(--toggleSwitch-border));width:var(--toggleSwitch-height);height:var(--toggleSwitch-height);background-color:", ";border:var(--toggleSwitch-border) solid ", ";border-radius:var(--toggleSwitch-height);transition:left var(--toggleSwitch-duration) ease,color var(--toggleSwitch-duration) ease,border-color var(--toggleSwitch-duration) ease,background-color var(--toggleSwitch-duration) ease;}&[aria-pressed='true']{color:var(--toggleSwitch-checkedColor);border-color:currentColor;.k-ToggleSwitch__circle{left:calc(var(--toggleSwitch-width) - var(--toggleSwitch-height) - var(--toggleSwitch-border));border-color:currentColor;}}&:active{color:var(--toggleSwitch-activeColor);&,.k-ToggleSwitch__circle{border-color:var(--toggleSwitch-activeColor);}}&[disabled]{cursor:not-allowed;.k-ToggleSwitch__circle{pointer-events:none;}}}.k-ToggleSwitch__label{padding-left:", ";", " font-size:", ";color:", ";transition:color var(--toggleSwitch-duration) ease;cursor:pointer;::selection{background:transparent;}::-moz-selection{background:transparent;}}.k-ToggleSwitch--big .k-ToggleSwitch__label{font-size:", ";}&:hover .k-ToggleSwitch__label{color:", ";}&:active .k-ToggleSwitch__label{color:", ";}& button[disabled] + .k-ToggleSwitch__label{color:var(--toggleSwitch-disabledColor);cursor:not-allowed;}"], pxToRem(60), pxToRem(30), pxToRem(18), pxToRem(10), COLORS.line2, COLORS.primary1, COLORS.primary1, COLORS.background1, COLORS.line2, pxToRem(10), TYPOGRAPHY.fontStyles.light, stepToRem(0), COLORS.font1, stepToRem(3), COLORS.primary1, COLORS.primary3);
export var ToggleSwitch = function ToggleSwitch(_ref) {
  var activeColor = _ref.activeColor,
      big = _ref.big,
      checkedColor = _ref.checkedColor,
      defaultColor = _ref.defaultColor,
      disabled = _ref.disabled,
      disabledColor = _ref.disabledColor,
      id = _ref.id,
      isChecked = _ref.isChecked,
      isLabelVisible = _ref.isLabelVisible,
      label = _ref.label,
      labelProps = _ref.labelProps,
      locked = _ref.locked,
      reverseOrder = _ref.reverseOrder,
      switchProps = _ref.switchProps,
      onChange = _ref.onChange,
      style = _ref.style,
      others = _objectWithoutProperties(_ref, ["activeColor", "big", "checkedColor", "defaultColor", "disabled", "disabledColor", "id", "isChecked", "isLabelVisible", "label", "labelProps", "locked", "reverseOrder", "switchProps", "onChange", "style"]);

  var _useState = useState(isChecked),
      _useState2 = _slicedToArray(_useState, 2),
      isPressed = _useState2[0],
      setPressedState = _useState2[1];

  var handleClick = function handleClick() {
    onChange && onChange(!isPressed);
    setPressedState(function (current) {
      return !current;
    });
  };

  return /*#__PURE__*/React.createElement(SwitchWrapper, _extends({
    className: classNames('k-ToggleSwitch', {
      'k-ToggleSwitch--disabled': disabled || locked,
      'k-ToggleSwitch--reverseOrder': reverseOrder,
      'k-ToggleSwitch--locked': locked,
      'k-ToggleSwitch--big': big
    }),
    style: _extends({
      '--toggleSwitch-activeColor': activeColor,
      '--toggleSwitch-checkedColor': checkedColor,
      '--toggleSwitch-defaultColor': defaultColor,
      '--toggleSwitch-disabledColor': disabledColor
    }, style)
  }, others), /*#__PURE__*/React.createElement("button", _extends({
    className: classNames('k-ToggleSwitch__button'),
    type: "button",
    disabled: disabled || locked,
    "aria-pressed": isPressed
  }, switchProps, {
    "aria-label": isLabelVisible ? null : label,
    "aria-labelledby": isLabelVisible ? "".concat(id, "_label") : null,
    id: id,
    onClick: handleClick
  }), /*#__PURE__*/React.createElement("span", {
    className: "k-ToggleSwitch__circle",
    "aria-hidden": "true"
  }, locked && /*#__PURE__*/React.createElement(LockIcon, {
    width: "12",
    color: COLORS.font1
  }))), isLabelVisible && /*#__PURE__*/React.createElement("label", _extends({
    className: classNames('k-ToggleSwitch__label')
  }, labelProps, {
    htmlFor: id,
    id: "".concat(id, "_label")
  }), label));
};
ToggleSwitch.defaultProps = {
  activeColor: COLORS.primary3,
  big: false,
  checkedColor: COLORS.primary1,
  defaultColor: COLORS.line1,
  disabled: false,
  disabledColor: COLORS.line2,
  isChecked: false,
  isLabelVisible: true,
  label: 'switch',
  locked: false,
  reverseOrder: false,
  onChange: function onChange() {}
};
ToggleSwitch.propTypes = {
  activeColor: PropTypes.string,
  big: PropTypes.bool,
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