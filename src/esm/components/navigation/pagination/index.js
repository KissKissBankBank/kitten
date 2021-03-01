import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import React, { forwardRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Text } from '../../../components/typography/text';
import { ArrowIcon } from '../../../components/icons/arrow-icon';
import { ScreenConfig } from '../../../constants/screen-config';
import COLORS from '../../../constants/colors-config';
import { parseHtml } from '../../../helpers/utils/parser';
import { mediaQueries } from '../../../hoc/media-queries';
import { pxToRem } from '../../../helpers/utils/typography';
import classNames from 'classnames';
var StyledNav = styled.nav.withConfig({
  displayName: "pagination__StyledNav",
  componentId: "sc-19bydjm-0"
})([".Pagination__List{padding:0;display:inline-flex;}li{list-style:none;}.Pagination__ListItem{margin-right:0;@media (min-width:", "px){margin:", " ", ";}}.Pagination__ListItem__Points{text-align:center;align-self:center;width:", ";@media (min-width:", "px){margin:", " ", ";width:", ";}}.Pagination__ListItem__Points{text-align:center;align-self:center;width:", ";@media (min-width:", "px){margin:", " ", ";width:", ";}}.Pagination__ListItem__Arrow--direction-left{margin-right:", ";@media (min-width:", "px){margin-right:", ";}}.Pagination__ListItem__Arrow--direction-right{margin-left:", ";@media (min-width:", "px){margin-left:", ";}}.Pagination__Link{display:flex;justify-content:center;align-items:center;box-sizing:border-box;cursor:pointer;width:", ";height:", ";border-radius:0;border-width:0;border-style:solid;color:", ";border-color:", ";background-color:", ";transition:background-color 0.2s ease,border-color 0.2s ease,color 0.2s ease;@media (min-width:", "px){width:", ";height:", ";border-width:", ";}&:hover,&:focus{color:", ";border-color:", ";background-color:", ";text-decoration:none;}&:focus{outline:", " solid ", ";outline-offset:", ";}&:active{color:", ";border-color:", ";background-color:", ";text-decoration:none;}&[aria-current='page']{cursor:auto;color:", ";border-color:", ";background-color:", ";&:hover,&:focus,&:active{color:", ";border-color:", ";background-color:", ";}}&[aria-disabled='true']{color:", ";border-color:", ";background-color:", ";cursor:not-allowed;&:hover,&:focus,&:active{color:", ";border-color:", ";background-color:", ";}}}.Pagination__ArrowIcon{align-self:center;margin:0;padding:0;pointer-events:none;color:inherit;fill:currentColor;}&.Pagination--noMargin .Pagination__List{margin:0;}&.Pagination--isAligned-left .Pagination__List{display:flex;justify-content:flex-start;}&.Pagination--isAligned-center .Pagination__List{display:flex;justify-content:center;}&.Pagination--isAligned-right .Pagination__List{display:flex;justify-content:flex-end;}"], ScreenConfig.S.min, pxToRem(0), pxToRem(8), pxToRem(40), ScreenConfig.S.min, pxToRem(0), pxToRem(8), pxToRem(50), pxToRem(40), ScreenConfig.S.min, pxToRem(0), pxToRem(8), pxToRem(50), pxToRem(30), ScreenConfig.S.min, pxToRem(22), pxToRem(30), ScreenConfig.S.min, pxToRem(22), pxToRem(40), pxToRem(40), COLORS.font1, COLORS.line1, COLORS.background1, ScreenConfig.S.min, pxToRem(50), pxToRem(50), pxToRem(2), COLORS.primary1, COLORS.primary1, COLORS.background1, COLORS.primary4, pxToRem(2), pxToRem(2), COLORS.background1, COLORS.primary1, COLORS.primary1, COLORS.background1, COLORS.primary1, COLORS.primary1, COLORS.background1, COLORS.primary1, COLORS.primary1, COLORS.background1, COLORS.line2, COLORS.line2, COLORS.background1, COLORS.line2, COLORS.line2); // Returns an array with the given bounds

var range = function range(start, end) {
  return Array(end - start + 1).fill().map(function (_, index) {
    return start + index;
  });
}; // Returns an array of size `availableSlots` with page number integers
// and breaks "…" (represented as nulls).


