"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DocIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var DocIcon = function DocIcon(_ref) {
  var color = _ref.color,
      props = (0, _objectWithoutProperties2.default)(_ref, ["color"]);
  return _react.default.createElement("svg", (0, _extends2.default)({
    width: 14,
    height: 20
  }, props), _react.default.createElement("title", null, "Doc"), _react.default.createElement("path", {
    d: "M7 0v7h7v13H0V0h7zm4 14H3v2h8v-2zm0-4H3v2h8v-2zM9 0l5 5H9V0z",
    fill: color,
    fillRule: "evenodd"
  }));
};

exports.DocIcon = DocIcon;
DocIcon.propTypes = {
  color: _propTypes.default.string
};
DocIcon.defaultProps = {
  color: '#222'
};