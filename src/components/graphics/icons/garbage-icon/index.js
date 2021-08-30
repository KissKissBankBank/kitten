"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GarbageIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var GarbageIcon = function GarbageIcon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = (0, _objectWithoutProperties2.default)(_ref, ["color", "title"]);
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    width: "12",
    height: "14",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 12 14",
    fill: color
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    d: "M4.3 0h3v2h-3zM0 2h12v1H0zm1 2l1 10h8l1-10H1zm3.5 8h-1V6h1v6zm2 0h-1V6h1v6zm2 0h-1V6h1v6z"
  }));
};

exports.GarbageIcon = GarbageIcon;
GarbageIcon.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
GarbageIcon.defaultProps = {
  color: '#fff',
  title: ''
};