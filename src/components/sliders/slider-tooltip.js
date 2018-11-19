"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SliderTooltip = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SliderTooltip = function SliderTooltip(_ref) {
  var className = _ref.className,
      percentage = _ref.percentage,
      children = _ref.children;
  return _react.default.createElement("div", {
    className: (0, _classnames.default)('k-SliderTooltip', className)
  }, _react.default.createElement("div", {
    className: "k-SliderTooltip__tip"
  }, _react.default.createElement("div", {
    className: "k-SliderTooltip__tip__content",
    style: {
      left: percentage
    }
  }, children)), _react.default.createElement("div", {
    className: "k-SliderTooltip__arrow"
  }, _react.default.createElement("div", {
    className: "k-SliderTooltip__arrow__content",
    style: {
      left: percentage
    }
  })));
}; // DEPRECATED: do not use default export.


exports.SliderTooltip = SliderTooltip;
var _default = SliderTooltip;
exports.default = _default;