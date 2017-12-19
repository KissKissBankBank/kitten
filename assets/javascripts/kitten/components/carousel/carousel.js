import React from 'react'
import Radium from 'radium'

import { createRangeFromZeroTo } from 'kitten/helpers/utils/range'
import { createMatchMedia, createMatchMediaMax } from 'kitten/helpers/utils/media-queries'
import { SCREEN_SIZE_XS, SCREEN_SIZE_M } from 'kitten/constants/screen-config'
import { CONTAINER_PADDING, CONTAINER_PADDING_MOBILE } from 'kitten/constants/grid-config'

import { Grid, GridCol } from 'kitten/components/grid/grid'
import { ButtonIcon } from 'kitten/components/buttons/button-icon'
import { ArrowIcon } from 'kitten/components/icons/arrow-icon'

import CarouselInner from 'kitten/components/carousel/carousel-inner'

const getNumColumnsForWidth = (width, itemMinWidth, itemMarginBetween) => {
  const remainingWidthWithOneCard = (width - itemMinWidth)
  const numColumns = Math.floor(remainingWidthWithOneCard / (itemMinWidth + itemMarginBetween)) + 1
  return numColumns
}

const getNumPagesForColumnsAndDataLength = (dataLength, numColumns) => {
  const numPages = Math.ceil(dataLength / numColumns)
  return numPages
}

const getMarginBetweenAccordingToViewport = (baseItemMarginBetween, viewportIsMobile, viewportIsTabletOrLess) => {
  if(viewportIsMobile) {
    return CONTAINER_PADDING_MOBILE / 2
  } else if (viewportIsTabletOrLess) {
    return CONTAINER_PADDING / 2
  } else {
    return baseItemMarginBetween
  }
}

class Carousel extends React.Component {

  constructor(props, context) {
    super(props, context)

    this.mqMobile = createMatchMediaMax(SCREEN_SIZE_XS)
    this.mqTabletOrLess = createMatchMediaMax(SCREEN_SIZE_M)

    this.state = {
      indexPageVisible: 0,
      numColumns: 0,
      numPages: 0,
      viewportIsMobile: this.mqMobile ? this.mqMobile.matches : false,
      viewportIsTabletOrLess: this.mqTabletOrLess ? this.mqTabletOrLess.matches : false,
    }
  }

  onResizeInner = (widthInner) => {
    const { data, itemMinWidth, baseItemMarginBetween } = this.props
    const { viewportIsMobile, viewportIsTabletOrLess } = this.state
    const itemMarginBetween = getMarginBetweenAccordingToViewport(baseItemMarginBetween, viewportIsMobile, viewportIsTabletOrLess)

    const numColumns = getNumColumnsForWidth(widthInner, itemMinWidth, itemMarginBetween)
    const numPages = getNumPagesForColumnsAndDataLength(data.length, numColumns)

    if(this.state.numColumns !== numColumns || this.state.numPages !== numPages) {
      const indexPageVisible = this.state.indexPageVisible > (numPages - 1)
        ? (numPages - 1)
        : this.state.indexPageVisible

      this.setState({ numColumns, numPages, indexPageVisible })
    }
  }

  onMobileMQ = (event) => {
    this.setState({ viewportIsMobile: event.matches })
  }

  onTabletMQ = (event) => {
    this.setState({ viewportIsTabletOrLess: event.matches })
  }

  componentDidMount () {
    this.mqMobile && this.mqMobile.addListener(this.onMobileMQ)
    this.mqTabletOrLess && this.mqTabletOrLess.addListener(this.onTabletMQ)
  }

  componentWillUnmount () {
    this.mqMobile && this.mqMobile.removeListener(this.onMobileMQ)
    this.mqTabletOrLess && this.mqTabletOrLess.removeListener(this.onTabletMQ)
  }

  goNextPage = () => {
    this.setState({ indexPageVisible: this.state.indexPageVisible + 1 })
  }

  goPrevPage = () => {
    this.setState({ indexPageVisible: this.state.indexPageVisible - 1 })
  }

  goToPage = (indexPageToGo) => {
    this.setState({ indexPageVisible: indexPageToGo })
  }

  renderCarouselInner = () => {
    const { data, itemMinWidth, renderItem, baseItemMarginBetween } = this.props
    const { indexPageVisible, numColumns, numPages, viewportIsMobile, viewportIsTabletOrLess } = this.state
    const itemMarginBetween = getMarginBetweenAccordingToViewport(baseItemMarginBetween, viewportIsMobile, viewportIsTabletOrLess)

    return (
      <CarouselInner
        data={data}
        itemMinWidth={itemMinWidth}
        renderItem={renderItem}
        indexPageVisible={indexPageVisible}
        numColumns={numColumns}
        numPages={numPages}
        itemMarginBetween={itemMarginBetween}
        siblingPageVisible={viewportIsTabletOrLess}
        onResizeInner={this.onResizeInner}
        goToPage={this.goToPage}
      />
    )
  }

  renderPagination = () => {
    const { baseItemMarginBetween } = this.props
    const { indexPageVisible, numPages, viewportIsTabletOrLess, viewportIsMobile } = this.state
    const itemMarginBetween = getMarginBetweenAccordingToViewport(baseItemMarginBetween, viewportIsMobile, viewportIsTabletOrLess)

    if(numPages <= 1) {
      return
    }

    if(viewportIsMobile) {
      const rangePage = createRangeFromZeroTo(numPages)
      return (
        <div style={styles.pageControl}>
          {
            rangePage.map((index) =>
              <div style={[
                styles.pageDot,
                (indexPageVisible === index) && styles.pageDotActive,
              ]}/>
            )
          }
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
          onClick={this.goPrevPage}
          disabled={indexPageVisible < 1 || numPages < 1}
          style={styles.carouselButtonPagination}
        >
          <ArrowIcon className="k-ButtonIcon__svg" direction="left" />
        </ButtonIcon>

        <ButtonIcon
          modifier="beryllium"
          onClick={this.goNextPage}
          disabled={indexPageVisible >= (numPages - 1)}
          style={styles.carouselButtonPagination}
        >
          <ArrowIcon className="k-ButtonIcon__svg" direction="right" />
        </ButtonIcon>
      </div>
    )
  }

  render() {
    const { viewportIsTabletOrLess } = this.state

    if(viewportIsTabletOrLess) {
      return (
        <div>
          { this.renderCarouselInner() }
          { this.renderPagination() }
        </div>
      )
    }

    return (
      <Grid>
        <GridCol col-s="1" />

        <GridCol col-s="10">
          { this.renderCarouselInner() }
        </GridCol>

        <GridCol col-s="1">
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
    paddingTop: CONTAINER_PADDING_MOBILE / 2,
    paddingBottom: CONTAINER_PADDING_MOBILE / 2,
  },
  pageDot: {
    width: 8,
    height: 8,
    marginLeft: 4,
    marginRight: 4,
    borderRadius: 4,
    backgroundColor: 'black',
    opacity: 0.1,
  },
  pageDotActive: {
    opacity: 0.4,
  },
}

export default Radium(Carousel)
