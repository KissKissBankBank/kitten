"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CarouselInner = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _react = _interopRequireWildcard(require("react"));

var _resizeObserverPolyfill = _interopRequireDefault(require("resize-observer-polyfill"));

var _elementHelper = require("../../../../helpers/dom/element-helper");

var _carouselPage = require("./carousel-page");

var _classnames = _interopRequireDefault(require("classnames"));

var _usePreviousHook = require("../../../../helpers/utils/use-previous-hook");

if (_elementHelper.domElementHelper.canUseDom()) {
  require('smoothscroll-polyfill').polyfill();
}

var isTouched = false; // inspired by https://github.com/cferdinandi/scrollStop

var scrollStop = function scrollStop(callback) {
  if (!callback) return;
  var isScrolling;
  var target;
  return function (event) {
    clearTimeout(isScrolling);
    target = event.target;
    isScrolling = setTimeout(function () {
      return callback(target);
    }, 132);
  };
};

var getClosest = function getClosest(counts, goal) {
  return counts.reduce(function (prev, curr) {
    return Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev;
  });
};

var getDataForPage = function getDataForPage(data, indexPage, numberOfItemsPerPage) {
  var startIndex = indexPage * numberOfItemsPerPage;
  return data.slice(startIndex, startIndex + numberOfItemsPerPage);
};

var getElementPadding = function getElementPadding(element) {
  return parseInt(_elementHelper.domElementHelper.getComputedStyle(element, 'padding-left')) + parseInt(_elementHelper.domElementHelper.getComputedStyle(element, 'padding-right'));
};

var getRangePageScrollLeft = function getRangePageScrollLeft(targetClientWidth, numberOfPages, itemMarginBetween, containerPadding) {
  return (0, _toConsumableArray2.default)(Array(numberOfPages).keys()).map(function (page) {
    return page * (targetClientWidth + itemMarginBetween - containerPadding);
  });
};

var CarouselInner = function CarouselInner(_ref) {
  var currentPageIndex = _ref.currentPageIndex,
      exportVisibilityProps = _ref.exportVisibilityProps,
      goToPage = _ref.goToPage,
      itemMarginBetween = _ref.itemMarginBetween,
      items = _ref.items,
      numberOfItemsPerPage = _ref.numberOfItemsPerPage,
      numberOfPages = _ref.numberOfPages,
      onResizeInner = _ref.onResizeInner,
      pagesClassName = _ref.pagesClassName,
      viewedPages = _ref.viewedPages,
      pageClickText = _ref.pageClickText;
  var carouselInner = (0, _react.useRef)(null);
  var previousIndexPageVisible = (0, _usePreviousHook.usePrevious)(currentPageIndex);
  var resizeObserver;

  var onResizeObserve = function onResizeObserve(_ref2) {
    var _ref3 = (0, _slicedToArray2.default)(_ref2, 1),
        entry = _ref3[0];

    var innerWidth = entry.contentRect.width;
    onResizeInner(innerWidth);
  };

  (0, _react.useEffect)(function () {
    resizeObserver = new _resizeObserverPolyfill.default(onResizeObserve);
    return function () {
      return resizeObserver.disconnect();
    };
  }, []);
  (0, _react.useEffect)(function () {
    carouselInner.current && resizeObserver.observe(carouselInner.current);
  }, [carouselInner]);
  (0, _react.useEffect)(function () {
    if (currentPageIndex !== previousIndexPageVisible) {
      scrollToPage(currentPageIndex);
    }
  }, [currentPageIndex, previousIndexPageVisible]);
  var handleInnerScroll = scrollStop(function (target) {
    if (isTouched) return null;
    var scrollLeft = target.scrollLeft,
        clientWidth = target.clientWidth;
    var rangePageScrollLeft = getRangePageScrollLeft(clientWidth, numberOfPages, itemMarginBetween, getElementPadding(target));
    var closest = getClosest(rangePageScrollLeft, scrollLeft);
    var indexClosest = rangePageScrollLeft.indexOf(closest);
    if (indexClosest !== currentPageIndex) return goToPage(indexClosest); // if the user doesn't scroll enough to change page
    // we need to scroll back to the fake snap page

    if (closest !== scrollLeft) {
      return target.scrollTo({
        top: 0,
        left: closest,
        behavior: 'smooth'
      });
    }
  });

  var scrollToPage = function scrollToPage(indexPageToScroll) {
    var target = carouselInner.current;
    if (!target) return null;
    var scrollLeft = target.scrollLeft,
        clientWidth = target.clientWidth;
    var rangePageScrollLeft = getRangePageScrollLeft(clientWidth, numberOfPages, itemMarginBetween, getElementPadding(target));
    var closest = rangePageScrollLeft[indexPageToScroll];

    if (closest !== scrollLeft) {
      target.scrollTo({
        top: 0,
        left: closest,
        behavior: 'smooth'
      });
    }
  };

  var handlePageClick = function handlePageClick(index) {
    return function (e) {
      if (index === currentPageIndex) return;
      e.preventDefault();
      scrollToPage(index);
      document.activeElement.blur();
    };
  };

  var handleKeyDown = function handleKeyDown(e) {
    if (e.key === 'ArrowRight') {
      goToPage(currentPageIndex + 1);
    } else if (e.key === 'ArrowLeft') {
      goToPage(currentPageIndex - 1);
    }
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    ref: carouselInner,
    onScroll: handleInnerScroll,
    onTouchStart: function onTouchStart() {
      return isTouched = true;
    },
    onTouchEnd: function onTouchEnd() {
      return isTouched = false;
    },
    onKeyDown: handleKeyDown,
    className: "k-Carousel__inner"
  }, (0, _toConsumableArray2.default)(Array(numberOfPages).keys()).map(function (index) {
    var isActivePage = currentPageIndex === index;
    var hasPageBeenViewed = viewedPages.has(index);
    return /*#__PURE__*/_react.default.createElement("div", {
      key: index,
      role: "button",
      "aria-label": pageClickText(index + 1),
      onClick: handlePageClick(index),
      className: (0, _classnames.default)('k-Carousel__inner__pageContainer', pagesClassName, {
        'k-Carousel__inner__pageContainer--isActivePage': isActivePage,
        'k-Carousel__inner__pageContainer--hasBeenViewed': hasPageBeenViewed
      })
    }, /*#__PURE__*/_react.default.createElement(_carouselPage.CarouselPage, {
      exportVisibilityProps: exportVisibilityProps,
      hasPageBeenViewed: hasPageBeenViewed,
      isActivePage: isActivePage,
      pageItems: getDataForPage(items, index, numberOfItemsPerPage),
      numberOfItemsPerPage: numberOfItemsPerPage,
      goToCurrentPage: function goToCurrentPage() {
        return goToPage(index);
      }
    }));
  }));
};

exports.CarouselInner = CarouselInner;