"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArrowContainer = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typography = require("../../../helpers/utils/typography");

var _propTypes = _interopRequireDefault(require("prop-types"));

var Container = (0, _styledComponents.default)(function (_ref) {
  var color = _ref.color,
      padding = _ref.padding,
      shadow = _ref.shadow,
      borderRadius = _ref.borderRadius,
      borderColor = _ref.borderColor,
      borderWidth = _ref.borderWidth,
      others = (0, _objectWithoutProperties2.default)(_ref, ["color", "padding", "shadow", "borderRadius", "borderColor", "borderWidth"]);
  return /*#__PURE__*/_react.default.createElement("div", others);
}).withConfig({
  displayName: "arrow-container__Container",
  componentId: "sc-10kgymk-0"
})(["position:relative;padding:", ";background-color:", ";border-radius:", ";box-sizing:border-box;", " border:", "px solid ", ";z-index:1;"], function (_ref2) {
  var padding = _ref2.padding;
  return (0, _typography.pxToRem)(padding);
}, function (_ref3) {
  var color = _ref3.color;
  return color;
}, function (_ref4) {
  var borderRadius = _ref4.borderRadius;
  return (0, _typography.pxToRem)(borderRadius);
}, function (_ref5) {
  var shadow = _ref5.shadow;
  return shadow && (0, _styledComponents.css)(["box-shadow:0 ", " ", " 0 rgba(0,0,0,0.2);"], (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(20));
}, function (_ref6) {
  var borderWidth = _ref6.borderWidth;
  return borderWidth;
}, function (_ref7) {
  var borderColor = _ref7.borderColor;
  return borderColor;
});
var Arrow = (0, _styledComponents.default)(function (_ref8) {
  var color = _ref8.color,
      size = _ref8.size,
      distance = _ref8.distance,
      position = _ref8.position,
      centered = _ref8.centered,
      borderColor = _ref8.borderColor,
      borderWidth = _ref8.borderWidth,
      others = (0, _objectWithoutProperties2.default)(_ref8, ["color", "size", "distance", "position", "centered", "borderColor", "borderWidth"]);
  return /*#__PURE__*/_react.default.createElement("span", others);
}).withConfig({
  displayName: "arrow-container__Arrow",
  componentId: "sc-10kgymk-1"
})(["position:absolute;display:block;width:0;height:0;border:", " solid transparent;", " &::before{content:'';display:block;position:absolute;width:0;height:0;z-index:-1;", "}"], function (_ref9) {
  var size = _ref9.size;
  return (0, _typography.pxToRem)(size);
}, function (_ref10) {
  var position = _ref10.position,
      size = _ref10.size,
      distance = _ref10.distance,
      color = _ref10.color,
      centered = _ref10.centered;
  var distanceValue = centered ? "calc(50% - ".concat((0, _typography.pxToRem)(size), ")") : (0, _typography.pxToRem)(distance);

  if (position === 'top') {
    return (0, _styledComponents.css)(["top:-", ";left:", ";border-bottom-color:", ";"], (0, _typography.pxToRem)(size * 2), distanceValue, color);
  }

  if (position === 'bottom') {
    return (0, _styledComponents.css)(["bottom:-", ";left:", ";border-top-color:", ";"], (0, _typography.pxToRem)(size * 2), distanceValue, color);
  }

  if (position === 'right') {
    return (0, _styledComponents.css)(["right:-", ";top:", ";border-left-color:", ";"], (0, _typography.pxToRem)(size * 2), distanceValue, color);
  }

  return (0, _styledComponents.css)(["top:", ";left:-", ";border-right-color:", ";"], distanceValue, (0, _typography.pxToRem)(size * 2), color);
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
    return (0, _styledComponents.css)(["top:-", ";left:-", ";border:", " solid transparent;border-bottom-color:", ";"], (0, _typography.pxToRem)(distanceValue + borderSize), (0, _typography.pxToRem)(borderSize), (0, _typography.pxToRem)(borderSize), borderColor);
  }

  if (position === 'bottom') {
    return (0, _styledComponents.css)(["bottom:-", ";left:-", ";border:", " solid transparent;border-top-color:", ";"], (0, _typography.pxToRem)(distanceValue + borderSize), (0, _typography.pxToRem)(borderSize), (0, _typography.pxToRem)(borderSize), borderColor);
  }

  if (position === 'right') {
    return (0, _styledComponents.css)(["right:-", ";top:-", ";border:", " solid transparent;border-left-color:", ";"], (0, _typography.pxToRem)(distanceValue + borderSize), (0, _typography.pxToRem)(borderSize), (0, _typography.pxToRem)(borderSize), borderColor);
  }

  return (0, _styledComponents.css)(["top:-", ";left:-", ";border:", " solid transparent;border-right-color:", ";"], (0, _typography.pxToRem)(borderSize), (0, _typography.pxToRem)(distanceValue + borderSize), (0, _typography.pxToRem)(borderSize), borderColor);
});

var ArrowContainer = function ArrowContainer(_ref12) {
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
      props = (0, _objectWithoutProperties2.default)(_ref12, ["children", "color", "size", "distance", "position", "centered", "padding", "shadow", "borderRadius", "borderColor", "borderWidth"]);
  return /*#__PURE__*/_react.default.createElement(Container, (0, _extends2.default)({
    color: color,
    padding: padding,
    shadow: shadow,
    borderRadius: borderRadius,
    borderColor: borderColor,
    borderWidth: borderWidth
  }, props), children, /*#__PURE__*/_react.default.createElement(Arrow, {
    color: color,
    size: size,
    distance: distance,
    position: position,
    centered: centered,
    borderColor: borderColor,
    borderWidth: borderWidth
  }));
};

exports.ArrowContainer = ArrowContainer;
ArrowContainer.propTypes = {
  color: _propTypes.default.string,
  size: _propTypes.default.number,
  position: _propTypes.default.string,
  distance: _propTypes.default.number,
  centered: _propTypes.default.bool,
  padding: _propTypes.default.number,
  shadow: _propTypes.default.bool,
  borderRadius: _propTypes.default.number,
  borderColor: _propTypes.default.string,
  borderWidth: _propTypes.default.number
};
ArrowContainer.defaultProps = {
  color: _colorsConfig.default.background3,
  size: 10,
  position: 'left',
  distance: 20,
  padding: 20,
  centered: false,
  shadow: false,
  borderRadius: 0,
  borderColor: _colorsConfig.default.line1,
  borderWidth: 0
};