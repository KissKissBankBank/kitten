import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import ResizeObserver from 'resize-observer-polyfill'
import { pxToRem } from '../../helpers/utils/typography'

if (typeof window !== 'undefined') {
  require('smoothscroll-polyfill').polyfill()
}

import { createRangeFromZeroTo } from '../../helpers/utils/range'
import { cssSupports } from '../../helpers/utils/feature-detection'
import { CarouselPage } from '../../components/carousel/carousel-page'

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
) =>
  createRangeFromZeroTo(numPages).map(
    numPage => numPage * (targetClientWidth + itemMarginBetween),
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

  componentWillReceiveProps(nextProps) {
    if (nextProps.indexPageVisible !== this.props.indexPageVisible) {
      this.scrollToPage(nextProps.indexPageVisible)
    }
  }

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
      data,
      itemMinWidth,
      renderItem,
      indexPageVisible,
      numColumns,
      numPages,
      itemMarginBetween,
    } = this.props

    const rangePage = createRangeFromZeroTo(numPages)

    return (
      <StyledCarouselInner
        ref={this.carouselInner}
        onScroll={this.handleInnerScroll}
        onTouchStart={this.handleTouchStart}
        onTouchEnd={this.handleTouchEnd}
      >
        {rangePage.map(index => (
          <StyledCarouselPageContainer
            key={index}
            index={index}
            indexPageVisible={indexPageVisible}
            itemMarginBetween={itemMarginBetween}
            onClick={this.handlePageClick(index)}
          >
            <CarouselPage
              data={getDataForPage(data, index, numColumns)}
              numColumns={numColumns}
              itemMinWidth={itemMinWidth}
              itemMarginBetween={itemMarginBetween}
              renderItem={renderItem}
            />
          </StyledCarouselPageContainer>
        ))}
      </StyledCarouselInner>
    )
  }
}

const StyledCarouselInner = styled.div`
  display: flex;
  flex-direct: row;
  overflow-x: scroll;
  scroll-behavior: smooth;
  /* hide scrollbar on IE and Edge */
  -ms-over-flow-style: none;
  /* mandatory to combine scroll with this property on iOS */
  -webkit-overflow-scrolling: touch;
  ${// snap only for browser that support snap without prefixes
  supportScrollSnap
    ? css`
        scroll-snap-type: mandatory;
      `
    : css`
        scroll-snap-type: none;
      `}
  /* Fix bug IE11 ResizeObserver, to trigger a first resize */
  min-height: 1;

  /* hide scrollbar on Chrome and Safari */
  &::-webkit-scrollbar {
    display: none;
  }
`

const StyledCarouselPageContainer = styled.div`
  width: 100%;
  flex-shrink: 0;
  scroll-snap-align: ${supportScrollSnap ? 'center' : 'none'};
  }

  ${({ index, indexPageVisible }) =>
    index !== indexPageVisible &&
    css`
      cursor: pointer;
    `}

  ${({ index, itemMarginBetween }) =>
    index &&
    css`
      margin-left: ${pxToRem(itemMarginBetween)};
    `}
`
