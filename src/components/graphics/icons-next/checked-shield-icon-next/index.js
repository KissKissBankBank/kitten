"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.CheckedShieldIconNext = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _excluded = ["color", "title"];

var CheckedShieldIconNext = function CheckedShieldIconNext(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    width: "21",
    height: "25",
    viewBox: "0 0 21 25",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none"
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    fill: color,
    d: "M20.814 3.86L10.431.4.048 3.86v9.292a10.356 10.356 0 006.392 9.583L10.43 24.4l3.992-1.665a10.356 10.356 0 006.391-9.583V3.86zm-2.307 9.292a8.053 8.053 0 01-4.969 7.452L10.431 21.9l-3.107-1.296a8.053 8.053 0 01-4.968-7.452v-7.63L10.43 2.83l8.076 2.692v7.63z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fill: color,
    d: "M7.832 11.23A1.153 1.153 0 106.2 12.86l2.646 2.645c.216.217.51.338.815.339a1.155 1.155 0 00.823-.365l4.98-5.312a1.152 1.152 0 10-1.684-1.575l-4.146 4.44-1.803-1.803z"
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