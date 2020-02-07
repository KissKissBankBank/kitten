import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { pxToRem } from '../../../helpers/utils/typography'
import { ScreenConfig } from '../../../constants/screen-config'
import { createRangeFromZeroTo } from '../../../helpers/utils/range'
import { withMediaQueries } from '../../../hoc/media-queries'
import {
  CONTAINER_PADDING,
  CONTAINER_PADDING_MOBILE,
  GUTTER,
} from '../../../constants/grid-config'
import COLORS from '../../../constants/colors-config'
import { Grid, GridCol } from '../../../components/grid/grid'
import { ButtonIcon } from '../../../components/buttons/button-icon'
import { ArrowIcon } from '../../../components/icons/arrow-icon'
import { CarouselInner } from './components/carousel-inner'

export const getNumColumnsForWidth = (
  width,
  itemMinWidth,
  itemMarginBetween,
) => {
  if (width === 0 || itemMinWidth === 0) return 0

  const remainingWidthWithOneCard = width - itemMinWidth
  const itemWidthAndMargin = itemMinWidth + itemMarginBetween

  const numColumns =
    Math.floor(remainingWidthWithOneCard / itemWidthAndMargin) + 1

  return numColumns
}

export const getNumPagesForColumnsAndDataLength = (dataLength, numColumns) => {
  if (dataLength === 0 || numColumns === 0) return 0

  const numPages = Math.ceil(dataLength / numColumns)

  return numPages
}

export const checkPage = (numPages, newPage) => {
  if (numPages < 1) return 0
  if (newPage < 0) return 0
  if (newPage >= numPages) return numPages - 1

  return newPage
}

const getMarginBetweenAccordingToViewport = (
  baseItemMarginBetween,
  viewportIsXSOrLess,
  viewportIsMOrLess,
) => {
  if (viewportIsXSOrLess) return CONTAINER_PADDING_MOBILE / 2
  if (viewportIsMOrLess) return CONTAINER_PADDING / 2

  return baseItemMarginBetween
}

const propTypesPositions = PropTypes.oneOf(['top', 'right', 'bottom', 'left'])

class CarouselBase extends Component {
  static defaultProps = {
    hidePaginationOnMobile: false,
    paginationPosition: {
      default: 'right',
      fromM: 'bottom',
    },
  }

  static propTypes = {
    itemMinWidth: PropTypes.number.isRequired,
    baseItemMarginBetween: PropTypes.number.isRequired,
    children: PropTypes.node.isRequired,
    viewportIsMOrLess: PropTypes.bool.isRequired,
    viewportIsXSOrLess: PropTypes.bool.isRequired,
    hidePaginationOnMobile: PropTypes.bool,
    paginationPosition: PropTypes.shape({
      default: propTypesPositions,
      fromXxs: propTypesPositions,
      fromXs: propTypesPositions,
      fromS: propTypesPositions,
      fromM: propTypesPositions,
      fromL: propTypesPositions,
      fromXl: propTypesPositions,
    }),
  }

  state = {
    indexPageVisible: 0,
    numColumns: 3,
    numPages: getNumPagesForColumnsAndDataLength(
      React.Children.count(this.props.children),
      3,
    ),
  }

  onResizeInner = widthInner => {
    const {
      children,
      itemMinWidth,
      baseItemMarginBetween,
      viewportIsXSOrLess,
      viewportIsMOrLess,
    } = this.props

    const itemMarginBetween = getMarginBetweenAccordingToViewport(
      baseItemMarginBetween,
      viewportIsXSOrLess,
      viewportIsMOrLess,
    )

    const numColumns = getNumColumnsForWidth(
      widthInner,
      itemMinWidth,
      itemMarginBetween,
    )

    const numPages = getNumPagesForColumnsAndDataLength(
      React.Children.count(children),
      numColumns,
    )

    if (
      this.state.numColumns !== numColumns ||
      this.state.numPages !== numPages
    ) {
      const indexPageVisible =
        this.state.indexPageVisible > numPages - 1
          ? numPages - 1
          : this.state.indexPageVisible

      this.setState({ numColumns, numPages, indexPageVisible })
    }
  }

