"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.StarIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

const StarIcon = _ref => {
  let {
    color,
    title,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    xmlns: "http://www.w3.org/2000/svg",
    width: "18",
    height: "16",
    viewBox: "0 0 18 16",
    fill: color
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    d: "M8.999 0l1.93 5.974c.028.09.112.15.206.15l6.274-.013-5.084 3.68a.216.216 0 0 0-.079.242L14.198 16l-5.072-3.7a.216.216 0 0 0-.255 0L3.801 16l1.953-5.967a.216.216 0 0 0-.079-.243L.591 6.111l6.274.012c.094 0 .178-.06.207-.15L8.999 0z"
  }));
};

exports.StarIcon = StarIcon;
StarIcon.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
StarIcon.defaultProps = {
  color: '#222',
  title: ''
};