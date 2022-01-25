"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.ProgressRing = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typography = require("../../../helpers/utils/typography");

var _classnames = _interopRequireDefault(require("classnames"));

var _excluded = ["color", "value", "width", "strokeWidth", "className", "animationSpeed"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
  return (0, _styledComponents.keyframes)(["from{stroke-dashoffset:", ";}to{stroke-dashoffset:", ";}"], getDashLength(r), getDashOffset({
    r: r,
    progressValue: progressValue
  }));
};

var StyledMeterCircle = _styledComponents.default.circle.withConfig({
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
  return (0, _typography.pxToRem)(cx) + " " + (0, _typography.pxToRem)(cy);
}, rotateAnimate, function (_ref6) {
  var animationSpeed = _ref6.animationSpeed;
  return animationSpeed;
});

var ProgressRing = function ProgressRing(_ref7) {
  var color = _ref7.color,
      value = _ref7.value,
      width = _ref7.width,
      strokeWidth = _ref7.strokeWidth,
      className = _ref7.className,
      animationSpeed = _ref7.animationSpeed,
      others = (0, _objectWithoutPropertiesLoose2.default)(_ref7, _excluded);
  var circleX = width / 2;
  var circleY = width / 2;
  var radius = circleX - strokeWidth;
  var viewBox = "0 0 " + width + " " + width;
  var progressValue = value < 100 ? value : 100;
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({}, others, {
    width: width,
    height: width,
    viewBox: viewBox,
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/_react.default.createElement("circle", {
    cx: circleX,
    cy: circleY,
    r: radius,
    strokeWidth: strokeWidth,
    fill: "transparent",
    stroke: _colorsConfig.default.line1
  }), /*#__PURE__*/_react.default.createElement(StyledMeterCircle, {
    cx: circleX,
    cy: circleY,
    r: radius,
    strokeWidth: strokeWidth,
    animationSpeed: animationSpeed,
    fill: "transparent",
    stroke: color,
    progressValue: progressValue,
    className: (0, _classnames.default)('k-Meters__ProgressRing', className)
  }));
};

exports.ProgressRing = ProgressRing;
ProgressRing.defaultProps = {
  color: _colorsConfig.default.primary1,
  value: 0,
  width: 50,
  strokeWidth: 5,
  animationSpeed: 1.4
};
ProgressRing.propTypes = {
  color: _propTypes.default.string,
  value: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  width: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  strokeWidth: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  animationSpeed: _propTypes.default.number
};