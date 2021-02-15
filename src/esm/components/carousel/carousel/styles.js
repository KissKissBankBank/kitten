import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import styled, { css } from 'styled-components';
import { pxToRem } from '../../../helpers/utils/typography';
import { ScreenConfig } from '../../../constants/screen-config';
import { CONTAINER_PADDING, CONTAINER_PADDING_MOBILE, GUTTER } from '../../../constants/grid-config';
import ColorsConfig from '../../../constants/colors-config';
export var OUTLINE_PLUS_OFFSET = 4; // STYLE HELPERS

var flexContainerdirectionStyle = function flexContainerdirectionStyle(mediaQuery) {
  return function (_ref) {
    var paginationPosition = _ref.paginationPosition;
    if (!paginationPosition || !paginationPosition[mediaQuery]) return;

    switch (paginationPosition[mediaQuery]) {
      case 'top':
        return css(["flex-direction:column-reverse;& >:nth-child(2){margin:0;margin-bottom:", ";}"], pxToRem(GUTTER));

      case 'bottom':
      case 'bottom-left':
      case 'bottom-right':
        return css(["flex-direction:column;& >:nth-child(2){margin:0;margin-top:", ";}"], pxToRem(GUTTER));

      case 'left':
        return css(["flex-direction:row-reverse;& >:nth-child(2){margin:0;margin-right:", ";}"], pxToRem(GUTTER));

      case 'right':
        return css(["flex-direction:row;& >:nth-child(2){margin:0;margin-left:", ";}"], pxToRem(GUTTER));
    }
  };
};

var paginationPositionStyle = function paginationPositionStyle(mediaQuery) {
  return function (_ref2) {
    var paginationPosition = _ref2.paginationPosition;
    if (!paginationPosition || !paginationPosition[mediaQuery]) return;

    switch (paginationPosition[mediaQuery]) {
      case 'top':
        return css(["align-items:flex-end;flex-direction:row;"]);

      case 'bottom':
      case 'bottom-left':
        return css(["align-items:flex-start;flex-direction:row;"]);

      case 'bottom-right':
        return css(["align-items:flex-start;flex-direction:row-reverse;"]);

      case 'left':
        return css(["align-items:flex-end;flex-direction:column;"]);

      case 'right':
        return css(["align-items:flex-start;flex-direction:column;"]);
    }
  };
};

var buttonsPositionStyle = function buttonsPositionStyle(mediaQuery) {
  return function (_ref3) {
    var paginationPosition = _ref3.paginationPosition;
    if (!paginationPosition || !paginationPosition[mediaQuery]) return;

    switch (paginationPosition[mediaQuery]) {
      case 'top':
      case 'bottom':
      case 'bottom-left':
      case 'bottom-right':
        return css(["flex-direction:row;"]);

      case 'left':
        return css(["flex-direction:column;"]);

      case 'right':
        return css(["flex-direction:column-reverse;"]);
    }
  };
}; // Styled component


