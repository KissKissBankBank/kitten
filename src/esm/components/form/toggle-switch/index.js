import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import COLORS from '../../../constants/colors-config';
import TYPOGRAPHY from '../../../constants/typography-config';
import { pxToRem, stepToRem } from '../../../helpers/utils/typography';
import { LockIcon } from '../../../components/icons/lock-icon';
var transitionDuration = '.15s';
var switchWidth = 60;
var switchHeight = 30;
var borderSize = 2;
var borderRadius = 18;
var StyledSwitchContainer = styled.div.withConfig({
  displayName: "toggle-switch__StyledSwitchContainer",
  componentId: "ski4b0-0"
})(["display:inline-flex;align-items:center;cursor:pointer;", " ", ""], function (_ref) {
  var isDisabled = _ref.isDisabled;
  return isDisabled && css(["cursor:not-allowed;"]);
}, function (_ref2) {
  var reverseOrder = _ref2.reverseOrder;
  return reverseOrder && css(["flex-direction:row-reverse;& ", "{padding-right:", ";padding-left:0;}"], StyledLabel, pxToRem(10));
});
var StyledSwitch = styled.button.withConfig({
  displayName: "toggle-switch__StyledSwitch",
  componentId: "ski4b0-1"
})(["display:inline-block;position:relative;box-sizing:border-box;width:", ";height:", ";color:", ";background-color:currentColor;border:", " solid ", ";border-radius:", ";transition:color ", " ease,border-color ", " ease,background-color ", " ease;cursor:pointer;&:focus{border-color:", ";outline:", " solid ", ";outline-offset:", ";.k-ToggleSwitch__circle{border-color:", ";}}.k-ToggleSwitch__circle{position:absolute;box-sizing:border-box;display:inline-flex;align-items:center;justify-content:center;left:-", ";top:-", ";width:", ";height:", ";content:'';background-color:", ";border:", " solid ", ";border-radius:", ";transition:left ", " ease,color ", " ease,border-color ", " ease,background-color ", " ease;}&[aria-pressed='true']{color:", ";border-color:currentColor;.k-ToggleSwitch__circle{left:", ";border-color:currentColor;}}&:active{color:", ";&,.k-ToggleSwitch__circle{border-color:", ";}}&[disabled]{cursor:not-allowed;", " .k-ToggleSwitch__circle{pointer-events:none;}}"], pxToRem(switchWidth), pxToRem(switchHeight), function (_ref3) {
  var defaultColor = _ref3.defaultColor;
  return defaultColor;
}, pxToRem(borderSize), COLORS.line2, pxToRem(borderRadius), transitionDuration, transitionDuration, transitionDuration, COLORS.primary1, COLORS.primary4, pxToRem(2), pxToRem(2), COLORS.primary1, pxToRem(borderSize), pxToRem(borderSize), pxToRem(switchHeight), pxToRem(switchHeight), COLORS.background1, pxToRem(borderSize), COLORS.line2, pxToRem(switchHeight), transitionDuration, transitionDuration, transitionDuration, transitionDuration, function (_ref4) {
  var checkedColor = _ref4.checkedColor;
  return checkedColor;
}, pxToRem(switchWidth - switchHeight - borderSize), function (_ref5) {
  var activeColor = _ref5.activeColor;
  return activeColor;
}, function (_ref6) {
  var activeColor = _ref6.activeColor;
  return activeColor;
}, function (_ref7) {
  var locked = _ref7.locked;
  return !locked && css(["color:", ";border-color:currentColor;"], function (_ref8) {
    var disabledColor = _ref8.disabledColor;
    return disabledColor;
  });
});
var StyledLabel = styled.label.withConfig({
  displayName: "toggle-switch__StyledLabel",
  componentId: "ski4b0-2"
})(["padding-left:", ";", " font-size:", ";line-height:", ";color:", ";transition:color ", " ease;cursor:pointer;::selection{background:transparent;}::-moz-selection{background:transparent;}", ":hover &{color:", ";}", ":active &{color:", ";}", " button[disabled] + &{color:", ";cursor:not-allowed;}"], pxToRem(10), TYPOGRAPHY.fontStyles.light, function (_ref9) {
  var big = _ref9.big;
  return stepToRem(big ? 3 : 0);
}, pxToRem(switchHeight), COLORS.font1, transitionDuration, StyledSwitchContainer, COLORS.primary1, StyledSwitchContainer, COLORS.primary3, StyledSwitchContainer, function (_ref10) {
  var disabledColor = _ref10.disabledColor;
  return disabledColor;
});
export var ToggleSwitch = function ToggleSwitch(_ref11) {
  var activeColor = _ref11.activeColor,
      big = _ref11.big,
      checkedColor = _ref11.checkedColor,
      defaultColor = _ref11.defaultColor,
      disabled = _ref11.disabled,
      disabledColor = _ref11.disabledColor,
      id = _ref11.id,
      isChecked = _ref11.isChecked,
      isLabelVisible = _ref11.isLabelVisible,
      label = _ref11.label,
      labelProps = _ref11.labelProps,
      locked = _ref11.locked,
      reverseOrder = _ref11.reverseOrder,
      switchProps = _ref11.switchProps,
      others = _objectWithoutProperties(_ref11, ["activeColor", "big", "checkedColor", "defaultColor", "disabled", "disabledColor", "id", "isChecked", "isLabelVisible", "label", "labelProps", "locked", "reverseOrder", "switchProps"]);

  var _useState = useState(isChecked),
      _useState2 = _slicedToArray(_useState, 2),
      isPressed = _useState2[0],
      setPressedState = _useState2[1];

  return /*#__PURE__*/React.createElement(StyledSwitchContainer, _extends({
    isDisabled: disabled || locked,
    reverseOrder: reverseOrder
  }, others), /*#__PURE__*/React.createElement(StyledSwitch, _extends({
    onClick: function onClick() {
      return setPressedState(!isPressed);
    },
    type: "button",
    id: id,
    disabled: disabled || locked,
    "aria-pressed": isPressed,
    "aria-label": isLabelVisible ? null : label,
    checkedColor: checkedColor,
    defaultColor: defaultColor,
    disabledColor: disabledColor,
    activeColor: activeColor,
    locked: locked
  }, switchProps), /*#__PURE__*/React.createElement("div", {
    className: "k-ToggleSwitch__circle",
    "aria-hidden": "true"
  }, locked && /*#__PURE__*/React.createElement(LockIcon, {
    width: "12",
    color: COLORS.font1
  }))), isLabelVisible && /*#__PURE__*/React.createElement(StyledLabel, _extends({
    for: id,
    disabledColor: disabledColor,
    big: big
  }, labelProps), label));
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
  reverseOrder: false
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
  reverseOrder: PropTypes.bool
};