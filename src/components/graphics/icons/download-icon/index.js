"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.DownloadIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

const DownloadIcon = _ref => {
  let {
    color,
    title,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    fill: color
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13 12.586V4h-2v8.586l-2.293-2.293-1.414 1.414L12 16.414l4.707-4.707-1.414-1.414L13 12.586ZM2 19v-4h2v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4h2v4a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Z"
  }));
};

exports.DownloadIcon = DownloadIcon;
DownloadIcon.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
DownloadIcon.defaultProps = {
  color: '#fff',
  title: ''
};