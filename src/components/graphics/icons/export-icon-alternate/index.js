"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExportIconAlternate = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var ExportIconAlternate = function ExportIconAlternate(_ref) {
  var color = _ref.color,
      iconTitle = _ref.iconTitle,
      title = _ref.title,
      props = (0, _objectWithoutProperties2.default)(_ref, ["color", "iconTitle", "title"]);
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    role: "img",
    "aria-label": iconTitle || title,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 12 12",
    width: "12",
    height: "12",
    fill: color
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    d: "M0 0h4v2H0zM6 0h6v2H6z M0 10h12v2H0z M10 8h2v4h-2zM10 0h2v6h-2z M4.4644661 6.12132034L10.12132033.4644661l1.41421357 1.41421357L5.87867966 7.5355339zM0 0h2v12H0z"
  }));
};

exports.ExportIconAlternate = ExportIconAlternate;
ExportIconAlternate.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
ExportIconAlternate.defaultProps = {
  color: '#000',
  title: ''
};