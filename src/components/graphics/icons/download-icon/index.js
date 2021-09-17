"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.DownloadIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _excluded = ["color", "title"];

var DownloadIcon = function DownloadIcon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    width: "12",
    height: "13",
    viewBox: "0 0 12 13",
    xmlns: "http://www.w3.org/2000/svg",
    fill: color
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    d: "M7 4V0H5v4L3.172 2.207l-1.415 1.38L6 8.207l4.243-4.62-1.415-1.38L7 4zM0 8h2v5H0V8zm10 0h2v5h-2V8zM0 11h12v2H0v-2z"
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