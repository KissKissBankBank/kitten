import styled from 'styled-components';
import { pxToRem } from '../../../../helpers/utils/typography';
import { ScreenConfig } from '../../../../constants/screen-config';
export var Content = styled.div.withConfig({
  displayName: "content__Content",
  componentId: "wthcm6-0"
})(["padding:", ";@media (max-width:", "px){padding:", ";}"], pxToRem(40), ScreenConfig.S.max, pxToRem(30));