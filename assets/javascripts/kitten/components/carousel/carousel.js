import React from 'react'
import ResizeObserver from 'resize-observer-polyfill'

import { createMatchMediaMax } from 'kitten/helpers/utils/media-queries'
import { SCREEN_SIZE_XS, SCREEN_SIZE_M } from 'kitten/constants/screen-config'

import { Grid, GridCol } from 'kitten/components/grid/grid'
import { ButtonIcon } from 'kitten/components/buttons/button-icon'
import { ArrowIcon } from 'kitten/components/icons/arrow-icon'

import CarouselPage from 'kitten/components/carousel/carousel-page'

const mqMobile = createMatchMediaMax(SCREEN_SIZE_XS)
const mqTabletteOrLess = createMatchMediaMax(SCREEN_SIZE_M)

const getDataForPage = (data, indexPage, numColumns) => {
  const startIndex = indexPage * numColumns
  return data.slice(startIndex, startIndex + numColumns)
}

const getNumColumnsForWidth = (width, itemMinWidth, itemMarginBetween) => {
  const remainingWidthWithOneCard = (width - itemMinWidth)
  const numColumns = Math.floor(remainingWidthWithOneCard / (itemMinWidth + itemMarginBetween)) + 1
  return numColumns
}

const getNumPagesForColumnsAndDataLength = (dataLength, numColumns) => {
  const numPages = Math.ceil(dataLength / numColumns)
  return numPages
}

export default class Carousel extends React.Component {

  state = {
    indexPageVisible: 0,
    numColumns: 0,
    numPages: 0,
    viewportIsMobile: mqMobile ? mqMobile.matches : false,
    viewportIsTabletteOrLess: mqTabletteOrLess ? mqTabletteOrLess.matches : false,
  }

  onResizeObserve = ([entry]) => {
    const { data, itemMinWidth } = this.props
    const marginBetween = this.getMarginBetween()

    const widthInner = entry.contentRect.width

    const numColumns = getNumColumnsForWidth(widthInner, itemMinWidth, marginBetween)
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
    this.observer = new ResizeObserver(this.onResizeObserve)
    this.observer.observe(this.refs.carouselInner)

    this.mqMobileListener = mqMobile && mqMobile.addListener(this.onMobileMQ)
    this.mqTabletteListener = mqTabletteOrLess && mqTabletteOrLess.addListener(this.onTabletteMQ)
  }

  componentWillUnmount () {
    this.observer.disconnect()

    this.mqMobileListener && this.mqMobileListener.removeListener(this.onMobileMQ)
    this.mqTabletteListener && this.mqTabletteListener.removeListener(this.onTabletteMQ)
  }

  getMarginBetween = () => {
    const { itemMarginBetween } = this.props
    const { viewportIsMobile, viewportIsTabletteOrLess } = this.state

    if(viewportIsMobile) {
      return 10
    } else if (viewportIsTabletteOrLess) {
      return 20
    } else {
      return itemMarginBetween
    }
  }

  goNextPage = () => {
    this.setState({ indexPageVisible: this.state.indexPageVisible + 1 })
  }

  goPrevPage = () => {
    this.setState({ indexPageVisible: this.state.indexPageVisible - 1 })
  }

  render() {
    const { data, itemMinWidth, renderItem } = this.props
    const { indexPageVisible, numColumns, numPages } = this.state
    const marginBetween = this.getMarginBetween()

    const rangePage = [...Array(numPages).keys()]

    return (
      <Grid>
        <GridCol col-s="1" />

        <GridCol col-s="10">
          <div style={styles.carouselInner} ref="carouselInner">
            {
              rangePage.map((index) =>
                <div key={index} style={{
                  ...styles.carouselPageContainer,
                  marginLeft: index ? marginBetween : 0,
                  transform: `translateX(calc(-${indexPageVisible * 100}% - ${indexPageVisible * marginBetween}px) )`,
                }}>
                  <CarouselPage
                    data={getDataForPage(data, index, numColumns)}
                    numColumns={numColumns}
                    itemMinWidth={itemMinWidth}
                    itemMarginBetween={marginBetween}
                    renderItem={renderItem}
                  />
                </div>
              )
            }
          </div>
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
  carouselInner: {
    display: 'flex',
    flexDirect: 'row',
    overflowX: 'hidden',
  },
  carouselPageContainer: {
    width: '100%',
    flexShrink: 0,
    transition: 'transform ease-in-out 600ms',
  },
  carouselButtonPagination: {
    marginBottom: 2,
  },
}
