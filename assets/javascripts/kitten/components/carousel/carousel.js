import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'
import { createRangeFromZeroTo } from '../../helpers/utils/range'
import { withMediaQueries } from '../../hoc/media-queries'
import {
  CONTAINER_PADDING,
  CONTAINER_PADDING_MOBILE,
} from '../../constants/grid-config'
import ColorsConfig from '../../constants/colors-config'

import { Grid, GridCol } from '../../components/grid/grid'
import { Button } from '../../components/buttons/button/button'
import { ArrowIcon } from '../../components/icons/arrow-icon'
import { VisuallyHidden } from '../../../components/accessibility/visually-hidden'
import { CarouselInner } from '../../components/carousel/carousel-inner'

export const getNumColumnsForWidth = (
  width,
  itemMinWidth,
  itemMarginBetween,
) => {
  if (width === 0 || itemMinWidth === 0) {
    return 0
  }
  const remainingWidthWithOneCard = width - itemMinWidth
  const itemWidthAndMargin = itemMinWidth + itemMarginBetween

  const numColumns =
    Math.floor(remainingWidthWithOneCard / itemWidthAndMargin) + 1

  return numColumns
}

export const getNumPagesForColumnsAndDataLength = (dataLength, numColumns) => {
  if (dataLength === 0 || numColumns === 0) {
    return 0
  }
  const numPages = Math.ceil(dataLength / numColumns)

  return numPages
}

export const checkPage = (numPages, newPage) => {
  if (numPages < 1) return 0

  if (newPage < 0) {
    return 0
  } else if (newPage >= numPages) {
    return numPages - 1
  } else {
    return newPage
  }
}

const getMarginBetweenAccordingToViewport = (
  baseItemMarginBetween,
  viewportIsXSOrLess,
  viewportIsMOrLess,
) => {
  if (viewportIsXSOrLess) {
    return CONTAINER_PADDING_MOBILE / 2
  } else if (viewportIsMOrLess) {
    return CONTAINER_PADDING / 2
  } else {
    return baseItemMarginBetween
  }
}

class CarouselBase extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      indexPageVisible: 0,
      numColumns: 3,
      numPages: getNumPagesForColumnsAndDataLength(this.props.data.length, 3),
    }
  }

  onResizeInner = widthInner => {
    const {
      data,
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
    const numPages = getNumPagesForColumnsAndDataLength(data.length, numColumns)

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
    const { numPages, indexPageVisible } = this.state
    const newPage = checkPage(numPages, indexPageVisible + 1)
    this.setState({ indexPageVisible: newPage })
  }

  goPrevPage = () => {
    const { numPages, indexPageVisible } = this.state
    const newPage = checkPage(numPages, indexPageVisible - 1)
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
      itemMinWidth,
      renderItem,
      baseItemMarginBetween,
      viewportIsXSOrLess,
      viewportIsMOrLess,
    } = this.props
    const { indexPageVisible, numColumns, numPages } = this.state
    const itemMarginBetween = getMarginBetweenAccordingToViewport(
      baseItemMarginBetween,
      viewportIsXSOrLess,
      viewportIsMOrLess,
    )

    return (
      <CarouselInner
        data={data}
        itemMinWidth={itemMinWidth}
        renderItem={renderItem}
        indexPageVisible={indexPageVisible}
        numColumns={numColumns}
        numPages={numPages}
        itemMarginBetween={itemMarginBetween}
        siblingPageVisible={viewportIsMOrLess}
        onResizeInner={this.onResizeInner}
        goToPage={this.goToPage}
      />
    )
  }

  renderPagination = () => {
    const {
      baseItemMarginBetween,
      viewportIsMOrLess,
      viewportIsXSOrLess,
      hidePaginationOnMobile,
      prevButtonText,
      nextButtonText,
    } = this.props
    const { indexPageVisible, numPages } = this.state
    const itemMarginBetween = getMarginBetweenAccordingToViewport(
      baseItemMarginBetween,
      viewportIsXSOrLess,
      viewportIsMOrLess,
    )

    if (viewportIsXSOrLess && hidePaginationOnMobile) return

    if (numPages <= 1) return

    if (viewportIsXSOrLess) {
      const rangePage = createRangeFromZeroTo(numPages)

      return (
        <div style={styles.pageControl}>
          {rangePage.map(index => (
            <div
              key={index}
              style={[
                styles.pageDot,
                indexPageVisible === index && styles.pageDotActive,
              ]}
            />
          ))}
          <div
            key="prev"
            style={styles.pageControlButtonPrev}
            onClick={this.goPrevPage}
          />
          <div
            key="next"
            style={styles.pageControlButtonNext}
            onClick={this.goNextPage}
          />
        </div>
      )
    }

    return (
      <div
        style={[
          styles.carouselPagination,
          viewportIsMOrLess && styles.carouselPaginationTablet,
          {
            marginTop: viewportIsMOrLess ? itemMarginBetween : 0,
            marginLeft: viewportIsMOrLess ? itemMarginBetween * 2 : 0,
          },
        ]}
      >
        <Button
          icon
          modifier="beryllium"
          onClick={this.goPrevPage}
          key={`left-${indexPageVisible}`}
          disabled={indexPageVisible < 1 || numPages < 1}
          style={styles.carouselButtonPagination}
        >
          <VisuallyHidden>{prevButtonText}</VisuallyHidden>
          <ArrowIcon
            aria-hidden
            version="solid"
            direction="left"
          />
        </Button>

        <Button
          icon
          modifier="beryllium"
          onClick={this.goNextPage}
          key={`right-${indexPageVisible}`}
          disabled={indexPageVisible >= numPages - 1}
          style={styles.carouselButtonPagination}
        >
          <VisuallyHidden>{nextButtonText}</VisuallyHidden>
          <ArrowIcon
            aria-hidden
            version="solid"
            direction="right"
          />
        </Button>
      </div>
    )
  }

  render() {
    if (!this.props.data || !this.props.data.length) return null

    const { withoutLeftOffset, viewportIsMOrLess } = this.props

    if (viewportIsMOrLess) {
      return (
        <div>
          {this.renderCarouselInner()}
          {this.renderPagination()}
        </div>
      )
    }

    return (
      <Grid>
        <GridCol
          col={withoutLeftOffset ? '11' : '10'}
          offset={withoutLeftOffset ? '0' : '1'}
        >
          {this.renderCarouselInner()}
        </GridCol>

        <GridCol col="1">{this.renderPagination()}</GridCol>
      </Grid>
    )
  }
}

