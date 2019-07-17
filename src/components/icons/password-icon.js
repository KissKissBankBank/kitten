"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PasswordIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var PasswordIcon = function PasswordIcon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = (0, _objectWithoutProperties2.default)(_ref, ["color", "title"]);
  return _react.default.createElement("svg", (0, _extends2.default)({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 18 12",
    fill: color,
    width: "18"
  }, props), title && _react.default.createElement("title", null, title), _react.default.createElement("path", {
    d: "M9 0C4 0 0 4 0 6s4 6 9 6 9-4 9-6-4-6-9-6zm0 10c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"
  }), _react.default.createElement("circle", {
    cx: "9",
    cy: "6",
    r: "2"
  }));
};

exports.PasswordIcon = PasswordIcon;
PasswordIcon.defaultProps = {
  color: '#222',
  title: ''
};