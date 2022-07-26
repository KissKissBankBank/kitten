import React, { createContext, useState, useEffect, useContext } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { NUM_COLUMNS, GUTTER } from '../../../constants/grid-config';
import { ScreenConfig } from '../../../constants/screen-config';
import { pxToRem } from '../../../helpers/utils/typography';
const GridProperties = /*#__PURE__*/createContext({});
export const AdaptableGrid = _ref => {
  let {
    children,
    gutter,
    colNumber,
    colAlign,
    as,
    className
  } = _ref;
  const gridProperties = {
    colAlign,
    colNumber,
    gutter
  };
  return /*#__PURE__*/React.createElement(StyledGrid, {
    gutter: gutter,
    colAlign: colAlign,
    as: as,
    className: className
  }, /*#__PURE__*/React.createElement(GridProperties.Provider, {
    value: gridProperties
  }, children));
};
export const AdaptableGridCol = _ref2 => {
  let {
    children,
    col,
    offset,
    as,
    className,
    ...other
  } = _ref2;
  const [styles, setStyles] = useState(null);
  const {
    colAlign,
    colNumber,
    gutter
  } = useContext(GridProperties);
  const marginDirection = colAlign === 'right' ? 'right' : 'left';
  useEffect(() => {
    const props = { ...other
    };
    const stylesByMediaQuery = Object.keys(ScreenConfig).map(size => {
      const mediaQuery = size.toLowerCase();
      const col = props["col-" + mediaQuery];
      const offset = props["offset-" + mediaQuery];

      if (!col && !offset) {
        return false;
      }

      return css(["@media (min-width:", "){", " ", " ", "}"], pxToRem(ScreenConfig[size].min), col && css(["width:", "%;"], col * 100 / colNumber), offset > 0 && css(["margin-", ":", "%;"], marginDirection, offset * 100 / colNumber), offset === 0 && css(["margin-", ":0;"], marginDirection));
    });
    setStyles(stylesByMediaQuery);
  }, []);
  return /*#__PURE__*/React.createElement(StyledGridCol, {
    col: col || colNumber,
    offset: offset,
    gutter: gutter,
    colNumber: colNumber,
    colAlign: colAlign,
    marginDirection: marginDirection,
    props: { ...other
    },
    stylesByMediaQuery: styles,
    as: as,
    className: className
  }, children);
};
AdaptableGrid.propTypes = {
  gutter: PropTypes.number,
  colNumber: PropTypes.number,
  colAlign: PropTypes.oneOf(['left', 'right', 'center'])
};
AdaptableGrid.defaultProps = {
  gutter: GUTTER,
  colNumber: NUM_COLUMNS,
  colAlign: 'left'
};
const StyledGrid = styled.div.withConfig({
  displayName: "adaptable-grid__StyledGrid",
  componentId: "sc-1x0ouju-0"
})(["box-sizing:border-box;display:flex;flex-wrap:wrap;justify-content:", ";margin-left:", ";margin-right:", ";"], _ref3 => {
  let {
    colAlign
  } = _ref3;
  return colAlign;
}, _ref4 => {
  let {
    gutter
  } = _ref4;
  return pxToRem(-gutter / 2);
}, _ref5 => {
  let {
    gutter
  } = _ref5;
  return pxToRem(-gutter / 2);
});
const StyledGridCol = styled.div.withConfig({
  displayName: "adaptable-grid__StyledGridCol",
  componentId: "sc-1x0ouju-1"
})(["display:block;box-sizing:border-box;padding-left:", ";padding-right:", ";flex:0 0 auto;width:", "%;", " ", ""], _ref6 => {
  let {
    gutter
  } = _ref6;
  return pxToRem(gutter / 2);
}, _ref7 => {
  let {
    gutter
  } = _ref7;
  return pxToRem(gutter / 2);
}, _ref8 => {
  let {
    col,
    colNumber
  } = _ref8;
  return col * 100 / colNumber;
}, _ref9 => {
  let {
    offset,
    colNumber,
    marginDirection
  } = _ref9;
  if (!offset) return;
  return css(["margin-", ":", "%;"], marginDirection, offset * 100 / colNumber);
}, _ref10 => {
  let {
    stylesByMediaQuery
  } = _ref10;
  return stylesByMediaQuery;
});