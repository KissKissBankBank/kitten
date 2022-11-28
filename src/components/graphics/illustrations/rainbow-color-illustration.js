"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.RainbowColorIllustration = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

const RainbowColorIllustration = _ref => {
  let {
    title,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    xmlns: "http://www.w3.org/2000/svg",
    width: "304",
    height: "154",
    fill: "none",
    viewBox: "0 0 304 154"
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    d: "M302 151.999h-31.86a118.15 118.15 0 0 0-72.933-109.152A118.143 118.143 0 0 0 33.85 151.999H2C2 69.162 69.16 2.003 152.005 2.003S302 69.163 302 152Z",
    fill: "#1F93FF"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M302 151.999h-31.86a118.15 118.15 0 0 0-72.933-109.152A118.143 118.143 0 0 0 33.85 151.999H2C2 69.162 69.16 2.003 152.005 2.003S302 69.163 302 152Z",
    stroke: "#000",
    strokeWidth: "3",
    strokeMiterlimit: "10"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M270.141 152.003h-29.649A88.49 88.49 0 0 0 89.518 89.596a88.493 88.493 0 0 0-26.01 62.407H33.852a118.145 118.145 0 1 1 236.29 0",
    fill: "#F60044"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M270.141 152.003h-29.649A88.49 88.49 0 0 0 89.518 89.596a88.493 88.493 0 0 0-26.01 62.407H33.852a118.145 118.145 0 1 1 236.29 0Z",
    stroke: "#000",
    strokeWidth: "3",
    strokeMiterlimit: "10"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M240.49 152h-31.994a56.492 56.492 0 0 0-56.495-56.495A56.494 56.494 0 0 0 95.506 152H63.509a88.493 88.493 0 1 1 176.984 0",
    fill: "#FFB8CB"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M240.49 152h-31.994a56.492 56.492 0 0 0-56.495-56.495A56.494 56.494 0 0 0 95.506 152H63.509a88.493 88.493 0 1 1 176.984 0h-.003Z",
    stroke: "#000",
    strokeWidth: "3",
    strokeMiterlimit: "10"
  }));
};

exports.RainbowColorIllustration = RainbowColorIllustration;
RainbowColorIllustration.propTypes = {
  title: _propTypes.default.string
};
RainbowColorIllustration.defaultProps = {
  title: null
};