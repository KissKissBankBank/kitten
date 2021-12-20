"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.EyeIconNext = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _excluded = ["color", "title"];

var EyeIconNext = function EyeIconNext(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    d: "M12 4C3.75 4 1 12 1 12s2.75 8 11 8 11-8 11-8-2.75-8-11-8Zm0 14c-5.459 0-8-4.333-8.776-6C4.001 10.333 6.558 6 12 6s8 4.333 8.776 6c-.777 1.667-3.334 6-8.776 6Z",
    fill: color
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 5.818a1.819 1.819 0 1 1 0-3.637 1.819 1.819 0 0 1 0 3.637Z",
    fill: color
  }));
};

exports.EyeIconNext = EyeIconNext;
EyeIconNext.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
EyeIconNext.defaultProps = {
  color: '#222',
  title: null
};