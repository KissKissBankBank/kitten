"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var MenuIcon = function MenuIcon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = (0, _objectWithoutProperties2.default)(_ref, ["color", "title"]);
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 100 100",
    fill: color
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    d: "M0 0 v20 h100 v-20 z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M0 40 v20 h100 v-20 z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M0 80 v20 h100 v-20 z"
  }));
};

exports.MenuIcon = MenuIcon;
MenuIcon.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
MenuIcon.defaultProps = {
  color: '#222',
  title: ''
};