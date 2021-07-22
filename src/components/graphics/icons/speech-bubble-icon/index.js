"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SpeechBubbleIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var SpeechBubbleIcon = function SpeechBubbleIcon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = (0, _objectWithoutProperties2.default)(_ref, ["color", "title"]);
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    width: "24",
    height: "22",
    viewBox: "0 0 24 22",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    d: "M12 0c6.627 0 12 4.477 12 10 0 2.555-1.15 4.886-3.041 6.653L22 22l-7.351-2.244c-.852.16-1.739.244-2.649.244-6.627 0-12-4.477-12-10S5.373 0 12 0zm0 2C6.405 2 2 5.671 2 10c0 4.329 4.405 8 10 8 .621 0 1.233-.045 1.833-.135l.447-.075.483-.091 4.637 1.416-.616-3.167.809-.756C21.149 13.739 22 11.913 22 10c0-4.329-4.405-8-10-8zM8 8.5a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 018 8.5zm4 0a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 0112 8.5zm4 0a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 0116 8.5z",
    fill: color
  }));
};

exports.SpeechBubbleIcon = SpeechBubbleIcon;
SpeechBubbleIcon.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
SpeechBubbleIcon.defaultProps = {
  color: '#222',
  title: ''
};