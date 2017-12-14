import React from 'react'
import ResizeObserver from 'resize-observer-polyfill'

import { cssSupports } from 'kitten/helpers/utils/feature-detection'

import CarouselPage from 'kitten/components/carousel/carousel-page'

const supportScrollSnap = cssSupports('scroll-snap-type: mandatory')
const supportScrollSmooth = cssSupports('scroll-behavior: smooth')

// inspired by https://github.com/cferdinandi/scrollStop
const scrollStop = ( callback ) => {
  // Make sure a valid callback was provided
  if (!callback) return

  let isScrolling
  let target

  return (event) => {
    clearTimeout(isScrolling)

    target = event.target

    isScrolling = setTimeout(
      () => {
        // Run the callback
        callback(target)
      },
      66
    )
  }
}

const getClosest = (counts, goal) => {
  return counts
    .reduce((prev, curr) => Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev)
}

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

  handleInnerScroll = scrollStop((target) => {
    const { numPages, siblingPageVisible, itemMarginBetween } = this.props
    const { scrollLeft } = target

    const innerWidth = target.clientWidth - (siblingPageVisible ? (itemMarginBetween * 2 * 2) : 0)

    const rangePageScrollLeft = [...Array(numPages).keys()]
      .map((numPage) => numPage * (innerWidth + itemMarginBetween) )

    const closest = getClosest(rangePageScrollLeft, scrollLeft)

    if(supportScrollSmooth && closest !== scrollLeft) {
      target.scrollTo(closest, 0)
    }
  })

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
        onScroll={supportScrollSmooth && this.handleInnerScroll}
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
          (pointerIsCoarse && siblingPageVisible) &&
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
    scrollBehavior: 'smooth',
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
