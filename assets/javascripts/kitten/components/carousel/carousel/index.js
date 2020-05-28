import React, { Component } from 'react'
import deprecated from 'prop-types-extra/lib/deprecated'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { pxToRem } from '../../../helpers/utils/typography'
import { ScreenConfig } from '../../../constants/screen-config'
import { createRangeFromZeroTo } from '../../../helpers/utils/range'
import { withMediaQueries } from '../../../hoc/media-queries'
import {
  CONTAINER_PADDING,
  CONTAINER_PADDING_MOBILE,
  GUTTER,
} from '../../../constants/grid-config'
import ColorsConfig from '../../../constants/colors-config'
import { Button } from '../../../components/buttons/button/button'
import { ArrowIcon } from '../../../components/icons/arrow-icon'
import { CarouselInner } from './components/carousel-inner'
import { VisuallyHidden } from '../../../components/accessibility/visually-hidden'
import classNames from 'classnames'
import { Grid, GridCol } from '../../../components/grid/grid'

const getDataLength = ({ data, children }) => {
  if (!!data) return data.length
  return React.Children.count(children)
}

export const getNumColumnsForWidth = (
  width,
  itemMinWidth,
  itemMarginBetween,
) => {
  if (width === 0 || itemMinWidth === 0) return 0

  const remainingWidthWithOneCard = width - itemMinWidth
  const itemWidthAndMargin = itemMinWidth + itemMarginBetween

  const numColumns =
    Math.floor(remainingWidthWithOneCard / itemWidthAndMargin) + 1

  return numColumns
}

export const getNumPagesForColumnsAndDataLength = (dataLength, numColumns) => {
  if (dataLength === 0 || numColumns === 0) return 0

  const numPages = Math.ceil(dataLength / numColumns)

  return numPages
}

export const checkPage = (numPages, newPage) => {
  if (numPages < 1) return 0
  if (newPage < 0) return 0
  if (newPage >= numPages) return numPages - 1

  return newPage
}

export const checkPageLoop = (numPages, newPage) => {
  if (numPages < 1) return 0
  if (newPage < 0) return numPages - 1
  if (newPage >= numPages) return 0

  return newPage
}

const getMarginBetweenAccordingToViewport = (
  baseItemMarginBetween,
  viewportIsXSOrLess,
  viewportIsMOrLess,
) => {
  if (viewportIsXSOrLess) return CONTAINER_PADDING_MOBILE / 2
  if (viewportIsMOrLess) return CONTAINER_PADDING / 2

  return baseItemMarginBetween
}

const propTypesPositions = PropTypes.oneOf([
  'top',
  'right',
  'bottom',
  'left',
  'bottom-left',
  'bottom-right',
])

class CarouselBase extends Component {
  static defaultProps = {
    hidePaginationOnMobile: false,
    hidePagination: false,
    showOtherPages: false,
    pagesClassName: null,
    preferCompletePaginationOnMobile: false,
    paginationPosition: {
      default: 'right',
      fromM: 'bottom',
    },
    prevButtonText: 'Previous items',
    nextButtonText: 'Next items',
    firstButtonText: 'First items',
    lastButtonText: 'Last items',
    showPageSquares: false,
    tinyButtons: false,
    loop: false,
    legacyGrid: true,
  }

