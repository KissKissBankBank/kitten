import styled, { css } from 'styled-components'
import { pxToRem } from '../../../helpers/utils/typography'
import { ScreenConfig } from '../../../constants/screen-config'
import {
  CONTAINER_PADDING,
  CONTAINER_PADDING_MOBILE,
  GUTTER,
} from '../../../constants/grid-config'
import ColorsConfig from '../../../constants/colors-config'

// STYLE HELPERS

const flexContainerdirectionStyle = mediaQuery => ({ paginationPosition }) => {
  if (!paginationPosition || !paginationPosition[mediaQuery]) return

  switch (paginationPosition[mediaQuery]) {
    case 'top':
      return css`
        flex-direction: column-reverse;

        & > :nth-child(2) {
          margin: 0;
          margin-bottom: ${pxToRem(GUTTER)};
        }
      `
    case 'bottom':
    case 'bottom-left':
    case 'bottom-right':
      return css`
        flex-direction: column;

        & > :nth-child(2) {
          margin: 0;
          margin-top: ${pxToRem(GUTTER)};
        }
      `
    case 'left':
      return css`
        flex-direction: row-reverse;

        & > :nth-child(2) {
          margin: 0;
          margin-right: ${pxToRem(GUTTER)};
        }
      `
    case 'right':
      return css`
        flex-direction: row;

        & > :nth-child(2) {
          margin: 0;
          margin-left: ${pxToRem(GUTTER)};
        }
      `
  }
}

const paginationPositionStyle = mediaQuery => ({ paginationPosition }) => {
  if (!paginationPosition || !paginationPosition[mediaQuery]) return

  switch (paginationPosition[mediaQuery]) {
    case 'top':
      return css`
        align-items: flex-end;
        flex-direction: row;
      `
    case 'bottom':
    case 'bottom-left':
      return css`
        align-items: flex-start;
        flex-direction: row;
      `
    case 'bottom-right':
      return css`
        align-items: flex-start;
        flex-direction: row-reverse;
      `
    case 'left':
      return css`
        align-items: flex-end;
        flex-direction: column;
      `
    case 'right':
      return css`
        align-items: flex-start;
        flex-direction: column;
      `
  }
}

const buttonsPositionStyle = mediaQuery => ({ paginationPosition }) => {
  if (!paginationPosition || !paginationPosition[mediaQuery]) return

  switch (paginationPosition[mediaQuery]) {
    case 'top':
    case 'bottom':
    case 'bottom-left':
    case 'bottom-right':
      return css`
        flex-direction: row;
      `
    case 'left':
      return css`
        flex-direction: column;
      `
    case 'right':
      return css`
        flex-direction: column-reverse;
      `
  }
}

// Styled component

