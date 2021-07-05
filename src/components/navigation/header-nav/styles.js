"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledHeader = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _screenConfig = require("../../../constants/screen-config");

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _gridConfig = require("../../../constants/grid-config");

var _typography = require("../../../helpers/utils/typography");

var _config = require("./config");

var StyledHeader = _styledComponents.default.header.withConfig({
  displayName: "styles__StyledHeader",
  componentId: "sc-139x0k8-0"
})(["position:relative;z-index:var(--HeaderNav-zIndex);.k-HeaderNav__stickyContainer{width:100%;}&.k-HeaderNav--menuIsExpanded{z-index:var(--HeaderNav-zIndex-openMenu);.k-HeaderNav__stickyContainer{transition:none;}}&.k-HeaderNav--shadow{.k-Spacer + .k-HeaderNav__stickyContainer{box-shadow:0 ", " ", " rgba(0,0,0,0.1);}}&.k-HeaderNav--border{.k-Spacer + .k-HeaderNav__stickyContainer{box-shadow:0 ", " 0 rgba(0,0,0,0.08);}}.k-HeaderNav{display:flex;align-items:center;width:100%;box-sizing:border-box;background:", ";transition:background-color 0.2s ease;.quickAccessLink{background:", ";transition:background-color 0.2s ease;height:100%;}&,*{", ";box-sizing:border-box;}*:focus{outline-offset:", ";outline-width:", ";outline-style:solid;outline-color:", ";}*:focus:not(:focus-visible){outline-color:transparent;}*:focus-visible{outline-color:", ";}}&.k-HeaderNav--inactiveBackground .k-HeaderNav,&.k-HeaderNav--inactiveBackground .k-HeaderNav__Button,&.k-HeaderNav--inactiveBackground .quickAccessLink{background-color:", ";}.k-HeaderNav__BurgerMenu__button{padding:0 ", " 0 ", ";height:100%;@media (min-width:", "px){padding:0 ", " 0 ", ";}}.k-HeaderNav__QuickAccessLink{position:absolute;display:inline-flex;align-items:center;left:-100%;top:0;z-index:var(--HeaderNav_quickAccessLink_zIndex,2);padding:0 ", ";background-color:", ";border-right:", " solid ", ";", " color:", ";line-height:1;font-size:", ";text-decoration:none;transition:all 0.2s ease;transition-delay:0,0;opacity:0;&:focus,&:active{left:0;opacity:1;transition-delay:0,0.2s;}}.k-HeaderNav__Logo{padding:", ";display:flex;align-items:center;@media (max-width:", "){padding-left:", ";padding-right:", ";}}.k-HeaderNav__Button{", " box-sizing:border-box;display:flex;align-items:center;justify-content:center;gap:", ";height:100%;font-size:", ";color:var(--HeaderMenu-Button-color);background-color:var(--HeaderMenu-Button-backgroundColor);text-decoration:none;transition:background-color 0.2s ease,color 0.2s ease;&:focus{outline:", " solid ", ";outline-offset:", ";}&:focus:not(:focus-visible){outline-color:transparent;}&:focus-visible{outline-color:", ";}&:hover,&:focus{color:var( --HeaderMenu-Button-colorHover,var(--HeaderMenu-Button-color) );background-color:var(--HeaderMenu-Button-backgroundColorHover);}.k-HeaderNav__Button__text:first-child{margin-right:", ";}}.k-HeaderNav--right,.k-HeaderNav--centered{display:flex;height:100%;align-items:center;}.k-HeaderNav--right{justify-content:flex-end;flex-grow:1;}.k-HeaderNav--centered{justify-content:center;flex-grow:100;}.k-HeaderNav--column{flex-direction:column;}.k-HeaderNav-nav{list-style-type:none;display:flex;padding:0;margin:0;height:100%;}.k-HeaderNav__UserMenu{height:100%;display:flex;.k-Avatar__text.k-Avatar__text--hasEllipsis{max-width:", ";}}.k-HeaderNav__UserMenuButton{align-self:center;display:flex;align-items:center;justify-content:center;height:100%;border:0;font-size:", ";line-height:normal;background-color:", ";background-color:var( --UserMenu-Button-backgroundColor,", " );.k-Badge{border-color:", ";border-color:var( --UserMenu-Button-backgroundColor,", " );}&,.k-Avatar__text{color:", ";color:var(--UserMenu-Button-color,", ");transition:background-color 0.2s ease,color 0.2s ease;}.k-Avatar{align-self:center;}@media (max-width:", "){padding:0 ", ";}&:hover{cursor:pointer;background-color:", ";background-color:var( --UserMenu-Button-backgroundColorHover,", " );.k-Badge{border-color:", ";border-color:var( --UserMenu-Button-backgroundColorHover,", " );}&,.k-Avatar__text{color:", ";color:var(--UserMenu-Button-colorHover,", ");}}}.k-HeaderNav__UserMenuButton[aria-expanded='true'],.k-Dropdown--isExpanded .k-HeaderNav__UserMenuButton{&,&:hover{background-color:", ";background-color:var( --UserMenu-Button-backgroundColorActive,", " );.k-Badge{border-color:", ";border-color:var( --UserMenu-Button-backgroundColorActive,", " );}&,.k-Avatar__text{color:", ";color:var(--UserMenu-Button-colorActive,", ");}}}.k-HeaderNav__UserMenuButton--hasArrow{padding-right:", ";}.k-HeaderNav__UserMenuButton--noPadding{padding:0 !important;}@media (max-width:", "){.k-HeaderNav__UserMenuButton--noPaddingMobile{padding:0 !important;}}.k-HeaderNav-nav--center{justify-content:center;}.k-HeaderNav-nav__element{-ms-overflow-x:hidden;display:flex;align-items:stretch;}.k-HeaderNav-nav__element--fixedSize{flex-shrink:0;}.k-HeaderNav-nav__item{display:flex;align-items:center;border-top:", " solid transparent;", ";font-size:", ";line-height:normal;color:", ";text-align:center;text-decoration:none;cursor:pointer;transition:color 0.2s,border-color 0.2s;&:hover,&:focus{color:", ";text-decoration:none;}&:active{border-color:currentColor;color:", ";}&.is-selected{border-color:currentColor;color:", ";}}&.k-HeaderNav--small .k-HeaderNav{height:", ";.k-HeaderNav__UserMenuButton{padding:0 ", ";}.k-HeaderNav-nav__item{padding:0 ", ";}.k-Dropdown__button,.k-HeaderNav__Button{min-width:", ";}.k-HeaderNav__Button--hasText{.k-HeaderNav__Button__text{&:first-child{margin-left:", ";}&:last-child{margin-right:", ";}}}}&.k-HeaderNav--regular .k-HeaderNav{height:", ";@media (min-width:", "px){height:", ";}@media (min-width:", "px){height:", ";}.k-HeaderNav__UserMenuButton{padding:0 ", ";}.k-HeaderNav-nav__item{padding:0 ", ";}.k-Dropdown__button,.k-HeaderNav__Button{min-width:", ";@media (min-width:", "px){min-width:", ";}@media (min-width:", "px){min-width:", ";}}.k-HeaderNav__Button__text:first-child{margin-left:", ";@media (min-width:", "px){margin-left:", ";}}.k-HeaderNav__Button__text:last-child{margin-right:", ";@media (min-width:", "px){margin-right:", ";}}}.k-Dropdown{display:flex;align-self:stretch;}.k-Dropdown__content{position:absolute;top:0;z-index:20;min-width:", ";margin-top:", ";visibility:hidden;opacity:0;transition:margin 0.2s,visibility 0.2s,opacity 0.2s;max-height:calc(100vh - 100%);box-shadow:0 ", " ", " rgba(0,0,0,0.1);@media (max-width:", "){min-width:0;width:100% !important;left:0 !important;right:0 !important;}}.k-Dropdown--isExpanded .k-Dropdown__content{margin-top:0;visibility:visible;opacity:1;overflow-x:hidden;overflow-y:scroll;}.k-HeaderNavDropdown{position:relative;align-self:stretch;.k-HeaderNavDropdown__menu{position:absolute;top:100%;z-index:20;min-width:max(", ",100%);max-height:calc(100vh - 100%);box-shadow:0 ", " ", " rgba(0,0,0,0.1);transition:margin 0.2s,visibility 0.2s,opacity 0.2s;margin-top:", ";visibility:hidden;opacity:0;&.k-HeaderNavDropdown__menu--is-left{left:0;}&.k-HeaderNavDropdown__menu--is-right{right:0;}@media (max-width:", "){position:absolute;min-width:0;width:100vw !important;left:0 !important;right:0 !important;}}&.k-HeaderNavDropdown--isExpanded .k-HeaderNavDropdown__menu{margin-top:0;visibility:visible;opacity:1;overflow-x:hidden;overflow-y:scroll;}}"], (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(4), (0, _typography.pxToRem)(1), _colorsConfig.default.background1, _colorsConfig.default.background1, _typographyConfig.default.fontStyles.regular, (0, _typography.pxToRem)(-2), (0, _typography.pxToRem)(2), _colorsConfig.default.primary4, _colorsConfig.default.primary4, _colorsConfig.default.background3, (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN), _screenConfig.ScreenConfig.S.min, (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING), (0, _typography.pxToRem)(30), _colorsConfig.default.background1, (0, _typography.pxToRem)(1), _colorsConfig.default.line1, _typographyConfig.default.fontStyles.regular, _colorsConfig.default.font1, (0, _typography.pxToRem)(16), (0, _typography.pxToRem)(10), _screenConfig.ScreenConfig.XXS.max, (0, _typography.pxToRem)(5), (0, _typography.pxToRem)(5), _typographyConfig.default.fontStyles.regular, (0, _typography.pxToRem)(10), (0, _typography.stepToRem)(-1), _colorsConfig.default.primary4, (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(-4), _colorsConfig.default.primary4, (0, _typography.pxToRem)(-10), (0, _typography.pxToRem)(145), (0, _typography.stepToRem)(-1), _colorsConfig.default.background3, _colorsConfig.default.background3, _colorsConfig.default.background3, _colorsConfig.default.background3, _colorsConfig.default.font1, _colorsConfig.default.font1, _screenConfig.ScreenConfig.S.max, (0, _typography.pxToRem)(15), _colorsConfig.default.line1, _colorsConfig.default.line1, _colorsConfig.default.line1, _colorsConfig.default.line1, _colorsConfig.default.font1, _colorsConfig.default.font1, _colorsConfig.default.background1, _colorsConfig.default.background1, _colorsConfig.default.background1, _colorsConfig.default.background1, _colorsConfig.default.font1, _colorsConfig.default.font1, (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.XS.max), (0, _typography.pxToRem)(4), _typographyConfig.default.fontStyles.regular, (0, _typography.stepToRem)(-1), _colorsConfig.default.font1, _colorsConfig.default.primary1, _colorsConfig.default.primary1, _colorsConfig.default.primary1, (0, _typography.pxToRem)(_config.MOBILE_HEADER_HEIGHT), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(_config.MOBILE_HEADER_HEIGHT), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(_config.MOBILE_HEADER_HEIGHT), _screenConfig.ScreenConfig.S.min, (0, _typography.pxToRem)(_config.TABLET_HEADER_HEIGHT), _screenConfig.ScreenConfig.L.min, (0, _typography.pxToRem)(_config.DESKTOP_HEADER_HEIGHT), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(_config.MOBILE_HEADER_HEIGHT), _screenConfig.ScreenConfig.S.min, (0, _typography.pxToRem)(_config.TABLET_HEADER_HEIGHT), _screenConfig.ScreenConfig.L.min, (0, _typography.pxToRem)(_config.DESKTOP_HEADER_HEIGHT), (0, _typography.pxToRem)(30), _screenConfig.ScreenConfig.S.min, (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(30), _screenConfig.ScreenConfig.S.min, (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(200), (0, _typography.pxToRem)(-10), (0, _typography.pxToRem)(3), (0, _typography.pxToRem)(4), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.XS.max), (0, _typography.pxToRem)(200), (0, _typography.pxToRem)(3), (0, _typography.pxToRem)(4), (0, _typography.pxToRem)(-10), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.XS.max));

exports.StyledHeader = StyledHeader;