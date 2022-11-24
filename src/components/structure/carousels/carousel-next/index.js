"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.numberOfInnerPages = exports.getNumberOfPagesForColumnsAndDataLength = exports.getItemsPerPageCountForWidth = exports.checkPageLoop = exports.checkPage = exports.CarouselNext = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _gridConfig = require("../../../../constants/grid-config");

var _typography = require("../../../../helpers/utils/typography");

var _button = require("../../../action/button");

var _arrowIcon = require("../../../graphics/icons/arrow-icon");

var _carouselInner = require("./components/carousel-inner");

var _styles = require("./styles");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const getItemsPerPageCountForWidth = (width, itemMinWidth, itemGap, itemsPerPage) => {
  if (!!itemsPerPage && itemMinWidth === 0) return itemsPerPage;
  if (width === 0 || itemMinWidth === 0) return 0;
  const remainingWidthWithOneCard = width - itemMinWidth;
  const itemWidthAndMargin = itemMinWidth + itemGap;
  const newItemsPerPage = Math.floor(remainingWidthWithOneCard / itemWidthAndMargin) + 1;
  return newItemsPerPage;
};

exports.getItemsPerPageCountForWidth = getItemsPerPageCountForWidth;

const getNumberOfPagesForColumnsAndDataLength = (dataLength, itemsPerPage) => {
  if (dataLength === 0 || itemsPerPage === 0) return 0;
  const pagesCount = Math.ceil(dataLength / itemsPerPage);
  return pagesCount;
};

exports.getNumberOfPagesForColumnsAndDataLength = getNumberOfPagesForColumnsAndDataLength;

const checkPage = (pagesCount, newPage) => {
  if (pagesCount < 1) return 0;
  if (newPage < 0) return 0;
  if (newPage >= pagesCount) return pagesCount - 1;
  return newPage;
};

exports.checkPage = checkPage;

const checkPageLoop = (pagesCount, newPage) => {
  if (pagesCount < 1) return 0;
  if (newPage < 0) return pagesCount - 1;
  if (newPage >= pagesCount) return 0;
  return newPage;
};

exports.checkPageLoop = checkPageLoop;

const numberOfInnerPages = (totalCount, itemsPerPage) => {
  // Greatest Common Divisor.
  function gcd(a, b) {
    if (b === 0) {
      return a;
    }

    return gcd(b, a % b);
  } // Least Common Multiple.


  function lcm(a, b) {
    return a * b / gcd(a, b);
  } // Compute the optimal number of pages to have a consistent cycle given the
  // total number of items and the page size.
  //
  // Add twice the amount of fake pages required for visual continuity,
  // we need them on the left side and the right side of the carousel.


  const result = 2 * _carouselInner.FAKE_PAGES + lcm(totalCount, itemsPerPage) / itemsPerPage;
  return result;
};

exports.numberOfInnerPages = numberOfInnerPages;

const getGapAccordingToViewport = (baseGap, viewportIsXSOrLess, viewportIsMOrLess) => {
  if (viewportIsXSOrLess) return _gridConfig.CONTAINER_PADDING_THIN / 2 - _styles.OUTLINE_PLUS_OFFSET * 2;
  if (viewportIsMOrLess) return _gridConfig.CONTAINER_PADDING / 2 - _styles.OUTLINE_PLUS_OFFSET * 2;
  return baseGap - _styles.OUTLINE_PLUS_OFFSET * 2;
};