const styles = {
  carouselPagination: {
    display: 'flex',
    flexDirection: 'column-reverse',
    alignItems: 'flex-start',
  },
  carouselPaginationTablet: {
    flexDirection: 'row',
  },
  carouselButtonPagination: {
    marginBottom: 2,
    marginRight: 2,
    marginLeft: 0,
    marginTop: 0,
  },

  pageControl: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'relative',
    paddingTop: CONTAINER_PADDING_MOBILE / 2,
    paddingBottom: CONTAINER_PADDING_MOBILE / 2,
  },
  pageControlButtonPrev: {
    position: 'absolute',
    top: CONTAINER_PADDING_MOBILE / 4,
    bottom: CONTAINER_PADDING_MOBILE / 4,
    left: CONTAINER_PADDING_MOBILE,
    right: '50%',
    WebkitTapHighlightColor: 'transparent',
  },
  pageControlButtonNext: {
    position: 'absolute',
    top: CONTAINER_PADDING_MOBILE / 4,
    bottom: CONTAINER_PADDING_MOBILE / 4,
    right: CONTAINER_PADDING_MOBILE,
    left: '50%',
    WebkitTapHighlightColor: 'transparent',
  },
  pageDot: {
    width: 8,
    height: 8,
    marginLeft: 4,
    marginRight: 4,
    borderRadius: 4,
    backgroundColor: ColorsConfig.font1,
  },
  pageDotActive: {
    backgroundColor: ColorsConfig.primary2,
  },
}

CarouselBase.defaultProps = {
  withoutLeftOffset: false,
  hidePaginationOnMobile: false,
  prevButtonText:'Previous items',
  nextButtonText:'Next items',
}

CarouselBase.propTypes = {
  itemMinWidth: PropTypes.number.isRequired,
  baseItemMarginBetween: PropTypes.number.isRequired,
  renderItem: PropTypes.func.isRequired,
  viewportIsMOrLess: PropTypes.bool.isRequired,
  viewportIsXSOrLess: PropTypes.bool.isRequired,
  hidePaginationOnMobile: PropTypes.bool,
  prevButtonText: PropTypes.string,
  nextButtonText: PropTypes.string,
}

export const Carousel = withMediaQueries({
  viewportIsXSOrLess: true,
  viewportIsMOrLess: true,
})(Radium(CarouselBase))
