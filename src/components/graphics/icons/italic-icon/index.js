"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ItalicIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var ItalicIcon = function ItalicIcon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = (0, _objectWithoutProperties2.default)(_ref, ["color", "title"]);
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    width: "5",
    height: "12",
    viewBox: "0 0 5 12",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    d: "M3.072 3.248c.736 0 1.328-.592 1.328-1.312C4.4 1.2 3.808.608 3.072.608c-.736 0-1.312.592-1.312 1.328 0 .72.576 1.312 1.312 1.312zM2.816 12L3.92 4.16H1.632L.528 12h2.288z",
    fill: color
  }));
};

exports.ItalicIcon = ItalicIcon;
ItalicIcon.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
ItalicIcon.defaultProps = {
  color: '#222',
  title: ''
};