import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import COLORS from '../../../constants/colors-config';
import TYPOGRAPHY from '../../../constants/typography-config';
import { pxToRem, stepToRem } from '../../../helpers/utils/typography';
import { CONTAINER_PADDING_THIN, CONTAINER_PADDING } from '../../../constants/grid-config';
import { ScreenConfig } from '../../../constants/screen-config';
var StyledNavBar = styled.div.withConfig({
  displayName: "nav-bar__StyledNavBar",
  componentId: "sc-1bcathh-0"
})(["width:auto;flex-grow:1;.k-NavBar__nav{width:auto;margin:0;padding:0 ", ";background:", ";display:flex;justify-content:center;@media (min-width:", "){padding:0 ", ";}&::before,&::after{content:\"\";flex-grow:1;}}.k-NavBar__list{list-style-type:none;display:flex;align-items:center;margin:0;padding:0;}.k-NavBar__listItem + .k-NavBar__listItem{margin-left:", ";@media (min-width:", "){margin-left:", ";}}.k-NavBar__link{height:", ";box-sizing:border-box;", " font-size:", ";text-decoration:none;text-align:center;display:flex;align-items:center;justify-content:center;flex-direction:row;position:relative;color:", ";border-bottom:", " solid ", ";transition:color .2s,border-color .2s;cursor:pointer;&:hover{color:", ";text-decoration:none;}&:focus{outline:", " solid ", ";outline-offset:", ";}&:focus,&[aria-current=\"page\"]{border-color:", ";color:", ";border-width:", ";}@media (min-width:", "){height:", ";}}&.k-NavBar--big .k-NavBar__link{height:", ";@media (min-width:", "){height:", ";}}"], pxToRem(CONTAINER_PADDING_THIN), function (_ref) {
  var colors = _ref.colors;
  return colors.background || COLORS.primary6;
}, pxToRem(ScreenConfig.S.min), pxToRem(CONTAINER_PADDING), pxToRem(25), pxToRem(ScreenConfig.S.min), pxToRem(50), pxToRem(65), TYPOGRAPHY.fontStyles.regular, stepToRem(-1), function (_ref2) {
  var colors = _ref2.colors;
  return colors.link || COLORS.font1;
}, pxToRem(4), function (_ref3) {
  var colors = _ref3.colors;
  return colors.border || 'transparent';
}, function (_ref4) {
  var colors = _ref4.colors;
  return colors.activeLink || COLORS.primary1;
}, COLORS.primary4, pxToRem(2), pxToRem(2), function (_ref5) {
  var colors = _ref5.colors;
  return colors.activeBorder || COLORS.primary1;
}, function (_ref6) {
  var colors = _ref6.colors;
  return colors.activeLink || COLORS.primary1;
}, pxToRem(4), pxToRem(ScreenConfig.S.min), pxToRem(80), pxToRem(80), pxToRem(ScreenConfig.S.min), pxToRem(100));

var NavBarItem = function NavBarItem(_ref7) {
  var active = _ref7.active,
      children = _ref7.children,
      className = _ref7.className,
      linkProps = _ref7.linkProps,
      props = _objectWithoutProperties(_ref7, ["active", "children", "className", "linkProps"]);

  return /*#__PURE__*/React.createElement("li", _extends({}, props, {
    className: classNames('k-NavBar__listItem', className)
  }), /*#__PURE__*/React.createElement("a", _extends({
    "aria-current": active ? 'page' : null
  }, linkProps, {
    className: classNames('k-NavBar__link', linkProps.className)
  }), children));
};

export var NavBar = function NavBar(_ref8) {
  var children = _ref8.children,
      className = _ref8.className,
      navProps = _ref8.navProps,
      listProps = _ref8.listProps,
      colors = _ref8.colors,
      modifier = _ref8.modifier,
      props = _objectWithoutProperties(_ref8, ["children", "className", "navProps", "listProps", "colors", "modifier"]);

  return /*#__PURE__*/React.createElement(StyledNavBar, _extends({}, props, {
    className: classNames('k-NavBar', "k-NavBar--".concat(modifier), className),
    colors: colors
  }), /*#__PURE__*/React.createElement("nav", _extends({}, navProps, {
    className: classNames('k-NavBar__nav', navProps.className)
  }), /*#__PURE__*/React.createElement("ul", _extends({}, listProps, {
    className: classNames('k-NavBar__list', listProps.className)
  }), children)));
};
NavBar.ListItem = NavBarItem;
NavBar.defaultProps = {
  navProps: {},
  listProps: {},
  colors: {
    background: COLORS.primary6,
    link: COLORS.font1,
    border: 'transparent',
    activeLink: COLORS.primary1,
    activeBorder: COLORS.primary1
  },
  modifier: 'regular'
};
NavBar.propTypes = {
  colors: PropTypes.shape({
    background: PropTypes.string,
    link: PropTypes.string,
    border: PropTypes.string,
    activeLink: PropTypes.string,
    activeBorder: PropTypes.string
  }),
  modifier: PropTypes.oneOf(['regular', 'big'])
};