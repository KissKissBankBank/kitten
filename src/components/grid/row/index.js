"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Row = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var Row = function Row(_ref) {
  var className = _ref.className,
      contentClassName = _ref.contentClassName,
      centered = _ref.centered,
      light = _ref.light,
      dark = _ref.dark,
      lightTopBorder = _ref.lightTopBorder,
      lightBottomBorder = _ref.lightBottomBorder,
      padded = _ref.padded,
      children = _ref.children,
      others = (0, _objectWithoutProperties2.default)(_ref, ["className", "contentClassName", "centered", "light", "dark", "lightTopBorder", "lightBottomBorder", "padded", "children"]);
  var rowClassName = (0, _classnames.default)('k-Row', {
    'k-Row--centered': centered,
    'k-Row--light': light,
    'k-Row--dark': dark,
    'k-Row--lightTopBorder': lightTopBorder,
    'k-Row--lightBottomBorder': lightBottomBorder,
    'k-Row--padded': padded
  }, className);
  var rowContentClassName = (0, _classnames.default)('k-Row__content', contentClassName);
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: rowClassName
  }, others), /*#__PURE__*/_react.default.createElement("div", {
    className: rowContentClassName
  }, children));
};

exports.Row = Row;
Row.defaultProps = {
  className: null,
  contentClassName: null,
  centered: false,
  light: false,
  dark: false,
  lightTopBorder: false,
  lightBottomBorder: false,
  padded: false
};