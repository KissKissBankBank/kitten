"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DoubleArrowIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var DoubleArrowIcon = function DoubleArrowIcon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = (0, _objectWithoutProperties2.default)(_ref, ["color", "title"]);
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 8.48 15",
    height: "15",
    width: "8.48"
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    fill: color,
    d: "M0 4.24 L4.24 0 L8.48 4.24 L7.08 5.60 L4.24 2.77 L1.4 5.6 z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fill: color,
    d: "M0 10.76 L4.24 15 L8.48 10.76 L7.08 9.4 L4.24 12.33 L1.4 9.4 z"
  }));
};

exports.DoubleArrowIcon = DoubleArrowIcon;
DoubleArrowIcon.defaultProps = {
  color: _colorsConfig.default.font1,
  title: ''
};
DoubleArrowIcon.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};