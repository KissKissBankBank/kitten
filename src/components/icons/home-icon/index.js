"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HomeIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var HomeIcon = function HomeIcon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = (0, _objectWithoutProperties2.default)(_ref, ["color", "title"]);
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    width: "24",
    height: "20",
    viewBox: "0 0 24 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    d: "M17.633 9.432l2 1.636v8.224h-7v-5c0-.473-.329-.87-.77-.974l-.113-.019-.117-.007a1 1 0 00-.993.883l-.007.117v5h-7v-8.224l2-1.636v7.86h3v-3a3 3 0 012.824-2.995l.176-.005a3 3 0 012.995 2.824l.005.176v3h3v-7.86zm-6-9.432l11.633 9.518L22 11.066 11.633 2.583 1.266 11.066 0 9.518 11.633 0z",
    fill: color
  }));
};

exports.HomeIcon = HomeIcon;
HomeIcon.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
HomeIcon.defaultProps = {
  color: '#222',
  title: ''
};