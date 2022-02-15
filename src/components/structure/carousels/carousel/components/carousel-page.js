"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.CarouselPage = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var CarouselPage = function CarouselPage(_ref) {
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

  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('k-Carousel__page', {
      'k-Carousel__page--isActivePage': isActivePage,
      'k-Carousel__page--hasBeenViewed': hasPageBeenViewed
    })
  }, Array(numberOfItemsPerPage).fill(0).map(function (el, index) {
    // If there's not enough items in the last page of the Carousel
    if (index >= pageItems.length) {
      return /*#__PURE__*/_react.default.createElement("div", {
        key: "page_" + index,
        className: "k-Carousel__page__item"
      });
    }

    return /*#__PURE__*/_react.default.createElement("div", {
      key: "page_" + index,
      className: "k-Carousel__page__item"
    }, /*#__PURE__*/_react.default.cloneElement(pageItems[index], itemProps));
  }));
};

exports.CarouselPage = CarouselPage;