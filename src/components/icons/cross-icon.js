"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CrossIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var CrossIcon = function CrossIcon(props) {
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 8 8"
  }, props), /*#__PURE__*/_react.default.createElement("title", null, "Cross"), /*#__PURE__*/_react.default.createElement("path", {
    d: "M.464 6.12L6.12.465 7.537 1.88 1.88 7.535z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M1.88.464L7.535 6.12 6.12 7.537.465 1.88z"
  }));
};

exports.CrossIcon = CrossIcon;