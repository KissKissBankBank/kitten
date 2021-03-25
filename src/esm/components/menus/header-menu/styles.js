import styled from 'styled-components';
import TYPOGRAPHY from '../../../constants/typography-config';
import COLORS from '../../../constants/colors-config';
import { pxToRem } from '../../../helpers/utils/typography';
export var StyledList = styled.ul.withConfig({
  displayName: "styles__StyledList",
  componentId: "sc-1npdhb6-0"
})(["--headerMenu-background-colors-hover:", ";margin:0;padding:0;list-style:none;.k-HeaderMenu__item__link{display:block;position:relative;height:", ";box-sizing:border-box;padding:", " ", " ", ";background-color:", ";", " color:", ";line-height:1;font-size:", ";text-decoration:none;&:focus{outline-offset:", ";}&:hover,&:focus{color:", ";background-color:var(--headerMenu-background-colors-hover);transition:color 0.2s,background-color 0.4s;}&:focus:not(:focus-visible){outline-color:transparent;}&:focus-visible{outline-color:", ";}}.k-HeaderMenu__item--external .k-HeaderMenu__item__link{display:flex;height:", ";padding:", " ", " ", " ", ";align-items:center;align-self:flex-start;justify-content:space-between;background-color:", ";.k-HeaderMenu__item__arrow{margin-left:", ";position:relative;left:0;transition:left 0.2s;}svg,img{max-height:", ";width:auto;}:focus,:hover{color:", ";.k-HeaderMenu__item__arrow{left:", ";}}&::before{display:none;}}.k-HeaderMenu__item--hasButton{padding:", ";background-color:", ";}&.k-HeaderMenu--hasBorderOnSide .k-HeaderMenu__item__link{&::before{content:'';position:absolute;top:", ";bottom:0;width:", ";background-color:transparent;transition:background-color 0.2s,width 0.2s;}&:hover::before,&:focus::before{background-color:", ";transition:width 0.2s;}}&.k-HeaderMenu--hasBorderOnSide-left .k-HeaderMenu__item__link::before{left:", ";}&.k-HeaderMenu--hasBorderOnSide-right .k-HeaderMenu__item__link::before{right:", ";}&.k-HeaderMenu--hasBorderOnSideOnHover .k-HeaderMenu__item__link{&:hover,&:focus{color:", ";&::before{width:", ";background-color:", ";transition:width 0.2s;}}}&.k-HeaderMenu--hasBigItems{.k-HeaderMenu__item .k-HeaderMenu__item__link{height:", ";padding:", " ", " ", " ", ";}.k-HeaderMenu__item--external .k-HeaderMenu__item__link{height:", ";padding:", " ", " ", " ", ";}}.k-HeaderMenu__item--tiny{.k-HeaderMenu__item__link{height:auto;padding-top:0;padding-bottom:", ";", "}& + .k-HeaderMenu__item--tiny .k-HeaderMenu__item__link{padding-top:", ";}}.k-HeaderMenu__item--big{.k-HeaderMenu__item__link{height:", ";padding:", " ", " ", " ", ";}&.k-HeaderMenu__item--external .k-HeaderMenu__item__link{height:", ";padding:", " ", " ", " ", ";}}.k-HeaderMenu__item--light{color:", ";}.k-HeaderMenu__item--isSelected .k-HeaderMenu__item__link{color:", ";}&.k-HeaderMenu--hasBorderOnSide .k-HeaderMenu__item--isSelected .k-HeaderMenu__item__link::before{width:", ";background-color:", ";}&.k-HeaderMenu--hasBorders{border-left:", " solid ", ";border-right:", " solid ", ";.k-HeaderMenu__item__link{border-bottom:", " solid ", ";}}"], COLORS.background1, pxToRem(50), pxToRem(18), pxToRem(30), pxToRem(18), COLORS.background1, TYPOGRAPHY.fontStyles.regular, COLORS.font1, pxToRem(14), pxToRem(-3), COLORS.primary1, COLORS.primary4, pxToRem(70), pxToRem(23), pxToRem(21), pxToRem(22), pxToRem(30), COLORS.background3, pxToRem(20), pxToRem(24), COLORS.font1, pxToRem(5), pxToRem(20), COLORS.background1, pxToRem(-1), pxToRem(0), COLORS.primary1, pxToRem(-1), pxToRem(-1), COLORS.primary1, pxToRem(4), COLORS.primary1, pxToRem(70), pxToRem(28), pxToRem(21), pxToRem(28), pxToRem(40), pxToRem(70), pxToRem(23), pxToRem(21), pxToRem(22), pxToRem(40), pxToRem(10), TYPOGRAPHY.fontStyles.light, pxToRem(5), pxToRem(70), pxToRem(28), pxToRem(21), pxToRem(28), pxToRem(40), pxToRem(70), pxToRem(23), pxToRem(21), pxToRem(22), pxToRem(40), COLORS.font2, COLORS.primary1, pxToRem(4), COLORS.primary1, pxToRem(1), COLORS.line1, pxToRem(1), COLORS.line1, pxToRem(1), COLORS.line1);