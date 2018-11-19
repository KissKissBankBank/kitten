"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LockIcon = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var LockIcon = function LockIcon(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react.default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 19"
  }, props), _react.default.createElement("title", null, "Lock"), _react.default.createElement("path", {
    fill: color,
    d: "M1 9.01v7.98c0 .56.448 1.01.994 1.01h12.012c.546 0 .994-.45.994-1.01V9.01c0-.56-.448-1.01-.994-1.01H1.994C1.448 8 1 8.45 1 9.01zm-1 0C0 7.9.895 7 1.994 7h12.012C15.106 7 16 7.902 16 9.01v7.98c0 1.11-.895 2.01-1.994 2.01H1.994C.894 19 0 18.098 0 16.99V9.01z"
  }), _react.default.createElement("rect", {
    fill: color,
    x: "7.5",
    y: "11",
    width: "1",
    height: "4",
    rx: ".5"
  }), _react.default.createElement("circle", {
    fill: color,
    cx: "8",
    cy: "12",
    r: "1"
  }), _react.default.createElement("path", {
    fill: color,
    d: "M5 7h6V4c0-1.654-1.345-3-3-3-1.654 0-3 1.345-3 3v3zM4 4c0-2.21 1.795-4 4-4 2.21 0 4 1.795 4 4v4H4V4z"
  }));
};

exports.LockIcon = LockIcon;
LockIcon.defaultProps = {
  color: '#333'
};