import React from 'react'
import Radium from 'radium'
import ResizeObserver from 'resize-observer-polyfill'

if(typeof window !== 'undefined') {
  require('smoothscroll-polyfill').polyfill()
}

import { createRangeFromZeroTo } from 'kitten/helpers/utils/range'
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

  return createRangeFromZeroTo(numPages)
    .map((numPage) => numPage * (innerWidth + itemMarginBetween) )
}

class CarouselInner extends React.Component {

  onResizeObserve = ([entry]) => {
    const widthInner = entry.contentRect.width
    this.props.onResizeInner(widthInner)
  }

  componentDidMount () {
    this.observer = new ResizeObserver(this.onResizeObserve)
    this.observer.observe(this.carouselInner)
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
      if(closest !== scrollLeft) {
        target.scrollTo({ top: 0, left: closest, behavior: 'smooth' })
      }
    }

  })

  scrollToPage = (indexPageToScroll) => {
    const { numPages, siblingPageVisible, itemMarginBetween } = this.props

    const target = this.carouselInner
    const { scrollLeft, clientWidth } = target

    const rangePageScrollLeft = getRangePageScrollLeft(clientWidth, numPages, siblingPageVisible, itemMarginBetween)

    const closest = rangePageScrollLeft[indexPageToScroll]

    if(closest !== scrollLeft) {
      target.scrollTo({ top: 0, left: closest, behavior: 'smooth' })
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

    const rangePage = createRangeFromZeroTo(numPages)

    return (
      <div
        ref={(div) => { this.carouselInner = div }}
        className='k-CarouselInner'
        style={[
          styles.carouselInner,
          {
            paddingLeft: siblingPageVisible ? (itemMarginBetween * 2) : 0,
            paddingRight: siblingPageVisible ? (itemMarginBetween * 2) : 0,
          }
        ]}
        onScroll={this.handleInnerScroll}
      >
        {
          rangePage.map((index) =>
            <div
              key={index}
              style={[
                styles.carouselPageContainer,
                {
                  marginLeft: index ? itemMarginBetween : 0,
                }
              ]}
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

const styles = {
  carouselInner: {
    display: 'flex',
    flexDirect: 'row',
    overflowX: 'scroll',
    scrollBehavior: 'smooth',
    WebkitOverflowScrolling: 'touch',
    scrollSnapType: supportScrollSnap ? 'mandatory' : 'none',
    minHeight: 1, // Fix bug IE11 ResizeObserver, to trigger a first resize
  },
  carouselPageContainer: {
    width: '100%',
    flexShrink: 0,
    scrollSnapAlign: supportScrollSnap ? 'center' : 'none',
  },
}

export default Radium(CarouselInner)
