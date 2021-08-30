"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinkedinIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var LinkedinIcon = function LinkedinIcon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = (0, _objectWithoutProperties2.default)(_ref, ["color", "title"]);
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 14 14",
    fill: color
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    d: "M1.622 0a1.62 1.62 0 1 1-.002 3.242A1.62 1.62 0 0 1 1.622 0zm-1.4 13.465H3.02V4.47H.222v8.995zM4.773 4.47h2.68V5.7h.038c.374-.707 1.286-1.452 2.646-1.452 2.83 0 3.353 1.862 3.353 4.284v4.933h-2.796V9.09c0-1.042-.018-2.384-1.452-2.384-1.455 0-1.677 1.137-1.677 2.31v4.45H4.773V4.47"
  }));
};

exports.LinkedinIcon = LinkedinIcon;
LinkedinIcon.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
LinkedinIcon.defaultProps = {
  color: '#222',
  title: ''
};