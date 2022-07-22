"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.VideoIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

const VideoIcon = _ref => {
  let {
    color,
    title,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    width: "22",
    height: "16",
    viewBox: "0 0 22 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    d: "M17 0a5 5 0 015 5v6a5 5 0 01-5 5H5a5 5 0 01-5-5V5a5 5 0 015-5h12zM9 5v6l6-3-6-3z",
    fill: color
  }));
};

exports.VideoIcon = VideoIcon;
VideoIcon.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
VideoIcon.defaultProps = {
  color: '#222',
  title: ''
};