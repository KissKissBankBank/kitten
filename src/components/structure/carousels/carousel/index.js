"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.getNumberOfPagesForColumnsAndDataLength = exports.getNumberOfItemsPerPageForWidth = exports.checkPageLoop = exports.checkPage = exports.Carousel = void 0;

var _react = _interopRequireWildcard(require("react"));

var _deprecated = _interopRequireDefault(require("prop-types-extra/lib/deprecated"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _range = require("../../../../helpers/utils/range");

var _mediaQueries = require("../../../../hoc/media-queries");

var _gridConfig = require("../../../../constants/grid-config");

var _button = require("../../../action/button");

var _arrowIcon = require("../../../graphics/icons/arrow-icon");

var _carouselInner = require("./components/carousel-inner");

var _visuallyHidden = require("../../../accessibility/visually-hidden");

var _classnames = _interopRequireDefault(require("classnames"));

var _grid = require("../../../layout/grid");

var _typography = require("../../../../helpers/utils/typography");

var _styles = require("./styles");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const getDataLength = _ref => {
  let {
    data,
    children
  } = _ref;
  if (!!data) return data.length;
  return _react.default.Children.count(children);
};

const getNumberOfItemsPerPageForWidth = (width, itemMinWidth, itemMarginBetween, itemsPerPage) => {
  if (!!itemsPerPage && itemMinWidth === 0) return itemsPerPage;
  if (width === 0 || itemMinWidth === 0) return 0;
  const remainingWidthWithOneCard = width - itemMinWidth;
  const itemWidthAndMargin = itemMinWidth + itemMarginBetween;
  const numberOfItemsPerPage = Math.floor(remainingWidthWithOneCard / itemWidthAndMargin) + 1;
  return numberOfItemsPerPage;
};

exports.getNumberOfItemsPerPageForWidth = getNumberOfItemsPerPageForWidth;

const getNumberOfPagesForColumnsAndDataLength = (dataLength, numberOfItemsPerPage) => {
  if (dataLength === 0 || numberOfItemsPerPage === 0) return 0;
  const numberOfPages = Math.ceil(dataLength / numberOfItemsPerPage);
  return numberOfPages;
};

exports.getNumberOfPagesForColumnsAndDataLength = getNumberOfPagesForColumnsAndDataLength;

const checkPage = (numberOfPages, newPage) => {
  if (numberOfPages < 1) return 0;
  if (newPage < 0) return 0;
  if (newPage >= numberOfPages) return numberOfPages - 1;
  return newPage;
};

exports.checkPage = checkPage;

const checkPageLoop = (numberOfPages, newPage) => {
  if (numberOfPages < 1) return 0;
  if (newPage < 0) return numberOfPages - 1;
  if (newPage >= numberOfPages) return 0;
  return newPage;
};

exports.checkPageLoop = checkPageLoop;

const getMarginBetweenAccordingToViewport = (baseItemMarginBetween, viewportIsXSOrLess, viewportIsMOrLess) => {
  if (viewportIsXSOrLess) return _gridConfig.CONTAINER_PADDING_THIN / 2 - _styles.OUTLINE_PLUS_OFFSET * 2;
  if (viewportIsMOrLess) return _gridConfig.CONTAINER_PADDING / 2 - _styles.OUTLINE_PLUS_OFFSET * 2;
  return baseItemMarginBetween - _styles.OUTLINE_PLUS_OFFSET * 2;
};

class CarouselBase extends _react.Component {
  constructor() {
    super(...arguments);
    this.state = {
      currentPageIndex: 0,
      numberOfItemsPerPage: this.props.itemsPerPage > 0 ? this.props.itemsPerPage : 3,
      numberOfPages: getNumberOfPagesForColumnsAndDataLength(getDataLength({
        data: this.props.data,
        children: this.props.children
      }), this.props.itemsPerPage > 0 ? this.props.itemsPerPage : 3)
    };
    this.viewedPages = new Set();

    this.onResizeInner = innerWidth => {
      const {
        data,
        children,
        itemMinWidth,
        itemsPerPage,
        baseItemMarginBetween,
        viewportIsXSOrLess,
        viewportIsMOrLess
      } = this.props;
      const itemMarginBetween = getMarginBetweenAccordingToViewport(baseItemMarginBetween, viewportIsXSOrLess, viewportIsMOrLess);
      const numberOfItemsPerPage = getNumberOfItemsPerPageForWidth(innerWidth, itemMinWidth, itemMarginBetween, itemsPerPage);
      const numberOfPages = getNumberOfPagesForColumnsAndDataLength(getDataLength({
        data,
        children
      }), numberOfItemsPerPage);

      if (this.state.numberOfItemsPerPage !== numberOfItemsPerPage || this.state.numberOfPages !== numberOfPages) {
        const currentPageIndex = this.state.currentPageIndex > numberOfPages - 1 ? numberOfPages - 1 : this.state.currentPageIndex;
        this.setState({
          numberOfItemsPerPage,
          numberOfPages,
          currentPageIndex
        });
      }
    };

    this.goNextPage = () => {
      const {
        loop
      } = this.props;
      const {
        numberOfPages,
        currentPageIndex
      } = this.state;
      const newPage = loop ? checkPageLoop(numberOfPages, currentPageIndex + 1) : checkPage(numberOfPages, currentPageIndex + 1);
      this.viewedPages.add(newPage);
      this.setState({
        currentPageIndex: newPage
      });
    };

    this.goPrevPage = () => {
      const {
        loop
      } = this.props;
      const {
        numberOfPages,
        currentPageIndex
      } = this.state;
      const newPage = loop ? checkPageLoop(numberOfPages, currentPageIndex - 1) : checkPage(numberOfPages, currentPageIndex - 1);
      this.viewedPages.add(newPage);
      this.setState({
        currentPageIndex: newPage
      });
    };

    this.goToPage = indexPageToGo => {
      const {
        loop
      } = this.props;
      const {
        numberOfPages
      } = this.state;
      const newPage = loop ? checkPageLoop(numberOfPages, indexPageToGo) : checkPage(numberOfPages, indexPageToGo);
      this.viewedPages.add(newPage);
      this.setState({
        currentPageIndex: newPage
      });
    };

    this.renderCarouselInner = () => {
      const {
        data,
        renderItem,
        children,
        baseItemMarginBetween,
        viewportIsXSOrLess,
        viewportIsMOrLess,
        pagesClassName,
        exportVisibilityProps,
        pageClickText
      } = this.props;
      const {
        currentPageIndex,
        numberOfItemsPerPage,
        numberOfPages
      } = this.state;
      const itemMarginBetween = getMarginBetweenAccordingToViewport(baseItemMarginBetween, viewportIsXSOrLess, viewportIsMOrLess);
      let items = children; // legacy mode

      if (!!data && !!renderItem) {
        items = [...data].map((item, index) => /*#__PURE__*/_react.default.createElement(_react.Fragment, {
          key: item
        }, renderItem({
          item: data[index]
        })));
      }

      return /*#__PURE__*/_react.default.createElement(_carouselInner.CarouselInner, {
        currentPageIndex: currentPageIndex,
        exportVisibilityProps: exportVisibilityProps,
        goToPage: this.goToPage,
        itemMarginBetween: itemMarginBetween,
        items: items,
        numberOfItemsPerPage: numberOfItemsPerPage,
        numberOfPages: numberOfPages,
        onResizeInner: this.onResizeInner,
        pagesClassName: pagesClassName,
        viewedPages: this.viewedPages,
        pageClickText: pageClickText
      });
    };

    this.renderPagination = () => {
      const {
        viewportIsXSOrLess,
        hidePagination,
        hidePaginationOnMobile,
        prevButtonText,
        nextButtonText,
        smallButtons,
        firstButtonText,
        lastButtonText,
        showPageSquares,
        preferCompletePaginationOnMobile,
        loop
      } = this.props;
      const {
        currentPageIndex,
        numberOfPages
      } = this.state;
      if (hidePagination) return;
      if (viewportIsXSOrLess && hidePaginationOnMobile) return;
      if (numberOfPages <= 1) return;

      if (viewportIsXSOrLess && !preferCompletePaginationOnMobile) {
        const rangePage = (0, _range.createRangeFromZeroTo)(numberOfPages);
        return /*#__PURE__*/_react.default.createElement("div", {
          className: "k-Carousel__pageControl"
        }, rangePage.map(index => /*#__PURE__*/_react.default.createElement("div", {
          className: (0, _classnames.default)('k-Carousel__pageControl__pageDot', {
            'k-Carousel__pageControl__pageDot--isVisible': currentPageIndex === index
          }),
          key: "pageDotIndex_" + index
        })), /*#__PURE__*/_react.default.createElement("div", {
          onClick: this.goPrevPage,
          className: "k-Carousel__pageControl__controlButton k-Carousel__pageControl__controlButton--prev"
        }), /*#__PURE__*/_react.default.createElement("div", {
          onClick: this.goNextPage,
          className: "k-Carousel__pageControl__controlButton k-Carousel__pageControl__controlButton--next"
        }));
      }

      return /*#__PURE__*/_react.default.createElement("div", {
        className: "k-Carousel__pagination"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "k-Carousel__pagination__buttonContainer"
      }, /*#__PURE__*/_react.default.createElement(_button.Button, {
        type: "button",
        className: "k-Carousel__pagination__button",
        fit: "icon",
        modifier: "beryllium",
        size: smallButtons ? 'small' : 'medium',
        onClick: this.goPrevPage,
        disabled: !loop && (currentPageIndex < 1 || numberOfPages < 1)
      }, /*#__PURE__*/_react.default.createElement(_visuallyHidden.VisuallyHidden, null, loop && (currentPageIndex < 1 || numberOfPages < 1) ? lastButtonText : prevButtonText), /*#__PURE__*/_react.default.createElement(_arrowIcon.ArrowIcon, {
        direction: "left",
        "aria-hidden": true
      })), /*#__PURE__*/_react.default.createElement(_button.Button, {
        type: "button",
        className: "k-Carousel__pagination__button",
        fit: "icon",
        modifier: "beryllium",
        size: smallButtons ? 'small' : 'medium',
        onClick: this.goNextPage,
        disabled: !loop && currentPageIndex >= numberOfPages - 1
      }, /*#__PURE__*/_react.default.createElement(_visuallyHidden.VisuallyHidden, null, loop && currentPageIndex >= numberOfPages - 1 ? firstButtonText : nextButtonText), /*#__PURE__*/_react.default.createElement(_arrowIcon.ArrowIcon, {
        direction: "right",
        "aria-hidden": true
      }))), showPageSquares && /*#__PURE__*/_react.default.createElement("div", {
        className: "k-Carousel__pagination__squaresContainer"
      }, (0, _range.createRangeFromZeroTo)(numberOfPages).map(index => /*#__PURE__*/_react.default.createElement("div", {
        key: index,
        className: (0, _classnames.default)('k-Carousel__pagination__square', {
          'k-Carousel__pagination__square--isActive': index === currentPageIndex
        })
      }))));
    };
  }

  componentDidMount() {
    this.viewedPages.add(0);
  }

  render() {
    const {
      data,
      renderItem,
      withoutLeftOffset,
      baseItemMarginBetween,
      children,
      className,
      paginationPosition,
      showOtherPages,
      itemMinWidth,
      style,
      shadowSize
    } = this.props;
    if (getDataLength({
      data,
      children
    }) === 0) return null; // legacy mode

    if (!!data && !!renderItem) {
      return /*#__PURE__*/_react.default.createElement(_styles.StyledCarouselContainer, {
        baseItemMarginBetween: baseItemMarginBetween,
        itemMinWidth: itemMinWidth,
        numberOfItemsPerPage: this.state.numberOfItemsPerPage,
        numberOfPages: this.state.numberOfPages,
        className: (0, _classnames.default)('k-Carousel', className, 'k-LegacyCarousel')
      }, /*#__PURE__*/_react.default.createElement(_grid.Grid, null, /*#__PURE__*/_react.default.createElement(_grid.GridCol, {
        col: "12",
        "col-l": withoutLeftOffset ? '11' : '10',
        "offset-l": withoutLeftOffset ? '0' : '1'
      }, this.renderCarouselInner()), /*#__PURE__*/_react.default.createElement(_grid.GridCol, {
        col: "12",
        "col-l": "1"
      }, this.renderPagination())));
    }

    return /*#__PURE__*/_react.default.createElement(_styles.StyledCarouselContainer, {
      style: { ...style,
        '--carousel-shadowSize': (0, _typography.pxToRem)(shadowSize) || null,
        '--carousel-baseItemMarginBetween': (0, _typography.pxToRem)(baseItemMarginBetween),
        '--carousel-numberOfItemsPerPage': this.state.numberOfItemsPerPage,
        '--carousel-numberOfPages': this.state.numberOfPages
      },
      paginationPosition: paginationPosition,
      className: (0, _classnames.default)('k-Carousel', className, {
        'k-Carousel--showOtherPages': showOtherPages
      })
    }, this.renderCarouselInner(), this.renderPagination());
  }

}

const positionsPropTypes = _propTypes.default.oneOf(['top', 'right', 'bottom', 'left', 'bottom-left', 'bottom-right']);

CarouselBase.defaultProps = {
  itemsPerPage: 0,
  hidePaginationOnMobile: false,
  hidePagination: false,
  showOtherPages: false,
  pagesClassName: null,
  preferCompletePaginationOnMobile: false,
  paginationPosition: {
    default: 'right',
    fromM: 'bottom'
  },
  prevButtonText: 'Previous items',
  nextButtonText: 'Next items',
  pageClickText: page => {
    return "Page " + page;
  },
  firstButtonText: 'First items',
  lastButtonText: 'Last items',
  showPageSquares: false,
  smallButtons: false,
  loop: false,
  exportVisibilityProps: false,
  shadowSize: 0
};
CarouselBase.propTypes = {
  itemMinWidth: _propTypes.default.number.isRequired,
  itemsPerPage: _propTypes.default.number,
  baseItemMarginBetween: _propTypes.default.number.isRequired,
  children: _propTypes.default.node,
  viewportIsMOrLess: _propTypes.default.bool.isRequired,
  viewportIsXSOrLess: _propTypes.default.bool.isRequired,
  hidePaginationOnMobile: _propTypes.default.bool,
  hidePagination: _propTypes.default.bool,
  showOtherPages: _propTypes.default.bool,
  pagesClassName: _propTypes.default.string,
  preferCompletePaginationOnMobile: _propTypes.default.bool,
  paginationPosition: _propTypes.default.shape({
    default: positionsPropTypes,
    fromXxs: positionsPropTypes,
    fromXs: positionsPropTypes,
    fromS: positionsPropTypes,
    fromM: positionsPropTypes,
    fromL: positionsPropTypes,
    fromXl: positionsPropTypes
  }),
  prevButtonText: _propTypes.default.string,
  nextButtonText: _propTypes.default.string,
  pageClickText: _propTypes.default.func,
  smallButtons: _propTypes.default.bool,
  firstButtonText: _propTypes.default.string,
  lastButtonText: _propTypes.default.string,
  showPageSquares: _propTypes.default.bool,
  loop: _propTypes.default.bool,
  exportVisibilityProps: _propTypes.default.bool,
  shadowSize: _propTypes.default.number,
  data: (0, _deprecated.default)(_propTypes.default.array, 'Provide `Carousel` with children instead of data/renderItem'),
  renderItem: (0, _deprecated.default)(_propTypes.default.func, 'Provide `Carousel` with children instead of data/renderItem'),
  withoutLeftOffset: (0, _deprecated.default)(_propTypes.default.bool, 'Provide `Carousel` with children instead of data/renderItem')
};
const Carousel = (0, _mediaQueries.withMediaQueries)({
  viewportIsXSOrLess: true,
  viewportIsMOrLess: true,
  exposedMethods: ['goToPage']
})(CarouselBase);
exports.Carousel = Carousel;