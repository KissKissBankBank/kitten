"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CarouselInner = void 0;

var _react = _interopRequireDefault(require("react"));

var _radium = _interopRequireWildcard(require("radium"));

var _resizeObserverPolyfill = _interopRequireDefault(require("resize-observer-polyfill"));

var _range = require("kitten/helpers/utils/range");

var _featureDetection = require("kitten/helpers/utils/feature-detection");

var _carouselPage = require("kitten/components/carousel/carousel-page");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

if (typeof window !== 'undefined') {
  require('smoothscroll-polyfill').polyfill();
}

var supportScrollSnap = (0, _featureDetection.cssSupports)('scroll-snap-type: mandatory');
var supportScrollSmooth = (0, _featureDetection.cssSupports)('scroll-behavior: smooth'); // inspired by https://github.com/cferdinandi/scrollStop

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

var CarouselInnerBase =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CarouselInnerBase, _React$Component);

  function CarouselInnerBase() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CarouselInnerBase);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CarouselInnerBase)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      isTouched: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onResizeObserve", function (_ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          entry = _ref2[0];

      var widthInner = entry.contentRect.width;

      _this.props.onResizeInner(widthInner);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleInnerScroll", scrollStop(function (target) {
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
    }));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "scrollToPage", function (indexPageToScroll) {
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
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleTouchStart", function () {
      return _this.setState({
        isTouched: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleTouchEnd", function () {
      return _this.setState({
        isTouched: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handlePageClick", function (index) {
      return function (e) {
        if (index !== _this.props.indexPageVisible) {
          e.preventDefault();

          _this.scrollToPage(index);

          document.activeElement.blur();
        }
      };
    });

    return _this;
  }

  _createClass(CarouselInnerBase, [{
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
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
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