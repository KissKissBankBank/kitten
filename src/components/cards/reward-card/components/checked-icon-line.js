"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RewardCardCheckedIconLine = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _iconBadge = require("../../../../components/notifications/icon-badge");

var _checkedIcon = require("../../../../components/icons/checked-icon");

var RewardCardCheckedIconLine = function RewardCardCheckedIconLine(props) {
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, props, {
    className: (0, _classnames.default)('k-RewardCard__checkedIconLine', props.className)
  }), /*#__PURE__*/_react.default.createElement(_iconBadge.IconBadge, {
    valid: true,
    className: "k-RewardCard__iconBadge"
  }, /*#__PURE__*/_react.default.createElement(_checkedIcon.CheckedIcon, {
    className: "k-IconBadge__svg"
  })));
};

exports.RewardCardCheckedIconLine = RewardCardCheckedIconLine;