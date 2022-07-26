import styled from 'styled-components';
import { pxToRem } from '../../../../helpers/utils/typography';
import COLORS from '../../../../constants/colors-config';
import TYPOGRAPHY from '../../../../constants/typography-config';
import { ScreenConfig } from '../../../../constants/screen-config';
const ICON_SIZE = pxToRem(50);
export const Icon = styled.span.withConfig({
  displayName: "icon__Icon",
  componentId: "sc-2j6a2t-0"
})(["flex-shrink:0;display:flex;align-items:center;justify-content:center;width:", ";height:", ";border-radius:var(--border-radius-rounded);box-sizing:border-box;margin-right:", ";@media (min-width:", "px){margin-right:", ";}background-color:", ";border:2px solid ", ";", ";font-size:", ";img{width:100%;height:100%;min-width:0;}"], ICON_SIZE, ICON_SIZE, pxToRem(20), ScreenConfig.S.min, pxToRem(40), COLORS.background1, COLORS.line1, TYPOGRAPHY.fontStyles['500'], pxToRem(14));