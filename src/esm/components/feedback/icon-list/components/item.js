import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { pxToRem } from '../../../../helpers/utils/typography';
import TYPOGRAPHY from '../../../../constants/typography-config';
import COLORS from '../../../../constants/colors-config';
import { ScreenConfig } from '../../../../constants/screen-config';
import { Icon } from './icon';
export const Item = _ref => {
  let {
    icon,
    iconProps,
    children,
    ...others
  } = _ref;
  return /*#__PURE__*/React.createElement(StyledItem, others, /*#__PURE__*/React.createElement(Icon, iconProps, icon), /*#__PURE__*/React.createElement(StyledContent, null, children));
};
Item.propTypes = {
  icon: PropTypes.node,
  iconProps: PropTypes.object
};
Item.defaultProps = {
  icon: null,
  iconProps: {}
};
const StyledItem = styled.li.withConfig({
  displayName: "item__StyledItem",
  componentId: "sc-1drcg7-0"
})(["display:flex;margin:", " 0;"], pxToRem(40));
const StyledContent = styled.div.withConfig({
  displayName: "item__StyledContent",
  componentId: "sc-1drcg7-1"
})(["display:flex;flex-direction:column;justify-content:center;flex:1;", ";color:", ";line-height:1.6;font-size:", ";@media (min-width:", "px){font-size:", ";}"], TYPOGRAPHY.fontStyles['400'], COLORS.font1, pxToRem(14), ScreenConfig.S.min, pxToRem(16));