"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RewardCardDiamondBadge = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _iconBadge = require("../../../../components/notifications/icon-badge");

var _diamondIcon = require("../../../../components/icons/diamond-icon");

var RewardCardDiamondBadge = function RewardCardDiamondBadge(_ref) {
  var children = _ref.children,
      className = _ref.className,
      disabled = _ref.disabled,
      props = (0, _objectWithoutProperties2.default)(_ref, ["children", "className", "disabled"]);
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, props, {
    className: (0, _classnames.default)('k-RewardCard__diamondBadge', className, {
      'k-RewardCard__diamondBadge--disabled': disabled
    })
  }), /*#__PURE__*/_react.default.createElement(_iconBadge.IconBadge, {
    big: true,
    disabled: disabled
  }, /*#__PURE__*/_react.default.createElement(_diamondIcon.DiamondIcon, {
    className: "k-RewardCard__diamondBadge__diamondIcon k-IconBadge__svg",
    "aria-hidden": true
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-RewardCard__diamondBadge__content"
  }, children));
};

exports.RewardCardDiamondBadge = RewardCardDiamondBadge;
RewardCardDiamondBadge.propTypes = {
  disabled: _propTypes.default.bool,
  children: _propTypes.default.node
};
RewardCardDiamondBadge.defaultProps = {
  disabled: false,
  children: null
};