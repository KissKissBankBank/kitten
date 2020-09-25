import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import styled, { css } from 'styled-components';
import COLORS from '../../../constants/colors-config';
import { pxToRem } from '../../../helpers/utils/typography';
import PropTypes from 'prop-types';
var Container = styled(function (_ref) {
  var color = _ref.color,
      padding = _ref.padding,
      shadow = _ref.shadow,
      borderRadius = _ref.borderRadius,
      borderColor = _ref.borderColor,
      borderWidth = _ref.borderWidth,
      others = _objectWithoutProperties(_ref, ["color", "padding", "shadow", "borderRadius", "borderColor", "borderWidth"]);

  return /*#__PURE__*/React.createElement("div", others);
}).withConfig({
  displayName: "arrow-container__Container",
  componentId: "sc-10kgymk-0"
})(["position:relative;padding:", ";background-color:", ";border-radius:", ";box-sizing:border-box;", " border:", "px solid ", ";z-index:1;"], function (_ref2) {
  var padding = _ref2.padding;
  return pxToRem(padding);
}, function (_ref3) {
  var color = _ref3.color;
  return color;
}, function (_ref4) {
  var borderRadius = _ref4.borderRadius;
  return pxToRem(borderRadius);
}, function (_ref5) {
  var shadow = _ref5.shadow;
  return shadow && css(["box-shadow:0 ", " ", " 0 rgba(0,0,0,0.2);"], pxToRem(10), pxToRem(20));
}, function (_ref6) {
  var borderWidth = _ref6.borderWidth;
  return borderWidth;
}, function (_ref7) {
  var borderColor = _ref7.borderColor;
  return borderColor;
});
var Arrow = styled(function (_ref8) {
  var color = _ref8.color,
      size = _ref8.size,
      distance = _ref8.distance,
      position = _ref8.position,
      centered = _ref8.centered,
      borderColor = _ref8.borderColor,
      borderWidth = _ref8.borderWidth,
      others = _objectWithoutProperties(_ref8, ["color", "size", "distance", "position", "centered", "borderColor", "borderWidth"]);

  return /*#__PURE__*/React.createElement("span", others);
}).withConfig({
  displayName: "arrow-container__Arrow",
  componentId: "sc-10kgymk-1"
})(["position:absolute;display:block;width:0;height:0;border:", " solid transparent;", " &::before{content:'';display:block;position:absolute;width:0;height:0;z-index:-1;", "}"], function (_ref9) {
  var size = _ref9.size;
  return pxToRem(size);
}, function (_ref10) {
  var position = _ref10.position,
      size = _ref10.size,
      distance = _ref10.distance,
      color = _ref10.color,
      centered = _ref10.centered;
  var distanceValue = centered ? "calc(50% - ".concat(pxToRem(size), ")") : pxToRem(distance);

  if (position === 'top') {
    return css(["top:-", ";left:", ";border-bottom-color:", ";"], pxToRem(size * 2), distanceValue, color);
  }

  if (position === 'bottom') {
    return css(["bottom:-", ";left:", ";border-top-color:", ";"], pxToRem(size * 2), distanceValue, color);
  }

  if (position === 'right') {
    return css(["right:-", ";top:", ";border-left-color:", ";"], pxToRem(size * 2), distanceValue, color);
  }

  return css(["top:", ";left:-", ";border-right-color:", ";"], distanceValue, pxToRem(size * 2), color);
}, function (_ref11) {
  var position = _ref11.position,
      size = _ref11.size,
      borderColor = _ref11.borderColor,
      borderWidth = _ref11.borderWidth;
  if (borderWidth <= 0) return;
  var rawDistanceValue = Math.sqrt(Math.pow(borderWidth, 2) * 2);
  var distanceValue = borderWidth % 2 === 0 ? Math.floor(rawDistanceValue) : Math.ceil(rawDistanceValue);
  var borderSize = distanceValue + size;

  if (position === 'top') {
    return css(["top:-", ";left:-", ";border:", " solid transparent;border-bottom-color:", ";"], pxToRem(distanceValue + borderSize), pxToRem(borderSize), pxToRem(borderSize), borderColor);
  }

  if (position === 'bottom') {
    return css(["bottom:-", ";left:-", ";border:", " solid transparent;border-top-color:", ";"], pxToRem(distanceValue + borderSize), pxToRem(borderSize), pxToRem(borderSize), borderColor);
  }

  if (position === 'right') {
    return css(["right:-", ";top:-", ";border:", " solid transparent;border-left-color:", ";"], pxToRem(distanceValue + borderSize), pxToRem(borderSize), pxToRem(borderSize), borderColor);
  }

  return css(["top:-", ";left:-", ";border:", " solid transparent;border-right-color:", ";"], pxToRem(borderSize), pxToRem(distanceValue + borderSize), pxToRem(borderSize), borderColor);
});
export var ArrowContainer = function ArrowContainer(_ref12) {
  var children = _ref12.children,
      color = _ref12.color,
      size = _ref12.size,
      distance = _ref12.distance,
      position = _ref12.position,
      centered = _ref12.centered,
      padding = _ref12.padding,
      shadow = _ref12.shadow,
      borderRadius = _ref12.borderRadius,
      borderColor = _ref12.borderColor,
      borderWidth = _ref12.borderWidth,
      props = _objectWithoutProperties(_ref12, ["children", "color", "size", "distance", "position", "centered", "padding", "shadow", "borderRadius", "borderColor", "borderWidth"]);

  return /*#__PURE__*/React.createElement(Container, _extends({
    color: color,
    padding: padding,
    shadow: shadow,
    borderRadius: borderRadius,
    borderColor: borderColor,
    borderWidth: borderWidth
  }, props), children, /*#__PURE__*/React.createElement(Arrow, {
    color: color,
    size: size,
    distance: distance,
    position: position,
    centered: centered,
    borderColor: borderColor,
    borderWidth: borderWidth
  }));
};
ArrowContainer.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  position: PropTypes.string,
  distance: PropTypes.number,
  centered: PropTypes.bool,
  padding: PropTypes.number,
  shadow: PropTypes.bool,
  borderRadius: PropTypes.number,
  borderColor: PropTypes.string,
  borderWidth: PropTypes.number
};
ArrowContainer.defaultProps = {
  color: COLORS.background3,
  size: 10,
  position: 'left',
  distance: 20,
  padding: 20,
  centered: false,
  shadow: false,
  borderRadius: 0,
  borderColor: COLORS.line1,
  borderWidth: 0
};