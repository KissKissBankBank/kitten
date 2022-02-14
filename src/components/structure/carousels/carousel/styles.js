"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.StyledCarouselContainer = exports.OUTLINE_PLUS_OFFSET = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _typography = require("../../../../helpers/utils/typography");

var _screenConfig = require("../../../../constants/screen-config");

var _gridConfig = require("../../../../constants/grid-config");

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var OUTLINE_PLUS_OFFSET = 4; // STYLE HELPERS

exports.OUTLINE_PLUS_OFFSET = OUTLINE_PLUS_OFFSET;

var flexContainerdirectionStyle = function flexContainerdirectionStyle(mediaQuery) {
  return function (_ref) {
    var paginationPosition = _ref.paginationPosition;
    if (!paginationPosition || !paginationPosition[mediaQuery]) return;

    switch (paginationPosition[mediaQuery]) {
      case 'top':
        return (0, _styledComponents.css)(["flex-direction:column-reverse;& >:nth-child(2){margin:0;margin-bottom:", ";}"], (0, _typography.pxToRem)(_gridConfig.GUTTER));

      case 'bottom':
      case 'bottom-left':
      case 'bottom-right':
        return (0, _styledComponents.css)(["flex-direction:column;& >:nth-child(2){margin:0;margin-top:", ";}"], (0, _typography.pxToRem)(_gridConfig.GUTTER));

      case 'left':
        return (0, _styledComponents.css)(["flex-direction:row-reverse;& >:nth-child(2){margin:0;margin-right:", ";}"], (0, _typography.pxToRem)(_gridConfig.GUTTER));

      case 'right':
        return (0, _styledComponents.css)(["flex-direction:row;& >:nth-child(2){margin:0;margin-left:", ";}"], (0, _typography.pxToRem)(_gridConfig.GUTTER));
    }
  };
};

var paginationPositionStyle = function paginationPositionStyle(mediaQuery) {
  return function (_ref2) {
    var paginationPosition = _ref2.paginationPosition;
    if (!paginationPosition || !paginationPosition[mediaQuery]) return;

    switch (paginationPosition[mediaQuery]) {
      case 'top':
        return (0, _styledComponents.css)(["align-items:flex-end;flex-direction:row;"]);

      case 'bottom':
      case 'bottom-left':
        return (0, _styledComponents.css)(["align-items:flex-start;flex-direction:row;"]);

      case 'bottom-right':
        return (0, _styledComponents.css)(["align-items:flex-start;flex-direction:row-reverse;"]);

      case 'left':
        return (0, _styledComponents.css)(["align-items:flex-end;flex-direction:column;"]);

      case 'right':
        return (0, _styledComponents.css)(["align-items:flex-start;flex-direction:column;"]);
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
        return (0, _styledComponents.css)(["flex-direction:row;"]);

      case 'left':
        return (0, _styledComponents.css)(["flex-direction:column;"]);

      case 'right':
        return (0, _styledComponents.css)(["flex-direction:column-reverse;"]);
    }
  };
}; // Styled component