export const StyledCarouselContainer = styled.div`

  &.k-Carousel:not(.k-LegacyCarousel) {
    display: flex;
    ${flexContainerdirectionStyle('default')}

    @media (min-width: ${ScreenConfig.XXS.min}px) {
      ${flexContainerdirectionStyle('fromXxs')}
    }

    @media (min-width: ${ScreenConfig.XS.min}px) {
      ${flexContainerdirectionStyle('fromXs')}
    }

    @media (min-width: ${ScreenConfig.S.min}px) {
      ${flexContainerdirectionStyle('fromS')}
    }

    @media (min-width: ${ScreenConfig.M.min}px) {
      ${flexContainerdirectionStyle('fromM')}
    }

    @media (min-width: ${ScreenConfig.L.min}px) {
      ${flexContainerdirectionStyle('fromL')}
    }

    @media (min-width: ${ScreenConfig.XL.min}px) {
      ${flexContainerdirectionStyle('fromXl')}
    }
  }

  &.k-Carousel.k-LegacyCarousel {
    @media (max-width: ${ScreenConfig.M.max}px) {
      .k-Grid {
        margin-left: 0 !important;
        margin-right: 0 !important;
      }
      .k-Grid__col--12 {
        padding-left: 0 !important;
        padding-right: 0 !important;
      }

      .k-Carousel__inner {
        padding: 0 ${pxToRem(CONTAINER_PADDING_MOBILE)};
        scroll-padding: ${pxToRem(CONTAINER_PADDING_MOBILE)};

        &::after {
          content: '';
          display: block;
          flex-shrink: 0;
          width: ${pxToRem(CONTAINER_PADDING_MOBILE)};
        }

        @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
          padding: 0 ${pxToRem(CONTAINER_PADDING)};
          scroll-padding: ${pxToRem(CONTAINER_PADDING)};

          &::after {
            width: ${pxToRem(CONTAINER_PADDING)};
          }
        }
      }
    }

    @media (min-width: ${ScreenConfig.M.min}px) {
      .k-Carousel__pagination__buttonContainer {
        flex-direction: column-reverse !important;
      }
    }
  }


  .k-Carousel__pagination {
    display: flex;
    justify-content: space-between;

    ${paginationPositionStyle('default')}

    @media (min-width: ${ScreenConfig.XXS.min}px) {
      ${paginationPositionStyle('fromXxs')}
    }

    @media (min-width: ${ScreenConfig.XS.min}px) {
      ${paginationPositionStyle('fromXs')}
    }

    @media (min-width: ${ScreenConfig.S.min}px) {
      ${paginationPositionStyle('fromS')}
    }

    @media (min-width: ${ScreenConfig.M.min}px) {
      ${paginationPositionStyle('fromM')}
    }

    @media (min-width: ${ScreenConfig.L.min}px) {
      ${paginationPositionStyle('fromL')}
    }

    @media (min-width: ${ScreenConfig.XL.min}px) {
      ${paginationPositionStyle('fromXl')}
    }

    .k-Carousel__pagination__squaresContainer {
      display: flex;
      flex-direction: row;
      margin: ${pxToRem(-2)};
    }

    .k-Carousel__pagination__square {
      display: inline-block;
      width: ${pxToRem(6)};
      height: ${pxToRem(6)};
      margin: ${pxToRem(2)};
      background-color: ${ColorsConfig.font2};

      &.k-Carousel__pagination__square--isActive {
        background-color: ${ColorsConfig.font1};
      }
    }
  }

  .k-Carousel__pagination__buttonContainer {
    display: flex;
    align-items: flex-start;
    margin: ${pxToRem(-1)};

    ${buttonsPositionStyle('default')}

    @media (min-width: ${ScreenConfig.XXS.min}px) {
      ${buttonsPositionStyle('fromXxs')}
    }

    @media (min-width: ${ScreenConfig.XS.min}px) {
      ${buttonsPositionStyle('fromXs')}
    }

    @media (min-width: ${ScreenConfig.S.min}px) {
      ${buttonsPositionStyle('fromS')}
    }

    @media (min-width: ${ScreenConfig.M.min}px) {
      ${buttonsPositionStyle('fromM')}
    }

    @media (min-width: ${ScreenConfig.L.min}px) {
      ${buttonsPositionStyle('fromL')}
    }

    @media (min-width: ${ScreenConfig.XL.min}px) {
      ${buttonsPositionStyle('fromXl')}
    }

    .k-Carousel__pagination__button {
      margin: ${pxToRem(1)};
    }
  }


  .k-Carousel__pageControl {
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: relative;
    padding-top: ${pxToRem(CONTAINER_PADDING_MOBILE / 2)};
    padding-bottom: ${pxToRem(CONTAINER_PADDING_MOBILE / 2)};

    .k-Carousel__pageControl__pageDot {
      width: ${pxToRem(8)};
      height: ${pxToRem(8)};
      margin-left: ${pxToRem(4)};
      margin-right: ${pxToRem(4)};
      border-radius: ${pxToRem(4)};
      background-color: ${ColorsConfig.font1};

      &.k-Carousel__pageControl__pageDot--isVisible {
        background-color: ${ColorsConfig.primary2};
      }
    }

    .k-Carousel__pageControl__controlButton {
      position: absolute;
      top: ${pxToRem(CONTAINER_PADDING_MOBILE / 4)};
      bottom: ${pxToRem(CONTAINER_PADDING_MOBILE / 4)};
      -webkit-tap-highlight-color: transparent;

      &.k-Carousel__pageControl__controlButton--prev {
        left: ${pxToRem(CONTAINER_PADDING_MOBILE)};
        right: 50%;
      }
      &.k-Carousel__pageControl__controlButton--next {
        right: ${pxToRem(CONTAINER_PADDING_MOBILE)};
        left: 50%;
      }
    }
  }

  // Carousel Inner

  .k-Carousel__inner {
    display: grid;
    grid-template-columns: repeat(${({ numberOfPages }) =>
      numberOfPages}, 100%);

    grid-gap: ${pxToRem(CONTAINER_PADDING_MOBILE / 2)};

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      grid-gap: ${pxToRem(CONTAINER_PADDING / 2)};
    }

    @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
      grid-gap: ${({ baseItemMarginBetween }) =>
        pxToRem(baseItemMarginBetween)};
    }

    overflow-x: scroll;
    scroll-behavior: smooth;
    /* hide scrollbar on IE and Edge */
    -ms-over-flow-style: none;
    /* mandatory to combine scroll with this property on iOS */
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: mandatory;
    /* Fix bug IE11 ResizeObserver, to trigger a first resize */
    min-height: 1;

    /* hide scrollbar on Chrome and Safari */
    &::-webkit-scrollbar {
      display: none;
    }

    .k-Carousel__inner__pageContainer {
      width: 100%;
      scroll-snap-align: center;

      &:not(.k-Carousel__inner__pageContainer--isActivePage) {
        cursor: pointer;
      }
    }

    /* IE11 support */
    display: -ms-grid;
    -ms-grid-columns: (100% ${pxToRem(CONTAINER_PADDING_MOBILE / 2)})[${({
  numberOfPages,
}) => numberOfPages - 1}] 100%;

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      -ms-grid-columns: (100% ${pxToRem(CONTAINER_PADDING / 2)})[${({
  numberOfPages,
}) => numberOfPages - 1}] 100%;
    }
    @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
      -ms-grid-columns: (100% ${({ baseItemMarginBetween }) =>
        pxToRem(baseItemMarginBetween)})[${({ numberOfPages }) =>
  numberOfPages - 1}] 100%;
    }

    .k-Carousel__inner__pageContainer {
      ${({ numberOfPages }) =>
        [...Array(numberOfPages).keys()].map(
          item => css`
            &:nth-child(${item + 1}) {
              -ms-grid-column: ${item * 2 + 1};
            }
          `,
        )}
      -ms-grid-column-span: 1;
    }
  }

  &.k-Carousel--showOtherPages .k-Carousel__inner {
    padding: 0 ${pxToRem(CONTAINER_PADDING_MOBILE)};
    scroll-padding: ${pxToRem(CONTAINER_PADDING_MOBILE)};

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      padding: 0 ${pxToRem(CONTAINER_PADDING)};
      scroll-padding: ${pxToRem(CONTAINER_PADDING)};
    }

    .k-Carousel__inner__pageContainer {
      &:last-child {
        padding-right: ${pxToRem(CONTAINER_PADDING_MOBILE)};

        @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
          padding-right: ${pxToRem(CONTAINER_PADDING)};
        }
      }
    }
  }


  // Carousel Page

  .k-Carousel__page {
    display: grid;
    grid-template-columns: repeat(${({ numberOfItemsPerPage }) =>
      numberOfItemsPerPage}, 1fr);
    grid-gap: ${pxToRem(CONTAINER_PADDING_MOBILE / 2)};

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      grid-gap: ${pxToRem(CONTAINER_PADDING / 2)};
    }
    @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
      grid-gap: ${({ baseItemMarginBetween }) =>
        pxToRem(baseItemMarginBetween)};
    }

    .k-Carousel__page__item {
      overflow: hidden;
    }

    /* IE11 support */
    display: -ms-grid;
    -ms-grid-columns: ${({ numberOfItemsPerPage }) =>
      numberOfItemsPerPage > 1
        ? css`
    (1fr ${pxToRem(CONTAINER_PADDING_MOBILE / 2)})[${
            numberOfItemsPerPage - 1
          }] 1fr;
    `
        : '1fr'};

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      -ms-grid-columns: ${({ numberOfItemsPerPage }) =>
        numberOfItemsPerPage > 1
          ? css`
      (1fr ${pxToRem(CONTAINER_PADDING / 2)})[${numberOfItemsPerPage - 1}] 1fr;
      `
          : '1fr'};
    }
    @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
      -ms-grid-columns: ${({ numberOfItemsPerPage }) =>
        numberOfItemsPerPage > 1
          ? css`
      (1fr ${({ baseItemMarginBetween }) => pxToRem(baseItemMarginBetween)})[${
              numberOfItemsPerPage - 1
            }] 1fr;
      `
          : '1fr'};
    }

    .k-Carousel__page__item {
      ${({ numberOfItemsPerPage }) =>
        [...Array(numberOfItemsPerPage).keys()].map(
          item => css`
            &:nth-child(${item + 1}) {
              -ms-grid-column: ${item * 2 + 1};
            }
          `,
        )}
      -ms-grid-column-span: 1;
    }
  }
`
