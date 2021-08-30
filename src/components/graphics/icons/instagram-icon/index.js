"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InstagramIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var InstagramIcon = function InstagramIcon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = (0, _objectWithoutProperties2.default)(_ref, ["color", "title"]);
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 70 70",
    fill: color
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    d: "M17 0A17 17 0 0 0 0 17v36a17 17 0 0 0 17 17h36a17 17 0 0 0 17-17V17A17 17 0 0 0 53 0zm0 6h36a10.91 10.91 0 0 1 11 11v36a10.91 10.91 0 0 1-11 11H17A10.91 10.91 0 0 1 6 53V17A10.91 10.91 0 0 1 17 6zm38 6a4 4 0 1 0 4 4 4 4 0 0 0-4-4zm-20 6a17 17 0 1 0 17 17 17 17 0 0 0-17-17zm0 6a11 11 0 1 1-11 11 11 11 0 0 1 11-11z"
  }));
};

exports.InstagramIcon = InstagramIcon;
InstagramIcon.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
InstagramIcon.defaultProps = {
  color: '#222',
  title: ''
};