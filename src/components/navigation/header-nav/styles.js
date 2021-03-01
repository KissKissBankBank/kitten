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

var _typography = require("../../../helpers/utils/typography");

var _config = require("./config");

var StyledHeader = _styledComponents.default.header.withConfig({
  displayName: "styles__StyledHeader",
  componentId: "sc-139x0k8-0"
})(["position:relative;z-index:var(--HeaderNav-zIndex);&.k-HeaderNav--menuIsExpanded{z-index:var(--HeaderNav-zIndex-openMenu);.k-HeaderNav__stickyContainer{transition:none;}}.k-Spacer + .k-HeaderNav__stickyContainer{box-shadow:0 ", " ", " rgba(0,0,0,0.1);}.k-HeaderNav{display:flex;align-items:center;overflow:hidden;padding-left:", ";width:100%;overflow:hidden;box-sizing:border-box;&,.quickAccessLink{height:", ";background:", ";@media (min-width:", "px){height:", ";}@media (min-width:", "px){height:", ";}}@media (min-width:", "){padding-left:", ";}&,*{", ";box-sizing:border-box;}*:focus{outline-offset:", ";outline-width:", ";outline-style:solid;outline-color:", ";}}.k-HeaderNav--inactiveBackground .k-HeaderNav,.k-HeaderNav--inactiveBackground .quickAccessLink{background-color:", ";}.k-HeaderNav-Logo{padding:", ";display:flex;align-items:center;@media (max-width:", "){padding-left:", ";padding-right:", ";}}.k-HeaderNav--right,.k-HeaderNav--centered{display:flex;height:100%;align-items:center;}.k-HeaderNav--right{justify-content:flex-end;flex-grow:1;}.k-HeaderNav--centered{justify-content:center;flex-grow:100;}.k-HeaderNav--column{flex-direction:column;}.k-HeaderNav-nav{list-style-type:none;display:flex;padding:0;margin:0;height:100%;}.k-HeaderNav__UserMenu{height:100%;display:flex;.text--withEllipsis{text-overflow:ellipsis;max-width:", ";white-space:nowrap;overflow:hidden;}}.k-HeaderNav__UserMenuButton{display:flex;align-self:center;justify-content:center;height:100%;padding:0 ", ";border:0;font-size:", ";line-height:normal;background-color:", ";.k-Badge{border-color:", ";}.is-expanded &{&,&:hover{background-color:", ";.k-Badge{border-color:", ";}}}.k-ButtonImageWithText{align-self:center;}@media (max-width:", "){padding:0 ", ";}&:hover{cursor:pointer;background-color:", ";.k-Badge{border-color:", ";}.k-ButtonImageWithText__text{color:", ";}}}.k-HeaderNav__UserMenuButton--nopadding{padding:0;}.k-HeaderNav-nav--center{justify-content:center;}.k-HeaderNav-nav__element{-ms-overflow-x:hidden;display:flex;align-items:stretch;}.k-HeaderNav-nav__element--fixedSize{flex-shrink:0;}.k-HeaderNav-nav__item{display:flex;align-items:center;padding:0 ", ";border-top:", " solid transparent;", ";font-size:", ";line-height:normal;color:", ";text-align:center;text-decoration:none;cursor:pointer;transition:color 0.2s,border-color 0.2s;&:hover,&:focus{color:", ";text-decoration:none;}&:active{border-color:currentColor;color:", ";}&.is-selected{border-color:currentColor;color:", ";}}"], (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(4), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(_config.MOBILE_HEADER_HEIGHT), _colorsConfig.default.background1, _screenConfig.ScreenConfig.S.min, (0, _typography.pxToRem)(_config.TABLET_HEADER_HEIGHT), _screenConfig.ScreenConfig.L.min, (0, _typography.pxToRem)(_config.DESKTOP_HEADER_HEIGHT), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(20), _typographyConfig.default.fontStyles.regular, (0, _typography.pxToRem)(-2), (0, _typography.pxToRem)(2), _colorsConfig.default.primary4, _colorsConfig.default.background3, (0, _typography.pxToRem)(10), _screenConfig.ScreenConfig.XXS.max, (0, _typography.pxToRem)(5), (0, _typography.pxToRem)(5), (0, _typography.pxToRem)(145), (0, _typography.pxToRem)(40), (0, _typography.stepToRem)(-1), _colorsConfig.default.background3, _colorsConfig.default.background3, _colorsConfig.default.background1, _colorsConfig.default.background1, _screenConfig.ScreenConfig.XXS.max, (0, _typography.pxToRem)(15), _colorsConfig.default.line1, _colorsConfig.default.line1, _colorsConfig.default.font1, (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(4), _typographyConfig.default.fontStyles.regular, (0, _typography.stepToRem)(-1), _colorsConfig.default.font1, _colorsConfig.default.primary1, _colorsConfig.default.primary1, _colorsConfig.default.primary1);

exports.StyledHeader = StyledHeader;