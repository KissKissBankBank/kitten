"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KissKissLoadingAnimation = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typography = require("../../../helpers/utils/typography");

var animation = '1.6s ease-in-out 0s infinite';
var heartAnim = (0, _styledComponents.keyframes)(["0%{transform:translateX(0);}20%,30%{transform:translateX(", ");}50%,100%{transform:translateX(0);}"], (0, _typography.pxToRem)(7));
var circleAnim = (0, _styledComponents.keyframes)(["0%,5%{transform:rotate(0deg);}46%,100%{transform:rotate(360deg);}"]);

var StyledLoadingAnimation = _styledComponents.default.div.withConfig({
  displayName: "kisskiss-loading-animation__StyledLoadingAnimation",
  componentId: "sc-19fn4bg-0"
})([".k-KissKissLoadingAnimation__svg{overflow:visible;width:", ";height:", ";}.k-KissKissLoadingAnimation__path-heart{animation:", " ", ";backface-visibility:hidden;}.k-KissKissLoadingAnimation__path-circle{animation:", " ", ";transform-origin:", " ", ";backface-visibility:hidden;}"], (0, _typography.pxToRem)(21), (0, _typography.pxToRem)(16), animation, heartAnim, animation, circleAnim, (0, _typography.pxToRem)(8), (0, _typography.pxToRem)(8));

var KissKissLoadingAnimation = function KissKissLoadingAnimation(_ref) {
  var color = _ref.color,
      svgProps = _ref.svgProps,
      props = (0, _objectWithoutProperties2.default)(_ref, ["color", "svgProps"]);
  return /*#__PURE__*/_react.default.createElement(StyledLoadingAnimation, (0, _extends2.default)({
    "aria-hidden": true
  }, props, {
    className: (0, _classnames.default)('k-KissKissLoadingAnimation', props.className)
  }), /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 21 16"
  }, svgProps, {
    className: (0, _classnames.default)('k-KissKissLoadingAnimation__svg', svgProps.className)
  }), /*#__PURE__*/_react.default.createElement("path", {
    className: "k-KissKissLoadingAnimation__path k-KissKissLoadingAnimation__path-heart",
    fill: color,
    d: "M18.81 8a2.59 2.59 0 002.18-2.6c0-1.45-1.25-2.7-2.7-2.7-.73 0-1.35.31-1.87.73L11.85 8l4.47 4.47c.52.52 1.24.83 1.97.83 1.45 0 2.7-1.25 2.7-2.7.1-1.15-.83-2.4-2.18-2.6z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    className: "k-KissKissLoadingAnimation__path k-KissKissLoadingAnimation__path-circle",
    fill: color,
    d: "M13.82 2.5A7.91 7.91 0 008 0C3.53 0 0 3.53 0 8c0 4.47 3.53 8 8 8a8 8 0 005.71-2.39L8 8l5.82-5.5z"
  })));
};

exports.KissKissLoadingAnimation = KissKissLoadingAnimation;
KissKissLoadingAnimation.defaultProps = {
  color: _colorsConfig.default.font1,
  svgProps: {}
};
KissKissLoadingAnimation.propTypes = {
  color: _propTypes.default.string,
  svgProps: _propTypes.default.object
};