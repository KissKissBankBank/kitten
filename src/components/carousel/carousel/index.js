"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Carousel = exports.checkPageLoop = exports.checkPage = exports.getNumberOfPagesForColumnsAndDataLength = exports.getNumberOfItemsPerPageForWidth = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _deprecated = _interopRequireDefault(require("prop-types-extra/lib/deprecated"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _range = require("../../../helpers/utils/range");

var _mediaQueries = require("../../../hoc/media-queries");

var _gridConfig = require("../../../constants/grid-config");

var _button = require("../../../components/buttons/button/button");

var _arrowIcon = require("../../../components/icons/arrow-icon");

var _carouselInner = require("./components/carousel-inner");

var _visuallyHidden = require("../../../components/accessibility/visually-hidden");

var _classnames = _interopRequireDefault(require("classnames"));

var _grid = require("../../../components/grid/grid");

var _styles = require("./styles");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var getDataLength = function getDataLength(_ref) {
  var data = _ref.data,
      children = _ref.children;
  if (!!data) return data.length;
  return _react.default.Children.count(children);
};

var getNumberOfItemsPerPageForWidth = function getNumberOfItemsPerPageForWidth(width, itemMinWidth, itemMarginBetween, itemsPerPage) {
  if (!!itemsPerPage && itemMinWidth === 0) return itemsPerPage;
  if (width === 0 || itemMinWidth === 0) return 0;
  var remainingWidthWithOneCard = width - itemMinWidth;
  var itemWidthAndMargin = itemMinWidth + itemMarginBetween;
  var numberOfItemsPerPage = Math.floor(remainingWidthWithOneCard / itemWidthAndMargin) + 1;
  return numberOfItemsPerPage;
};

exports.getNumberOfItemsPerPageForWidth = getNumberOfItemsPerPageForWidth;

var getNumberOfPagesForColumnsAndDataLength = function getNumberOfPagesForColumnsAndDataLength(dataLength, numberOfItemsPerPage) {
  if (dataLength === 0 || numberOfItemsPerPage === 0) return 0;
  var numberOfPages = Math.ceil(dataLength / numberOfItemsPerPage);
  return numberOfPages;
};

exports.getNumberOfPagesForColumnsAndDataLength = getNumberOfPagesForColumnsAndDataLength;

var checkPage = function checkPage(numberOfPages, newPage) {
  if (numberOfPages < 1) return 0;
  if (newPage < 0) return 0;
  if (newPage >= numberOfPages) return numberOfPages - 1;
  return newPage;
};

exports.checkPage = checkPage;

var checkPageLoop = function checkPageLoop(numberOfPages, newPage) {
  if (numberOfPages < 1) return 0;
  if (newPage < 0) return numberOfPages - 1;
  if (newPage >= numberOfPages) return 0;
  return newPage;
};

exports.checkPageLoop = checkPageLoop;

var getMarginBetweenAccordingToViewport = function getMarginBetweenAccordingToViewport(baseItemMarginBetween, viewportIsXSOrLess, viewportIsMOrLess) {
  if (viewportIsXSOrLess) return _gridConfig.CONTAINER_PADDING_MOBILE / 2;
  if (viewportIsMOrLess) return _gridConfig.CONTAINER_PADDING / 2;
  return baseItemMarginBetween;
};

