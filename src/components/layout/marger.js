"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Marger = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _typographyConfig = _interopRequireDefault(require("kitten/constants/typography-config"));

var Marger = function Marger(_ref) {
  var top = _ref.top,
      bottom = _ref.bottom,
      style = _ref.style,
      props = (0, _objectWithoutProperties2.default)(_ref, ["top", "bottom", "style"]);
  var gutter = 10 / _typographyConfig.default.root; // Transform 10 to .625 for have rem unit.

  var styles = (0, _extends2.default)({}, style, {
    marginTop: top ? "".concat(top * gutter, "rem") : null,
    marginBottom: bottom ? "".concat(bottom * gutter, "rem") : null
  });
  return _react.default.createElement("div", (0, _extends2.default)({
    style: styles
  }, props));
};

exports.Marger = Marger;
Marger.defaultProps = {
  top: 0,
  bottom: 0
};