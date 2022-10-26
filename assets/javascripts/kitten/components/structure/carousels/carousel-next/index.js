import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import {
  CONTAINER_PADDING,
  CONTAINER_PADDING_THIN,
} from '../../../../constants/grid-config'
import { pxToRem } from '../../../../helpers/utils/typography'
import { Button } from '../../../action/button'
import { ArrowIcon } from '../../../graphics/icons/arrow-icon'

import { CarouselInner } from './components/carousel-inner'
import {
  OUTLINE_PLUS_OFFSET,
  StyledCarouselContainer,
  StyledCarouselNavigation,
} from './styles'

export const getItemsPerPageCountForWidth = (
  width,
  itemMinWidth,
  itemGap,
  itemsPerPage,
) => {
  if (!!itemsPerPage && itemMinWidth === 0) return itemsPerPage

  if (width === 0 || itemMinWidth === 0) return 0

  const remainingWidthWithOneCard = width - itemMinWidth
  const itemWidthAndMargin = itemMinWidth + itemGap

  const newItemsPerPage =
    Math.floor(remainingWidthWithOneCard / itemWidthAndMargin) + 1

  return newItemsPerPage
}

export const getNumberOfPagesForColumnsAndDataLength = (
  dataLength,
  itemsPerPage,
) => {
  if (dataLength === 0 || itemsPerPage === 0) return 0

  const pagesCount = Math.ceil(dataLength / itemsPerPage)

  return pagesCount
}

export const checkPage = (pagesCount, newPage) => {
  if (pagesCount < 1) return 0
  if (newPage < 0) return 0
  if (newPage >= pagesCount) return pagesCount - 1

  return newPage
}

export const checkPageLoop = (pagesCount, newPage) => {
  if (pagesCount < 1) return 0
  if (newPage < 0) return pagesCount - 1
  if (newPage >= pagesCount) return 0

  return newPage
}

const getGapAccordingToViewport = (
  baseGap,
  viewportIsXSOrLess,
  viewportIsMOrLess,
) => {
  if (viewportIsXSOrLess)
    return CONTAINER_PADDING_THIN / 2 - OUTLINE_PLUS_OFFSET * 2
  if (viewportIsMOrLess) return CONTAINER_PADDING / 2 - OUTLINE_PLUS_OFFSET * 2

  return baseGap - OUTLINE_PLUS_OFFSET * 2
}

export const CarouselNext = ({
  baseGap,
  children,
  className,
  showOtherPages,
  itemMinWidth,
  style,
  shadowSize,
  viewportIsXSOrLess,
  viewportIsMOrLess,
  pagesClassName,
  exportVisibilityProps,
  pageClickText,
  loop,
  cycle,
  itemsPerPage: itemsPerPageProp,
  navigationPropsGetter,
}) => {
  const [currentPageIndex, setCurrentPageIndex] = useState(cycle ? 2 : 0)
  const [itemsPerPage, setItemsPerPageCount] = useState(
    itemsPerPageProp > 0 ? itemsPerPageProp : 3,
  )
  const [pagesCount, setPagesCount] = useState(
    getNumberOfPagesForColumnsAndDataLength(
      React.Children.count(children),
      itemsPerPageProp > 0 ? itemsPerPageProp : 3,
    ),
  )
  const [innerPagesCount, setInnerPagesCount] = useState(0)
  const [viewedPages, setViewedPages] = useState(new Set())

  if (React.Children.count(children) === 0) return null

  useEffect(() => {
    setViewedPages(current => {
      current.add(0)
      return current
    })
  }, [])

  useEffect(() => {
    const newInnerPagesCount = cycle ? pagesCount + 4 : pagesCount
    setInnerPagesCount(newInnerPagesCount)

    const newCurrentPageIndex =
      currentPageIndex > newInnerPagesCount - 1
        ? newInnerPagesCount - 1
        : currentPageIndex

    setCurrentPageIndex(newCurrentPageIndex)
  }, [pagesCount])

  const onResizeInner = innerWidth => {
    const itemGap = getGapAccordingToViewport(
      baseGap,
      viewportIsXSOrLess,
      viewportIsMOrLess,
    )

    const newItemsPerPage = getItemsPerPageCountForWidth(
      innerWidth,
      itemMinWidth,
      itemGap,
      itemsPerPage,
    )

    const pagesCount = getNumberOfPagesForColumnsAndDataLength(
      React.Children.count(children),
      newItemsPerPage,
    )

    console.log(newItemsPerPage, pagesCount)

    setItemsPerPageCount(Math.max(newItemsPerPage, 1))
    setPagesCount(pagesCount)
  }

  const goNextPage = () => {
    const newPage = loop
      ? checkPageLoop(innerPagesCount, currentPageIndex + 1)
      : checkPage(innerPagesCount, currentPageIndex + 1)

    viewedPagesSetter(newPage)
    setCurrentPageIndex(newPage)
  }

  const goPrevPage = () => {
    const newPage = loop
      ? checkPageLoop(innerPagesCount, currentPageIndex - 1)
      : checkPage(innerPagesCount, currentPageIndex - 1)

    viewedPagesSetter(newPage)
    setCurrentPageIndex(newPage)
  }

  const goToPage = indexPageToGo => {
    const newPage = loop
      ? checkPageLoop(innerPagesCount, indexPageToGo)
      : checkPage(innerPagesCount, indexPageToGo)

    viewedPagesSetter(newPage)
    setCurrentPageIndex(newPage)
  }

  const viewedPagesSetter = newPage =>
    setViewedPages(current => {
      current.add(newPage)
      if (cycle) {
        newPage > 0 && current.add(newPage - 1)
        newPage < innerPagesCount - 1 && current.add(newPage + 1)
      }
      return current
    })

  useEffect(() => {
    navigationPropsGetter({
      currentPageIndex,
      pagesCount,
      goPrevPage,
      goNextPage,
      isFirstPage: currentPageIndex === 0,
      isLastPage: currentPageIndex === innerPagesCount - 1,
    })
  }, [currentPageIndex, innerPagesCount])

  return (
    <StyledCarouselContainer
      style={{
        ...style,
        '--carousel-shadowSize': pxToRem(shadowSize) || null,
        '--carousel-gapBase': pxToRem(baseGap),
        '--carousel-itemsPerPage': itemsPerPage,
        '--carousel-pagesCount': innerPagesCount,
      }}
      className={classNames('k-CarouselNext', className, {
        'k-CarouselNext--showOtherPages': showOtherPages,
      })}
    >
      <CarouselInner
        currentPageIndex={currentPageIndex}
        exportVisibilityProps={exportVisibilityProps}
        goToPage={goToPage}
        items={children}
        itemsPerPage={itemsPerPage}
        pagesCount={pagesCount}
        innerPagesCount={innerPagesCount}
        onResizeInner={onResizeInner}
        pagesClassName={pagesClassName}
        viewedPages={viewedPages}
        pageClickText={pageClickText}
        cycle={cycle}
      />
    </StyledCarouselContainer>
  )
}

