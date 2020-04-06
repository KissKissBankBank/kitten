"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExportIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var ExportIcon = function ExportIcon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = (0, _objectWithoutProperties2.default)(_ref, ["color", "title"]);
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    width: "14",
    height: "16",
    viewBox: "0 0 14 16",
    xmlns: "http://www.w3.org/2000/svg",
    fill: color
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    d: "M8 4.207v5.414H6V4.207L4.172 6.036 2.757 4.62 7 .38l1.414 1.414 2.829 2.828-1.415 1.415L8 4.207zm4 11.414H0v-6h2v4h10v-4h2v6h-2z"
  }));
};

exports.ExportIcon = ExportIcon;
ExportIcon.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
ExportIcon.defaultProps = {
  color: '#fff',
  title: ''
};