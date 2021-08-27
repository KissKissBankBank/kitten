"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CbIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _excluded = ["className"];

var CbIcon = function CbIcon(_ref) {
  var className = _ref.className,
      props = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 2051.48 845.02",
    width: "36",
    className: (0, _classnames.default)('k-ColorSvg', className)
  }, props), /*#__PURE__*/_react.default.createElement("title", null, "CB"), /*#__PURE__*/_react.default.createElement("path", {
    d: "M2051.48 204.28C2051.48 91.6 1960.21.21 1847.56.03h-743.23v408.73h743.23v-.22c112.65-.17 203.92-91.58 203.92-204.26zm0 433.53c0-112.68-91.27-204.05-203.92-204.25h-743.23v408.76h743.23v-.26c112.65-.18 203.92-91.54 203.92-204.25zM544.31 433.54v-24.78h545.72v-34.44c0-205.23-166.35-371.6-371.58-371.6H371.63C166.39 2.72-.04 169.08-.04 374.32v99.05c0 205.22 166.39 371.6 371.62 371.6h346.86c205.23 0 371.58-166.38 371.58-371.6v-39.83z"
  }));
};

exports.CbIcon = CbIcon;