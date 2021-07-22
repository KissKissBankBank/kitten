"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FileIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var FileIcon = function FileIcon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = (0, _objectWithoutProperties2.default)(_ref, ["color", "title"]);
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    width: "16",
    height: "20",
    viewBox: "0 0 16 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    d: "M16 20H0V0h11l5 5v15zM10 2H2v16h12V6h-4V2zm1.5 10.25v1.5h-7v-1.5h7zm0-3v1.5h-7v-1.5h7zm-4-3v1.5h-3v-1.5h3z",
    fill: color
  }));
};

exports.FileIcon = FileIcon;
FileIcon.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
FileIcon.defaultProps = {
  color: '#222',
  title: ''
};