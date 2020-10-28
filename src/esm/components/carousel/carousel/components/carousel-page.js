import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import React from 'react';
import classNames from 'classnames';
export var CarouselPage = function CarouselPage(_ref) {
  var exportVisibilityProps = _ref.exportVisibilityProps,
      hasPageBeenViewed = _ref.hasPageBeenViewed,
      isActivePage = _ref.isActivePage,
      pageItems = _ref.pageItems,
      numberOfItemsPerPage = _ref.numberOfItemsPerPage;
  return /*#__PURE__*/React.createElement("div", {
    className: classNames('k-Carousel__page', {
      'k-Carousel__page--isActivePage': isActivePage,
      'k-Carousel__page--hasBeenViewed': hasPageBeenViewed
    })
  }, _toConsumableArray(Array(numberOfItemsPerPage).keys()).map(function (index) {
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: "k-Carousel__page__item"
    }, exportVisibilityProps ? index < pageItems.length && React.cloneElement(pageItems[index], {
      hasPageBeenViewed: hasPageBeenViewed,
      isActivePage: isActivePage
    }) : pageItems[index]);
  }));
};