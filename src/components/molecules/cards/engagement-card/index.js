"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EngagementCard = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _text = require("../../../../components/atoms/typography/text");

var _typography = require("../../../../helpers/utils/typography");

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _screenConfig = require("../../../../constants/screen-config");

var StyledCard = _styledComponents.default.div.withConfig({
  displayName: "engagement-card__StyledCard",
  componentId: "sc-184n7il-0"
})(["box-sizing:border-box;display:flex;flex-direction:column;border-radius:", ";position:relative;overflow:hidden;background-repeat:no-repeat;background-color:", ";background-size:contain;padding:", ";text-decoration:none;border-color:", ";@media (min-width:", "){padding:", ";}"], (0, _typography.pxToRem)(15), function (_ref) {
  var backgroundColor = _ref.backgroundColor;
  return backgroundColor;
}, (0, _typography.pxToRem)(5), _colorsConfig.default.background1, (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(10));

var StyledText = (0, _styledComponents.default)(_text.Text).withConfig({
  displayName: "engagement-card__StyledText",
  componentId: "sc-184n7il-1"
})(["text-align:center;right:", ";left:", ";line-height:1.2;"], (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(10));

var StyledIcon = _styledComponents.default.div.withConfig({
  displayName: "engagement-card__StyledIcon",
  componentId: "sc-184n7il-2"
})(["display:flex;align-self:center;align-items:center;height:100%;"]);

var EngagementCard = function EngagementCard(_ref2) {
  var icon = _ref2.icon,
      backgroundColor = _ref2.backgroundColor,
      href = _ref2.href,
      children = _ref2.children,
      as = _ref2.as,
      others = (0, _objectWithoutProperties2.default)(_ref2, ["icon", "backgroundColor", "href", "children", "as"]);
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