const CarouselNext = _ref => {
  let {
    baseGap,
    children,
    className,
    showOtherPages,
    itemMinWidth,
    style,
    shadowSize,
    viewportIsXSOrLess,
    viewportIsMOrLess,
    pagesClassName,
    exportVisibilityProps,
    pageClickText,
    loop,
    cycle,
    itemsPerPage: itemsPerPageProp,
    navigationPropsGetter
  } = _ref;
  const [currentPageIndex, setCurrentPageIndex] = (0, _react.useState)(cycle ? _carouselInner.FAKE_PAGES : 0);
  const [itemsPerPage, setItemsPerPageCount] = (0, _react.useState)(itemsPerPageProp > 0 ? itemsPerPageProp : 3);
  const [pagesCount, setPagesCount] = (0, _react.useState)(getNumberOfPagesForColumnsAndDataLength(_react.default.Children.count(children), itemsPerPageProp > 0 ? itemsPerPageProp : 3));
  const [innerPagesCount, setInnerPagesCount] = (0, _react.useState)(0);
  const [viewedPages, setViewedPages] = (0, _react.useState)(new Set());
  if (_react.default.Children.count(children) === 0) return null;
  (0, _react.useEffect)(() => {
    setViewedPages(current => {
      current.add(0);
      return current;
    });
  }, []);
  (0, _react.useEffect)(() => {
    const newInnerPagesCount = cycle ? numberOfInnerPages(_react.default.Children.count(children), itemsPerPage) : pagesCount;
    setInnerPagesCount(newInnerPagesCount);
    const newCurrentPageIndex = currentPageIndex > newInnerPagesCount - 1 ? newInnerPagesCount - 1 : currentPageIndex;
    setCurrentPageIndex(newCurrentPageIndex);
  }, [pagesCount, itemsPerPage]);

  const onResizeInner = innerWidth => {
    const itemGap = getGapAccordingToViewport(baseGap, viewportIsXSOrLess, viewportIsMOrLess);
    const newItemsPerPage = getItemsPerPageCountForWidth(innerWidth, itemMinWidth, itemGap, itemsPerPage);
    const pagesCount = getNumberOfPagesForColumnsAndDataLength(_react.default.Children.count(children), newItemsPerPage);
    setItemsPerPageCount(Math.max(newItemsPerPage, 1));
    setPagesCount(pagesCount);
  };

  const goNextPage = () => {
    const newPage = loop ? checkPageLoop(innerPagesCount, currentPageIndex + 1) : checkPage(innerPagesCount, currentPageIndex + 1);
    viewedPagesSetter(newPage);
    setCurrentPageIndex(newPage);
  };

  const goPrevPage = () => {
    const newPage = loop ? checkPageLoop(innerPagesCount, currentPageIndex - 1) : checkPage(innerPagesCount, currentPageIndex - 1);
    viewedPagesSetter(newPage);
    setCurrentPageIndex(newPage);
  };

  const goToPage = indexPageToGo => {
    const newPage = loop ? checkPageLoop(innerPagesCount, indexPageToGo) : checkPage(innerPagesCount, indexPageToGo);
    viewedPagesSetter(newPage);
    setCurrentPageIndex(newPage);
  };

  const viewedPagesSetter = newPage => setViewedPages(current => {
    current.add(newPage);

    if (cycle) {
      newPage > 0 && current.add(newPage - 1);
      newPage < innerPagesCount - 1 && current.add(newPage + 1);
    }

    return current;
  });

  (0, _react.useEffect)(() => {
    navigationPropsGetter({
      currentPageIndex,
      pagesCount,
      goPrevPage,
      goNextPage,
      isFirstPage: currentPageIndex === 0,
      isLastPage: currentPageIndex === innerPagesCount - 1
    });
  }, [currentPageIndex, innerPagesCount]);
  return /*#__PURE__*/_react.default.createElement(_styles.StyledCarouselContainer, {
    style: { ...style,
      '--carousel-shadowSize': (0, _typography.pxToRem)(shadowSize) || null,
      '--carousel-gapBase': (0, _typography.pxToRem)(baseGap),
      '--carousel-itemsPerPage': itemsPerPage,
      '--carousel-pagesCount': innerPagesCount
    },
    className: (0, _classnames.default)('k-CarouselNext', className, {
      'k-CarouselNext--showOtherPages': showOtherPages
    })
  }, /*#__PURE__*/_react.default.createElement(_carouselInner.CarouselInner, {
    currentPageIndex: currentPageIndex,
    exportVisibilityProps: exportVisibilityProps,
    goToPage: goToPage,
    items: children,
    itemsPerPage: itemsPerPage,
    pagesCount: pagesCount,
    innerPagesCount: innerPagesCount,
    onResizeInner: onResizeInner,
    pagesClassName: pagesClassName,
    viewedPages: viewedPages,
    pageClickText: pageClickText,
    cycle: cycle
  }));
};

