import _extends from "@babel/runtime/helpers/esm/extends";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component, Fragment } from 'react';
import deprecated from 'prop-types-extra/lib/deprecated';
import PropTypes from 'prop-types';
import { createRangeFromZeroTo } from '../../../helpers/utils/range';
import { withMediaQueries } from '../../../hoc/media-queries';
import { CONTAINER_PADDING, CONTAINER_PADDING_MOBILE } from '../../../constants/grid-config';
import { Button } from '../../../components/buttons/button/button';
import { ArrowIcon } from '../../../components/icons/arrow-icon';
import { CarouselInner } from './components/carousel-inner';
import { VisuallyHidden } from '../../../components/accessibility/visually-hidden';
import classNames from 'classnames';
import { Grid, GridCol } from '../../../components/grid/grid';
import { StyledCarouselContainer } from './styles';

var getDataLength = function getDataLength(_ref) {
  var data = _ref.data,
      children = _ref.children;
  if (!!data) return data.length;
  return React.Children.count(children);
};

export var getNumberOfItemsPerPageForWidth = function getNumberOfItemsPerPageForWidth(width, itemMinWidth, itemMarginBetween, itemsPerPage) {
  if (!!itemsPerPage && itemMinWidth === 0) return itemsPerPage;
  if (width === 0 || itemMinWidth === 0) return 0;
  var remainingWidthWithOneCard = width - itemMinWidth;
  var itemWidthAndMargin = itemMinWidth + itemMarginBetween;
  var numberOfItemsPerPage = Math.floor(remainingWidthWithOneCard / itemWidthAndMargin) + 1;
  return numberOfItemsPerPage;
};
export var getNumberOfPagesForColumnsAndDataLength = function getNumberOfPagesForColumnsAndDataLength(dataLength, numberOfItemsPerPage) {
  if (dataLength === 0 || numberOfItemsPerPage === 0) return 0;
  var numberOfPages = Math.ceil(dataLength / numberOfItemsPerPage);
  return numberOfPages;
};
export var checkPage = function checkPage(numberOfPages, newPage) {
  if (numberOfPages < 1) return 0;
  if (newPage < 0) return 0;
  if (newPage >= numberOfPages) return numberOfPages - 1;
  return newPage;
};
export var checkPageLoop = function checkPageLoop(numberOfPages, newPage) {
  if (numberOfPages < 1) return 0;
  if (newPage < 0) return numberOfPages - 1;
  if (newPage >= numberOfPages) return 0;
  return newPage;
};

var getMarginBetweenAccordingToViewport = function getMarginBetweenAccordingToViewport(baseItemMarginBetween, viewportIsXSOrLess, viewportIsMOrLess) {
  if (viewportIsXSOrLess) return CONTAINER_PADDING_MOBILE / 2;
  if (viewportIsMOrLess) return CONTAINER_PADDING / 2;
  return baseItemMarginBetween;
};

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
        items = _toConsumableArray(data).map(function (item, index) {
          return /*#__PURE__*/React.createElement(Fragment, {
            key: item
          }, renderItem({
            item: data[index]
          }));
        });
      }

      return /*#__PURE__*/React.createElement(CarouselInner, {
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
        var rangePage = createRangeFromZeroTo(numberOfPages);
        return /*#__PURE__*/React.createElement("div", {
          className: "k-Carousel__pageControl"
        }, rangePage.map(function (index) {
          return /*#__PURE__*/React.createElement("div", {
            className: classNames('k-Carousel__pageControl__pageDot', {
              'k-Carousel__pageControl__pageDot--isVisible': currentPageIndex === index
            }),
            key: "pageDotIndex_".concat(index)
          });
        }), /*#__PURE__*/React.createElement("div", {
          onClick: _this.goPrevPage,
          className: "k-Carousel__pageControl__controlButton k-Carousel__pageControl__controlButton--prev"
        }), /*#__PURE__*/React.createElement("div", {
          onClick: _this.goNextPage,
          className: "k-Carousel__pageControl__controlButton k-Carousel__pageControl__controlButton--next"
        }));
      }

      return /*#__PURE__*/React.createElement("div", {
        className: "k-Carousel__pagination"
      }, /*#__PURE__*/React.createElement("div", {
        className: "k-Carousel__pagination__buttonContainer"
      }, /*#__PURE__*/React.createElement(Button, {
        type: "button",
        className: "k-Carousel__pagination__button",
        icon: true,
        modifier: "beryllium",
        tiny: tinyButtons,
        onClick: _this.goPrevPage,
        disabled: !loop && (currentPageIndex < 1 || numberOfPages < 1)
      }, /*#__PURE__*/React.createElement(VisuallyHidden, null, loop && (currentPageIndex < 1 || numberOfPages < 1) ? lastButtonText : prevButtonText), /*#__PURE__*/React.createElement(ArrowIcon, {
        version: "solid",
        direction: "left",
        "aria-hidden": true
      })), /*#__PURE__*/React.createElement(Button, {
        type: "button",
        className: "k-Carousel__pagination__button",
        icon: true,
        modifier: "beryllium",
        tiny: tinyButtons,
        onClick: _this.goNextPage,
        disabled: !loop && currentPageIndex >= numberOfPages - 1
      }, /*#__PURE__*/React.createElement(VisuallyHidden, null, loop && currentPageIndex >= numberOfPages - 1 ? firstButtonText : nextButtonText), /*#__PURE__*/React.createElement(ArrowIcon, {
        version: "solid",
        direction: "right",
        "aria-hidden": true
      }))), showPageSquares && /*#__PURE__*/React.createElement("div", {
        className: "k-Carousel__pagination__squaresContainer"
      }, createRangeFromZeroTo(numberOfPages).map(function (index) {
        return /*#__PURE__*/React.createElement("div", {
          key: index,
          className: classNames('k-Carousel__pagination__square', {
            'k-Carousel__pagination__square--isActive': index === currentPageIndex
          })
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
        return /*#__PURE__*/React.createElement(StyledCarouselContainer, _extends({}, commonProps, {
          className: classNames('k-Carousel', className, 'k-LegacyCarousel')
        }), /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement(GridCol, {
          col: "12",
          "col-l": withoutLeftOffset ? '11' : '10',
          "offset-l": withoutLeftOffset ? '0' : '1'
        }, this.renderCarouselInner()), /*#__PURE__*/React.createElement(GridCol, {
          col: "12",
          "col-l": "1"
        }, this.renderPagination())));
      }

      return /*#__PURE__*/React.createElement(StyledCarouselContainer, _extends({}, commonProps, {
        paginationPosition: paginationPosition,
        className: classNames('k-Carousel', className, {
          'k-Carousel--showOtherPages': showOtherPages
        })
      }), this.renderCarouselInner(), this.renderPagination());
    }
  }]);

  return CarouselBase;
}(Component);

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
  itemMinWidth: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number,
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
    default: positionsPropTypes,
    fromXxs: positionsPropTypes,
    fromXs: positionsPropTypes,
    fromS: positionsPropTypes,
    fromM: positionsPropTypes,
    fromL: positionsPropTypes,
    fromXl: positionsPropTypes
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
var positionsPropTypes = PropTypes.oneOf(['top', 'right', 'bottom', 'left', 'bottom-left', 'bottom-right']);
export var Carousel = withMediaQueries({
  viewportIsXSOrLess: true,
  viewportIsMOrLess: true,
  exposedMethods: ['goToPage']
})(CarouselBase);