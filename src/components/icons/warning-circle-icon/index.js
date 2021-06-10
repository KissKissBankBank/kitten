"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WarningCircleIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _ratio = require("../../../helpers/utils/ratio");

var _deprecated = _interopRequireDefault(require("prop-types-extra/lib/deprecated"));

var _classnames = _interopRequireDefault(require("classnames"));

var DEFAULT_WIDTH = 20;
var DEFAULT_HEIGHT = 20;

var WarningCircleIcon = function WarningCircleIcon(_ref) {
  var bgColor = _ref.bgColor,
      color = _ref.color,
      circleColor = _ref.circleColor,
      warningColor = _ref.warningColor,
      width = _ref.width,
      height = _ref.height,
      title = _ref.title,
      className = _ref.className,
      props = (0, _objectWithoutProperties2.default)(_ref, ["bgColor", "color", "circleColor", "warningColor", "width", "height", "title", "className"]);
  var computed = (0, _ratio.computeFromRatio)({
    defaultWidth: DEFAULT_WIDTH,
    defaultHeight: DEFAULT_HEIGHT,
    width: width,
    height: height
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
    fill: warningColor || color,
    d: "M9.034 7.088l-.07-1.862h2.072l-.07 1.862-.294 4.284H9.328l-.294-4.284zm-.28 6.398c0-.373.12-.684.357-.93.24-.248.535-.372.89-.372s.65.124.89.37c.237.248.356.56.356.932 0 .364-.12.67-.357.917-.24.247-.535.37-.89.37s-.65-.123-.89-.37c-.237-.247-.356-.553-.356-.917z"
  }));
};

exports.WarningCircleIcon = WarningCircleIcon;
WarningCircleIcon.prototype = {
  bgColor: _propTypes.default.string,
  color: _propTypes.default.string,
  circleColor: (0, _deprecated.default)(_propTypes.default.string, '`circleColor` is deprecated. Use `bgColor` instead.'),
  warningColor: (0, _deprecated.default)(_propTypes.default.string, '`warningColor` is deprecated. Use `color` instead.'),
  title: _propTypes.default.string,
  width: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  height: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string])
};
WarningCircleIcon.defaultProps = {
  bgColor: _colorsConfig.default.background1,
  color: _colorsConfig.default.font1
};