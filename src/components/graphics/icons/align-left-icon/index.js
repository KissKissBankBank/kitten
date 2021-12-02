"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.AlignLeftIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _excluded = ["color", "title"];

var AlignLeftIcon = function AlignLeftIcon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    width: "14",
    height: "10",
    viewBox: "0 0 14 10",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), ">", /*#__PURE__*/_react.default.createElement("path", {
    d: "M9 8v2H0V8h9zm5-4v2H0V4h14zm-3-4v2H0V0h11z",
    fill: color
  }));
};

exports.AlignLeftIcon = AlignLeftIcon;
AlignLeftIcon.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
AlignLeftIcon.defaultProps = {
  color: '#222',
  title: ''
};