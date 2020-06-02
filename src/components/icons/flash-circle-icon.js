"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FlashCircleIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _colorsConfig = _interopRequireDefault(require("../../constants/colors-config"));

var _ratio = require("../../helpers/utils/ratio");

var DEFAULT_WIDTH = 20;
var DEFAULT_HEIGHT = 20;

var FlashCircleIcon = function FlashCircleIcon(_ref) {
  var circleColor = _ref.circleColor,
      flashColor = _ref.flashColor,
      width = _ref.width,
      height = _ref.height,
      title = _ref.title,
      props = (0, _objectWithoutProperties2.default)(_ref, ["circleColor", "flashColor", "width", "height", "title"]);
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
    height: computed.height
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("circle", {
    fill: circleColor,
    cx: "10",
    cy: "10",
    r: "10"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "m6 10 6-6-1.25 6h3.25l-6 6 1.25-6z",
    fill: flashColor,
    fillRule: "evenodd"
  }));
};

exports.FlashCircleIcon = FlashCircleIcon;
FlashCircleIcon.prototype = {
  circleColor: _propTypes.default.string,
  flashColor: _propTypes.default.string,
  title: _propTypes.default.string,
  width: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  height: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string])
};
FlashCircleIcon.defaultProps = {
  circleColor: _colorsConfig.default.background1,
  flashColor: _colorsConfig.default.font1
};