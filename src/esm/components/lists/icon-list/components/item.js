import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { pxToRem } from '../../../../helpers/utils/typography';
import TYPOGRAPHY from '../../../../constants/typography-config';
import COLORS from '../../../../constants/colors-config';
import { ScreenConfig } from '../../../../constants/screen-config';
import { Icon } from './icon';
export var Item = function Item(_ref) {
  var icon = _ref.icon,
      iconProps = _ref.iconProps,
      children = _ref.children,
      others = _objectWithoutProperties(_ref, ["icon", "iconProps", "children"]);

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
var StyledItem = styled.li.withConfig({
  displayName: "item__StyledItem",
  componentId: "oehw93-0"
})(["display:flex;margin:", " 0;"], pxToRem(40));
var StyledContent = styled.div.withConfig({
  displayName: "item__StyledContent",
  componentId: "oehw93-1"
})(["display:flex;flex-direction:column;justify-content:center;flex:1;", ";color:", ";line-height:1.6;font-size:", ";@media (min-width:", "px){font-size:", ";}"], TYPOGRAPHY.fontStyles.light, COLORS.font1, pxToRem(14), ScreenConfig.S.min, pxToRem(16));