"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Carousel = exports.checkPageLoop = exports.checkPage = exports.getNumPagesForColumnsAndDataLength = exports.getNumColumnsForWidth = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _deprecated = _interopRequireDefault(require("prop-types-extra/lib/deprecated"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _typography = require("../../../helpers/utils/typography");

var _screenConfig = require("../../../constants/screen-config");

var _range = require("../../../helpers/utils/range");

var _mediaQueries = require("../../../hoc/media-queries");

var _gridConfig = require("../../../constants/grid-config");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _button = require("../../../components/buttons/button/button");

var _arrowIcon = require("../../../components/icons/arrow-icon");

var _carouselInner = require("./components/carousel-inner");

var _visuallyHidden = require("../../../components/accessibility/visually-hidden");

var _classnames = _interopRequireDefault(require("classnames"));

var _grid = require("../../../components/grid/grid");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var getDataLength = function getDataLength(_ref) {
  var data = _ref.data,
      children = _ref.children;
  if (!!data) return data.length;
  return _react.default.Children.count(children);
};

var getNumColumnsForWidth = function getNumColumnsForWidth(width, itemMinWidth, itemMarginBetween) {
  if (width === 0 || itemMinWidth === 0) return 0;
  var remainingWidthWithOneCard = width - itemMinWidth;
  var itemWidthAndMargin = itemMinWidth + itemMarginBetween;
  var numColumns = Math.floor(remainingWidthWithOneCard / itemWidthAndMargin) + 1;
  return numColumns;
};

exports.getNumColumnsForWidth = getNumColumnsForWidth;

var getNumPagesForColumnsAndDataLength = function getNumPagesForColumnsAndDataLength(dataLength, numColumns) {
  if (dataLength === 0 || numColumns === 0) return 0;
  var numPages = Math.ceil(dataLength / numColumns);
  return numPages;
};

exports.getNumPagesForColumnsAndDataLength = getNumPagesForColumnsAndDataLength;

var checkPage = function checkPage(numPages, newPage) {
  if (numPages < 1) return 0;
  if (newPage < 0) return 0;
  if (newPage >= numPages) return numPages - 1;
  return newPage;
};

exports.checkPage = checkPage;

var checkPageLoop = function checkPageLoop(numPages, newPage) {
  if (numPages < 1) return 0;
  if (newPage < 0) return numPages - 1;
  if (newPage >= numPages) return 0;
  return newPage;
};

exports.checkPageLoop = checkPageLoop;

var getMarginBetweenAccordingToViewport = function getMarginBetweenAccordingToViewport(baseItemMarginBetween, viewportIsXSOrLess, viewportIsMOrLess) {
  if (viewportIsXSOrLess) return _gridConfig.CONTAINER_PADDING_MOBILE / 2;
  if (viewportIsMOrLess) return _gridConfig.CONTAINER_PADDING / 2;
  return baseItemMarginBetween;
};

