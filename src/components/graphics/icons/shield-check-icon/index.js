"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShieldCheckIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _excluded = ["color", "title"];

var ShieldCheckIcon = function ShieldCheckIcon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    width: "21",
    height: "24",
    viewBox: "0 0 21 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    d: "M20.766 3.461L10.383 0 0 3.461v9.29a10.356 10.356 0 006.391 9.584L10.383 24l3.992-1.665a10.356 10.356 0 006.39-9.583V3.46zm-2.307 9.29a8.053 8.053 0 01-4.969 7.454L10.383 21.5l-3.107-1.296a8.053 8.053 0 01-4.969-7.452v-7.63l8.076-2.692 8.076 2.692v7.63z",
    fill: color
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M6.968 10.014l-1.63 1.63 3.46 3.462c.217.216.51.338.816.338a1.152 1.152 0 00.823-.365l5.768-6.153-1.684-1.577-4.934 5.284-2.62-2.619z",
    fill: color
  }));
};

exports.ShieldCheckIcon = ShieldCheckIcon;
ShieldCheckIcon.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
ShieldCheckIcon.defaultProps = {
  color: '#949494',
  title: ''
};