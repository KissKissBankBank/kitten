"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Styles = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typography = require("../../../helpers/utils/typography");

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _hexToRgba = require("../../../helpers/utils/hex-to-rgba");

var _screenConfig = require("../../../constants/screen-config");

var Styles = _styledComponents.default.div.withConfig({
  displayName: "styles__Styles",
  componentId: "sc-1eo5kcj-0"
})(["position:relative;&.SingleEntryTable--isSliding .SingleEntryTable__TableContainer{overflow-x:scroll;margin-bottom:", ";border-left:", " solid ", ";border-right:", " solid ", ";background:linear-gradient( to right,white 30%,", " ),linear-gradient(to left,white 30%,", "),radial-gradient( farthest-side at 0 50%,", ",", " ),radial-gradient( farthest-side at 100% 50%,", ",", " );background-repeat:no-repeat;background-size:", " 100%,", " 100%,", " 100%,", " 100%;background-position:0,100%;background-attachment:local,local,scroll,scroll;@media screen and (min-width:0\0){background:", ";}@media (min-width:", "){background-position:0,100%;}}.SingleEntryTable__Table{width:100%;border-spacing:0;table-layout:fixed;border-collapse:separate;@media screen and (min-width:0\0){border-collapse:collapse;}}.SingleEntryTable__Column{height:", ";padding:", ";border:", " solid rgba(0,0,0,0.067);font-size:", ";line-height:1.3;box-sizing:border-box;text-align:left;vertical-align:middle;&.SingleEntryTable__Column--Col{", " border-left-width:0;border-top-width:0;&:first-child{border-left-width:", ";}}&.SingleEntryTable__Column--HeaderCol{", " background:", ";border-left-width:0;&:first-child{border-color:", ";border-left-width:", ";}}}"], (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(2), (0, _hexToRgba.hexToRgba)(_colorsConfig.default.background1, 0.0667), (0, _typography.pxToRem)(2), (0, _hexToRgba.hexToRgba)(_colorsConfig.default.background1, 0.0667), (0, _hexToRgba.hexToRgba)(_colorsConfig.default.background1, 0), (0, _hexToRgba.hexToRgba)(_colorsConfig.default.background1, 0), (0, _hexToRgba.hexToRgba)(_colorsConfig.default.font1, 0.2), (0, _hexToRgba.hexToRgba)(_colorsConfig.default.font1, 0), (0, _hexToRgba.hexToRgba)(_colorsConfig.default.font1, 0.2), (0, _hexToRgba.hexToRgba)(_colorsConfig.default.font1, 0), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(14), (0, _typography.pxToRem)(14), _colorsConfig.default.background1, (0, _typography.pxToRem)(_screenConfig.ScreenConfig.M.min), (0, _typography.pxToRem)(68), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(2), (0, _typography.stepToRem)(-1), _typographyConfig.default.fontStyles.light, (0, _typography.pxToRem)(2), _typographyConfig.default.fontStyles.bold, _colorsConfig.default.background2, _colorsConfig.default.line1, (0, _typography.pxToRem)(2));

exports.Styles = Styles;