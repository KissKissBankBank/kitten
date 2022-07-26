"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.ListIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

const ListIcon = _ref => {
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
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    d: "M2 8v2H0V8h2zm12 0v2H4V8h10zM2 4v2H0V4h2zm12 0v2H4V4h10zM2 0v2H0V0h2zm12 0v2H4V0h10z",
    fill: color
  }));
};

exports.ListIcon = ListIcon;
ListIcon.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
ListIcon.defaultProps = {
  color: '#222',
  title: ''
};