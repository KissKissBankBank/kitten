import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react';
import deprecated from 'prop-types-extra/lib/deprecated';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { pxToRem } from '../../../helpers/utils/typography';
import { ScreenConfig } from '../../../constants/screen-config';
import { createRangeFromZeroTo } from '../../../helpers/utils/range';
import { withMediaQueries } from '../../../hoc/media-queries';
import { CONTAINER_PADDING, CONTAINER_PADDING_MOBILE, GUTTER } from '../../../constants/grid-config';
import ColorsConfig from '../../../constants/colors-config';
import { Button } from '../../../components/buttons/button/button';
import { ArrowIcon } from '../../../components/icons/arrow-icon';
import { CarouselInner } from './components/carousel-inner';
import { VisuallyHidden } from '../../../components/accessibility/visually-hidden';
import classNames from 'classnames';
import { Grid, GridCol } from '../../../components/grid/grid';

var getDataLength = function getDataLength(_ref) {
  var data = _ref.data,
      children = _ref.children;
  if (!!data) return data.length;
  return React.Children.count(children);
};

export var getNumColumnsForWidth = function getNumColumnsForWidth(width, itemMinWidth, itemMarginBetween) {
  if (width === 0 || itemMinWidth === 0) return 0;
  var remainingWidthWithOneCard = width - itemMinWidth;
  var itemWidthAndMargin = itemMinWidth + itemMarginBetween;
  var numColumns = Math.floor(remainingWidthWithOneCard / itemWidthAndMargin) + 1;
  return numColumns;
};
export var getNumPagesForColumnsAndDataLength = function getNumPagesForColumnsAndDataLength(dataLength, numColumns) {
  if (dataLength === 0 || numColumns === 0) return 0;
  var numPages = Math.ceil(dataLength / numColumns);
  return numPages;
};
export var checkPage = function checkPage(numPages, newPage) {
  if (numPages < 1) return 0;
  if (newPage < 0) return 0;
  if (newPage >= numPages) return numPages - 1;
  return newPage;
};
export var checkPageLoop = function checkPageLoop(numPages, newPage) {
  if (numPages < 1) return 0;
  if (newPage < 0) return numPages - 1;
  if (newPage >= numPages) return 0;
  return newPage;
};

var getMarginBetweenAccordingToViewport = function getMarginBetweenAccordingToViewport(baseItemMarginBetween, viewportIsXSOrLess, viewportIsMOrLess) {
  if (viewportIsXSOrLess) return CONTAINER_PADDING_MOBILE / 2;
  if (viewportIsMOrLess) return CONTAINER_PADDING / 2;
  return baseItemMarginBetween;
};

var propTypesPositions = PropTypes.oneOf(['top', 'right', 'bottom', 'left', 'bottom-left', 'bottom-right']);

