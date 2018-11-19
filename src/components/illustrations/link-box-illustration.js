"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinkBoxIllustration = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var LinkBoxIllustration = function LinkBoxIllustration(props) {
  return _react.default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 30 40",
    width: "40",
    height: "50"
  }, props), _react.default.createElement("title", null, "Document"), _react.default.createElement("path", {
    fill: "#fff",
    d: "M30 34H6V0h16l8 8v26z"
  }), _react.default.createElement("path", {
    fill: "#333",
    d: "M9 3h9v2H9zm0 7h16v2H9zm0 4h10v2H9zm0 4h13v2H9zm0 3.8h5v2H9zM20 29h7v2h-7zm3-3h4v2h-4z"
  }), _react.default.createElement("path", {
    d: "M22 8V1.4l-.4-.4H7v26a6.53 6.53 0 0 1 6 6h16V8.4l-.4-.4z",
    fill: "none"
  }), _react.default.createElement("path", {
    fill: "#fbfbfb",
    d: "M25.3 4.7L23 2.4V7h4.6l-2.3-2.3z"
  }), _react.default.createElement("path", {
    d: "M30 8l-8-8H6v27a6.51 6.51 0 1 0 7 7h17zm-7-5.6l2.3 2.3L27.6 7H23zM6.5 39a5.5 5.5 0 1 1 5.5-5.5A5.55 5.55 0 0 1 6.5 39zM29 33H13a6.53 6.53 0 0 0-6-6V1h14.6l.4.4V8h6.6l.4.4z",
    fill: "#333"
  }), _react.default.createElement("circle", {
    cx: "6.5",
    cy: "33.5",
    r: "5.5",
    fill: "#68ffa0"
  }), _react.default.createElement("path", {
    fill: "#68ffa0",
    d: "M8.6 34.2l-1.4-1.4-.7-.7-.7.7-1.4 1.4.7.7 1.4-1.4 1.4 1.4.7-.7z"
  }), _react.default.createElement("path", {
    fill: "#333",
    d: "M6.5 32.1l-.7.7-1.4 1.4.7.7 1.4-1.4 1.4 1.4.7-.7-1.4-1.4-.7-.7z"
  }));
};

exports.LinkBoxIllustration = LinkBoxIllustration;