"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title3Icon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var Title3Icon = function Title3Icon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = (0, _objectWithoutProperties2.default)(_ref, ["color", "title"]);
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    width: "15",
    height: "12",
    viewBox: "0 0 15 12",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    d: "M11.61 4c1.18 0 2.46.57 2.46 1.94 0 .72-.41 1.25-.77 1.52.51.33.95.87.95 1.65 0 1.38-1.18 2.12-2.69 2.12-1.12 0-2.02-.59-2.56-1.24l1.15-1.15c.44.54.9.8 1.43.8.57 0 .84-.29.84-.64 0-.5-.4-.67-.98-.67h-.69V6.78h.58c.64 0 .92-.22.92-.61 0-.35-.28-.58-.68-.58-.52 0-.9.24-1.28.71L9.17 5.18C9.78 4.47 10.55 4 11.61 4zM9.008 0v2.56h-3.04v8.64H3.04V2.56H0V0h9.008z",
    fill: color
  }));
};

exports.Title3Icon = Title3Icon;
Title3Icon.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
Title3Icon.defaultProps = {
  color: '#222',
  title: ''
};