var StyledCarouselContainer = _styledComponents.default.div.withConfig({
  displayName: "styles__StyledCarouselContainer",
  componentId: "sc-197fuac-0"
})(["&.k-Carousel:not(.k-LegacyCarousel){display:flex;", " @media (min-width:", "px){", "}@media (min-width:", "px){", "}@media (min-width:", "px){", "}@media (min-width:", "px){", "}@media (min-width:", "px){", "}@media (min-width:", "px){", "}}&.k-Carousel.k-LegacyCarousel{@media (max-width:", "px){.k-Grid{margin-left:0 !important;margin-right:0 !important;}.k-Grid__col--12{padding-left:0 !important;padding-right:0 !important;}.k-Carousel__inner{padding:0 ", ";scroll-padding:", ";&::after{content:'';display:block;flex-shrink:0;width:", ";}@media (min-width:", "){padding:0 ", ";scroll-padding:", ";&::after{width:", ";}}}}@media (min-width:", "px){.k-Carousel__pagination__buttonContainer{flex-direction:column-reverse !important;}}}.k-Carousel__pagination{display:flex;justify-content:space-between;", " @media (min-width:", "px){", "}@media (min-width:", "px){", "}@media (min-width:", "px){", "}@media (min-width:", "px){", "}@media (min-width:", "px){", "}@media (min-width:", "px){", "}.k-Carousel__pagination__squaresContainer{display:flex;flex-direction:row;margin:", ";}.k-Carousel__pagination__square{display:inline-block;width:", ";height:", ";margin:", ";background-color:", ";&.k-Carousel__pagination__square--isActive{background-color:", ";}}}.k-Carousel__pagination__buttonContainer{display:flex;align-items:flex-start;margin:", ";", " @media (min-width:", "px){", "}@media (min-width:", "px){", "}@media (min-width:", "px){", "}@media (min-width:", "px){", "}@media (min-width:", "px){", "}@media (min-width:", "px){", "}.k-Carousel__pagination__button{margin:", ";position:relative;&:focus{z-index:1;}}}.k-Carousel__pageControl{display:flex;flex-direction:row;justify-content:center;position:relative;padding-top:", ";padding-bottom:", ";.k-Carousel__pageControl__pageDot{width:", ";height:", ";margin-left:", ";margin-right:", ";border-radius:var(--border-radius-rounded);background-color:", ";&.k-Carousel__pageControl__pageDot--isVisible{background-color:", ";}}.k-Carousel__pageControl__controlButton{position:absolute;top:", ";bottom:", ";-webkit-tap-highlight-color:transparent;&.k-Carousel__pageControl__controlButton--prev{left:", ";right:50%;}&.k-Carousel__pageControl__controlButton--next{right:", ";left:50%;}}}.k-Carousel__inner{margin:", ";display:grid;grid-template-columns:repeat( ", ",100% );grid-gap:", ";@media (min-width:", "){grid-gap:", ";}@media (min-width:", "){grid-gap:", ";}overflow-x:scroll;scroll-behavior:smooth;-webkit-overflow-scrolling:touch;scroll-snap-type:x mandatory;scrollbar-width:none;&::-webkit-scrollbar{display:none;}.k-Carousel__inner__pageContainer{width:100%;scroll-snap-align:start;position:relative;.k-Carousel__inner__button{cursor:pointer;position:absolute;top:0;left:0;width:100%;height:100%;}&:not(.k-Carousel__inner__pageContainer--isActivePage) .k-Carousel__page__item > *{pointer-events:none;}}}&.k-Carousel--showOtherPages .k-Carousel__inner{margin:0 !important;padding:0 ", ";scroll-padding:", ";@media (min-width:", "){padding:0 ", ";scroll-padding:", ";}.k-Carousel__inner__pageContainer{&:last-child{padding-right:", ";@media (min-width:", "){padding-right:", ";}}}}.k-Carousel__page{display:grid;grid-template-columns:repeat( ", ",1fr );grid-gap:", ";@media (min-width:", "){grid-gap:", ";}@media (min-width:", "){grid-gap:", ";}.k-Carousel__page__item{overflow:hidden;padding:", ";}}"], flexContainerdirectionStyle('default'), _screenConfig.ScreenConfig.XXS.min, flexContainerdirectionStyle('fromXxs'), _screenConfig.ScreenConfig.XS.min, flexContainerdirectionStyle('fromXs'), _screenConfig.ScreenConfig.S.min, flexContainerdirectionStyle('fromS'), _screenConfig.ScreenConfig.M.min, flexContainerdirectionStyle('fromM'), _screenConfig.ScreenConfig.L.min, flexContainerdirectionStyle('fromL'), _screenConfig.ScreenConfig.XL.min, flexContainerdirectionStyle('fromXl'), _screenConfig.ScreenConfig.M.max, (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING), _screenConfig.ScreenConfig.M.min, paginationPositionStyle('default'), _screenConfig.ScreenConfig.XXS.min, paginationPositionStyle('fromXxs'), _screenConfig.ScreenConfig.XS.min, paginationPositionStyle('fromXs'), _screenConfig.ScreenConfig.S.min, paginationPositionStyle('fromS'), _screenConfig.ScreenConfig.M.min, paginationPositionStyle('fromM'), _screenConfig.ScreenConfig.L.min, paginationPositionStyle('fromL'), _screenConfig.ScreenConfig.XL.min, paginationPositionStyle('fromXl'), (0, _typography.pxToRem)(-2), (0, _typography.pxToRem)(6), (0, _typography.pxToRem)(6), (0, _typography.pxToRem)(2), _colorsConfig.default.font2, _colorsConfig.default.font1, (0, _typography.pxToRem)(-1), buttonsPositionStyle('default'), _screenConfig.ScreenConfig.XXS.min, buttonsPositionStyle('fromXxs'), _screenConfig.ScreenConfig.XS.min, buttonsPositionStyle('fromXs'), _screenConfig.ScreenConfig.S.min, buttonsPositionStyle('fromS'), _screenConfig.ScreenConfig.M.min, buttonsPositionStyle('fromM'), _screenConfig.ScreenConfig.L.min, buttonsPositionStyle('fromL'), _screenConfig.ScreenConfig.XL.min, buttonsPositionStyle('fromXl'), (0, _typography.pxToRem)(1), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN / 2), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN / 2), (0, _typography.pxToRem)(8), (0, _typography.pxToRem)(8), (0, _typography.pxToRem)(4), (0, _typography.pxToRem)(4), _colorsConfig.default.font1, _colorsConfig.default.primary2, (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN / 4), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN / 4), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN), (0, _typography.pxToRem)(-4), function (_ref4) {
  var numberOfPages = _ref4.numberOfPages;
  return numberOfPages;
}, (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN / 2 - OUTLINE_PLUS_OFFSET * 2), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING / 2 - OUTLINE_PLUS_OFFSET * 2), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.L.min), function (_ref5) {
  var baseItemMarginBetween = _ref5.baseItemMarginBetween;
  return (0, _typography.pxToRem)(baseItemMarginBetween - OUTLINE_PLUS_OFFSET * 2);
}, (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN - OUTLINE_PLUS_OFFSET), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN - OUTLINE_PLUS_OFFSET), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING - OUTLINE_PLUS_OFFSET), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING - OUTLINE_PLUS_OFFSET), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN - OUTLINE_PLUS_OFFSET), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING - OUTLINE_PLUS_OFFSET), function (_ref6) {
  var numberOfItemsPerPage = _ref6.numberOfItemsPerPage;
  return numberOfItemsPerPage;
}, (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN / 2 - OUTLINE_PLUS_OFFSET * 2), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING / 2 - OUTLINE_PLUS_OFFSET * 2), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.L.min), function (_ref7) {
  var baseItemMarginBetween = _ref7.baseItemMarginBetween;
  return (0, _typography.pxToRem)(baseItemMarginBetween - OUTLINE_PLUS_OFFSET * 2);
}, (0, _typography.pxToRem)(OUTLINE_PLUS_OFFSET));

exports.StyledCarouselContainer = StyledCarouselContainer;