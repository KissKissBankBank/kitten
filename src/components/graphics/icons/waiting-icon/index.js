"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WaitingIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var WaitingIcon = function WaitingIcon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = (0, _objectWithoutProperties2.default)(_ref, ["color", "title"]);
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 13 3",
    width: "13",
    height: "3"
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    d: "M5 0h3v3H5V0zM0 0h3v3H0V0zm10 0h3v3h-3V0z",
    fill: color,
    fillRule: "nonzero"
  }));
};

exports.WaitingIcon = WaitingIcon;
WaitingIcon.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
WaitingIcon.defaultProps = {
  color: '#fff',
  title: ''
};