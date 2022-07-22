import React, { Component, Fragment } from 'react';
import deprecated from 'prop-types-extra/lib/deprecated';
import PropTypes from 'prop-types';
import { createRangeFromZeroTo } from '../../../../helpers/utils/range';
import { withMediaQueries } from '../../../../hoc/media-queries';
import { CONTAINER_PADDING, CONTAINER_PADDING_THIN } from '../../../../constants/grid-config';
import { Button } from '../../../action/button';
import { ArrowIcon } from '../../../graphics/icons/arrow-icon';
import { CarouselInner } from './components/carousel-inner';
import { VisuallyHidden } from '../../../accessibility/visually-hidden';
import classNames from 'classnames';
import { Grid, GridCol } from '../../../layout/grid';
import { pxToRem } from '../../../../helpers/utils/typography';
import { StyledCarouselContainer, OUTLINE_PLUS_OFFSET } from './styles';

const getDataLength = _ref => {
  let {
    data,
    children
  } = _ref;
  if (!!data) return data.length;
  return React.Children.count(children);
};

export const getNumberOfItemsPerPageForWidth = (width, itemMinWidth, itemMarginBetween, itemsPerPage) => {
  if (!!itemsPerPage && itemMinWidth === 0) return itemsPerPage;
  if (width === 0 || itemMinWidth === 0) return 0;
  const remainingWidthWithOneCard = width - itemMinWidth;
  const itemWidthAndMargin = itemMinWidth + itemMarginBetween;
  const numberOfItemsPerPage = Math.floor(remainingWidthWithOneCard / itemWidthAndMargin) + 1;
  return numberOfItemsPerPage;
};
export const getNumberOfPagesForColumnsAndDataLength = (dataLength, numberOfItemsPerPage) => {
  if (dataLength === 0 || numberOfItemsPerPage === 0) return 0;
  const numberOfPages = Math.ceil(dataLength / numberOfItemsPerPage);
  return numberOfPages;
};
export const checkPage = (numberOfPages, newPage) => {
  if (numberOfPages < 1) return 0;
  if (newPage < 0) return 0;
  if (newPage >= numberOfPages) return numberOfPages - 1;
  return newPage;
};
export const checkPageLoop = (numberOfPages, newPage) => {
  if (numberOfPages < 1) return 0;
  if (newPage < 0) return numberOfPages - 1;
  if (newPage >= numberOfPages) return 0;
  return newPage;
};

const getMarginBetweenAccordingToViewport = (baseItemMarginBetween, viewportIsXSOrLess, viewportIsMOrLess) => {
  if (viewportIsXSOrLess) return CONTAINER_PADDING_THIN / 2 - OUTLINE_PLUS_OFFSET * 2;
  if (viewportIsMOrLess) return CONTAINER_PADDING / 2 - OUTLINE_PLUS_OFFSET * 2;
  return baseItemMarginBetween - OUTLINE_PLUS_OFFSET * 2;
};

