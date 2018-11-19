"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CrossIcon = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var CrossIcon = function CrossIcon(props) {
  return _react.default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 8 8"
  }, props), _react.default.createElement("title", null, "Cross"), _react.default.createElement("path", {
    d: "M.464 6.12L6.12.465 7.537 1.88 1.88 7.535z"
  }), _react.default.createElement("path", {
    d: "M1.88.464L7.535 6.12 6.12 7.537.465 1.88z"
  }));
};

exports.CrossIcon = CrossIcon;