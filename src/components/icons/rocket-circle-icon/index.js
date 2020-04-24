"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RocketCircleIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _rocketIcon = require("../rocket-icon");

var _typography = require("../../../helpers/utils/typography");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _screenConfig = require("../../../constants/screen-config");

var StyledRocketCircle = _styledComponents.default.div.withConfig({
  displayName: "rocket-circle-icon__StyledRocketCircle",
  componentId: "paapmm-0"
})(["display:flex;justify-content:center;align-items:center;width:", ";height:", ";border-radius:100%;background-color:", ";@media (min-width:", "){width:", ";height:", ";}"], function (_ref) {
  var circleWidthMobile = _ref.circleWidthMobile;
  return (0, _typography.pxToRem)(circleWidthMobile);
}, function (_ref2) {
  var circleWidthMobile = _ref2.circleWidthMobile;
  return (0, _typography.pxToRem)(circleWidthMobile);
}, function (_ref3) {
  var circleColor = _ref3.circleColor;
  return circleColor;
}, (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), function (_ref4) {
  var circleWidth = _ref4.circleWidth;
  return (0, _typography.pxToRem)(circleWidth);
}, function (_ref5) {
  var circleWidth = _ref5.circleWidth;
  return (0, _typography.pxToRem)(circleWidth);
});

var StyledRocketIcon = (0, _styledComponents.default)(function (_ref6) {
  var rocketWidth = _ref6.rocketWidth,
      rocketHeight = _ref6.rocketHeight,
      rocketHeightMobile = _ref6.rocketHeightMobile,
      rocketWidthMobile = _ref6.rocketWidthMobile,
      others = (0, _objectWithoutProperties2.default)(_ref6, ["rocketWidth", "rocketHeight", "rocketHeightMobile", "rocketWidthMobile"]);
  return /*#__PURE__*/_react.default.createElement(_rocketIcon.RocketIcon, others);
}).withConfig({
  displayName: "rocket-circle-icon__StyledRocketIcon",
  componentId: "paapmm-1"
})(["padding-right:", ";padding-top:", ";width:", ";height:", ";@media (min-width:", "){width:", ";height:", ";}"], (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(1), function (_ref7) {
  var rocketWidthMobile = _ref7.rocketWidthMobile;
  return (0, _typography.pxToRem)(rocketWidthMobile);
}, function (_ref8) {
  var rocketHeightMobile = _ref8.rocketHeightMobile;
  return (0, _typography.pxToRem)(rocketHeightMobile);
}, (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), function (_ref9) {
  var rocketWidth = _ref9.rocketWidth;
  return (0, _typography.pxToRem)(rocketWidth);
}, function (_ref10) {
  var rocketHeight = _ref10.rocketHeight;
  return (0, _typography.pxToRem)(rocketHeight);
});

var RocketCircleIcon = function RocketCircleIcon(_ref11) {
  var circleColor = _ref11.circleColor,
      circleWidth = _ref11.circleWidth,
      circleWidthMobile = _ref11.circleWidthMobile,
      rocketWidth = _ref11.rocketWidth,
      rocketWidthMobile = _ref11.rocketWidthMobile,
      rocketHeight = _ref11.rocketHeight,
      rocketHeightMobile = _ref11.rocketHeightMobile,
      rocketColor = _ref11.rocketColor,
      rocketTitle = _ref11.rocketTitle,
      others = (0, _objectWithoutProperties2.default)(_ref11, ["circleColor", "circleWidth", "circleWidthMobile", "rocketWidth", "rocketWidthMobile", "rocketHeight", "rocketHeightMobile", "rocketColor", "rocketTitle"]);
  return /*#__PURE__*/_react.default.createElement(StyledRocketCircle, (0, _extends2.default)({
    circleWidth: circleWidth,
    circleWidthMobile: circleWidthMobile,
    circleColor: circleColor
  }, others), /*#__PURE__*/_react.default.createElement(StyledRocketIcon, {
    rocketWidth: rocketWidth,
    rocketHeight: rocketHeight,
    rocketHeightMobile: rocketHeightMobile,
    rocketWidthMobile: rocketWidthMobile,
    color: rocketColor,
    title: rocketTitle
  }));
};

exports.RocketCircleIcon = RocketCircleIcon;
RocketCircleIcon.defaultProps = {
  circleWidth: 24,
  circleWidthMobile: 20,
  circleColor: _colorsConfig.default.valid,
  rocketWidth: 12,
  rocketHeight: 15,
  rocketWidthMobile: 10,
  rocketHeightMobile: 12,
  rocketColor: _colorsConfig.default.background1,
  rocketTitle: ''
};
RocketCircleIcon.propTypes = {
  circlewidth: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  circlewidthMobile: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  circleColor: _propTypes.default.string,
  rocketWidth: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  rocketHeight: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  rocketWidthMobile: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  rocketHeightMobile: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  rocketTitle: _propTypes.default.string,
  rocketColor: _propTypes.default.string
};