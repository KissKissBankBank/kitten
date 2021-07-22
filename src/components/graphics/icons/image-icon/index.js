"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var ImageIcon = function ImageIcon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = (0, _objectWithoutProperties2.default)(_ref, ["color", "title"]);
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    width: "22",
    height: "14",
    viewBox: "0 0 22 14",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    d: "M22 0v14H0V0h22zM2 11l5.5-6.545 5.036 5.993L15.5 7.455 20 12V2H2v9z",
    fill: color
  }));
};

exports.ImageIcon = ImageIcon;
ImageIcon.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
ImageIcon.defaultProps = {
  color: '#222',
  title: ''
};