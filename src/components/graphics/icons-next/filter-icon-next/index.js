"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.FilterIconNext = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _excluded = ["color", "title"];

var FilterIconNext = function FilterIconNext(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    fill: "none",
    viewBox: "0 0 20 20"
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    fill: color,
    d: "M17.15 9.618H8.497a2.55 2.55 0 00-4.785 0H1.85a.85.85 0 000 1.7h1.853a2.55 2.55 0 004.786 0h8.661a.85.85 0 000-1.7zm-11.05 1.7a.85.85 0 110-1.7.85.85 0 010 1.7zm11.05 4.25h-3.553a2.55 2.55 0 00-4.785 0H1.85a.85.85 0 100 1.7h6.953a2.55 2.55 0 004.785 0h3.562a.85.85 0 000-1.7zm-5.95 1.7a.85.85 0 110-1.7.85.85 0 010 1.7zm-9.35-11.9h9.503a2.55 2.55 0 004.786 0h1.011a.85.85 0 000-1.7h-1.003a2.55 2.55 0 00-4.785 0H1.85a.85.85 0 000 1.7zm11.9-1.7a.85.85 0 110 1.7.85.85 0 010-1.7z"
  }));
};

exports.FilterIconNext = FilterIconNext;
FilterIconNext.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
FilterIconNext.defaultProps = {
  color: '#000',
  title: null
};