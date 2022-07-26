"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.PeopleCircleIconNext = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

const PeopleCircleIconNext = _ref => {
  let {
    color,
    title,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "11",
    stroke: color,
    strokeWidth: "2"
  }), /*#__PURE__*/_react.default.createElement("path", {
    stroke: color,
    strokeLinecap: "round",
    strokeWidth: "2",
    d: "M5 20c1.615-2.4 2.692-4 7-4s5.923 2.4 7 4"
  }), /*#__PURE__*/_react.default.createElement("circle", {
    cx: "12",
    cy: "9.5",
    r: "3.5",
    stroke: color,
    strokeWidth: "2"
  }));
};

exports.PeopleCircleIconNext = PeopleCircleIconNext;
PeopleCircleIconNext.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
PeopleCircleIconNext.defaultProps = {
  color: '#222',
  title: null
};