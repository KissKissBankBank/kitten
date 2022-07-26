"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.NavBar = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _typography = require("../../../helpers/utils/typography");

var _gridConfig = require("../../../constants/grid-config");

var _screenConfig = require("../../../constants/screen-config");

var _config = require("../../navigation/header-nav/config");

const StyledNavBar = _styledComponents.default.div.withConfig({
  displayName: "nav-bar__StyledNavBar",
  componentId: "sc-1bcathh-0"
})(["width:auto;flex-grow:1;.k-NavBar__nav{width:auto;margin:0;padding:0 ", ";background:", ";display:flex;justify-content:center;@media (min-width:", "){padding:0 ", ";}&::before,&::after{content:'';flex-grow:1;}}.k-NavBar__list{list-style-type:none;display:flex;align-items:center;margin:0;padding:0;}.k-NavBar__listItem + .k-NavBar__listItem{margin-left:", ";@media (min-width:", "){margin-left:", ";}}.k-NavBar__link{height:", ";box-sizing:border-box;", " font-size:", ";text-decoration:none;text-align:center;display:flex;align-items:center;justify-content:center;flex-direction:row;position:relative;color:", ";border-bottom:", " solid ", ";transition:color 0.2s,border-color 0.2s;cursor:pointer;&:hover{color:", ";text-decoration:none;}&:focus,&[aria-current='page']{border-color:", ";color:", ";border-width:", ";}@media (min-width:", "){height:", ";}}&.k-NavBar--small .k-NavBar__link{height:", ";}&.k-NavBar--big,&.k-NavBar--large{.k-NavBar__link{height:", ";@media (min-width:", "){height:", ";}}}"], (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN), _ref => {
  let {
    colors
  } = _ref;
  return colors.background || _colorsConfig.default.primary6;
}, (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING), (0, _typography.pxToRem)(25), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(65), _typographyConfig.default.fontStyles['500'], (0, _typography.stepToRem)(-1), _ref2 => {
  let {
    colors
  } = _ref2;
  return colors.link || _colorsConfig.default.font1;
}, (0, _typography.pxToRem)(4), _ref3 => {
  let {
    colors
  } = _ref3;
  return colors.border || 'transparent';
}, _ref4 => {
  let {
    colors
  } = _ref4;
  return colors.activeLink || _colorsConfig.default.primary1;
}, _ref5 => {
  let {
    colors
  } = _ref5;
  return colors.activeBorder || _colorsConfig.default.primary1;
}, _ref6 => {
  let {
    colors
  } = _ref6;
  return colors.activeLink || _colorsConfig.default.primary1;
}, (0, _typography.pxToRem)(4), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(_config.HEADER_HEIGHT), (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(100));

const NavBarItem = _ref7 => {
  let {
    active,
    children,
    className,
    linkProps,
    ...props
  } = _ref7;
  return /*#__PURE__*/_react.default.createElement("li", (0, _extends2.default)({}, props, {
    className: (0, _classnames.default)('k-NavBar__listItem', className)
  }), /*#__PURE__*/_react.default.createElement("a", (0, _extends2.default)({
    "aria-current": active ? 'page' : null
  }, linkProps, {
    className: (0, _classnames.default)('k-NavBar__link', linkProps.className)
  }), children));
};

const NavBar = _ref8 => {
  let {
    children,
    className,
    navProps,
    listProps,
    colors,
    modifier,
    ...props
  } = _ref8;
  return /*#__PURE__*/_react.default.createElement(StyledNavBar, (0, _extends2.default)({}, props, {
    className: (0, _classnames.default)('k-NavBar', "k-NavBar--" + modifier, className),
    colors: colors
  }), /*#__PURE__*/_react.default.createElement("nav", (0, _extends2.default)({}, navProps, {
    className: (0, _classnames.default)('k-NavBar__nav', navProps.className)
  }), /*#__PURE__*/_react.default.createElement("ul", (0, _extends2.default)({}, listProps, {
    className: (0, _classnames.default)('k-NavBar__list', listProps.className)
  }), children)));
};

exports.NavBar = NavBar;
NavBar.ListItem = NavBarItem;
NavBar.defaultProps = {
  navProps: {},
  listProps: {},
  colors: {
    background: _colorsConfig.default.primary6,
    link: _colorsConfig.default.font1,
    border: 'transparent',
    activeLink: _colorsConfig.default.primary1,
    activeBorder: _colorsConfig.default.primary1
  },
  modifier: 'medium'
};
NavBar.propTypes = {
  colors: _propTypes.default.shape({
    background: _propTypes.default.string,
    link: _propTypes.default.string,
    border: _propTypes.default.string,
    activeLink: _propTypes.default.string,
    activeBorder: _propTypes.default.string
  }),
  modifier: _propTypes.default.oneOf(['small', 'medium', 'large'])
};