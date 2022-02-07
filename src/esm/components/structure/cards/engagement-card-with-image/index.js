import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["backgroundImage", "children", "href", "as", "imageHeight", "imgProps", "textProps"];
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Text } from '../../../typography/text';
import { pxToRem } from '../../../../helpers/utils/typography';
import { ScreenConfig } from '../../../../constants/screen-config';
var StyledContainer = styled.div.withConfig({
  displayName: "engagement-card-with-image__StyledContainer",
  componentId: "sc-4nkj3p-0"
})(["display:flex;flex-direction:column;text-decoration:none;:focus-visible{border-top-left-radius:var(--border-radius-xl);border-top-right-radius:var(--border-radius-xl);outline:auto;}"]);
var StyledCard = styled.div.withConfig({
  displayName: "engagement-card-with-image__StyledCard",
  componentId: "sc-4nkj3p-1"
})(["border-radius:var(--border-radius-xl);overflow:hidden;"]);
var StyledImage = styled.img.withConfig({
  displayName: "engagement-card-with-image__StyledImage",
  componentId: "sc-4nkj3p-2"
})(["height:", ";display:block;transition:transform 0.4s ease;object-fit:cover;width:100%;:hover,:focus{transform:scale(1.05);}"], function (_ref) {
  var imageHeight = _ref.imageHeight;
  return pxToRem(imageHeight);
});
var StyledText = styled(Text).withConfig({
  displayName: "engagement-card-with-image__StyledText",
  componentId: "sc-4nkj3p-3"
})(["margin-top:", ";text-align:center;@media (min-width:", "){margin-top:", ";}"], pxToRem(10), pxToRem(ScreenConfig.S.min), pxToRem(15));
export var EngagementCardWithImage = function EngagementCardWithImage(_ref2) {
  var backgroundImage = _ref2.backgroundImage,
      children = _ref2.children,
      href = _ref2.href,
      as = _ref2.as,
      imageHeight = _ref2.imageHeight,
      imgProps = _ref2.imgProps,
      textProps = _ref2.textProps,
      others = _objectWithoutPropertiesLoose(_ref2, _excluded);

  return /*#__PURE__*/React.createElement(StyledContainer, _extends({}, others, {
    as: href ? 'a' : 'div',
    href: href
  }), /*#__PURE__*/React.createElement(StyledCard, null, /*#__PURE__*/React.createElement(StyledImage, _extends({
    src: backgroundImage,
    alt: "",
    imageHeight: imageHeight
  }, imgProps))), /*#__PURE__*/React.createElement(StyledText, _extends({
    size: "micro",
    weight: "regular",
    color: "font1",
    decoration: "none",
    lineHeight: "normal"
  }, textProps), children));
};
EngagementCardWithImage.propTypes = {
  href: PropTypes.string,
  backgroundImage: PropTypes.string.isRequired,
  imageHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  imgProps: PropTypes.object,
  textProps: PropTypes.object
};
EngagementCardWithImage.defaultProps = {
  href: '',
  imageHeight: ''
};