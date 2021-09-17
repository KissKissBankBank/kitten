import "core-js/modules/es.array.map.js";
import "core-js/modules/es.array.concat.js";
import "core-js/modules/es.array.iterator.js";
import "core-js/modules/es.object.to-string.js";
import "core-js/modules/web.dom-collections.iterator.js";
import React from 'react';
import classNames from 'classnames';
export var CarouselPage = function CarouselPage(_ref) {
  var exportVisibilityProps = _ref.exportVisibilityProps,
      hasPageBeenViewed = _ref.hasPageBeenViewed,
      isActivePage = _ref.isActivePage,
      pageItems = _ref.pageItems,
      numberOfItemsPerPage = _ref.numberOfItemsPerPage,
      goToCurrentPage = _ref.goToCurrentPage;

  var handleFocus = function handleFocus() {
    if (isActivePage) return;
    return goToCurrentPage();
  };

  var itemProps = function () {
    if (!exportVisibilityProps) return {
      onFocus: handleFocus
    };
    return {
      hasPageBeenViewed: hasPageBeenViewed,
      isActivePage: isActivePage,
      onFocus: handleFocus
    };
  }();

  return /*#__PURE__*/React.createElement("div", {
    className: classNames('k-Carousel__page', {
      'k-Carousel__page--isActivePage': isActivePage,
      'k-Carousel__page--hasBeenViewed': hasPageBeenViewed
    })
  }, [].concat(Array(numberOfItemsPerPage).keys()).map(function (index) {
    // If there's not enough items in the last page of the Carousel
    if (index >= pageItems.length) {
      return /*#__PURE__*/React.createElement("div", {
        key: index,
        className: "k-Carousel__page__item"
      });
    }

    return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: "k-Carousel__page__item"
    }, /*#__PURE__*/React.cloneElement(pageItems[index], itemProps));
  }));
};