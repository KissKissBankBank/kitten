"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Availability = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _text = require("../../../../../components/atoms/typography/text");

var _classnames = _interopRequireDefault(require("classnames"));

var Availability = function Availability(props) {
  return /*#__PURE__*/_react.default.createElement(_text.Text, (0, _extends2.default)({
    color: "font1",
    weight: "light",
    size: "tiny"
  }, props, {
    className: (0, _classnames.default)('k-RewardSummaryCard__availability', props.className, 'k-u-hidden@xs-down')
  }));
};

exports.Availability = Availability;