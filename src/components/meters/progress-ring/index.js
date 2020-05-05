"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProgressRing = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typography = require("../../../helpers/utils/typography");

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

var StyledCircleBackground = _styledComponents.default.circle.withConfig({
  displayName: "progress-ring__StyledCircleBackground",
  componentId: "ysg5f3-0"
})(["fill:transparent;stroke:", ";stroke-width:", ";"], _colorsConfig.default.line1, function (_ref3) {
  var strokeWidth = _ref3.strokeWidth;
  return (0, _typography.pxToRem)(strokeWidth);
});

var StyledCircle = _styledComponents.default.circle.withConfig({
  displayName: "progress-ring__StyledCircle",
  componentId: "ysg5f3-1"
})(["fill:transparent;stroke-width:", ";stroke-linecap:butt;stroke-dasharray:", ";stroke-dashoffset:", ";stroke:", ";transform:rotate(-90deg);transform-origin:50% 50%;animation:", " 1.4s ease-out;"], function (_ref4) {
  var strokeWidth = _ref4.strokeWidth;
  return (0, _typography.pxToRem)(strokeWidth);
}, function (_ref5) {
  var r = _ref5.r;
  return getDashLength(r);
}, function (_ref6) {
  var r = _ref6.r,
      progressValue = _ref6.progressValue;
  return getDashOffset({
    r: r,
    progressValue: progressValue
  });
}, function (_ref7) {
  var progressColor = _ref7.progressColor;
  return progressColor;
}, rotateAnimate);

var ProgressRing = function ProgressRing(_ref8) {
  var color = _ref8.color,
      value = _ref8.value,
      width = _ref8.width,
      strokeWidth = _ref8.strokeWidth,
      others = (0, _objectWithoutProperties2.default)(_ref8, ["color", "value", "width", "strokeWidth"]);
  var circleX = width / 2;
  var circleY = width / 2;
  var radius = circleX - strokeWidth;
  var viewBox = "0 0 ".concat(width, " ").concat(width);
  var progressValue = value < 100 ? value : 100;
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({}, others, {
    width: width,
    height: width,
    viewBox: viewBox,
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/_react.default.createElement(StyledCircleBackground, {
    cx: circleX,
    cy: circleY,
    r: radius,
    strokeWidth: strokeWidth
  }), /*#__PURE__*/_react.default.createElement(StyledCircle, {
    progressColor: color,
    progressValue: progressValue,
    cx: circleX,
    cy: circleY,
    r: radius,
    strokeWidth: strokeWidth
  }));
};

exports.ProgressRing = ProgressRing;
ProgressRing.defaultProps = {
  color: _colorsConfig.default.primary1,
  value: '',
  width: 50,
  radius: null,
  strokeWidth: 5
};
ProgressRing.propTypes = {
  /**
    ProgressRing color
  */
  color: _propTypes.default.string,

  /**
    Percentage of progress %
  */
  value: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),

  /**
    Width of ProgressRing
  */
  width: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),

  /**
    Radius value of ProgressRing
  */
  radius: _propTypes.default.number,

  /**
   Width of circle (stroke)
  */
  strokeWidth: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string])
};