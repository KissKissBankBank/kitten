import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import {
  CONTAINER_PADDING,
  CONTAINER_PADDING_THIN,
} from '../../../../constants/grid-config'
import { Button } from '../../../action/button'
import { ArrowIcon } from '../../../graphics/icons/arrow-icon'
import { pxToRem } from '../../../../helpers/utils/typography'

import { CarouselInner } from './components/carousel-inner'
import {
  StyledCarouselContainer,
  StyledCarouselNavigation,
  OUTLINE_PLUS_OFFSET,
} from './styles'

export const getNumberOfItemsPerPageForWidth = (
  width,
  itemMinWidth,
  itemMarginBetween,
  itemsPerPage,
) => {
  if (!!itemsPerPage && itemMinWidth === 0) return itemsPerPage

  if (width === 0 || itemMinWidth === 0) return 0

  const remainingWidthWithOneCard = width - itemMinWidth
  const itemWidthAndMargin = itemMinWidth + itemMarginBetween

  const numberOfItemsPerPage =
    Math.floor(remainingWidthWithOneCard / itemWidthAndMargin) + 1

  return numberOfItemsPerPage
}

export const getNumberOfPagesForColumnsAndDataLength = (
  dataLength,
  numberOfItemsPerPage,
) => {
  if (dataLength === 0 || numberOfItemsPerPage === 0) return 0

  const numberOfPages = Math.ceil(dataLength / numberOfItemsPerPage)

  return numberOfPages
}

export const checkPage = (numberOfPages, newPage) => {
  if (numberOfPages < 1) return 0
  if (newPage < 0) return 0
  if (newPage >= numberOfPages) return numberOfPages - 1

  return newPage
}

export const checkPageLoop = (numberOfPages, newPage) => {
  if (numberOfPages < 1) return 0
  if (newPage < 0) return numberOfPages - 1
  if (newPage >= numberOfPages) return 0

  return newPage
}

const getMarginBetweenAccordingToViewport = (
  baseItemMarginBetween,
  viewportIsXSOrLess,
  viewportIsMOrLess,
) => {
  if (viewportIsXSOrLess)
    return CONTAINER_PADDING_THIN / 2 - OUTLINE_PLUS_OFFSET * 2
  if (viewportIsMOrLess) return CONTAINER_PADDING / 2 - OUTLINE_PLUS_OFFSET * 2

  return baseItemMarginBetween - OUTLINE_PLUS_OFFSET * 2
}

export const CarouselNext = ({
  baseItemMarginBetween,
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
  itemsPerPage,
  navigationPropsGetter,
}) => {
  const [currentPageIndex, setCurrentPageIndex] = useState(0)
  const [numberOfItemsPerPage, setNumberOfItemsPerPage] = useState(
    itemsPerPage > 0 ? itemsPerPage : 3,
  )
  const [numberOfPages, setNumberOfPages] = useState(
    getNumberOfPagesForColumnsAndDataLength(
      React.Children.count(children),
      itemsPerPage > 0 ? itemsPerPage : 3,
    ),
  )
  const [viewedPages, setViewedPages] = useState(new Set())

  if (React.Children.count(children) === 0) return null

  useEffect(() => {
    setViewedPages(current => {
      current.add(0)
      return current
    })
  }, [])

  const onResizeInner = innerWidth => {
    const itemMarginBetween = getMarginBetweenAccordingToViewport(
      baseItemMarginBetween,
      viewportIsXSOrLess,
      viewportIsMOrLess,
    )

    const numberOfItemsPerPage = getNumberOfItemsPerPageForWidth(
      innerWidth,
      itemMinWidth,
      itemMarginBetween,
      itemsPerPage,
    )

    const numberOfPages = getNumberOfPagesForColumnsAndDataLength(
      React.Children.count(children),
      numberOfItemsPerPage,
    )

    const newCurrentPageIndex =
      currentPageIndex > numberOfPages - 1
        ? numberOfPages - 1
        : currentPageIndex

    setNumberOfItemsPerPage(numberOfItemsPerPage)
    setNumberOfPages(numberOfPages)
    setCurrentPageIndex(newCurrentPageIndex)
  }

  const goNextPage = () => {
    const newPage = loop
      ? checkPageLoop(numberOfPages, currentPageIndex + 1)
      : checkPage(numberOfPages, currentPageIndex + 1)

    setViewedPages(current => {
      current.add(newPage)
      return current
    })
    setCurrentPageIndex(newPage)
  }

  const goPrevPage = () => {
    const newPage = loop
      ? checkPageLoop(numberOfPages, currentPageIndex - 1)
      : checkPage(numberOfPages, currentPageIndex - 1)

    setViewedPages(current => {
      current.add(newPage)
      return current
    })
    setCurrentPageIndex(newPage)
  }

  const goToPage = indexPageToGo => {
    const newPage = loop
      ? checkPageLoop(numberOfPages, indexPageToGo)
      : checkPage(numberOfPages, indexPageToGo)

    setViewedPages(current => {
      current.add(newPage)
      return current
    })
    setCurrentPageIndex(newPage)
  }

  useEffect(() => {
    navigationPropsGetter({
      currentPageIndex,
      numberOfPages,
      goPrevPage,
      goNextPage,
      isFirstPage: currentPageIndex === 0,
      isLastPage: currentPageIndex === numberOfPages - 1,
    })
  }, [currentPageIndex, numberOfPages])

  return (
    <StyledCarouselContainer
      style={{
        ...style,
        '--carousel-shadowSize': pxToRem(shadowSize) || null,
        '--carousel-baseItemMarginBetween': pxToRem(baseItemMarginBetween),
        '--carousel-numberOfItemsPerPage': numberOfItemsPerPage,
        '--carousel-numberOfPages': numberOfPages,
      }}
      className={classNames('k-CarouselNext', className, {
        'k-CarouselNext--showOtherPages': showOtherPages,
      })}
    >
      <CarouselInner
        currentPageIndex={currentPageIndex}
        exportVisibilityProps={exportVisibilityProps}
        goToPage={goToPage}
        itemMarginBetween={getMarginBetweenAccordingToViewport(
          baseItemMarginBetween,
          viewportIsXSOrLess,
          viewportIsMOrLess,
        )}
        items={children}
        numberOfItemsPerPage={numberOfItemsPerPage}
        numberOfPages={numberOfPages}
        onResizeInner={onResizeInner}
        pagesClassName={pagesClassName}
        viewedPages={viewedPages}
        pageClickText={pageClickText}
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
  prevButtonText: 'Previous items',
  nextButtonText: 'Next items',
  firstButtonText: 'First items',
  lastButtonText: 'Last items',
}

CarouselNext.Navigation.propTypes = {
  loop: PropTypes.bool,
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
  exportVisibilityProps: false,
  shadowSize: 0,

  navigationPropsGetter: () => {},
}

CarouselNext.propTypes = {
  itemMinWidth: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number,
  baseItemMarginBetween: PropTypes.number.isRequired,
  children: PropTypes.node,
  viewportIsMOrLess: PropTypes.bool.isRequired,
  viewportIsXSOrLess: PropTypes.bool.isRequired,
  showOtherPages: PropTypes.bool,
  pagesClassName: PropTypes.string,
  pageClickText: PropTypes.func,
  loop: PropTypes.bool,
  exportVisibilityProps: PropTypes.bool,
  shadowSize: PropTypes.number,

  navigationPropsGetter: PropTypes.func,
}
