"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledDropdown = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _typography = require("../../../helpers/utils/typography");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _screenConfig = require("../../../constants/screen-config");

var StyledDropdown = _styledComponents.default.div.withConfig({
  displayName: "styles__StyledDropdown",
  componentId: "cw3cxf-0"
})(["position:relative;.k-Form-Dropdown__label--isHidden:not(:focus):not(:active){clip:rect(0 0 0 0);clip-path:inset(100%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;}.k-Form-DropdownCombobox,.k-Form-DropdownSelect__button{box-sizing:border-box;position:relative;appearance:none;width:100%;height:", ";overflow:hidden;padding:0;margin:0;border:", " solid ", ";background-color:", ";font-size:", ";text-align:left;white-space:nowrap;text-overflow:ellipsis;}.k-Form-DropdownCombobox__input,.k-Form-DropdownSelect__content{", " padding:0 ", ";color:", ";}.k-Form-DropdownCombobox__input:placeholder,.k-Form-DropdownSelect__placeholder{color:", ";}.k-Form-DropdownCombobox__arrowButton,.k-Form-DropdownSelect__button__arrowBox{position:absolute;top:0;bottom:0;display:flex;align-items:center;justify-content:center;height:100%;}.k-Form-DropdownCombobox__statusBadges,.k-Form-DropdownSelect__button__statusBadges{position:absolute;top:0;right:", ";bottom:0;display:flex;align-items:center;justify-content:center;height:100%;svg{width:", ";height:", ";}}.k-Form-DropdownCombobox{display:flex;}.k-Form-DropdownCombobox__input{flex:1 0 auto;border:0;font-size:inherit;&:focus{outline:", " solid ", ";outline-offset:", ";}&:focus:not(:focus-visible){outline-color:transparent;}&:focus-visible{outline-color:", ";}&:disabled{background-color:", ";}}.k-Form-DropdownCombobox__arrowButton{appearance:none;border:0;background-color:", ";font-size:", ";text-align:left;display:flex;}.k-Form-DropdownCombobox__arrowButton__arrowBox{line-height:0;}.k-Form-Dropdown__list{box-sizing:border-box;position:absolute;z-index:1000;z-index:var(--menu-z-index,1000);width:100%;max-height:", ";padding:0;margin:0;overflow-y:scroll;background-color:", ";list-style:none;&:not(:empty){border:", " solid ", ";border-top:0;}&:focus{outline:", " solid ", ";outline-offset:", ";}&:focus:not(:focus-visible){outline-color:transparent;}&:focus-visible{outline-color:", ";}}.k-Form-Dropdown__item{transition:background-color .2s ease;box-sizing:border-box;padding:", ";min-height:", ";color:", ";", " font-size:", ";user-select:none;line-height:1.3;display:flex;align-items:center;&[aria-selected=\"true\"]{background-color:", ";}&[disabled]{color:", ";}&.k-Form-Dropdown__item--level_2{padding-left:", ";}}&:focus-within{.k-Form-DropdownCombobox,.k-Form-DropdownCombobox__arrowButton,.k-Form-DropdownSelect__button,.k-Form-DropdownSelect__button__arrowBox,.k-Form-Dropdown__list{border-color:", ";}}.k-Form-DropdownSelect__button:focus{outline:", " solid ", ";outline-offset:", ";}.k-Form-DropdownSelect__button:focus:not(:focus-visible){outline-color:transparent;}.k-Form-DropdownSelect__button:focus-visible{outline-color:", ";}&.k-Form-Dropdown--error{.k-Form-DropdownCombobox,.k-Form-DropdownSelect__button{padding-right:", ";}.k-Form-DropdownCombobox,.k-Form-DropdownSelect__button,.k-Form-DropdownCombobox__arrowButton,.k-Form-DropdownSelect__button__arrowBox,.k-Form-Dropdown__list{border-color:", ";}}&.k-Form-Dropdown--valid{.k-Form-DropdownCombobox,.k-Form-DropdownSelect__button{padding-right:", ";}.k-Form-DropdownCombobox,.k-Form-DropdownSelect__button,.k-Form-DropdownCombobox__arrowButton,.k-Form-DropdownSelect__button__arrowBox,.k-Form-Dropdown__list{border-color:", ";}}&.k-Form-Dropdown--disabled{.k-Form-DropdownCombobox,.k-Form-DropdownSelect__button,.k-Form-DropdownCombobox__arrowButton,.k-Form-DropdownSelect__button__arrowBox,.k-Form-Dropdown__list{background-color:", ";border-color:", ";}.k-Form-DropdownCombobox__input{background-color:", ";}.k-Form-DropdownCombobox__arrowButton svg,.k-Form-DropdownSelect__button__arrowBox svg{fill:", ";}.k-Form-DropdownCombobox__input,.k-Form-DropdownSelect__content{color:", ";}}&.k-Form-Dropdown--andromeda{.k-Form-DropdownCombobox,.k-Form-DropdownSelect__button{padding:0 ", " 0 0;}.k-Form-DropdownCombobox__arrowButton{width:", ";right:0;border-left:inherit;}.k-Form-DropdownSelect__button__arrowBox{width:", ";right:0;border-left:inherit;}&.k-Form-Dropdown--tiny{.k-Form-DropdownCombobox,.k-Form-DropdownSelect__button{height:", ";padding-right:", ";}.k-Form-DropdownCombobox__arrowButton{width:", ";}.k-Form-DropdownSelect__button__arrowBox{width:", ";}.k-Form-DropdownCombobox__statusBadges,.k-Form-DropdownSelect__button__statusBadges{right:", ";svg{width:", ";height:", ";}}.k-Form-Dropdown__item{min-height:", ";padding-top:", ";padding-bottom:", ";}&.k-Form-Dropdown--error,&.k-Form-Dropdown--valid{.k-Form-DropdownCombobox,.k-Form-DropdownSelect__button{padding-right:", ";}}}&.k-Form-Dropdown--big{@media (min-width:", "px){.k-Form-DropdownCombobox,.k-Form-DropdownSelect__button{height:", ";padding-right:", ";}.k-Form-DropdownCombobox__arrowButton{width:", ";}.k-Form-DropdownSelect__button__arrowBox{width:", ";}.k-Form-DropdownCombobox__statusBadges,.k-Form-DropdownSelect__button__statusBadges{right:", ";}&.k-Form-Dropdown--error,&.k-Form-Dropdown--valid{.k-Form-DropdownCombobox,.k-Form-DropdownSelect__button{padding-right:", ";}}}}&.k-Form-Dropdown--huge,&.k-Form-Dropdown--giant{.k-Form-DropdownCombobox,.k-Form-DropdownSelect__button{height:", ";padding-right:", ";}.k-Form-DropdownCombobox__arrowButton{width:", ";}.k-Form-DropdownSelect__button__arrowBox{width:", ";}.k-Form-DropdownCombobox__statusBadges,.k-Form-DropdownSelect__button__statusBadges{right:", ";}&.k-Form-Dropdown--error,&.k-Form-Dropdown--valid{.k-Form-DropdownCombobox,.k-Form-DropdownSelect__button{padding-right:", ";}}@media (min-width:", "px){.k-Form-DropdownCombobox,.k-Form-DropdownSelect__button{padding-right:", ";}.k-Form-DropdownCombobox__arrowButton{width:", ";}.k-Form-DropdownSelect__button__arrowBox{width:", ";}.k-Form-DropdownCombobox__statusBadges,.k-Form-DropdownSelect__button__statusBadges{right:", ";}&.k-Form-Dropdown--error,&.k-Form-Dropdown--valid{.k-Form-DropdownCombobox,.k-Form-DropdownSelect__button{padding-right:", ";}}&.k-Form-Dropdown--huge{.k-Form-DropdownCombobox,.k-Form-DropdownSelect__button{height:", ";}}&.k-Form-Dropdown--giant{.k-Form-DropdownCombobox,.k-Form-DropdownSelect__button{height:", ";}}}}}&.k-Form-Dropdown--orion{.k-Form-DropdownCombobox,.k-Form-DropdownSelect__button{height:", ";border-radius:", ";padding-right:", ";}.k-Form-DropdownSelect__button__arrowBox{left:", ";@media (min-width:", "px){left:", ";}}.k-Form-DropdownCombobox__arrowButton{padding:0;width:", ";@media (min-width:", "px){width:", ";}}.k-Form-DropdownCombobox__arrowButton__arrowBox{margin-left:", ";@media (min-width:", "px){margin-left:", ";}}.k-Form-DropdownCombobox__input,.k-Form-DropdownSelect__content{margin-left:", ";@media (min-width:", "px){margin-left:", ";}}.k-Form-Dropdown__list{box-shadow:0 ", " ", " 0 rgba(0,0,0,0.1);border-bottom-left-radius:", ";border-bottom-right-radius:", ";@media (min-width:", "px){border-bottom-left-radius:", ";border-bottom-right-radius:", ";}}.k-Form-Dropdown__item{min-height:", ";padding-top:", ";padding-bottom:", ";}.k-Form-DropdownCombobox__statusBadges,.k-Form-DropdownSelect__button__statusBadges{right:", ";@media (min-width:", "px){right:", ";}}&.k-Form-Dropdown--error .k-Form-DropdownSelect__button,&.k-Form-Dropdown--valid .k-Form-DropdownSelect__button{padding-right:", ";@media (min-width:", "px){padding-right:", ";}}&.k-Form-Dropdown--tiny{.k-Form-DropdownCombobox,.k-Form-DropdownSelect__button{height:", ";padding-right:", ";}.k-Form-DropdownSelect__button__arrowBox{left:", ";}.k-Form-DropdownCombobox__input,.k-Form-DropdownSelect__content{margin-left:", ";}.k-Form-DropdownCombobox__statusBadges,.k-Form-DropdownSelect__button__statusBadges{right:", ";svg{width:", ";height:", ";}}&.k-Form-Dropdown--error .k-Form-DropdownSelect__button,&.k-Form-Dropdown--valid .k-Form-DropdownSelect__button{padding-right:", ";}}&.k-Form-Dropdown--big,&.k-Form-Dropdown--huge,&.k-Form-Dropdown--giant{.k-Form-DropdownCombobox,.k-Form-DropdownSelect__button{height:", ";border-radius:", ";padding-right:", ";@media (min-width:", "px){height:", ";border-radius:", ";padding-right:", ";}}&.k-Form-Dropdown--error .k-Form-DropdownSelect__button,&.k-Form-Dropdown--valid .k-Form-DropdownSelect__button{padding-right:", ";@media (min-width:", "px){padding-right:", ";}}@media (min-width:", "px){.k-Form-DropdownSelect__button__arrowBox{left:", ";}.k-Form-DropdownCombobox__input,.k-Form-DropdownSelect__content{margin-left:", ";}.k-Form-DropdownCombobox__statusBadges,.k-Form-DropdownSelect__button__statusBadges{right:", ";}}}&.k-Form-Dropdown--huge{.k-Form-DropdownCombobox,.k-Form-DropdownSelect__button{@media (min-width:", "px){height:", ";}}}&.k-Form-Dropdown--giant{.k-Form-DropdownCombobox,.k-Form-DropdownSelect__button{@media (min-width:", "px){height:", ";}}}&.k-Form-Dropdown--isOpen{.k-Form-DropdownCombobox,.k-Form-DropdownSelect__button{border-bottom-left-radius:0;border-bottom-right-radius:0;}}}"], (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(2), _colorsConfig.default.line1, _colorsConfig.default.background1, (0, _typography.stepToRem)(-1), _typographyConfig.default.fontStyles.light, (0, _typography.pxToRem)(15), _colorsConfig.default.font1, _colorsConfig.default.font2, (0, _typography.pxToRem)(40 + 10), (0, _typography.pxToRem)(24), (0, _typography.pxToRem)(24), _colorsConfig.default.primary4, (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(-4), _colorsConfig.default.primary4, _colorsConfig.default.line1, _colorsConfig.default.background1, (0, _typography.stepToRem)(-1), (0, _typography.pxToRem)(250), _colorsConfig.default.background1, (0, _typography.pxToRem)(2), _colorsConfig.default.line1, _colorsConfig.default.primary4, (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(2), _colorsConfig.default.primary4, (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(50), _colorsConfig.default.font1, _typographyConfig.default.fontStyles.light, (0, _typography.stepToRem)(-1), _colorsConfig.default.background3, _colorsConfig.default.font2, (0, _typography.pxToRem)(30), _colorsConfig.default.line2, _colorsConfig.default.primary4, (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(2), _colorsConfig.default.primary4, (0, _typography.pxToRem)(40 + 10 + 24 + 10), _colorsConfig.default.error3, (0, _typography.pxToRem)(40 + 10 + 24 + 10), _colorsConfig.default.tertiary2, _colorsConfig.default.line1, _colorsConfig.default.line2, _colorsConfig.default.line1, _colorsConfig.default.font2, _colorsConfig.default.font2, (0, _typography.pxToRem)(40 + 10), (0, _typography.pxToRem)(40 + 2), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(30 + 10), (0, _typography.pxToRem)(30 + 2), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(30 + 10), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(8), (0, _typography.pxToRem)(8), (0, _typography.pxToRem)(30 + 10 + 20 + 10), _screenConfig.ScreenConfig.S.min, (0, _typography.pxToRem)(60), (0, _typography.pxToRem)(50 + 10), (0, _typography.pxToRem)(50 + 2), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(50 + 10), (0, _typography.pxToRem)(50 + 10 + 24 + 10), (0, _typography.pxToRem)(70), (0, _typography.pxToRem)(50 + 10), (0, _typography.pxToRem)(50 + 2), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(50 + 10), (0, _typography.pxToRem)(50 + 10 + 24 + 10), _screenConfig.ScreenConfig.S.min, (0, _typography.pxToRem)(60 + 10), (0, _typography.pxToRem)(60 + 2), (0, _typography.pxToRem)(60), (0, _typography.pxToRem)(60 + 10), (0, _typography.pxToRem)(60 + 10 + 24 + 10), (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(90), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(4), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(17), _screenConfig.ScreenConfig.S.min, (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(35), _screenConfig.ScreenConfig.S.min, (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(6), _screenConfig.ScreenConfig.S.min, (0, _typography.pxToRem)(16), (0, _typography.pxToRem)(14 + 10), _screenConfig.ScreenConfig.S.min, (0, _typography.pxToRem)(20 + 10), (0, _typography.pxToRem)(5), (0, _typography.pxToRem)(5), (0, _typography.pxToRem)(6), (0, _typography.pxToRem)(6), _screenConfig.ScreenConfig.S.min, (0, _typography.pxToRem)(8), (0, _typography.pxToRem)(8), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(8), (0, _typography.pxToRem)(8), (0, _typography.pxToRem)(10), _screenConfig.ScreenConfig.S.min, (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(10 + 24 + 10), _screenConfig.ScreenConfig.S.min, (0, _typography.pxToRem)(10 + 24 + 15), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(15 + 5), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(10 + 24 + 10), (0, _typography.pxToRem)(60), (0, _typography.pxToRem)(6), (0, _typography.pxToRem)(15), _screenConfig.ScreenConfig.S.min, (0, _typography.pxToRem)(70), (0, _typography.pxToRem)(8), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(10 + 24 + 10), _screenConfig.ScreenConfig.S.min, (0, _typography.pxToRem)(10 + 24 + 20), _screenConfig.ScreenConfig.S.min, (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(30 + 10), (0, _typography.pxToRem)(20), _screenConfig.ScreenConfig.S.min, (0, _typography.pxToRem)(80), _screenConfig.ScreenConfig.S.min, (0, _typography.pxToRem)(90));

exports.StyledDropdown = StyledDropdown;