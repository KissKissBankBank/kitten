import React, { useState, useEffect, useRef } from 'react'
import ResizeObserver from 'resize-observer-polyfill'
import { domElementHelper } from '../../../../helpers/dom/element-helper'
import { CarouselPage } from './carousel-page'
import classNames from 'classnames'
import { usePrevious } from '../../../../helpers/utils/use-previous-hook'

if (domElementHelper.canUseDom()) {
  require('smoothscroll-polyfill').polyfill()
}

// inspired by https://github.com/cferdinandi/scrollStop
const scrollStop = callback => {
  if (!callback) return

  let isScrolling
  let target

  return event => {
    clearTimeout(isScrolling)

    target = event.target

    isScrolling = setTimeout(() => callback(target), 132)
  }
}

const getClosest = (counts, goal) =>
  counts.reduce((prev, curr) =>
    Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev,
  )

const getDataForPage = (data, indexPage, numberOfItemsPerPage) => {
  const startIndex = indexPage * numberOfItemsPerPage

  return data.slice(startIndex, startIndex + numberOfItemsPerPage)
}

const getElementPadding = element =>
  parseInt(domElementHelper.getComputedStyle(element, 'padding-left')) +
  parseInt(domElementHelper.getComputedStyle(element, 'padding-right'))

const getRangePageScrollLeft = (
  targetClientWidth,
  numberOfPages,
  itemMarginBetween,
  containerPadding,
) =>
  [...Array(numberOfPages).keys()].map(
    page => page * (targetClientWidth + itemMarginBetween - containerPadding),
  )

export const CarouselInner = ({
  exportVisibilityProps,
  goToPage,
  currentPageIndex,
  itemMarginBetween,
  numberOfItemsPerPage,
  numberOfPages,
  onResizeInner,
  pagesClassName,
  items,
  viewedPages,
}) => {
  const [isTouched, setTouchState] = useState(false)
  const carouselInner = useRef(null)
  const previousIndexPageVisible = usePrevious(currentPageIndex)

  let observer

  const onResizeObserve = ([entry]) => {
    const innerWidth = entry.contentRect.width
    onResizeInner(innerWidth)
  }

  useEffect(() => {
    observer = new ResizeObserver(onResizeObserve)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    carouselInner.current && observer.observe(carouselInner.current)
  }, [carouselInner])

  useEffect(() => {
    if (currentPageIndex !== previousIndexPageVisible) {
      scrollToPage(currentPageIndex)
    }
  }, [currentPageIndex, previousIndexPageVisible])

  const handleInnerScroll = scrollStop(target => {
    if (isTouched) return null

    const { scrollLeft, clientWidth } = target

    const rangePageScrollLeft = getRangePageScrollLeft(
      clientWidth,
      numberOfPages,
      itemMarginBetween,
      getElementPadding(target),
    )

    const closest = getClosest(rangePageScrollLeft, scrollLeft)
    const indexClosest = rangePageScrollLeft.indexOf(closest)

    if (indexClosest !== currentPageIndex) return goToPage(indexClosest)
    // if the user doesn't scroll enough to change page
    // we need to scroll back to the fake snap page
    if (closest !== scrollLeft) {
      return target.scrollTo({ top: 0, left: closest, behavior: 'smooth' })
    }
  })

  const scrollToPage = indexPageToScroll => {
    const target = carouselInner.current

    if (!target) return null

    const { scrollLeft, clientWidth } = target

    const rangePageScrollLeft = getRangePageScrollLeft(
      clientWidth,
      numberOfPages,
      itemMarginBetween,
      getElementPadding(target),
    )

    const closest = rangePageScrollLeft[indexPageToScroll]

    if (closest !== scrollLeft) {
      target.scrollTo({ top: 0, left: closest, behavior: 'smooth' })
    }
  }

  const handlePageClick = index => e => {
    if (index === currentPageIndex) return

    e.preventDefault()
    scrollToPage(index)
    document.activeElement.blur()
  }

  return (
    <div
      ref={carouselInner}
      onScroll={handleInnerScroll}
      onTouchStart={() => setTouchState(true)}
      onTouchEnd={() => setTouchState(false)}
      className="k-Carousel__inner"
    >
      {[...Array(numberOfPages).keys()].map(index => {
        const isActivePage = currentPageIndex === index
        const hasPageBeenViewed = viewedPages.has(index)

        return (
          <div
            key={index}
            onClick={handlePageClick(index)}
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
              exportVisibilityProps={exportVisibilityProps}
              hasPageBeenViewed={hasPageBeenViewed}
              isActivePage={isActivePage}
              pageItems={getDataForPage(items, index, numberOfItemsPerPage)}
              numberOfItemsPerPage={numberOfItemsPerPage}
            />
          </div>
        )
      })}
    </div>
  )
}
