"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StrokeIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var StrokeIcon = function StrokeIcon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = (0, _objectWithoutProperties2.default)(_ref, ["color", "title"]);
  return _react.default.createElement("svg", (0, _extends2.default)({
    width: "8",
    height: "2",
    viewBox: "0 0 8 2",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && _react.default.createElement("title", null, title), _react.default.createElement("path", {
    fill: color,
    d: "M0 0h8v2H0z"
  }));
};

exports.StrokeIcon = StrokeIcon;
StrokeIcon.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
StrokeIcon.defaultProps = {
  color: '#fff',
  title: ''
};