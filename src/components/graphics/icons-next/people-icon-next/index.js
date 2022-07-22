"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.PeopleIconNext = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

const PeopleIconNext = _ref => {
  let {
    color,
    title,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    width: "10",
    height: "12",
    fill: "none",
    viewBox: "0 0 10 12",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    fill: color,
    fillRule: "evenodd",
    d: "M5 6a3 3 0 100-6 3 3 0 000 6zm0 6c2.761 0 5-.714 5-.714C10 8.919 7.761 7 5 7s-5 1.919-5 4.286c0 0 2.239.714 5 .714z",
    clipRule: "evenodd"
  }));
};

exports.PeopleIconNext = PeopleIconNext;
PeopleIconNext.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
PeopleIconNext.defaultProps = {
  color: '#222',
  title: null
};