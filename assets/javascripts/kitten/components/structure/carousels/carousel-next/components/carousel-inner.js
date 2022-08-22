import React, { useEffect, useRef, useState } from 'react'
import ResizeObserver from 'resize-observer-polyfill'
import { domElementHelper } from '../../../../../helpers/dom/element-helper'
import { CarouselPage } from './carousel-page'
import classNames from 'classnames'
import { usePrevious } from '../../../../../helpers/hooks/use-previous'

if (domElementHelper.canUseDom()) {
  require('smoothscroll-polyfill').polyfill()
}

let isTouched = false

/**
 * Native scrollTo with callback
 * https://stackoverflow.com/a/55686711
 * @param offset - offset to scroll to
 * @param callback - callback function
 */
function scrollTo(container, offset = 0, callback, behavior = 'smooth') {
  const onScroll = function () {
    if (
      (offset - 3).toFixed() < container.scrollLeft.toFixed() &&
      container.scrollLeft.toFixed() < (offset + 3).toFixed()
    ) {
      container.removeEventListener('scroll', onScroll)
      callback()
    }
  }

  container.addEventListener('scroll', onScroll)
  onScroll()
  container.scrollTo({
    top: 0,
    left: offset.toFixed(),
    behavior,
  })
}

// inspired by https://github.com/cferdinandi/scrollStop
const scrollStop = callback => {
  if (!callback) return

  let isScrolling
  let target

  return event => {
    clearTimeout(isScrolling)

    target = event.target

    isScrolling = setTimeout(() => callback(target), 66)
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
  parseInt(domElementHelper.getComputedStyle(element, 'padding-inline'))

export const CarouselInner = ({
  currentPageIndex,
  exportVisibilityProps,
  goToPage,
  items,
  numberOfItemsPerPage,
  onResizeInner,
  pagesClassName,
  viewedPages,
  pageClickText,
  pagesCount,
  innerPagesCount,
  cycle,
}) => {
  const carouselInner = useRef(null)
  const [firstScrolled, setFirstScrolled] = useState(false)
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
    // Scroll to the first element of the page
    if (!cycle) return
    if (firstScrolled) return
    if (!carouselInner.current) return
    if ([...carouselInner.current.childNodes].length === 0) return
    if (currentPageIndex === 0) return

    scrollToPage(currentPageIndex, () => {}, 'auto')
    setFirstScrolled(true)
  })

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

    const { scrollLeft, childNodes } = target

    const padding = getElementPadding(target)
    const rangePageScrollLeft = [...childNodes].map(
      page => page.offsetLeft - padding,
    )

    const closest = getClosest(rangePageScrollLeft, scrollLeft)
    const indexClosest = rangePageScrollLeft.indexOf(closest)

    if (indexClosest !== currentPageIndex) {
      if (indexClosest < 2) {
        const newIndex = pagesCount + 2 - indexClosest
        return scrollToPage(newIndex, () => goToPage(newIndex), 'auto')
      }
      if (indexClosest >= pagesCount + 2) {
        const newIndex = indexClosest - pagesCount
        return scrollToPage(newIndex, () => goToPage(newIndex), 'auto')
      }

      return goToPage(indexClosest)
    }
  })

  const scrollToPage = (
    indexPageToScroll,
    callback = handleAfterScroll,
    behavior = 'smooth',
  ) => {
    const target = carouselInner.current
    if (!target) return null

    const { scrollLeft, childNodes } = target
    if (childNodes.length === 0) return null

    const padding = getElementPadding(target)
    const closest = childNodes[indexPageToScroll]?.offsetLeft - padding

    if (closest !== scrollLeft) {
      scrollTo(target, closest, callback, behavior)
    }
  }

  const handleAfterScroll = () => {
    if (!cycle) return

    if (currentPageIndex < 2) {
      const newIndex = pagesCount + 2 - currentPageIndex
      scrollToPage(newIndex, () => goToPage(newIndex), 'auto')
    }
    if (currentPageIndex >= pagesCount + 2) {
      const newIndex = currentPageIndex - pagesCount
      scrollToPage(newIndex, () => goToPage(newIndex), 'auto')
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

  const getDataIndex = index => {
    if (index <= 1) return pagesCount - 2 + index
    if (index >= pagesCount + 2) return index - pagesCount - 2
    return index - 2
  }

  return (
    <div
      ref={carouselInner}
      onScroll={handleInnerScroll}
      onTouchStart={() => (isTouched = true)}
      onTouchEnd={() => (isTouched = false)}
      onKeyDown={handleKeyDown}
      className="k-CarouselNext__inner"
    >
      {Array(innerPagesCount)
        .fill(0)
        .map((el, index) => {
          const dataIndex = cycle ? getDataIndex(index) : index
          const isActivePage = currentPageIndex === index
          const hasPageBeenViewed = viewedPages.has(index)

          return (
            <div
              key={`inner_${index}`}
              className={classNames(
                'k-CarouselNext__inner__pageContainer',
                pagesClassName,
                {
                  'k-CarouselNext__inner__pageContainer--isActivePage': isActivePage,
                  'k-CarouselNext__inner__pageContainer--hasBeenViewed': hasPageBeenViewed,
                },
              )}
            >
              <CarouselPage
                exportVisibilityProps={exportVisibilityProps}
                hasPageBeenViewed={hasPageBeenViewed}
                isActivePage={isActivePage}
                pageItems={getDataForPage(
                  items,
                  dataIndex,
                  numberOfItemsPerPage,
                )}
                numberOfItemsPerPage={numberOfItemsPerPage}
                goToCurrentPage={() => goToPage(index)}
              />
              {!isActivePage && (
                <button
                  type="button"
                  onClick={handlePageClick(index)}
                  className="k-u-reset-button k-CarouselNext__inner__button"
                  aria-label={pageClickText(index + 1)}
                />
              )}
            </div>
          )
        })}
    </div>
  )
}
