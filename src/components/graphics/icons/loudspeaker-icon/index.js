"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoudspeakerIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var LoudspeakerIcon = function LoudspeakerIcon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = (0, _objectWithoutProperties2.default)(_ref, ["color", "title"]);
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    width: "19",
    height: "22",
    viewBox: "0 0 19 22",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    d: "M11.856 0l7 12.124-8.683 2.053.955 3.564 1.3-.75 1 1.731-4.33 2.5-1-1.732 1.237-.714-1.072-4-4.763 2.75L0 11.464l5.196-3L11.856 0zm-.255 3.557L7.605 8.636l2.08 3.602 6.095-1.442-4.18-7.239zm-5.405 6.64l-3.464 2 1.5 2.597 3.464-2-1.5-2.598z",
    fill: color
  }));
};

exports.LoudspeakerIcon = LoudspeakerIcon;
LoudspeakerIcon.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
LoudspeakerIcon.defaultProps = {
  color: '#222',
  title: ''
};