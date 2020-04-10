"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CrossCircleIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var CrossCircleIcon = function CrossCircleIcon(_ref) {
  var circleColor = _ref.circleColor,
      crossColor = _ref.crossColor,
      props = (0, _objectWithoutProperties2.default)(_ref, ["circleColor", "crossColor"]);
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20"
  }, props), /*#__PURE__*/_react.default.createElement("title", null, "Cross circle"), /*#__PURE__*/_react.default.createElement("circle", {
    fill: circleColor,
    cx: "10",
    cy: "10",
    r: "10"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fill: crossColor,
    d: "M11.414 10l2.122-2.12-1.415-1.416L10 8.586 7.88 6.464 6.463 7.88 8.586 10l-2.122 2.12 1.415 1.416L10 11.414l2.12 2.122 1.416-1.415L11.414 10z"
  }));
};

exports.CrossCircleIcon = CrossCircleIcon;
CrossCircleIcon.defaultProps = {
  circleColor: '#fff',
  crossColor: '#333'
};