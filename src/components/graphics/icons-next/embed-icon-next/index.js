"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.EmbedIconNext = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _excluded = ["color", "title"];

var EmbedIconNext = function EmbedIconNext(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none"
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    fill: color,
    d: "M10.17 3.6c.15-.53-.09-1.05-.51-1.16-.43-.12-.89.21-1.03.74l-2.8 10.46c-.15.53.09 1.05.51 1.16.43.11.89-.22 1.03-.74l2.8-10.47Zm1.26 8.38a.8.8 0 0 1 0-1.13l1.84-1.83-1.84-1.84a.8.8 0 1 1 1.14-1.13l2.96 2.97-2.96 2.96a.8.8 0 0 1-1.14 0ZM4.57 6.05a.8.8 0 0 1 0 1.13L2.73 9.02l1.84 1.83a.8.8 0 0 1-1.14 1.13L.47 9.02l2.96-2.97a.8.8 0 0 1 1.14 0Z"
  }));
};

exports.EmbedIconNext = EmbedIconNext;
EmbedIconNext.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
EmbedIconNext.defaultProps = {
  color: '#222',
  title: ''
};