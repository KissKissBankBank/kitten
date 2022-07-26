"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.FlashIconNext = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

const FlashIconNext = _ref => {
  let {
    color,
    title,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    width: "17",
    height: "20",
    viewBox: "0 0 17 20",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none"
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    fill: color,
    d: "M9.855.095a2.252 2.252 0 0 0-1.317.007 2.121 2.121 0 0 0-1.06.736L.395 10.173a1.901 1.901 0 0 0-.158 2.076c.178.326.449.6.781.79.333.192.716.293 1.106.294h3.542V18c0 .424.143.836.408 1.179.266.342.64.596 1.068.725.429.13.89.128 1.317-.005a2.12 2.12 0 0 0 1.06-.736l7.085-9.334a1.9 1.9 0 0 0 .161-2.078 2.054 2.054 0 0 0-.782-.793 2.226 2.226 0 0 0-1.107-.292h-3.542V1.998c0-.423-.144-.836-.41-1.178A2.125 2.125 0 0 0 9.856.095Zm5.02 8.57L7.79 18v-6.667H2.123l7.084-9.335v6.668h5.668Z"
  }));
};

exports.FlashIconNext = FlashIconNext;
FlashIconNext.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
FlashIconNext.defaultProps = {
  color: '#222',
  title: null
};