import React, { Component } from 'react'
import deprecated from 'prop-types-extra/lib/deprecated'
import PropTypes from 'prop-types'
import { createRangeFromZeroTo } from '../../../helpers/utils/range'
import { withMediaQueries } from '../../../hoc/media-queries'
import {
  CONTAINER_PADDING,
  CONTAINER_PADDING_MOBILE,
} from '../../../constants/grid-config'
import { Button } from '../../../components/buttons/button/button'
import { ArrowIcon } from '../../../components/icons/arrow-icon'
import { CarouselInner } from './components/carousel-inner'
import { VisuallyHidden } from '../../../components/accessibility/visually-hidden'
import classNames from 'classnames'
import { Grid, GridCol } from '../../../components/grid/grid'

import { StyledCarouselContainer } from './styles'

const getDataLength = ({ data, children }) => {
  if (!!data) return data.length
  return React.Children.count(children)
}

export const getNumColumnsForWidth = (
  width,
  itemMinWidth,
  itemMarginBetween,
  colNumber,
) => {
  if (colNumber > 0 && itemMinWidth === 0) return colNumber

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

class CarouselBase extends Component {
  state = {
    indexPageVisible: 0,
    numColumns: this.props.colNumber > 0 ? this.props.colNumber : 3,
    numPages: getNumPagesForColumnsAndDataLength(
      getDataLength({ data: this.props.data, children: this.props.children }),
      3,
    ),
  }

  viewedPages = new Set()

  componentDidMount() {
    this.viewedPages.add(0)
  }

  onResizeInner = widthInner => {
    const {
      data,
      children,
      itemMinWidth,
      colNumber,
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
      colNumber,
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
    this.viewedPages.add(newPage)
    this.setState({ indexPageVisible: newPage })
  }

  goPrevPage = () => {
    const { loop } = this.props
    const { numPages, indexPageVisible } = this.state
    const newPage = loop
      ? checkPageLoop(numPages, indexPageVisible - 1)
      : checkPage(numPages, indexPageVisible - 1)
    this.viewedPages.add(newPage)
    this.setState({ indexPageVisible: newPage })
  }

  goToPage = indexPageToGo => {
    const { numPages } = this.state
    const newPage = checkPage(numPages, indexPageToGo)
    this.viewedPages.add(newPage)
    this.setState({ indexPageVisible: newPage })
  }

  renderCarouselInner = () => {
    const {
      data,
      renderItem,
      children,
      itemMinWidth,
      colNumber,
      baseItemMarginBetween,
      viewportIsXSOrLess,
      viewportIsMOrLess,
      pagesClassName,
      exportVisibilityProps,
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
        specificColNumber={colNumber > 0}
        indexPageVisible={indexPageVisible}
        numColumns={numColumns}
        numPages={numPages}
        itemMarginBetween={itemMarginBetween}
        onResizeInner={this.onResizeInner}
        goToPage={this.goToPage}
        pagesClassName={pagesClassName}
        viewedPages={this.viewedPages}
        exportVisibilityProps={exportVisibilityProps}
      />
    )
  }

  renderPagination = () => {
    const {
      viewportIsXSOrLess,
      hidePagination,
      hidePaginationOnMobile,
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

    if (hidePagination) return
    if (viewportIsXSOrLess && hidePaginationOnMobile) return
    if (numPages <= 1) return

    if (viewportIsXSOrLess && !preferCompletePaginationOnMobile) {
      const rangePage = createRangeFromZeroTo(numPages)

      return (
        <div className="k-Carousel__pageControl">
          {rangePage.map(index => (
            <div
              className={classNames('k-Carousel__pageControl__pageDot', {
                'k-Carousel__pageControl__pageDot--isVisible':
                  indexPageVisible === index,
              })}
              key={`pageDotIndex_${index}`}
            />
          ))}
          <div
            onClick={this.goPrevPage}
            className="k-Carousel__pageControl__controlButton k-Carousel__pageControl__controlButton--prev"
          />
          <div
            onClick={this.goNextPage}
            className="k-Carousel__pageControl__controlButton k-Carousel__pageControl__controlButton--next"
          />
        </div>
      )
    }

    return (
      <div className="k-Carousel__pagination">
        <div className="k-Carousel__pagination__buttonContainer">
          <Button
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
          </Button>

          <Button
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
          </Button>
        </div>

        {showPageSquares && (
          <div className="k-Carousel__pagination__squaresContainer">
            {createRangeFromZeroTo(numPages).map(index => (
              <div
                key={index}
                className={classNames('k-Carousel__pagination__square', {
                  'k-Carousel__pagination__square--isActive':
                    index === indexPageVisible,
                })}
              />
            ))}
          </div>
        )}
      </div>
    )
  }

  render() {
    const {
      data,
      renderItem,
      withoutLeftOffset,
      viewportIsMOrLess,
      baseItemMarginBetween,
      children,
      className,
      paginationPosition,
      showOtherPages,
      itemMinWidth,
    } = this.props

    if (getDataLength({ data, children }) === 0) return null

    const commonProps = {
      baseItemMarginBetween: baseItemMarginBetween,
      itemMinWidth: itemMinWidth,
      numColumns: this.state.numColumns,
      numPages: this.state.numPages,
    }

    if (!!data && !!renderItem) {
      if (viewportIsMOrLess) {
        return (
          <StyledCarouselContainer
            {...commonProps}
            className={classNames(
              'k-Carousel',
              className,
              'k-LegacyCarousel',
              'k-LegacyCarousel--noGrid',
            )}
          >
            {this.renderCarouselInner()}
            {this.renderPagination()}
          </StyledCarouselContainer>
        )
      }

      return (
        <StyledCarouselContainer
          {...commonProps}
          className={classNames(
            'k-Carousel',
            className,
            'k-LegacyCarousel',
            'k-LegacyCarousel--inGrid',
          )}
        >
          <Grid>
            <GridCol
              col={withoutLeftOffset ? '11' : '10'}
              offset={withoutLeftOffset ? '0' : '1'}
            >
              {this.renderCarouselInner()}
            </GridCol>
            <GridCol col="1">{this.renderPagination()}</GridCol>
          </Grid>
        </StyledCarouselContainer>
      )
    }

    return (
      <StyledCarouselContainer
        {...commonProps}
        paginationPosition={paginationPosition}
        className={classNames('k-Carousel', className, {
          'k-Carousel--showOtherPages': showOtherPages,
        })}
      >
        {this.renderCarouselInner()}
        {this.renderPagination()}
      </StyledCarouselContainer>
    )
  }
}

CarouselBase.defaultProps = {
  colNumber: 0,
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
  exportVisibilityProps: false,
}

CarouselBase.propTypes = {
  itemMinWidth: PropTypes.number.isRequired,
  colNumber: PropTypes.number,
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
    default: positionsPropTypes,
    fromXxs: positionsPropTypes,
    fromXs: positionsPropTypes,
    fromS: positionsPropTypes,
    fromM: positionsPropTypes,
    fromL: positionsPropTypes,
    fromXl: positionsPropTypes,
  }),
  prevButtonText: PropTypes.string,
  nextButtonText: PropTypes.string,
  tinyButtons: PropTypes.bool,
  firstButtonText: PropTypes.string,
  lastButtonText: PropTypes.string,
  showPageSquares: PropTypes.bool,
  loop: PropTypes.bool,
  exportVisibilityProps: PropTypes.bool,

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

const positionsPropTypes = PropTypes.oneOf([
  'top',
  'right',
  'bottom',
  'left',
  'bottom-left',
  'bottom-right',
])

export const Carousel = withMediaQueries({
  viewportIsXSOrLess: true,
  viewportIsMOrLess: true,
  exposedMethods: ['goToPage'],
})(CarouselBase)
