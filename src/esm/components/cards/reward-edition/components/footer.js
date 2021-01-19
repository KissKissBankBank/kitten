import styled from 'styled-components';
import { pxToRem } from '../../../../helpers/utils/typography';
import COLORS from '../../../../constants/colors-config';
import { ScreenConfig } from '../../../../constants/screen-config';
var borderWidth = pxToRem(2);
var borderColor = COLORS.line1;
export var Footer = styled.div.withConfig({
  displayName: "footer__Footer",
  componentId: "ogvwcp-0"
})(["border-top-width:", ";border-top-style:solid;border-top-color:", ";padding:", ";@media (max-width:", "px){padding:", ";}"], borderWidth, borderColor, pxToRem(40), ScreenConfig.S.max, pxToRem(30));