import React from 'react';
import classNames from 'classnames';
export const CarouselPage = _ref => {
  let {
    exportVisibilityProps,
    hasPageBeenViewed,
    isActivePage,
    pageItems,
    numberOfItemsPerPage,
    goToCurrentPage
  } = _ref;

  const handleFocus = () => {
    if (isActivePage) return;
    return goToCurrentPage();
  };

  const itemProps = (() => {
    if (!exportVisibilityProps) return {
      onFocus: handleFocus
    };
    return {
      hasPageBeenViewed,
      isActivePage,
      onFocus: handleFocus
    };
  })();

  return /*#__PURE__*/React.createElement("div", {
    className: classNames('k-Carousel__page', {
      'k-Carousel__page--isActivePage': isActivePage,
      'k-Carousel__page--hasBeenViewed': hasPageBeenViewed
    })
  }, Array(numberOfItemsPerPage).fill(0).map((el, index) => {
    // If there's not enough items in the last page of the Carousel
    if (index >= pageItems.length) {
      return /*#__PURE__*/React.createElement("div", {
        key: "page_" + index,
        className: "k-Carousel__page__item"
      });
    }

    return /*#__PURE__*/React.createElement("div", {
      key: "page_" + index,
      className: "k-Carousel__page__item"
    }, /*#__PURE__*/React.cloneElement(pageItems[index], itemProps));
  }));
};