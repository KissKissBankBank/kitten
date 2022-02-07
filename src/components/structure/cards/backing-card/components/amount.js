"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Amount = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _text = require("../../../../typography/text");

var _excluded = ["className", "suffix", "children"];

var Amount = function Amount(_ref) {
  var className = _ref.className,
      suffix = _ref.suffix,
      children = _ref.children,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement("p", (0, _extends2.default)({
    className: (0, _classnames.default)('k-BackingCard__drawer', 'k-BackingCard__amount__wrapper', 'k-u-align-center', className)
  }, props), /*#__PURE__*/_react.default.createElement(_text.Text, {
    weight: "bold",
    className: "k-BackingCard__amount k-u-block"
  }, children), suffix && /*#__PURE__*/_react.default.createElement(_text.Text, {
    weight: "regular",
    transform: "uppercase",
    letterSpacing: "10%",
    className: "k-BackingCard__amount__suffix k-u-block"
  }, suffix));
};

exports.Amount = Amount;