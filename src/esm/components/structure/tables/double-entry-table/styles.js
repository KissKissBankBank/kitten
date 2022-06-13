import styled from 'styled-components';
import COLORS from '../../../../constants/colors-config';
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography';
import { ScreenConfig } from '../../../../constants/screen-config';
import TYPOGRAPHY from '../../../../constants/typography-config';
export var Styles = styled.div.withConfig({
  displayName: "styles__Styles",
  componentId: "sc-l8cwth-0"
})(["position:relative;.DoubleEntryTable__TableContainer{overflow-x:scroll;margin-bottom:", ";border-left:", " solid rgba(255,255,255,0.0667);border-right:", " solid rgba(255,255,255,0.0667);background:linear-gradient(to right,white 30%,transparent),linear-gradient(to left,white 30%,transparent),radial-gradient( farthest-side at 0 50%,rgba(34,34,34,0.2),transparent ),radial-gradient( farthest-side at 100% 50%,rgba(34,34,34,0.2),transparent );background-repeat:no-repeat;background-size:", " 100%,", " 100%,", " 100%,", " 100%;background-position:", ",100%;background-attachment:local,local,scroll,scroll;@media (min-width:", "){background-position:", ",100%;}}.DoubleEntryTable__Table{width:100%;border-spacing:0;table-layout:fixed;border-collapse:separate;}.DoubleEntryTable__Column{height:", ";padding:0 ", ";border:var(--border);font-size:", ";line-height:1.3;box-sizing:border-box;text-align:left;width:", " !important;vertical-align:middle;&.DoubleEntryTable__Column--Col{", " white-space:nowrap;border-left-width:0;border-top-width:0;}&.DoubleEntryTable__Column--TitleCol{", " background:", ";border-top-width:0;border-left-width:var(--border-width);position:sticky;left:0;@media (min-width:", "){width:", " !important;}}&.DoubleEntryTable__Column--HeaderCol{", " background:rgba(0,0,0,.016);border-left-width:0;width:", ";&:first-child{background:", ";border-color:var(--color-grey-400);border-left-width:var(--border-width);position:sticky;left:0;@media (min-width:", "){width:", " !important;}}}}"], pxToRem(30), pxToRem(2), pxToRem(2), pxToRem(40), pxToRem(40), pxToRem(14), pxToRem(14), pxToRem(120), pxToRem(ScreenConfig.M.min), function (_ref) {
  var firstColWidth = _ref.firstColWidth;
  return pxToRem(firstColWidth);
}, pxToRem(68), pxToRem(20), stepToRem(-1), pxToRem(120), TYPOGRAPHY.fontStyles['400'], TYPOGRAPHY.fontStyles['500'], COLORS.background1, pxToRem(ScreenConfig.M.min), function (_ref2) {
  var firstColWidth = _ref2.firstColWidth;
  return pxToRem(firstColWidth);
}, TYPOGRAPHY.fontStyles['700'], pxToRem(135), COLORS.background2, pxToRem(ScreenConfig.M.min), function (_ref3) {
  var firstColWidth = _ref3.firstColWidth;
  return pxToRem(firstColWidth);
});