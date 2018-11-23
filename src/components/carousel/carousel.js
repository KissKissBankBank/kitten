"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Carousel = exports.checkPage = exports.getNumPagesForColumnsAndDataLength = exports.getNumColumnsForWidth = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _radium = _interopRequireDefault(require("radium"));

var _range = require("kitten/helpers/utils/range");

var _mediaQueries = require("kitten/hoc/media-queries");

var _gridConfig = require("kitten/constants/grid-config");

var _colorsConfig = _interopRequireDefault(require("kitten/constants/colors-config"));

var _grid = require("kitten/components/grid/grid");

var _buttonIcon = require("kitten/components/buttons/button-icon");

var _arrowIcon = require("kitten/components/icons/arrow-icon");

var _carouselInner = require("kitten/components/carousel/carousel-inner");

var getNumColumnsForWidth = function getNumColumnsForWidth(width, itemMinWidth, itemMarginBetween) {
  if (width === 0 || itemMinWidth === 0) {
    return 0;
  }

  var remainingWidthWithOneCard = width - itemMinWidth;
  var itemWidthAndMargin = itemMinWidth + itemMarginBetween;
  var numColumns = Math.floor(remainingWidthWithOneCard / itemWidthAndMargin) + 1;
  return numColumns;
};

exports.getNumColumnsForWidth = getNumColumnsForWidth;

var getNumPagesForColumnsAndDataLength = function getNumPagesForColumnsAndDataLength(dataLength, numColumns) {
  if (dataLength === 0 || numColumns === 0) {
    return 0;
  }

  var numPages = Math.ceil(dataLength / numColumns);
  return numPages;
};

exports.getNumPagesForColumnsAndDataLength = getNumPagesForColumnsAndDataLength;

var checkPage = function checkPage(numPages, newPage) {
  if (numPages < 1) return 0;

  if (newPage < 0) {
    return 0;
  } else if (newPage >= numPages) {
    return numPages - 1;
  } else {
    return newPage;
  }
};

exports.checkPage = checkPage;

var getMarginBetweenAccordingToViewport = function getMarginBetweenAccordingToViewport(baseItemMarginBetween, viewportIsMobile, viewportIsTabletOrLess) {
  if (viewportIsMobile) {
    return _gridConfig.CONTAINER_PADDING_MOBILE / 2;
  } else if (viewportIsTabletOrLess) {
    return _gridConfig.CONTAINER_PADDING / 2;
  } else {
    return baseItemMarginBetween;
  }
};

