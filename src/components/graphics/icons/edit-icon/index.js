"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.EditIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

const EditIcon = _ref => {
  let {
    color,
    title,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    width: "11",
    height: "16",
    viewBox: "0 0 11 16",
    xmlns: "http://www.w3.org/2000/svg",
    fill: color
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    d: "M8.482 6.469l-4.909 8.503-2.823.89-.641-2.89 4.909-8.503 3.464 2zm2.5-4.33l-1.5 2.598-3.464-2 1.5-2.598 3.464 2z"
  }));
};

exports.EditIcon = EditIcon;
EditIcon.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
EditIcon.defaultProps = {
  color: '#fff',
  title: ''
};