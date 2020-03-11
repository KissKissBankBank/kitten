"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CarouselInner = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _resizeObserverPolyfill = _interopRequireDefault(require("resize-observer-polyfill"));

var _typography = require("../../../../helpers/utils/typography");

var _gridConfig = require("../../../../constants/grid-config");

var _screenConfig = require("../../../../constants/screen-config");

var _elementHelper = require("../../../../helpers/dom/element-helper");

var _range = require("../../../../helpers/utils/range");

var _featureDetection = require("../../../../helpers/utils/feature-detection");

var _carouselPage = require("./carousel-page");

if (typeof window !== 'undefined') {
  require('smoothscroll-polyfill').polyfill();
}

var supportScrollSnap = (0, _featureDetection.cssSupports)('scroll-snap-type: mandatory'); // inspired by https://github.com/cferdinandi/scrollStop

var scrollStop = function scrollStop(callback) {
  if (!callback) return;
  var isScrolling;
  var target;
  return function (event) {
    clearTimeout(isScrolling);
    target = event.target;
    isScrolling = setTimeout(function () {
      return callback(target);
    }, // wait more for scrollStop if browser support snap
    // because of the momentum on iOS
    supportScrollSnap ? 132 : 66);
  };
};

var getClosest = function getClosest(counts, goal) {
  return counts.reduce(function (prev, curr) {
    return Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev;
  });
};

var getDataForPage = function getDataForPage(data, indexPage, numColumns) {
  var startIndex = indexPage * numColumns;
  return data.slice(startIndex, startIndex + numColumns);
};

var getRangePageScrollLeft = function getRangePageScrollLeft(targetClientWidth, numPages, itemMarginBetween, containerPadding) {
  return (0, _range.createRangeFromZeroTo)(numPages).map(function (numPage) {
    return numPage * (targetClientWidth + itemMarginBetween - containerPadding);
  });
};

var CarouselInner =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(CarouselInner, _Component);

  function CarouselInner() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, CarouselInner);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(CarouselInner)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      isTouched: false
    };
    _this.carouselInner = _react.default.createRef();

    _this.onResizeObserve = function (_ref) {
      var _ref2 = (0, _slicedToArray2.default)(_ref, 1),
          entry = _ref2[0];

      var widthInner = entry.contentRect.width;

      _this.props.onResizeInner(widthInner);
    };

    _this.getElementPadding = function (element) {
      return parseInt(_elementHelper.domElementHelper.getComputedStyle(element, 'padding-left')) + parseInt(_elementHelper.domElementHelper.getComputedStyle(element, 'padding-right'));
    };

    _this.handleInnerScroll = scrollStop(function (target) {
      if (_this.state.isTouched) return;
      var _this$props = _this.props,
          numPages = _this$props.numPages,
          itemMarginBetween = _this$props.itemMarginBetween,
          indexPageVisible = _this$props.indexPageVisible,
          goToPage = _this$props.goToPage;
      var scrollLeft = target.scrollLeft,
          clientWidth = target.clientWidth;
      var rangePageScrollLeft = getRangePageScrollLeft(clientWidth, numPages, itemMarginBetween, _this.getElementPadding(target));
      var closest = getClosest(rangePageScrollLeft, scrollLeft);
      var indexClosest = rangePageScrollLeft.indexOf(closest);
      if (indexClosest !== indexPageVisible) return goToPage(indexClosest); // if the user doesn't scroll enough to change page
      // we need to scroll back to the fake snap page

      if (closest !== scrollLeft) {
        return target.scrollTo({
          top: 0,
          left: closest,
          behavior: 'smooth'
        });
      }
    });

    _this.scrollToPage = function (indexPageToScroll) {
      var _this$props2 = _this.props,
          numPages = _this$props2.numPages,
          itemMarginBetween = _this$props2.itemMarginBetween;
      var target = _this.carouselInner.current;
      var scrollLeft = target.scrollLeft,
          clientWidth = target.clientWidth;
      var rangePageScrollLeft = getRangePageScrollLeft(clientWidth, numPages, itemMarginBetween, _this.getElementPadding(target));
      var closest = rangePageScrollLeft[indexPageToScroll];

      if (closest !== scrollLeft) {
        target.scrollTo({
          top: 0,
          left: closest,
          behavior: 'smooth'
        });
      }
    };

    _this.handleTouchStart = function () {
      return _this.setState({
        isTouched: true
      });
    };

    _this.handleTouchEnd = function () {
      return _this.setState({
        isTouched: false
      });
    };

    _this.handlePageClick = function (index) {
      return function (e) {
        if (index === _this.props.indexPageVisible) return;
        e.preventDefault();

        _this.scrollToPage(index);

        document.activeElement.blur();
      };
    };

    return _this;
  }

  (0, _createClass2.default)(CarouselInner, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.observer = new _resizeObserverPolyfill.default(this.onResizeObserve);
      this.observer.observe(this.carouselInner.current);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.observer.disconnect();
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      if (nextProps.indexPageVisible !== this.props.indexPageVisible) {
        this.scrollToPage(nextProps.indexPageVisible);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          itemMinWidth = _this$props3.itemMinWidth,
          renderItem = _this$props3.renderItem,
          indexPageVisible = _this$props3.indexPageVisible,
          numColumns = _this$props3.numColumns,
          numPages = _this$props3.numPages,
          itemMarginBetween = _this$props3.itemMarginBetween,
          showOtherPages = _this$props3.showOtherPages,
          pagesClassName = _this$props3.pagesClassName;
      var rangePage = (0, _range.createRangeFromZeroTo)(numPages);
      return _react.default.createElement(StyledCarouselInner, {
        ref: this.carouselInner,
        onScroll: this.handleInnerScroll,
        onTouchStart: this.handleTouchStart,
        onTouchEnd: this.handleTouchEnd,
        showOtherPages: showOtherPages
      }, rangePage.map(function (index) {
        return _react.default.createElement(StyledCarouselPageContainer, {
          key: index,
          index: index,
          indexPageVisible: indexPageVisible,
          itemMarginBetween: itemMarginBetween,
          onClick: _this2.handlePageClick(index),
          showOtherPages: showOtherPages,
          className: pagesClassName
        }, _react.default.createElement(_carouselPage.CarouselPage, {
          numColumns: numColumns,
          itemMinWidth: itemMinWidth,
          itemMarginBetween: itemMarginBetween,
          renderItem: getDataForPage(renderItem, index, numColumns)
        }));
      }));
    }
  }]);
  return CarouselInner;
}(_react.Component);

