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

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _radium = _interopRequireWildcard(require("radium"));

var _resizeObserverPolyfill = _interopRequireDefault(require("resize-observer-polyfill"));

var _range = require("../../helpers/utils/range");

var _featureDetection = require("../../helpers/utils/feature-detection");

var _carouselPage = require("../../components/carousel/carousel-page");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

if (typeof window !== 'undefined') {
  require('smoothscroll-polyfill').polyfill();
}

var supportScrollSnap = (0, _featureDetection.cssSupports)('scroll-snap-type: mandatory'); // inspired by https://github.com/cferdinandi/scrollStop

var scrollStop = function scrollStop(callback) {
  // Make sure a valid callback was provided
  if (!callback) return;
  var isScrolling;
  var target;
  return function (event) {
    clearTimeout(isScrolling);
    target = event.target;
    isScrolling = setTimeout(function () {
      // Run the callback
      callback(target);
    }, // wait more for scrollStop if browser support snap
    // because of the momentum on ios
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

var getRangePageScrollLeft = function getRangePageScrollLeft(targetClientWidth, numPages, siblingPageVisible, itemMarginBetween) {
  var partSiblingItemExceedWidth = itemMarginBetween;
  var marginForSibling = siblingPageVisible ? (itemMarginBetween + partSiblingItemExceedWidth) * 2 : 0;
  var innerWidth = targetClientWidth - marginForSibling;
  return (0, _range.createRangeFromZeroTo)(numPages).map(function (numPage) {
    return numPage * (innerWidth + itemMarginBetween);
  });
};

var CarouselInnerBase = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(CarouselInnerBase, _React$Component);

  var _super = _createSuper(CarouselInnerBase);

  function CarouselInnerBase() {
    var _this;

    (0, _classCallCheck2.default)(this, CarouselInnerBase);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      isTouched: false
    };

    _this.onResizeObserve = function (_ref) {
      var _ref2 = (0, _slicedToArray2.default)(_ref, 1),
          entry = _ref2[0];

      var widthInner = entry.contentRect.width;

      _this.props.onResizeInner(widthInner);
    };

    _this.handleInnerScroll = scrollStop(function (target) {
      if (_this.state.isTouched) return;
      var _this$props = _this.props,
          numPages = _this$props.numPages,
          siblingPageVisible = _this$props.siblingPageVisible,
          itemMarginBetween = _this$props.itemMarginBetween,
          indexPageVisible = _this$props.indexPageVisible,
          goToPage = _this$props.goToPage;
      var scrollLeft = target.scrollLeft,
          clientWidth = target.clientWidth;
      var rangePageScrollLeft = getRangePageScrollLeft(clientWidth, numPages, siblingPageVisible, itemMarginBetween);
      var closest = getClosest(rangePageScrollLeft, scrollLeft);
      var indexClosest = rangePageScrollLeft.indexOf(closest);

      if (indexClosest !== indexPageVisible) {
        goToPage(indexClosest);
      } else {
        // if the user doesn't scroll enough to change page
        // we need to scroll back to the fake snap page
        if (closest !== scrollLeft) {
          target.scrollTo({
            top: 0,
            left: closest,
            behavior: 'smooth'
          });
        }
      }
    });

    _this.scrollToPage = function (indexPageToScroll) {
      var _this$props2 = _this.props,
          numPages = _this$props2.numPages,
          siblingPageVisible = _this$props2.siblingPageVisible,
          itemMarginBetween = _this$props2.itemMarginBetween;
      var target = _this.carouselInner;
      var scrollLeft = target.scrollLeft,
          clientWidth = target.clientWidth;
      var rangePageScrollLeft = getRangePageScrollLeft(clientWidth, numPages, siblingPageVisible, itemMarginBetween);
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
        if (index !== _this.props.indexPageVisible) {
          e.preventDefault();

          _this.scrollToPage(index);

          document.activeElement.blur();
        }
      };
    };

    return _this;
  }

  (0, _createClass2.default)(CarouselInnerBase, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.observer = new _resizeObserverPolyfill.default(this.onResizeObserve);
      this.observer.observe(this.carouselInner);
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
          data = _this$props3.data,
          itemMinWidth = _this$props3.itemMinWidth,
          renderItem = _this$props3.renderItem,
          indexPageVisible = _this$props3.indexPageVisible,
          numColumns = _this$props3.numColumns,
          numPages = _this$props3.numPages,
          itemMarginBetween = _this$props3.itemMarginBetween,
          siblingPageVisible = _this$props3.siblingPageVisible;
      var rangePage = (0, _range.createRangeFromZeroTo)(numPages);
      return _react.default.createElement("div", {
        ref: function ref(div) {
          _this2.carouselInner = div;
        },
        className: "k-CarouselInner",
        style: [styles.carouselInner, {
          paddingLeft: siblingPageVisible ? itemMarginBetween * 2 : 0,
          paddingRight: siblingPageVisible ? itemMarginBetween * 2 : 0
        }],
        onScroll: this.handleInnerScroll,
        onTouchStart: this.handleTouchStart,
        onTouchEnd: this.handleTouchEnd
      }, rangePage.map(function (index) {
        return _react.default.createElement("div", {
          key: index,
          style: [styles.carouselPageContainer, index !== indexPageVisible && styles.carouselPageContainerClickable, {
            marginLeft: index ? itemMarginBetween : 0
          }],
          onClick: _this2.handlePageClick(index)
        }, _react.default.createElement(_carouselPage.CarouselPage, {
          data: getDataForPage(data, index, numColumns),
          numColumns: numColumns,
          itemMinWidth: itemMinWidth,
          itemMarginBetween: itemMarginBetween,
          renderItem: renderItem
        }));
      }), siblingPageVisible && _react.default.createElement("div", {
        style: {
          minWidth: itemMarginBetween * 2
        }
      }), _react.default.createElement(_radium.Style, {
        scopeSelector: ".k-CarouselInner::-webkit-scrollbar",
        rules: {
          display: 'none'
        }
      }));
    }
  }]);
  return CarouselInnerBase;
}(_react.default.Component);

var styles = {
  carouselInner: {
    display: 'flex',
    flexDirect: 'row',
    overflowX: 'scroll',
    scrollBehavior: 'smooth',
    // hide scrollbar on IE and Edge
    MsOverflowStyle: 'none',
    // mandatory to combine scroll with this property on iOS
    WebkitOverflowScrolling: 'touch',
    // snap only for browser that support snap without prefixes
    scrollSnapType: supportScrollSnap ? 'mandatory' : 'none',
    // Fix bug IE11 ResizeObserver, to trigger a first resize
    minHeight: 1
  },
  carouselPageContainer: {
    width: '100%',
    flexShrink: 0,
    // snap only for browser that support snap without prefixes
    scrollSnapAlign: supportScrollSnap ? 'center' : 'none'
  },
  carouselPageContainerClickable: {
    cursor: 'pointer'
  }
};
var CarouselInner = (0, _radium.default)(CarouselInnerBase);
exports.CarouselInner = CarouselInner;