exports.CarouselNext = CarouselNext;

CarouselNext.Navigation = _ref2 => {
  let {
    className,
    loop,
    goPrevPage,
    goNextPage,
    buttonProps,
    isFirstPage,
    isLastPage,
    lastButtonText,
    prevButtonText,
    firstButtonText,
    nextButtonText
  } = _ref2;
  return /*#__PURE__*/_react.default.createElement(_styles.StyledCarouselNavigation, {
    className: (0, _classnames.default)('k-CarouselNext__navigation', className)
  }, /*#__PURE__*/_react.default.createElement(_button.Button, (0, _extends2.default)({
    type: "button",
    className: "k-CarouselNext__navigation__button",
    onClick: goPrevPage,
    disabled: !loop && isFirstPage,
    fit: "icon"
  }, buttonProps), /*#__PURE__*/_react.default.createElement("span", {
    className: "k-u-a11y-visuallyHidden"
  }, loop && isFirstPage ? lastButtonText : prevButtonText), /*#__PURE__*/_react.default.createElement(_arrowIcon.ArrowIcon, {
    direction: "left",
    "aria-hidden": true
  })), /*#__PURE__*/_react.default.createElement(_button.Button, (0, _extends2.default)({
    type: "button",
    className: "k-CarouselNext__navigation__button",
    onClick: goNextPage,
    disabled: !loop && isLastPage,
    fit: "icon"
  }, buttonProps), /*#__PURE__*/_react.default.createElement("span", {
    className: "k-u-a11y-visuallyHidden"
  }, loop && isLastPage ? firstButtonText : nextButtonText), /*#__PURE__*/_react.default.createElement(_arrowIcon.ArrowIcon, {
    direction: "right",
    "aria-hidden": true
  })));
};

CarouselNext.Navigation.defaultProps = {
  loop: false,
  cycle: false,
  prevButtonText: 'Previous items',
  nextButtonText: 'Next items',
  firstButtonText: 'First items',
  lastButtonText: 'Last items'
};
CarouselNext.Navigation.propTypes = {
  loop: _propTypes.default.bool,
  cycle: _propTypes.default.bool,
  prevButtonText: _propTypes.default.string,
  nextButtonText: _propTypes.default.string,
  firstButtonText: _propTypes.default.string,
  lastButtonText: _propTypes.default.string
};
CarouselNext.defaultProps = {
  itemsPerPage: 0,
  showOtherPages: false,
  pagesClassName: null,
  pageClickText: page => {
    return "Page " + page;
  },
  loop: false,
  cycle: false,
  exportVisibilityProps: false,
  shadowSize: 0,
  navigationPropsGetter: () => {}
};
CarouselNext.propTypes = {
  itemMinWidth: _propTypes.default.number.isRequired,
  itemsPerPage: _propTypes.default.number,
  baseGap: _propTypes.default.number.isRequired,
  children: _propTypes.default.node,
  viewportIsMOrLess: _propTypes.default.bool.isRequired,
  viewportIsXSOrLess: _propTypes.default.bool.isRequired,
  showOtherPages: _propTypes.default.bool,
  pagesClassName: _propTypes.default.string,
  pageClickText: _propTypes.default.func,
  loop: _propTypes.default.bool,
  cycle: _propTypes.default.bool,
  exportVisibilityProps: _propTypes.default.bool,
  shadowSize: _propTypes.default.number,
  navigationPropsGetter: _propTypes.default.func
};