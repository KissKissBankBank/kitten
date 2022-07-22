import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import classNames from 'classnames';
import COLORS from '../../../../constants/colors-config';
import { pxToRem } from '../../../../helpers/utils/typography';
const animation = '1.6s ease-in-out 0s infinite';
const heartAnim = keyframes(["0%{transform:translateX(0);}20%,30%{transform:translateX(", ");}50%,100%{transform:translateX(0);}"], pxToRem(7));
const circleAnim = keyframes(["0%,5%{transform:rotate(0deg);}46%,100%{transform:rotate(360deg);}"]);
const StyledLoadingAnimation = styled.div.withConfig({
  displayName: "kisskiss-loading-animation__StyledLoadingAnimation",
  componentId: "sc-l474rs-0"
})([".k-KissKissLoadingAnimation__svg{overflow:visible;width:", ";height:", ";}.k-KissKissLoadingAnimation__path-heart{animation:", " ", ";backface-visibility:hidden;}.k-KissKissLoadingAnimation__path-circle{animation:", " ", ";transform-origin:", " ", ";backface-visibility:hidden;}"], pxToRem(21), pxToRem(16), animation, heartAnim, animation, circleAnim, pxToRem(8), pxToRem(8));
export const KissKissLoadingAnimation = _ref => {
  let {
    color,
    svgProps,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement(StyledLoadingAnimation, _extends({
    "aria-hidden": true
  }, props, {
    className: classNames('k-KissKissLoadingAnimation', props.className)
  }), /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 21 16"
  }, svgProps, {
    className: classNames('k-KissKissLoadingAnimation__svg', svgProps.className)
  }), /*#__PURE__*/React.createElement("path", {
    className: "k-KissKissLoadingAnimation__path k-KissKissLoadingAnimation__path-heart",
    fill: color,
    d: "M18.81 8a2.59 2.59 0 002.18-2.6c0-1.45-1.25-2.7-2.7-2.7-.73 0-1.35.31-1.87.73L11.85 8l4.47 4.47c.52.52 1.24.83 1.97.83 1.45 0 2.7-1.25 2.7-2.7.1-1.15-.83-2.4-2.18-2.6z"
  }), /*#__PURE__*/React.createElement("path", {
    className: "k-KissKissLoadingAnimation__path k-KissKissLoadingAnimation__path-circle",
    fill: color,
    d: "M13.82 2.5A7.91 7.91 0 008 0C3.53 0 0 3.53 0 8c0 4.47 3.53 8 8 8a8 8 0 005.71-2.39L8 8l5.82-5.5z"
  })));
};
KissKissLoadingAnimation.defaultProps = {
  color: COLORS.font1,
  svgProps: {}
};
KissKissLoadingAnimation.propTypes = {
  color: PropTypes.string,
  svgProps: PropTypes.object
};