"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClockIcon = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var ClockIcon = function ClockIcon(props) {
  return _react.default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 11 11",
    width: "10",
    height: "10"
  }, props), _react.default.createElement("title", null, "Clock"), _react.default.createElement("circle", {
    cx: "5.5",
    cy: "5.5",
    r: "5",
    fill: "#fff",
    stroke: "#333"
  }), _react.default.createElement("path", {
    d: "M6 5h1.5v1H5V2.5h1z",
    fill: "#333"
  }));
};

exports.ClockIcon = ClockIcon;