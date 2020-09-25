"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Separator = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var Separator = function Separator(_ref) {
  var darker = _ref.darker,
      className = _ref.className,
      props = (0, _objectWithoutProperties2.default)(_ref, ["darker", "className"]);
  var separatorClassName = (0, _classnames.default)('k-Separator', {
    'k-Separator--darker': darker
  }, className);
  return /*#__PURE__*/_react.default.createElement("hr", (0, _extends2.default)({
    className: separatorClassName
  }, props));
};

exports.Separator = Separator;
Separator.defaultProps = {
  className: null,
  darker: false
};