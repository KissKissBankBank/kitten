"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.GarbageIconNext = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

const GarbageIconNext = _ref => {
  let {
    color,
    title,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    width: "16",
    height: "17",
    viewBox: "0 0 16 17",
    xmlns: "http://www.w3.org/2000/svg",
    fill: color
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    d: "M0 3.8c0 .42.35.77.77.77h1.36v.11l.75 9.91c.05.58.31 1.1.75 1.5.43.39 1 .6 1.6.6h5.55c.59 0 1.16-.21 1.59-.6.43-.4.7-.93.74-1.5l.76-9.91v-.11h1.36a.77.77 0 1 0 0-1.55H8.8V1.5a.8.8 0 1 0-1.6 0v1.52H.77a.77.77 0 0 0-.77.77Zm12.27.77-.75 9.91a.7.7 0 0 1-.24.48.76.76 0 0 1-.5.19H5.22a.76.76 0 0 1-.5-.2.7.7 0 0 1-.24-.47l-.75-9.91h8.54Z"
  }));
};

exports.GarbageIconNext = GarbageIconNext;
GarbageIconNext.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
GarbageIconNext.defaultProps = {
  color: '#222',
  title: null
};