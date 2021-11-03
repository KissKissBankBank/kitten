"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckedShieldIconNext = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var CheckedShieldIconNext = function CheckedShieldIconNext(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = (0, _objectWithoutProperties2.default)(_ref, ["color", "title"]);
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    d: "M22.766 3.461 12.383 0 2 3.461v9.29a10.356 10.356 0 0 0 6.391 9.584L12.383 24l3.992-1.665a10.356 10.356 0 0 0 6.39-9.583V3.46Zm-2.307 9.29a8.053 8.053 0 0 1-4.969 7.454L12.383 21.5l-3.107-1.296a8.053 8.053 0 0 1-4.969-7.452v-7.63l8.076-2.692 8.076 2.692v7.63Z",
    fill: color
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "m8.968 10.014-1.63 1.63 3.46 3.461c.216.217.51.339.816.339a1.154 1.154 0 0 0 .823-.365l5.768-6.153-1.684-1.577-4.934 5.284-2.62-2.619Z",
    fill: color
  }));
};

exports.CheckedShieldIconNext = CheckedShieldIconNext;
CheckedShieldIconNext.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
CheckedShieldIconNext.defaultProps = {
  color: '#222',
  title: null
};