var propTypesPositions = _propTypes.default.oneOf(['top', 'right', 'bottom', 'left', 'bottom-left', 'bottom-right']);

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
      indexPageVisible: 0,
      numColumns: 3,
      numPages: getNumPagesForColumnsAndDataLength(getDataLength({
        data: _this.props.data,
        children: _this.props.children
      }), 3)
    };
    _this.viewedPages = new Set();

    _this.onResizeInner = function (widthInner) {
      var _this$props = _this.props,
          data = _this$props.data,
          children = _this$props.children,
          itemMinWidth = _this$props.itemMinWidth,
          baseItemMarginBetween = _this$props.baseItemMarginBetween,
          viewportIsXSOrLess = _this$props.viewportIsXSOrLess,
          viewportIsMOrLess = _this$props.viewportIsMOrLess;
      var itemMarginBetween = getMarginBetweenAccordingToViewport(baseItemMarginBetween, viewportIsXSOrLess, viewportIsMOrLess);
      var numColumns = getNumColumnsForWidth(widthInner, itemMinWidth, itemMarginBetween);
      var numPages = getNumPagesForColumnsAndDataLength(getDataLength({
        data: data,
        children: children
      }), numColumns);

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
      var loop = _this.props.loop;
      var _this$state = _this.state,
          numPages = _this$state.numPages,
          indexPageVisible = _this$state.indexPageVisible;
      var newPage = loop ? checkPageLoop(numPages, indexPageVisible + 1) : checkPage(numPages, indexPageVisible + 1);

      _this.viewedPages.add(newPage);

      _this.setState({
        indexPageVisible: newPage
      });
    };

    _this.goPrevPage = function () {
      var loop = _this.props.loop;
      var _this$state2 = _this.state,
          numPages = _this$state2.numPages,
          indexPageVisible = _this$state2.indexPageVisible;
      var newPage = loop ? checkPageLoop(numPages, indexPageVisible - 1) : checkPage(numPages, indexPageVisible - 1);

      _this.viewedPages.add(newPage);

      _this.setState({
        indexPageVisible: newPage
      });
    };

    _this.goToPage = function (indexPageToGo) {
      var numPages = _this.state.numPages;
      var newPage = checkPage(numPages, indexPageToGo);

      _this.viewedPages.add(newPage);

      _this.setState({
        indexPageVisible: newPage
      });
    };

    _this.renderCarouselInner = function () {
      var _this$props2 = _this.props,
          data = _this$props2.data,
          renderItem = _this$props2.renderItem,
          children = _this$props2.children,
          itemMinWidth = _this$props2.itemMinWidth,
          baseItemMarginBetween = _this$props2.baseItemMarginBetween,
          viewportIsXSOrLess = _this$props2.viewportIsXSOrLess,
          viewportIsMOrLess = _this$props2.viewportIsMOrLess,
          showOtherPages = _this$props2.showOtherPages,
          pagesClassName = _this$props2.pagesClassName,
          exportVisibilityProps = _this$props2.exportVisibilityProps;
      var _this$state3 = _this.state,
          indexPageVisible = _this$state3.indexPageVisible,
          numColumns = _this$state3.numColumns,
          numPages = _this$state3.numPages;
      var itemMarginBetween = getMarginBetweenAccordingToViewport(baseItemMarginBetween, viewportIsXSOrLess, viewportIsMOrLess);
      var renderItemObject = !!data && !!renderItem ? renderItem : children;
      return /*#__PURE__*/_react.default.createElement(_carouselInner.CarouselInner, {
        legacyMode: !!data && !!renderItem,
        data: data,
        renderItem: renderItemObject,
        itemMinWidth: itemMinWidth,
        indexPageVisible: indexPageVisible,
        numColumns: numColumns,
        numPages: numPages,
        itemMarginBetween: itemMarginBetween,
        onResizeInner: _this.onResizeInner,
        goToPage: _this.goToPage,
        showOtherPages: showOtherPages,
        pagesClassName: pagesClassName,
        viewedPages: _this.viewedPages,
        exportVisibilityProps: exportVisibilityProps
      });
    };

    _this.renderPagination = function () {
      var _this$props3 = _this.props,
          baseItemMarginBetween = _this$props3.baseItemMarginBetween,
          viewportIsMOrLess = _this$props3.viewportIsMOrLess,
          viewportIsXSOrLess = _this$props3.viewportIsXSOrLess,
          hidePagination = _this$props3.hidePagination,
          hidePaginationOnMobile = _this$props3.hidePaginationOnMobile,
          paginationPosition = _this$props3.paginationPosition,
          prevButtonText = _this$props3.prevButtonText,
          nextButtonText = _this$props3.nextButtonText,
          tinyButtons = _this$props3.tinyButtons,
          firstButtonText = _this$props3.firstButtonText,
          lastButtonText = _this$props3.lastButtonText,
          showPageSquares = _this$props3.showPageSquares,
          preferCompletePaginationOnMobile = _this$props3.preferCompletePaginationOnMobile,
          loop = _this$props3.loop;
      var _this$state4 = _this.state,
          indexPageVisible = _this$state4.indexPageVisible,
          numPages = _this$state4.numPages;
      var itemMarginBetween = getMarginBetweenAccordingToViewport(baseItemMarginBetween, viewportIsXSOrLess, viewportIsMOrLess);
      if (hidePagination) return;
      if (viewportIsXSOrLess && hidePaginationOnMobile) return;
      if (numPages <= 1) return;

      if (viewportIsXSOrLess && !preferCompletePaginationOnMobile) {
        var rangePage = (0, _range.createRangeFromZeroTo)(numPages);
        return /*#__PURE__*/_react.default.createElement(PageControl, {
          className: "k-Carousel__pageControl"
        }, rangePage.map(function (index) {
          return /*#__PURE__*/_react.default.createElement(PageDot, {
            className: "k-Carousel__pageControl__pageDot",
            index: index,
            key: index,
            visibleIndex: indexPageVisible
          });
        }), /*#__PURE__*/_react.default.createElement(PageControlButton, {
          prev: true,
          onClick: _this.goPrevPage,
          className: "k-Carousel__pageControl__controlButton"
        }), /*#__PURE__*/_react.default.createElement(PageControlButton, {
          next: true,
          onClick: _this.goNextPage,
          className: "k-Carousel__pageControl__controlButton"
        }));
      }

      return /*#__PURE__*/_react.default.createElement(CarouselPagination, {
        position: paginationPosition,
        itemMarginBetween: itemMarginBetween,
        className: "k-Carousel__pagination"
      }, /*#__PURE__*/_react.default.createElement(PaginationButtons, {
        position: paginationPosition,
        className: "k-Carousel__pagination__buttonContainer"
      }, /*#__PURE__*/_react.default.createElement(PageButton, {
        className: "k-Carousel__pagination__button",
        icon: true,
        modifier: "beryllium",
        tiny: tinyButtons,
        onClick: _this.goPrevPage,
        disabled: !loop && (indexPageVisible < 1 || numPages < 1)
      }, /*#__PURE__*/_react.default.createElement(_visuallyHidden.VisuallyHidden, null, loop && (indexPageVisible < 1 || numPages < 1) ? lastButtonText : prevButtonText), /*#__PURE__*/_react.default.createElement(_arrowIcon.ArrowIcon, {
        version: "solid",
        direction: "left",
        "aria-hidden": true
      })), /*#__PURE__*/_react.default.createElement(PageButton, {
        className: "k-Carousel__pagination__button",
        icon: true,
        modifier: "beryllium",
        tiny: tinyButtons,
        onClick: _this.goNextPage,
        disabled: !loop && indexPageVisible >= numPages - 1
      }, /*#__PURE__*/_react.default.createElement(_visuallyHidden.VisuallyHidden, null, loop && indexPageVisible >= numPages - 1 ? firstButtonText : nextButtonText), /*#__PURE__*/_react.default.createElement(_arrowIcon.ArrowIcon, {
        version: "solid",
        direction: "right",
        "aria-hidden": true
      }))), showPageSquares && /*#__PURE__*/_react.default.createElement(PaginationSquares, {
        className: "k-Carousel__pagination__squaresContainer"
      }, (0, _range.createRangeFromZeroTo)(numPages).map(function (index) {
        return /*#__PURE__*/_react.default.createElement(PageSquare, {
          key: index,
          isActive: index === indexPageVisible,
          className: "k-Carousel__pagination__square"
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
          viewportIsMOrLess = _this$props4.viewportIsMOrLess,
          paginationPosition = _this$props4.paginationPosition,
          children = _this$props4.children,
          className = _this$props4.className;
      if (getDataLength({
        data: data,
        children: children
      }) === 0) return null;

      if (!!data && !!renderItem) {
        if (viewportIsMOrLess) {
          return /*#__PURE__*/_react.default.createElement(StyledLegacyCarousel, {
            className: (0, _classnames.default)('k-Carousel', className, 'k-LegacyCarousel', 'k-LegacyCarousel--noGrid')
          }, this.renderCarouselInner(), this.renderPagination());
        }

        return /*#__PURE__*/_react.default.createElement(StyledLegacyCarousel, {
          className: (0, _classnames.default)('k-Carousel', className, 'k-LegacyCarousel', 'k-LegacyCarousel--inGrid')
        }, /*#__PURE__*/_react.default.createElement(_grid.Grid, null, /*#__PURE__*/_react.default.createElement(_grid.GridCol, {
          col: withoutLeftOffset ? '11' : '10',
          offset: withoutLeftOffset ? '0' : '1'
        }, this.renderCarouselInner()), /*#__PURE__*/_react.default.createElement(_grid.GridCol, {
          col: "1"
        }, this.renderPagination())));
      }

      return /*#__PURE__*/_react.default.createElement(FlexContainer, {
        paginationPosition: paginationPosition,
        className: (0, _classnames.default)('k-Carousel', className)
      }, this.renderCarouselInner(), this.renderPagination());
    }
  }]);
  return CarouselBase;
}(_react.Component);

CarouselBase.defaultProps = {
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
    default: propTypesPositions,
    fromXxs: propTypesPositions,
    fromXs: propTypesPositions,
    fromS: propTypesPositions,
    fromM: propTypesPositions,
    fromL: propTypesPositions,
    fromXl: propTypesPositions
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

var StyledLegacyCarousel = _styledComponents.default.div.withConfig({
  displayName: "carousel__StyledLegacyCarousel",
  componentId: "sc-1vyxuma-0"
})(["&.k-LegacyCarousel--noGrid .k-Carousel__inner{padding:0 ", ";scroll-padding:", ";&::after{content:'';display:block;flex-shrink:0;width:", ";}@media (min-width:", "){padding:0 ", ";scroll-padding:", ";&::after{width:", ";}}}&.k-LegacyCarousel--inGrid .k-Carousel__pagination__buttonContainer{flex-direction:column-reverse !important;}"], (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_MOBILE), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_MOBILE), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_MOBILE), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING));

