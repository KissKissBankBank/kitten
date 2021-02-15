"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Amount = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _text = require("../../../typography/text");

var Amount = function Amount(props) {
  return /*#__PURE__*/_react.default.createElement(_text.Text, (0, _extends2.default)({
    tag: "p",
    weight: "bold",
    lineHeight: "1"
  }, props, {
    className: (0, _classnames.default)('k-BackingCard__amount', 'k-BackingCard__drawer', props.className)
  }));
};

exports.Amount = Amount;