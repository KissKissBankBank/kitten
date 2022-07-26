"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.BankCardIconNext = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

const BankCardIconNext = _ref => {
  let {
    color,
    title,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    width: "24",
    height: "21",
    viewBox: "0 0 24 21",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none"
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    fill: color,
    fillRule: "evenodd",
    d: "M19 2.7H5a2.7 2.7 0 00-2.7 2.7v10A2.7 2.7 0 005 18.1h14a2.7 2.7 0 002.7-2.7v-10A2.7 2.7 0 0019 2.7zM5 .4a5 5 0 00-5 5v10a5 5 0 005 5h14a5 5 0 005-5v-10a5 5 0 00-5-5H5z",
    clipRule: "evenodd"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fill: color,
    fillRule: "evenodd",
    d: "M23.077 7.821H.923v-2.3h22.154v2.3z",
    clipRule: "evenodd"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fill: color,
    d: "M8 13a2 2 0 11-4 0 2 2 0 014 0z"
  }));
};

exports.BankCardIconNext = BankCardIconNext;
BankCardIconNext.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
BankCardIconNext.defaultProps = {
  color: '#222',
  title: null
};