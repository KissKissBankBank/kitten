"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.HourglassIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _excluded = ["color", "title"];

var HourglassIcon = function HourglassIcon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    width: "7",
    height: "12",
    viewBox: "0 0 7 12",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    d: "M6.5002-.0003v3.107l-2.263 2.643 2.263 2.644v3.106h-6.5v-3.106l2.263-2.644-2.263-2.643v-3.107h6.5zm-3.25 6.904l-1.75 2.044v1.052l.422-.001.974-.974a.5011.5011 0 01.638-.058l.069.058.974.974.423.001v-1.051l-1.75-2.045zm1.75-5.404h-3.5v1.052l.676.789c.01-.001.02-.001.031-.001h2.053l.061.004.679-.793v-1.051z",
    fill: color
  }));
};

exports.HourglassIcon = HourglassIcon;
HourglassIcon.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
HourglassIcon.defaultProps = {
  color: '#222',
  title: ''
};