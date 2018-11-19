"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FacebookIcon = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var FacebookIcon = function FacebookIcon(props) {
  return _react.default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 8 15"
  }, props), _react.default.createElement("title", null, "Facebook"), _react.default.createElement("path", {
    d: "M4.785 14.196V7.72H6.96l.324-2.523h-2.5v-1.61c0-.732.204-1.23 1.252-1.23h1.336V.1C7.142.07 6.348 0 5.425 0 3.498 0 2.18 1.176 2.18 3.336v1.86H0v2.525h2.18v6.476h2.605z"
  }));
};

exports.FacebookIcon = FacebookIcon;