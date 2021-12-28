"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.CrossCircleIconNext = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _excluded = ["color", "secondaryColor", "title"];

var CrossCircleIconNext = function CrossCircleIconNext(_ref) {
  var color = _ref.color,
      secondaryColor = _ref.secondaryColor,
      title = _ref.title,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    width: "28",
    height: "28",
    viewBox: "0 0 28 28",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none"
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    fill: color,
    d: "M14 0a14 14 0 1 0 .01 28.01A14 14 0 0 0 14 0Zm0 2a12 12 0 1 1-.01 24.01A12 12 0 0 1 14 2Z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fill: secondaryColor,
    d: "M19.06 11.06a1.5 1.5 0 0 0-2.12-2.12L14 11.88l-2.94-2.94a1.5 1.5 0 0 0-2.12 2.12L11.88 14l-2.94 2.94a1.5 1.5 0 0 0 2.12 2.12L14 16.12l2.94 2.94a1.5 1.5 0 0 0 2.12-2.12L16.12 14l2.94-2.94Z"
  }));
};

exports.CrossCircleIconNext = CrossCircleIconNext;
CrossCircleIconNext.propTypes = {
  color: _propTypes.default.string,
  secondaryColor: _propTypes.default.string,
  title: _propTypes.default.string
};
CrossCircleIconNext.defaultProps = {
  color: '#222',
  secondaryColor: '#006cff',
  title: null
};