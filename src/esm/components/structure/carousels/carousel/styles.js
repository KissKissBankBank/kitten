import styled, { css } from 'styled-components';
import { pxToRem } from '../../../../helpers/utils/typography';
import { ScreenConfig } from '../../../../constants/screen-config';
import { CONTAINER_PADDING, CONTAINER_PADDING_THIN, GUTTER } from '../../../../constants/grid-config';
import COLORS from '../../../../constants/colors-config';
export const OUTLINE_PLUS_OFFSET = 4; // STYLE HELPERS

const flexContainerdirectionStyle = mediaQuery => _ref => {
  let {
    paginationPosition
  } = _ref;
  if (!paginationPosition || !paginationPosition[mediaQuery]) return;

  switch (paginationPosition[mediaQuery]) {
    case 'top':
      return css(["flex-direction:column-reverse;& > :nth-child(2){margin:0;margin-bottom:", ";}"], pxToRem(GUTTER));

    case 'bottom':
    case 'bottom-left':
    case 'bottom-right':
      return css(["flex-direction:column;& > :nth-child(2){margin:0;margin-top:", ";}"], pxToRem(GUTTER));

    case 'left':
      return css(["flex-direction:row-reverse;& > :nth-child(2){margin:0;margin-right:", ";}"], pxToRem(GUTTER));

    case 'right':
      return css(["flex-direction:row;& > :nth-child(2){margin:0;margin-left:", ";}"], pxToRem(GUTTER));
  }
};

