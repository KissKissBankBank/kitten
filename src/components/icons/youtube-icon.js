"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.YoutubeIcon = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var YoutubeIcon = function YoutubeIcon(props) {
  return _react.default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 176 124"
  }, props), _react.default.createElement("title", null, "Youtube"), _react.default.createElement("path", {
    d: "M172.3 19.4c-2-7.6-8-13.6-15.6-15.7C143 0 88 0 88 0S33 0 19.2 3.7c-7.6 2-13.5 8-15.6 15.7C0 33.2 0 62 0 62s0 28.8 3.7 42.6c2 7.6 8 13.6 15.6 15.7C33 124 88 124 88 124s55 0 68.8-3.7c7.6-2 13.5-8 15.6-15.7C176 90.8 176 62 176 62s0-28.8-3.7-42.6zM70 88.2V35.8L116 62 70 88.2z"
  }));
};

exports.YoutubeIcon = YoutubeIcon;