import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Text } from '../../../components/typography/text';
import { pxToRem } from '../../../helpers/utils/typography';
import COLORS from '../../../constants/colors-config';
import { ScreenConfig } from '../../../constants/screen-config';
var StyledCard = styled.div.withConfig({
  displayName: "engagement-card__StyledCard",
  componentId: "sc-1unf5bb-0"
})(["box-sizing:border-box;display:flex;flex-direction:column;border-radius:", ";position:relative;overflow:hidden;background-repeat:no-repeat;background-color:", ";background-size:contain;padding:", ";text-decoration:none;border-color:", ";@media (min-width:", "){padding:", ";}"], pxToRem(15), function (_ref) {
  var backgroundColor = _ref.backgroundColor;
  return backgroundColor;
}, pxToRem(5), COLORS.background1, pxToRem(ScreenConfig.S.min), pxToRem(10));
var StyledText = styled(Text).withConfig({
  displayName: "engagement-card__StyledText",
  componentId: "sc-1unf5bb-1"
})(["text-align:center;right:", ";left:", ";line-height:1.2;"], pxToRem(10), pxToRem(10));
var StyledIcon = styled.div.withConfig({
  displayName: "engagement-card__StyledIcon",
  componentId: "sc-1unf5bb-2"
})(["display:flex;align-self:center;align-items:center;height:100%;"]);
export var EngagementCard = function EngagementCard(_ref2) {
  var icon = _ref2.icon,
      backgroundColor = _ref2.backgroundColor,
      href = _ref2.href,
      children = _ref2.children,
      hoverBorder = _ref2.hoverBorder,
      isActive = _ref2.isActive,
      as = _ref2.as,
      others = _objectWithoutProperties(_ref2, ["icon", "backgroundColor", "href", "children", "hoverBorder", "isActive", "as"]);

  return /*#__PURE__*/React.createElement(StyledCard, _extends({}, others, {
    as: href ? 'a' : 'div',
    href: href,
    backgroundColor: backgroundColor,
    hoverBorder: hoverBorder,
    isActive: isActive
  }), /*#__PURE__*/React.createElement(StyledIcon, null, icon), /*#__PURE__*/React.createElement(StyledText, {
    size: "micro",
    weight: "regular",
    color: "font1"
  }, children));
};
EngagementCard.propTypes = {
  icon: PropTypes.element.isRequired,
  href: PropTypes.string,
  backgroundColor: PropTypes.string,
  hoverBorder: PropTypes.string,
  isActive: PropTypes.bool
};
EngagementCard.defaultProps = {
  href: '',
  backgroundColor: '',
  hoverBorder: '',
  isActive: false
};