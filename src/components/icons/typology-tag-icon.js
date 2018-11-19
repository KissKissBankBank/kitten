"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TypologyTagIcon = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var TypologyTagIcon = function TypologyTagIcon(props) {
  return _react.default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 10.5 10.5"
  }, props), _react.default.createElement("title", null, "Typology tag"), _react.default.createElement("path", {
    d: "M.6 7.8l2.1 2.1c.8.8 2 .8 2.8 0L10.4 5 10 .4 5.5 0 .6 4.9c-.8.8-.8 2.1 0 2.9zm7.3-5.3c.7.5.7 1.5.1 2.2-.6.6-1.6.7-2.2.1s-.7-1.6-.1-2.2 1.6-.7 2.2-.1z"
  }));
};

exports.TypologyTagIcon = TypologyTagIcon;