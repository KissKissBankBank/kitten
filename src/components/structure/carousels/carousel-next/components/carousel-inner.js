"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.FAKE_PAGES = exports.CarouselInner = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireWildcard(require("react"));

var _resizeObserverPolyfill = _interopRequireDefault(require("resize-observer-polyfill"));

var _lodash = require("lodash");

var _elementHelper = require("../../../../../helpers/dom/element-helper");

var _usePrevious = require("../../../../../helpers/hooks/use-previous");

var _carouselPage = require("./carousel-page");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

if (_elementHelper.domElementHelper.canUseDom()) {
  require('smoothscroll-polyfill').polyfill();
}

let isTouched = false;
/**
 * Native scrollTo with callback
 * https://stackoverflow.com/a/55686711
 * @param offset - offset to scroll to
 * @param callback - callback function
 */

function scrollTo(container, offset, callback, behavior) {
  if (offset === void 0) {
    offset = 0;
  }

  if (behavior === void 0) {
    behavior = 'smooth';
  }

  const onScroll = function () {
    if ((offset - 3).toFixed() < container.scrollLeft.toFixed() && container.scrollLeft.toFixed() < (offset + 3).toFixed()) {
      container.removeEventListener('scroll', onScroll);
      callback();
    }
  };

  container.addEventListener('scroll', onScroll);
  onScroll();
  container.scrollTo({
    top: 0,
    left: offset.toFixed(),
    behavior
  });
} // inspired by https://github.com/cferdinandi/scrollStop


const scrollStop = callback => {
  if (!callback) return;
  let isScrolling;
  let target;
  return event => {
    clearTimeout(isScrolling);
    target = event.target;
    isScrolling = setTimeout(() => callback(target), 66);
  };
};

const getClosest = (counts, goal) => counts.reduce((prev, curr) => Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);

const getDataForPage = (data, indexPage, itemsPerPage) => {
  const startIndex = indexPage * itemsPerPage;
  const indices = (0, _lodash.range)(startIndex, startIndex + itemsPerPage);
  const total = data.length;
  return (0, _lodash.map)(indices, index => data[(index % total + total) % total]);
};

const getElementPadding = element => parseInt(_elementHelper.domElementHelper.getComputedStyle(element, 'padding-inline'));

const FAKE_PAGES = 2;
exports.FAKE_PAGES = FAKE_PAGES;

const CarouselInner = _ref => {
  let {
    currentPageIndex,
    exportVisibilityProps,
    goToPage,
    items,
    itemsPerPage,
    onResizeInner,
    pagesClassName,
    viewedPages,
    pageClickText,
    innerPagesCount,
    cycle
  } = _ref;
  const carouselInner = (0, _react.useRef)(null);
  const [firstScrolled, setFirstScrolled] = (0, _react.useState)(false);
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
    // Scroll to the first element of the page
    if (!cycle) return;
    if (firstScrolled) return;
    if (!carouselInner.current) return;
    if ([...carouselInner.current.childNodes].length === 0) return;
    if (currentPageIndex === 0) return;
    scrollToPage(currentPageIndex, () => {}, 'auto');
    setFirstScrolled(true);
  });
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
      childNodes
    } = target;
    const padding = getElementPadding(target);
    const rangePageScrollLeft = [...childNodes].map(page => page.offsetLeft - padding);
    const closest = getClosest(rangePageScrollLeft, scrollLeft);
    const indexClosest = rangePageScrollLeft.indexOf(closest);

    if (indexClosest !== currentPageIndex) {
      if (!cycle) return goToPage(indexClosest);

      if (indexClosest < FAKE_PAGES) {
        const newIndex = innerPagesCount - FAKE_PAGES - 1;
        return scrollToPage(newIndex, () => goToPage(newIndex), 'auto');
      }

      if (indexClosest >= innerPagesCount - FAKE_PAGES) {
        const newIndex = FAKE_PAGES;
        return scrollToPage(newIndex, () => goToPage(newIndex), 'auto');
      }

      return goToPage(indexClosest);
    }
  });

  const scrollToPage = function (indexPageToScroll, callback, behavior) {
    var _childNodes$indexPage;

    if (callback === void 0) {
      callback = handleAfterScroll;
    }

    if (behavior === void 0) {
      behavior = 'smooth';
    }

    const target = carouselInner.current;
    if (!target) return null;
    const {
      scrollLeft,
      childNodes
    } = target;
    if (childNodes.length === 0) return null;
    const padding = getElementPadding(target);
    const closest = ((_childNodes$indexPage = childNodes[indexPageToScroll]) == null ? void 0 : _childNodes$indexPage.offsetLeft) - padding;

    if (closest !== scrollLeft) {
      scrollTo(target, closest, callback, behavior);
    }
  };

  const handleAfterScroll = () => {
    if (!cycle) return;

    if (currentPageIndex < FAKE_PAGES) {
      const newIndex = innerPagesCount - FAKE_PAGES - 1;
      scrollToPage(newIndex, () => goToPage(newIndex), 'auto');
    }

    if (currentPageIndex >= innerPagesCount - FAKE_PAGES) {
      const newIndex = FAKE_PAGES;
      scrollToPage(newIndex, () => goToPage(newIndex), 'auto');
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

  const getDataIndex = index => {
    return index - FAKE_PAGES;
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    ref: carouselInner,
    onScroll: handleInnerScroll,
    onTouchStart: () => isTouched = true,
    onTouchEnd: () => isTouched = false,
    onKeyDown: handleKeyDown,
    className: "k-CarouselNext__inner"
  }, Array(innerPagesCount).fill(0).map((el, index) => {
    const dataIndex = cycle ? getDataIndex(index) : index;
    const isActivePage = currentPageIndex === index;
    const hasPageBeenViewed = viewedPages.has(index);
    return /*#__PURE__*/_react.default.createElement("div", {
      key: "inner_" + index,
      className: (0, _classnames.default)('k-CarouselNext__inner__pageContainer', pagesClassName, {
        'k-CarouselNext__inner__pageContainer--isActivePage': isActivePage,
        'k-CarouselNext__inner__pageContainer--hasBeenViewed': hasPageBeenViewed
      })
    }, /*#__PURE__*/_react.default.createElement(_carouselPage.CarouselPage, {
      exportVisibilityProps: exportVisibilityProps,
      hasPageBeenViewed: hasPageBeenViewed,
      isActivePage: isActivePage,
      pageItems: getDataForPage(items, dataIndex, itemsPerPage),
      itemsPerPage: itemsPerPage,
      goToCurrentPage: () => goToPage(index)
    }), !isActivePage && /*#__PURE__*/_react.default.createElement("button", {
      type: "button",
      onClick: handlePageClick(index),
      className: "k-u-reset-button k-CarouselNext__inner__button",
      "aria-label": pageClickText(index + 1)
    }));
  }));
};

exports.CarouselInner = CarouselInner;