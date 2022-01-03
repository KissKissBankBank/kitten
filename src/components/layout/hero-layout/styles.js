"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.StyledLayout = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _gridConfig = require("../../../constants/grid-config");

var _config = require("../../../components/organisms/header-nav/config");

var _screenConfig = require("../../../constants/screen-config");

var _typography = require("../../../helpers/utils/typography");

var StyledLayout = _styledComponents.default.div.withConfig({
  displayName: "styles__StyledLayout",
  componentId: "sc-vs7cbh-0"
})(["--container-padding:", ";--heroLayout-imageHeight:", ";@media ", "{--container-padding:", ";}@media ", "{--heroLayout-imageHeight:", ";}display:block;.k-HeroLayout__hero{position:relative;padding:", " var(--container-padding) ", ";@media ", "{display:flex;flex-direction:column;justify-content:end;box-sizing:border-box;min-height:calc(100vh - ", ");padding:", " var(--container-padding) ", ";margin-bottom:", ";}}.k-HeroLayout__hero__grid{margin:0;display:flex;flex-direction:column;align-items:stretch;gap:", ";::after{content:'';position:absolute;z-index:1;top:0;left:calc(-1 * var(--container-padding));right:calc(-1 * var(--container-padding));background:linear-gradient( to bottom,hsla(0deg,0%,100%,0),hsla(0deg,0%,100%,0.3) 20%,hsla(0deg,0%,100%,0.9) 60%,var(--color-grey-000) );@media ", "{height:var(--heroLayout-imageHeight);}@media ", "{bottom:calc( max(calc(100vh - ", " - ", "),100%) - var(--heroLayout-imageHeight) );}}@media ", "{position:relative;gap:", ";}}.k-HeroLayout__hero__background{z-index:1;position:absolute;top:0;left:0;width:100%;background-color:var(--color-grey-000);height:var(--heroLayout-imageHeight);img{display:block;width:100%;height:100%;object-fit:cover;object-position:center;}}.k-HeroLayout__hero__block{position:relative;z-index:2;text-align:center;}.k-HeroLayout__promo{background-color:var(--color-grey-200);padding:", " 0;@media ", "{padding:", " 0 ", ";}}.k-HeroLayout__page{margin:0 var(--container-padding) ", ";display:flex;flex-direction:column;gap:", " ", ";display:grid;@media ", "{grid-template-areas:'menu' 'content' 'aside';}@media ", "{margin:", " ", " ", ";grid-template-columns:minmax(", ",1fr) minmax(auto,", ") minmax(", ",1fr);grid-template-areas:'menu content aside';}.k-HeroLayout__menu{grid-area:menu;}.k-HeroLayout__aside{grid-area:aside;}.k-HeroLayout__loading,.k-HeroLayout__content{grid-area:content;}.k-HeroLayout__loading{justify-self:center;align-self:center;}}@media ", "{.k-HeroLayout__sticky.k-HeroLayout__menu{transition:top var(--transition);position:sticky;top:0;z-index:2;}}@media ", "{.k-HeroLayout__menu{justify-self:end;}.k-HeroLayout__aside{justify-self:start;}.k-HeroLayout__sticky__inside{position:sticky;top:", ";bottom:", ";transition:top var(--transition);}}"], (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN), (0, _typography.pxToRem)(300), _screenConfig.mq.tabletAndDesktop, (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING), _screenConfig.mq.desktop, (0, _typography.pxToRem)(500), (0, _typography.pxToRem)(135), (0, _typography.pxToRem)(100), _screenConfig.mq.desktop, (0, _typography.pxToRem)(_config.HEADER_HEIGHT), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(25), _screenConfig.mq.mobileAndTablet, _screenConfig.mq.desktop, (0, _typography.pxToRem)(_config.HEADER_HEIGHT), (0, _typography.pxToRem)(20), _screenConfig.mq.desktop, (0, _typography.pxToRem)(65), (0, _typography.pxToRem)(30), _screenConfig.mq.tabletAndDesktop, (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(60), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(70), _screenConfig.mq.mobileAndTablet, _screenConfig.mq.desktop, (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(70), (0, _typography.pxToRem)(100), (0, _typography.pxToRem)(210), (0, _typography.pxToRem)(670), (0, _typography.pxToRem)(210), _screenConfig.mq.mobileAndTablet, _screenConfig.mq.desktop, (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(20));

exports.StyledLayout = StyledLayout;