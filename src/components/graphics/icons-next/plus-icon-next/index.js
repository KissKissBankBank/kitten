"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.PlusIconNext = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _excluded = ["color", "title"];

var PlusIconNext = function PlusIconNext(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    d: "M5 1v10a1 1 0 0 0 2 0V1a1 1 0 0 0-2 0Z",
    fill: color
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M11 4.75H1a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2Z",
    fill: color
  }));
};

exports.PlusIconNext = PlusIconNext;
PlusIconNext.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
PlusIconNext.defaultProps = {
  color: '#222',
  title: null
};