  static propTypes = {
    itemMinWidth: PropTypes.number.isRequired,
    baseItemMarginBetween: PropTypes.number.isRequired,
    children: PropTypes.node,
    viewportIsMOrLess: PropTypes.bool.isRequired,
    viewportIsXSOrLess: PropTypes.bool.isRequired,
    hidePaginationOnMobile: PropTypes.bool,
    hidePagination: PropTypes.bool,
    showOtherPages: PropTypes.bool,
    pagesClassName: PropTypes.string,
    preferCompletePaginationOnMobile: PropTypes.bool,
    paginationPosition: PropTypes.shape({
      default: propTypesPositions,
      fromXxs: propTypesPositions,
      fromXs: propTypesPositions,
      fromS: propTypesPositions,
      fromM: propTypesPositions,
      fromL: propTypesPositions,
      fromXl: propTypesPositions,
    }),
    prevButtonText: PropTypes.string,
    nextButtonText: PropTypes.string,
    tinyButtons: PropTypes.bool,
    firstButtonText: PropTypes.string,
    lastButtonText: PropTypes.string,
    showPageSquares: PropTypes.bool,
    loop: PropTypes.bool,

    data: deprecated(
      PropTypes.array,
      'Provide `Carousel` with children instead of data/renderItem',
    ),
    renderItem: deprecated(
      PropTypes.func,
      'Provide `Carousel` with children instead of data/renderItem',
    ),
    withoutLeftOffset: deprecated(
      PropTypes.bool,
      'Provide `Carousel` with children instead of data/renderItem',
    ),
  }

  state = {
    indexPageVisible: 0,
    numColumns: 3,
    numPages: getNumPagesForColumnsAndDataLength(
      getDataLength({ data: this.props.data, children: this.props.children }),
      3,
    ),
  }

  onResizeInner = widthInner => {
    const {
      data,
      children,
      itemMinWidth,
      baseItemMarginBetween,
      viewportIsXSOrLess,
      viewportIsMOrLess,
    } = this.props

    const itemMarginBetween = getMarginBetweenAccordingToViewport(
      baseItemMarginBetween,
      viewportIsXSOrLess,
      viewportIsMOrLess,
    )

    const numColumns = getNumColumnsForWidth(
      widthInner,
      itemMinWidth,
      itemMarginBetween,
    )

    const numPages = getNumPagesForColumnsAndDataLength(
      getDataLength({ data, children }),
      numColumns,
    )

    if (
      this.state.numColumns !== numColumns ||
      this.state.numPages !== numPages
    ) {
      const indexPageVisible =
        this.state.indexPageVisible > numPages - 1
          ? numPages - 1
          : this.state.indexPageVisible

      this.setState({ numColumns, numPages, indexPageVisible })
    }
  }

  goNextPage = () => {
    const { loop } = this.props
    const { numPages, indexPageVisible } = this.state
    const newPage = loop
      ? checkPageLoop(numPages, indexPageVisible + 1)
      : checkPage(numPages, indexPageVisible + 1)
    this.setState({ indexPageVisible: newPage })
  }

  goPrevPage = () => {
    const { loop } = this.props
    const { numPages, indexPageVisible } = this.state
    const newPage = loop
      ? checkPageLoop(numPages, indexPageVisible - 1)
      : checkPage(numPages, indexPageVisible - 1)
    this.setState({ indexPageVisible: newPage })
  }

  goToPage = indexPageToGo => {
    const { numPages } = this.state
    const newPage = checkPage(numPages, indexPageToGo)
    this.setState({ indexPageVisible: newPage })
  }

  renderCarouselInner = () => {
    const {
      data,
      renderItem,
      children,
      itemMinWidth,
      baseItemMarginBetween,
      viewportIsXSOrLess,
      viewportIsMOrLess,
      showOtherPages,
      pagesClassName,
    } = this.props
    const { indexPageVisible, numColumns, numPages } = this.state
    const itemMarginBetween = getMarginBetweenAccordingToViewport(
      baseItemMarginBetween,
      viewportIsXSOrLess,
      viewportIsMOrLess,
    )

    const renderItemObject = !!data && !!renderItem ? renderItem : children

    return (
      <CarouselInner
        legacyMode={!!data && !!renderItem}
        data={data}
        renderItem={renderItemObject}
        itemMinWidth={itemMinWidth}
        indexPageVisible={indexPageVisible}
        numColumns={numColumns}
        numPages={numPages}
        itemMarginBetween={itemMarginBetween}
        onResizeInner={this.onResizeInner}
        goToPage={this.goToPage}
        showOtherPages={showOtherPages}
        pagesClassName={pagesClassName}
      />
    )
  }

