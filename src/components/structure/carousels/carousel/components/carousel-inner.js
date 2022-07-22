"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.CarouselInner = void 0;

var _react = _interopRequireWildcard(require("react"));

var _resizeObserverPolyfill = _interopRequireDefault(require("resize-observer-polyfill"));

var _elementHelper = require("../../../../../helpers/dom/element-helper");

var _carouselPage = require("./carousel-page");

var _classnames = _interopRequireDefault(require("classnames"));

var _usePrevious = require("../../../../../helpers/hooks/use-previous");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

if (_elementHelper.domElementHelper.canUseDom()) {
  require('smoothscroll-polyfill').polyfill();
}

let isTouched = false; // inspired by https://github.com/cferdinandi/scrollStop

const scrollStop = callback => {
  if (!callback) return;
  let isScrolling;
  let target;
  return event => {
    clearTimeout(isScrolling);
    target = event.target;
    isScrolling = setTimeout(() => callback(target), 132);
  };
};

const getClosest = (counts, goal) => counts.reduce((prev, curr) => Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);

const getDataForPage = (data, indexPage, numberOfItemsPerPage) => {
  const startIndex = indexPage * numberOfItemsPerPage;
  return data.slice(startIndex, startIndex + numberOfItemsPerPage);
};

const getElementPadding = element => parseInt(_elementHelper.domElementHelper.getComputedStyle(element, 'padding-left')) + parseInt(_elementHelper.domElementHelper.getComputedStyle(element, 'padding-right'));

const getRangePageScrollLeft = (targetClientWidth, numberOfPages, itemMarginBetween, containerPadding) => Array(numberOfPages).fill(0).map((el, page) => page * (targetClientWidth + itemMarginBetween - containerPadding));

const CarouselInner = _ref => {
  let {
    currentPageIndex,
    exportVisibilityProps,
    goToPage,
    itemMarginBetween,
    items,
    numberOfItemsPerPage,
    numberOfPages,
    onResizeInner,
    pagesClassName,
    viewedPages,
    pageClickText
  } = _ref;
  const carouselInner = (0, _react.useRef)(null);
  const previousIndexPageVisible = (0, _usePrevious.usePrevious)(currentPageIndex);
  let resizeObserver;

  const onResizeObserve = _ref2 => {
    let [entry] = _ref2;
    const innerWidth = entry.contentRect.width;
    onResizeInner(innerWidth);
  };

  (0, _react.useEffect)(() => {
    resizeObserver = new _resizeObserverPolyfill.default(onResizeObserve);
    return () => resizeObserver.disconnect();
  }, []);
  (0, _react.useEffect)(() => {
    carouselInner.current && resizeObserver.observe(carouselInner.current);
  }, [carouselInner]);
  (0, _react.useEffect)(() => {
    if (currentPageIndex !== previousIndexPageVisible) {
      scrollToPage(currentPageIndex);
    }
  }, [currentPageIndex, previousIndexPageVisible]);
  const handleInnerScroll = scrollStop(target => {
    if (isTouched) return null;
    const {
      scrollLeft,
      clientWidth
    } = target;
    const rangePageScrollLeft = getRangePageScrollLeft(clientWidth, numberOfPages, itemMarginBetween, getElementPadding(target));
    const closest = getClosest(rangePageScrollLeft, scrollLeft);
    const indexClosest = rangePageScrollLeft.indexOf(closest);
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

  const scrollToPage = indexPageToScroll => {
    const target = carouselInner.current;
    if (!target) return null;
    const {
      scrollLeft,
      clientWidth
    } = target;
    const rangePageScrollLeft = getRangePageScrollLeft(clientWidth, numberOfPages, itemMarginBetween, getElementPadding(target));
    const closest = rangePageScrollLeft[indexPageToScroll];

    if (closest !== scrollLeft) {
      target.scrollTo({
        top: 0,
        left: closest,
        behavior: 'smooth'
      });
    }
  };

  const handlePageClick = index => e => {
    if (index === currentPageIndex) return;
    e.preventDefault();
    scrollToPage(index);
    document.activeElement.blur();
  };

  const handleKeyDown = e => {
    if (e.key === 'ArrowRight') {
      goToPage(currentPageIndex + 1);
    } else if (e.key === 'ArrowLeft') {
      goToPage(currentPageIndex - 1);
    }
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    ref: carouselInner,
    onScroll: handleInnerScroll,
    onTouchStart: () => isTouched = true,
    onTouchEnd: () => isTouched = false,
    onKeyDown: handleKeyDown,
    className: "k-Carousel__inner"
  }, Array(numberOfPages).fill(0).map((el, index) => {
    const isActivePage = currentPageIndex === index;
    const hasPageBeenViewed = viewedPages.has(index);
    return /*#__PURE__*/_react.default.createElement("div", {
      key: "inner_" + index,
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
      goToCurrentPage: () => goToPage(index)
    }), !isActivePage && /*#__PURE__*/_react.default.createElement("button", {
      type: "button",
      onClick: handlePageClick(index),
      className: "k-u-reset-button k-Carousel__inner__button",
      "aria-label": pageClickText(index + 1)
    }));
  }));
};

exports.CarouselInner = CarouselInner;