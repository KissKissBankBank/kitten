import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import COLORS from '../../../constants/colors-config';
import { pxToRem } from '../../../helpers/utils/typography';
import classNames from 'classnames';

const getDashLength = radius => 2 * Math.PI * radius;

const getDashOffset = _ref => {
  let {
    r,
    progressValue
  } = _ref;
  return getDashLength(r) * (100 - progressValue) / 100;
};

const rotateAnimate = _ref2 => {
  let {
    r,
    progressValue
  } = _ref2;
  return keyframes(["from{stroke-dashoffset:", ";}to{stroke-dashoffset:", ";}"], getDashLength(r), getDashOffset({
    r,
    progressValue
  }));
};

const StyledMeterCircle = styled.circle.withConfig({
  displayName: "progress-ring__StyledMeterCircle",
  componentId: "sc-o4wnv4-0"
})(["stroke-linecap:butt;stroke-linecap:round;stroke-dasharray:", ";stroke-dashoffset:", ";transform:rotate(-90deg);transform-origin:", ";animation:", " ", "s ease-out;"], _ref3 => {
  let {
    r
  } = _ref3;
  return getDashLength(r);
}, _ref4 => {
  let {
    r,
    progressValue
  } = _ref4;
  return getDashOffset({
    r,
    progressValue
  });
}, _ref5 => {
  let {
    cx,
    cy
  } = _ref5;
  return pxToRem(cx) + " " + pxToRem(cy);
}, rotateAnimate, _ref6 => {
  let {
    animationSpeed
  } = _ref6;
  return animationSpeed;
});
export const ProgressRing = _ref7 => {
  let {
    color,
    value,
    width,
    strokeWidth,
    className,
    animationSpeed,
    ...others
  } = _ref7;
  const circleX = width / 2;
  const circleY = width / 2;
  const radius = circleX - strokeWidth;
  const viewBox = "0 0 " + width + " " + width;
  const progressValue = value < 100 ? value : 100;
  return /*#__PURE__*/React.createElement("svg", _extends({}, others, {
    width: width,
    height: width,
    viewBox: viewBox,
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: circleX,
    cy: circleY,
    r: radius,
    strokeWidth: strokeWidth,
    fill: "transparent",
    stroke: COLORS.line1
  }), /*#__PURE__*/React.createElement(StyledMeterCircle, {
    cx: circleX,
    cy: circleY,
    r: radius,
    strokeWidth: strokeWidth,
    animationSpeed: animationSpeed,
    fill: "transparent",
    stroke: color,
    progressValue: progressValue,
    className: classNames('k-Meters__ProgressRing', className)
  }));
};
ProgressRing.defaultProps = {
  color: COLORS.primary1,
  value: 0,
  width: 50,
  strokeWidth: 5,
  animationSpeed: 1.4
};
ProgressRing.propTypes = {
  color: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  animationSpeed: PropTypes.number
};