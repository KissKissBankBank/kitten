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
import { useMedia } from '../../../helpers/hooks/use-media-query';
import { getMinQuery } from '../../../helpers/utils/media-queries';
const StyledNav = styled.nav.withConfig({
  displayName: "pagination__StyledNav",
  componentId: "sc-19bydjm-0"
})([".k-Pagination__List{padding:0;display:flex;gap:", ";}.k-Pagination__ListItem{list-style:none;flex-shrink:0;}.k-Pagination__ListItem__Ellipsis{text-align:center;align-self:center;width:", ";}.k-Pagination__ListItem__Arrow:first-child{margin-right:", ";}.k-Pagination__ListItem__Arrow:last-child{margin-left:", ";}&.k-Pagination--noMargin .k-Pagination__List{margin:0;}&.k-Pagination--left .k-Pagination__List{justify-content:flex-start;}&.k-Pagination--center .k-Pagination__List{justify-content:center;}&.k-Pagination--right .k-Pagination__List{justify-content:flex-end;}"], pxToRem(5), pxToRem(40), pxToRem(5), pxToRem(5)); // Returns an array with the given bounds

const range = (start, end) => Array(end - start + 1).fill().map((_, index) => start + index); // Returns an array of size `availableSlots` with page number integers
// and breaks "…" (represented as nulls).


export function pages(min, max, currentPage, availableSlots) {
  // 1, 2, 3
  if (max - min < availableSlots) {
    return range(min, max);
  } // 1, 2, 3, …, 42


  if (currentPage - min + 1 < availableSlots - 2) {
    return [...range(min, min - 1 + availableSlots - 2), null, max];
  } // 1, …, 40, 41, 42


  if (max - currentPage < availableSlots - 2) {
    return [min, null, ...range(max + 1 - (availableSlots - 2), max)];
  } // 1, …, 21, …, 42


  const sides = Math.floor((availableSlots - 4) / 2);
  return [min, null, ...range(currentPage - sides, currentPage + sides), null, max];
}
export const Pagination = /*#__PURE__*/forwardRef((_ref2, _ref) => {
  let {
    prevButtonLabel,
    nextButtonLabel,
    goToPageLabel,
    goToPageHref,
    onPageClick,
    currentPageLabel,
    currentPage,
    totalPages,
    'aria-label': ariaLabelProp,
    margin,
    align,
    className
  } = _ref2;
  const size = useMedia({
    queries: [getMinQuery(ScreenConfig.L.min)],
    values: [7],
    defaultValue: 5
  });
  const pageNumbers = pages(1, totalPages, currentPage, size);

  const pageClickHandler = number => event => onPageClick(number, event);

  const renderPage = (number, index) => {
    if (!number) {
      return /*#__PURE__*/React.createElement("li", {
        key: "ellipsis-" + index,
        className: "k-Pagination__ListItem k-Pagination__ListItem__Ellipsis",
        "aria-hidden": "true"
      }, /*#__PURE__*/React.createElement(Text, {
        size: "small",
        weight: "500"
      }, "\u2026"));
    }

    let buttonProps = {
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
        title: currentPageLabel(number),
        'aria-current': 'page'
      };
    }

    return /*#__PURE__*/React.createElement("li", {
      className: "k-Pagination__ListItem k-Pagination__ListItem__Link",
      key: "page-" + number
    }, /*#__PURE__*/React.createElement(Button, _extends({
      key: "link-" + number,
      className: "k-Pagination__Link",
      tabIndex: "0",
      size: "small",
      fit: "icon"
    }, buttonProps), number));
  };

  const ArrowButton = _ref3 => {
    let {
      direction
    } = _ref3;
    const buttonLabel = direction == 'left' ? parseHtml(prevButtonLabel) : parseHtml(nextButtonLabel);
    const isDisabled = direction == 'left' ? currentPage == 1 : currentPage == totalPages;
    const number = direction == 'left' ? currentPage == 1 ? 1 : currentPage - 1 : currentPage == totalPages ? totalPages : currentPage + 1;
    return /*#__PURE__*/React.createElement("li", {
      className: classNames('k-Pagination__ListItem', 'k-Pagination__ListItem__Arrow')
    }, /*#__PURE__*/React.createElement(Button, {
      key: "link-" + direction,
      className: "k-Pagination__Link",
      tag: isDisabled ? 'span' : 'a',
      href: goToPageHref(number),
      title: buttonLabel,
      "aria-disabled": isDisabled || null,
      tabIndex: 0,
      onClick: isDisabled ? null : pageClickHandler(number),
      disabled: isDisabled,
      size: "small",
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
  goToPageLabel: n => "Aller \xE0 la page " + n,
  goToPageHref: n => "#" + n,
  onPageClick: () => {},
  currentPageLabel: n => "Page " + n + ", il s\u2019agit de la page actuelle",
  currentPage: 1,
  totalPages: 1,
  'aria-label': 'Navigation dans la pagination',
  margin: true,
  align: 'center'
};