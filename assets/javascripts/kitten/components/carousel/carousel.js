import React from 'react'

import { createMatchMediaMax } from 'kitten/helpers/utils/media-queries'
import { SCREEN_SIZE_XS, SCREEN_SIZE_M } from 'kitten/constants/screen-config'
import { CONTAINER_PADDING, CONTAINER_PADDING_MOBILE } from 'kitten/constants/grid-config'

import { Grid, GridCol } from 'kitten/components/grid/grid'
import { ButtonIcon } from 'kitten/components/buttons/button-icon'
import { ArrowIcon } from 'kitten/components/icons/arrow-icon'

import CarouselInner from 'kitten/components/carousel/carousel-inner'

const mqMobile = createMatchMediaMax(SCREEN_SIZE_XS)
const mqTabletteOrLess = createMatchMediaMax(SCREEN_SIZE_M)

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

  state = {
    indexPageVisible: 0,
    numColumns: 0,
    numPages: 0,
    viewportIsMobile: mqMobile ? mqMobile.matches : false,
    viewportIsTabletteOrLess: mqTabletteOrLess ? mqTabletteOrLess.matches : false,
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
    this.mqMobileListener = mqMobile && mqMobile.addListener(this.onMobileMQ)
    this.mqTabletteListener = mqTabletteOrLess && mqTabletteOrLess.addListener(this.onTabletteMQ)
  }

  componentWillUnmount () {
    this.mqMobileListener && mqMobile.removeListener(this.onMobileMQ)
    this.mqTabletteListener && mqTabletteOrLess.removeListener(this.onTabletteMQ)
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
        onResizeInner={this.onResizeInner}
      />
    )
  }

  render() {
    const { indexPageVisible, numPages, viewportIsTabletteOrLess } = this.state

    if(viewportIsTabletteOrLess) {
      return this.renderCarouselInner()
    }

    return (
      <Grid style={{backgroundColor: 'yellow'}}>
        <GridCol col-s="1" />

        <GridCol col-s="10">
          {
            this.renderCarouselInner()
          }
        </GridCol>

        <GridCol col-s="1">

          <ButtonIcon
            modifier="beryllium"
            onClick={this.goNextPage}
            disabled={indexPageVisible >= (numPages - 1)}
            style={styles.carouselButtonPagination}
          >
            <ArrowIcon className="k-ButtonIcon__svg" direction="right" />
          </ButtonIcon>

          <ButtonIcon
            modifier="beryllium"
            onClick={this.goPrevPage}
            disabled={indexPageVisible < 1 || numPages < 1}
            style={styles.carouselButtonPagination}
          >
            <ArrowIcon className="k-ButtonIcon__svg" direction="left" />
          </ButtonIcon>

        </GridCol>
      </Grid>
    )
  }
}

const styles = {
  carouselButtonPagination: {
    marginBottom: 2,
  },
}
