"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.EngagementCard = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _text = require("../../../typography/text");

var _typography = require("../../../../helpers/utils/typography");

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _screenConfig = require("../../../../constants/screen-config");

var _excluded = ["icon", "backgroundColor", "href", "children", "as"];

var StyledCard = _styledComponents.default.div.withConfig({
  displayName: "engagement-card__StyledCard",
  componentId: "sc-17ls2z8-0"
})(["box-sizing:border-box;display:flex;flex-direction:column;border-radius:var(--border-radius-xl);position:relative;overflow:hidden;background-repeat:no-repeat;background-color:", ";background-size:contain;padding:", ";text-decoration:none;border-color:", ";:focus-visible{outline:auto;}@media (min-width:", "){padding:", ";}"], function (_ref) {
  var backgroundColor = _ref.backgroundColor;
  return backgroundColor;
}, (0, _typography.pxToRem)(5), _colorsConfig.default.background1, (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(10));

var StyledText = (0, _styledComponents.default)(_text.Text).withConfig({
  displayName: "engagement-card__StyledText",
  componentId: "sc-17ls2z8-1"
})(["text-align:center;right:", ";left:", ";line-height:1.2;"], (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(10));

var StyledIcon = _styledComponents.default.div.withConfig({
  displayName: "engagement-card__StyledIcon",
  componentId: "sc-17ls2z8-2"
})(["display:flex;align-self:center;align-items:center;height:100%;"]);

var EngagementCard = function EngagementCard(_ref2) {
  var icon = _ref2.icon,
      backgroundColor = _ref2.backgroundColor,
      href = _ref2.href,
      children = _ref2.children,
      as = _ref2.as,
      others = (0, _objectWithoutPropertiesLoose2.default)(_ref2, _excluded);
  return /*#__PURE__*/_react.default.createElement(StyledCard, (0, _extends2.default)({}, others, {
    as: href ? 'a' : 'div',
    href: href,
    backgroundColor: backgroundColor
  }), /*#__PURE__*/_react.default.createElement(StyledIcon, null, icon), /*#__PURE__*/_react.default.createElement(StyledText, {
    size: "micro",
    weight: "regular",
    color: "font1"
  }, children));
};

exports.EngagementCard = EngagementCard;
EngagementCard.propTypes = {
  icon: _propTypes.default.element.isRequired,
  href: _propTypes.default.string,
  backgroundColor: _propTypes.default.string
};
EngagementCard.defaultProps = {
  href: '',
  backgroundColor: ''
};