"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.EllipsisIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _excluded = ["color", "title"];

var EllipsisIcon = function EllipsisIcon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 4",
    width: "16",
    height: "4",
    fill: "none"
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("circle", {
    cx: "2",
    cy: "2",
    r: "2",
    fill: color
  }), /*#__PURE__*/_react.default.createElement("circle", {
    cx: "8",
    cy: "2",
    r: "2",
    fill: color
  }), /*#__PURE__*/_react.default.createElement("circle", {
    cx: "14",
    cy: "2",
    r: "2",
    fill: color
  }));
};

exports.EllipsisIcon = EllipsisIcon;
EllipsisIcon.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
EllipsisIcon.defaultProps = {
  color: '#222',
  title: ''
};