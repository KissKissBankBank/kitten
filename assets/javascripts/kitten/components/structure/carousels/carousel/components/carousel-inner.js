import React, { useEffect, useRef } from 'react'
import ResizeObserver from 'resize-observer-polyfill'
import { domElementHelper } from '../../../../../helpers/dom/element-helper'
import { CarouselPage } from './carousel-page'
import classNames from 'classnames'
import { usePrevious } from '../../../../../helpers/hooks/use-previous'

if (domElementHelper.canUseDom()) {
  require('smoothscroll-polyfill').polyfill()
}

let isTouched = false

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
  Array(numberOfPages)
    .fill(0)
    .map(
      (el, page) =>
        page * (targetClientWidth + itemMarginBetween - containerPadding),
    )

export const CarouselInner = ({
  currentPageIndex,
  exportVisibilityProps,
  goToPage,
  itemMarginBetween,
  items,
  numberOfItemsPerPage,
  numberOfPages,
  onResizeInner,
  pagesClassName,
  viewedPages,
  pageClickText,
}) => {
  const carouselInner = useRef(null)
  const previousIndexPageVisible = usePrevious(currentPageIndex)

  let resizeObserver

  const onResizeObserve = ([entry]) => {
    const innerWidth = entry.contentRect.width
    onResizeInner(innerWidth)
  }

  useEffect(() => {
    resizeObserver = new ResizeObserver(onResizeObserve)

    return () => resizeObserver.disconnect()
  }, [])

  useEffect(() => {
    carouselInner.current && resizeObserver.observe(carouselInner.current)
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

  const handleKeyDown = e => {
    if (e.key === 'ArrowRight') {
      goToPage(currentPageIndex + 1)
    } else if (e.key === 'ArrowLeft') {
      goToPage(currentPageIndex - 1)
    }
  }

  return (
    <div
      ref={carouselInner}
      onScroll={handleInnerScroll}
      onTouchStart={() => (isTouched = true)}
      onTouchEnd={() => (isTouched = false)}
      onKeyDown={handleKeyDown}
      className="k-Carousel__inner"
    >
      {Array(numberOfPages)
        .fill(0)
        .map((el, index) => {
          const isActivePage = currentPageIndex === index
          const hasPageBeenViewed = viewedPages.has(index)

          return (
            <div
              key={`inner_${index}`}
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
                goToCurrentPage={() => goToPage(index)}
              />
              {!isActivePage && (
                <button
                  type="button"
                  onClick={handlePageClick(index)}
                  className="k-u-reset-button k-Carousel__inner__button"
                  aria-label={pageClickText(index + 1)}
                />
              )}
            </div>
          )
        })}
    </div>
  )
}
