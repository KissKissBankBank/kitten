"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Styles = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _typography = require("../../../../helpers/utils/typography");

var _screenConfig = require("../../../../constants/screen-config");

var _typographyConfig = _interopRequireDefault(require("../../../../constants/typography-config"));

var Styles = _styledComponents.default.div.withConfig({
  displayName: "styles__Styles",
  componentId: "sc-l8cwth-0"
})(["position:relative;.DoubleEntryTable__TableContainer{overflow-x:scroll;margin-bottom:", ";border-left:", " solid rgba(255,255,255,0.0667);border-right:", " solid rgba(255,255,255,0.0667);background:linear-gradient(to right,white 30%,transparent),linear-gradient(to left,white 30%,transparent),radial-gradient( farthest-side at 0 50%,rgba(34,34,34,0.2),transparent ),radial-gradient( farthest-side at 100% 50%,rgba(34,34,34,0.2),transparent );background-repeat:no-repeat;background-size:", " 100%,", " 100%,", " 100%,", " 100%;background-position:", ",100%;background-attachment:local,local,scroll,scroll;@media (min-width:", "){background-position:", ",100%;}}.DoubleEntryTable__Table{width:100%;border-spacing:0;table-layout:fixed;border-collapse:separate;}.DoubleEntryTable__Column{height:", ";padding:0 ", ";border:var(--border);font-size:", ";line-height:1.3;box-sizing:border-box;text-align:left;width:", " !important;vertical-align:middle;&.DoubleEntryTable__Column--Col{", " white-space:nowrap;border-left-width:0;border-top-width:0;}&.DoubleEntryTable__Column--TitleCol{", " background:", ";border-top-width:0;border-left-width:var(--border-width);position:sticky;left:0;@media (min-width:", "){width:", " !important;}}&.DoubleEntryTable__Column--HeaderCol{", " background:rgba(0,0,0,.016);border-left-width:0;width:", ";&:first-child{background:", ";border-color:var(--color-grey-400);border-left-width:var(--border-width);position:sticky;left:0;@media (min-width:", "){width:", " !important;}}}}"], (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(14), (0, _typography.pxToRem)(14), (0, _typography.pxToRem)(120), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.M.min), function (_ref) {
  var firstColWidth = _ref.firstColWidth;
  return (0, _typography.pxToRem)(firstColWidth);
}, (0, _typography.pxToRem)(68), (0, _typography.pxToRem)(20), (0, _typography.stepToRem)(-1), (0, _typography.pxToRem)(120), _typographyConfig.default.fontStyles.light, _typographyConfig.default.fontStyles.regular, _colorsConfig.default.background1, (0, _typography.pxToRem)(_screenConfig.ScreenConfig.M.min), function (_ref2) {
  var firstColWidth = _ref2.firstColWidth;
  return (0, _typography.pxToRem)(firstColWidth);
}, _typographyConfig.default.fontStyles.bold, (0, _typography.pxToRem)(135), _colorsConfig.default.background2, (0, _typography.pxToRem)(_screenConfig.ScreenConfig.M.min), function (_ref3) {
  var firstColWidth = _ref3.firstColWidth;
  return (0, _typography.pxToRem)(firstColWidth);
});

exports.Styles = Styles;