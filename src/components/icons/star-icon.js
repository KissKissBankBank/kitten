"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StarIcon = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var StarIcon = function StarIcon(props) {
  return _react.default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "18",
    height: "16",
    viewBox: "0 0 18 16"
  }, props), _react.default.createElement("title", null, "Star"), _react.default.createElement("path", {
    d: "M8.999 0l1.93 5.974c.028.09.112.15.206.15l6.274-.013-5.084 3.68a.216.216 0 0 0-.079.242L14.198 16l-5.072-3.7a.216.216 0 0 0-.255 0L3.801 16l1.953-5.967a.216.216 0 0 0-.079-.243L.591 6.111l6.274.012c.094 0 .178-.06.207-.15L8.999 0z"
  }));
};

exports.StarIcon = StarIcon;