"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LocationIcon = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends3 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var LocationIcon = function LocationIcon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = (0, _objectWithoutProperties2.default)(_ref, ["color", "title"]);
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends3.default)((0, _defineProperty2.default)({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 12 15",
    fill: "#222",
    width: "12",
    height: "15"
  }, "fill", color), props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    d: "M6 0C2.686 0 0 2.72 0 6.033 0 7.69.672 9.186 1.758 10.31L6 14.313l4.282-4.094v-.008A6.003 6.003 0 0 0 6 0zm.04 8.4a2.4 2.4 0 1 1 0-4.8 2.4 2.4 0 0 1 0 4.8z"
  }));
};

exports.LocationIcon = LocationIcon;
LocationIcon.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
LocationIcon.defaultProps = {
  color: '#222',
  title: ''
};