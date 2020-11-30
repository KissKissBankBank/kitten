import React from 'react'
import classNames from 'classnames'

export const CarouselPage = ({
  exportVisibilityProps,
  hasPageBeenViewed,
  isActivePage,
  pageItems,
  numberOfItemsPerPage,
  goToPage,
  pageIndex,
}) => {
  const handleFocus = () => {
    if (isActivePage) return

    return goToPage(pageIndex)
  }

  return (
    <div
      className={classNames('k-Carousel__page', {
        'k-Carousel__page--isActivePage': isActivePage,
        'k-Carousel__page--hasBeenViewed': hasPageBeenViewed,
      })}
    >
      {[...Array(numberOfItemsPerPage).keys()].map(index => (
        <div key={index} className="k-Carousel__page__item">
          {exportVisibilityProps
            ? index < pageItems.length &&
              React.cloneElement(pageItems[index], {
                hasPageBeenViewed,
                isActivePage,
                onFocus: handleFocus,
              })
            : index < pageItems.length &&
              React.cloneElement(pageItems[index], {
                onFocus: handleFocus,
              })}
        </div>
      ))}
    </div>
  )
}