  renderPagination = () => {
    const {
      baseItemMarginBetween,
      viewportIsMOrLess,
      viewportIsXSOrLess,
      hidePagination,
      hidePaginationOnMobile,
      paginationPosition,
      prevButtonText,
      nextButtonText,
      tinyButtons,
      firstButtonText,
      lastButtonText,
      showPageSquares,
      preferCompletePaginationOnMobile,
      loop,
    } = this.props
    const { indexPageVisible, numPages } = this.state
    const itemMarginBetween = getMarginBetweenAccordingToViewport(
      baseItemMarginBetween,
      viewportIsXSOrLess,
      viewportIsMOrLess,
    )

    if (hidePagination) return
    if (viewportIsXSOrLess && hidePaginationOnMobile) return
    if (numPages <= 1) return

    if (viewportIsXSOrLess && !preferCompletePaginationOnMobile) {
      const rangePage = createRangeFromZeroTo(numPages)

      return (
        <PageControl className="k-Carousel__pageControl">
          {rangePage.map(index => (
            <PageDot
              className="k-Carousel__pageControl__pageDot"
              index={index}
              key={index}
              visibleIndex={indexPageVisible}
            />
          ))}
          <PageControlButton
            prev
            onClick={this.goPrevPage}
            className="k-Carousel__pageControl__controlButton"
          />
          <PageControlButton
            next
            onClick={this.goNextPage}
            className="k-Carousel__pageControl__controlButton"
          />
        </PageControl>
      )
    }

    return (
      <CarouselPagination
        position={paginationPosition}
        itemMarginBetween={itemMarginBetween}
        className="k-Carousel__pagination"
      >
        <PaginationButtons
          position={paginationPosition}
          className="k-Carousel__pagination__buttonContainer"
        >
          <PageButton
            className="k-Carousel__pagination__button"
            icon
            modifier="beryllium"
            tiny={tinyButtons}
            onClick={this.goPrevPage}
            disabled={!loop && (indexPageVisible < 1 || numPages < 1)}
          >
            <VisuallyHidden>
              {loop && (indexPageVisible < 1 || numPages < 1)
                ? lastButtonText
                : prevButtonText}
            </VisuallyHidden>
            <ArrowIcon version="solid" direction="left" aria-hidden />
          </PageButton>

          <PageButton
            className="k-Carousel__pagination__button"
            icon
            modifier="beryllium"
            tiny={tinyButtons}
            onClick={this.goNextPage}
            disabled={!loop && indexPageVisible >= numPages - 1}
          >
            <VisuallyHidden>
              {loop && indexPageVisible >= numPages - 1
                ? firstButtonText
                : nextButtonText}
            </VisuallyHidden>
            <ArrowIcon version="solid" direction="right" aria-hidden />
          </PageButton>
        </PaginationButtons>

        {showPageSquares && (
          <PaginationSquares className="k-Carousel__pagination__squaresContainer">
            {createRangeFromZeroTo(numPages).map(index => (
              <PageSquare
                key={index}
                isActive={index === indexPageVisible}
                className="k-Carousel__pagination__square"
              />
            ))}
          </PaginationSquares>
        )}
      </CarouselPagination>
    )
  }

  render() {
    const {
      data,
      renderItem,
      withoutLeftOffset,
      viewportIsMOrLess,
      paginationPosition,
      children,
      className,
    } = this.props

    if (getDataLength({ data, children }) === 0) return null

    if (!!data && !!renderItem) {
      if (viewportIsMOrLess) {
        return (
          <StyledLegacyCarousel
            className={classNames(
              'k-Carousel',
              className,
              'k-LegacyCarousel',
              'k-LegacyCarousel--noGrid',
            )}
          >
            {this.renderCarouselInner()}
            {this.renderPagination()}
          </StyledLegacyCarousel>
        )
      }

      return (
        <Grid>
          <GridCol
            col={withoutLeftOffset ? '11' : '10'}
            offset={withoutLeftOffset ? '0' : '1'}
          >
            <StyledLegacyCarousel
              className={classNames(
                'k-Carousel',
                className,
                'k-LegacyCarousel',
                'k-LegacyCarousel--inGrid',
              )}
            >
              {this.renderCarouselInner()}
            </StyledLegacyCarousel>
          </GridCol>

          <GridCol col="1">{this.renderPagination()}</GridCol>
        </Grid>
      )
    }

    return (
      <FlexContainer
        paginationPosition={paginationPosition}
        className={classNames('k-Carousel', className)}
      >
        {this.renderCarouselInner()}
        {this.renderPagination()}
      </FlexContainer>
    )
  }
}

