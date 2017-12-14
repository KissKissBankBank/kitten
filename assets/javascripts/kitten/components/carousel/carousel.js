import React from 'react'

import { createMatchMedia, createMatchMediaMax } from 'kitten/helpers/utils/media-queries'
import { SCREEN_SIZE_XS, SCREEN_SIZE_M } from 'kitten/constants/screen-config'
import { CONTAINER_PADDING, CONTAINER_PADDING_MOBILE } from 'kitten/constants/grid-config'

import { Grid, GridCol } from 'kitten/components/grid/grid'
import { ButtonIcon } from 'kitten/components/buttons/button-icon'
import { ArrowIcon } from 'kitten/components/icons/arrow-icon'

import CarouselInner from 'kitten/components/carousel/carousel-inner'

const mqPointerCoarse = createMatchMedia('(pointer: coarse)')
const pointerIsCoarse = mqPointerCoarse ? mqPointerCoarse.matches : false

const getNumColumnsForWidth = (width, itemMinWidth, itemMarginBetween) => {
  const remainingWidthWithOneCard = (width - itemMinWidth)
  const numColumns = Math.floor(remainingWidthWithOneCard / (itemMinWidth + itemMarginBetween)) + 1
  return numColumns
}

const getNumPagesForColumnsAndDataLength = (dataLength, numColumns) => {
  const numPages = Math.ceil(dataLength / numColumns)
  return numPages
}

const getMarginBetweenAccordingToViewport = (baseItemMarginBetween, viewportIsMobile, viewportIsTabletteOrLess) => {
  if(viewportIsMobile) {
    return CONTAINER_PADDING_MOBILE / 2
  } else if (viewportIsTabletteOrLess) {
    return CONTAINER_PADDING / 2
  } else {
    return baseItemMarginBetween
  }
}

export default class Carousel extends React.Component {

  constructor(props, context) {
    super(props, context)

    this.mqMobile = createMatchMediaMax(SCREEN_SIZE_XS)
    this.mqTabletteOrLess = createMatchMediaMax(SCREEN_SIZE_M)

    this.state = {
      indexPageVisible: 0,
      numColumns: 0,
      numPages: 0,
      viewportIsMobile: this.mqMobile ? this.mqMobile.matches : false,
      viewportIsTabletteOrLess: this.mqTabletteOrLess ? this.mqTabletteOrLess.matches : false,
    }
  }

  onResizeInner = (widthInner) => {
    const { data, itemMinWidth, baseItemMarginBetween } = this.props
    const { viewportIsMobile, viewportIsTabletteOrLess } = this.state
    const itemMarginBetween = getMarginBetweenAccordingToViewport(baseItemMarginBetween, viewportIsMobile, viewportIsTabletteOrLess)

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

  onTabletteMQ = (event) => {
    this.setState({ viewportIsTabletteOrLess: event.matches })
  }

  componentDidMount () {
    this.mqMobile && this.mqMobile.addListener(this.onMobileMQ)
    this.mqTabletteOrLess && this.mqTabletteOrLess.addListener(this.onTabletteMQ)
  }

  componentWillUnmount () {
    this.mqMobile && this.mqMobile.removeListener(this.onMobileMQ)
    this.mqTabletteOrLess && this.mqTabletteOrLess.removeListener(this.onTabletteMQ)
  }

  goNextPage = () => {
    this.setState({ indexPageVisible: this.state.indexPageVisible + 1 })
  }

  goPrevPage = () => {
    this.setState({ indexPageVisible: this.state.indexPageVisible - 1 })
  }

  renderCarouselInner = () => {
    const { data, itemMinWidth, renderItem, baseItemMarginBetween } = this.props
    const { indexPageVisible, numColumns, numPages, viewportIsMobile, viewportIsTabletteOrLess } = this.state
    const itemMarginBetween = getMarginBetweenAccordingToViewport(baseItemMarginBetween, viewportIsMobile, viewportIsTabletteOrLess)

    const rangePage = [...Array(numPages).keys()]

    return (
      <CarouselInner
        data={data}
        itemMinWidth={itemMinWidth}
        renderItem={renderItem}
        indexPageVisible={indexPageVisible}
        numColumns={numColumns}
        numPages={numPages}
        itemMarginBetween={itemMarginBetween}
        siblingPageVisible={viewportIsTabletteOrLess}
        pointerIsCoarse={pointerIsCoarse}
        onResizeInner={this.onResizeInner}
      />
    )
  }

  renderPagination = () => {
    const { baseItemMarginBetween } = this.props
    const { indexPageVisible, numPages, viewportIsTabletteOrLess, viewportIsMobile } = this.state
    const itemMarginBetween = getMarginBetweenAccordingToViewport(baseItemMarginBetween, viewportIsMobile, viewportIsTabletteOrLess)

    if(numPages <= 1 || pointerIsCoarse) {
      return
    }

    return (
      <div
        style={Object.assign(
          {
            marginTop: viewportIsTabletteOrLess ? itemMarginBetween : 0,
            marginLeft: viewportIsTabletteOrLess ? (itemMarginBetween * 2) : 0,
          },
          styles.carouselPagination,
          viewportIsTabletteOrLess && styles.carouselPaginationTablette,
        )}
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
    const { viewportIsTabletteOrLess } = this.state

    if(viewportIsTabletteOrLess) {
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
  carouselPaginationTablette: {
    flexDirection: 'row',
  },
  carouselButtonPagination: {
    marginBottom: 2,
    marginRight: 2,
  },
}
