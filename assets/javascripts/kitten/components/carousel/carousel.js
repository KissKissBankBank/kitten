import React from 'react'
import PropTypes from 'prop-types'
import { ConfiguredRadium } from 'kitten/config/configured-radium'
import { createRangeFromZeroTo } from 'kitten/helpers/utils/range'
import {
  createMatchMedia,
  createMatchMediaMax
} from 'kitten/helpers/utils/media-queries'
import {
  SCREEN_SIZE_XS,
  SCREEN_SIZE_M
} from 'kitten/constants/screen-config'
import {
  CONTAINER_PADDING,
  CONTAINER_PADDING_MOBILE
} from 'kitten/constants/grid-config'
import ColorsConfig from 'kitten/constants/colors-config'

import { Grid, GridCol } from 'kitten/components/grid/grid'
import { ButtonIcon } from 'kitten/components/buttons/button-icon'
import { ArrowIcon } from 'kitten/components/icons/arrow-icon'

import { CarouselInner } from 'kitten/components/carousel/carousel-inner'

export const getNumColumnsForWidth =
  (width, itemMinWidth, itemMarginBetween) => {
    if (width === 0 || itemMinWidth === 0) {
      return 0
    }
    const remainingWidthWithOneCard = (width - itemMinWidth)
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

const getMarginBetweenAccordingToViewport =
  (baseItemMarginBetween, viewportIsMobile, viewportIsTabletOrLess) => {
    if (viewportIsMobile) {
      return CONTAINER_PADDING_MOBILE / 2
    } else if (viewportIsTabletOrLess) {
      return CONTAINER_PADDING / 2
    } else {
      return baseItemMarginBetween
    }
  }

class CarouselBase extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.mqMobile = createMatchMediaMax(SCREEN_SIZE_XS)
    this.mqTabletOrLess = createMatchMediaMax(SCREEN_SIZE_M)

    this.state = {
      indexPageVisible: 0,
      numColumns: 3,
      numPages: getNumPagesForColumnsAndDataLength(this.props.data.length, 3),
      viewportIsMobile: this.mqMobile
        ? this.mqMobile.matches
        : false,
      viewportIsTabletOrLess: this.mqTabletOrLess
        ? this.mqTabletOrLess.matches
        : false,
    }
  }

  onResizeInner = widthInner => {
    const { data, itemMinWidth, baseItemMarginBetween } = this.props
    const { viewportIsMobile, viewportIsTabletOrLess } = this.state
    const itemMarginBetween = getMarginBetweenAccordingToViewport(
      baseItemMarginBetween,
      viewportIsMobile,
      viewportIsTabletOrLess
    )

    const numColumns = getNumColumnsForWidth(
      widthInner,
      itemMinWidth,
      itemMarginBetween
    )
    const numPages = getNumPagesForColumnsAndDataLength(
      data.length,
      numColumns
    )

    if (
      this.state.numColumns !== numColumns ||
      this.state.numPages !== numPages
    ) {
      const indexPageVisible = this.state.indexPageVisible > (numPages - 1)
        ? (numPages - 1)
        : this.state.indexPageVisible

      this.setState({ numColumns, numPages, indexPageVisible })
    }
  }

  onMobileMQ = event => {
    this.setState({ viewportIsMobile: event.matches })
  }

  onTabletMQ = event => {
    this.setState({ viewportIsTabletOrLess: event.matches })
  }

  componentDidMount() {
    this.mqMobile && this.mqMobile.addListener(this.onMobileMQ)
    this.mqTabletOrLess && this.mqTabletOrLess.addListener(this.onTabletMQ)
  }

  componentWillUnmount() {
    this.mqMobile && this.mqMobile.removeListener(this.onMobileMQ)
    this.mqTabletOrLess && this.mqTabletOrLess.removeListener(this.onTabletMQ)
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
      baseItemMarginBetween
    } = this.props
    const {
      indexPageVisible,
      numColumns,
      numPages,
      viewportIsMobile,
      viewportIsTabletOrLess
    } = this.state
    const itemMarginBetween = getMarginBetweenAccordingToViewport(
      baseItemMarginBetween, viewportIsMobile, viewportIsTabletOrLess
    )

    return (
      <CarouselInner
        data={ data }
        itemMinWidth={ itemMinWidth }
        renderItem={ renderItem }
        indexPageVisible={ indexPageVisible }
        numColumns={ numColumns }
        numPages={ numPages }
        itemMarginBetween={ itemMarginBetween }
        siblingPageVisible={ viewportIsTabletOrLess }
        onResizeInner={ this.onResizeInner }
        goToPage={ this.goToPage }
      />
    )
  }

  renderPagination = () => {
    const { baseItemMarginBetween } = this.props
    const {
      indexPageVisible,
      numPages,
      viewportIsTabletOrLess,
      viewportIsMobile
    } = this.state
    const itemMarginBetween = getMarginBetweenAccordingToViewport(
      baseItemMarginBetween,
      viewportIsMobile,
      viewportIsTabletOrLess
    )

    if (numPages <= 1) return

    if (viewportIsMobile) {
      const rangePage = createRangeFromZeroTo(numPages)

      return (
        <div style={ styles.pageControl }>
          {
            rangePage.map(index =>
              <div style={[
                styles.pageDot,
                (indexPageVisible === index) && styles.pageDotActive,
              ]}/>
            )
          }
          <div
            key="prev"
            style={ styles.pageControlButtonPrev }
            onClick={ this.goPrevPage }
          />
          <div
            key="next"
            style={ styles.pageControlButtonNext }
            onClick={ this.goNextPage }
          />
        </div>
      )
    }

    return (
      <div
        style={[
          styles.carouselPagination,
          viewportIsTabletOrLess && styles.carouselPaginationTablet,
          {
            marginTop: viewportIsTabletOrLess ? itemMarginBetween : 0,
            marginLeft: viewportIsTabletOrLess ? (itemMarginBetween * 2) : 0,
          },
        ]}
      >
        <ButtonIcon
          modifier="beryllium"
          onClick={ this.goPrevPage }
          disabled={ indexPageVisible < 1 || numPages < 1 }
          style={ styles.carouselButtonPagination }
        >
          <ArrowIcon className="k-ButtonIcon__svg" direction="left" />
        </ButtonIcon>

        <ButtonIcon
          modifier="beryllium"
          onClick={ this.goNextPage }
          disabled={ indexPageVisible >= (numPages - 1) }
          style={ styles.carouselButtonPagination }
        >
          <ArrowIcon className="k-ButtonIcon__svg" direction="right" />
        </ButtonIcon>
      </div>
    )
  }

  render() {
    if (!this.props.data || !this.props.data.length) return null

    const { withoutLeftOffset } = this.props
    const { viewportIsTabletOrLess } = this.state

    if (viewportIsTabletOrLess) {
      return (
        <div>
          { this.renderCarouselInner() }
          { this.renderPagination() }
        </div>
      )
    }

    return (
      <Grid>
        <GridCol
          col={ withoutLeftOffset ? '11' : '10' }
          offset={ withoutLeftOffset ? '0' : '1' }
        >
          { this.renderCarouselInner() }
        </GridCol>

        <GridCol col="1">
          { this.renderPagination() }
        </GridCol>
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
}

CarouselBase.propTypes = {
  itemMinWidth: PropTypes.number.isRequired,
  baseItemMarginBetween: PropTypes.number.isRequired,
  renderItem: PropTypes.func.isRequired,
}

export const Carousel = ConfiguredRadium(CarouselBase)
