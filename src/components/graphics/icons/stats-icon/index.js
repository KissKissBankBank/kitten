"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StatsIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var StatsIcon = function StatsIcon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = (0, _objectWithoutProperties2.default)(_ref, ["color", "title"]);
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    d: "M18 16v2H0v-2h18zM3 8v6H0V8h3zm5-8v14H5V0h3zm5 5v9h-3V5h3zm5 5v4h-3v-4h3z",
    fill: color
  }));
};

exports.StatsIcon = StatsIcon;
StatsIcon.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
StatsIcon.defaultProps = {
  color: '#222',
  title: ''
};