var CarouselBase = /*#__PURE__*/function (_Component) {
  _inherits(CarouselBase, _Component);

  var _super = _createSuper(CarouselBase);

  function CarouselBase() {
    var _this;

    _classCallCheck(this, CarouselBase);

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
      return /*#__PURE__*/React.createElement(CarouselInner, {
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
        var rangePage = createRangeFromZeroTo(numPages);
        return /*#__PURE__*/React.createElement(PageControl, {
          className: "k-Carousel__pageControl"
        }, rangePage.map(function (index) {
          return /*#__PURE__*/React.createElement(PageDot, {
            className: "k-Carousel__pageControl__pageDot",
            index: index,
            key: index,
            visibleIndex: indexPageVisible
          });
        }), /*#__PURE__*/React.createElement(PageControlButton, {
          prev: true,
          onClick: _this.goPrevPage,
          className: "k-Carousel__pageControl__controlButton"
        }), /*#__PURE__*/React.createElement(PageControlButton, {
          next: true,
          onClick: _this.goNextPage,
          className: "k-Carousel__pageControl__controlButton"
        }));
      }

      return /*#__PURE__*/React.createElement(CarouselPagination, {
        position: paginationPosition,
        itemMarginBetween: itemMarginBetween,
        className: "k-Carousel__pagination"
      }, /*#__PURE__*/React.createElement(PaginationButtons, {
        position: paginationPosition,
        className: "k-Carousel__pagination__buttonContainer"
      }, /*#__PURE__*/React.createElement(PageButton, {
        className: "k-Carousel__pagination__button",
        icon: true,
        modifier: "beryllium",
        tiny: tinyButtons,
        onClick: _this.goPrevPage,
        disabled: !loop && (indexPageVisible < 1 || numPages < 1)
      }, /*#__PURE__*/React.createElement(VisuallyHidden, null, loop && (indexPageVisible < 1 || numPages < 1) ? lastButtonText : prevButtonText), /*#__PURE__*/React.createElement(ArrowIcon, {
        version: "solid",
        direction: "left",
        "aria-hidden": true
      })), /*#__PURE__*/React.createElement(PageButton, {
        className: "k-Carousel__pagination__button",
        icon: true,
        modifier: "beryllium",
        tiny: tinyButtons,
        onClick: _this.goNextPage,
        disabled: !loop && indexPageVisible >= numPages - 1
      }, /*#__PURE__*/React.createElement(VisuallyHidden, null, loop && indexPageVisible >= numPages - 1 ? firstButtonText : nextButtonText), /*#__PURE__*/React.createElement(ArrowIcon, {
        version: "solid",
        direction: "right",
        "aria-hidden": true
      }))), showPageSquares && /*#__PURE__*/React.createElement(PaginationSquares, {
        className: "k-Carousel__pagination__squaresContainer"
      }, createRangeFromZeroTo(numPages).map(function (index) {
        return /*#__PURE__*/React.createElement(PageSquare, {
          key: index,
          isActive: index === indexPageVisible,
          className: "k-Carousel__pagination__square"
        });
      })));
    };

    return _this;
  }

  _createClass(CarouselBase, [{
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
          return /*#__PURE__*/React.createElement(StyledLegacyCarousel, {
            className: classNames('k-Carousel', className, 'k-LegacyCarousel', 'k-LegacyCarousel--noGrid')
          }, this.renderCarouselInner(), this.renderPagination());
        }

        return /*#__PURE__*/React.createElement(StyledLegacyCarousel, {
          className: classNames('k-Carousel', className, 'k-LegacyCarousel', 'k-LegacyCarousel--inGrid')
        }, /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement(GridCol, {
          col: withoutLeftOffset ? '11' : '10',
          offset: withoutLeftOffset ? '0' : '1'
        }, this.renderCarouselInner()), /*#__PURE__*/React.createElement(GridCol, {
          col: "1"
        }, this.renderPagination())));
      }

      return /*#__PURE__*/React.createElement(FlexContainer, {
        paginationPosition: paginationPosition,
        className: classNames('k-Carousel', className)
      }, this.renderCarouselInner(), this.renderPagination());
    }
  }]);

  return CarouselBase;
}(Component);

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
  itemMinWidth: PropTypes.number.isRequired,
  baseItemMarginBetween: PropTypes.number.isRequired,
  children: PropTypes.node,
  viewportIsMOrLess: PropTypes.bool.isRequired,
  viewportIsXSOrLess: PropTypes.bool.isRequired,
  hidePaginationOnMobile: PropTypes.bool,
  hidePagination: PropTypes.bool,
  showOtherPages: PropTypes.bool,
  pagesClassName: PropTypes.string,
  preferCompletePaginationOnMobile: PropTypes.bool,
  paginationPosition: PropTypes.shape({
    default: propTypesPositions,
    fromXxs: propTypesPositions,
    fromXs: propTypesPositions,
    fromS: propTypesPositions,
    fromM: propTypesPositions,
    fromL: propTypesPositions,
    fromXl: propTypesPositions
  }),
  prevButtonText: PropTypes.string,
  nextButtonText: PropTypes.string,
  tinyButtons: PropTypes.bool,
  firstButtonText: PropTypes.string,
  lastButtonText: PropTypes.string,
  showPageSquares: PropTypes.bool,
  loop: PropTypes.bool,
  exportVisibilityProps: PropTypes.bool,
  data: deprecated(PropTypes.array, 'Provide `Carousel` with children instead of data/renderItem'),
  renderItem: deprecated(PropTypes.func, 'Provide `Carousel` with children instead of data/renderItem'),
  withoutLeftOffset: deprecated(PropTypes.bool, 'Provide `Carousel` with children instead of data/renderItem')
};
var StyledLegacyCarousel = styled.div.withConfig({
  displayName: "carousel__StyledLegacyCarousel",
  componentId: "sc-1vyxuma-0"
})(["&.k-LegacyCarousel--noGrid .k-Carousel__inner{padding:0 ", ";scroll-padding:", ";&::after{content:'';display:block;flex-shrink:0;width:", ";}@media (min-width:", "){padding:0 ", ";scroll-padding:", ";&::after{width:", ";}}}&.k-LegacyCarousel--inGrid .k-Carousel__pagination__buttonContainer{flex-direction:column-reverse !important;}"], pxToRem(CONTAINER_PADDING_MOBILE), pxToRem(CONTAINER_PADDING_MOBILE), pxToRem(CONTAINER_PADDING_MOBILE), pxToRem(ScreenConfig.S.min), pxToRem(CONTAINER_PADDING), pxToRem(CONTAINER_PADDING), pxToRem(CONTAINER_PADDING));

