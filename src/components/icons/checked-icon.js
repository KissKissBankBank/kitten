"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckedIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var CheckedIcon = function CheckedIcon(props) {
  return _react.default.createElement("svg", (0, _extends2.default)({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 11 8"
  }, props), _react.default.createElement("title", null, "Checked"), _react.default.createElement("path", {
    d: "M4.44 7.596L3.024 6.182 8.682.525l1.414 1.414z"
  }), _react.default.createElement("path", {
    d: "M4.44 7.596L.903 4.06l1.414-1.414 3.536 3.536z"
  }));
};

exports.CheckedIcon = CheckedIcon;