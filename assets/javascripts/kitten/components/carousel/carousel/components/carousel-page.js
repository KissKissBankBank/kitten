import React from 'react'
import { createRangeFromZeroTo } from '../../../../helpers/utils/range'
import classNames from 'classnames'

export const CarouselPage = ({
  legacyMode,
  data,
  numColumns,
  renderItem,
  isActivePage,
  hasPageBeenViewed,
  exportVisibilityProps,
}) => {
  const rangeCard = createRangeFromZeroTo(numColumns)

  return (
    <div
      className={classNames('k-Carousel__page', {
        'k-Carousel__page--isActivePage': isActivePage,
        'k-Carousel__page--hasBeenViewed': hasPageBeenViewed,
      })}
    >
      {rangeCard.map(index => (
        <div key={index} className="k-Carousel__page__item">
          {legacyMode
            ? data[index] && renderItem({ item: data[index] })
            : exportVisibilityProps
            ? renderItem[index] &&
              React.cloneElement(renderItem[index], {
                hasPageBeenViewed,
              })
            : renderItem[index]}
        </div>
      ))}
    </div>
  )
}
