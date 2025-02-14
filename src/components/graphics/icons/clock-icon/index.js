"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.ClockIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

const ClockIcon = _ref => {
  let {
    className,
    color,
    bgColor,
    title,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 11 11",
    width: "10",
    height: "10",
    className: (0, _classnames.default)('k-ColorSvg', className)
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("circle", {
    cx: "5.5",
    cy: "5.5",
    r: "5",
    fill: bgColor,
    stroke: color
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M6 5h1.5v1H5V2.5h1z",
    fill: color
  }));
};

exports.ClockIcon = ClockIcon;
ClockIcon.defaultProps = {
  bgColor: '#fff',
  color: '#333',
  title: ''
};
ClockIcon.propTypes = {
  title: _propTypes.default.string,
  bgColor: _propTypes.default.string,
  color: _propTypes.default.string
};