var flexContainerdirectionStyle = function flexContainerdirectionStyle(positionType) {
  return function (_ref2) {
    var paginationPosition = _ref2.paginationPosition;
    if (!paginationPosition[positionType]) return;

    switch (paginationPosition[positionType]) {
      case 'top':
        return css(["flex-direction:column-reverse;& >:nth-child(2){margin:0;margin-bottom:", ";}"], pxToRem(GUTTER));

      case 'bottom':
      case 'bottom-left':
      case 'bottom-right':
        return css(["flex-direction:column;& >:nth-child(2){margin:0;margin-top:", ";}"], pxToRem(GUTTER));

      case 'left':
        return css(["flex-direction:row-reverse;& >:nth-child(2){margin:0;margin-right:", ";}"], pxToRem(GUTTER));

      case 'right':
        return css(["flex-direction:row;& >:nth-child(2){margin:0;margin-left:", ";}"], pxToRem(GUTTER));
    }
  };
};

var FlexContainer = styled.div.withConfig({
  displayName: "carousel__FlexContainer",
  componentId: "sc-1vyxuma-1"
})(["display:flex;", " @media (min-width:", "px){", "}@media (min-width:", "px){", "}@media (min-width:", "px){", "}@media (min-width:", "px){", "}@media (min-width:", "px){", "}@media (min-width:", "px){", "}"], flexContainerdirectionStyle('default'), ScreenConfig.XXS.min, flexContainerdirectionStyle('fromXxs'), ScreenConfig.XS.min, flexContainerdirectionStyle('fromXs'), ScreenConfig.S.min, flexContainerdirectionStyle('fromS'), ScreenConfig.M.min, flexContainerdirectionStyle('fromM'), ScreenConfig.L.min, flexContainerdirectionStyle('fromL'), ScreenConfig.XL.min, flexContainerdirectionStyle('fromXl'));

var paginationPositionStyle = function paginationPositionStyle(positionType) {
  return function (_ref3) {
    var position = _ref3.position;
    if (!position[positionType]) return;

    switch (position[positionType]) {
      case 'top':
        return css(["align-items:flex-end;flex-direction:row;"]);

      case 'bottom':
      case 'bottom-left':
        return css(["align-items:flex-start;flex-direction:row;"]);

      case 'bottom-right':
        return css(["align-items:flex-start;flex-direction:row-reverse;"]);

      case 'left':
        return css(["align-items:flex-end;flex-direction:column;"]);

      case 'right':
        return css(["align-items:flex-start;flex-direction:column;"]);
    }
  };
};

