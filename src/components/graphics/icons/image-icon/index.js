"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.ImageIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

const ImageIcon = _ref => {
  let {
    color,
    title,
    ...props
  } = _ref;
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