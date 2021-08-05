"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LockOutlineIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var LockOutlineIcon = function LockOutlineIcon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = (0, _objectWithoutProperties2.default)(_ref, ["color", "title"]);
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    width: "21",
    height: "24",
    viewBox: "0 0 21 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    d: "M10.452 17.806a1.161 1.161 0 100-2.322 1.161 1.161 0 000 2.322z",
    fill: color
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M10.452 0a5.806 5.806 0 00-5.807 5.806V9.29h-.387A4.258 4.258 0 000 13.548v6.194A4.258 4.258 0 004.258 24h12.387a4.258 4.258 0 004.258-4.258v-6.194a4.258 4.258 0 00-4.258-4.258h-.387V5.806A5.807 5.807 0 0010.452 0zM6.968 5.806a3.484 3.484 0 016.967 0V9.29H6.968V5.806zm9.677 5.807a1.935 1.935 0 011.936 1.935v6.194a1.935 1.935 0 01-1.936 1.935H4.258a1.935 1.935 0 01-1.935-1.935v-6.194a1.936 1.936 0 011.935-1.935h12.387z",
    fill: color
  }));
};

exports.LockOutlineIcon = LockOutlineIcon;
LockOutlineIcon.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
LockOutlineIcon.defaultProps = {
  color: '#949494',
  title: ''
};