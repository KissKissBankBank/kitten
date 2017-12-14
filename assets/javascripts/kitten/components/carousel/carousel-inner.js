import React from 'react'
import ResizeObserver from 'resize-observer-polyfill'

import CarouselPage from 'kitten/components/carousel/carousel-page'

const getDataForPage = (data, indexPage, numColumns) => {
  const startIndex = indexPage * numColumns
  return data.slice(startIndex, startIndex + numColumns)
}

export default class CarouselInner extends React.Component {

  onResizeObserve = ([entry]) => {
    const widthInner = entry.contentRect.width
    this.props.onResizeInner(widthInner)
  }

  componentDidMount () {
    this.observer = new ResizeObserver(this.onResizeObserve)
    this.observer.observe(this.refs.carouselInner)
  }

  componentWillUnmount () {
    this.observer.disconnect()
  }

  render() {
    const {
      data,
      itemMinWidth,
      renderItem,
      indexPageVisible,
      numColumns,
      numPages,
      itemMarginBetween,
      siblingPageVisible,
      pointerIsCoarse,
    } = this.props

    const rangePage = [...Array(numPages).keys()]

    return (
      <div
        ref="carouselInner"
        style={getStyleInner(itemMarginBetween, siblingPageVisible, pointerIsCoarse)}
      >
        {
          rangePage.map((index) =>
            <div
              key={index}
              style={getStylePageContainer(index, itemMarginBetween, indexPageVisible, pointerIsCoarse)}
            >
              <CarouselPage
                data={getDataForPage(data, index, numColumns)}
                numColumns={numColumns}
                itemMinWidth={itemMinWidth}
                itemMarginBetween={itemMarginBetween}
                renderItem={renderItem}
              />
            </div>
          )
        }
        {
          pointerIsCoarse &&
            <div style={{ minWidth: (itemMarginBetween * 2) }} />
        }
      </div>
    )
  }
}

const getStyleInner = (itemMarginBetween, siblingPageVisible, pointerIsCoarse) => {
  return Object.assign(
    {
      paddingLeft: siblingPageVisible ? (itemMarginBetween * 2) : 0,
      paddingRight: siblingPageVisible ? (itemMarginBetween * 2) : 0,
    },
    styles.carouselInner,
    pointerIsCoarse && styles.carouselInnerScroll,
  )
}

const getStylePageContainer = (index, itemMarginBetween, indexPageVisible, pointerIsCoarse) => {
  return Object.assign(
    {
      marginLeft: index ? itemMarginBetween : 0,
    },
    styles.carouselPageContainer,
    !pointerIsCoarse && {
      transform: `translateX(-${indexPageVisible * 100}%) translateX(-${indexPageVisible * itemMarginBetween}px)`,
    },
  )
}

const styles = {
  carouselInner: {
    display: 'flex',
    flexDirect: 'row',
    overflowX: 'hidden',
  },
  carouselInnerScroll: {
    overflowX: 'scroll',
    WebkitOverflowScrolling: 'touch',
    scrollSnapType: 'mandatory',
  },
  carouselPageContainer: {
    width: '100%',
    flexShrink: 0,
    transition: 'transform ease-in-out 600ms',
    scrollSnapAlign: 'center',
  },
}
