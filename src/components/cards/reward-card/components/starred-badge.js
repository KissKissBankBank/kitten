"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RewardCardStarredBadge = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _iconBadge = require("../../../../components/notifications/icon-badge");

var _starIcon = require("../../../../components/icons/star-icon");

var RewardCardStarredBadge = function RewardCardStarredBadge(_ref) {
  var children = _ref.children,
      className = _ref.className,
      disabled = _ref.disabled,
      props = (0, _objectWithoutProperties2.default)(_ref, ["children", "className", "disabled"]);
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, props, {
    className: (0, _classnames.default)('k-RewardCard__starredBadge', className, {
      'k-RewardCard__starredBadge--disabled': disabled
    })
  }), /*#__PURE__*/_react.default.createElement(_iconBadge.IconBadge, {
    big: true,
    disabled: disabled
  }, /*#__PURE__*/_react.default.createElement(_starIcon.StarIcon, {
    className: "k-RewardCard__starredBadge__starredIcon k-IconBadge__svg",
    "aria-hidden": true
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-RewardCard__starredBadge__content"
  }, children));
};

exports.RewardCardStarredBadge = RewardCardStarredBadge;
RewardCardStarredBadge.propTypes = {
  disabled: _propTypes.default.bool,
  children: _propTypes.default.node
};
RewardCardStarredBadge.defaultProps = {
  disabled: false,
  children: null
};