var flexContainerdirectionStyle = function flexContainerdirectionStyle(positionType) {
  return function (_ref2) {
    var paginationPosition = _ref2.paginationPosition;
    if (!paginationPosition[positionType]) return;

    switch (paginationPosition[positionType]) {
      case 'top':
        return (0, _styledComponents.css)(["flex-direction:column-reverse;& >:nth-child(2){margin:0;margin-bottom:", ";}"], (0, _typography.pxToRem)(_gridConfig.GUTTER));

      case 'bottom':
      case 'bottom-left':
      case 'bottom-right':
        return (0, _styledComponents.css)(["flex-direction:column;& >:nth-child(2){margin:0;margin-top:", ";}"], (0, _typography.pxToRem)(_gridConfig.GUTTER));

      case 'left':
        return (0, _styledComponents.css)(["flex-direction:row-reverse;& >:nth-child(2){margin:0;margin-right:", ";}"], (0, _typography.pxToRem)(_gridConfig.GUTTER));

      case 'right':
        return (0, _styledComponents.css)(["flex-direction:row;& >:nth-child(2){margin:0;margin-left:", ";}"], (0, _typography.pxToRem)(_gridConfig.GUTTER));
    }
  };
};

var FlexContainer = _styledComponents.default.div.withConfig({
  displayName: "carousel__FlexContainer",
  componentId: "sc-1vyxuma-1"
})(["display:flex;", " @media (min-width:", "px){", "}@media (min-width:", "px){", "}@media (min-width:", "px){", "}@media (min-width:", "px){", "}@media (min-width:", "px){", "}@media (min-width:", "px){", "}"], flexContainerdirectionStyle('default'), _screenConfig.ScreenConfig.XXS.min, flexContainerdirectionStyle('fromXxs'), _screenConfig.ScreenConfig.XS.min, flexContainerdirectionStyle('fromXs'), _screenConfig.ScreenConfig.S.min, flexContainerdirectionStyle('fromS'), _screenConfig.ScreenConfig.M.min, flexContainerdirectionStyle('fromM'), _screenConfig.ScreenConfig.L.min, flexContainerdirectionStyle('fromL'), _screenConfig.ScreenConfig.XL.min, flexContainerdirectionStyle('fromXl'));

