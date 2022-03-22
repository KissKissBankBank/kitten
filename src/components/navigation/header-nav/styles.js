"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.StyledHeader = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _screenConfig = require("../../../constants/screen-config");

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typography = require("../../../helpers/utils/typography");

var _config = require("./config");

var StyledHeader = _styledComponents.default.header.withConfig({
  displayName: "styles__StyledHeader",
  componentId: "sc-139x0k8-0"
})(["position:relative;z-index:var(--HeaderNav-zIndex);overflow:hidden;.k-HeaderNav__stickyContainer{width:100%;box-shadow:0 ", " 0 rgba(0,0,0,0.08);}&.k-HeaderNav--menuIsExpanded{z-index:var(--HeaderNav-zIndex-openMenu);.k-HeaderNav__stickyContainer{transition:none;}}.k-HeaderNav{display:flex;align-items:center;width:100%;box-sizing:border-box;background:", ";transition:background-color 0.2s ease;height:", ";.quickAccessLink{background:", ";transition:background-color 0.2s ease;height:100%;}&,*{", ";box-sizing:border-box;}.k-Dropdown__button,.k-HeaderNav__Button{min-width:", ";cursor:pointer;}}&.k-HeaderNav--inactiveBackground .k-HeaderNav,&.k-HeaderNav--inactiveBackground .k-HeaderNav__Button,&.k-HeaderNav--inactiveBackground .quickAccessLink{background-color:", ";}.k-HeaderNav__BurgerMenu__button{padding:0;height:100%;@media (min-width:", "px){padding:0 ", " 0 ", ";}}.k-HeaderNav__QuickAccessLink{position:absolute;display:inline-flex;align-items:center;left:-100%;top:0;bottom:0;z-index:var(--HeaderNav_quickAccessLink_zIndex,2);padding:0 ", ";background-color:", ";border-right:var(--border);", " color:", ";line-height:1;font-size:", ";text-decoration:none;transition:all 0.2s ease;transition-delay:0,0;opacity:0;&:focus,&:active{left:0;opacity:1;transition-delay:0,0.2s;}}.k-HeaderNav__Logo{padding:0;display:flex;align-items:center;@media ", "{padding:", ";}}@media ", "{.k-HeaderNavDropdown[class*='k-u-hidden@l-up'] + .k-HeaderNav__Logo{padding-left:", ";}}.k-HeaderNav__Button{", " box-sizing:border-box;display:flex;align-items:center;justify-content:center;gap:", ";height:100%;font-size:", ";color:var(--HeaderMenu-Button-color);background-color:var(--HeaderMenu-Button-backgroundColor);text-decoration:none;transition:background-color 0.2s ease,color 0.2s ease;&:hover,&:focus{color:var( --HeaderMenu-Button-colorHover,var(--HeaderMenu-Button-color) );background-color:var(--HeaderMenu-Button-backgroundColorHover);}&.k-HeaderNav__Button--hasText{.k-HeaderNav__Button__text{&:first-child{margin-left:", ";margin-right:", ";}&:last-child{margin-right:", ";}}}}.k-HeaderNav__right,.k-HeaderNav__centered{display:flex;height:100%;align-items:center;}.k-HeaderNav__right{gap:", ";justify-content:flex-end;flex-grow:1;margin-right:", ";@media ", "{margin-right:", ";}}.k-HeaderNav__centered{justify-content:center;flex-grow:100;}.k-HeaderNav__column{flex-direction:column;}.k-HeaderNav-nav{list-style-type:none;display:flex;padding:0;margin:0;height:100%;}.k-HeaderNav__UserMenu{height:100%;display:flex;.k-Avatar__text.k-Avatar__text--hasEllipsis{max-width:", ";}}.k-HeaderNav__UserMenu{margin-right:", ";@media ", "{margin-right:", ";}}.k-HeaderNav__UserMenuButton{align-self:center;display:flex;align-items:center;justify-content:center;height:100%;border:0;font-size:", ";line-height:normal;background-color:", ";background-color:var( --UserMenu-Button-backgroundColor,", " );padding-right:", ";&.k-Dropdown__button,&.k-HeaderNav__Button{min-width:", ";}.k-Badge{border-color:", ";border-color:var( --UserMenu-Button-backgroundColor,", " );}&,.k-Avatar__text{color:", ";color:var(--UserMenu-Button-color,", ");transition:background-color 0.2s ease,color 0.2s ease;}.k-Avatar{align-self:center;}@media (max-width:", "){padding:0 ", ";}&:hover{cursor:pointer;background-color:", ";background-color:var( --UserMenu-Button-backgroundColorHover,", " );.k-Badge{border-color:", ";border-color:var( --UserMenu-Button-backgroundColorHover,", " );}&,.k-Avatar__text{color:", ";color:var(--UserMenu-Button-colorHover,", ");}}}.k-HeaderNav__UserMenuButton[aria-expanded='true'],.k-Dropdown--isExpanded .k-HeaderNav__UserMenuButton{&,&:hover{background-color:", ";background-color:var( --UserMenu-Button-backgroundColorActive,", " );.k-Badge{border-color:", ";border-color:var( --UserMenu-Button-backgroundColorActive,", " );}&,.k-Avatar__text{color:", ";color:var(--UserMenu-Button-colorActive,", ");}}}.k-HeaderNav-nav--center{justify-content:center;}.k-HeaderNav-nav__element{display:flex;align-items:stretch;}.k-HeaderNav-nav__element--fixedSize{flex-shrink:0;}.k-HeaderNav-nav__item{display:flex;align-items:center;padding:0 ", ";border-top:", " solid transparent;border-bottom:", " solid transparent;", ";font-size:", ";line-height:normal;color:", ";text-align:center;text-decoration:none;cursor:pointer;transition:color 0.2s,border-color 0.2s;&:hover,&:focus{color:", ";text-decoration:none;}&:active{border-top-color:currentColor;color:", ";}&.is-selected{border-top-color:currentColor;color:", ";}}.k-Dropdown{display:flex;align-self:stretch;}.k-Dropdown__content{position:absolute;top:0;z-index:20;min-width:", ";margin-top:", ";visibility:hidden;opacity:0;transition:margin 0.2s,visibility 0.2s,opacity 0.2s;max-height:calc(100vh - 100%);box-shadow:0 ", " ", " rgba(0,0,0,0.1);@media (max-width:", "){min-width:0;width:100% !important;left:0 !important;right:0 !important;}}.k-Dropdown--isExpanded .k-Dropdown__content{margin-top:0;visibility:visible;opacity:1;overflow-x:hidden;overflow-y:scroll;}.k-HeaderNavDropdown{align-self:stretch;.k-HeaderNavDropdown__menu{position:absolute;top:100%;z-index:20;max-height:calc(100vh - 100%);box-shadow:0 ", " ", " rgba(0,0,0,0.1);transition:margin 0.2s,visibility 0.2s,opacity 0.2s;margin-top:", ";visibility:hidden;opacity:0;}@media (max-width:", "){.k-HeaderNavDropdown__menu{min-width:100vw;max-width:100vw;left:0;right:0;}}@media (min-width:", "){position:relative;.k-HeaderNavDropdown__menu{min-width:max(", ",100%);&.k-HeaderNavDropdown__menu--is-left{left:0;}&.k-HeaderNavDropdown__menu--is-right{right:0;}}}&.k-HeaderNavDropdown--isExpanded .k-HeaderNavDropdown__menu{margin-top:0;visibility:visible;opacity:1;overflow-x:hidden;overflow-y:scroll;}}@media (min-width:", "){.k-HeaderNav__right--padded .k-HeaderNavDropdown__menu{margin-left:", ";margin-right:", ";}}.k-HeaderNav__searchInput{position:relative;transition:max-width 0.2s ease;height:100%;display:flex;align-items:center;justify-content:flex-end;> *{flex:1 1 auto;}.k-Form-TextInput{text-overflow:ellipsis;overflow:hidden;", ";width:100%;}@media (max-width:", "){flex:0 0 auto;&.k-HeaderNav__searchInput--mobileInvisible .k-Form-TextInputWithButton{display:none;}.k-HeaderNav__searchInput__mobileFold{flex:0 0 auto;padding-left:", ";padding-right:", ";display:inline-flex;align-items:center;align-self:stretch;}&:not(.k-HeaderNav__searchInput--mobileInvisible){background:", ";z-index:2;position:absolute;top:0;left:0;right:0;bottom:0;padding-left:", ";}}@media (min-width:", "){flex:1 0 auto;max-width:min(100%,", ");.k-HeaderNav__searchInput__mobileFold{display:none;}}}.k-HeaderNav__floatingDropdown{position:absolute;left:0;right:0;min-width:fit-content;background-color:", ";z-index:20;margin-top:", ";visibility:hidden;opacity:0;transition:margin 0.2s,visibility 0.2s,opacity 0.2s;@media (max-width:", "){top:100%;max-height:calc(100vh - 100%);max-width:100vw;}@media (min-width:", "){top:calc(100% + ", ");max-height:calc(100vh - (100% + ", "));box-shadow:0 ", " ", " rgba(0,0,0,0.1);border-radius:var(--border-radius-m);}&.k-HeaderNav__floatingDropdown--isExpanded{margin-top:0;visibility:visible;opacity:1;overflow-x:hidden;overflow-y:scroll;}}"], (0, _typography.pxToRem)(1), _colorsConfig.default.background1, (0, _typography.pxToRem)(_config.HEADER_HEIGHT), _colorsConfig.default.background1, _typographyConfig.default.fontStyles.regular, (0, _typography.pxToRem)(52), _colorsConfig.default.background3, _screenConfig.ScreenConfig.S.min, (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(30), _colorsConfig.default.background1, _typographyConfig.default.fontStyles.regular, _colorsConfig.default.font1, (0, _typography.pxToRem)(16), _screenConfig.mq.tabletAndDesktop, (0, _typography.pxToRem)(10), _screenConfig.mq.desktop, (0, _typography.pxToRem)(40), _typographyConfig.default.fontStyles.regular, (0, _typography.pxToRem)(10), (0, _typography.stepToRem)(-1), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(-10), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(20), _screenConfig.mq.desktop, (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(145), (0, _typography.pxToRem)(-50), _screenConfig.mq.tabletAndDesktop, (0, _typography.pxToRem)(-40), (0, _typography.stepToRem)(-1), _colorsConfig.default.background3, _colorsConfig.default.background3, (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(40), _colorsConfig.default.background3, _colorsConfig.default.background3, _colorsConfig.default.font1, _colorsConfig.default.font1, _screenConfig.ScreenConfig.S.max, (0, _typography.pxToRem)(15), _colorsConfig.default.line1, _colorsConfig.default.line1, _colorsConfig.default.line1, _colorsConfig.default.line1, _colorsConfig.default.font1, _colorsConfig.default.font1, _colorsConfig.default.background1, _colorsConfig.default.background1, _colorsConfig.default.background1, _colorsConfig.default.background1, _colorsConfig.default.font1, _colorsConfig.default.font1, (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(4), (0, _typography.pxToRem)(4), _typographyConfig.default.fontStyles.regular, (0, _typography.stepToRem)(-1), _colorsConfig.default.font1, _colorsConfig.default.primary1, _colorsConfig.default.primary1, _colorsConfig.default.primary1, (0, _typography.pxToRem)(200), (0, _typography.pxToRem)(-10), (0, _typography.pxToRem)(3), (0, _typography.pxToRem)(4), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.XS.max), (0, _typography.pxToRem)(3), (0, _typography.pxToRem)(4), (0, _typography.pxToRem)(-10), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.XS.max), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(250), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(-15), (0, _typography.pxToRem)(-15), _typographyConfig.default.fontStyles.light, (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.max), (0, _typography.pxToRem)(8), (0, _typography.pxToRem)(13), _colorsConfig.default.background1, (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.M.min), (0, _typography.pxToRem)(500), _colorsConfig.default.background1, (0, _typography.pxToRem)(-10), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.max), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.M.min), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(3), (0, _typography.pxToRem)(4));

exports.StyledHeader = StyledHeader;