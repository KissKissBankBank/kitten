"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Icon = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _typography = require("../../../../helpers/utils/typography");

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _typographyConfig = _interopRequireDefault(require("../../../../constants/typography-config"));

var _screenConfig = require("../../../../constants/screen-config");

var ICON_SIZE = (0, _typography.pxToRem)(50);

var Icon = _styledComponents.default.span.withConfig({
  displayName: "icon__Icon",
  componentId: "sc-10xnzr-0"
})(["flex-shrink:0;display:flex;align-items:center;justify-content:center;width:", ";height:", ";border-radius:", ";box-sizing:border-box;margin-right:", ";@media (min-width:", "px){margin-right:", ";}background-color:", ";border:2px solid ", ";", ";font-size:", ";img{width:100%;height:100%;min-width:0;}"], ICON_SIZE, ICON_SIZE, ICON_SIZE, (0, _typography.pxToRem)(20), _screenConfig.ScreenConfig.S.min, (0, _typography.pxToRem)(40), _colorsConfig.default.background1, _colorsConfig.default.line1, _typographyConfig.default.fontStyles.regular, (0, _typography.pxToRem)(14));

exports.Icon = Icon;