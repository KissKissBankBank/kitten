"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.LockOutlineIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

const LockOutlineIcon = _ref => {
  let {
    color,
    title,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    width: "21",
    height: "25",
    viewBox: "0 0 21 25",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none"
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    fill: color,
    d: "M10.5 14c-.642 0-1.162.52-1.162 1.161v3.94a1.16 1.16 0 102.323 0v-3.94c0-.641-.52-1.161-1.161-1.161z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fill: color,
    d: "M10.5.4a5.806 5.806 0 00-5.806 5.806V9.69h-.388a4.258 4.258 0 00-4.258 4.258v6.194A4.258 4.258 0 004.306 24.4h12.387a4.258 4.258 0 004.259-4.258v-6.194a4.258 4.258 0 00-4.259-4.258h-.387V6.206A5.806 5.806 0 0010.5.4zM7.016 6.206a3.484 3.484 0 116.968 0V9.69H7.016V6.206zm9.678 5.807a1.935 1.935 0 011.935 1.935v6.194a1.935 1.935 0 01-1.936 1.935H4.306a1.935 1.935 0 01-1.935-1.935v-6.194a1.936 1.936 0 011.935-1.935h12.387z"
  }));
};

exports.LockOutlineIcon = LockOutlineIcon;
LockOutlineIcon.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
LockOutlineIcon.defaultProps = {
  color: '#222',
  title: ''
};