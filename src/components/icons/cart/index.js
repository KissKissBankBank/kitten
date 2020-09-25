"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cart = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var Cart = function Cart(props) {
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    width: 17,
    height: 16
  }, props), /*#__PURE__*/_react.default.createElement("path", {
    d: "M4.5 6V4a4 4 0 1 1 8 0v2h4l-2 10h-12L.5 6h4zm2 0h4V4a2 2 0 0 0-4 0v2z",
    fill: "#fff",
    fillRule: "evenodd"
  }));
};

exports.Cart = Cart;