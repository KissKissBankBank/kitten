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

var Container = _styledComponents.default.div.withConfig({
  displayName: "arrow-container__Container",
  componentId: "sc-10kgymk-0"
})(["position:relative;padding:", ";background-color:", ";"], function (_ref) {
  var padding = _ref.padding;
  return (0, _typography.pxToRem)(padding);
}, function (_ref2) {
  var color = _ref2.color;
  return color;
});

var Arrow = _styledComponents.default.span.withConfig({
  displayName: "arrow-container__Arrow",
  componentId: "sc-10kgymk-1"
})(["position:absolute;display:block;width:0;height:0;border:", " solid transparent;", ""], function (_ref3) {
  var size = _ref3.size;
  return (0, _typography.pxToRem)(size);
}, function (_ref4) {
  var position = _ref4.position,
      size = _ref4.size,
      distance = _ref4.distance,
      color = _ref4.color,
      centered = _ref4.centered;
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
});

var ArrowContainer = function ArrowContainer(_ref5) {
  var children = _ref5.children,
      color = _ref5.color,
      size = _ref5.size,
      distance = _ref5.distance,
      position = _ref5.position,
      centered = _ref5.centered,
      padding = _ref5.padding,
      props = (0, _objectWithoutProperties2.default)(_ref5, ["children", "color", "size", "distance", "position", "centered", "padding"]);
  return _react.default.createElement(Container, (0, _extends2.default)({
    color: color,
    padding: padding
  }, props), children, _react.default.createElement(Arrow, {
    color: color,
    size: size,
    distance: distance,
    position: position,
    centered: centered
  }));
};

exports.ArrowContainer = ArrowContainer;
ArrowContainer.propTypes = {
  color: _propTypes.default.string,
  size: _propTypes.default.number,
  position: _propTypes.default.string,
  distance: _propTypes.default.number,
  centered: _propTypes.default.bool,
  padding: _propTypes.default.number
};
ArrowContainer.defaultProps = {
  color: _colorsConfig.default.background3,
  size: 10,
  position: 'left',
  distance: 20,
  padding: 20,
  centered: false
};