import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["color", "value", "width", "strokeWidth", "className", "animationSpeed"];
import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import COLORS from '../../../constants/colors-config';
import { pxToRem } from '../../../helpers/utils/typography';
import classNames from 'classnames';

var getDashLength = function getDashLength(radius) {
  return 2 * Math.PI * radius;
};

var getDashOffset = function getDashOffset(_ref) {
  var r = _ref.r,
      progressValue = _ref.progressValue;
  return getDashLength(r) * (100 - progressValue) / 100;
};

var rotateAnimate = function rotateAnimate(_ref2) {
  var r = _ref2.r,
      progressValue = _ref2.progressValue;
  return keyframes(["from{stroke-dashoffset:", ";}to{stroke-dashoffset:", ";}"], getDashLength(r), getDashOffset({
    r: r,
    progressValue: progressValue
  }));
};

var StyledMeterCircle = styled.circle.withConfig({
  displayName: "progress-ring__StyledMeterCircle",
  componentId: "sc-sdx1nz-0"
})(["stroke-linecap:butt;stroke-linecap:round;stroke-dasharray:", ";stroke-dashoffset:", ";transform:rotate(-90deg);transform-origin:", ";animation:", " ", "s ease-out;"], function (_ref3) {
  var r = _ref3.r;
  return getDashLength(r);
}, function (_ref4) {
  var r = _ref4.r,
      progressValue = _ref4.progressValue;
  return getDashOffset({
    r: r,
    progressValue: progressValue
  });
}, function (_ref5) {
  var cx = _ref5.cx,
      cy = _ref5.cy;
  return pxToRem(cx) + " " + pxToRem(cy);
}, rotateAnimate, function (_ref6) {
  var animationSpeed = _ref6.animationSpeed;
  return animationSpeed;
});
export var ProgressRing = function ProgressRing(_ref7) {
  var color = _ref7.color,
      value = _ref7.value,
      width = _ref7.width,
      strokeWidth = _ref7.strokeWidth,
      className = _ref7.className,
      animationSpeed = _ref7.animationSpeed,
      others = _objectWithoutPropertiesLoose(_ref7, _excluded);

  var circleX = width / 2;
  var circleY = width / 2;
  var radius = circleX - strokeWidth;
  var viewBox = "0 0 " + width + " " + width;
  var progressValue = value < 100 ? value : 100;
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