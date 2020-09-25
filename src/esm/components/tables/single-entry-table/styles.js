import styled from 'styled-components';
import COLORS from '../../../constants/colors-config';
import { pxToRem, stepToRem } from '../../../helpers/utils/typography';
import TYPOGRAPHY from '../../../constants/typography-config';
export var Styles = styled.div.withConfig({
  displayName: "styles__Styles",
  componentId: "sc-1eo5kcj-0"
})(["position:relative;.SingleEntryTable__Table{width:100%;border-spacing:0;table-layout:fixed;border-collapse:separate;@media screen and (min-width:0\0){border-collapse:collapse;}}.SingleEntryTable__Column{height:", ";padding:0 ", ";border:", " solid ", ";font-size:", ";line-height:1.3;box-sizing:border-box;text-align:left;vertical-align:middle;&.SingleEntryTable__Column--Col{", " white-space:nowrap;border-left-width:0;border-top-width:0;&:first-child{border-left-width:", ";}}&.SingleEntryTable__Column--HeaderCol{", " background:", ";border-left-width:0;&:first-child{border-color:", ";border-left-width:", ";}}}"], pxToRem(68), pxToRem(20), pxToRem(2), COLORS.line1, stepToRem(-1), TYPOGRAPHY.fontStyles.light, pxToRem(2), TYPOGRAPHY.fontStyles.bold, COLORS.background2, COLORS.line1, pxToRem(2));