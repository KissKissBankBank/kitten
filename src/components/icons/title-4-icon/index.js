"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title4Icon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var Title4Icon = function Title4Icon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = (0, _objectWithoutProperties2.default)(_ref, ["color", "title"]);
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    width: "15",
    height: "12",
    viewBox: "0 0 15 12",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    d: "M5.968 11.2V2.56h3.04V0H0v2.56h3.04v8.64h2.928zm7.892-.2V9.63h.97V8.04h-.97V4h-2.28L9 8.09v1.54h3.03V11h1.83zm-1.83-2.96h-1.27l1.27-2.02v2.02z",
    fill: color
  }));
};

exports.Title4Icon = Title4Icon;
Title4Icon.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
Title4Icon.defaultProps = {
  color: '#222',
  title: ''
};