var CarouselBase =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(CarouselBase, _React$Component);

  function CarouselBase(props, context) {
    var _this;

    (0, _classCallCheck2.default)(this, CarouselBase);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(CarouselBase).call(this, props, context));

    _this.onResizeInner = function (widthInner) {
      var _this$props = _this.props,
          data = _this$props.data,
          itemMinWidth = _this$props.itemMinWidth,
          baseItemMarginBetween = _this$props.baseItemMarginBetween,
          viewportIsMobile = _this$props.viewportIsMobile,
          viewportIsTabletOrLess = _this$props.viewportIsTabletOrLess;
      var itemMarginBetween = getMarginBetweenAccordingToViewport(baseItemMarginBetween, viewportIsMobile, viewportIsTabletOrLess);
      var numColumns = getNumColumnsForWidth(widthInner, itemMinWidth, itemMarginBetween);
      var numPages = getNumPagesForColumnsAndDataLength(data.length, numColumns);

      if (_this.state.numColumns !== numColumns || _this.state.numPages !== numPages) {
        var indexPageVisible = _this.state.indexPageVisible > numPages - 1 ? numPages - 1 : _this.state.indexPageVisible;

        _this.setState({
          numColumns: numColumns,
          numPages: numPages,
          indexPageVisible: indexPageVisible
        });
      }
    };

    _this.goNextPage = function () {
      var _this$state = _this.state,
          numPages = _this$state.numPages,
          indexPageVisible = _this$state.indexPageVisible;
      var newPage = checkPage(numPages, indexPageVisible + 1);

      _this.setState({
        indexPageVisible: newPage
      });
    };

    _this.goPrevPage = function () {
      var _this$state2 = _this.state,
          numPages = _this$state2.numPages,
          indexPageVisible = _this$state2.indexPageVisible;
      var newPage = checkPage(numPages, indexPageVisible - 1);

      _this.setState({
        indexPageVisible: newPage
      });
    };

    _this.goToPage = function (indexPageToGo) {
      var numPages = _this.state.numPages;
      var newPage = checkPage(numPages, indexPageToGo);

      _this.setState({
        indexPageVisible: newPage
      });
    };

    _this.renderCarouselInner = function () {
      var _this$props2 = _this.props,
          data = _this$props2.data,
          itemMinWidth = _this$props2.itemMinWidth,
          renderItem = _this$props2.renderItem,
          baseItemMarginBetween = _this$props2.baseItemMarginBetween,
          viewportIsMobile = _this$props2.viewportIsMobile,
          viewportIsTabletOrLess = _this$props2.viewportIsTabletOrLess;
      var _this$state3 = _this.state,
          indexPageVisible = _this$state3.indexPageVisible,
          numColumns = _this$state3.numColumns,
          numPages = _this$state3.numPages;
      var itemMarginBetween = getMarginBetweenAccordingToViewport(baseItemMarginBetween, viewportIsMobile, viewportIsTabletOrLess);
      return _react.default.createElement(_carouselInner.CarouselInner, {
        data: data,
        itemMinWidth: itemMinWidth,
        renderItem: renderItem,
        indexPageVisible: indexPageVisible,
        numColumns: numColumns,
        numPages: numPages,
        itemMarginBetween: itemMarginBetween,
        siblingPageVisible: viewportIsTabletOrLess,
        onResizeInner: _this.onResizeInner,
        goToPage: _this.goToPage
      });
    };

    _this.renderPagination = function () {
      var _this$props3 = _this.props,
          baseItemMarginBetween = _this$props3.baseItemMarginBetween,
          viewportIsTabletOrLess = _this$props3.viewportIsTabletOrLess,
          viewportIsMobile = _this$props3.viewportIsMobile,
          hidePaginationOnMobile = _this$props3.hidePaginationOnMobile;
      var _this$state4 = _this.state,
          indexPageVisible = _this$state4.indexPageVisible,
          numPages = _this$state4.numPages;
      var itemMarginBetween = getMarginBetweenAccordingToViewport(baseItemMarginBetween, viewportIsMobile, viewportIsTabletOrLess);
      if (viewportIsMobile && hidePaginationOnMobile) return;
      if (numPages <= 1) return;

      if (viewportIsMobile) {
        var rangePage = (0, _range.createRangeFromZeroTo)(numPages);
        return _react.default.createElement("div", {
          style: styles.pageControl
        }, rangePage.map(function (index) {
          return _react.default.createElement("div", {
            key: index,
            style: [styles.pageDot, indexPageVisible === index && styles.pageDotActive]
          });
        }), _react.default.createElement("div", {
          key: "prev",
          style: styles.pageControlButtonPrev,
          onClick: _this.goPrevPage
        }), _react.default.createElement("div", {
          key: "next",
          style: styles.pageControlButtonNext,
          onClick: _this.goNextPage
        }));
      }

      return _react.default.createElement("div", {
        style: [styles.carouselPagination, viewportIsTabletOrLess && styles.carouselPaginationTablet, {
          marginTop: viewportIsTabletOrLess ? itemMarginBetween : 0,
          marginLeft: viewportIsTabletOrLess ? itemMarginBetween * 2 : 0
        }]
      }, _react.default.createElement(_buttonIcon.ButtonIcon, {
        modifier: "beryllium",
        onClick: _this.goPrevPage,
        key: "left-".concat(indexPageVisible),
        disabled: indexPageVisible < 1 || numPages < 1,
        style: styles.carouselButtonPagination
      }, _react.default.createElement(_arrowIcon.ArrowIcon, {
        className: "k-ButtonIcon__svg",
        direction: "left"
      })), _react.default.createElement(_buttonIcon.ButtonIcon, {
        modifier: "beryllium",
        onClick: _this.goNextPage,
        key: "right-".concat(indexPageVisible),
        disabled: indexPageVisible >= numPages - 1,
        style: styles.carouselButtonPagination
      }, _react.default.createElement(_arrowIcon.ArrowIcon, {
        className: "k-ButtonIcon__svg",
        direction: "right"
      })));
    };

    _this.state = {
      indexPageVisible: 0,
      numColumns: 3,
      numPages: getNumPagesForColumnsAndDataLength(_this.props.data.length, 3)
    };
    return _this;
  }

  (0, _createClass2.default)(CarouselBase, [{
    key: "render",
    value: function render() {
      if (!this.props.data || !this.props.data.length) return null;
      var _this$props4 = this.props,
          withoutLeftOffset = _this$props4.withoutLeftOffset,
          viewportIsTabletOrLess = _this$props4.viewportIsTabletOrLess;

      if (viewportIsTabletOrLess) {
        return _react.default.createElement("div", null, this.renderCarouselInner(), this.renderPagination());
      }

      return _react.default.createElement(_grid.Grid, null, _react.default.createElement(_grid.GridCol, {
        col: withoutLeftOffset ? '11' : '10',
        offset: withoutLeftOffset ? '0' : '1'
      }, this.renderCarouselInner()), _react.default.createElement(_grid.GridCol, {
        col: "1"
      }, this.renderPagination()));
    }
  }]);
  return CarouselBase;
}(_react.default.Component);

