import styled from 'styled-components';
import { ScreenConfig } from '../../../constants/screen-config';
import TYPOGRAPHY from '../../../constants/typography-config';
import COLORS from '../../../constants/colors-config';
import { pxToRem, stepToRem } from '../../../helpers/utils/typography';
import { MOBILE_HEADER_HEIGHT, TABLET_HEADER_HEIGHT, DESKTOP_HEADER_HEIGHT } from './config';
export var StyledHeader = styled.header.withConfig({
  displayName: "styles__StyledHeader",
  componentId: "sc-139x0k8-0"
})(["position:relative;z-index:var(--HeaderNav-zIndex);&.k-HeaderNav--menuIsExpanded{z-index:var(--HeaderNav-zIndex-openMenu);.k-HeaderNav__stickyContainer{transition:none;}}.k-Spacer + .k-HeaderNav__stickyContainer{box-shadow:0 ", " ", " rgba(0,0,0,0.1);}.k-HeaderNav{display:flex;align-items:center;overflow:hidden;padding-left:", ";width:100%;overflow:hidden;box-sizing:border-box;&,.quickAccessLink{height:", ";background:", ";@media (min-width:", "px){height:", ";}@media (min-width:", "px){height:", ";}}@media (min-width:", "){padding-left:", ";}&,*{", ";box-sizing:border-box;}*:focus{outline-offset:", ";outline-width:", ";outline-style:solid;outline-color:", ";}}.k-HeaderNav--inactiveBackground .k-HeaderNav,.k-HeaderNav--inactiveBackground .quickAccessLink{background-color:", ";}.k-HeaderNav-Logo{padding:", ";display:flex;align-items:center;@media (max-width:", "){padding-left:", ";padding-right:", ";}}.k-HeaderNav--right,.k-HeaderNav--centered{display:flex;height:100%;align-items:center;}.k-HeaderNav--right{justify-content:flex-end;flex-grow:1;}.k-HeaderNav--centered{justify-content:center;flex-grow:100;}.k-HeaderNav--column{flex-direction:column;}.k-HeaderNav-nav{list-style-type:none;display:flex;padding:0;margin:0;height:100%;}.k-HeaderNav__UserMenu{height:100%;display:flex;.text--withEllipsis{text-overflow:ellipsis;max-width:", ";white-space:nowrap;overflow:hidden;}}.k-HeaderNav__UserMenuButton{display:flex;align-self:center;justify-content:center;height:100%;padding:0 ", ";border:0;font-size:", ";line-height:normal;background-color:", ";.k-Badge{border-color:", ";}.is-expanded &{&,&:hover{background-color:", ";.k-Badge{border-color:", ";}}}.k-ButtonImageWithText{align-self:center;}@media (max-width:", "){padding:0 ", ";}&:hover{cursor:pointer;background-color:", ";.k-Badge{border-color:", ";}.k-ButtonImageWithText__text{color:", ";}}}.k-HeaderNav__UserMenuButton--nopadding{padding:0;}.k-HeaderNav-nav--center{justify-content:center;}.k-HeaderNav-nav__element{-ms-overflow-x:hidden;display:flex;align-items:stretch;}.k-HeaderNav-nav__element--fixedSize{flex-shrink:0;}.k-HeaderNav-nav__item{display:flex;align-items:center;padding:0 ", ";border-top:", " solid transparent;", ";font-size:", ";line-height:normal;color:", ";text-align:center;text-decoration:none;cursor:pointer;transition:color 0.2s,border-color 0.2s;&:hover,&:focus{color:", ";text-decoration:none;}&:active{border-color:currentColor;color:", ";}&.is-selected{border-color:currentColor;color:", ";}}"], pxToRem(2), pxToRem(4), pxToRem(10), pxToRem(MOBILE_HEADER_HEIGHT), COLORS.background1, ScreenConfig.S.min, pxToRem(TABLET_HEADER_HEIGHT), ScreenConfig.L.min, pxToRem(DESKTOP_HEADER_HEIGHT), pxToRem(ScreenConfig.S.min), pxToRem(20), TYPOGRAPHY.fontStyles.regular, pxToRem(-2), pxToRem(2), COLORS.primary4, COLORS.background3, pxToRem(10), ScreenConfig.XXS.max, pxToRem(5), pxToRem(5), pxToRem(145), pxToRem(40), stepToRem(-1), COLORS.background3, COLORS.background3, COLORS.background1, COLORS.background1, ScreenConfig.XXS.max, pxToRem(15), COLORS.line1, COLORS.line1, COLORS.font1, pxToRem(40), pxToRem(4), TYPOGRAPHY.fontStyles.regular, stepToRem(-1), COLORS.font1, COLORS.primary1, COLORS.primary1, COLORS.primary1);