import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import { ButtonIcon } from '../../../buttons/button-icon';
import { PhoneIcon } from '../../../icons/phone-icon';
import COLORS from '../../../../constants/colors-config';
import styled from 'styled-components';
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography';
var StyledTeamCardButtonWithTooltip = styled.a.withConfig({
  displayName: "button-with-tooltip__StyledTeamCardButtonWithTooltip",
  componentId: "kafbae-0"
})(["position:relative;display:inline-block;&[href]:focus{outline:", " solid ", ";outline-offset:", ";}.k-TeamCardButtonWithTooltip__tooltip{position:absolute;top:", ";padding:", ";margin-left:", ";font-size:", ";line-height:normal;font-weight:regular;color:", ";white-space:nowrap;opacity:0;visibility:hidden;transition:opacity 0.2s,visibility 0.2s;background-color:", ";border:", " solid ", ";}&:hover .k-TeamCardButtonWithTooltip__tooltip,&:focus .k-TeamCardButtonWithTooltip__tooltip{visibility:visible;opacity:1;}.k-TeamCardButtonWithTooltip__tooltipArrow{position:absolute;left:50%;bottom:102%;height:0;width:0;margin-left:", ";border-width:", ";border-top-color:transparent;border-left-color:transparent;border-right-color:transparent;border-bottom-color:", ";border-style:solid;pointer-events:none;}"], COLORS.primary4, pxToRem(2), pxToRem(2), pxToRem(55), pxToRem(15), pxToRem(-50), stepToRem(-1), COLORS.background1, function (_ref) {
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
      props = _objectWithoutProperties(_ref4, ["phoneNumber", "tooltipColor"]);

  return /*#__PURE__*/React.createElement(StyledTeamCardButtonWithTooltip, _extends({
    href: "tel:".concat(phoneNumber),
    tooltipColor: tooltipColor
  }, props), /*#__PURE__*/React.createElement("span", {
    className: "k-TeamCardButtonWithTooltip__tooltip"
  }, phoneNumber, /*#__PURE__*/React.createElement("span", {
    className: "k-TeamCardButtonWithTooltip__tooltipArrow"
  })), /*#__PURE__*/React.createElement(ButtonIcon, {
    modifier: "hydrogen",
    className: "k-ButtonIcon--phone",
    tag: "span"
  }, /*#__PURE__*/React.createElement(PhoneIcon, {
    className: "k-ButtonIcon__svg"
  })));
};
TeamCardButtonWithTooltip.propTypes = {
  phoneNumber: PropTypes.string.isRequired
};