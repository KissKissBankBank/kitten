import React from 'react'

import FakeCard from 'kitten/components/carousel/fake-card'
import CarouselPage from 'kitten/components/carousel/carousel-page'

const WIDTH = 1080

const getDataForPage = (data, indexPage, numColumns) => {
  const startIndex = indexPage * numColumns
  return data.slice(startIndex, startIndex + numColumns)
}

export default class Carousel extends React.Component {

  state = {
    indexPageVisible: 0,
  }

  goNextPage = () => {
    this.setState({ indexPageVisible: this.state.indexPageVisible + 1 })
  }

  goPrevPage = () => {
    this.setState({ indexPageVisible: this.state.indexPageVisible - 1 })
  }

  render() {
    const { data } = this.props
    const { indexPageVisible } = this.state

    const widthWithOneCard = (WIDTH - FakeCard.MIN_WIDTH)
    const numColums = Math.floor(widthWithOneCard / (FakeCard.MIN_WIDTH + CarouselPage.MARGIN)) + 1

    const numPages = Math.ceil(data.length / numColums)
    const rangePage = [...Array(numPages).keys()]

    return (
      <div style={styles.carousel}>
        <div>WIDTH : {WIDTH}</div>

        <div style={styles.carouselInner}>
          {
            rangePage.map((index) =>
              <div key={index} style={{
                ...styles.carouselPageContainer,
                marginLeft: index ? CarouselPage.MARGIN : 0,
                transform: `translateX(-${ indexPageVisible * (WIDTH + CarouselPage.MARGIN) }px)`,
              }}>
                <CarouselPage
                  data={getDataForPage(data, index, numColums)}
                  numColumns={numColums}
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
    width: WIDTH,
    overflow: 'hidden',

    backgroundColor: 'blue',
  },
  carouselPageContainer: {
    width: WIDTH,
    flexShrink: 0,
    transition: 'transform ease-in-out 600ms'
  },
}
