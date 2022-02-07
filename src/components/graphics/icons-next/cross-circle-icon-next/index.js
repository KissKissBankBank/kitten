"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.CrossCircleIconNext = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _excluded = ["color", "title"];

var CrossCircleIconNext = function CrossCircleIconNext(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    width: "25",
    height: "25",
    viewBox: "0 0 25 25",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none"
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    fill: color,
    fillRule: "evenodd",
    d: "M12.048 22a9.6 9.6 0 009.6-9.6 9.6 9.6 0 10-9.6 9.6zm0 2.4c6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12-6.627 0-12 5.372-12 12 0 6.627 5.373 12 12 12z",
    clipRule: "evenodd"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fill: color,
    fillRule: "evenodd",
    d: "M16.359 9.854a1.25 1.25 0 00-1.768-1.768l-2.544 2.545-2.545-2.545a1.25 1.25 0 00-1.768 1.768l2.545 2.545-2.545 2.544a1.25 1.25 0 001.768 1.768l2.545-2.545 2.544 2.545a1.25 1.25 0 101.768-1.768L13.814 12.4l2.545-2.545z",
    clipRule: "evenodd"
  }));
};

exports.CrossCircleIconNext = CrossCircleIconNext;
CrossCircleIconNext.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
CrossCircleIconNext.defaultProps = {
  color: '#222',
  title: null
};