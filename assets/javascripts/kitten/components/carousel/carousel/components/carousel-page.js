import React from 'react'
import classNames from 'classnames'

export const CarouselPage = ({
  data,
  exportVisibilityProps,
  hasPageBeenViewed,
  isActivePage,
  legacyMode,
  numColumns,
  renderItem,
}) => (
  <div
    className={classNames('k-Carousel__page', {
      'k-Carousel__page--isActivePage': isActivePage,
      'k-Carousel__page--hasBeenViewed': hasPageBeenViewed,
    })}
  >
    {[...Array(numColumns).keys()].map(index => (
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
