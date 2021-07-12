import React, { Component, Fragment } from 'react'
import deprecated from 'prop-types-extra/lib/deprecated'
import PropTypes from 'prop-types'
import { createRangeFromZeroTo } from '../../../../helpers/utils/range'
import { withMediaQueries } from '../../../../hoc/media-queries'
import {
  CONTAINER_PADDING,
  CONTAINER_PADDING_THIN,
} from '../../../../constants/grid-config'
import { Button } from '../../../../components/molecules/buttons/button'
import { ArrowIcon } from '../../../../components/graphics/icons/arrow-icon'
import { CarouselInner } from './components/carousel-inner'
import { VisuallyHidden } from '../../../../components/accessibility/visually-hidden'
import classNames from 'classnames'
import { Grid, GridCol } from '../../../../components/layout/grid'

import { StyledCarouselContainer, OUTLINE_PLUS_OFFSET } from './styles'

const getDataLength = ({ data, children }) => {
  if (!!data) return data.length
  return React.Children.count(children)
}

export const getNumberOfItemsPerPageForWidth = (
  width,
  itemMinWidth,
  itemMarginBetween,
  itemsPerPage,
) => {
  if (!!itemsPerPage && itemMinWidth === 0) return itemsPerPage

  if (width === 0 || itemMinWidth === 0) return 0

  const remainingWidthWithOneCard = width - itemMinWidth
  const itemWidthAndMargin = itemMinWidth + itemMarginBetween

  const numberOfItemsPerPage =
    Math.floor(remainingWidthWithOneCard / itemWidthAndMargin) + 1

  return numberOfItemsPerPage
}

export const getNumberOfPagesForColumnsAndDataLength = (
  dataLength,
  numberOfItemsPerPage,
) => {
  if (dataLength === 0 || numberOfItemsPerPage === 0) return 0

  const numberOfPages = Math.ceil(dataLength / numberOfItemsPerPage)

  return numberOfPages
}

export const checkPage = (numberOfPages, newPage) => {
  if (numberOfPages < 1) return 0
  if (newPage < 0) return 0
  if (newPage >= numberOfPages) return numberOfPages - 1

  return newPage
}

export const checkPageLoop = (numberOfPages, newPage) => {
  if (numberOfPages < 1) return 0
  if (newPage < 0) return numberOfPages - 1
  if (newPage >= numberOfPages) return 0

  return newPage
}

const getMarginBetweenAccordingToViewport = (
  baseItemMarginBetween,
  viewportIsXSOrLess,
  viewportIsMOrLess,
) => {
  if (viewportIsXSOrLess)
    return CONTAINER_PADDING_THIN / 2 - OUTLINE_PLUS_OFFSET * 2
  if (viewportIsMOrLess) return CONTAINER_PADDING / 2 - OUTLINE_PLUS_OFFSET * 2

  return baseItemMarginBetween - OUTLINE_PLUS_OFFSET * 2
}

class CarouselBase extends Component {
  state = {
    currentPageIndex: 0,
    numberOfItemsPerPage:
      this.props.itemsPerPage > 0 ? this.props.itemsPerPage : 3,
    numberOfPages: getNumberOfPagesForColumnsAndDataLength(
      getDataLength({ data: this.props.data, children: this.props.children }),
      this.props.itemsPerPage > 0 ? this.props.itemsPerPage : 3,
    ),
  }

  viewedPages = new Set()

  componentDidMount() {
    this.viewedPages.add(0)
  }

  onResizeInner = innerWidth => {
    const {
      data,
      children,
      itemMinWidth,
      itemsPerPage,
      baseItemMarginBetween,
      viewportIsXSOrLess,
      viewportIsMOrLess,
    } = this.props

    const itemMarginBetween = getMarginBetweenAccordingToViewport(
      baseItemMarginBetween,
      viewportIsXSOrLess,
      viewportIsMOrLess,
    )

    const numberOfItemsPerPage = getNumberOfItemsPerPageForWidth(
      innerWidth,
      itemMinWidth,
      itemMarginBetween,
      itemsPerPage,
    )

    const numberOfPages = getNumberOfPagesForColumnsAndDataLength(
      getDataLength({ data, children }),
      numberOfItemsPerPage,
    )

    if (
      this.state.numberOfItemsPerPage !== numberOfItemsPerPage ||
      this.state.numberOfPages !== numberOfPages
    ) {
      const currentPageIndex =
        this.state.currentPageIndex > numberOfPages - 1
          ? numberOfPages - 1
          : this.state.currentPageIndex

      this.setState({ numberOfItemsPerPage, numberOfPages, currentPageIndex })
    }
  }

  goNextPage = () => {
    const { loop } = this.props
    const { numberOfPages, currentPageIndex } = this.state
    const newPage = loop
      ? checkPageLoop(numberOfPages, currentPageIndex + 1)
      : checkPage(numberOfPages, currentPageIndex + 1)
    this.viewedPages.add(newPage)
    this.setState({ currentPageIndex: newPage })
  }

