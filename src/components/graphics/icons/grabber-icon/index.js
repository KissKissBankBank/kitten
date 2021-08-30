"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.GrabberIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var GrabberIcon = function GrabberIcon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = (0, _objectWithoutProperties2.default)(_ref, ["color", "title"]);
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 100 100",
    width: "32",
    height: "32",
    fill: color
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    d: "M0 0 v100 h20 v-100 z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M40 0 v100 h20 v-100 z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M80 0 v100 h20 v-100 z"
  }));
};

exports.GrabberIcon = GrabberIcon;
GrabberIcon.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
GrabberIcon.defaultProps = {
  color: '#222',
  title: ''
}; // DEPRECATED: do not use default export.

var _default = GrabberIcon;
exports.default = _default;