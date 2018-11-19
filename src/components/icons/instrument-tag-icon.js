"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InstrumentTagIcon = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var InstrumentTagIcon = function InstrumentTagIcon(props) {
  return _react.default.createElement("svg", _extends({
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