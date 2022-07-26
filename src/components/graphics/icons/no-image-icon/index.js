"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.NoImageIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

const NoImageIcon = _ref => {
  let {
    color,
    title,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    width: "39",
    height: "39",
    viewBox: "0 0 39 39",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    d: "M18.772 29.112c-4.555 0-8.206-3.693-8.206-8.248 0-1.395.328-2.667.943-3.816l-6.893-6.893c-1.887.205-3.365 1.847-3.365 3.816v14.853a3.809 3.809 0 003.816 3.816h22.034l-4.472-4.513a8.158 8.158 0 01-3.857.985z",
    fill: color
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M18.772 26.732a5.53 5.53 0 002.051-.37l-7.55-7.549a5.53 5.53 0 00-.369 2.052 5.866 5.866 0 005.868 5.867zM38.59 36.538l-4.35-4.35c1.231-.656 2.093-1.928 2.093-3.405V13.93c0-2.092-1.723-3.816-3.816-3.816h-6.811L24.229 7.16c-.328-.657-1.026-1.108-1.764-1.108h-7.386c-.739 0-1.436.451-1.764 1.108l-1.396 2.749L2.482.431a1.437 1.437 0 00-2.051 0 1.437 1.437 0 000 2.051L36.538 38.59c.287.287.657.41 1.026.41.37 0 .739-.123 1.026-.41a1.515 1.515 0 000-2.052zm-19.818-23.88c4.554 0 8.247 3.693 8.247 8.206 0 1.19-.287 2.34-.739 3.365l-1.846-1.805a6.16 6.16 0 00.205-1.519 5.866 5.866 0 00-5.867-5.867 6.16 6.16 0 00-1.518.205l-1.847-1.846c1.026-.493 2.175-.739 3.365-.739z",
    fill: color
  }));
};

exports.NoImageIcon = NoImageIcon;
NoImageIcon.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
NoImageIcon.defaultProps = {
  color: '#d8d8d8',
  title: ''
};