import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import ResizeObserver from 'resize-observer-polyfill';
import { pxToRem } from '../../../../helpers/utils/typography';
import { CONTAINER_PADDING, CONTAINER_PADDING_MOBILE } from '../../../../constants/grid-config';
import { ScreenConfig } from '../../../../constants/screen-config';
import { domElementHelper } from '../../../../helpers/dom/element-helper';

if (typeof window !== 'undefined') {
  require('smoothscroll-polyfill').polyfill();
}

import { createRangeFromZeroTo } from '../../../../helpers/utils/range';
import { cssSupports } from '../../../../helpers/utils/feature-detection';
import { CarouselPage } from './carousel-page';
import classNames from 'classnames';
var supportScrollSnap = cssSupports('scroll-snap-type: mandatory'); // inspired by https://github.com/cferdinandi/scrollStop

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
  return createRangeFromZeroTo(numPages).map(function (numPage) {
    return numPage * (targetClientWidth + itemMarginBetween - containerPadding);
  });
};

export var CarouselInner = /*#__PURE__*/function (_Component) {
  _inherits(CarouselInner, _Component);

  var _super = _createSuper(CarouselInner);

  function CarouselInner() {
    var _this;

    _classCallCheck(this, CarouselInner);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      isTouched: false
    };
    _this.carouselInner = React.createRef();

    _this.onResizeObserve = function (_ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          entry = _ref2[0];

      var widthInner = entry.contentRect.width;

      _this.props.onResizeInner(widthInner);
    };

    _this.getElementPadding = function (element) {
      return parseInt(domElementHelper.getComputedStyle(element, 'padding-left')) + parseInt(domElementHelper.getComputedStyle(element, 'padding-right'));
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

  _createClass(CarouselInner, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.observer = new ResizeObserver(this.onResizeObserve);
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
          legacyMode = _this$props3.legacyMode,
          data = _this$props3.data,
          itemMinWidth = _this$props3.itemMinWidth,
          renderItem = _this$props3.renderItem,
          indexPageVisible = _this$props3.indexPageVisible,
          numColumns = _this$props3.numColumns,
          numPages = _this$props3.numPages,
          itemMarginBetween = _this$props3.itemMarginBetween,
          showOtherPages = _this$props3.showOtherPages,
          pagesClassName = _this$props3.pagesClassName,
          viewedPages = _this$props3.viewedPages,
          exportVisibilityProps = _this$props3.exportVisibilityProps;
      var rangePage = createRangeFromZeroTo(numPages);
      return /*#__PURE__*/React.createElement(StyledCarouselInner, {
        ref: this.carouselInner,
        onScroll: this.handleInnerScroll,
        onTouchStart: this.handleTouchStart,
        onTouchEnd: this.handleTouchEnd,
        showOtherPages: showOtherPages,
        className: "k-Carousel__inner"
      }, rangePage.map(function (index) {
        var isActivePage = indexPageVisible === index;
        var hasPageBeenViewed = viewedPages.has(index);
        return /*#__PURE__*/React.createElement(StyledCarouselPageContainer, {
          key: index,
          index: index,
          indexPageVisible: indexPageVisible,
          itemMarginBetween: itemMarginBetween,
          onClick: _this2.handlePageClick(index),
          showOtherPages: showOtherPages,
          className: classNames('k-Carousel__inner__pageContainer', pagesClassName, {
            'k-Carousel__inner__pageContainer--isActivePage': isActivePage,
            'k-Carousel__inner__pageContainer--hasBeenViewed': hasPageBeenViewed
          })
        }, /*#__PURE__*/React.createElement(CarouselPage, {
          legacyMode: legacyMode,
          data: legacyMode ? getDataForPage(data, index, numColumns) : null,
          numColumns: numColumns,
          itemMinWidth: itemMinWidth,
          itemMarginBetween: itemMarginBetween,
          renderItem: legacyMode ? renderItem : getDataForPage(renderItem, index, numColumns),
          isActivePage: isActivePage,
          hasPageBeenViewed: hasPageBeenViewed,
          exportVisibilityProps: exportVisibilityProps
        }));
      }));
    }
  }]);

  return CarouselInner;
}(Component);
var StyledCarouselInner = styled.div.withConfig({
  displayName: "carousel-inner__StyledCarouselInner",
  componentId: "wljpd2-0"
})(["display:flex;flex-direction:row;overflow-x:scroll;scroll-behavior:smooth;-ms-over-flow-style:none;-webkit-overflow-scrolling:touch;scroll-snap-type:", ";min-height:1;&::-webkit-scrollbar{display:none;}", ""], supportScrollSnap ? 'mandatory' : 'none', function (_ref3) {
  var showOtherPages = _ref3.showOtherPages;
  return showOtherPages && css(["padding:0 ", ";scroll-padding:", ";@media (min-width:", "){padding:0 ", ";scroll-padding:", ";}"], pxToRem(CONTAINER_PADDING_MOBILE), pxToRem(CONTAINER_PADDING_MOBILE), pxToRem(ScreenConfig.S.min), pxToRem(CONTAINER_PADDING), pxToRem(CONTAINER_PADDING));
});
var StyledCarouselPageContainer = styled.div.withConfig({
  displayName: "carousel-inner__StyledCarouselPageContainer",
  componentId: "wljpd2-1"
})(["width:100%;flex-shrink:0;scroll-snap-align:", ";", " ", " ", ""], supportScrollSnap ? 'center' : 'none', function (_ref4) {
  var showOtherPages = _ref4.showOtherPages;
  return showOtherPages && css(["&:last-child{padding-right:", ";@media (min-width:", "){padding-right:", ";}}"], pxToRem(CONTAINER_PADDING_MOBILE), pxToRem(ScreenConfig.S.min), pxToRem(CONTAINER_PADDING));
}, function (_ref5) {
  var index = _ref5.index,
      indexPageVisible = _ref5.indexPageVisible;
  return index !== indexPageVisible && css(["cursor:pointer;"]);
}, function (_ref6) {
  var index = _ref6.index,
      itemMarginBetween = _ref6.itemMarginBetween;
  return index && css(["margin-left:", ";"], pxToRem(itemMarginBetween));
});