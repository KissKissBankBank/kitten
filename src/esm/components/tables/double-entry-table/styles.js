import styled from 'styled-components';
import COLORS from '../../../constants/colors-config';
import { pxToRem, stepToRem } from '../../../helpers/utils/typography';
import { hexToRgba as rgba } from '../../../helpers/utils/hex-to-rgba';
import { ScreenConfig } from '../../../constants/screen-config';
import TYPOGRAPHY from '../../../constants/typography-config';
export var Styles = styled.div.withConfig({
  displayName: "styles__Styles",
  componentId: "sc-1rikehi-0"
})(["position:relative;.DoubleEntryTable__TableContainer{overflow-x:scroll;margin-bottom:", ";border-left:", " solid ", ";border-right:", " solid ", ";background:linear-gradient( to right,white 30%,", " ),linear-gradient(to left,white 30%,", "),radial-gradient( farthest-side at 0 50%,", ",", " ),radial-gradient( farthest-side at 100% 50%,", ",", " );background-repeat:no-repeat;background-size:", " 100%,", " 100%,", " 100%,", " 100%;background-position:", ",100%;background-attachment:local,local,scroll,scroll;@media screen and (min-width:0\0){background:", ";}@media (min-width:", "){background-position:", ",100%;}}.DoubleEntryTable__Table{width:100%;border-spacing:0;table-layout:fixed;border-collapse:separate;@media screen and (min-width:0\0){border-collapse:collapse;}}.DoubleEntryTable__Column{height:", ";padding:0 ", ";border:", " solid rgba(0,0,0,0.067);font-size:", ";line-height:1.3;box-sizing:border-box;text-align:left;width:", " !important;vertical-align:middle;@media screen and (min-width:0\0){border:", " solid ", ";}&.DoubleEntryTable__Column--Col{", " white-space:nowrap;border-left-width:0;border-top-width:0;}&.DoubleEntryTable__Column--TitleCol{", " background:", ";border-top-width:0;border-left-width:", ";position:sticky;left:0;@media (min-width:", "){width:", " !important;}}&.DoubleEntryTable__Column--HeaderCol{", " background:rgba(0,0,0,.016);border-left-width:0;width:", ";@media screen and (min-width:0\0){background:", ";}&:first-child{background:", ";border-color:", ";border-left-width:", ";position:sticky;left:0;@media (min-width:", "){width:", " !important;}}}}"], pxToRem(30), pxToRem(2), rgba(COLORS.background1, 0.0667), pxToRem(2), rgba(COLORS.background1, 0.0667), rgba(COLORS.background1, 0), rgba(COLORS.background1, 0), rgba(COLORS.font1, 0.2), rgba(COLORS.font1, 0), rgba(COLORS.font1, 0.2), rgba(COLORS.font1, 0), pxToRem(40), pxToRem(40), pxToRem(14), pxToRem(14), pxToRem(120), COLORS.background1, pxToRem(ScreenConfig.M.min), function (_ref) {
  var firstColWidth = _ref.firstColWidth;
  return pxToRem(firstColWidth);
}, pxToRem(68), pxToRem(20), pxToRem(2), stepToRem(-1), pxToRem(120), pxToRem(2), COLORS.line1, TYPOGRAPHY.fontStyles.light, TYPOGRAPHY.fontStyles.regular, COLORS.background1, pxToRem(2), pxToRem(ScreenConfig.M.min), function (_ref2) {
  var firstColWidth = _ref2.firstColWidth;
  return pxToRem(firstColWidth);
}, TYPOGRAPHY.fontStyles.bold, pxToRem(135), COLORS.background2, COLORS.background2, COLORS.line1, pxToRem(2), pxToRem(ScreenConfig.M.min), function (_ref3) {
  var firstColWidth = _ref3.firstColWidth;
  return pxToRem(firstColWidth);
});