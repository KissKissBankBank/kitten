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

const getDataForPage = (data, indexPage, numColumns) => {
  const startIndex = indexPage * numColumns

  return data.slice(startIndex, startIndex + numColumns)
}

const getElementPadding = element =>
  parseInt(domElementHelper.getComputedStyle(element, 'padding-left')) +
  parseInt(domElementHelper.getComputedStyle(element, 'padding-right'))

const getRangePageScrollLeft = (
  targetClientWidth,
  numPages,
  itemMarginBetween,
  containerPadding,
) =>
  [...Array(numPages).keys()].map(
    page => page * (targetClientWidth + itemMarginBetween - containerPadding),
  )

export const CarouselInner = ({
  data,
  exportVisibilityProps,
  goToPage,
  indexPageVisible,
  itemMarginBetween,
  legacyMode,
  numColumns,
  numPages,
  onResizeInner,
  pagesClassName,
  renderItem,
  viewedPages,
}) => {
  const [isTouched, setTouchState] = useState(false)
  const carouselInner = useRef(null)
  const previousIndexPageVisible = usePrevious(indexPageVisible)

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
    if (indexPageVisible !== previousIndexPageVisible) {
      scrollToPage(indexPageVisible)
    }
  }, [indexPageVisible, previousIndexPageVisible])

  const handleInnerScroll = scrollStop(target => {
    if (isTouched) return null

    const { scrollLeft, clientWidth } = target

    const rangePageScrollLeft = getRangePageScrollLeft(
      clientWidth,
      numPages,
      itemMarginBetween,
      getElementPadding(target),
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

  const scrollToPage = indexPageToScroll => {
    const target = carouselInner.current
    const { scrollLeft, clientWidth } = target

    const rangePageScrollLeft = getRangePageScrollLeft(
      clientWidth,
      numPages,
      itemMarginBetween,
      getElementPadding(target),
    )

    const closest = rangePageScrollLeft[indexPageToScroll]

    if (closest !== scrollLeft) {
      target.scrollTo({ top: 0, left: closest, behavior: 'smooth' })
    }
  }

  const handlePageClick = index => e => {
    if (index === indexPageVisible) return

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
      {[...Array(numPages).keys()].map(index => {
        const isActivePage = indexPageVisible === index
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
              data={legacyMode ? getDataForPage(data, index, numColumns) : null}
              exportVisibilityProps={exportVisibilityProps}
              hasPageBeenViewed={hasPageBeenViewed}
              isActivePage={isActivePage}
              legacyMode={legacyMode}
              numColumns={numColumns}
              renderItem={
                legacyMode
                  ? renderItem
                  : getDataForPage(renderItem, index, numColumns)
              }
            />
          </div>
        )
      })}
    </div>
  )
}
