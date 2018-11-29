"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InstrumentTagIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var InstrumentTagIcon = function InstrumentTagIcon(props) {
  return _react.default.createElement("svg", (0, _extends2.default)({
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 9 11",
    fill: "#333"
  }, props), _react.default.createElement("title", null, "Instrument tag"), _react.default.createElement("polygon", {
    points: "9,11 0,11 0,0 5,0 5,4 9,4"
  }), _react.default.createElement("polygon", {
    points: "9,3 6,3 6,0"
  }));
};

exports.InstrumentTagIcon = InstrumentTagIcon;