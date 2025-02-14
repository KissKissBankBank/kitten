import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import COLORS from '../../../constants/colors-config';
import TYPOGRAPHY from '../../../constants/typography-config';
import { pxToRem, stepToRem } from '../../../helpers/utils/typography';
import { CONTAINER_PADDING_THIN, CONTAINER_PADDING } from '../../../constants/grid-config';
import { ScreenConfig } from '../../../constants/screen-config';
import { HEADER_HEIGHT } from '../../navigation/header-nav/config';
const StyledNavBar = styled.div.withConfig({
  displayName: "nav-bar__StyledNavBar",
  componentId: "sc-1bcathh-0"
})(["width:auto;flex-grow:1;.k-NavBar__nav{width:auto;margin:0;padding:0 ", ";background:", ";display:flex;justify-content:center;@media (min-width:", "){padding:0 ", ";}&::before,&::after{content:'';flex-grow:1;}}.k-NavBar__list{list-style-type:none;display:flex;align-items:center;margin:0;padding:0;}.k-NavBar__listItem + .k-NavBar__listItem{margin-left:", ";@media (min-width:", "){margin-left:", ";}}.k-NavBar__link{height:", ";box-sizing:border-box;", " font-size:", ";text-decoration:none;text-align:center;display:flex;align-items:center;justify-content:center;flex-direction:row;position:relative;color:", ";border-bottom:", " solid ", ";transition:color 0.2s,border-color 0.2s;cursor:pointer;&:hover{color:", ";text-decoration:none;}&:focus,&[aria-current='page']{border-color:", ";color:", ";border-width:", ";}@media (min-width:", "){height:", ";}}&.k-NavBar--small .k-NavBar__link{height:", ";}&.k-NavBar--big,&.k-NavBar--large{.k-NavBar__link{height:", ";@media (min-width:", "){height:", ";}}}"], pxToRem(CONTAINER_PADDING_THIN), _ref => {
  let {
    colors
  } = _ref;
  return colors.background || COLORS.primary6;
}, pxToRem(ScreenConfig.S.min), pxToRem(CONTAINER_PADDING), pxToRem(25), pxToRem(ScreenConfig.S.min), pxToRem(50), pxToRem(65), TYPOGRAPHY.fontStyles['500'], stepToRem(-1), _ref2 => {
  let {
    colors
  } = _ref2;
  return colors.link || COLORS.font1;
}, pxToRem(4), _ref3 => {
  let {
    colors
  } = _ref3;
  return colors.border || 'transparent';
}, _ref4 => {
  let {
    colors
  } = _ref4;
  return colors.activeLink || COLORS.primary1;
}, _ref5 => {
  let {
    colors
  } = _ref5;
  return colors.activeBorder || COLORS.primary1;
}, _ref6 => {
  let {
    colors
  } = _ref6;
  return colors.activeLink || COLORS.primary1;
}, pxToRem(4), pxToRem(ScreenConfig.S.min), pxToRem(80), pxToRem(HEADER_HEIGHT), pxToRem(80), pxToRem(ScreenConfig.S.min), pxToRem(100));

const NavBarItem = _ref7 => {
  let {
    active,
    children,
    className,
    linkProps,
    ...props
  } = _ref7;
  return /*#__PURE__*/React.createElement("li", _extends({}, props, {
    className: classNames('k-NavBar__listItem', className)
  }), /*#__PURE__*/React.createElement("a", _extends({
    "aria-current": active ? 'page' : null
  }, linkProps, {
    className: classNames('k-NavBar__link', linkProps.className)
  }), children));
};

export const NavBar = _ref8 => {
  let {
    children,
    className,
    navProps,
    listProps,
    colors,
    modifier,
    ...props
  } = _ref8;
  return /*#__PURE__*/React.createElement(StyledNavBar, _extends({}, props, {
    className: classNames('k-NavBar', "k-NavBar--" + modifier, className),
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
  modifier: 'medium'
};
NavBar.propTypes = {
  colors: PropTypes.shape({
    background: PropTypes.string,
    link: PropTypes.string,
    border: PropTypes.string,
    activeLink: PropTypes.string,
    activeBorder: PropTypes.string
  }),
  modifier: PropTypes.oneOf(['small', 'medium', 'large'])
};