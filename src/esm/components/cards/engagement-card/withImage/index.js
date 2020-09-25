import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Text } from '../../../../components/typography/text';
import { pxToRem } from '../../../../helpers/utils/typography';
import { ScreenConfig } from '../../../../constants/screen-config';
var StyledContainer = styled.div.withConfig({
  displayName: "withImage__StyledContainer",
  componentId: "sc-1jg09sq-0"
})(["display:flex;flex-direction:column;text-decoration:none;"]);
var StyledCard = styled.div.withConfig({
  displayName: "withImage__StyledCard",
  componentId: "sc-1jg09sq-1"
})(["border-radius:", ";overflow:hidden;"], pxToRem(15));
var StyledImage = styled.img.withConfig({
  displayName: "withImage__StyledImage",
  componentId: "sc-1jg09sq-2"
})(["height:", ";display:block;transition:transform 0.4s ease;object-fit:cover;width:100%;:hover,:focus{transform:scale(1.05);}"], function (_ref) {
  var imageHeight = _ref.imageHeight;
  return pxToRem(imageHeight);
});
var StyledText = styled(Text).withConfig({
  displayName: "withImage__StyledText",
  componentId: "sc-1jg09sq-3"
})(["margin-top:", ";text-align:center;@media (min-width:", "){margin-top:", ";}"], pxToRem(10), pxToRem(ScreenConfig.S.min), pxToRem(15));
export var EngagementCardWithImage = function EngagementCardWithImage(_ref2) {
  var backgroundImage = _ref2.backgroundImage,
      children = _ref2.children,
      isActive = _ref2.isActive,
      href = _ref2.href,
      as = _ref2.as,
      imageHeight = _ref2.imageHeight,
      others = _objectWithoutProperties(_ref2, ["backgroundImage", "children", "isActive", "href", "as", "imageHeight"]);

  return /*#__PURE__*/React.createElement(StyledContainer, _extends({}, others, {
    as: href ? 'a' : 'div',
    href: href,
    isActive: isActive
  }), /*#__PURE__*/React.createElement(StyledCard, null, /*#__PURE__*/React.createElement(StyledImage, {
    src: backgroundImage,
    alt: "",
    imageHeight: imageHeight
  })), /*#__PURE__*/React.createElement(StyledText, {
    size: "micro",
    weight: "regular",
    color: "font1",
    decoration: "none",
    lineHeight: "normal"
  }, children));
};
EngagementCardWithImage.propTypes = {
  href: PropTypes.string,
  backgroundImage: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  imageHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};
EngagementCardWithImage.defaultProps = {
  href: '',
  isActive: false,
  imageHeight: ''
};