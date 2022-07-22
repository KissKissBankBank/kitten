"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Item = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _typography = require("../../../../helpers/utils/typography");

var _typographyConfig = _interopRequireDefault(require("../../../../constants/typography-config"));

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _screenConfig = require("../../../../constants/screen-config");

var _icon = require("./icon");

const Item = _ref => {
  let {
    icon,
    iconProps,
    children,
    ...others
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(StyledItem, others, /*#__PURE__*/_react.default.createElement(_icon.Icon, iconProps, icon), /*#__PURE__*/_react.default.createElement(StyledContent, null, children));
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

const StyledItem = _styledComponents.default.li.withConfig({
  displayName: "item__StyledItem",
  componentId: "sc-1drcg7-0"
})(["display:flex;margin:", " 0;"], (0, _typography.pxToRem)(40));

const StyledContent = _styledComponents.default.div.withConfig({
  displayName: "item__StyledContent",
  componentId: "sc-1drcg7-1"
})(["display:flex;flex-direction:column;justify-content:center;flex:1;", ";color:", ";line-height:1.6;font-size:", ";@media (min-width:", "px){font-size:", ";}"], _typographyConfig.default.fontStyles['400'], _colorsConfig.default.font1, (0, _typography.pxToRem)(14), _screenConfig.ScreenConfig.S.min, (0, _typography.pxToRem)(16));