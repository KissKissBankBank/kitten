import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { createContext, useContext } from 'react';
import classNames from 'classnames';
import styled from 'styled-components';
import COLORS from '../../../constants/colors-config';
import { pxToRem } from '../../../helpers/utils/typography';
import { ScreenConfig } from '../../../constants/screen-config';
import { Grid, GridCol } from '../../../components/grid/grid';
import { Container } from '../../../components/grid/container';
import { GUTTER } from '../../../constants/grid-config';
var Context = createContext({
  asideSize: 'default'
});
var StyledSideGrid = styled.div.withConfig({
  displayName: "side-grid__StyledSideGrid",
  componentId: "sc-1hedjcg-0"
})(["@media (min-width:", "){background:linear-gradient( to right,", " 0%,", " 50%,", " 50%,", " 100% );}.k-SideGrid__content{background-color:", ";padding-bottom:", ";@media (min-width:", "){padding-bottom:", ";}}.k-SideGrid__aside{display:none;@media (min-width:", "){display:flex;border-left:", " solid ", ";padding-left:0;padding-right:", ";}}.k-SideGrid__asideContent{display:flex;flex-direction:column;flex:1 1 auto;border-left:", " solid ", ";background-color:", ";}&.k-SideGrid--aside-start{@media (min-width:", "){background:linear-gradient( to left,", " 0%,", " 50%,", " 50%,", " 100% );}.k-SideGrid__row{flex-direction:row-reverse;}.k-SideGrid__aside{border-left:none;border-right:", " solid ", ";padding-left:", ";padding-right:0;}.k-SideGrid__asideContent{border-left:none;border-right:", " solid ", ";}}"], pxToRem(ScreenConfig.M.min), COLORS.background1, COLORS.background1, COLORS.background2, COLORS.background2, COLORS.background1, pxToRem(30), pxToRem(ScreenConfig.M.min), pxToRem(50), pxToRem(ScreenConfig.M.min), pxToRem(GUTTER / 2), COLORS.background1, pxToRem(GUTTER / 2), pxToRem(1), COLORS.line1, COLORS.background2, pxToRem(ScreenConfig.M.min), COLORS.background1, COLORS.background1, COLORS.background2, COLORS.background2, pxToRem(GUTTER / 2), COLORS.background1, pxToRem(GUTTER / 2), pxToRem(1), COLORS.line1);
export var SideGrid = function SideGrid(_ref) {
  var children = _ref.children,
      className = _ref.className,
      containerClassName = _ref.containerClassName,
      rowClassName = _ref.rowClassName,
      asidePosition = _ref.asidePosition,
      asideSize = _ref.asideSize;
  var sideGridClassName = classNames('k-SideGrid', className, "k-SideGrid--aside-".concat(asidePosition), "k-SideGrid--aside-".concat(asideSize));
  return /*#__PURE__*/React.createElement(StyledSideGrid, {
    className: sideGridClassName
  }, /*#__PURE__*/React.createElement(Container, {
    className: classNames('k-SideGrid__container', containerClassName)
  }, /*#__PURE__*/React.createElement(Grid, {
    className: classNames('k-SideGrid__row', rowClassName)
  }, /*#__PURE__*/React.createElement(Context.Provider, {
    value: {
      asideSize: asideSize
    }
  }, children))));
};
export var SideGridContent = function SideGridContent(_ref2) {
  var className = _ref2.className,
      children = _ref2.children,
      props = _objectWithoutProperties(_ref2, ["className", "children"]);

  var _useContext = useContext(Context),
      asideSize = _useContext.asideSize;

  var contentWidth = function () {
    switch (asideSize) {
      case 'large':
        return 7;

      case 'small':
        return 9;

      default:
        return 8;
    }
  }();

  return /*#__PURE__*/React.createElement(GridCol, _extends({
    col: 12,
    "col-m": contentWidth,
    className: classNames('k-SideGrid__content', className)
  }, props), children);
};
export var SideGridAside = function SideGridAside(_ref3) {
  var className = _ref3.className,
      children = _ref3.children,
      contentClassName = _ref3.contentClassName,
      props = _objectWithoutProperties(_ref3, ["className", "children", "contentClassName"]);

  var _useContext2 = useContext(Context),
      asideSize = _useContext2.asideSize;

  var sideWidth = function () {
    switch (asideSize) {
      case 'large':
        return 5;

      case 'small':
        return 3;

      default:
        return 4;
    }
  }();

  return /*#__PURE__*/React.createElement(GridCol, _extends({
    col: 12,
    "col-m": sideWidth,
    className: classNames('k-SideGrid__aside', className)
  }, props), /*#__PURE__*/React.createElement("div", {
    className: classNames('k-SideGrid__asideContent', contentClassName)
  }, children));
};
SideGrid.defaultProps = {
  className: null,
  containerClassName: null,
  rowClassName: null,
  asidePosition: 'end',
  // 'start' or 'end'
  asideSize: 'default' // 'default', 'small' or 'large'

};
SideGridContent.defaultProps = {
  className: null
};
SideGridAside.defaultProps = {
  className: null,
  contentClassName: null
};