export function pages(min, max, currentPage, availableSlots) {
  // 1, 2, 3
  if (max - min < availableSlots) {
    return range(min, max);
  } // 1, 2, 3, …, 42


  if (currentPage - min + 1 < availableSlots - 2) {
    return [].concat(_toConsumableArray(range(min, min - 1 + availableSlots - 2)), [null, max]);
  } // 1, …, 40, 41, 42


  if (max - currentPage < availableSlots - 2) {
    return [min, null].concat(_toConsumableArray(range(max + 1 - (availableSlots - 2), max)));
  } // 1, …, 21, …, 42


  var sides = Math.floor((availableSlots - 4) / 2);
  return [min, null].concat(_toConsumableArray(range(currentPage - sides, currentPage + sides)), [null, max]);
}
var PaginationBase = forwardRef(function (_ref2, _ref) {
  var prevButtonLabel = _ref2.prevButtonLabel,
      nextButtonLabel = _ref2.nextButtonLabel,
      goToPageLabel = _ref2.goToPageLabel,
      goToPageHref = _ref2.goToPageHref,
      onPageClick = _ref2.onPageClick,
      currentPageLabel = _ref2.currentPageLabel,
      currentPage = _ref2.currentPage,
      totalPages = _ref2.totalPages,
      ariaLabelProp = _ref2['aria-label'],
      viewportIsMOrLess = _ref2.viewportIsMOrLess,
      margin = _ref2.margin,
      align = _ref2.align,
      className = _ref2.className;
  var size = viewportIsMOrLess ? 5 : 7;
  var pageNumbers = pages(1, totalPages, currentPage, size);

  var preventClickDefault = function preventClickDefault(e) {
    return e.preventDefault();
  };

  var pageClickHandler = function pageClickHandler(number) {
    return function (event) {
      return onPageClick(number, event);
    };
  };

  var renderPage = function renderPage(number, index) {
    if (!number) return renderSpacer(index);
    var isActive = number === currentPage;
    var tag = isActive ? 'span' : 'a';
    var href = isActive ? null : goToPageHref(number);
    var ariaLabel = isActive ? currentPageLabel(number) : goToPageLabel(number);
    return /*#__PURE__*/React.createElement("li", {
      className: "Pagination__ListItem",
      key: "page-".concat(number)
    }, /*#__PURE__*/React.createElement(Text, {
      className: "Pagination__Link",
      tag: tag,
      href: href,
      key: "link-".concat(number),
      weight: "regular",
      decoration: "none",
      size: "tiny",
      "aria-current": isActive && 'page',
      "aria-label": ariaLabel,
      onClick: isActive ? null : pageClickHandler(number),
      tabIndex: "0"
    }, number));
  };

  var renderSpacer = function renderSpacer(index) {
    return /*#__PURE__*/React.createElement("li", {
      key: "spacer-".concat(index),
      className: "Pagination__ListItem__Points",
      "aria-hidden": "true"
    }, '…');
  };

  var renderArrowButton = function renderArrowButton(direction) {
    var buttonLabel = direction == 'left' ? parseHtml(prevButtonLabel) : parseHtml(nextButtonLabel);
    var isDisabled = direction == 'left' ? currentPage == 1 : currentPage == totalPages;
    var number = direction == 'left' ? currentPage == 1 ? 1 : currentPage - 1 : currentPage == totalPages ? totalPages : currentPage + 1;
    return /*#__PURE__*/React.createElement("li", {
      className: classNames('Pagination__ListItem__Arrow', "Pagination__ListItem__Arrow--direction-".concat(direction))
    }, /*#__PURE__*/React.createElement(Text, {
      className: "Pagination__Link",
      tag: "a",
      href: goToPageHref(number),
      key: "link-".concat(direction),
      "aria-label": buttonLabel,
      "aria-disabled": isDisabled,
      title: buttonLabel,
      tabIndex: isDisabled ? -1 : null,
      onClick: isDisabled ? preventClickDefault : pageClickHandler(number)
    }, /*#__PURE__*/React.createElement(ArrowIcon, {
      className: "Pagination__ArrowIcon",
      direction: direction,
      disabled: isDisabled,
      "aria-hidden": "true"
    })));
  };

  return /*#__PURE__*/React.createElement(StyledNav, {
    role: "navigation",
    "aria-label": ariaLabelProp,
    className: classNames('Pagination', className, "Pagination--isAligned-".concat(align), {
      'Pagination--noMargin': !margin
    })
  }, /*#__PURE__*/React.createElement("ul", {
    className: "Pagination__List"
  }, renderArrowButton('left'), pageNumbers.map(renderPage), renderArrowButton('right')));
});
PaginationBase.propTypes = {
  prevButtonLabel: PropTypes.string,
  nextButtonLabel: PropTypes.string,
  goToPageLabel: PropTypes.func,
  goToPageHref: PropTypes.func,
  onPageClick: PropTypes.func,
  totalPages: PropTypes.number,
  currentPage: PropTypes.number,
  currentPageLabel: PropTypes.func,
  'aria-label': PropTypes.string,
  margin: PropTypes.bool,
  align: PropTypes.oneOf([null, 'left', 'center', 'right'])
};
PaginationBase.defaultProps = {
  prevButtonLabel: 'Previous page',
  nextButtonLabel: 'Next page',
  goToPageLabel: function goToPageLabel(n) {
    return "Go to page ".concat(n);
  },
  goToPageHref: function goToPageHref(n) {
    return "#".concat(n);
  },
  onPageClick: function onPageClick() {},
  currentPageLabel: function currentPageLabel(n) {
    return "Page ".concat(n, ", this is the current page");
  },
  currentPage: 1,
  totalPages: 1,
  'aria-label': 'Pagination navigation',
  margin: true
};
export var Pagination = mediaQueries(PaginationBase, {
  viewportIsMOrLess: true
});