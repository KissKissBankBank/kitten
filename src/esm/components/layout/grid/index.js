import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import styled, { css } from 'styled-components';
import classNames from 'classnames';
import { pxToRem } from '../../../helpers/utils/typography';
import { ScreenConfig, ORDERED_SCREEN_SIZES } from '../../../constants/screen-config';
import { GUTTER, NUM_COLUMNS } from '../../../constants/grid-config';
const StyledGrid = styled.div.withConfig({
  displayName: "grid__StyledGrid",
  componentId: "sc-lrwuxf-0"
})(["box-sizing:border-box;display:flex;flex-wrap:wrap;margin-right:", ";margin-left:", ";.k-Grid__col{box-sizing:border-box;flex:0 0 auto;padding-right:", ";padding-left:", ";}", " ", ""], pxToRem(-GUTTER / 2), pxToRem(-GUTTER / 2), pxToRem(GUTTER / 2), pxToRem(GUTTER / 2), Array(NUM_COLUMNS + 1).fill(0).map((el, column) => css([".k-Grid__col--", "{flex-basis:calc((100% / ", ") * ", ");max-width:calc((100% / ", ") * ", ");}.k-Grid__col--offset-", "{margin-left:calc((100% / ", ") * ", ");}"], column, NUM_COLUMNS, column, NUM_COLUMNS, column, column, NUM_COLUMNS, column)), () => ORDERED_SCREEN_SIZES.map(media => media !== ORDERED_SCREEN_SIZES[0] && css(["@media (min-width:", "){", "}"], pxToRem(ScreenConfig[media].min), Array(NUM_COLUMNS + 1).fill(0).map((el, column) => css([".k-Grid__col--", "{flex-basis:calc((100% / ", ") * ", ");max-width:calc((100% / ", ") * ", ");}.k-Grid__col--offset-", "{margin-left:calc((100% / ", ") * ", ");}"], column + '-' + media.toLowerCase(), NUM_COLUMNS, column, NUM_COLUMNS, column, column + '-' + media.toLowerCase(), NUM_COLUMNS, column)))));
export const Grid = _ref => {
  let {
    className,
    ...others
  } = _ref;
  return /*#__PURE__*/React.createElement(StyledGrid, _extends({
    className: classNames('k-Grid', className)
  }, others));
};
export const GridCol = _ref2 => {
  let {
    className,
    ...props
  } = _ref2;
  const {
    col,
    offset,
    ...others
  } = props;

  const classByMediaQuery = () => {
    const classNamesByMediaQuery = Object.keys(ScreenConfig).map(size => {
      const mediaQuery = size.toLowerCase();
      const col = props["col-" + mediaQuery];
      const offset = props["offset-" + mediaQuery];
      return classNames({
        ["k-Grid__col--" + col + "-" + mediaQuery]: col,
        ["k-Grid__col--offset-" + offset + "-" + mediaQuery]: !!offset || offset === 0
      });
    });
    return classNamesByMediaQuery;
  }; // Remove unknown props in others.


  Object.keys(ScreenConfig).map(size => {
    const mediaQuery = size.toLowerCase();
    delete others["col-" + mediaQuery];
    delete others["offset-" + mediaQuery];
  });
  return /*#__PURE__*/React.createElement("div", _extends({}, others, {
    className: classNames('k-Grid__col', {
      ["k-Grid__col--" + col]: col,
      ["k-Grid__col--offset-" + offset]: offset
    }, classByMediaQuery(), className)
  }));
};
Grid.defaultProps = {
  className: null
};
GridCol.defaultProps = {
  col: '12',
  offset: null,
  className: null
};