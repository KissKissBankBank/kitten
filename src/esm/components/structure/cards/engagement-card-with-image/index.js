import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Text } from '../../../typography/text';
import { pxToRem } from '../../../../helpers/utils/typography';
import { ScreenConfig } from '../../../../constants/screen-config';
const StyledContainer = styled.div.withConfig({
  displayName: "engagement-card-with-image__StyledContainer",
  componentId: "sc-4nkj3p-0"
})(["display:flex;flex-direction:column;text-decoration:none;:focus-visible{border-top-left-radius:var(--border-radius-xl);border-top-right-radius:var(--border-radius-xl);outline:auto;}"]);
const StyledCard = styled.div.withConfig({
  displayName: "engagement-card-with-image__StyledCard",
  componentId: "sc-4nkj3p-1"
})(["border-radius:var(--border-radius-xl);overflow:hidden;"]);
const StyledImage = styled.img.withConfig({
  displayName: "engagement-card-with-image__StyledImage",
  componentId: "sc-4nkj3p-2"
})(["height:", ";display:block;transition:transform 0.4s ease;object-fit:cover;width:100%;:hover,:focus{transform:scale(1.05);}"], _ref => {
  let {
    imageHeight
  } = _ref;
  return pxToRem(imageHeight);
});
const StyledText = styled(Text).withConfig({
  displayName: "engagement-card-with-image__StyledText",
  componentId: "sc-4nkj3p-3"
})(["margin-top:", ";text-align:center;@media (min-width:", "){margin-top:", ";}"], pxToRem(10), pxToRem(ScreenConfig.S.min), pxToRem(15));
export const EngagementCardWithImage = _ref2 => {
  let {
    backgroundImage,
    children,
    href,
    as,
    imageHeight,
    imgProps,
    textProps,
    ...others
  } = _ref2;
  return /*#__PURE__*/React.createElement(StyledContainer, _extends({}, others, {
    as: href ? 'a' : 'div',
    href: href
  }), /*#__PURE__*/React.createElement(StyledCard, null, /*#__PURE__*/React.createElement(StyledImage, _extends({
    src: backgroundImage,
    alt: "",
    imageHeight: imageHeight
  }, imgProps))), /*#__PURE__*/React.createElement(StyledText, _extends({
    size: "micro",
    weight: "500",
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