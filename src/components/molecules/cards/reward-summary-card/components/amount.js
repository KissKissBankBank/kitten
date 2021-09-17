"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Amount = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _text = require("../../../../../components/atoms/typography/text");

var Amount = function Amount(props) {
  return /*#__PURE__*/_react.default.createElement(_text.Text, (0, _extends2.default)({
    color: "font1",
    weight: "light",
    size: "tiny"
  }, props, {
    className: (0, _classnames.default)('k-RewardSummaryCard__amount', props.className)
  }));
};

exports.Amount = Amount;