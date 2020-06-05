"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmailIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var EmailIcon = function EmailIcon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = (0, _objectWithoutProperties2.default)(_ref, ["color", "title"]);
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    width: "19",
    height: "12",
    viewBox: "0 0 19 12",
    xmlns: "http://www.w3.org/2000/svg",
    fill: color
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    d: "M9.5 8l9-6v10H.5V2l9 6zm0-2l-9-6h18l-9 6z"
  }));
};

exports.EmailIcon = EmailIcon;
EmailIcon.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
EmailIcon.defaultProps = {
  color: '#222',
  title: 'Email'
};