const StyledLegacyCarousel = styled.div`
  // always displayed in smaller than desktop
  &.k-LegacyCarousel--noGrid {
    padding: 0 ${pxToRem(CONTAINER_PADDING_MOBILE)};
    scroll-padding: ${pxToRem(CONTAINER_PADDING_MOBILE)};

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      padding: 0 ${pxToRem(CONTAINER_PADDING)};
      scroll-padding: ${pxToRem(CONTAINER_PADDING)};
    }
  }

  // always displayed in desktop
  &.k-LegacyCarousel--inGrid .k-Carousel__pagination__buttonContainer {
    flex-direction: column-reverse !important;
  }
`

const flexContainerdirectionStyle = positionType => ({
  paginationPosition,
}) => {
  if (!paginationPosition[positionType]) return

  switch (paginationPosition[positionType]) {
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

const FlexContainer = styled.div`
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
`

const paginationPositionStyle = positionType => ({ position }) => {
  if (!position[positionType]) return

  switch (position[positionType]) {
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

const CarouselPagination = styled.div`
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
`

const PaginationSquares = styled.div`
  display: flex;
  flex-direction: row;
  margin: ${pxToRem(-2)};
`

const PageSquare = styled.span`
  display: inline-block;
  width: ${pxToRem(6)};
  height: ${pxToRem(6)};
  margin: ${pxToRem(2)};
  background-color: ${ColorsConfig.font2};

  ${({ isActive }) =>
    isActive &&
    css`
      background-color: ${ColorsConfig.font1};
    `}
`

const buttonsPositionStyle = positionType => ({ position }) => {
  if (!position[positionType]) return

  switch (position[positionType]) {
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

const PaginationButtons = styled.div`
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
`

const PageButton = styled(Button)`
  margin: ${pxToRem(1)};
`

const PageControl = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  padding-top: ${pxToRem(CONTAINER_PADDING_MOBILE / 2)};
  padding-bottom: ${pxToRem(CONTAINER_PADDING_MOBILE / 2)};
`

const PageControlButton = styled.div`
  position: absolute;
  top: ${pxToRem(CONTAINER_PADDING_MOBILE / 4)};
  bottom: ${pxToRem(CONTAINER_PADDING_MOBILE / 4)};
  -webkit-tap-highlight-color: transparent;

  ${({ prev }) =>
    prev &&
    css`
      left: ${pxToRem(CONTAINER_PADDING_MOBILE)};
      right: 50%;
    `}

  ${({ next }) =>
    next &&
    css`
      right: ${pxToRem(CONTAINER_PADDING_MOBILE)};
      left: 50%;
    `}
`

const PageDot = styled.div`
  width: ${pxToRem(8)};
  height: ${pxToRem(8)};
  margin-left: ${pxToRem(4)};
  margin-right: ${pxToRem(4)};
  border-radius: ${pxToRem(4)};
  background-color: ${ColorsConfig.font1};

  ${({ visibleIndex, index }) =>
    visibleIndex === index &&
    css`
      background-color: ${ColorsConfig.primary2};
    `}
`

export const Carousel = withMediaQueries({
  viewportIsXSOrLess: true,
  viewportIsMOrLess: true,
  exposedMethods: ['goToPage'],
})(CarouselBase)
