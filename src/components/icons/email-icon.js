"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmailIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var EmailIcon = function EmailIcon(props) {
  return _react.default.createElement("svg", (0, _extends2.default)({
    viewBox: "0 0 19 12",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _react.default.createElement("title", null, "Email"), _react.default.createElement("path", {
    d: "M9.5 8l9-6v10H.5V2l9 6zm0-2l-9-6h18l-9 6z"
  }));
};

exports.EmailIcon = EmailIcon;