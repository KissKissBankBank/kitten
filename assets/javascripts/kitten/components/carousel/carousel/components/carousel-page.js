import React from 'react'
import classNames from 'classnames'

export const CarouselPage = ({
  exportVisibilityProps,
  hasPageBeenViewed,
  isActivePage,
  numberOfItemsPerPage,
  renderItem,
}) => (
  <div
    className={classNames('k-Carousel__page', {
      'k-Carousel__page--isActivePage': isActivePage,
      'k-Carousel__page--hasBeenViewed': hasPageBeenViewed,
    })}
  >
    {[...Array(numberOfItemsPerPage).keys()].map(index => (
      <div key={index} className="k-Carousel__page__item">
        {exportVisibilityProps
          ? renderItem[index] &&
            React.cloneElement(renderItem[index], {
              hasPageBeenViewed,
            })
          : renderItem[index]}
      </div>
    ))}
  </div>
)