  goPrevPage = () => {
    const { loop } = this.props
    const { numberOfPages, currentPageIndex } = this.state
    const newPage = loop
      ? checkPageLoop(numberOfPages, currentPageIndex - 1)
      : checkPage(numberOfPages, currentPageIndex - 1)
    this.viewedPages.add(newPage)
    this.setState({ currentPageIndex: newPage })
  }

  goToPage = indexPageToGo => {
    const { loop } = this.props
    const { numberOfPages } = this.state
    const newPage = loop
      ? checkPageLoop(numberOfPages, indexPageToGo)
      : checkPage(numberOfPages, indexPageToGo)
    this.viewedPages.add(newPage)
    this.setState({ currentPageIndex: newPage })
  }

  renderCarouselInner = () => {
    const {
      data,
      renderItem,
      children,
      baseItemMarginBetween,
      viewportIsXSOrLess,
      viewportIsMOrLess,
      pagesClassName,
      exportVisibilityProps,
      pageClickText,
    } = this.props

    const { currentPageIndex, numberOfItemsPerPage, numberOfPages } = this.state
    const itemMarginBetween = getMarginBetweenAccordingToViewport(
      baseItemMarginBetween,
      viewportIsXSOrLess,
      viewportIsMOrLess,
    )

    let items = children

    // legacy mode
    if (!!data && !!renderItem) {
      items = [...data].map((item, index) => (
        <Fragment key={item}>{renderItem({ item: data[index] })}</Fragment>
      ))
    }

    return (
      <CarouselInner
        currentPageIndex={currentPageIndex}
        exportVisibilityProps={exportVisibilityProps}
        goToPage={this.goToPage}
        itemMarginBetween={itemMarginBetween}
        items={items}
        numberOfItemsPerPage={numberOfItemsPerPage}
        numberOfPages={numberOfPages}
        onResizeInner={this.onResizeInner}
        pagesClassName={pagesClassName}
        viewedPages={this.viewedPages}
        pageClickText={pageClickText}
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
    const { currentPageIndex, numberOfPages } = this.state

    if (hidePagination) return
    if (viewportIsXSOrLess && hidePaginationOnMobile) return
    if (numberOfPages <= 1) return

    if (viewportIsXSOrLess && !preferCompletePaginationOnMobile) {
      const rangePage = createRangeFromZeroTo(numberOfPages)

      return (
        <div className="k-Carousel__pageControl">
          {rangePage.map(index => (
            <div
              className={classNames('k-Carousel__pageControl__pageDot', {
                'k-Carousel__pageControl__pageDot--isVisible':
                  currentPageIndex === index,
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
            type="button"
            className="k-Carousel__pagination__button"
            icon
            modifier="beryllium"
            size={tinyButtons? 'tiny': null}
            onClick={this.goPrevPage}
            disabled={!loop && (currentPageIndex < 1 || numberOfPages < 1)}
          >
            <VisuallyHidden>
              {loop && (currentPageIndex < 1 || numberOfPages < 1)
                ? lastButtonText
                : prevButtonText}
            </VisuallyHidden>
            <ArrowIcon direction="left" aria-hidden />
          </Button>

          <Button
            type="button"
            className="k-Carousel__pagination__button"
            icon
            modifier="beryllium"
            size={tinyButtons ? 'tiny' : null}
            onClick={this.goNextPage}
            disabled={!loop && currentPageIndex >= numberOfPages - 1}
          >
            <VisuallyHidden>
              {loop && currentPageIndex >= numberOfPages - 1
                ? firstButtonText
                : nextButtonText}
            </VisuallyHidden>
            <ArrowIcon direction="right" aria-hidden />
          </Button>
        </div>

        {showPageSquares && (
          <div className="k-Carousel__pagination__squaresContainer">
            {createRangeFromZeroTo(numberOfPages).map(index => (
              <div
                key={index}
                className={classNames('k-Carousel__pagination__square', {
                  'k-Carousel__pagination__square--isActive':
                    index === currentPageIndex,
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
      numberOfItemsPerPage: this.state.numberOfItemsPerPage,
      numberOfPages: this.state.numberOfPages,
    }

    // legacy mode
    if (!!data && !!renderItem) {
      return (
        <StyledCarouselContainer
          {...commonProps}
          className={classNames('k-Carousel', className, 'k-LegacyCarousel')}
        >
          <Grid>
            <GridCol
              col="12"
              col-l={withoutLeftOffset ? '11' : '10'}
              offset-l={withoutLeftOffset ? '0' : '1'}
            >
              {this.renderCarouselInner()}
            </GridCol>
            <GridCol col="12" col-l="1">
              {this.renderPagination()}
            </GridCol>
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
  itemsPerPage: 0,
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
  pageClickText: page => {
    return `Page ${page}`
  },
  firstButtonText: 'First items',
  lastButtonText: 'Last items',
  showPageSquares: false,
  tinyButtons: false,
  loop: false,
  exportVisibilityProps: false,
}

CarouselBase.propTypes = {
  itemMinWidth: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number,
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
  pageClickText: PropTypes.func,
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
