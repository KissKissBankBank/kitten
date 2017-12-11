import React from 'react'
import ResizeObserver from 'resize-observer-polyfill'

import FakeCard from 'kitten/components/carousel/fake-card'
import CarouselPage from 'kitten/components/carousel/carousel-page'

const getDataForPage = (data, indexPage, numColumns) => {
  const startIndex = indexPage * numColumns
  return data.slice(startIndex, startIndex + numColumns)
}

const getNumColumnsForWidth = (width) => {
  const widthWithOneCard = (width - FakeCard.MIN_WIDTH)
  const numColumns = Math.floor(widthWithOneCard / (FakeCard.MIN_WIDTH + CarouselPage.MARGIN)) + 1
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

  constructor(props) {
    super(props)

    this.observer = new ResizeObserver(this.onObserve)
  }

  onObserve = (entries) => {
    const { data } = this.props

    const widthInner = entries.reduce((result, entry) => entry.contentRect.width, 0)

    const numColumns = getNumColumnsForWidth(widthInner)
    const numPages = getNumPagesForColumnsAndDataLength(data.length, numColumns)

    if(this.state.numColumns !== numColumns || this.state.numPages !== numPages) {
      const indexPageVisible = this.state.indexPageVisible > (numPages - 1) ? (numPages - 1) : this.state.indexPageVisible
      this.setState({ numColumns, numPages, indexPageVisible })
    }
  }

  componentDidMount () {
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
    const { data } = this.props
    const { indexPageVisible, numColumns, numPages } = this.state

    const rangePage = [...Array(numPages).keys()]

    return (
      <div style={styles.carousel}>
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
                  ItemComponent={FakeCard}
                />
              </div>
            )
          }
        </div>
        <div>
          <button type="button" disabled={indexPageVisible < 1 || numPages < 1} onClick={this.goPrevPage}>
            prev
          </button>
          <button type="button" disabled={indexPageVisible >= (numPages - 1)} onClick={this.goNextPage}>
            next
          </button>
          <span>{indexPageVisible}, {numPages}</span>
        </div>
      </div>
    )
  }
}

const styles = {
  carousel: {
    backgroundColor: 'yellow',
    padding: 20,
  },
  carouselInner: {
    display: 'flex',
    flexDirect: 'row',
    overflow: 'hidden',

    backgroundColor: 'blue',
  },
  carouselPageContainer: {
    width: '100%',
    flexShrink: 0,
    transition: 'transform ease-in-out 600ms',
  },
}
