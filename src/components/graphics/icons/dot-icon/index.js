"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.DotIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

const DotIcon = _ref => {
  let {
    color,
    title,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 6 6",
    width: "6",
    height: "6"
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("circle", {
    cx: "3",
    cy: "3",
    r: "3",
    fill: color
  }));
};

exports.DotIcon = DotIcon;
DotIcon.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
DotIcon.defaultProps = {
  color: '#fff',
  title: ''
};