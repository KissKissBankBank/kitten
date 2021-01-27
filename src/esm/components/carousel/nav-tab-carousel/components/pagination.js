import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import COLORS from './../../../../constants/colors-config';
import { pxToRem } from './../../../../helpers/utils/typography';
import { createRangeFromZeroTo } from './../../../../helpers/utils/range';
var BulletPointStyles = styled.div.withConfig({
  displayName: "pagination__BulletPointStyles",
  componentId: "sc-1thdyq2-0"
})(["min-width:", ";min-height:", ";margin-left:", ";margin-right:", ";background-color:", ";", " &:focus{outline:", " solid ", ";outline-offset:", ";}"], pxToRem(6), pxToRem(6), pxToRem(4), pxToRem(4), COLORS.background1, function (_ref) {
  var isSelected = _ref.isSelected,
      activeColor = _ref.activeColor;
  return isSelected && css(["background-color:", ";"], activeColor);
}, COLORS.primary3, pxToRem(2), pxToRem(2));
var PaginationStyles = styled.div.withConfig({
  displayName: "pagination__PaginationStyles",
  componentId: "sc-1thdyq2-1"
})(["display:flex;justify-content:center;margin:0 ", ";width:20%;min-width:", ";"], pxToRem(10), pxToRem(60));
export var Pagination = function Pagination(_ref2) {
  var activeIndex = _ref2.activeIndex,
      links = _ref2.links,
      totalIndex = _ref2.totalIndex,
      activeColor = _ref2.activeColor;
  var hasNoLinks = !links && totalIndex;
  return /*#__PURE__*/React.createElement(PaginationStyles, null, links && links.map(function (link, index) {
    return /*#__PURE__*/React.createElement(BulletPointStyles, {
      as: "a",
      href: link,
      key: index,
      isSelected: activeIndex === index + 1,
      "aria-current": activeIndex === index + 1,
      activeColor: activeColor,
      tabIndex: "0"
    });
  }), hasNoLinks && createRangeFromZeroTo(totalIndex).map(function (_, index) {
    return /*#__PURE__*/React.createElement(BulletPointStyles, {
      key: index,
      isSelected: activeIndex === index + 1,
      "aria-current": activeIndex === index + 1,
      activeColor: activeColor,
      tabIndex: "0"
    });
  }));
};
Pagination.propTypes = {
  activeIndex: PropTypes.number.isRequired,
  totalIndex: PropTypes.number,
  activeColor: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.string)
};
Pagination.defaultProps = {
  activeColor: COLORS.primary1
};