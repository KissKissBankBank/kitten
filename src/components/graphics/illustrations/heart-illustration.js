"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.HeartIllustration = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

const HeartIllustration = _ref => {
  let {
    title,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    xmlns: "http://www.w3.org/2000/svg",
    width: "260",
    height: "228",
    fill: "none",
    viewBox: "0 0 260 228"
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    d: "M257.545 73.973a70.689 70.689 0 0 1-24.099 52.936l-103.653 98.599L22.796 124.306l-.225-.225a70.004 70.004 0 0 1-20.952-49.7c-.037-18.725 7.987-36.676 22.585-50.545C38.83 9.943 58.351 1.973 77.77 1.973a78.607 78.607 0 0 1 51.704 19.053 78.499 78.499 0 0 1 51.714-19.217h.052c42.076 0 76.306 32.407 76.306 72.164Z",
    fill: "#FFB8CB",
    stroke: "#000",
    strokeWidth: "3"
  }));
};

exports.HeartIllustration = HeartIllustration;
HeartIllustration.propTypes = {
  title: _propTypes.default.string
};
HeartIllustration.defaultProps = {
  title: null
};