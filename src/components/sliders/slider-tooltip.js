"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SliderTooltip = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var SliderTooltip = function SliderTooltip(_ref) {
  var className = _ref.className,
      percentage = _ref.percentage,
      children = _ref.children;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('k-SliderTooltip', className)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "k-SliderTooltip__tip"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "k-SliderTooltip__tip__content",
    style: {
      left: percentage
    }
  }, children)), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-SliderTooltip__arrow"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "k-SliderTooltip__arrow__content",
    style: {
      left: percentage
    }
  })));
}; // DEPRECATED: do not use default export.


exports.SliderTooltip = SliderTooltip;
var _default = SliderTooltip;
exports.default = _default;