var CarouselBase = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(CarouselBase, _Component);

  var _super = _createSuper(CarouselBase);

  function CarouselBase() {
    var _this;

    (0, _classCallCheck2.default)(this, CarouselBase);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      currentPageIndex: 0,
      numberOfItemsPerPage: _this.props.itemsPerPage > 0 ? _this.props.itemsPerPage : 3,
      numberOfPages: getNumberOfPagesForColumnsAndDataLength(getDataLength({
        data: _this.props.data,
        children: _this.props.children
      }), _this.props.itemsPerPage > 0 ? _this.props.itemsPerPage : 3)
    };
    _this.viewedPages = new Set();

    _this.onResizeInner = function (innerWidth) {
      var _this$props = _this.props,
          data = _this$props.data,
          children = _this$props.children,
          itemMinWidth = _this$props.itemMinWidth,
          itemsPerPage = _this$props.itemsPerPage,
          baseItemMarginBetween = _this$props.baseItemMarginBetween,
          viewportIsXSOrLess = _this$props.viewportIsXSOrLess,
          viewportIsMOrLess = _this$props.viewportIsMOrLess;
      var itemMarginBetween = getMarginBetweenAccordingToViewport(baseItemMarginBetween, viewportIsXSOrLess, viewportIsMOrLess);
      var numberOfItemsPerPage = getNumberOfItemsPerPageForWidth(innerWidth, itemMinWidth, itemMarginBetween, itemsPerPage);
      var numberOfPages = getNumberOfPagesForColumnsAndDataLength(getDataLength({
        data: data,
        children: children
      }), numberOfItemsPerPage);

      if (_this.state.numberOfItemsPerPage !== numberOfItemsPerPage || _this.state.numberOfPages !== numberOfPages) {
        var currentPageIndex = _this.state.currentPageIndex > numberOfPages - 1 ? numberOfPages - 1 : _this.state.currentPageIndex;

        _this.setState({
          numberOfItemsPerPage: numberOfItemsPerPage,
          numberOfPages: numberOfPages,
          currentPageIndex: currentPageIndex
        });
      }
    };

    _this.goNextPage = function () {
      var loop = _this.props.loop;
      var _this$state = _this.state,
          numberOfPages = _this$state.numberOfPages,
          currentPageIndex = _this$state.currentPageIndex;
      var newPage = loop ? checkPageLoop(numberOfPages, currentPageIndex + 1) : checkPage(numberOfPages, currentPageIndex + 1);

      _this.viewedPages.add(newPage);

      _this.setState({
        currentPageIndex: newPage
      });
    };

    _this.goPrevPage = function () {
      var loop = _this.props.loop;
      var _this$state2 = _this.state,
          numberOfPages = _this$state2.numberOfPages,
          currentPageIndex = _this$state2.currentPageIndex;
      var newPage = loop ? checkPageLoop(numberOfPages, currentPageIndex - 1) : checkPage(numberOfPages, currentPageIndex - 1);

      _this.viewedPages.add(newPage);

      _this.setState({
        currentPageIndex: newPage
      });
    };

    _this.goToPage = function (indexPageToGo) {
      var loop = _this.props.loop;
      var numberOfPages = _this.state.numberOfPages;
      var newPage = loop ? checkPageLoop(numberOfPages, indexPageToGo) : checkPage(numberOfPages, indexPageToGo);

      _this.viewedPages.add(newPage);

      _this.setState({
        currentPageIndex: newPage
      });
    };

    _this.renderCarouselInner = function () {
      var _this$props2 = _this.props,
          data = _this$props2.data,
          renderItem = _this$props2.renderItem,
          children = _this$props2.children,
          baseItemMarginBetween = _this$props2.baseItemMarginBetween,
          viewportIsXSOrLess = _this$props2.viewportIsXSOrLess,
          viewportIsMOrLess = _this$props2.viewportIsMOrLess,
          pagesClassName = _this$props2.pagesClassName,
          exportVisibilityProps = _this$props2.exportVisibilityProps;
      var _this$state3 = _this.state,
          currentPageIndex = _this$state3.currentPageIndex,
          numberOfItemsPerPage = _this$state3.numberOfItemsPerPage,
          numberOfPages = _this$state3.numberOfPages;
      var itemMarginBetween = getMarginBetweenAccordingToViewport(baseItemMarginBetween, viewportIsXSOrLess, viewportIsMOrLess);
      var items = children; // legacy mode

      if (!!data && !!renderItem) {
        items = (0, _toConsumableArray2.default)(data).map(function (item, index) {
          return /*#__PURE__*/_react.default.createElement(_react.Fragment, {
            key: item
          }, renderItem({
            item: data[index]
          }));
        });
      }

      return /*#__PURE__*/_react.default.createElement(_carouselInner.CarouselInner, {
        currentPageIndex: currentPageIndex,
        exportVisibilityProps: exportVisibilityProps,
        goToPage: _this.goToPage,
        itemMarginBetween: itemMarginBetween,
        items: items,
        numberOfItemsPerPage: numberOfItemsPerPage,
        numberOfPages: numberOfPages,
        onResizeInner: _this.onResizeInner,
        pagesClassName: pagesClassName,
        viewedPages: _this.viewedPages
      });
    };

    _this.renderPagination = function () {
      var _this$props3 = _this.props,
          viewportIsXSOrLess = _this$props3.viewportIsXSOrLess,
          hidePagination = _this$props3.hidePagination,
          hidePaginationOnMobile = _this$props3.hidePaginationOnMobile,
          prevButtonText = _this$props3.prevButtonText,
          nextButtonText = _this$props3.nextButtonText,
          tinyButtons = _this$props3.tinyButtons,
          firstButtonText = _this$props3.firstButtonText,
          lastButtonText = _this$props3.lastButtonText,
          showPageSquares = _this$props3.showPageSquares,
          preferCompletePaginationOnMobile = _this$props3.preferCompletePaginationOnMobile,
          loop = _this$props3.loop;
      var _this$state4 = _this.state,
          currentPageIndex = _this$state4.currentPageIndex,
          numberOfPages = _this$state4.numberOfPages;
      if (hidePagination) return;
      if (viewportIsXSOrLess && hidePaginationOnMobile) return;
      if (numberOfPages <= 1) return;

      if (viewportIsXSOrLess && !preferCompletePaginationOnMobile) {
        var rangePage = (0, _range.createRangeFromZeroTo)(numberOfPages);
        return /*#__PURE__*/_react.default.createElement("div", {
          className: "k-Carousel__pageControl"
        }, rangePage.map(function (index) {
          return /*#__PURE__*/_react.default.createElement("div", {
            className: (0, _classnames.default)('k-Carousel__pageControl__pageDot', {
              'k-Carousel__pageControl__pageDot--isVisible': currentPageIndex === index
            }),
            key: "pageDotIndex_".concat(index)
          });
        }), /*#__PURE__*/_react.default.createElement("div", {
          onClick: _this.goPrevPage,
          className: "k-Carousel__pageControl__controlButton k-Carousel__pageControl__controlButton--prev"
        }), /*#__PURE__*/_react.default.createElement("div", {
          onClick: _this.goNextPage,
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
        icon: true,
        modifier: "beryllium",
        tiny: tinyButtons,
        onClick: _this.goPrevPage,
        disabled: !loop && (currentPageIndex < 1 || numberOfPages < 1)
      }, /*#__PURE__*/_react.default.createElement(_visuallyHidden.VisuallyHidden, null, loop && (currentPageIndex < 1 || numberOfPages < 1) ? lastButtonText : prevButtonText), /*#__PURE__*/_react.default.createElement(_arrowIcon.ArrowIcon, {
        version: "solid",
        direction: "left",
        "aria-hidden": true
      })), /*#__PURE__*/_react.default.createElement(_button.Button, {
        type: "button",
        className: "k-Carousel__pagination__button",
        icon: true,
        modifier: "beryllium",
        tiny: tinyButtons,
        onClick: _this.goNextPage,
        disabled: !loop && currentPageIndex >= numberOfPages - 1
      }, /*#__PURE__*/_react.default.createElement(_visuallyHidden.VisuallyHidden, null, loop && currentPageIndex >= numberOfPages - 1 ? firstButtonText : nextButtonText), /*#__PURE__*/_react.default.createElement(_arrowIcon.ArrowIcon, {
        version: "solid",
        direction: "right",
        "aria-hidden": true
      }))), showPageSquares && /*#__PURE__*/_react.default.createElement("div", {
        className: "k-Carousel__pagination__squaresContainer"
      }, (0, _range.createRangeFromZeroTo)(numberOfPages).map(function (index) {
        return /*#__PURE__*/_react.default.createElement("div", {
          key: index,
          className: (0, _classnames.default)('k-Carousel__pagination__square', {
            'k-Carousel__pagination__square--isActive': index === currentPageIndex
          })
        });
      })));
    };

    return _this;
  }

  (0, _createClass2.default)(CarouselBase, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.viewedPages.add(0);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          data = _this$props4.data,
          renderItem = _this$props4.renderItem,
          withoutLeftOffset = _this$props4.withoutLeftOffset,
          baseItemMarginBetween = _this$props4.baseItemMarginBetween,
          children = _this$props4.children,
          className = _this$props4.className,
          paginationPosition = _this$props4.paginationPosition,
          showOtherPages = _this$props4.showOtherPages,
          itemMinWidth = _this$props4.itemMinWidth;
      if (getDataLength({
        data: data,
        children: children
      }) === 0) return null;
      var commonProps = {
        baseItemMarginBetween: baseItemMarginBetween,
        itemMinWidth: itemMinWidth,
        numberOfItemsPerPage: this.state.numberOfItemsPerPage,
        numberOfPages: this.state.numberOfPages
      }; // legacy mode

      if (!!data && !!renderItem) {
        return /*#__PURE__*/_react.default.createElement(_styles.StyledCarouselContainer, (0, _extends2.default)({}, commonProps, {
          className: (0, _classnames.default)('k-Carousel', className, 'k-LegacyCarousel')
        }), /*#__PURE__*/_react.default.createElement(_grid.Grid, null, /*#__PURE__*/_react.default.createElement(_grid.GridCol, {
          col: "12",
          "col-l": withoutLeftOffset ? '11' : '10',
          "offset-l": withoutLeftOffset ? '0' : '1'
        }, this.renderCarouselInner()), /*#__PURE__*/_react.default.createElement(_grid.GridCol, {
          col: "12",
          "col-l": "1"
        }, this.renderPagination())));
      }

      return /*#__PURE__*/_react.default.createElement(_styles.StyledCarouselContainer, (0, _extends2.default)({}, commonProps, {
        paginationPosition: paginationPosition,
        className: (0, _classnames.default)('k-Carousel', className, {
          'k-Carousel--showOtherPages': showOtherPages
        })
      }), this.renderCarouselInner(), this.renderPagination());
    }
  }]);
  return CarouselBase;
}(_react.Component);

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
  firstButtonText: 'First items',
  lastButtonText: 'Last items',
  showPageSquares: false,
  tinyButtons: false,
  loop: false,
  exportVisibilityProps: false
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
  tinyButtons: _propTypes.default.bool,
  firstButtonText: _propTypes.default.string,
  lastButtonText: _propTypes.default.string,
  showPageSquares: _propTypes.default.bool,
  loop: _propTypes.default.bool,
  exportVisibilityProps: _propTypes.default.bool,
  data: (0, _deprecated.default)(_propTypes.default.array, 'Provide `Carousel` with children instead of data/renderItem'),
  renderItem: (0, _deprecated.default)(_propTypes.default.func, 'Provide `Carousel` with children instead of data/renderItem'),
  withoutLeftOffset: (0, _deprecated.default)(_propTypes.default.bool, 'Provide `Carousel` with children instead of data/renderItem')
};

var positionsPropTypes = _propTypes.default.oneOf(['top', 'right', 'bottom', 'left', 'bottom-left', 'bottom-right']);

var Carousel = (0, _mediaQueries.withMediaQueries)({
  viewportIsXSOrLess: true,
  viewportIsMOrLess: true,
  exposedMethods: ['goToPage']
})(CarouselBase);
exports.Carousel = Carousel;