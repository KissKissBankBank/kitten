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

var Styles = _styledComponents.default.div.withConfig({
  displayName: "styles__Styles",
  componentId: "sc-1eo5kcj-0"
})(["position:relative;.SingleEntryTable__Table{width:100%;border-spacing:0;table-layout:fixed;border-collapse:separate;@media screen and (min-width:0\0){border-collapse:collapse;}}.SingleEntryTable__Column{height:", ";padding:0 ", ";border:", " solid ", ";font-size:", ";line-height:1.3;box-sizing:border-box;text-align:left;vertical-align:middle;&.SingleEntryTable__Column--Col{", " white-space:nowrap;border-left-width:0;border-top-width:0;&:first-child{border-left-width:", ";}}&.SingleEntryTable__Column--HeaderCol{", " background:", ";border-left-width:0;&:first-child{border-color:", ";border-left-width:", ";}}}"], (0, _typography.pxToRem)(68), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(2), _colorsConfig.default.line1, (0, _typography.stepToRem)(-1), _typographyConfig.default.fontStyles.light, (0, _typography.pxToRem)(2), _typographyConfig.default.fontStyles.bold, _colorsConfig.default.background2, _colorsConfig.default.line1, (0, _typography.pxToRem)(2));

exports.Styles = Styles;