CarouselNext.Navigation = ({
  className,
  loop,
  goPrevPage,
  goNextPage,
  buttonProps,
  isFirstPage,
  isLastPage,
  lastButtonText,
  prevButtonText,
  firstButtonText,
  nextButtonText,
}) => {
  return (
    <StyledCarouselNavigation
      className={classNames('k-CarouselNext__navigation', className)}
    >
      <Button
        type="button"
        className="k-CarouselNext__navigation__button"
        onClick={goPrevPage}
        disabled={!loop && isFirstPage}
        fit="icon"
        {...buttonProps}
      >
        <span className="k-u-a11y-visuallyHidden">
          {loop && isFirstPage ? lastButtonText : prevButtonText}
        </span>
        <ArrowIcon direction="left" aria-hidden />
      </Button>

      <Button
        type="button"
        className="k-CarouselNext__navigation__button"
        onClick={goNextPage}
        disabled={!loop && isLastPage}
        fit="icon"
        {...buttonProps}
      >
        <span className="k-u-a11y-visuallyHidden">
          {loop && isLastPage ? firstButtonText : nextButtonText}
        </span>
        <ArrowIcon direction="right" aria-hidden />
      </Button>
    </StyledCarouselNavigation>
  )
}

CarouselNext.Navigation.defaultProps = {
  loop: false,
  cycle: false,
  prevButtonText: 'Previous items',
  nextButtonText: 'Next items',
  firstButtonText: 'First items',
  lastButtonText: 'Last items',
}

CarouselNext.Navigation.propTypes = {
  loop: PropTypes.bool,
  cycle: PropTypes.bool,
  prevButtonText: PropTypes.string,
  nextButtonText: PropTypes.string,
  firstButtonText: PropTypes.string,
  lastButtonText: PropTypes.string,
}

CarouselNext.defaultProps = {
  itemsPerPage: 0,
  showOtherPages: false,
  pagesClassName: null,
  pageClickText: page => {
    return `Page ${page}`
  },
  loop: false,
  cycle: false,
  exportVisibilityProps: false,
  shadowSize: 0,

  navigationPropsGetter: () => {},
}

CarouselNext.propTypes = {
  itemMinWidth: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number,
  baseGap: PropTypes.number.isRequired,
  children: PropTypes.node,
  viewportIsMOrLess: PropTypes.bool.isRequired,
  viewportIsXSOrLess: PropTypes.bool.isRequired,
  showOtherPages: PropTypes.bool,
  pagesClassName: PropTypes.string,
  pageClickText: PropTypes.func,
  loop: PropTypes.bool,
  cycle: PropTypes.bool,
  exportVisibilityProps: PropTypes.bool,
  shadowSize: PropTypes.number,

  navigationPropsGetter: PropTypes.func,
}
