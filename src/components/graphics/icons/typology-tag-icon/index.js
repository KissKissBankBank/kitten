"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.TypologyTagIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

const TypologyTagIcon = _ref => {
  let {
    color,
    title,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 10.5 10.5",
    fill: color
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    d: "M.6 7.8l2.1 2.1c.8.8 2 .8 2.8 0L10.4 5 10 .4 5.5 0 .6 4.9c-.8.8-.8 2.1 0 2.9zm7.3-5.3c.7.5.7 1.5.1 2.2-.6.6-1.6.7-2.2.1s-.7-1.6-.1-2.2 1.6-.7 2.2-.1z"
  }));
};

exports.TypologyTagIcon = TypologyTagIcon;
TypologyTagIcon.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
TypologyTagIcon.defaultProps = {
  color: '#222',
  title: ''
};