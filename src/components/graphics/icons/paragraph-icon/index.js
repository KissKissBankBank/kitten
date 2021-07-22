"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ParagraphIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var ParagraphIcon = function ParagraphIcon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = (0, _objectWithoutProperties2.default)(_ref, ["color", "title"]);
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    width: "24",
    height: "12",
    viewBox: "0 0 24 12",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    d: "M4.464 0C7.536 0 9.12 1.424 9.12 3.936c0 2.432-1.584 3.984-4.656 3.984H2.912v3.28H0V0zM19 9v2h-7V9h7zm5-4v2H12V5h12zM4.192 2.56h-1.28v2.8h1.28c1.328 0 2.016-.448 2.016-1.44 0-1.008-.688-1.36-2.016-1.36zM21 1v2h-9V1h9z",
    fill: color
  }));
};

exports.ParagraphIcon = ParagraphIcon;
ParagraphIcon.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
ParagraphIcon.defaultProps = {
  color: '#222',
  title: ''
};