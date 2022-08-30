"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.StyledCarouselNavigation = exports.StyledCarouselContainer = exports.OUTLINE_PLUS_OFFSET = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _typography = require("../../../../helpers/utils/typography");

var _screenConfig = require("../../../../constants/screen-config");

var _gridConfig = require("../../../../constants/grid-config");

const OUTLINE_PLUS_OFFSET = 4;
exports.OUTLINE_PLUS_OFFSET = OUTLINE_PLUS_OFFSET;

const StyledCarouselNavigation = _styledComponents.default.div.withConfig({
  displayName: "styles__StyledCarouselNavigation",
  componentId: "sc-145vssy-0"
})(["display:flex;align-items:flex-start;gap:", ";position:relative;z-index:5;.k-CarouselNext__navigation__button{position:relative;&:focus{z-index:1;}}"], (0, _typography.pxToRem)(5));

exports.StyledCarouselNavigation = StyledCarouselNavigation;

const StyledCarouselContainer = _styledComponents.default.div.withConfig({
  displayName: "styles__StyledCarouselContainer",
  componentId: "sc-145vssy-1"
})(["--carousel-innerSpacing:max( ", ",var(--carousel-shadowSize,0px) );position:relative;display:flex;.k-CarouselNext__inner{position:relative;margin:calc(-1 * var(--carousel-innerSpacing));display:grid;grid-template-columns:repeat(var(--carousel-pagesCount),100%);gap:calc( (", ") - (var(--carousel-innerSpacing) * 2) );@media ", "{gap:calc( (", ") - (var(--carousel-innerSpacing) * 2) );}@media ", "{gap:calc(var(--carousel-gapBase) - (var(--carousel-innerSpacing) * 2));}overflow-x:scroll;-webkit-overflow-scrolling:touch;scroll-snap-type:x mandatory;scrollbar-width:none;&::-webkit-scrollbar{display:none;}.k-CarouselNext__inner__pageContainer{width:100%;scroll-snap-align:start;position:relative;.k-CarouselNext__inner__button{cursor:pointer;position:absolute;top:0;left:0;width:100%;height:100%;}&:not(.k-CarouselNext__inner__pageContainer--isActivePage) .k-CarouselNext__page__item > *{pointer-events:none;}}}&.k-CarouselNext--showOtherPages .k-CarouselNext__inner{--container-padding:", ";@media ", "{--container-padding:", ";}--computed-padding:calc( var(--container-padding) - var(--carousel-innerSpacing) );margin:0 !important;padding-inline:var(--computed-padding);scroll-padding:var(--computed-padding);.k-CarouselNext__inner__pageContainer{&:last-child{padding-right:var(--computed-padding) !important;}}}.k-CarouselNext__page{display:grid;grid-template-columns:repeat(var(--carousel-itemsPerPage),1fr);gap:calc( ", " - (var(--carousel-innerSpacing) * 2) );@media ", "{gap:calc( ", " - (var(--carousel-innerSpacing) * 2) );}@media ", "{gap:calc(var(--carousel-gapBase) - (var(--carousel-innerSpacing) * 2));}.k-CarouselNext__page__item{overflow:hidden;padding-inline:min( var(--carousel-innerSpacing),calc(var(--carousel-gapBase) / 2) );padding-block:var(--carousel-innerSpacing);}}"], (0, _typography.pxToRem)(OUTLINE_PLUS_OFFSET), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN / 2), _screenConfig.mq.tablet, (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING / 2), _screenConfig.mq.desktop, (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN), _screenConfig.mq.tabletAndDesktop, (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN / 2), _screenConfig.mq.tablet, (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING / 2), _screenConfig.mq.desktop);

exports.StyledCarouselContainer = StyledCarouselContainer;