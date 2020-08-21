import React from 'react'
import styled, { css } from 'styled-components'
import { createRangeFromZeroTo } from '../../../../helpers/utils/range'
import classNames from 'classnames'

export const CarouselPage = ({
  legacyMode,
  data,
  numColumns,
  itemMinWidth,
  specificColNumber,
  itemMarginBetween,
  renderItem,
  isActivePage,
  hasPageBeenViewed,
  exportVisibilityProps,
}) => {
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
          specificColNumber={specificColNumber}
          itemMarginBetween={itemMarginBetween}
          className="k-Carousel__page__item"
          numColumns={numColumns}
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

const StyledPage = styled.div`
  display: flex;
  flex-direction: row;
`

const StyledItem = styled.div`
  flex-shrink: 1;
  flex-grow: 1;

  ${({ itemMinWidth, specificColNumber, itemMarginBetween, numColumns }) =>
    specificColNumber
      ? css`
          width: calc(
            (100% - ${(numColumns - 1) * itemMarginBetween}px) / ${numColumns}
          );
        `
      : css`
          min-width: ${itemMinWidth}px;
          flex-basis: ${itemMinWidth}px;
        `}

  ${({ index, itemMarginBetween }) =>
    index &&
    css`
      margin-left: ${itemMarginBetween}px;
    `}
`
