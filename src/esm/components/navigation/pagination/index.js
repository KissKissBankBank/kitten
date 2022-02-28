import _extends from "@babel/runtime/helpers/extends";
import React, { forwardRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Text } from '../../typography/text';
import { Button } from '../../action/button';
import { ArrowIcon } from '../../graphics/icons/arrow-icon';
import { ScreenConfig } from '../../../constants/screen-config';
import { parseHtml } from '../../../helpers/utils/parser';
import { pxToRem } from '../../../helpers/utils/typography';
import { useMedia } from '../../../helpers/utils/use-media-query';
import { getMinQuery } from '../../../helpers/utils/media-queries';
var StyledNav = styled.nav.withConfig({
  displayName: "pagination__StyledNav",
  componentId: "sc-19bydjm-0"
})([".k-Pagination__List{padding:0;display:flex;gap:", ";}.k-Pagination__ListItem{list-style:none;flex-shrink:0;}.k-Pagination__ListItem__Ellipsis{text-align:center;align-self:center;width:", ";}.k-Pagination__ListItem__Arrow:first-child{margin-right:", ";}.k-Pagination__ListItem__Arrow:last-child{margin-left:", ";}&.k-Pagination--noMargin .k-Pagination__List{margin:0;}&.k-Pagination--left .k-Pagination__List{justify-content:flex-start;}&.k-Pagination--center .k-Pagination__List{justify-content:center;}&.k-Pagination--right .k-Pagination__List{justify-content:flex-end;}"], pxToRem(5), pxToRem(40), pxToRem(5), pxToRem(5)); // Returns an array with the given bounds

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
    return [].concat(range(min, min - 1 + availableSlots - 2), [null, max]);
  } // 1, …, 40, 41, 42


  if (max - currentPage < availableSlots - 2) {
    return [min, null].concat(range(max + 1 - (availableSlots - 2), max));
  } // 1, …, 21, …, 42


  var sides = Math.floor((availableSlots - 4) / 2);
  return [min, null].concat(range(currentPage - sides, currentPage + sides), [null, max]);
}
export var Pagination = /*#__PURE__*/forwardRef(function (_ref2, _ref) {
  var prevButtonLabel = _ref2.prevButtonLabel,
      nextButtonLabel = _ref2.nextButtonLabel,
      goToPageLabel = _ref2.goToPageLabel,
      goToPageHref = _ref2.goToPageHref,
      onPageClick = _ref2.onPageClick,
      currentPageLabel = _ref2.currentPageLabel,
      currentPage = _ref2.currentPage,
      totalPages = _ref2.totalPages,
      ariaLabelProp = _ref2['aria-label'],
      margin = _ref2.margin,
      align = _ref2.align,
      className = _ref2.className;
  var size = useMedia({
    queries: [getMinQuery(ScreenConfig.L.min)],
    values: [7],
    defaultValue: 5
  });
  var pageNumbers = pages(1, totalPages, currentPage, size);

  var pageClickHandler = function pageClickHandler(number) {
    return function (event) {
      return onPageClick(number, event);
    };
  };

  var renderPage = function renderPage(number, index) {
    if (!number) {
      return /*#__PURE__*/React.createElement("li", {
        key: "ellipsis-" + index,
        className: "k-Pagination__ListItem k-Pagination__ListItem__Ellipsis",
        "aria-hidden": "true"
      }, /*#__PURE__*/React.createElement(Text, {
        size: "tiny",
        weight: "regular"
      }, "\u2026"));
    }

    var buttonProps = {
      modifier: 'hydrogen',
      tag: 'a',
      href: goToPageHref(number),
      'aria-label': goToPageLabel(number),
      onClick: pageClickHandler(number)
    };

    if (number === currentPage) {
      buttonProps = {
        modifier: 'lithium',
        tag: 'span',
        'aria-current': 'page',
        'aria-label': currentPageLabel(number)
      };
    }

    return /*#__PURE__*/React.createElement("li", {
      className: "k-Pagination__ListItem k-Pagination__ListItem__Link",
      key: "page-" + number
    }, /*#__PURE__*/React.createElement(Button, _extends({
      key: "link-" + number,
      className: "k-Pagination__Link",
      tabIndex: "0",
      size: "tiny",
      fit: "icon"
    }, buttonProps), number));
  };

  var ArrowButton = function ArrowButton(_ref3) {
    var direction = _ref3.direction;
    var buttonLabel = direction == 'left' ? parseHtml(prevButtonLabel) : parseHtml(nextButtonLabel);
    var isDisabled = direction == 'left' ? currentPage == 1 : currentPage == totalPages;
    var number = direction == 'left' ? currentPage == 1 ? 1 : currentPage - 1 : currentPage == totalPages ? totalPages : currentPage + 1;
    return /*#__PURE__*/React.createElement("li", {
      className: classNames('k-Pagination__ListItem', 'k-Pagination__ListItem__Arrow')
    }, /*#__PURE__*/React.createElement(Button, {
      key: "link-" + direction,
      className: "k-Pagination__Link",
      tag: isDisabled ? 'span' : 'a',
      href: goToPageHref(number),
      "aria-label": buttonLabel,
      "aria-disabled": isDisabled,
      title: buttonLabel,
      tabIndex: 0,
      onClick: isDisabled ? null : pageClickHandler(number),
      disabled: isDisabled,
      size: "tiny",
      fit: "icon"
    }, /*#__PURE__*/React.createElement(ArrowIcon, {
      className: "k-Pagination__ArrowIcon",
      direction: direction,
      disabled: isDisabled,
      "aria-hidden": "true"
    })));
  };

  return /*#__PURE__*/React.createElement(StyledNav, {
    role: "navigation",
    "aria-label": ariaLabelProp,
    className: classNames('k-Pagination', className, "k-Pagination--" + align, {
      'k-Pagination--noMargin': !margin
    })
  }, /*#__PURE__*/React.createElement("ul", {
    className: "k-Pagination__List"
  }, /*#__PURE__*/React.createElement(ArrowButton, {
    direction: "left"
  }), pageNumbers.map(renderPage), /*#__PURE__*/React.createElement(ArrowButton, {
    direction: "right"
  })));
});
Pagination.propTypes = {
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
Pagination.defaultProps = {
  prevButtonLabel: 'Page précédente',
  nextButtonLabel: 'Page suivante',
  goToPageLabel: function goToPageLabel(n) {
    return "Aller \xE0 la page " + n;
  },
  goToPageHref: function goToPageHref(n) {
    return "#" + n;
  },
  onPageClick: function onPageClick() {},
  currentPageLabel: function currentPageLabel(n) {
    return "Page " + n + ", il s\u2019agit de la page actuelle";
  },
  currentPage: 1,
  totalPages: 1,
  'aria-label': 'Navigation dans la pagination',
  margin: true
};