  goNextPage = () => {
    const { numPages, indexPageVisible } = this.state
    const newPage = checkPage(numPages, indexPageVisible + 1)
    this.setState({ indexPageVisible: newPage })
  }

  goPrevPage = () => {
    const { numPages, indexPageVisible } = this.state
    const newPage = checkPage(numPages, indexPageVisible - 1)
    this.setState({ indexPageVisible: newPage })
  }

  goToPage = indexPageToGo => {
    const { numPages } = this.state
    const newPage = checkPage(numPages, indexPageToGo)
    this.setState({ indexPageVisible: newPage })
  }

  renderCarouselInner = () => {
    const {
      itemMinWidth,
      children,
      baseItemMarginBetween,
      viewportIsXSOrLess,
      viewportIsMOrLess,
    } = this.props
    const { indexPageVisible, numColumns, numPages } = this.state
    const itemMarginBetween = getMarginBetweenAccordingToViewport(
      baseItemMarginBetween,
      viewportIsXSOrLess,
      viewportIsMOrLess,
    )

    return (
      <CarouselInner
        itemMinWidth={itemMinWidth}
        renderItem={children}
        indexPageVisible={indexPageVisible}
        numColumns={numColumns}
        numPages={numPages}
        itemMarginBetween={itemMarginBetween}
        onResizeInner={this.onResizeInner}
        goToPage={this.goToPage}
      />
    )
  }

  renderPagination = () => {
    const {
      baseItemMarginBetween,
      viewportIsMOrLess,
      viewportIsXSOrLess,
      hidePaginationOnMobile,
      paginationPosition,
    } = this.props
    const { indexPageVisible, numPages } = this.state
    const itemMarginBetween = getMarginBetweenAccordingToViewport(
      baseItemMarginBetween,
      viewportIsXSOrLess,
      viewportIsMOrLess,
    )

    if (viewportIsXSOrLess && hidePaginationOnMobile) return
    if (numPages <= 1) return

    if (viewportIsXSOrLess) {
      const rangePage = createRangeFromZeroTo(numPages)

      return (
        <PageControl>
          {rangePage.map(index => (
            <PageDot
              index={index}
              key={index}
              visibleIndex={indexPageVisible}
            />
          ))}
          <PageControlButton prev onClick={this.goPrevPage} />
          <PageControlButton next onClick={this.goNextPage} />
        </PageControl>
      )
    }

    return (
      <CarouselPagination
        position={paginationPosition}
        itemMarginBetween={itemMarginBetween}
      >
        <ButtonIcon
          modifier="beryllium"
          onClick={this.goPrevPage}
          disabled={indexPageVisible < 1 || numPages < 1}
        >
          <ArrowIcon
            version="solid"
            className="k-ButtonIcon__svg"
            direction="left"
          />
        </ButtonIcon>

        <ButtonIcon
          modifier="beryllium"
          onClick={this.goNextPage}
          disabled={indexPageVisible >= numPages - 1}
        >
          <ArrowIcon
            version="solid"
            className="k-ButtonIcon__svg"
            direction="right"
          />
        </ButtonIcon>
      </CarouselPagination>
    )
  }

  render() {
    const { paginationPosition, children } = this.props

    if (React.Children.count(children) === 0) return null

    return (
      <FlexContainer paginationPosition={paginationPosition}>
        {this.renderCarouselInner()}
        {this.renderPagination()}
      </FlexContainer>
    )
  }
}

const flexContainerdirectionStyle = positionType => ({
  paginationPosition,
}) => {
  if (!paginationPosition[positionType]) return

  switch (paginationPosition[positionType]) {
    case 'top':
      return css`
        flex-direction: column-reverse;
      `
    case 'bottom':
      return css`
        flex-direction: column;
      `
    case 'left':
      return css`
        flex-direction: row-reverse;
      `
    case 'right':
      return css`
        flex-direction: row;
      `
  }
}

