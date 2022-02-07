import styled from 'styled-components';
import { CONTAINER_PADDING_THIN, CONTAINER_PADDING, CONTAINER_MAX_WIDTH } from '../../../constants/grid-config';
import { mq } from '../../../constants/screen-config';
import { pxToRem } from '../../../helpers/utils/typography';
import { HEADER_HEIGHT } from '../../navigation/header-nav/config';
export var StyledLayout = styled.div.withConfig({
  displayName: "styles__StyledLayout",
  componentId: "sc-zmvlwc-0"
})(["--deskLayout-menu-width:", ";--deskLayout-gutter:", ";--deskLayout-offset:calc( var(--deskLayout-menu-width) + var(--deskLayout-gutter) );height:100%;min-height:calc(100vh - ", ");box-sizing:border-box;margin:0;background-color:var(--color-grey-100);padding:", " ", ";@media ", "{padding:", " ", ";}@media ", "{padding:", " ", ";}.k-DeskLayout{display:flex;flex-direction:column;gap:", " var(--deskLayout-gutter);max-width:", ";margin:0 auto;@media ", "{max-width:", ";}@media ", "{flex-direction:row;}}.k-DeskLayout__menu{&:empty{display:none;}@media ", "{width:var(--deskLayout-menu-width);flex:0 0 var(--deskLayout-menu-width);position:relative;.k-DeskLayout__menu__inside{position:sticky;top:", ";bottom:", ";transition:top var(--transition);}}}@media ", "{.k-DeskLayout__content{max-width:", ";flex:1 1 ", ";margin-top:", ";}.k-DeskLayout__content--fullWidth{max-width:calc(100% - var(--deskLayout-offset));flex:1 1 calc(100% - var(--deskLayout-offset));}}.k-DeskLayout__loading{align-self:stretch;display:flex;align-items:center;justify-content:center;@media ", "{max-width:calc(100% - (2 * var(--deskLayout-offset)));flex:1 1 calc(100% - (2 * var(--deskLayout-offset)));}}"], pxToRem(220), pxToRem(80), pxToRem(HEADER_HEIGHT), pxToRem(20), pxToRem(CONTAINER_PADDING_THIN), mq.tabletAndDesktop, pxToRem(40), pxToRem(CONTAINER_PADDING), mq.desktop, pxToRem(60), pxToRem(CONTAINER_PADDING), pxToRem(20), pxToRem(CONTAINER_MAX_WIDTH - 2 * CONTAINER_PADDING_THIN), mq.tabletAndDesktop, pxToRem(CONTAINER_MAX_WIDTH - 2 * CONTAINER_PADDING), mq.desktop, mq.desktop, pxToRem(HEADER_HEIGHT + 20), pxToRem(20), mq.desktop, pxToRem(670), pxToRem(670), pxToRem(35), mq.desktop);