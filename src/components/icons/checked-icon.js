"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckedIcon = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var CheckedIcon = function CheckedIcon(props) {
  return _react.default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 11 8"
  }, props), _react.default.createElement("title", null, "Checked"), _react.default.createElement("path", {
    d: "M4.44 7.596L3.024 6.182 8.682.525l1.414 1.414z"
  }), _react.default.createElement("path", {
    d: "M4.44 7.596L.903 4.06l1.414-1.414 3.536 3.536z"
  }));
};

exports.CheckedIcon = CheckedIcon;