"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessengerIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var MessengerIcon = function MessengerIcon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = (0, _objectWithoutProperties2.default)(_ref, ["color", "title"]);
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    viewBox: "0 0 20 21",
    fill: color
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    d: "M10 .938c-5.523 0-10 4.171-10 9.317 0 2.932 1.454 5.547 3.727 7.255v3.552l3.405-1.88c.908.253 1.871.39 2.868.39 5.523 0 10-4.172 10-9.317C20 5.109 15.523.938 10 .938zm.994 12.546l-2.547-2.732-4.969 2.732 5.466-5.838 2.609 2.733 4.907-2.733-5.466 5.838z"
  }));
};

exports.MessengerIcon = MessengerIcon;
MessengerIcon.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
MessengerIcon.defaultProps = {
  color: '#fff',
  title: ''
};