class CarouselBase extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      currentPageIndex: 0,
      numberOfItemsPerPage: this.props.itemsPerPage > 0 ? this.props.itemsPerPage : 3,
      numberOfPages: getNumberOfPagesForColumnsAndDataLength(getDataLength({
        data: this.props.data,
        children: this.props.children
      }), this.props.itemsPerPage > 0 ? this.props.itemsPerPage : 3)
    };
    this.viewedPages = new Set();

    this.onResizeInner = innerWidth => {
      const {
        data,
        children,
        itemMinWidth,
        itemsPerPage,
        baseItemMarginBetween,
        viewportIsXSOrLess,
        viewportIsMOrLess
      } = this.props;
      const itemMarginBetween = getMarginBetweenAccordingToViewport(baseItemMarginBetween, viewportIsXSOrLess, viewportIsMOrLess);
      const numberOfItemsPerPage = getNumberOfItemsPerPageForWidth(innerWidth, itemMinWidth, itemMarginBetween, itemsPerPage);
      const numberOfPages = getNumberOfPagesForColumnsAndDataLength(getDataLength({
        data,
        children
      }), numberOfItemsPerPage);

      if (this.state.numberOfItemsPerPage !== numberOfItemsPerPage || this.state.numberOfPages !== numberOfPages) {
        const currentPageIndex = this.state.currentPageIndex > numberOfPages - 1 ? numberOfPages - 1 : this.state.currentPageIndex;
        this.setState({
          numberOfItemsPerPage,
          numberOfPages,
          currentPageIndex
        });
      }
    };

    this.goNextPage = () => {
      const {
        loop
      } = this.props;
      const {
        numberOfPages,
        currentPageIndex
      } = this.state;
      const newPage = loop ? checkPageLoop(numberOfPages, currentPageIndex + 1) : checkPage(numberOfPages, currentPageIndex + 1);
      this.viewedPages.add(newPage);
      this.setState({
        currentPageIndex: newPage
      });
    };

    this.goPrevPage = () => {
      const {
        loop
      } = this.props;
      const {
        numberOfPages,
        currentPageIndex
      } = this.state;
      const newPage = loop ? checkPageLoop(numberOfPages, currentPageIndex - 1) : checkPage(numberOfPages, currentPageIndex - 1);
      this.viewedPages.add(newPage);
      this.setState({
        currentPageIndex: newPage
      });
    };

    this.goToPage = indexPageToGo => {
      const {
        loop
      } = this.props;
      const {
        numberOfPages
      } = this.state;
      const newPage = loop ? checkPageLoop(numberOfPages, indexPageToGo) : checkPage(numberOfPages, indexPageToGo);
      this.viewedPages.add(newPage);
      this.setState({
        currentPageIndex: newPage
      });
    };

    this.renderCarouselInner = () => {
      const {
        data,
        renderItem,
        children,
        baseItemMarginBetween,
        viewportIsXSOrLess,
        viewportIsMOrLess,
        pagesClassName,
        exportVisibilityProps,
        pageClickText
      } = this.props;
      const {
        currentPageIndex,
        numberOfItemsPerPage,
        numberOfPages
      } = this.state;
      const itemMarginBetween = getMarginBetweenAccordingToViewport(baseItemMarginBetween, viewportIsXSOrLess, viewportIsMOrLess);
      let items = children; // legacy mode

      if (!!data && !!renderItem) {
        items = [...data].map((item, index) => /*#__PURE__*/React.createElement(Fragment, {
          key: item
        }, renderItem({
          item: data[index]
        })));
      }

      return /*#__PURE__*/React.createElement(CarouselInner, {
        currentPageIndex: currentPageIndex,
        exportVisibilityProps: exportVisibilityProps,
        goToPage: this.goToPage,
        itemMarginBetween: itemMarginBetween,
        items: items,
        numberOfItemsPerPage: numberOfItemsPerPage,
        numberOfPages: numberOfPages,
        onResizeInner: this.onResizeInner,
        pagesClassName: pagesClassName,
        viewedPages: this.viewedPages,
        pageClickText: pageClickText
      });
    };

    this.renderPagination = () => {
      const {
        viewportIsXSOrLess,
        hidePagination,
        hidePaginationOnMobile,
        prevButtonText,
        nextButtonText,
        smallButtons,
        firstButtonText,
        lastButtonText,
        showPageSquares,
        preferCompletePaginationOnMobile,
        loop
      } = this.props;
      const {
        currentPageIndex,
        numberOfPages
      } = this.state;
      if (hidePagination) return;
      if (viewportIsXSOrLess && hidePaginationOnMobile) return;
      if (numberOfPages <= 1) return;

      if (viewportIsXSOrLess && !preferCompletePaginationOnMobile) {
        const rangePage = createRangeFromZeroTo(numberOfPages);
        return /*#__PURE__*/React.createElement("div", {
          className: "k-Carousel__pageControl"
        }, rangePage.map(index => /*#__PURE__*/React.createElement("div", {
          className: classNames('k-Carousel__pageControl__pageDot', {
            'k-Carousel__pageControl__pageDot--isVisible': currentPageIndex === index
          }),
          key: "pageDotIndex_" + index
        })), /*#__PURE__*/React.createElement("div", {
          onClick: this.goPrevPage,
          className: "k-Carousel__pageControl__controlButton k-Carousel__pageControl__controlButton--prev"
        }), /*#__PURE__*/React.createElement("div", {
          onClick: this.goNextPage,
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
        fit: "icon",
        modifier: "beryllium",
        size: smallButtons ? 'small' : 'medium',
        onClick: this.goPrevPage,
        disabled: !loop && (currentPageIndex < 1 || numberOfPages < 1)
      }, /*#__PURE__*/React.createElement(VisuallyHidden, null, loop && (currentPageIndex < 1 || numberOfPages < 1) ? lastButtonText : prevButtonText), /*#__PURE__*/React.createElement(ArrowIcon, {
        direction: "left",
        "aria-hidden": true
      })), /*#__PURE__*/React.createElement(Button, {
        type: "button",
        className: "k-Carousel__pagination__button",
        fit: "icon",
        modifier: "beryllium",
        size: smallButtons ? 'small' : 'medium',
        onClick: this.goNextPage,
        disabled: !loop && currentPageIndex >= numberOfPages - 1
      }, /*#__PURE__*/React.createElement(VisuallyHidden, null, loop && currentPageIndex >= numberOfPages - 1 ? firstButtonText : nextButtonText), /*#__PURE__*/React.createElement(ArrowIcon, {
        direction: "right",
        "aria-hidden": true
      }))), showPageSquares && /*#__PURE__*/React.createElement("div", {
        className: "k-Carousel__pagination__squaresContainer"
      }, createRangeFromZeroTo(numberOfPages).map(index => /*#__PURE__*/React.createElement("div", {
        key: index,
        className: classNames('k-Carousel__pagination__square', {
          'k-Carousel__pagination__square--isActive': index === currentPageIndex
        })
      }))));
    };
  }

  componentDidMount() {
    this.viewedPages.add(0);
  }

  render() {
    const {
      data,
      renderItem,
      withoutLeftOffset,
      baseItemMarginBetween,
      children,
      className,
      paginationPosition,
      showOtherPages,
      itemMinWidth,
      style,
      shadowSize
    } = this.props;
    if (getDataLength({
      data,
      children
    }) === 0) return null; // legacy mode

    if (!!data && !!renderItem) {
      return /*#__PURE__*/React.createElement(StyledCarouselContainer, {
        baseItemMarginBetween: baseItemMarginBetween,
        itemMinWidth: itemMinWidth,
        numberOfItemsPerPage: this.state.numberOfItemsPerPage,
        numberOfPages: this.state.numberOfPages,
        className: classNames('k-Carousel', className, 'k-LegacyCarousel')
      }, /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement(GridCol, {
        col: "12",
        "col-l": withoutLeftOffset ? '11' : '10',
        "offset-l": withoutLeftOffset ? '0' : '1'
      }, this.renderCarouselInner()), /*#__PURE__*/React.createElement(GridCol, {
        col: "12",
        "col-l": "1"
      }, this.renderPagination())));
    }

    return /*#__PURE__*/React.createElement(StyledCarouselContainer, {
      style: { ...style,
        '--carousel-shadowSize': pxToRem(shadowSize) || null,
        '--carousel-baseItemMarginBetween': pxToRem(baseItemMarginBetween),
        '--carousel-numberOfItemsPerPage': this.state.numberOfItemsPerPage,
        '--carousel-numberOfPages': this.state.numberOfPages
      },
      paginationPosition: paginationPosition,
      className: classNames('k-Carousel', className, {
        'k-Carousel--showOtherPages': showOtherPages
      })
    }, this.renderCarouselInner(), this.renderPagination());
  }

}

const positionsPropTypes = PropTypes.oneOf(['top', 'right', 'bottom', 'left', 'bottom-left', 'bottom-right']);
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
  pageClickText: page => {
    return "Page " + page;
  },
  firstButtonText: 'First items',
  lastButtonText: 'Last items',
  showPageSquares: false,
  smallButtons: false,
  loop: false,
  exportVisibilityProps: false,
  shadowSize: 0
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
  pageClickText: PropTypes.func,
  smallButtons: PropTypes.bool,
  firstButtonText: PropTypes.string,
  lastButtonText: PropTypes.string,
  showPageSquares: PropTypes.bool,
  loop: PropTypes.bool,
  exportVisibilityProps: PropTypes.bool,
  shadowSize: PropTypes.number,
  data: deprecated(PropTypes.array, 'Provide `Carousel` with children instead of data/renderItem'),
  renderItem: deprecated(PropTypes.func, 'Provide `Carousel` with children instead of data/renderItem'),
  withoutLeftOffset: deprecated(PropTypes.bool, 'Provide `Carousel` with children instead of data/renderItem')
};
export const Carousel = withMediaQueries({
  viewportIsXSOrLess: true,
  viewportIsMOrLess: true,
  exposedMethods: ['goToPage']
})(CarouselBase);