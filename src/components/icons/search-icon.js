"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchIcon = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SearchIcon = function SearchIcon(props) {
  return _react.default.createElement("svg", _extends({
    viewBox: "-0.7 -0.7 18 18",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _react.default.createElement("title", null, "Search"), _react.default.createElement("circle", {
    className: "k-SearchInput__submit__svgCircle",
    cx: "7",
    cy: "7",
    r: "7",
    stroke: "#333",
    strokeWidth: "1.1",
    fill: "none"
  }), _react.default.createElement("path", {
    className: "k-SearchInput__submit__svgPath",
    fill: "#333",
    d: "M13 11 L17 15 L15.5 16.5 L11.5 12.7z"
  }));
};

exports.SearchIcon = SearchIcon;