var paginationPositionStyle = function paginationPositionStyle(positionType) {
  return function (_ref3) {
    var position = _ref3.position;
    if (!position[positionType]) return;

    switch (position[positionType]) {
      case 'top':
        return (0, _styledComponents.css)(["align-items:flex-end;flex-direction:row;"]);

      case 'bottom':
      case 'bottom-left':
        return (0, _styledComponents.css)(["align-items:flex-start;flex-direction:row;"]);

      case 'bottom-right':
        return (0, _styledComponents.css)(["align-items:flex-start;flex-direction:row-reverse;"]);

      case 'left':
        return (0, _styledComponents.css)(["align-items:flex-end;flex-direction:column;"]);

      case 'right':
        return (0, _styledComponents.css)(["align-items:flex-start;flex-direction:column;"]);
    }
  };
};

var CarouselPagination = _styledComponents.default.div.withConfig({
  displayName: "carousel__CarouselPagination",
  componentId: "sc-1vyxuma-2"
})(["display:flex;justify-content:space-between;", " @media (min-width:", "px){", "}@media (min-width:", "px){", "}@media (min-width:", "px){", "}@media (min-width:", "px){", "}@media (min-width:", "px){", "}@media (min-width:", "px){", "}"], paginationPositionStyle('default'), _screenConfig.ScreenConfig.XXS.min, paginationPositionStyle('fromXxs'), _screenConfig.ScreenConfig.XS.min, paginationPositionStyle('fromXs'), _screenConfig.ScreenConfig.S.min, paginationPositionStyle('fromS'), _screenConfig.ScreenConfig.M.min, paginationPositionStyle('fromM'), _screenConfig.ScreenConfig.L.min, paginationPositionStyle('fromL'), _screenConfig.ScreenConfig.XL.min, paginationPositionStyle('fromXl'));

