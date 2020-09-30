"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FacebookIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var FacebookIcon = function FacebookIcon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = (0, _objectWithoutProperties2.default)(_ref, ["color", "title"]);
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 8 15",
    fill: color
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    d: "M4.785 14.196V7.72H6.96l.324-2.523h-2.5v-1.61c0-.732.204-1.23 1.252-1.23h1.336V.1C7.142.07 6.348 0 5.425 0 3.498 0 2.18 1.176 2.18 3.336v1.86H0v2.525h2.18v6.476h2.605z"
  }));
};

exports.FacebookIcon = FacebookIcon;
FacebookIcon.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
FacebookIcon.defaultProps = {
  color: '#222',
  title: ''
};