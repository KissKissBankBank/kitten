"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.LinkedinIconNext = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

const LinkedinIconNext = _ref => {
  let {
    color,
    title,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    width: "22",
    height: "22",
    viewBox: "0 0 22 22",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.2 3.028a2.528 2.528 0 1 1-5.057 0 2.528 2.528 0 0 1 5.056 0Zm2.386 18.47V7.473h4.181V9.39h.059c.581-1.101 2.002-2.265 4.123-2.265 4.416 0 5.23 2.904 5.23 6.683V21.5H16.82v-6.822c0-1.626-.027-3.719-2.266-3.719-2.27 0-2.614 1.773-2.614 3.603V21.5H7.586ZM4.851 7.473H.49v14.027h4.362V7.472Z",
    fill: color
  }));
};

exports.LinkedinIconNext = LinkedinIconNext;
LinkedinIconNext.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
LinkedinIconNext.defaultProps = {
  color: '#fff',
  title: null
};