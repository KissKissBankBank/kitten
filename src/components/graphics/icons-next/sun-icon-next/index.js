"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.SunIconNext = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _excluded = ["color", "title"];

var SunIconNext = function SunIconNext(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    width: "29",
    height: "29",
    viewBox: "0 0 29 29",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none"
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    fill: color,
    d: "M22.358 8.63l2.389-2.406a1.394 1.394 0 00-1.971-1.971L20.37 6.642a9.757 9.757 0 00-4.467-1.871V1.403a1.403 1.403 0 00-2.806 0V4.79A9.757 9.757 0 008.63 6.66L6.22 4.256a1.39 1.39 0 00-1.965 1.966l2.41 2.409a9.757 9.757 0 00-1.872 4.467h-3.39a1.403 1.403 0 100 2.806H4.79a9.757 9.757 0 001.87 4.467L4.256 22.78a1.39 1.39 0 001.966 1.965l2.409-2.41a9.757 9.757 0 004.467 1.872v3.39a1.403 1.403 0 102.806 0V24.21a9.757 9.757 0 004.467-1.87l2.407 2.403a1.392 1.392 0 001.971-1.966l-2.39-2.407a9.757 9.757 0 001.871-4.467h3.368a1.403 1.403 0 000-2.806H24.21a9.758 9.758 0 00-1.852-4.467zM14.5 21.516a7.016 7.016 0 110-14.033 7.016 7.016 0 010 14.033z"
  }));
};

exports.SunIconNext = SunIconNext;
SunIconNext.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
SunIconNext.defaultProps = {
  color: '#222',
  title: null
};