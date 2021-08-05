"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TagIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var TagIcon = function TagIcon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = (0, _objectWithoutProperties2.default)(_ref, ["color", "title"]);
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    width: "20",
    height: "18",
    viewBox: "0 0 20 18",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    d: "M13.125 0l6.464 3.196-.464 7.196-12.125 7a2 2 0 01-2.732-.732l-4-6.928A2 2 0 011 7l12.125-7zm.072 2.268L2 8.732l4 6.928 11.196-6.464.31-4.798-4.309-2.13zm-.853 3.38a1.5 1.5 0 111.5 2.599 1.5 1.5 0 01-1.5-2.6z",
    fill: color
  }));
};

exports.TagIcon = TagIcon;
TagIcon.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
TagIcon.defaultProps = {
  color: '#222',
  title: ''
};