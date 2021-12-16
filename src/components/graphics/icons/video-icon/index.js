"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.VideoIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _excluded = ["color", "title"];

var VideoIcon = function VideoIcon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
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