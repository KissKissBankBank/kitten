"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.CheckedIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

const CheckedIcon = _ref => {
  let {
    color,
    title,
    ...other
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 11 8",
    width: "11",
    height: "8",
    fill: color
  }, other), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    d: "M.904 4.06l1.414-1.414L4.44 4.768 8.682.525l1.414 1.414L4.44 7.596.904 4.061z"
  }));
};

exports.CheckedIcon = CheckedIcon;
CheckedIcon.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
CheckedIcon.defaultProps = {
  color: '#fff',
  title: ''
};