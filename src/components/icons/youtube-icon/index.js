"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.YoutubeIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var YoutubeIcon = function YoutubeIcon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = (0, _objectWithoutProperties2.default)(_ref, ["color", "title"]);
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 176 124",
    fill: color
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    d: "M172.3 19.4c-2-7.6-8-13.6-15.6-15.7C143 0 88 0 88 0S33 0 19.2 3.7c-7.6 2-13.5 8-15.6 15.7C0 33.2 0 62 0 62s0 28.8 3.7 42.6c2 7.6 8 13.6 15.6 15.7C33 124 88 124 88 124s55 0 68.8-3.7c7.6-2 13.5-8 15.6-15.7C176 90.8 176 62 176 62s0-28.8-3.7-42.6zM70 88.2V35.8L116 62 70 88.2z"
  }));
};

exports.YoutubeIcon = YoutubeIcon;
YoutubeIcon.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
YoutubeIcon.defaultProps = {
  color: '#222',
  title: ''
};