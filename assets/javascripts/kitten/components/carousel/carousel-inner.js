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
      // wait more for scrollStop if browser support snap
      // because of the momentum on ios
      supportScrollSnap ? 132 : 66
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

const getRangePageScrollLeft = (targetClientWidth, numPages, siblingPageVisible, itemMarginBetween) => {
  const innerWidth = targetClientWidth - (siblingPageVisible ? (itemMarginBetween * 2 * 2) : 0)

  return [...Array(numPages).keys()]
    .map((numPage) => numPage * (innerWidth + itemMarginBetween) )
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

  componentWillReceiveProps(nextProps) {
    if(nextProps.indexPageVisible !== this.props.indexPageVisible) {
      this.scrollToPage(nextProps.indexPageVisible)
    }
  }

  handleInnerScroll = scrollStop((target) => {
    const { numPages, siblingPageVisible, itemMarginBetween, indexPageVisible, goToPage } = this.props
    const { scrollLeft, clientWidth } = target

    const rangePageScrollLeft = getRangePageScrollLeft(clientWidth, numPages, siblingPageVisible, itemMarginBetween)

    const closest = getClosest(rangePageScrollLeft, scrollLeft)
    const indexClosest = rangePageScrollLeft.indexOf(closest)

    if(indexClosest !== indexPageVisible) {
      goToPage(indexClosest)
    } else {
      // if the user doesn't scroll enought to change page
      // we need to scroll back to the fake snap page
      if(/*supportScrollSmooth && */ closest !== scrollLeft) {
        target.scrollTo(closest, 0)
      }
    }

  })

  scrollToPage = (indexPageToScroll) => {
    const { numPages, siblingPageVisible, itemMarginBetween } = this.props

    const target = this.refs.carouselInner
    const { scrollLeft, clientWidth } = target

    const rangePageScrollLeft = getRangePageScrollLeft(clientWidth, numPages, siblingPageVisible, itemMarginBetween)

    const closest = rangePageScrollLeft[indexPageToScroll]

    if(/*supportScrollSmooth && */closest !== scrollLeft) {
      target.scrollTo(closest, 0)
    }
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
    } = this.props

    const rangePage = [...Array(numPages).keys()]

    return (
      <div
        ref="carouselInner"
        className="k-CarouselInner"
        style={getStyleInner(itemMarginBetween, siblingPageVisible)}
        onScroll={/*supportScrollSmooth && */this.handleInnerScroll}
      >
        {
          rangePage.map((index) =>
            <div
              key={index}
              style={getStylePageContainer(index, itemMarginBetween, indexPageVisible)}
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
          siblingPageVisible &&
            <div style={{ minWidth: (itemMarginBetween * 2) }} />
        }
      </div>
    )
  }
}

const getStyleInner = (itemMarginBetween, siblingPageVisible) => {
  return Object.assign(
    {
      paddingLeft: siblingPageVisible ? (itemMarginBetween * 2) : 0,
      paddingRight: siblingPageVisible ? (itemMarginBetween * 2) : 0,
    },
    styles.carouselInner,
    styles.carouselInnerScroll,
  )
}

const getStylePageContainer = (index, itemMarginBetween, indexPageVisible) => {
  return Object.assign(
    {
      marginLeft: index ? itemMarginBetween : 0,
    },
    styles.carouselPageContainer,
  )
}

const styles = {
  carouselInner: {
    display: 'flex',
    flexDirect: 'row',
    overflowX: 'scroll',
    scrollBehavior: 'smooth',
    WebkitOverflowScrolling: 'touch',
    scrollSnapType: 'mandatory',
  },
  carouselPageContainer: {
    width: '100%',
    flexShrink: 0,
    scrollSnapAlign: 'center',
  },
}
