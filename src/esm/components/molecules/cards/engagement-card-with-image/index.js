import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["backgroundImage", "children", "isActive", "href", "as", "imageHeight"];
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Text } from '../../../../components/atoms/typography/text';
import { pxToRem } from '../../../../helpers/utils/typography';
import { ScreenConfig } from '../../../../constants/screen-config';
var StyledContainer = styled.div.withConfig({
  displayName: "engagement-card-with-image__StyledContainer",
  componentId: "sc-1617mnj-0"
})(["display:flex;flex-direction:column;text-decoration:none;"]);
var StyledCard = styled.div.withConfig({
  displayName: "engagement-card-with-image__StyledCard",
  componentId: "sc-1617mnj-1"
})(["border-radius:", ";overflow:hidden;"], pxToRem(15));
var StyledImage = styled.img.withConfig({
  displayName: "engagement-card-with-image__StyledImage",
  componentId: "sc-1617mnj-2"
})(["height:", ";display:block;transition:transform 0.4s ease;object-fit:cover;width:100%;:hover,:focus{transform:scale(1.05);}"], function (_ref) {
  var imageHeight = _ref.imageHeight;
  return pxToRem(imageHeight);
});
var StyledText = styled(Text).withConfig({
  displayName: "engagement-card-with-image__StyledText",
  componentId: "sc-1617mnj-3"
})(["margin-top:", ";text-align:center;@media (min-width:", "){margin-top:", ";}"], pxToRem(10), pxToRem(ScreenConfig.S.min), pxToRem(15));
export var EngagementCardWithImage = function EngagementCardWithImage(_ref2) {
  var backgroundImage = _ref2.backgroundImage,
      children = _ref2.children,
      isActive = _ref2.isActive,
      href = _ref2.href,
      as = _ref2.as,
      imageHeight = _ref2.imageHeight,
      others = _objectWithoutProperties(_ref2, _excluded);

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