export var StyledCarouselContainer = styled.div.withConfig({
  displayName: "styles__StyledCarouselContainer",
  componentId: "sc-194zby1-0"
})(["&.k-Carousel:not(.k-LegacyCarousel){display:flex;", " @media (min-width:", "px){", "}@media (min-width:", "px){", "}@media (min-width:", "px){", "}@media (min-width:", "px){", "}@media (min-width:", "px){", "}@media (min-width:", "px){", "}}&.k-Carousel.k-LegacyCarousel{@media (max-width:", "px){.k-Grid{margin-left:0 !important;margin-right:0 !important;}.k-Grid__col--12{padding-left:0 !important;padding-right:0 !important;}.k-Carousel__inner{padding:0 ", ";scroll-padding:", ";&::after{content:'';display:block;flex-shrink:0;width:", ";}@media (min-width:", "){padding:0 ", ";scroll-padding:", ";&::after{width:", ";}}}}@media (min-width:", "px){.k-Carousel__pagination__buttonContainer{flex-direction:column-reverse !important;}}}.k-Carousel__pagination{display:flex;justify-content:space-between;", " @media (min-width:", "px){", "}@media (min-width:", "px){", "}@media (min-width:", "px){", "}@media (min-width:", "px){", "}@media (min-width:", "px){", "}@media (min-width:", "px){", "}.k-Carousel__pagination__squaresContainer{display:flex;flex-direction:row;margin:", ";}.k-Carousel__pagination__square{display:inline-block;width:", ";height:", ";margin:", ";background-color:", ";&.k-Carousel__pagination__square--isActive{background-color:", ";}}}.k-Carousel__pagination__buttonContainer{display:flex;align-items:flex-start;margin:", ";", " @media (min-width:", "px){", "}@media (min-width:", "px){", "}@media (min-width:", "px){", "}@media (min-width:", "px){", "}@media (min-width:", "px){", "}@media (min-width:", "px){", "}.k-Carousel__pagination__button{margin:", ";position:relative;&:focus{z-index:1;}}}.k-Carousel__pageControl{display:flex;flex-direction:row;justify-content:center;position:relative;padding-top:", ";padding-bottom:", ";.k-Carousel__pageControl__pageDot{width:", ";height:", ";margin-left:", ";margin-right:", ";border-radius:", ";background-color:", ";&.k-Carousel__pageControl__pageDot--isVisible{background-color:", ";}}.k-Carousel__pageControl__controlButton{position:absolute;top:", ";bottom:", ";-webkit-tap-highlight-color:transparent;&.k-Carousel__pageControl__controlButton--prev{left:", ";right:50%;}&.k-Carousel__pageControl__controlButton--next{right:", ";left:50%;}}}.k-Carousel__inner{margin:", ";&:focus{outline:", " solid ", ";outline-offset:", ";}display:grid;grid-template-columns:repeat(", ",100%);grid-gap:", ";@media (min-width:", "){grid-gap:", ";}@media (min-width:", "){grid-gap:", ";}min-height:1;overflow-x:scroll;scroll-behavior:smooth;-ms-over-flow-style:none;-webkit-overflow-scrolling:touch;scroll-snap-type:x mandatory;scrollbar-width:none;&::-webkit-scrollbar{display:none;}.k-Carousel__inner__pageContainer{width:100%;scroll-snap-align:start;&:not(.k-Carousel__inner__pageContainer--isActivePage){cursor:pointer;.k-Carousel__page__item > *{pointer-events:none;}}}display:-ms-grid;-ms-grid-columns:(100% ", ")[", "] 100%;@media (min-width:", "){-ms-grid-columns:(100% ", ")[", "] 100%;}@media (min-width:", "){-ms-grid-columns:(100% ", ")[", "] 100%;}.k-Carousel__inner__pageContainer{", " -ms-grid-column-span:1;}}&.k-Carousel--showOtherPages .k-Carousel__inner{margin:0 !important;padding:0 ", ";scroll-padding:", ";@media (min-width:", "){padding:0 ", ";scroll-padding:", ";}.k-Carousel__inner__pageContainer{&:last-child{padding-right:", ";@media (min-width:", "){padding-right:", ";}}}}.k-Carousel__page{display:grid;grid-template-columns:repeat(", ",1fr);grid-gap:", ";@media (min-width:", "){grid-gap:", ";}@media (min-width:", "){grid-gap:", ";}.k-Carousel__page__item{overflow:hidden;padding:", ";}.k-Carousel__page__item > a{&:focus{outline:", " solid ", ";outline-offset:", ";}}display:-ms-grid;-ms-grid-columns:", ";@media (min-width:", "){-ms-grid-columns:", ";}@media (min-width:", "){-ms-grid-columns:", ";}.k-Carousel__page__item{", " -ms-grid-column-span:1;}}"], flexContainerdirectionStyle('default'), ScreenConfig.XXS.min, flexContainerdirectionStyle('fromXxs'), ScreenConfig.XS.min, flexContainerdirectionStyle('fromXs'), ScreenConfig.S.min, flexContainerdirectionStyle('fromS'), ScreenConfig.M.min, flexContainerdirectionStyle('fromM'), ScreenConfig.L.min, flexContainerdirectionStyle('fromL'), ScreenConfig.XL.min, flexContainerdirectionStyle('fromXl'), ScreenConfig.M.max, pxToRem(CONTAINER_PADDING_MOBILE), pxToRem(CONTAINER_PADDING_MOBILE), pxToRem(CONTAINER_PADDING_MOBILE), pxToRem(ScreenConfig.S.min), pxToRem(CONTAINER_PADDING), pxToRem(CONTAINER_PADDING), pxToRem(CONTAINER_PADDING), ScreenConfig.M.min, paginationPositionStyle('default'), ScreenConfig.XXS.min, paginationPositionStyle('fromXxs'), ScreenConfig.XS.min, paginationPositionStyle('fromXs'), ScreenConfig.S.min, paginationPositionStyle('fromS'), ScreenConfig.M.min, paginationPositionStyle('fromM'), ScreenConfig.L.min, paginationPositionStyle('fromL'), ScreenConfig.XL.min, paginationPositionStyle('fromXl'), pxToRem(-2), pxToRem(6), pxToRem(6), pxToRem(2), ColorsConfig.font2, ColorsConfig.font1, pxToRem(-1), buttonsPositionStyle('default'), ScreenConfig.XXS.min, buttonsPositionStyle('fromXxs'), ScreenConfig.XS.min, buttonsPositionStyle('fromXs'), ScreenConfig.S.min, buttonsPositionStyle('fromS'), ScreenConfig.M.min, buttonsPositionStyle('fromM'), ScreenConfig.L.min, buttonsPositionStyle('fromL'), ScreenConfig.XL.min, buttonsPositionStyle('fromXl'), pxToRem(1), pxToRem(CONTAINER_PADDING_MOBILE / 2), pxToRem(CONTAINER_PADDING_MOBILE / 2), pxToRem(8), pxToRem(8), pxToRem(4), pxToRem(4), pxToRem(4), ColorsConfig.font1, ColorsConfig.primary2, pxToRem(CONTAINER_PADDING_MOBILE / 4), pxToRem(CONTAINER_PADDING_MOBILE / 4), pxToRem(CONTAINER_PADDING_MOBILE), pxToRem(CONTAINER_PADDING_MOBILE), pxToRem(-4), ColorsConfig.primary4, pxToRem(2), pxToRem(-2), function (_ref4) {
  var numberOfPages = _ref4.numberOfPages;
  return numberOfPages;
}, pxToRem(CONTAINER_PADDING_MOBILE / 2 - OUTLINE_PLUS_OFFSET * 2), pxToRem(ScreenConfig.S.min), pxToRem(CONTAINER_PADDING / 2 - OUTLINE_PLUS_OFFSET * 2), pxToRem(ScreenConfig.L.min), function (_ref5) {
  var baseItemMarginBetween = _ref5.baseItemMarginBetween;
  return pxToRem(baseItemMarginBetween - OUTLINE_PLUS_OFFSET * 2);
}, pxToRem(CONTAINER_PADDING_MOBILE / 2), function (_ref6) {
  var numberOfPages = _ref6.numberOfPages;
  return numberOfPages - 1;
}, pxToRem(ScreenConfig.S.min), pxToRem(CONTAINER_PADDING / 2), function (_ref7) {
  var numberOfPages = _ref7.numberOfPages;
  return numberOfPages - 1;
}, pxToRem(ScreenConfig.L.min), function (_ref8) {
  var baseItemMarginBetween = _ref8.baseItemMarginBetween;
  return pxToRem(baseItemMarginBetween);
}, function (_ref9) {
  var numberOfPages = _ref9.numberOfPages;
  return numberOfPages - 1;
}, function (_ref10) {
  var numberOfPages = _ref10.numberOfPages;
  return _toConsumableArray(Array(numberOfPages).keys()).map(function (item) {
    return css(["&:nth-child(", "){-ms-grid-column:", ";}"], item + 1, item * 2 + 1);
  });
}, pxToRem(CONTAINER_PADDING_MOBILE - OUTLINE_PLUS_OFFSET), pxToRem(CONTAINER_PADDING_MOBILE - OUTLINE_PLUS_OFFSET), pxToRem(ScreenConfig.S.min), pxToRem(CONTAINER_PADDING - OUTLINE_PLUS_OFFSET), pxToRem(CONTAINER_PADDING - OUTLINE_PLUS_OFFSET), pxToRem(CONTAINER_PADDING_MOBILE - OUTLINE_PLUS_OFFSET), pxToRem(ScreenConfig.S.min), pxToRem(CONTAINER_PADDING - OUTLINE_PLUS_OFFSET), function (_ref11) {
  var numberOfItemsPerPage = _ref11.numberOfItemsPerPage;
  return numberOfItemsPerPage;
}, pxToRem(CONTAINER_PADDING_MOBILE / 2 - OUTLINE_PLUS_OFFSET * 2), pxToRem(ScreenConfig.S.min), pxToRem(CONTAINER_PADDING / 2 - OUTLINE_PLUS_OFFSET * 2), pxToRem(ScreenConfig.L.min), function (_ref12) {
  var baseItemMarginBetween = _ref12.baseItemMarginBetween;
  return pxToRem(baseItemMarginBetween - OUTLINE_PLUS_OFFSET * 2);
}, pxToRem(OUTLINE_PLUS_OFFSET), ColorsConfig.primary4, pxToRem(2), pxToRem(2), function (_ref13) {
  var numberOfItemsPerPage = _ref13.numberOfItemsPerPage;
  return numberOfItemsPerPage > 1 ? css(["(1fr ", ")[", "] 1fr;"], pxToRem(CONTAINER_PADDING_MOBILE / 2), numberOfItemsPerPage - 1) : '1fr';
}, pxToRem(ScreenConfig.S.min), function (_ref14) {
  var numberOfItemsPerPage = _ref14.numberOfItemsPerPage;
  return numberOfItemsPerPage > 1 ? css(["(1fr ", ")[", "] 1fr;"], pxToRem(CONTAINER_PADDING / 2), numberOfItemsPerPage - 1) : '1fr';
}, pxToRem(ScreenConfig.L.min), function (_ref15) {
  var numberOfItemsPerPage = _ref15.numberOfItemsPerPage;
  return numberOfItemsPerPage > 1 ? css(["(1fr ", ")[", "] 1fr;"], function (_ref16) {
    var baseItemMarginBetween = _ref16.baseItemMarginBetween;
    return pxToRem(baseItemMarginBetween);
  }, numberOfItemsPerPage - 1) : '1fr';
}, function (_ref17) {
  var numberOfItemsPerPage = _ref17.numberOfItemsPerPage;
  return _toConsumableArray(Array(numberOfItemsPerPage).keys()).map(function (item) {
    return css(["&:nth-child(", "){-ms-grid-column:", ";}"], item + 1, item * 2 + 1);
  });
});