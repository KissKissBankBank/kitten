"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledCarouselContainer = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _typography = require("../../../helpers/utils/typography");

var _screenConfig = require("../../../constants/screen-config");

var _gridConfig = require("../../../constants/grid-config");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

// STYLE HELPERS
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
  componentId: "sc-194zby1-0"
})(["&.k-Carousel:not(.k-LegacyCarousel){display:flex;", " @media (min-width:", "px){", "}@media (min-width:", "px){", "}@media (min-width:", "px){", "}@media (min-width:", "px){", "}@media (min-width:", "px){", "}@media (min-width:", "px){", "}}&.k-Carousel.k-LegacyCarousel{@media (max-width:", "px){.k-Carousel__inner{padding:0 ", ";scroll-padding:", ";&::after{content:'';display:block;flex-shrink:0;width:", ";}@media (min-width:", "){padding:0 ", ";scroll-padding:", ";&::after{width:", ";}}}}@media (min-width:", "px){.k-Carousel__pagination__buttonContainer{flex-direction:column-reverse !important;}}}.k-Carousel__pagination{display:flex;justify-content:space-between;", " @media (min-width:", "px){", "}@media (min-width:", "px){", "}@media (min-width:", "px){", "}@media (min-width:", "px){", "}@media (min-width:", "px){", "}@media (min-width:", "px){", "}.k-Carousel__pagination__squaresContainer{display:flex;flex-direction:row;margin:", ";}.k-Carousel__pagination__square{display:inline-block;width:", ";height:", ";margin:", ";background-color:", ";&.k-Carousel__pagination__square--isActive{background-color:", ";}}}.k-Carousel__pagination__buttonContainer{display:flex;align-items:flex-start;margin:", ";", " @media (min-width:", "px){", "}@media (min-width:", "px){", "}@media (min-width:", "px){", "}@media (min-width:", "px){", "}@media (min-width:", "px){", "}@media (min-width:", "px){", "}.k-Carousel__pagination__button{margin:", ";}}.k-Carousel__pageControl{display:flex;flex-direction:row;justify-content:center;position:relative;padding-top:", ";padding-bottom:", ";.k-Carousel__pageControl__pageDot{width:", ";height:", ";margin-left:", ";margin-right:", ";border-radius:", ";background-color:", ";&.k-Carousel__pageControl__pageDot--isVisible{background-color:", ";}}.k-Carousel__pageControl__controlButton{position:absolute;top:", ";bottom:", ";-webkit-tap-highlight-color:transparent;&.k-Carousel__pageControl__controlButton--prev{left:", ";right:50%;}&.k-Carousel__pageControl__controlButton--next{right:", ";left:50%;}}}.k-Carousel__inner{display:grid;grid-template-columns:repeat(", ",100%);grid-gap:", ";@media (min-width:", "){grid-gap:", ";}@media (min-width:", "){grid-gap:", ";}overflow-x:scroll;scroll-behavior:smooth;-ms-over-flow-style:none;-webkit-overflow-scrolling:touch;scroll-snap-type:mandatory;min-height:1;&::-webkit-scrollbar{display:none;}.k-Carousel__inner__pageContainer{width:100%;scroll-snap-align:center;&:not(.k-Carousel__inner__pageContainer--isActivePage){cursor:pointer;}}display:-ms-grid;-ms-grid-columns:(100% ", ")[", "] 100%;@media (min-width:", "){-ms-grid-columns:(100% ", ")[", "] 100%;}@media (min-width:", "){-ms-grid-columns:(100% ", ")[", "] 100%;}.k-Carousel__inner__pageContainer{", " -ms-grid-column-span:1;}}&.k-Carousel--showOtherPages .k-Carousel__inner{padding:0 ", ";scroll-padding:", ";@media (min-width:", "){padding:0 ", ";scroll-padding:", ";}.k-Carousel__inner__pageContainer{&:last-child{padding-right:", ";@media (min-width:", "){padding-right:", ";}}}}.k-Carousel__page{display:grid;grid-template-columns:repeat(", ",1fr);grid-gap:", ";@media (min-width:", "){grid-gap:", ";}@media (min-width:", "){grid-gap:", ";}.k-Carousel__page__item{overflow:hidden;}display:-ms-grid;-ms-grid-columns:", ";@media (min-width:", "){-ms-grid-columns:", ";}@media (min-width:", "){-ms-grid-columns:", ";}.k-Carousel__page__item{", " -ms-grid-column-span:1;}}"], flexContainerdirectionStyle('default'), _screenConfig.ScreenConfig.XXS.min, flexContainerdirectionStyle('fromXxs'), _screenConfig.ScreenConfig.XS.min, flexContainerdirectionStyle('fromXs'), _screenConfig.ScreenConfig.S.min, flexContainerdirectionStyle('fromS'), _screenConfig.ScreenConfig.M.min, flexContainerdirectionStyle('fromM'), _screenConfig.ScreenConfig.L.min, flexContainerdirectionStyle('fromL'), _screenConfig.ScreenConfig.XL.min, flexContainerdirectionStyle('fromXl'), _screenConfig.ScreenConfig.M.max, (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_MOBILE), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_MOBILE), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_MOBILE), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING), _screenConfig.ScreenConfig.M.min, paginationPositionStyle('default'), _screenConfig.ScreenConfig.XXS.min, paginationPositionStyle('fromXxs'), _screenConfig.ScreenConfig.XS.min, paginationPositionStyle('fromXs'), _screenConfig.ScreenConfig.S.min, paginationPositionStyle('fromS'), _screenConfig.ScreenConfig.M.min, paginationPositionStyle('fromM'), _screenConfig.ScreenConfig.L.min, paginationPositionStyle('fromL'), _screenConfig.ScreenConfig.XL.min, paginationPositionStyle('fromXl'), (0, _typography.pxToRem)(-2), (0, _typography.pxToRem)(6), (0, _typography.pxToRem)(6), (0, _typography.pxToRem)(2), _colorsConfig.default.font2, _colorsConfig.default.font1, (0, _typography.pxToRem)(-1), buttonsPositionStyle('default'), _screenConfig.ScreenConfig.XXS.min, buttonsPositionStyle('fromXxs'), _screenConfig.ScreenConfig.XS.min, buttonsPositionStyle('fromXs'), _screenConfig.ScreenConfig.S.min, buttonsPositionStyle('fromS'), _screenConfig.ScreenConfig.M.min, buttonsPositionStyle('fromM'), _screenConfig.ScreenConfig.L.min, buttonsPositionStyle('fromL'), _screenConfig.ScreenConfig.XL.min, buttonsPositionStyle('fromXl'), (0, _typography.pxToRem)(1), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_MOBILE / 2), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_MOBILE / 2), (0, _typography.pxToRem)(8), (0, _typography.pxToRem)(8), (0, _typography.pxToRem)(4), (0, _typography.pxToRem)(4), (0, _typography.pxToRem)(4), _colorsConfig.default.font1, _colorsConfig.default.primary2, (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_MOBILE / 4), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_MOBILE / 4), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_MOBILE), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_MOBILE), function (_ref4) {
  var numberOfPages = _ref4.numberOfPages;
  return numberOfPages;
}, (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_MOBILE / 2), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING / 2), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.L.min), function (_ref5) {
  var baseItemMarginBetween = _ref5.baseItemMarginBetween;
  return (0, _typography.pxToRem)(baseItemMarginBetween);
}, (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_MOBILE / 2), function (_ref6) {
  var numberOfPages = _ref6.numberOfPages;
  return numberOfPages - 1;
}, (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING / 2), function (_ref7) {
  var numberOfPages = _ref7.numberOfPages;
  return numberOfPages - 1;
}, (0, _typography.pxToRem)(_screenConfig.ScreenConfig.L.min), function (_ref8) {
  var baseItemMarginBetween = _ref8.baseItemMarginBetween;
  return (0, _typography.pxToRem)(baseItemMarginBetween);
}, function (_ref9) {
  var numberOfPages = _ref9.numberOfPages;
  return numberOfPages - 1;
}, function (_ref10) {
  var numberOfPages = _ref10.numberOfPages;
  return (0, _toConsumableArray2.default)(Array(numberOfPages).keys()).map(function (item) {
    return (0, _styledComponents.css)(["&:nth-child(", "){-ms-grid-column:", ";}"], item + 1, item * 2 + 1);
  });
}, (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_MOBILE), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_MOBILE), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_MOBILE), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING), function (_ref11) {
  var numberOfItemsPerPage = _ref11.numberOfItemsPerPage;
  return numberOfItemsPerPage;
}, (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_MOBILE / 2), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING / 2), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.L.min), function (_ref12) {
  var baseItemMarginBetween = _ref12.baseItemMarginBetween;
  return (0, _typography.pxToRem)(baseItemMarginBetween);
}, function (_ref13) {
  var numberOfItemsPerPage = _ref13.numberOfItemsPerPage;
  return numberOfItemsPerPage > 1 ? (0, _styledComponents.css)(["(1fr ", ")[", "] 1fr;"], (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_MOBILE / 2), numberOfItemsPerPage - 1) : '1fr';
}, (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), function (_ref14) {
  var numberOfItemsPerPage = _ref14.numberOfItemsPerPage;
  return numberOfItemsPerPage > 1 ? (0, _styledComponents.css)(["(1fr ", ")[", "] 1fr;"], (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING / 2), numberOfItemsPerPage - 1) : '1fr';
}, (0, _typography.pxToRem)(_screenConfig.ScreenConfig.L.min), function (_ref15) {
  var numberOfItemsPerPage = _ref15.numberOfItemsPerPage;
  return numberOfItemsPerPage > 1 ? (0, _styledComponents.css)(["(1fr ", ")[", "] 1fr;"], function (_ref16) {
    var baseItemMarginBetween = _ref16.baseItemMarginBetween;
    return (0, _typography.pxToRem)(baseItemMarginBetween);
  }, numberOfItemsPerPage - 1) : '1fr';
}, function (_ref17) {
  var numberOfItemsPerPage = _ref17.numberOfItemsPerPage;
  return (0, _toConsumableArray2.default)(Array(numberOfItemsPerPage).keys()).map(function (item) {
    return (0, _styledComponents.css)(["&:nth-child(", "){-ms-grid-column:", ";}"], item + 1, item * 2 + 1);
  });
});

exports.StyledCarouselContainer = StyledCarouselContainer;