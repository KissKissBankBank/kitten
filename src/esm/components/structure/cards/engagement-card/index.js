import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Text } from '../../../typography/text';
import { pxToRem } from '../../../../helpers/utils/typography';
import COLORS from '../../../../constants/colors-config';
import { ScreenConfig } from '../../../../constants/screen-config';
const StyledCard = styled.div.withConfig({
  displayName: "engagement-card__StyledCard",
  componentId: "sc-17ls2z8-0"
})(["box-sizing:border-box;display:flex;flex-direction:column;border-radius:var(--border-radius-xl);position:relative;overflow:hidden;background-repeat:no-repeat;background-color:", ";background-size:contain;padding:", ";text-decoration:none;border-color:", ";:focus-visible{outline:auto;}@media (min-width:", "){padding:", ";}"], _ref => {
  let {
    backgroundColor
  } = _ref;
  return backgroundColor;
}, pxToRem(5), COLORS.background1, pxToRem(ScreenConfig.S.min), pxToRem(10));
const StyledText = styled(Text).withConfig({
  displayName: "engagement-card__StyledText",
  componentId: "sc-17ls2z8-1"
})(["text-align:center;right:", ";left:", ";line-height:1.2;"], pxToRem(10), pxToRem(10));
const StyledIcon = styled.div.withConfig({
  displayName: "engagement-card__StyledIcon",
  componentId: "sc-17ls2z8-2"
})(["display:flex;align-self:center;align-items:center;height:100%;"]);
export const EngagementCard = _ref2 => {
  let {
    icon,
    backgroundColor,
    href,
    children,
    as,
    ...others
  } = _ref2;
  return /*#__PURE__*/React.createElement(StyledCard, _extends({}, others, {
    as: href ? 'a' : 'div',
    href: href,
    backgroundColor: backgroundColor
  }), /*#__PURE__*/React.createElement(StyledIcon, null, icon), /*#__PURE__*/React.createElement(StyledText, {
    size: "micro",
    weight: "500",
    color: "font1"
  }, children));
};
EngagementCard.propTypes = {
  icon: PropTypes.element.isRequired,
  href: PropTypes.string,
  backgroundColor: PropTypes.string
};
EngagementCard.defaultProps = {
  href: '',
  backgroundColor: ''
};