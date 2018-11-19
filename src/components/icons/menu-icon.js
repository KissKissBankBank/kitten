"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuIcon = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var MenuIcon = function MenuIcon(props) {
  return _react.default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 100 100"
  }, props), _react.default.createElement("title", null, "Menu"), _react.default.createElement("path", {
    d: "M0 0 v20 h100 v-20 z"
  }), _react.default.createElement("path", {
    d: "M0 40 v20 h100 v-20 z"
  }), _react.default.createElement("path", {
    d: "M0 80 v20 h100 v-20 z"
  }));
};

exports.MenuIcon = MenuIcon;