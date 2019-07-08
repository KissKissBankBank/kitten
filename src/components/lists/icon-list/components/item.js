"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Item = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _typography = require("../../../../helpers/utils/typography");

var _typographyConfig = _interopRequireDefault(require("../../../../constants/typography-config"));

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _screenConfig = require("../../../../constants/screen-config");

var _icon = require("./icon");

var Item = function Item(_ref) {
  var icon = _ref.icon,
      iconProps = _ref.iconProps,
      children = _ref.children,
      others = (0, _objectWithoutProperties2.default)(_ref, ["icon", "iconProps", "children"]);
  return _react.default.createElement(StyledItem, others, _react.default.createElement(_icon.Icon, iconProps, icon), _react.default.createElement(StyledContent, null, children));
};

exports.Item = Item;
Item.propTypes = {
  icon: _propTypes.default.node,
  iconProps: _propTypes.default.object
};
Item.defaultProps = {
  icon: null,
  iconProps: {}
};

var StyledItem = _styledComponents.default.li.withConfig({
  displayName: "item__StyledItem",
  componentId: "oehw93-0"
})(["display:flex;margin:", " 0;"], (0, _typography.pxToRem)(40));

var StyledContent = _styledComponents.default.div.withConfig({
  displayName: "item__StyledContent",
  componentId: "oehw93-1"
})(["display:flex;flex-direction:column;justify-content:center;flex:1;", ";color:", ";line-height:1.6;font-size:", ";@media (min-width:", "px){font-size:", ";}"], _typographyConfig.default.fontStyles.light, _colorsConfig.default.font1, (0, _typography.pxToRem)(14), _screenConfig.ScreenConfig.S.min, (0, _typography.pxToRem)(16));