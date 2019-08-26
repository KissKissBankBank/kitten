import React from 'react'
import Radium, { Style } from 'radium'
import ResizeObserver from 'resize-observer-polyfill'

if (typeof window !== 'undefined') {
  require('smoothscroll-polyfill').polyfill()
}

import { createRangeFromZeroTo } from '../../helpers/utils/range'
import { cssSupports } from '../../helpers/utils/feature-detection'
import { CarouselPage } from '../../components/carousel/carousel-page'

const supportScrollSnap = cssSupports('scroll-snap-type: mandatory')

// inspired by https://github.com/cferdinandi/scrollStop
const scrollStop = callback => {
  // Make sure a valid callback was provided
  if (!callback) return

  let isScrolling
  let target

  return event => {
    clearTimeout(isScrolling)

    target = event.target

    isScrolling = setTimeout(
      () => {
        // Run the callback
        callback(target)
      },
      // wait more for scrollStop if browser support snap
      // because of the momentum on ios
      supportScrollSnap ? 132 : 66,
    )
  }
}

const getClosest = (counts, goal) => {
  return counts.reduce((prev, curr) =>
    Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev,
  )
}

const getDataForPage = (data, indexPage, numColumns) => {
  const startIndex = indexPage * numColumns

  return data.slice(startIndex, startIndex + numColumns)
}

const getRangePageScrollLeft = (
  targetClientWidth,
  numPages,
  siblingPageVisible,
  itemMarginBetween,
) => {
  const partSiblingItemExceedWidth = itemMarginBetween
  const marginForSibling = siblingPageVisible
    ? (itemMarginBetween + partSiblingItemExceedWidth) * 2
    : 0
  const innerWidth = targetClientWidth - marginForSibling

  return createRangeFromZeroTo(numPages).map(
    numPage => numPage * (innerWidth + itemMarginBetween),
  )
}

class CarouselInnerBase extends React.Component {
  state = {
    isTouched: false,
  }

  onResizeObserve = ([entry]) => {
    const widthInner = entry.contentRect.width
    this.props.onResizeInner(widthInner)
  }

  componentDidMount() {
    this.observer = new ResizeObserver(this.onResizeObserve)
    this.observer.observe(this.carouselInner)
  }

  componentWillUnmount() {
    this.observer.disconnect()
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.indexPageVisible !== this.props.indexPageVisible) {
      this.scrollToPage(nextProps.indexPageVisible)
    }
  }

  handleInnerScroll = scrollStop(target => {
    if (this.state.isTouched) return

    const {
      numPages,
      siblingPageVisible,
      itemMarginBetween,
      indexPageVisible,
      goToPage,
    } = this.props
    const { scrollLeft, clientWidth } = target

    const rangePageScrollLeft = getRangePageScrollLeft(
      clientWidth,
      numPages,
      siblingPageVisible,
      itemMarginBetween,
    )

    const closest = getClosest(rangePageScrollLeft, scrollLeft)
    const indexClosest = rangePageScrollLeft.indexOf(closest)

    if (indexClosest !== indexPageVisible) {
      goToPage(indexClosest)
    } else {
      // if the user doesn't scroll enough to change page
      // we need to scroll back to the fake snap page
      if (closest !== scrollLeft) {
        target.scrollTo({ top: 0, left: closest, behavior: 'smooth' })
      }
    }
  })

  scrollToPage = indexPageToScroll => {
    const { numPages, siblingPageVisible, itemMarginBetween } = this.props

    const target = this.carouselInner
    const { scrollLeft, clientWidth } = target

    const rangePageScrollLeft = getRangePageScrollLeft(
      clientWidth,
      numPages,
      siblingPageVisible,
      itemMarginBetween,
    )

    const closest = rangePageScrollLeft[indexPageToScroll]

    if (closest !== scrollLeft) {
      target.scrollTo({ top: 0, left: closest, behavior: 'smooth' })
    }
  }

  handleTouchStart = () => this.setState({ isTouched: true })
  handleTouchEnd = () => this.setState({ isTouched: false })

  handlePageClick = index => e => {
    if (index !== this.props.indexPageVisible) {
      e.preventDefault()
      this.scrollToPage(index)
      document.activeElement.blur()
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
        ref={div => {
          this.carouselInner = div
        }}
        className="k-CarouselInner"
        style={[
          styles.carouselInner,
          {
            paddingLeft: siblingPageVisible ? itemMarginBetween * 2 : 0,
            paddingRight: siblingPageVisible ? itemMarginBetween * 2 : 0,
          },
        ]}
        onScroll={this.handleInnerScroll}
        onTouchStart={this.handleTouchStart}
        onTouchEnd={this.handleTouchEnd}
      >
        {rangePage.map(index => (
          <div
            key={index}
            style={[
              styles.carouselPageContainer,
              index !== indexPageVisible &&
                styles.carouselPageContainerClickable,
              {
                marginLeft: index ? itemMarginBetween : 0,
              },
            ]}
            onClick={this.handlePageClick(index)}
          >
            <CarouselPage
              data={getDataForPage(data, index, numColumns)}
              numColumns={numColumns}
              itemMinWidth={itemMinWidth}
              itemMarginBetween={itemMarginBetween}
              renderItem={renderItem}
            />
          </div>
        ))}
        {siblingPageVisible && (
          <div style={{ minWidth: itemMarginBetween * 2 }} />
        )}

        {/* hide scrollbar on Chrome and Safari */}
        <Style
          scopeSelector=".k-CarouselInner::-webkit-scrollbar"
          rules={{ display: 'none' }}
        />
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
    // hide scrollbar on IE and Edge
    MsOverflowStyle: 'none',
    // mandatory to combine scroll with this property on iOS
    WebkitOverflowScrolling: 'touch',
    // snap only for browser that support snap without prefixes
    scrollSnapType: supportScrollSnap ? 'mandatory' : 'none',
    // Fix bug IE11 ResizeObserver, to trigger a first resize
    minHeight: 1,
  },
  carouselPageContainer: {
    width: '100%',
    flexShrink: 0,
    // snap only for browser that support snap without prefixes
    scrollSnapAlign: supportScrollSnap ? 'center' : 'none',
  },
  carouselPageContainerClickable: {
    cursor: 'pointer',
  },
}

export const CarouselInner = Radium(CarouselInnerBase)
