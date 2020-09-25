import styled from 'styled-components';
import { pxToRem } from '../../../../helpers/utils/typography';
import TYPOGRAPHY from '../../../../constants/typography-config';
export var Title = styled.p.withConfig({
  displayName: "title__Title",
  componentId: "zdw2ns-0"
})(["margin:0 0 ", ";", ";font-size:", ";line-height:normal;"], pxToRem(2), TYPOGRAPHY.fontStyles.regular, pxToRem(16));