import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import COLORS from '../../../constants/colors-config';
import { pxToRem } from '../../../helpers/utils/typography';

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
  componentId: "ysg5f3-0"
})(["stroke-linecap:butt;stroke-dasharray:", ";stroke-dashoffset:", ";transform:rotate(-90deg);transform-origin:", ";animation:", " 1.4s ease-out;"], function (_ref3) {
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
  return "".concat(pxToRem(cx), " ").concat(pxToRem(cy));
}, rotateAnimate);
export var ProgressRing = function ProgressRing(_ref6) {
  var color = _ref6.color,
      value = _ref6.value,
      width = _ref6.width,
      strokeWidth = _ref6.strokeWidth,
      others = _objectWithoutProperties(_ref6, ["color", "value", "width", "strokeWidth"]);

  var circleX = width / 2;
  var circleY = width / 2;
  var radius = circleX - strokeWidth;
  var viewBox = "0 0 ".concat(width, " ").concat(width);
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
    fill: "transparent",
    stroke: color,
    progressValue: progressValue
  }));
};
ProgressRing.defaultProps = {
  color: COLORS.primary1,
  value: '',
  width: 50,
  radius: null,
  strokeWidth: 5
};
ProgressRing.propTypes = {
  /**
    ProgressRing color
  */
  color: PropTypes.string,

  /**
    Percentage of progress %
  */
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /**
    Width of ProgressRing
  */
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /**
    Radius value of ProgressRing
  */
  radius: PropTypes.number,

  /**
    Width of circle (stroke)
  */
  strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};