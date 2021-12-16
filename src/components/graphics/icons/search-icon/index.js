"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.SearchIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _excluded = ["iconTitle", "title", "color", "circleProps", "pathProps", "width", "height"];

var SearchIcon = function SearchIcon(_ref) {
  var iconTitle = _ref.iconTitle,
      title = _ref.title,
      color = _ref.color,
      circleProps = _ref.circleProps,
      pathProps = _ref.pathProps,
      width = _ref.width,
      height = _ref.height,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    "aria-label": title,
    width: width,
    height: height,
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", (0, _extends2.default)({
    fill: color,
    d: "M14.7 13.3l-3.5-3.5a1 1 0 00-1.4 1.4l3.5 3.5a1 1 0 001.4-1.4z"
  }, pathProps)), /*#__PURE__*/_react.default.createElement("path", (0, _extends2.default)({
    fill: color,
    d: "M6.3 0a6.3 6.3 0 100 12.6A6.3 6.3 0 006.3 0zm0 2a4.3 4.3 0 110 8.6 4.3 4.3 0 010-8.6z"
  }, circleProps)));
};

exports.SearchIcon = SearchIcon;
SearchIcon.propTypes = {
  title: _propTypes.default.string,
  color: _propTypes.default.string,
  circleProps: _propTypes.default.object,
  pathProps: _propTypes.default.object,
  width: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  height: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string])
};
SearchIcon.defaultProps = {
  title: null,
  color: '#333',
  circleProps: {},
  pathProps: {},
  width: 14,
  height: 14
};