var styles = {
  carouselPagination: {
    display: 'flex',
    flexDirection: 'column-reverse',
    alignItems: 'flex-start'
  },
  carouselPaginationTablet: {
    flexDirection: 'row'
  },
  carouselButtonPagination: {
    marginBottom: 2,
    marginRight: 2,
    marginLeft: 0,
    marginTop: 0
  },
  pageControl: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'relative',
    paddingTop: _gridConfig.CONTAINER_PADDING_MOBILE / 2,
    paddingBottom: _gridConfig.CONTAINER_PADDING_MOBILE / 2
  },
  pageControlButtonPrev: {
    position: 'absolute',
    top: _gridConfig.CONTAINER_PADDING_MOBILE / 4,
    bottom: _gridConfig.CONTAINER_PADDING_MOBILE / 4,
    left: _gridConfig.CONTAINER_PADDING_MOBILE,
    right: '50%',
    WebkitTapHighlightColor: 'transparent'
  },
  pageControlButtonNext: {
    position: 'absolute',
    top: _gridConfig.CONTAINER_PADDING_MOBILE / 4,
    bottom: _gridConfig.CONTAINER_PADDING_MOBILE / 4,
    right: _gridConfig.CONTAINER_PADDING_MOBILE,
    left: '50%',
    WebkitTapHighlightColor: 'transparent'
  },
  pageDot: {
    width: 8,
    height: 8,
    marginLeft: 4,
    marginRight: 4,
    borderRadius: 4,
    backgroundColor: _colorsConfig.default.font1
  },
  pageDotActive: {
    backgroundColor: _colorsConfig.default.primary2
  }
};
CarouselBase.defaultProps = {
  withoutLeftOffset: false,
  hidePaginationOnMobile: false
};
CarouselBase.propTypes = {
  itemMinWidth: _propTypes.default.number.isRequired,
  baseItemMarginBetween: _propTypes.default.number.isRequired,
  renderItem: _propTypes.default.func.isRequired,
  viewportIsTabletOrLess: _propTypes.default.bool.isRequired,
  viewportIsMobile: _propTypes.default.bool.isRequired,
  hidePaginationOnMobile: _propTypes.default.bool
};
var Carousel = (0, _mediaQueries.mediaQueries)((0, _radium.default)(CarouselBase), {
  viewportIsMobile: true,
  viewportIsTabletOrLess: true
});
exports.Carousel = Carousel;