var PaginationSquares = _styledComponents.default.div.withConfig({
  displayName: "carousel__PaginationSquares",
  componentId: "sc-1vyxuma-3"
})(["display:flex;flex-direction:row;margin:", ";"], (0, _typography.pxToRem)(-2));

var PageSquare = _styledComponents.default.span.withConfig({
  displayName: "carousel__PageSquare",
  componentId: "sc-1vyxuma-4"
})(["display:inline-block;width:", ";height:", ";margin:", ";background-color:", ";", ""], (0, _typography.pxToRem)(6), (0, _typography.pxToRem)(6), (0, _typography.pxToRem)(2), _colorsConfig.default.font2, function (_ref4) {
  var isActive = _ref4.isActive;
  return isActive && (0, _styledComponents.css)(["background-color:", ";"], _colorsConfig.default.font1);
});

var buttonsPositionStyle = function buttonsPositionStyle(positionType) {
  return function (_ref5) {
    var position = _ref5.position;
    if (!position[positionType]) return;

    switch (position[positionType]) {
      case 'top':
      case 'bottom':
      case 'bottom-left':
      case 'bottom-right':
        return (0, _styledComponents.css)(["flex-direction:row;"]);

      case 'left':
        return (0, _styledComponents.css)(["flex-direction:column;"]);

      case 'right':
        return (0, _styledComponents.css)(["flex-direction:column-reverse;"]);
    }
  };
};

var PaginationButtons = _styledComponents.default.div.withConfig({
  displayName: "carousel__PaginationButtons",
  componentId: "sc-1vyxuma-5"
})(["display:flex;align-items:flex-start;margin:", ";", " @media (min-width:", "px){", "}@media (min-width:", "px){", "}@media (min-width:", "px){", "}@media (min-width:", "px){", "}@media (min-width:", "px){", "}@media (min-width:", "px){", "}"], (0, _typography.pxToRem)(-1), buttonsPositionStyle('default'), _screenConfig.ScreenConfig.XXS.min, buttonsPositionStyle('fromXxs'), _screenConfig.ScreenConfig.XS.min, buttonsPositionStyle('fromXs'), _screenConfig.ScreenConfig.S.min, buttonsPositionStyle('fromS'), _screenConfig.ScreenConfig.M.min, buttonsPositionStyle('fromM'), _screenConfig.ScreenConfig.L.min, buttonsPositionStyle('fromL'), _screenConfig.ScreenConfig.XL.min, buttonsPositionStyle('fromXl'));

var PageButton = (0, _styledComponents.default)(_button.Button).withConfig({
  displayName: "carousel__PageButton",
  componentId: "sc-1vyxuma-6"
})(["margin:", ";"], (0, _typography.pxToRem)(1));

var PageControl = _styledComponents.default.div.withConfig({
  displayName: "carousel__PageControl",
  componentId: "sc-1vyxuma-7"
})(["display:flex;flex-direction:row;justify-content:center;position:relative;padding-top:", ";padding-bottom:", ";"], (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_MOBILE / 2), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_MOBILE / 2));

var PageControlButton = _styledComponents.default.div.withConfig({
  displayName: "carousel__PageControlButton",
  componentId: "sc-1vyxuma-8"
})(["position:absolute;top:", ";bottom:", ";-webkit-tap-highlight-color:transparent;", " ", ""], (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_MOBILE / 4), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_MOBILE / 4), function (_ref6) {
  var prev = _ref6.prev;
  return prev && (0, _styledComponents.css)(["left:", ";right:50%;"], (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_MOBILE));
}, function (_ref7) {
  var next = _ref7.next;
  return next && (0, _styledComponents.css)(["right:", ";left:50%;"], (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_MOBILE));
});

var PageDot = _styledComponents.default.div.withConfig({
  displayName: "carousel__PageDot",
  componentId: "sc-1vyxuma-9"
})(["width:", ";height:", ";margin-left:", ";margin-right:", ";border-radius:", ";background-color:", ";", ""], (0, _typography.pxToRem)(8), (0, _typography.pxToRem)(8), (0, _typography.pxToRem)(4), (0, _typography.pxToRem)(4), (0, _typography.pxToRem)(4), _colorsConfig.default.font1, function (_ref8) {
  var visibleIndex = _ref8.visibleIndex,
      index = _ref8.index;
  return visibleIndex === index && (0, _styledComponents.css)(["background-color:", ";"], _colorsConfig.default.primary2);
});

var Carousel = (0, _mediaQueries.withMediaQueries)({
  viewportIsXSOrLess: true,
  viewportIsMOrLess: true,
  exposedMethods: ['goToPage']
})(CarouselBase);
exports.Carousel = Carousel;