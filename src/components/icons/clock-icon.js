"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClockIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var ClockIcon = function ClockIcon(props) {
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 11 11",
    width: "10",
    height: "10"
  }, props), /*#__PURE__*/_react.default.createElement("title", null, "Clock"), /*#__PURE__*/_react.default.createElement("circle", {
    cx: "5.5",
    cy: "5.5",
    r: "5",
    fill: "#fff",
    stroke: "#333"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M6 5h1.5v1H5V2.5h1z",
    fill: "#333"
  }));
};

exports.ClockIcon = ClockIcon;