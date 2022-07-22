"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Info = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _text = require("../../../../typography/text");

const Info = _ref => {
  let {
    className,
    legend,
    value,
    fullWidth = false,
    ...props
  } = _ref;
  console.warn('This subcomponent is deprecated. Please use another one.');
  return /*#__PURE__*/_react.default.createElement("p", (0, _extends2.default)({
    className: (0, _classnames.default)('k-RewardCard__info', 'k-u-size-small', 'k-u-line-height-normal', className, {
      'k-RewardCard__halfDrawer': !fullWidth,
      'k-RewardCard__drawer': fullWidth
    })
  }, props), /*#__PURE__*/_react.default.createElement(_text.Text, {
    className: "k-RewardCard__info__legend",
    weight: "500",
    size: "small",
    lineHeight: "normal"
  }, legend), ' ', /*#__PURE__*/_react.default.createElement(_text.Text, {
    className: "k-RewardCard__info__value",
    weight: "400",
    size: "small",
    lineHeight: "normal"
  }, value));
};

exports.Info = Info;