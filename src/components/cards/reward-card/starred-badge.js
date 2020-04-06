"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RewardCardStarredBadge = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _iconBadge = require("../../../components/notifications/icon-badge");

var _starIcon = require("../../../components/icons/star-icon");

var _typography = require("../../../helpers/utils/typography");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var StyledBase = (0, _styledComponents.default)(function (_ref) {
  var disabled = _ref.disabled,
      props = (0, _objectWithoutProperties2.default)(_ref, ["disabled"]);
  return /*#__PURE__*/_react.default.createElement("div", props);
}).withConfig({
  displayName: "starred-badge__StyledBase",
  componentId: "sc-1bjkj6l-0"
})(["display:flex;line-height:1rem;align-items:center;margin-bottom:", ";& > * + *{margin-left:", ";}", ""], (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(10), function (_ref2) {
  var disabled = _ref2.disabled;
  return disabled && (0, _styledComponents.css)(["color:", ";cursor:not-allowed;"], _colorsConfig.default.font2);
});

var StyledContent = _styledComponents.default.div.withConfig({
  displayName: "starred-badge__StyledContent",
  componentId: "sc-1bjkj6l-1"
})(["display:flex;flex-direction:column;"]);

var StyledStarIcon = (0, _styledComponents.default)(_starIcon.StarIcon).withConfig({
  displayName: "starred-badge__StyledStarIcon",
  componentId: "sc-1bjkj6l-2"
})(["height:", ";width:", ";"], (0, _typography.pxToRem)(14), (0, _typography.pxToRem)(14));

var RewardCardStarredBadge = function RewardCardStarredBadge(_ref3) {
  var children = _ref3.children,
      disabled = _ref3.disabled;
  return /*#__PURE__*/_react.default.createElement(StyledBase, {
    disabled: disabled
  }, /*#__PURE__*/_react.default.createElement(_iconBadge.IconBadge, {
    big: true,
    disabled: disabled
  }, /*#__PURE__*/_react.default.createElement(StyledStarIcon, {
    className: "k-IconBadge__svg",
    "aria-hidden": true
  })), /*#__PURE__*/_react.default.createElement(StyledContent, null, children));
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