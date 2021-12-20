"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.ClockCircleIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _deprecated = _interopRequireDefault(require("prop-types-extra/lib/deprecated"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _excluded = ["color", "bgColor", "circleColor", "clockColor", "title", "className"];

var ClockCircleIcon = function ClockCircleIcon(_ref) {
  var color = _ref.color,
      bgColor = _ref.bgColor,
      circleColor = _ref.circleColor,
      clockColor = _ref.clockColor,
      title = _ref.title,
      className = _ref.className,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    className: (0, _classnames.default)('k-ColorSvg', className),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20"
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("circle", {
    fill: circleColor || bgColor,
    cx: "10",
    cy: "10",
    r: "10"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fill: clockColor || color,
    d: "M11 9h3v2H9V4h2v5z"
  }));
};

exports.ClockCircleIcon = ClockCircleIcon;
ClockCircleIcon.defaultProps = {
  bgColor: '#fff',
  color: '#333',
  title: ''
};
ClockCircleIcon.propTypes = {
  title: _propTypes.default.string,
  bgColor: _propTypes.default.string,
  color: _propTypes.default.string,
  circleColor: (0, _deprecated.default)(_propTypes.default.string, '`circleColor` is deprecated. Please use `bgColor` instead.'),
  clockColor: (0, _deprecated.default)(_propTypes.default.string, '`clockColor` is deprecated. Please use `color` instead.')
};