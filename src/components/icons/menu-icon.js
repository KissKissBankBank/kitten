"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var MenuIcon = function MenuIcon(props) {
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 100 100"
  }, props), /*#__PURE__*/_react.default.createElement("title", null, "Menu"), /*#__PURE__*/_react.default.createElement("path", {
    d: "M0 0 v20 h100 v-20 z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M0 40 v20 h100 v-20 z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M0 80 v20 h100 v-20 z"
  }));
};

exports.MenuIcon = MenuIcon;