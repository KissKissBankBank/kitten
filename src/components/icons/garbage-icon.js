"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GarbageIcon = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var GarbageIcon = function GarbageIcon(props) {
  return _react.default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 12 14"
  }, props), _react.default.createElement("title", null, "Garbage"), _react.default.createElement("path", {
    d: "M4.3 0h3v2h-3zM0 2h12v1H0zm1 2l1 10h8l1-10H1zm3.5 8h-1V6h1v6zm2 0h-1V6h1v6zm2 0h-1V6h1v6z"
  }));
};

exports.GarbageIcon = GarbageIcon;