const FlexContainer = styled.div`
  display: flex;
  ${flexContainerdirectionStyle('default')}

  @media (min-width: ${ScreenConfig.XXS.min}px) {
    ${flexContainerdirectionStyle('fromXxs')}
  }

  @media (min-width: ${ScreenConfig.XS.min}px) {
    ${flexContainerdirectionStyle('fromXs')}
  }

  @media (min-width: ${ScreenConfig.S.min}px) {
    ${flexContainerdirectionStyle('fromS')}
  }

  @media (min-width: ${ScreenConfig.M.min}px) {
    ${flexContainerdirectionStyle('fromM')}
  }

  @media (min-width: ${ScreenConfig.L.min}px) {
    ${flexContainerdirectionStyle('fromL')}
  }

  @media (min-width: ${ScreenConfig.XL.min}px) {
    ${flexContainerdirectionStyle('fromXl')}
  }
`

const paginationPositionStyle = positionType => ({ position }) => {
  if (!position[positionType]) return

  switch (position[positionType]) {
    case 'top':
      return css`
        flex-direction: row;
        margin: 0; /* Reset css from all previous media-queries */
        margin-bottom: ${pxToRem(GUTTER)});

        & > button:first-child {
          margin-bottom: pxToRem(2);
        }
      `
    case 'bottom':
      return css`
        flex-direction: row;
        margin: 0; /* Reset css from all previous media-queries */
        margin-top: ${pxToRem(GUTTER)};

        & > button:first-child {
          margin-right: ${pxToRem(2)};
        }
      `
    case 'left':
      return css`
        flex-direction: column;
        align-self: flex-start;
        margin: 0; /* Reset css from all previous media-queries */
        margin-right: ${pxToRem(GUTTER)};

        & > button:first-child {
          margin-bottom: ${pxToRem(2)};
        }
      `
    case 'right':
      return css`
        flex-direction: column-reverse;
        align-self: flex-start;
        margin: 0; /* Reset css from all previous media-queries */
        margin-left: ${pxToRem(GUTTER)};

        & > button:last-child {
          margin-bottom: ${pxToRem(2)};
        }
      `
  }
}

const CarouselPagination = styled.div`
  display: flex;
  align-items: flex-start;
  ${paginationPositionStyle('default')}

  @media (min-width: ${ScreenConfig.XXS.min}px) {
    ${paginationPositionStyle('fromXxs')}
  }

  @media (min-width: ${ScreenConfig.XS.min}px) {
    ${paginationPositionStyle('fromXs')}
  }

  @media (min-width: ${ScreenConfig.S.min}px) {
    ${paginationPositionStyle('fromS')}
  }

  @media (min-width: ${ScreenConfig.M.min}px) {
    ${paginationPositionStyle('fromM')}
  }

  @media (min-width: ${ScreenConfig.L.min}px) {
    ${paginationPositionStyle('fromL')}
  }

  @media (min-width: ${ScreenConfig.XL.min}px) {
    ${paginationPositionStyle('fromXl')}
  }
`

const PageControl = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  padding-top: ${pxToRem(CONTAINER_PADDING_MOBILE / 2)};
  padding-bottom: ${pxToRem(CONTAINER_PADDING_MOBILE / 2)};
`

const PageControlButton = styled.div`
  position: absolute;
  top: ${pxToRem(CONTAINER_PADDING_MOBILE / 4)};
  bottom: ${pxToRem(CONTAINER_PADDING_MOBILE / 4)};
  -webkit-tap-highlight-color: transparent;

  ${({ prev }) =>
    prev &&
    css`
      left: ${pxToRem(CONTAINER_PADDING_MOBILE)};
      right: 50%;
    `}

  ${({ next }) =>
    next &&
    css`
      right: ${pxToRem(CONTAINER_PADDING_MOBILE)};
      left: 50%;
    `}
`

const PageDot = styled.div`
  width: ${pxToRem(8)};
  height: ${pxToRem(8)};
  margin-left: ${pxToRem(4)};
  margin-right: ${pxToRem(4)};
  border-radius: ${pxToRem(4)};
  background-color: ${COLORS.font1};

  ${({ visibleIndex, index }) =>
    visibleIndex === index &&
    css`
      background-color: ${COLORS.primary2};
    `}}
`

export const Carousel = withMediaQueries({
  viewportIsXSOrLess: true,
  viewportIsMOrLess: true,
})(CarouselBase)
