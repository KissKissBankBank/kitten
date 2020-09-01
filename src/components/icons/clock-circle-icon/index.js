"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClockCircleIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var ClockCircleIcon = function ClockCircleIcon(_ref) {
  var circleColor = _ref.circleColor,
      clockColor = _ref.clockColor,
      props = (0, _objectWithoutProperties2.default)(_ref, ["circleColor", "clockColor"]);
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/_react.default.createElement("title", null, "Clock circle"), /*#__PURE__*/_react.default.createElement("circle", {
    fill: circleColor,
    cx: "10",
    cy: "10",
    r: "10"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fill: clockColor,
    d: "M11 9h3v2H9V4h2v5z"
  }));
};

exports.ClockCircleIcon = ClockCircleIcon;
ClockCircleIcon.defaultProps = {
  circleColor: '#fff',
  clockColor: '#333'
};