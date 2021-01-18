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

var _deprecated = _interopRequireDefault(require("prop-types-extra/lib/deprecated"));

var StyledRocketCircle = _styledComponents.default.div.withConfig({
  displayName: "rocket-circle-icon__StyledRocketCircle",
  componentId: "paapmm-0"
})(["display:flex;justify-content:center;align-items:center;width:", ";height:", ";border-radius:100%;background-color:", ";@media (min-width:", "){width:", ";height:", ";}.k-RocketCircleIcon__rocketIcon{padding-right:", ";padding-top:", ";width:", ";height:", ";@media (min-width:", "){width:", ";height:", ";}}"], function (_ref) {
  var circleWidthMobile = _ref.circleWidthMobile;
  return (0, _typography.pxToRem)(circleWidthMobile);
}, function (_ref2) {
  var circleWidthMobile = _ref2.circleWidthMobile;
  return (0, _typography.pxToRem)(circleWidthMobile);
}, function (_ref3) {
  var bgColor = _ref3.bgColor;
  return bgColor;
}, (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), function (_ref4) {
  var circleWidth = _ref4.circleWidth;
  return (0, _typography.pxToRem)(circleWidth);
}, function (_ref5) {
  var circleWidth = _ref5.circleWidth;
  return (0, _typography.pxToRem)(circleWidth);
}, (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(1), function (_ref6) {
  var rocketWidthMobile = _ref6.rocketWidthMobile;
  return (0, _typography.pxToRem)(rocketWidthMobile);
}, function (_ref7) {
  var rocketHeightMobile = _ref7.rocketHeightMobile;
  return (0, _typography.pxToRem)(rocketHeightMobile);
}, (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), function (_ref8) {
  var rocketWidth = _ref8.rocketWidth;
  return (0, _typography.pxToRem)(rocketWidth);
}, function (_ref9) {
  var rocketHeight = _ref9.rocketHeight;
  return (0, _typography.pxToRem)(rocketHeight);
});

var RocketCircleIcon = function RocketCircleIcon(_ref10) {
  var color = _ref10.color,
      bgColor = _ref10.bgColor,
      circleColor = _ref10.circleColor,
      circleWidth = _ref10.circleWidth,
      circleWidthMobile = _ref10.circleWidthMobile,
      rocketWidth = _ref10.rocketWidth,
      rocketWidthMobile = _ref10.rocketWidthMobile,
      rocketHeight = _ref10.rocketHeight,
      rocketHeightMobile = _ref10.rocketHeightMobile,
      rocketColor = _ref10.rocketColor,
      rocketTitle = _ref10.rocketTitle,
      others = (0, _objectWithoutProperties2.default)(_ref10, ["color", "bgColor", "circleColor", "circleWidth", "circleWidthMobile", "rocketWidth", "rocketWidthMobile", "rocketHeight", "rocketHeightMobile", "rocketColor", "rocketTitle"]);
  return /*#__PURE__*/_react.default.createElement(StyledRocketCircle, (0, _extends2.default)({
    circleWidth: circleWidth,
    circleWidthMobile: circleWidthMobile,
    bgColor: circleColor || bgColor,
    rocketWidth: rocketWidth,
    rocketHeight: rocketHeight,
    rocketHeightMobile: rocketHeightMobile,
    rocketWidthMobile: rocketWidthMobile
  }, others), /*#__PURE__*/_react.default.createElement(_rocketIcon.RocketIcon, {
    color: color,
    title: rocketTitle,
    className: "k-RocketCircleIcon__rocketIcon"
  }));
};

exports.RocketCircleIcon = RocketCircleIcon;
RocketCircleIcon.defaultProps = {
  bgColor: _colorsConfig.default.valid,
  circleWidth: 24,
  circleWidthMobile: 20,
  color: _colorsConfig.default.background1,
  rocketHeight: 15,
  rocketHeightMobile: 12,
  rocketTitle: '',
  rocketWidth: 12,
  rocketWidthMobile: 10
};
RocketCircleIcon.propTypes = {
  circlewidth: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  circlewidthMobile: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  circleColor: (0, _deprecated.default)(_propTypes.default.string, '`circleColor` is deprecated. Please use `bgColor` instead.'),
  bgColor: _propTypes.default.string,
  rocketWidth: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  rocketHeight: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  rocketWidthMobile: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  rocketHeightMobile: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  rocketTitle: _propTypes.default.string,
  rocketColor: (0, _deprecated.default)(_propTypes.default.string, '`rocketColor` is deprecated. Please use `color` instead.'),
  color: _propTypes.default.string
};