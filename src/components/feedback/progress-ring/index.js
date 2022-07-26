"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.ProgressRing = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typography = require("../../../helpers/utils/typography");

var _classnames = _interopRequireDefault(require("classnames"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
  return (0, _styledComponents.keyframes)(["from{stroke-dashoffset:", ";}to{stroke-dashoffset:", ";}"], getDashLength(r), getDashOffset({
    r,
    progressValue
  }));
};

const StyledMeterCircle = _styledComponents.default.circle.withConfig({
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
  return (0, _typography.pxToRem)(cx) + " " + (0, _typography.pxToRem)(cy);
}, rotateAnimate, _ref6 => {
  let {
    animationSpeed
  } = _ref6;
  return animationSpeed;
});

const ProgressRing = _ref7 => {
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