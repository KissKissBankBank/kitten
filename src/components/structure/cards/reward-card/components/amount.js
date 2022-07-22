"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Amount = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _text = require("../../../../typography/text");

const Amount = _ref => {
  let {
    className,
    suffix,
    children,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("p", (0, _extends2.default)({
    className: (0, _classnames.default)('k-RewardCard__drawer', 'k-RewardCard__amount__wrapper', 'k-u-align-center', className)
  }, props), /*#__PURE__*/_react.default.createElement(_text.Text, {
    weight: "700",
    className: "k-RewardCard__amount k-u-block"
  }, children), suffix && /*#__PURE__*/_react.default.createElement(_text.Text, {
    weight: "500",
    transform: "uppercase",
    letterSpacing: "10%",
    className: "k-RewardCard__amount__suffix k-u-block"
  }, suffix));
};

exports.Amount = Amount;