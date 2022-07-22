"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.RocketCircleIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _rocketIcon = require("../rocket-icon");

var _typography = require("../../../../helpers/utils/typography");

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _screenConfig = require("../../../../constants/screen-config");

var _deprecated = _interopRequireDefault(require("prop-types-extra/lib/deprecated"));

var _classnames = _interopRequireDefault(require("classnames"));

const StyledRocketCircle = _styledComponents.default.div.withConfig({
  displayName: "rocket-circle-icon__StyledRocketCircle",
  componentId: "sc-hjcjwz-0"
})(["display:flex;justify-content:center;align-items:center;width:", ";height:", ";border-radius:var(border-radius-rounded);background-color:", ";@media (min-width:", "){width:", ";height:", ";}.k-RocketCircleIcon__rocketIcon{padding-right:", ";padding-top:", ";width:", ";height:", ";@media (min-width:", "){width:", ";height:", ";}}"], _ref => {
  let {
    circleWidthMobile
  } = _ref;
  return (0, _typography.pxToRem)(circleWidthMobile);
}, _ref2 => {
  let {
    circleWidthMobile
  } = _ref2;
  return (0, _typography.pxToRem)(circleWidthMobile);
}, _ref3 => {
  let {
    bgColor
  } = _ref3;
  return bgColor;
}, (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), _ref4 => {
  let {
    circleWidth
  } = _ref4;
  return (0, _typography.pxToRem)(circleWidth);
}, _ref5 => {
  let {
    circleWidth
  } = _ref5;
  return (0, _typography.pxToRem)(circleWidth);
}, (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(1), _ref6 => {
  let {
    rocketWidthMobile
  } = _ref6;
  return (0, _typography.pxToRem)(rocketWidthMobile);
}, _ref7 => {
  let {
    rocketHeightMobile
  } = _ref7;
  return (0, _typography.pxToRem)(rocketHeightMobile);
}, (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), _ref8 => {
  let {
    rocketWidth
  } = _ref8;
  return (0, _typography.pxToRem)(rocketWidth);
}, _ref9 => {
  let {
    rocketHeight
  } = _ref9;
  return (0, _typography.pxToRem)(rocketHeight);
});

const RocketCircleIcon = _ref10 => {
  let {
    color,
    bgColor,
    circleColor,
    circleWidth,
    circleWidthMobile,
    rocketWidth,
    rocketWidthMobile,
    rocketHeight,
    rocketHeightMobile,
    rocketColor,
    rocketTitle,
    className,
    ...others
  } = _ref10;
  return /*#__PURE__*/_react.default.createElement(StyledRocketCircle, (0, _extends2.default)({
    circleWidth: circleWidth,
    circleWidthMobile: circleWidthMobile,
    bgColor: circleColor || bgColor,
    rocketWidth: rocketWidth,
    rocketHeight: rocketHeight,
    rocketHeightMobile: rocketHeightMobile,
    rocketWidthMobile: rocketWidthMobile,
    className: (0, _classnames.default)('k-ColorSvg', className)
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