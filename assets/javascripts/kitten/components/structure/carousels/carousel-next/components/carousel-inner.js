import classNames from 'classnames'
import React, { useEffect, useRef, useState } from 'react'
import ResizeObserver from 'resize-observer-polyfill'
import { map, range } from 'lodash'
import { domElementHelper } from '../../../../../helpers/dom/element-helper'
import { usePrevious } from '../../../../../helpers/hooks/use-previous'
import { CarouselPage } from './carousel-page'

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

const getDataForPage = (data, indexPage, itemsPerPage) => {
  const startIndex = indexPage * itemsPerPage
  const indices = range(startIndex, startIndex + itemsPerPage)
  const total = data.length

  return map(indices, index => data[((index % total) + total) % total])
}

const getElementPadding = element =>
  parseInt(domElementHelper.getComputedStyle(element, 'padding-inline'))

export const FAKE_PAGES = 2

export const CarouselInner = ({
  currentPageIndex,
  exportVisibilityProps,
  goToPage,
  items,
  itemsPerPage,
  onResizeInner,
  pagesClassName,
  viewedPages,
  pageClickText,
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
      if (!cycle) return goToPage(indexClosest)

      if (indexClosest < FAKE_PAGES) {
        const newIndex = innerPagesCount - FAKE_PAGES - 1
        return scrollToPage(newIndex, () => goToPage(newIndex), 'auto')
      }
      if (indexClosest >= innerPagesCount - FAKE_PAGES) {
        const newIndex = FAKE_PAGES
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

    if (currentPageIndex < FAKE_PAGES) {
      const newIndex = innerPagesCount - FAKE_PAGES - 1
      scrollToPage(newIndex, () => goToPage(newIndex), 'auto')
    }
    if (currentPageIndex >= innerPagesCount - FAKE_PAGES) {
      const newIndex = FAKE_PAGES
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
    return index - FAKE_PAGES
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
                pageItems={getDataForPage(items, dataIndex, itemsPerPage)}
                itemsPerPage={itemsPerPage}
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
