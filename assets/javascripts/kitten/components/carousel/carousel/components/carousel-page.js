import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import { createRangeFromZeroTo } from '../../../../helpers/utils/range'
import classNames from 'classnames'

const StyledPage = styled.div`
  display: flex;
  flex-direction: row;
`

const StyledItem = styled.div`
  flex-grow: 1;
  flex-shrink: 1;

  ${({ itemMinWidth }) => css`
    min-width: ${itemMinWidth}px;
    flex-basis: ${itemMinWidth}px;
  `}

  ${({ index, itemMarginBetween }) =>
    index &&
    css`
      margin-left: ${itemMarginBetween}px;
    `}
`

export class CarouselPage extends Component {
  render() {
    const {
      legacyMode,
      data,
      numColumns,
      itemMinWidth,
      itemMarginBetween,
      renderItem,
      isActivePage,
      hasPageBeenViewed,
      exportVisibilityProps,
    } = this.props

    const rangeCard = createRangeFromZeroTo(numColumns)

    return (
      <StyledPage
        className={classNames('k-Carousel__page', {
          'k-Carousel__page--isActivePage': isActivePage,
          'k-Carousel__page--hasBeenViewed': hasPageBeenViewed,
        })}
      >
        {rangeCard.map(index => (
          <StyledItem
            key={index}
            index={index}
            itemMinWidth={itemMinWidth}
            itemMarginBetween={itemMarginBetween}
            className="k-Carousel__page__item"
          >
            {legacyMode
              ? data[index] && renderItem({ item: data[index] })
              : exportVisibilityProps
              ? renderItem[index] &&
                React.cloneElement(renderItem[index], {
                  hasPageBeenViewed,
                })
              : renderItem[index]}
          </StyledItem>
        ))}
      </StyledPage>
    )
  }
}
