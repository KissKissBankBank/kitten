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

var _deprecated = _interopRequireDefault(require("prop-types-extra/lib/deprecated"));

var SearchIcon = function SearchIcon(_ref) {
  var iconTitle = _ref.iconTitle,
      title = _ref.title,
      color = _ref.color,
      circleProps = _ref.circleProps,
      pathProps = _ref.pathProps,
      width = _ref.width,
      height = _ref.height,
      props = (0, _objectWithoutProperties2.default)(_ref, ["iconTitle", "title", "color", "circleProps", "pathProps", "width", "height"]);
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    role: "img",
    "aria-label": iconTitle || title,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "-0.7 -0.7 18 18",
    width: width,
    height: height
  }, props), (iconTitle || title) && /*#__PURE__*/_react.default.createElement("title", null, iconTitle || title), /*#__PURE__*/_react.default.createElement("circle", (0, _extends2.default)({
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
  iconTitle: (0, _deprecated.default)(_propTypes.default.string, 'Prefere use `title` prop instead'),
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