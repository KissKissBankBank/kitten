import React from 'react'
import ResizeObserver from 'resize-observer-polyfill'

import { Grid, GridCol } from 'kitten/components/grid/grid'
import { Container } from 'kitten/components/grid/container'
import { ButtonIcon } from 'kitten/components/buttons/button-icon'
import { ArrowIcon } from 'kitten/components/icons/arrow-icon'

import CarouselPage from 'kitten/components/carousel/carousel-page'

const getDataForPage = (data, indexPage, numColumns) => {
  const startIndex = indexPage * numColumns
  return data.slice(startIndex, startIndex + numColumns)
}

const getNumColumnsForWidth = (width, itemMinWidth) => {
  const remainingWidthWithOneCard = (width - itemMinWidth)
  const numColumns = Math.floor(remainingWidthWithOneCard / (itemMinWidth + CarouselPage.MARGIN)) + 1
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
  }

  onObserve = ([entry]) => {
    const { data, itemMinWidth } = this.props
    const widthInner = entry.contentRect.width

    const numColumns = getNumColumnsForWidth(widthInner, itemMinWidth)
    const numPages = getNumPagesForColumnsAndDataLength(data.length, numColumns)

    if(this.state.numColumns !== numColumns || this.state.numPages !== numPages) {
      const indexPageVisible = this.state.indexPageVisible > (numPages - 1)
        ? (numPages - 1)
        : this.state.indexPageVisible

      this.setState({ numColumns, numPages, indexPageVisible })
    }
  }

  componentDidMount () {
    this.observer = new ResizeObserver(this.onObserve)
    this.observer.observe(this.refs.carouselInner)
  }

  componentWillUnmount () {
    this.observer.disconnect()
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

    const rangePage = [...Array(numPages).keys()]

    return (
      <Container>
        <Grid>
          <GridCol col-s="1" />

          <GridCol col-s="10">
            <div style={styles.carouselInner} ref="carouselInner">
              {
                rangePage.map((index) =>
                  <div key={index} style={{
                    ...styles.carouselPageContainer,
                    marginLeft: index ? CarouselPage.MARGIN : 0,
                    transform: `translateX(calc(-${indexPageVisible * 100}% - ${indexPageVisible * CarouselPage.MARGIN}px) )`,
                  }}>
                    <CarouselPage
                      data={getDataForPage(data, index, numColumns)}
                      numColumns={numColumns}
                      itemMinWidth={itemMinWidth}
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
      </Container>
    )
  }
}

const styles = {
  carouselInner: {
    display: 'flex',
    flexDirect: 'row',
    overflow: 'hidden',
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
