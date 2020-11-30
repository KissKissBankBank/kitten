import styled, { css } from 'styled-components';
import { ScreenConfig } from '../../../constants/screen-config';
import { pxToRem } from '../../../helpers/utils/typography';
import { CONTAINER_MAX_WIDTH, CONTAINER_PADDING, CONTAINER_PADDING_THIN } from '../../../constants/grid-config';
export var StyledContainer = styled.div.withConfig({
  displayName: "styled__StyledContainer",
  componentId: "z412rl-0"
})(["margin-left:auto;margin-right:auto;box-sizing:border-box;max-width:", ";padding-left:", ";padding-right:", ";@media (min-width:", "px){padding-left:", ";padding-right:", ";}", " ", ""], pxToRem(CONTAINER_MAX_WIDTH), pxToRem(CONTAINER_PADDING_THIN), pxToRem(CONTAINER_PADDING_THIN), ScreenConfig.S.min, pxToRem(CONTAINER_PADDING), pxToRem(CONTAINER_PADDING), function (props) {
  return props.fullWidthBelowScreenSize && css(["@media (max-width:", "px){padding-right:0;padding-left:0;}"], ScreenConfig[props.fullWidthBelowScreenSize].max);
}, function (props) {
  return props.styles;
});