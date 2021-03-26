import styled from 'styled-components';
import { pxToRem, stepToRem } from '../../../helpers/utils/typography';
import COLORS from '../../../constants/colors-config';
import TYPOGRAPHY from '../../../constants/typography-config';
import { ScreenConfig } from '../../../constants/screen-config';
export var StyledDropdown = styled.div.withConfig({
  displayName: "styles__StyledDropdown",
  componentId: "cw3cxf-0"
})(["position:relative;.k-Form-Dropdown__label--isHidden:not(:focus):not(:active){clip:rect(0 0 0 0);clip-path:inset(100%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;}.k-Form-DropdownCombobox,.k-Form-DropdownSelect__button{box-sizing:border-box;position:relative;appearance:none;width:100%;height:", ";overflow:hidden;padding:0;margin:0;border:", " solid ", ";background-color:", ";font-size:", ";text-align:left;white-space:nowrap;text-overflow:ellipsis;}.k-Form-DropdownCombobox__input,.k-Form-DropdownSelect__content{", " padding:0 ", ";color:", ";}.k-Form-DropdownCombobox__input:placeholder,.k-Form-DropdownSelect__placeholder{color:", ";}.k-Form-DropdownCombobox__arrowButton,.k-Form-DropdownSelect__button__arrowBox{position:absolute;top:0;bottom:0;display:flex;align-items:center;justify-content:center;height:100%;}.k-Form-DropdownCombobox__statusBadges,.k-Form-DropdownSelect__button__statusBadges{position:absolute;top:0;right:", ";bottom:0;display:flex;align-items:center;justify-content:center;height:100%;svg{width:", ";height:", ";}}.k-Form-DropdownCombobox{display:flex;}.k-Form-DropdownCombobox__input{flex:1 0 auto;border:0;font-size:inherit;&:focus{outline:", " solid ", ";outline-offset:", ";}&:focus:not(:focus-visible){outline-color:transparent;}&:focus-visible{outline-color:", ";}&:disabled{background-color:", ";}}.k-Form-DropdownCombobox__arrowButton{appearance:none;border:0;background-color:", ";font-size:", ";text-align:left;display:flex;}.k-Form-DropdownCombobox__arrowButton__arrowBox{line-height:0;}.k-Form-Dropdown__list{box-sizing:border-box;position:absolute;z-index:1000;z-index:var(--menu-z-index,1000);width:100%;max-height:", ";padding:0;margin:0;overflow-y:scroll;background-color:", ";list-style:none;&:not(:empty){border:", " solid ", ";border-top:0;}&:focus{outline:", " solid ", ";outline-offset:", ";}&:focus:not(:focus-visible){outline-color:transparent;}&:focus-visible{outline-color:", ";}}.k-Form-Dropdown__item{transition:background-color .2s ease;box-sizing:border-box;padding:", ";min-height:", ";color:", ";", " font-size:", ";user-select:none;line-height:1.3;display:flex;align-items:center;&[aria-selected=\"true\"]{background-color:", ";}&[disabled]{color:", ";}&.k-Form-Dropdown__item--level_2{padding-left:", ";}}&:focus-within{.k-Form-DropdownCombobox,.k-Form-DropdownCombobox__arrowButton,.k-Form-DropdownSelect__button,.k-Form-DropdownSelect__button__arrowBox,.k-Form-Dropdown__list{border-color:", ";}}.k-Form-DropdownSelect__button:focus{outline:", " solid ", ";outline-offset:", ";}.k-Form-DropdownSelect__button:focus:not(:focus-visible){outline-color:transparent;}.k-Form-DropdownSelect__button:focus-visible{outline-color:", ";}&.k-Form-Dropdown--error{.k-Form-DropdownCombobox,.k-Form-DropdownSelect__button{padding-right:", ";}.k-Form-DropdownCombobox,.k-Form-DropdownSelect__button,.k-Form-DropdownCombobox__arrowButton,.k-Form-DropdownSelect__button__arrowBox,.k-Form-Dropdown__list{border-color:", ";}}&.k-Form-Dropdown--valid{.k-Form-DropdownCombobox,.k-Form-DropdownSelect__button{padding-right:", ";}.k-Form-DropdownCombobox,.k-Form-DropdownSelect__button,.k-Form-DropdownCombobox__arrowButton,.k-Form-DropdownSelect__button__arrowBox,.k-Form-Dropdown__list{border-color:", ";}}&.k-Form-Dropdown--disabled{.k-Form-DropdownCombobox,.k-Form-DropdownSelect__button,.k-Form-DropdownCombobox__arrowButton,.k-Form-DropdownSelect__button__arrowBox,.k-Form-Dropdown__list{background-color:", ";border-color:", ";}.k-Form-DropdownCombobox__input{background-color:", ";}.k-Form-DropdownCombobox__arrowButton svg,.k-Form-DropdownSelect__button__arrowBox svg{fill:", ";}.k-Form-DropdownCombobox__input,.k-Form-DropdownSelect__content{color:", ";}}&.k-Form-Dropdown--andromeda{.k-Form-DropdownCombobox,.k-Form-DropdownSelect__button{padding:0 ", " 0 0;}.k-Form-DropdownCombobox__arrowButton{width:", ";right:0;border-left:inherit;}.k-Form-DropdownSelect__button__arrowBox{width:", ";right:0;border-left:inherit;}&.k-Form-Dropdown--tiny{.k-Form-DropdownCombobox,.k-Form-DropdownSelect__button{height:", ";padding-right:", ";}.k-Form-DropdownCombobox__arrowButton{width:", ";}.k-Form-DropdownSelect__button__arrowBox{width:", ";}.k-Form-DropdownCombobox__statusBadges,.k-Form-DropdownSelect__button__statusBadges{right:", ";svg{width:", ";height:", ";}}.k-Form-Dropdown__item{min-height:", ";padding-top:", ";padding-bottom:", ";}&.k-Form-Dropdown--error,&.k-Form-Dropdown--valid{.k-Form-DropdownCombobox,.k-Form-DropdownSelect__button{padding-right:", ";}}}&.k-Form-Dropdown--big{@media (min-width:", "px){.k-Form-DropdownCombobox,.k-Form-DropdownSelect__button{height:", ";padding-right:", ";}.k-Form-DropdownCombobox__arrowButton{width:", ";}.k-Form-DropdownSelect__button__arrowBox{width:", ";}.k-Form-DropdownCombobox__statusBadges,.k-Form-DropdownSelect__button__statusBadges{right:", ";}&.k-Form-Dropdown--error,&.k-Form-Dropdown--valid{.k-Form-DropdownCombobox,.k-Form-DropdownSelect__button{padding-right:", ";}}}}&.k-Form-Dropdown--huge,&.k-Form-Dropdown--giant{.k-Form-DropdownCombobox,.k-Form-DropdownSelect__button{height:", ";padding-right:", ";}.k-Form-DropdownCombobox__arrowButton{width:", ";}.k-Form-DropdownSelect__button__arrowBox{width:", ";}.k-Form-DropdownCombobox__statusBadges,.k-Form-DropdownSelect__button__statusBadges{right:", ";}&.k-Form-Dropdown--error,&.k-Form-Dropdown--valid{.k-Form-DropdownCombobox,.k-Form-DropdownSelect__button{padding-right:", ";}}@media (min-width:", "px){.k-Form-DropdownCombobox,.k-Form-DropdownSelect__button{padding-right:", ";}.k-Form-DropdownCombobox__arrowButton{width:", ";}.k-Form-DropdownSelect__button__arrowBox{width:", ";}.k-Form-DropdownCombobox__statusBadges,.k-Form-DropdownSelect__button__statusBadges{right:", ";}&.k-Form-Dropdown--error,&.k-Form-Dropdown--valid{.k-Form-DropdownCombobox,.k-Form-DropdownSelect__button{padding-right:", ";}}&.k-Form-Dropdown--huge{.k-Form-DropdownCombobox,.k-Form-DropdownSelect__button{height:", ";}}&.k-Form-Dropdown--giant{.k-Form-DropdownCombobox,.k-Form-DropdownSelect__button{height:", ";}}}}}&.k-Form-Dropdown--orion{.k-Form-DropdownCombobox,.k-Form-DropdownSelect__button{height:", ";border-radius:", ";padding-right:", ";}&.k-Form-Dropdown--big{.k-Form-DropdownCombobox,.k-Form-DropdownSelect__button{height:", ";border-radius:", ";padding-right:", ";@media (min-width:", "px){height:", ";border-radius:", ";padding-right:", ";}}}&.k-Form-Dropdown--isOpen{.k-Form-DropdownCombobox,.k-Form-DropdownSelect__button{border-bottom-left-radius:0;border-bottom-right-radius:0;}}.k-Form-DropdownSelect__button__arrowBox{left:", ";@media (min-width:", "px){left:", ";}}.k-Form-DropdownCombobox__arrowButton{padding:0;width:", ";@media (min-width:", "px){width:", ";}}.k-Form-DropdownCombobox__arrowButton__arrowBox{margin-left:", ";@media (min-width:", "px){margin-left:", ";}}.k-Form-DropdownCombobox__input,.k-Form-DropdownSelect__content{margin-left:", ";@media (min-width:", "px){margin-left:", ";}}.k-Form-DropdownCombobox__statusBadges,.k-Form-DropdownSelect__button__statusBadges{right:", ";@media (min-width:", "px){right:", ";}}.k-Form-Dropdown__list{box-shadow:0 ", " ", " 0 rgba(0,0,0,0.1);border-bottom-left-radius:", ";border-bottom-right-radius:", ";@media (min-width:", "px){border-bottom-left-radius:", ";border-bottom-right-radius:", ";}}.k-Form-Dropdown__item{min-height:", ";padding-top:", ";padding-bottom:", ";}&.k-Form-Dropdown--error .k-Form-DropdownSelect__button,&.k-Form-Dropdown--valid .k-Form-DropdownSelect__button{padding-right:", ";@media (min-width:", "px){padding-right:", ";}}}"], pxToRem(50), pxToRem(2), COLORS.line1, COLORS.background1, stepToRem(-1), TYPOGRAPHY.fontStyles.light, pxToRem(15), COLORS.font1, COLORS.font2, pxToRem(40 + 10), pxToRem(24), pxToRem(24), COLORS.primary4, pxToRem(2), pxToRem(-4), COLORS.primary4, COLORS.line1, COLORS.background1, stepToRem(-1), pxToRem(250), COLORS.background1, pxToRem(2), COLORS.line1, COLORS.primary4, pxToRem(2), pxToRem(2), COLORS.primary4, pxToRem(15), pxToRem(50), COLORS.font1, TYPOGRAPHY.fontStyles.light, stepToRem(-1), COLORS.background3, COLORS.font2, pxToRem(30), COLORS.line2, COLORS.primary4, pxToRem(2), pxToRem(2), COLORS.primary4, pxToRem(40 + 10 + 24 + 10), COLORS.error3, pxToRem(40 + 10 + 24 + 10), COLORS.tertiary2, COLORS.line1, COLORS.line2, COLORS.line1, COLORS.font2, COLORS.font2, pxToRem(40 + 10), pxToRem(40 + 2), pxToRem(40), pxToRem(40), pxToRem(30 + 10), pxToRem(30 + 2), pxToRem(30), pxToRem(30 + 10), pxToRem(20), pxToRem(20), pxToRem(40), pxToRem(8), pxToRem(8), pxToRem(30 + 10 + 20 + 10), ScreenConfig.S.min, pxToRem(60), pxToRem(50 + 10), pxToRem(50 + 2), pxToRem(50), pxToRem(50 + 10), pxToRem(50 + 10 + 24 + 10), pxToRem(70), pxToRem(50 + 10), pxToRem(50 + 2), pxToRem(50), pxToRem(50 + 10), pxToRem(50 + 10 + 24 + 10), ScreenConfig.S.min, pxToRem(60 + 10), pxToRem(60 + 2), pxToRem(60), pxToRem(60 + 10), pxToRem(60 + 10 + 24 + 10), pxToRem(80), pxToRem(90), pxToRem(50), pxToRem(4), pxToRem(15), pxToRem(60), pxToRem(6), pxToRem(10), ScreenConfig.S.min, pxToRem(70), pxToRem(8), pxToRem(20), pxToRem(17), ScreenConfig.S.min, pxToRem(30), pxToRem(35), ScreenConfig.S.min, pxToRem(50), pxToRem(6), ScreenConfig.S.min, pxToRem(16), pxToRem(14 + 10), ScreenConfig.S.min, pxToRem(30 + 10), pxToRem(10), ScreenConfig.S.min, pxToRem(20), pxToRem(5), pxToRem(5), pxToRem(6), pxToRem(6), ScreenConfig.S.min, pxToRem(8), pxToRem(8), pxToRem(40), pxToRem(8), pxToRem(8), pxToRem(10 + 10 + 24 + 10), ScreenConfig.S.min, pxToRem(20 + 10 + 24 + 10));