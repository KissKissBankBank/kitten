import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { createContext, useState, useEffect, useContext } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { NUM_COLUMNS, GUTTER } from '../../../constants/grid-config';
import { ScreenConfig } from '../../../constants/screen-config';
import { pxToRem } from '../../../helpers/utils/typography';
var GridProperties = createContext({});
export var AdaptableGrid = function AdaptableGrid(_ref) {
  var children = _ref.children,
      gutter = _ref.gutter,
      colNumber = _ref.colNumber,
      colAlign = _ref.colAlign,
      as = _ref.as,
      className = _ref.className;
  var gridProperties = {
    colAlign: colAlign,
    colNumber: colNumber,
    gutter: gutter
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
export var AdaptableGridCol = function AdaptableGridCol(_ref2) {
  var children = _ref2.children,
      col = _ref2.col,
      offset = _ref2.offset,
      as = _ref2.as,
      className = _ref2.className,
      other = _objectWithoutProperties(_ref2, ["children", "col", "offset", "as", "className"]);

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      styles = _useState2[0],
      setStyles = _useState2[1];

  var _useContext = useContext(GridProperties),
      colAlign = _useContext.colAlign,
      colNumber = _useContext.colNumber,
      gutter = _useContext.gutter;

  var marginDirection = colAlign === 'right' ? 'right' : 'left';
  useEffect(function () {
    var props = _extends({}, other);

    var stylesByMediaQuery = Object.keys(ScreenConfig).map(function (size) {
      var mediaQuery = size.toLowerCase();
      var col = props["col-".concat(mediaQuery)];
      var offset = props["offset-".concat(mediaQuery)];

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
    props: _extends({}, other),
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
var StyledGrid = styled.div.withConfig({
  displayName: "adaptable-grid__StyledGrid",
  componentId: "txsbu0-0"
})(["box-sizing:border-box;display:flex;flex-wrap:wrap;justify-content:", ";margin-left:", ";margin-right:", ";"], function (_ref3) {
  var colAlign = _ref3.colAlign;
  return colAlign;
}, function (_ref4) {
  var gutter = _ref4.gutter;
  return pxToRem(-gutter / 2);
}, function (_ref5) {
  var gutter = _ref5.gutter;
  return pxToRem(-gutter / 2);
});
var StyledGridCol = styled.div.withConfig({
  displayName: "adaptable-grid__StyledGridCol",
  componentId: "txsbu0-1"
})(["display:block;box-sizing:border-box;padding-left:", ";padding-right:", ";flex:0 0 auto;width:", "%;", " ", ""], function (_ref6) {
  var gutter = _ref6.gutter;
  return pxToRem(gutter / 2);
}, function (_ref7) {
  var gutter = _ref7.gutter;
  return pxToRem(gutter / 2);
}, function (_ref8) {
  var col = _ref8.col,
      colNumber = _ref8.colNumber;
  return col * 100 / colNumber;
}, function (_ref9) {
  var offset = _ref9.offset,
      colNumber = _ref9.colNumber,
      marginDirection = _ref9.marginDirection;
  if (!offset) return;
  return css(["margin-", ":", "%;"], marginDirection, offset * 100 / colNumber);
}, function (_ref10) {
  var stylesByMediaQuery = _ref10.stylesByMediaQuery;
  return stylesByMediaQuery;
});