exports.CarouselInner = CarouselInner;

var StyledCarouselInner = _styledComponents.default.div.withConfig({
  displayName: "carousel-inner__StyledCarouselInner",
  componentId: "wljpd2-0"
})(["display:flex;flex-direction:row;overflow-x:scroll;scroll-behavior:smooth;-ms-over-flow-style:none;-webkit-overflow-scrolling:touch;scroll-snap-type:", ";min-height:1;&::-webkit-scrollbar{display:none;}", ""], supportScrollSnap ? 'mandatory' : 'none', function (_ref3) {
  var showOtherPages = _ref3.showOtherPages;
  return showOtherPages && (0, _styledComponents.css)(["padding:0 ", ";scroll-padding:", ";@media (min-width:", "){padding:0 ", ";scroll-padding:", ";}"], (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_MOBILE), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_MOBILE), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING));
});

var StyledCarouselPageContainer = _styledComponents.default.div.withConfig({
  displayName: "carousel-inner__StyledCarouselPageContainer",
  componentId: "wljpd2-1"
})(["width:100%;flex-shrink:0;scroll-snap-align:", ";", " ", " ", ""], supportScrollSnap ? 'center' : 'none', function (_ref4) {
  var showOtherPages = _ref4.showOtherPages;
  return showOtherPages && (0, _styledComponents.css)(["&:last-child{padding-right:", ";@media (min-width:", "){padding-right:", ";}}"], (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_MOBILE), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING));
}, function (_ref5) {
  var index = _ref5.index,
      indexPageVisible = _ref5.indexPageVisible;
  return index !== indexPageVisible && (0, _styledComponents.css)(["cursor:pointer;"]);
}, function (_ref6) {
  var index = _ref6.index,
      itemMarginBetween = _ref6.itemMarginBetween;
  return index && (0, _styledComponents.css)(["margin-left:", ";"], (0, _typography.pxToRem)(itemMarginBetween));
});