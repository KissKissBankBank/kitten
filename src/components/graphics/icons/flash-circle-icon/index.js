"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.FlashCircleIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _ratio = require("../../../../helpers/utils/ratio");

var _deprecated = _interopRequireDefault(require("prop-types-extra/lib/deprecated"));

var _classnames = _interopRequireDefault(require("classnames"));

const DEFAULT_WIDTH = 20;
const DEFAULT_HEIGHT = 20;

const FlashCircleIcon = _ref => {
  let {
    bgColor,
    color,
    circleColor,
    flashColor,
    width,
    height,
    title,
    className,
    ...props
  } = _ref;
  const computed = (0, _ratio.computeFromRatio)({
    defaultWidth: DEFAULT_WIDTH,
    defaultHeight: DEFAULT_HEIGHT,
    width,
    height
  });
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    width: computed.width,
    height: computed.height,
    className: (0, _classnames.default)('k-ColorSvg', className)
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("circle", {
    fill: circleColor || bgColor,
    cx: "10",
    cy: "10",
    r: "10"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "m6 10 6-6-1.25 6h3.25l-6 6 1.25-6z",
    fill: flashColor || color,
    fillRule: "evenodd"
  }));
};

exports.FlashCircleIcon = FlashCircleIcon;
FlashCircleIcon.prototype = {
  bgColor: _propTypes.default.string,
  color: _propTypes.default.string,
  circleColor: (0, _deprecated.default)(_propTypes.default.string, '`circleColor` is deprecated. Please use `bgColor` instead.'),
  flashColor: (0, _deprecated.default)(_propTypes.default.string, '`flashColor` is deprecated. Please use `color` instead.'),
  title: _propTypes.default.string,
  width: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  height: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string])
};
FlashCircleIcon.defaultProps = {
  bgColor: _colorsConfig.default.background1,
  color: _colorsConfig.default.font1
};