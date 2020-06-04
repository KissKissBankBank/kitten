"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RewardCardCheckedIcon = void 0;

var _react = _interopRequireDefault(require("react"));

var _iconBadge = require("../../../../components/notifications/icon-badge");

var _checkedIcon = require("../../../../components/icons/checked-icon");

var RewardCardCheckedIcon = function RewardCardCheckedIcon() {
  return /*#__PURE__*/_react.default.createElement(_iconBadge.IconBadge, {
    valid: true,
    className: "k-LegacyRewardCard__iconBadge"
  }, /*#__PURE__*/_react.default.createElement(_checkedIcon.CheckedIcon, {
    className: "k-IconBadge__svg"
  }));
};

exports.RewardCardCheckedIcon = RewardCardCheckedIcon;