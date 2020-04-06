"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var SearchIcon = function SearchIcon(_ref) {
  var iconTitle = _ref.iconTitle,
      color = _ref.color,
      circleProps = _ref.circleProps,
      pathProps = _ref.pathProps,
      other = (0, _objectWithoutProperties2.default)(_ref, ["iconTitle", "color", "circleProps", "pathProps"]);
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    viewBox: "-0.7 -0.7 18 18",
    xmlns: "http://www.w3.org/2000/svg"
  }, other), iconTitle && /*#__PURE__*/_react.default.createElement("title", null, iconTitle), /*#__PURE__*/_react.default.createElement("circle", (0, _extends2.default)({
    cx: "7",
    cy: "7",
    r: "7",
    stroke: color,
    strokeWidth: "1.1",
    fill: "none"
  }, circleProps)), /*#__PURE__*/_react.default.createElement("path", (0, _extends2.default)({
    d: "M13 11 L17 15 L15.5 16.5 L11.5 12.7z",
    fill: color
  }, pathProps)));
};

exports.SearchIcon = SearchIcon;
SearchIcon.propTypes = {
  iconTitle: _propTypes.default.string,
  color: _propTypes.default.string,
  circleProps: _propTypes.default.object,
  pathProps: _propTypes.default.object
};
SearchIcon.defaultProps = {
  iconTitle: 'Search',
  color: '#333',
  circleProps: {},
  pathProps: {}
};