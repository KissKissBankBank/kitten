"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThumbUpIconNext = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var ThumbUpIconNext = function ThumbUpIconNext(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = (0, _objectWithoutProperties2.default)(_ref, ["color", "title"]);
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    d: "M17.142 4.667A3.666 3.666 0 0 0 13.473 1h-1.178l-.656.979L6.426 9.8H1V23h18.365l3.302-8.276a4.658 4.658 0 0 0-4.318-6.39H16.66l.063-.243c.278-1.12.419-2.27.418-3.424ZM6.136 20.8H3.201V12h2.935v8.8Zm12.213-10.267a2.463 2.463 0 0 1 2.447 2.197c.043.4-.013.803-.162 1.177L17.875 20.8H8.337v-9.9l5.136-7.7a1.468 1.468 0 0 1 1.468 1.467 11.92 11.92 0 0 1-.367 2.889l-.734 2.977h4.509Z",
    fill: color
  }));
};

exports.ThumbUpIconNext = ThumbUpIconNext;
ThumbUpIconNext.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
ThumbUpIconNext.defaultProps = {
  color: '#222',
  title: null
};