const paginationPositionStyle = mediaQuery => _ref2 => {
  let {
    paginationPosition
  } = _ref2;
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

const buttonsPositionStyle = mediaQuery => _ref3 => {
  let {
    paginationPosition
  } = _ref3;
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
}; // Styled component


export const StyledCarouselContainer = styled.div.withConfig({
  displayName: "styles__StyledCarouselContainer",
  componentId: "sc-197fuac-0"
})(["--carousel-innerSpacing:max( ", ",var(--carousel-shadowSize,0px) );&.k-Carousel:not(.k-LegacyCarousel){display:flex;", " @media (min-width:", "px){", "}@media (min-width:", "px){", "}@media (min-width:", "px){", "}@media (min-width:", "px){", "}@media (min-width:", "px){", "}@media (min-width:", "px){", "}}&.k-Carousel.k-LegacyCarousel{@media (max-width:", "px){.k-Grid{margin-left:0 !important;margin-right:0 !important;}.k-Grid__col--12{padding-left:0 !important;padding-right:0 !important;}.k-Carousel__inner{padding:0 ", ";scroll-padding:", ";&::after{content:'';display:block;flex-shrink:0;width:", ";}@media (min-width:", "){padding:0 ", ";scroll-padding:", ";&::after{width:", ";}}}}@media (min-width:", "px){.k-Carousel__pagination__buttonContainer{flex-direction:column-reverse !important;}}}.k-Carousel__pagination{display:flex;justify-content:space-between;", " @media (min-width:", "px){", "}@media (min-width:", "px){", "}@media (min-width:", "px){", "}@media (min-width:", "px){", "}@media (min-width:", "px){", "}@media (min-width:", "px){", "}.k-Carousel__pagination__squaresContainer{display:flex;flex-direction:row;margin:", ";}.k-Carousel__pagination__square{display:inline-block;width:", ";height:", ";margin:", ";background-color:", ";&.k-Carousel__pagination__square--isActive{background-color:", ";}}}.k-Carousel__pagination__buttonContainer{display:flex;align-items:flex-start;margin:", ";", " @media (min-width:", "px){", "}@media (min-width:", "px){", "}@media (min-width:", "px){", "}@media (min-width:", "px){", "}@media (min-width:", "px){", "}@media (min-width:", "px){", "}.k-Carousel__pagination__button{margin:", ";position:relative;&:focus{z-index:1;}}}.k-Carousel__pageControl{display:flex;flex-direction:row;justify-content:center;position:relative;padding-top:", ";padding-bottom:", ";.k-Carousel__pageControl__pageDot{width:", ";height:", ";margin-left:", ";margin-right:", ";border-radius:var(--border-radius-rounded);background-color:", ";&.k-Carousel__pageControl__pageDot--isVisible{background-color:", ";}}.k-Carousel__pageControl__controlButton{position:absolute;top:", ";bottom:", ";-webkit-tap-highlight-color:transparent;&.k-Carousel__pageControl__controlButton--prev{left:", ";right:50%;}&.k-Carousel__pageControl__controlButton--next{right:", ";left:50%;}}}.k-Carousel__inner{margin:calc(-1 * var(--carousel-innerSpacing));display:grid;grid-template-columns:repeat(var(--carousel-numberOfPages),100%);grid-gap:calc( (", " / 2) - (var(--carousel-innerSpacing) * 2) );@media (min-width:", "){grid-gap:calc( (", " / 2) - (var(--carousel-innerSpacing) * 2) );}@media (min-width:", "){grid-gap:calc( var(--carousel-baseItemMarginBetween) - (var(--carousel-innerSpacing) * 2) );}overflow-x:scroll;scroll-behavior:smooth;-webkit-overflow-scrolling:touch;scroll-snap-type:x mandatory;scrollbar-width:none;&::-webkit-scrollbar{display:none;}.k-Carousel__inner__pageContainer{width:100%;scroll-snap-align:start;position:relative;.k-Carousel__inner__button{cursor:pointer;position:absolute;top:0;left:0;width:100%;height:100%;}&:not(.k-Carousel__inner__pageContainer--isActivePage) .k-Carousel__page__item > *{pointer-events:none;}}}&.k-Carousel--showOtherPages .k-Carousel__inner{margin:0 !important;padding:0 calc(", " - var(--carousel-innerSpacing));scroll-padding:calc( ", " - var(--carousel-innerSpacing) );@media (min-width:", "){padding:0 calc(", " - var(--carousel-innerSpacing));scroll-padding:calc( ", " - var(--carousel-innerSpacing) );}.k-Carousel__inner__pageContainer{&:last-child{padding-right:calc( ", " - var(--carousel-innerSpacing) );@media (min-width:", "){padding-right:calc( ", " - var(--carousel-innerSpacing) );}}}}.k-Carousel__page{display:grid;grid-template-columns:repeat(var(--carousel-numberOfItemsPerPage),1fr);grid-gap:calc( ", " - (var(--carousel-innerSpacing) * 2) );@media (min-width:", "){grid-gap:calc( ", " - (var(--carousel-innerSpacing) * 2) );}@media (min-width:", "){grid-gap:calc( var(--carousel-baseItemMarginBetween) - (var(--carousel-innerSpacing) * 2) );}.k-Carousel__page__item{overflow:hidden;padding-inline:min( var(--carousel-innerSpacing),calc(var(--carousel-baseItemMarginBetween) / 2) );padding-block:var(--carousel-innerSpacing);:first-child{padding-left:var(--carousel-innerSpacing);}:last-child{padding-right:var(--carousel-innerSpacing);}}}"], pxToRem(OUTLINE_PLUS_OFFSET), flexContainerdirectionStyle('default'), ScreenConfig.XXS.min, flexContainerdirectionStyle('fromXxs'), ScreenConfig.XS.min, flexContainerdirectionStyle('fromXs'), ScreenConfig.S.min, flexContainerdirectionStyle('fromS'), ScreenConfig.M.min, flexContainerdirectionStyle('fromM'), ScreenConfig.L.min, flexContainerdirectionStyle('fromL'), ScreenConfig.XL.min, flexContainerdirectionStyle('fromXl'), ScreenConfig.M.max, pxToRem(CONTAINER_PADDING_THIN), pxToRem(CONTAINER_PADDING_THIN), pxToRem(CONTAINER_PADDING_THIN), pxToRem(ScreenConfig.S.min), pxToRem(CONTAINER_PADDING), pxToRem(CONTAINER_PADDING), pxToRem(CONTAINER_PADDING), ScreenConfig.M.min, paginationPositionStyle('default'), ScreenConfig.XXS.min, paginationPositionStyle('fromXxs'), ScreenConfig.XS.min, paginationPositionStyle('fromXs'), ScreenConfig.S.min, paginationPositionStyle('fromS'), ScreenConfig.M.min, paginationPositionStyle('fromM'), ScreenConfig.L.min, paginationPositionStyle('fromL'), ScreenConfig.XL.min, paginationPositionStyle('fromXl'), pxToRem(-2), pxToRem(6), pxToRem(6), pxToRem(2), COLORS.font2, COLORS.font1, pxToRem(-1), buttonsPositionStyle('default'), ScreenConfig.XXS.min, buttonsPositionStyle('fromXxs'), ScreenConfig.XS.min, buttonsPositionStyle('fromXs'), ScreenConfig.S.min, buttonsPositionStyle('fromS'), ScreenConfig.M.min, buttonsPositionStyle('fromM'), ScreenConfig.L.min, buttonsPositionStyle('fromL'), ScreenConfig.XL.min, buttonsPositionStyle('fromXl'), pxToRem(1), pxToRem(CONTAINER_PADDING_THIN / 2), pxToRem(CONTAINER_PADDING_THIN / 2), pxToRem(8), pxToRem(8), pxToRem(4), pxToRem(4), COLORS.font1, COLORS.primary2, pxToRem(CONTAINER_PADDING_THIN / 4), pxToRem(CONTAINER_PADDING_THIN / 4), pxToRem(CONTAINER_PADDING_THIN), pxToRem(CONTAINER_PADDING_THIN), pxToRem(CONTAINER_PADDING_THIN), pxToRem(ScreenConfig.S.min), pxToRem(CONTAINER_PADDING), pxToRem(ScreenConfig.L.min), pxToRem(CONTAINER_PADDING_THIN), pxToRem(CONTAINER_PADDING_THIN), pxToRem(ScreenConfig.S.min), pxToRem(CONTAINER_PADDING), pxToRem(CONTAINER_PADDING), pxToRem(CONTAINER_PADDING_THIN), pxToRem(ScreenConfig.S.min), pxToRem(CONTAINER_PADDING), pxToRem(CONTAINER_PADDING_THIN / 2), pxToRem(ScreenConfig.S.min), pxToRem(CONTAINER_PADDING / 2), pxToRem(ScreenConfig.L.min));