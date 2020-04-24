import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import { createRangeFromZeroTo } from '../../../../helpers/utils/range'

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
      numColumns,
      itemMinWidth,
      itemMarginBetween,
      renderItem,
    } = this.props

    const rangeCard = createRangeFromZeroTo(numColumns)

    return (
      <StyledPage className="k-Carousel__page">
        {rangeCard.map(index => (
          <StyledItem
            key={index}
            index={index}
            itemMinWidth={itemMinWidth}
            itemMarginBetween={itemMarginBetween}
            className="k-Carousel__page__item"
          >
            {renderItem[index]}
          </StyledItem>
        ))}
      </StyledPage>
    )
  }
}
