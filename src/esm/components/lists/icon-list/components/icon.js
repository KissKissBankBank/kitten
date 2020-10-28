import styled from 'styled-components';
import { pxToRem } from '../../../../helpers/utils/typography';
import COLORS from '../../../../constants/colors-config';
import TYPOGRAPHY from '../../../../constants/typography-config';
import { ScreenConfig } from '../../../../constants/screen-config';
var ICON_SIZE = pxToRem(50);
export var Icon = styled.span.withConfig({
  displayName: "icon__Icon",
  componentId: "sc-10xnzr-0"
})(["flex-shrink:0;display:flex;align-items:center;justify-content:center;width:", ";height:", ";border-radius:", ";box-sizing:border-box;margin-right:", ";@media (min-width:", "px){margin-right:", ";}background-color:", ";border:2px solid ", ";", ";font-size:", ";img{width:100%;height:100%;min-width:0;}"], ICON_SIZE, ICON_SIZE, ICON_SIZE, pxToRem(20), ScreenConfig.S.min, pxToRem(40), COLORS.background1, COLORS.line1, TYPOGRAPHY.fontStyles.regular, pxToRem(14));