"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.UploadIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

const UploadIcon = _ref => {
  let {
    color,
    title,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    width: "12",
    height: "13",
    viewBox: "0 0 12 13",
    xmlns: "http://www.w3.org/2000/svg",
    fill: color
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    d: "M7 4.207v4H5v-4L3.172 6 1.757 4.62 6 0 10.243 4.62 8.828 6 7 4.207zM0 8h2v5H0zM10 8h2v5h-2zM0 11h12v2H0z"
  }));
};

exports.UploadIcon = UploadIcon;
UploadIcon.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
UploadIcon.defaultProps = {
  color: '#fff',
  title: ''
};