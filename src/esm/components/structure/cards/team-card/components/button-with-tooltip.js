import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["phoneNumber", "tooltipColor"];
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../../../action/button';
import { PhoneIcon } from '../../../../graphics/icons/phone-icon';
import styled from 'styled-components';
import { pxToRem, stepToRem } from '../../../../../helpers/utils/typography';
var StyledTeamCardButtonWithTooltip = styled.a.withConfig({
  displayName: "button-with-tooltip__StyledTeamCardButtonWithTooltip",
  componentId: "sc-zeirji-0"
})(["position:relative;display:inline-block;.k-TeamCardButtonWithTooltip__tooltip{position:absolute;top:", ";padding:", ";margin-left:", ";font-size:", ";line-height:normal;font-weight:500;color:var(--color-grey-000);white-space:nowrap;opacity:0;visibility:hidden;transition:opacity 0.2s,visibility 0.2s;background-color:", ";border:", " solid ", ";}&:hover .k-TeamCardButtonWithTooltip__tooltip,&:focus .k-TeamCardButtonWithTooltip__tooltip{visibility:visible;opacity:1;}.k-TeamCardButtonWithTooltip__tooltipArrow{position:absolute;left:50%;bottom:102%;height:0;width:0;margin-left:", ";border-width:", ";border-top-color:transparent;border-left-color:transparent;border-right-color:transparent;border-bottom-color:", ";border-style:solid;pointer-events:none;}"], pxToRem(55), pxToRem(15), pxToRem(-50), stepToRem(-1), function (_ref) {
  var tooltipColor = _ref.tooltipColor;
  return tooltipColor;
}, pxToRem(2), function (_ref2) {
  var tooltipColor = _ref2.tooltipColor;
  return tooltipColor;
}, pxToRem(-8), pxToRem(10), function (_ref3) {
  var tooltipColor = _ref3.tooltipColor;
  return tooltipColor;
});
export var TeamCardButtonWithTooltip = function TeamCardButtonWithTooltip(_ref4) {
  var phoneNumber = _ref4.phoneNumber,
      tooltipColor = _ref4.tooltipColor,
      props = _objectWithoutPropertiesLoose(_ref4, _excluded);

  return /*#__PURE__*/React.createElement(StyledTeamCardButtonWithTooltip, _extends({
    href: "tel:" + phoneNumber,
    tooltipColor: tooltipColor
  }, props), /*#__PURE__*/React.createElement("span", {
    className: "k-TeamCardButtonWithTooltip__tooltip"
  }, phoneNumber, /*#__PURE__*/React.createElement("span", {
    className: "k-TeamCardButtonWithTooltip__tooltipArrow"
  })), /*#__PURE__*/React.createElement(Button, {
    fit: "icon",
    size: "small",
    modifier: "hydrogen",
    tag: "span",
    "aria-label": phoneNumber
  }, /*#__PURE__*/React.createElement(PhoneIcon, null)));
};
TeamCardButtonWithTooltip.propTypes = {
  phoneNumber: PropTypes.string.isRequired
};