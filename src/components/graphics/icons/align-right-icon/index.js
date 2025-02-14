"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.AlignRightIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

const AlignRightIcon = _ref => {
  let {
    color,
    title,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    width: "14",
    height: "10",
    viewBox: "0 0 14 10",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), ">", /*#__PURE__*/_react.default.createElement("path", {
    d: "M14 8v2H5V8h9zm0-4v2H0V4h14zm0-4v2H3V0h11z",
    fill: color
  }));
};

exports.AlignRightIcon = AlignRightIcon;
AlignRightIcon.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
AlignRightIcon.defaultProps = {
  color: '#222',
  title: ''
};