var CarouselPagination = styled.div.withConfig({
  displayName: "carousel__CarouselPagination",
  componentId: "sc-1vyxuma-2"
})(["display:flex;justify-content:space-between;", " @media (min-width:", "px){", "}@media (min-width:", "px){", "}@media (min-width:", "px){", "}@media (min-width:", "px){", "}@media (min-width:", "px){", "}@media (min-width:", "px){", "}"], paginationPositionStyle('default'), ScreenConfig.XXS.min, paginationPositionStyle('fromXxs'), ScreenConfig.XS.min, paginationPositionStyle('fromXs'), ScreenConfig.S.min, paginationPositionStyle('fromS'), ScreenConfig.M.min, paginationPositionStyle('fromM'), ScreenConfig.L.min, paginationPositionStyle('fromL'), ScreenConfig.XL.min, paginationPositionStyle('fromXl'));
var PaginationSquares = styled.div.withConfig({
  displayName: "carousel__PaginationSquares",
  componentId: "sc-1vyxuma-3"
})(["display:flex;flex-direction:row;margin:", ";"], pxToRem(-2));
var PageSquare = styled.span.withConfig({
  displayName: "carousel__PageSquare",
  componentId: "sc-1vyxuma-4"
})(["display:inline-block;width:", ";height:", ";margin:", ";background-color:", ";", ""], pxToRem(6), pxToRem(6), pxToRem(2), ColorsConfig.font2, function (_ref4) {
  var isActive = _ref4.isActive;
  return isActive && css(["background-color:", ";"], ColorsConfig.font1);
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
        return css(["flex-direction:row;"]);

      case 'left':
        return css(["flex-direction:column;"]);

      case 'right':
        return css(["flex-direction:column-reverse;"]);
    }
  };
};

var PaginationButtons = styled.div.withConfig({
  displayName: "carousel__PaginationButtons",
  componentId: "sc-1vyxuma-5"
})(["display:flex;align-items:flex-start;margin:", ";", " @media (min-width:", "px){", "}@media (min-width:", "px){", "}@media (min-width:", "px){", "}@media (min-width:", "px){", "}@media (min-width:", "px){", "}@media (min-width:", "px){", "}"], pxToRem(-1), buttonsPositionStyle('default'), ScreenConfig.XXS.min, buttonsPositionStyle('fromXxs'), ScreenConfig.XS.min, buttonsPositionStyle('fromXs'), ScreenConfig.S.min, buttonsPositionStyle('fromS'), ScreenConfig.M.min, buttonsPositionStyle('fromM'), ScreenConfig.L.min, buttonsPositionStyle('fromL'), ScreenConfig.XL.min, buttonsPositionStyle('fromXl'));
var PageButton = styled(Button).withConfig({
  displayName: "carousel__PageButton",
  componentId: "sc-1vyxuma-6"
})(["margin:", ";"], pxToRem(1));
var PageControl = styled.div.withConfig({
  displayName: "carousel__PageControl",
  componentId: "sc-1vyxuma-7"
})(["display:flex;flex-direction:row;justify-content:center;position:relative;padding-top:", ";padding-bottom:", ";"], pxToRem(CONTAINER_PADDING_MOBILE / 2), pxToRem(CONTAINER_PADDING_MOBILE / 2));
var PageControlButton = styled.div.withConfig({
  displayName: "carousel__PageControlButton",
  componentId: "sc-1vyxuma-8"
})(["position:absolute;top:", ";bottom:", ";-webkit-tap-highlight-color:transparent;", " ", ""], pxToRem(CONTAINER_PADDING_MOBILE / 4), pxToRem(CONTAINER_PADDING_MOBILE / 4), function (_ref6) {
  var prev = _ref6.prev;
  return prev && css(["left:", ";right:50%;"], pxToRem(CONTAINER_PADDING_MOBILE));
}, function (_ref7) {
  var next = _ref7.next;
  return next && css(["right:", ";left:50%;"], pxToRem(CONTAINER_PADDING_MOBILE));
});
var PageDot = styled.div.withConfig({
  displayName: "carousel__PageDot",
  componentId: "sc-1vyxuma-9"
})(["width:", ";height:", ";margin-left:", ";margin-right:", ";border-radius:", ";background-color:", ";", ""], pxToRem(8), pxToRem(8), pxToRem(4), pxToRem(4), pxToRem(4), ColorsConfig.font1, function (_ref8) {
  var visibleIndex = _ref8.visibleIndex,
      index = _ref8.index;
  return visibleIndex === index && css(["background-color:", ";"], ColorsConfig.primary2);
});
export var Carousel = withMediaQueries({
  viewportIsXSOrLess: true,
  viewportIsMOrLess: true,
  exposedMethods: ['goToPage']
})(CarouselBase);