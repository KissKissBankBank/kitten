"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

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

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _typography = require("../../../helpers/utils/typography");

var _screenConfig = require("../../../constants/screen-config");

var _range = require("../../../helpers/utils/range");

var _mediaQueries = require("../../../hoc/media-queries");

var _gridConfig = require("../../../constants/grid-config");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _grid = require("../../../components/grid/grid");

var _buttonIcon = require("../../../components/buttons/button-icon");

var _arrowIcon = require("../../../components/icons/arrow-icon");

var _carouselInner = require("./components/carousel-inner");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

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

var getMarginBetweenAccordingToViewport = function getMarginBetweenAccordingToViewport(baseItemMarginBetween, viewportIsXSOrLess, viewportIsMOrLess) {
  if (viewportIsXSOrLess) return _gridConfig.CONTAINER_PADDING_MOBILE / 2;
  if (viewportIsMOrLess) return _gridConfig.CONTAINER_PADDING / 2;
  return baseItemMarginBetween;
};

var propTypesPositions = _propTypes.default.oneOf(['top', 'right', 'bottom', 'left']);

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
      numPages: getNumPagesForColumnsAndDataLength(_react.default.Children.count(_this.props.children), 3)
    };

    _this.onResizeInner = function (widthInner) {
      var _this$props = _this.props,
          children = _this$props.children,
          itemMinWidth = _this$props.itemMinWidth,
          baseItemMarginBetween = _this$props.baseItemMarginBetween,
          viewportIsXSOrLess = _this$props.viewportIsXSOrLess,
          viewportIsMOrLess = _this$props.viewportIsMOrLess;
      var itemMarginBetween = getMarginBetweenAccordingToViewport(baseItemMarginBetween, viewportIsXSOrLess, viewportIsMOrLess);
      var numColumns = getNumColumnsForWidth(widthInner, itemMinWidth, itemMarginBetween);
      var numPages = getNumPagesForColumnsAndDataLength(_react.default.Children.count(children), numColumns);

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
          itemMinWidth = _this$props2.itemMinWidth,
          children = _this$props2.children,
          baseItemMarginBetween = _this$props2.baseItemMarginBetween,
          viewportIsXSOrLess = _this$props2.viewportIsXSOrLess,
          viewportIsMOrLess = _this$props2.viewportIsMOrLess,
          showOtherPages = _this$props2.showOtherPages,
          pagesClassName = _this$props2.pagesClassName;
      var _this$state3 = _this.state,
          indexPageVisible = _this$state3.indexPageVisible,
          numColumns = _this$state3.numColumns,
          numPages = _this$state3.numPages;
      var itemMarginBetween = getMarginBetweenAccordingToViewport(baseItemMarginBetween, viewportIsXSOrLess, viewportIsMOrLess);
      return _react.default.createElement(_carouselInner.CarouselInner, {
        itemMinWidth: itemMinWidth,
        renderItem: children,
        indexPageVisible: indexPageVisible,
        numColumns: numColumns,
        numPages: numPages,
        itemMarginBetween: itemMarginBetween,
        onResizeInner: _this.onResizeInner,
        goToPage: _this.goToPage,
        showOtherPages: showOtherPages,
        pagesClassName: pagesClassName
      });
    };

    _this.renderPagination = function () {
      var _this$props3 = _this.props,
          baseItemMarginBetween = _this$props3.baseItemMarginBetween,
          viewportIsMOrLess = _this$props3.viewportIsMOrLess,
          viewportIsXSOrLess = _this$props3.viewportIsXSOrLess,
          hidePagination = _this$props3.hidePagination,
          hidePaginationOnMobile = _this$props3.hidePaginationOnMobile,
          paginationPosition = _this$props3.paginationPosition;
      var _this$state4 = _this.state,
          indexPageVisible = _this$state4.indexPageVisible,
          numPages = _this$state4.numPages;
      var itemMarginBetween = getMarginBetweenAccordingToViewport(baseItemMarginBetween, viewportIsXSOrLess, viewportIsMOrLess);
      if (hidePagination) return;
      if (viewportIsXSOrLess && hidePaginationOnMobile) return;
      if (numPages <= 1) return;

      if (viewportIsXSOrLess) {
        var rangePage = (0, _range.createRangeFromZeroTo)(numPages);
        return _react.default.createElement(PageControl, null, rangePage.map(function (index) {
          return _react.default.createElement(PageDot, {
            index: index,
            key: index,
            visibleIndex: indexPageVisible
          });
        }), _react.default.createElement(PageControlButton, {
          prev: true,
          onClick: _this.goPrevPage
        }), _react.default.createElement(PageControlButton, {
          next: true,
          onClick: _this.goNextPage
        }));
      }

      return _react.default.createElement(CarouselPagination, {
        position: paginationPosition,
        itemMarginBetween: itemMarginBetween
      }, _react.default.createElement(_buttonIcon.ButtonIcon, {
        modifier: "beryllium",
        onClick: _this.goPrevPage,
        disabled: indexPageVisible < 1 || numPages < 1
      }, _react.default.createElement(_arrowIcon.ArrowIcon, {
        version: "solid",
        className: "k-ButtonIcon__svg",
        direction: "left"
      })), _react.default.createElement(_buttonIcon.ButtonIcon, {
        modifier: "beryllium",
        onClick: _this.goNextPage,
        disabled: indexPageVisible >= numPages - 1
      }, _react.default.createElement(_arrowIcon.ArrowIcon, {
        version: "solid",
        className: "k-ButtonIcon__svg",
        direction: "right"
      })));
    };

    return _this;
  }

  (0, _createClass2.default)(CarouselBase, [{
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          paginationPosition = _this$props4.paginationPosition,
          children = _this$props4.children;
      if (_react.default.Children.count(children) === 0) return null;
      return _react.default.createElement(FlexContainer, {
        paginationPosition: paginationPosition
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
  paginationPosition: {
    default: 'right',
    fromM: 'bottom'
  }
};
CarouselBase.propTypes = {
  itemMinWidth: _propTypes.default.number.isRequired,
  baseItemMarginBetween: _propTypes.default.number.isRequired,
  children: _propTypes.default.node.isRequired,
  viewportIsMOrLess: _propTypes.default.bool.isRequired,
  viewportIsXSOrLess: _propTypes.default.bool.isRequired,
  hidePaginationOnMobile: _propTypes.default.bool,
  hidePagination: _propTypes.default.bool,
  showOtherPages: _propTypes.default.bool,
  pagesClassName: _propTypes.default.string,
  paginationPosition: _propTypes.default.shape({
    default: propTypesPositions,
    fromXxs: propTypesPositions,
    fromXs: propTypesPositions,
    fromS: propTypesPositions,
    fromM: propTypesPositions,
    fromL: propTypesPositions,
    fromXl: propTypesPositions
  })
};

var flexContainerdirectionStyle = function flexContainerdirectionStyle(positionType) {
  return function (_ref) {
    var paginationPosition = _ref.paginationPosition;
    if (!paginationPosition[positionType]) return;

    switch (paginationPosition[positionType]) {
      case 'top':
        return (0, _styledComponents.css)(["flex-direction:column-reverse;"]);

      case 'bottom':
        return (0, _styledComponents.css)(["flex-direction:column;"]);

      case 'left':
        return (0, _styledComponents.css)(["flex-direction:row-reverse;"]);

      case 'right':
        return (0, _styledComponents.css)(["flex-direction:row;"]);
    }
  };
};

var FlexContainer = _styledComponents.default.div.withConfig({
  displayName: "carousel__FlexContainer",
  componentId: "sc-1o67jdh-0"
})(["display:flex;", " @media (min-width:", "px){", "}@media (min-width:", "px){", "}@media (min-width:", "px){", "}@media (min-width:", "px){", "}@media (min-width:", "px){", "}@media (min-width:", "px){", "}"], flexContainerdirectionStyle('default'), _screenConfig.ScreenConfig.XXS.min, flexContainerdirectionStyle('fromXxs'), _screenConfig.ScreenConfig.XS.min, flexContainerdirectionStyle('fromXs'), _screenConfig.ScreenConfig.S.min, flexContainerdirectionStyle('fromS'), _screenConfig.ScreenConfig.M.min, flexContainerdirectionStyle('fromM'), _screenConfig.ScreenConfig.L.min, flexContainerdirectionStyle('fromL'), _screenConfig.ScreenConfig.XL.min, flexContainerdirectionStyle('fromXl'));

var paginationPositionStyle = function paginationPositionStyle(positionType) {
  return function (_ref2) {
    var position = _ref2.position;
    if (!position[positionType]) return;

    switch (position[positionType]) {
      case 'top':
        return (0, _styledComponents.css)(["flex-direction:row;margin:0;margin-bottom:", ");& > button:first-child{margin-bottom:pxToRem(2);}"], (0, _typography.pxToRem)(_gridConfig.GUTTER));

      case 'bottom':
        return (0, _styledComponents.css)(["flex-direction:row;margin:0;margin-top:", ";& > button:first-child{margin-right:", ";}"], (0, _typography.pxToRem)(_gridConfig.GUTTER), (0, _typography.pxToRem)(2));

      case 'left':
        return (0, _styledComponents.css)(["flex-direction:column;align-self:flex-start;margin:0;margin-right:", ";& > button:first-child{margin-bottom:", ";}"], (0, _typography.pxToRem)(_gridConfig.GUTTER), (0, _typography.pxToRem)(2));

      case 'right':
        return (0, _styledComponents.css)(["flex-direction:column-reverse;align-self:flex-start;margin:0;margin-left:", ";& > button:last-child{margin-bottom:", ";}"], (0, _typography.pxToRem)(_gridConfig.GUTTER), (0, _typography.pxToRem)(2));
    }
  };
};

var CarouselPagination = _styledComponents.default.div.withConfig({
  displayName: "carousel__CarouselPagination",
  componentId: "sc-1o67jdh-1"
})(["display:flex;align-items:flex-start;", " @media (min-width:", "px){", "}@media (min-width:", "px){", "}@media (min-width:", "px){", "}@media (min-width:", "px){", "}@media (min-width:", "px){", "}@media (min-width:", "px){", "}"], paginationPositionStyle('default'), _screenConfig.ScreenConfig.XXS.min, paginationPositionStyle('fromXxs'), _screenConfig.ScreenConfig.XS.min, paginationPositionStyle('fromXs'), _screenConfig.ScreenConfig.S.min, paginationPositionStyle('fromS'), _screenConfig.ScreenConfig.M.min, paginationPositionStyle('fromM'), _screenConfig.ScreenConfig.L.min, paginationPositionStyle('fromL'), _screenConfig.ScreenConfig.XL.min, paginationPositionStyle('fromXl'));

var PageControl = _styledComponents.default.div.withConfig({
  displayName: "carousel__PageControl",
  componentId: "sc-1o67jdh-2"
})(["display:flex;flex-direction:row;justify-content:center;position:relative;padding-top:", ";padding-bottom:", ";"], (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_MOBILE / 2), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_MOBILE / 2));

var PageControlButton = _styledComponents.default.div.withConfig({
  displayName: "carousel__PageControlButton",
  componentId: "sc-1o67jdh-3"
})(["position:absolute;top:", ";bottom:", ";-webkit-tap-highlight-color:transparent;", " ", ""], (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_MOBILE / 4), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_MOBILE / 4), function (_ref3) {
  var prev = _ref3.prev;
  return prev && (0, _styledComponents.css)(["left:", ";right:50%;"], (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_MOBILE));
}, function (_ref4) {
  var next = _ref4.next;
  return next && (0, _styledComponents.css)(["right:", ";left:50%;"], (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_MOBILE));
});

var PageDot = _styledComponents.default.div.withConfig({
  displayName: "carousel__PageDot",
  componentId: "sc-1o67jdh-4"
})(["width:", ";height:", ";margin-left:", ";margin-right:", ";border-radius:", ";background-color:", ";", "}"], (0, _typography.pxToRem)(8), (0, _typography.pxToRem)(8), (0, _typography.pxToRem)(4), (0, _typography.pxToRem)(4), (0, _typography.pxToRem)(4), _colorsConfig.default.font1, function (_ref5) {
  var visibleIndex = _ref5.visibleIndex,
      index = _ref5.index;
  return visibleIndex === index && (0, _styledComponents.css)(["background-color:", ";"], _colorsConfig.default.primary2);
});

var Carousel = (0, _mediaQueries.withMediaQueries)({
  viewportIsXSOrLess: true,
  viewportIsMOrLess: true,
  exposedMethods: ['goToPage']
})(CarouselBase);
exports.Carousel = Carousel;