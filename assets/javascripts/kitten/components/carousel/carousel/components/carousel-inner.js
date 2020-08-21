import React, { Component } from 'react'
import ResizeObserver from 'resize-observer-polyfill'
import { domElementHelper } from '../../../../helpers/dom/element-helper'

if (typeof window !== 'undefined') {
  require('smoothscroll-polyfill').polyfill()
}

import { createRangeFromZeroTo } from '../../../../helpers/utils/range'
import { cssSupports } from '../../../../helpers/utils/feature-detection'
import { CarouselPage } from './carousel-page'
import classNames from 'classnames'

const supportScrollSnap = cssSupports('scroll-snap-type: mandatory')

// inspired by https://github.com/cferdinandi/scrollStop
const scrollStop = callback => {
  if (!callback) return

  let isScrolling
  let target

  return event => {
    clearTimeout(isScrolling)

    target = event.target

    isScrolling = setTimeout(
      () => callback(target),
      // wait more for scrollStop if browser support snap
      // because of the momentum on iOS
      supportScrollSnap ? 132 : 66,
    )
  }
}

const getClosest = (counts, goal) =>
  counts.reduce((prev, curr) =>
    Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev,
  )

const getDataForPage = (data, indexPage, numColumns) => {
  const startIndex = indexPage * numColumns

  return data.slice(startIndex, startIndex + numColumns)
}

const getRangePageScrollLeft = (
  targetClientWidth,
  numPages,
  itemMarginBetween,
  containerPadding,
) =>
  createRangeFromZeroTo(numPages).map(
    numPage =>
      numPage * (targetClientWidth + itemMarginBetween - containerPadding),
  )

export class CarouselInner extends Component {
  state = {
    isTouched: false,
  }

  carouselInner = React.createRef()

  onResizeObserve = ([entry]) => {
    const widthInner = entry.contentRect.width
    this.props.onResizeInner(widthInner)
  }

  componentDidMount() {
    this.observer = new ResizeObserver(this.onResizeObserve)
    this.observer.observe(this.carouselInner.current)
  }

  componentWillUnmount() {
    this.observer.disconnect()
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.indexPageVisible !== this.props.indexPageVisible) {
      this.scrollToPage(nextProps.indexPageVisible)
    }
  }

  getElementPadding = element =>
    parseInt(domElementHelper.getComputedStyle(element, 'padding-left')) +
    parseInt(domElementHelper.getComputedStyle(element, 'padding-right'))

  handleInnerScroll = scrollStop(target => {
    if (this.state.isTouched) return

    const {
      numPages,
      itemMarginBetween,
      indexPageVisible,
      goToPage,
    } = this.props
    const { scrollLeft, clientWidth } = target

    const rangePageScrollLeft = getRangePageScrollLeft(
      clientWidth,
      numPages,
      itemMarginBetween,
      this.getElementPadding(target),
    )

    const closest = getClosest(rangePageScrollLeft, scrollLeft)
    const indexClosest = rangePageScrollLeft.indexOf(closest)

    if (indexClosest !== indexPageVisible) return goToPage(indexClosest)
    // if the user doesn't scroll enough to change page
    // we need to scroll back to the fake snap page
    if (closest !== scrollLeft) {
      return target.scrollTo({ top: 0, left: closest, behavior: 'smooth' })
    }
  })

  scrollToPage = indexPageToScroll => {
    const { numPages, itemMarginBetween } = this.props

    const target = this.carouselInner.current
    const { scrollLeft, clientWidth } = target

    const rangePageScrollLeft = getRangePageScrollLeft(
      clientWidth,
      numPages,
      itemMarginBetween,
      this.getElementPadding(target),
    )

    const closest = rangePageScrollLeft[indexPageToScroll]

    if (closest !== scrollLeft) {
      target.scrollTo({ top: 0, left: closest, behavior: 'smooth' })
    }
  }

  handleTouchStart = () => this.setState({ isTouched: true })
  handleTouchEnd = () => this.setState({ isTouched: false })

  handlePageClick = index => e => {
    if (index === this.props.indexPageVisible) return

    e.preventDefault()
    this.scrollToPage(index)
    document.activeElement.blur()
  }

  render() {
    const {
      legacyMode,
      data,
      itemMinWidth,
      renderItem,
      indexPageVisible,
      numColumns,
      numPages,
      itemMarginBetween,
      pagesClassName,
      viewedPages,
      exportVisibilityProps,
      specificColNumber,
    } = this.props

    const rangePage = createRangeFromZeroTo(numPages)

    return (
      <div
        ref={this.carouselInner}
        onScroll={this.handleInnerScroll}
        onTouchStart={this.handleTouchStart}
        onTouchEnd={this.handleTouchEnd}
        className="k-Carousel__inner"
      >
        {rangePage.map(index => {
          const isActivePage = indexPageVisible === index
          const hasPageBeenViewed = viewedPages.has(index)

          return (
            <div
              key={index}
              onClick={this.handlePageClick(index)}
              className={classNames(
                'k-Carousel__inner__pageContainer',
                pagesClassName,
                {
                  'k-Carousel__inner__pageContainer--isActivePage': isActivePage,
                  'k-Carousel__inner__pageContainer--hasBeenViewed': hasPageBeenViewed,
                },
              )}
            >
              <CarouselPage
                legacyMode={legacyMode}
                data={
                  legacyMode ? getDataForPage(data, index, numColumns) : null
                }
                numColumns={numColumns}
                itemMinWidth={itemMinWidth}
                specificColNumber={specificColNumber}
                itemMarginBetween={itemMarginBetween}
                renderItem={
                  legacyMode
                    ? renderItem
                    : getDataForPage(renderItem, index, numColumns)
                }
                isActivePage={isActivePage}
                hasPageBeenViewed={hasPageBeenViewed}
                exportVisibilityProps={exportVisibilityProps}
              />
            </div>
          )
        })}
      </div>
    )
  }
}
