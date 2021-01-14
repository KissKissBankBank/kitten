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

  const itemProps = (() => {
    if (!exportVisibilityProps) return { onFocus: handleFocus }

    return {
      hasPageBeenViewed,
      isActivePage,
      onFocus: handleFocus,
    }
  })()

  return (
    <div
      className={classNames('k-Carousel__page', {
        'k-Carousel__page--isActivePage': isActivePage,
        'k-Carousel__page--hasBeenViewed': hasPageBeenViewed,
      })}
    >
      {[...Array(numberOfItemsPerPage).keys()].map(index => {
        // If there's not enough items in the last page of the Carousel
        if (index >= pageItems.length) {
          return <div key={index} className="k-Carousel__page__item" />
        }

        return (
          <div key={index} className="k-Carousel__page__item">
            {React.cloneElement(pageItems[index], itemProps)}
          </div>
        )
      })}
    </div>
  )
}
