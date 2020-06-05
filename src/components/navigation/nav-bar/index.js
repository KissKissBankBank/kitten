"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavBar = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _typography = require("../../../helpers/utils/typography");

var _gridConfig = require("../../../constants/grid-config");

var _screenConfig = require("../../../constants/screen-config");

var StyledNavBar = _styledComponents.default.div.withConfig({
  displayName: "nav-bar__StyledNavBar",
  componentId: "sc-1bcathh-0"
})(["width:auto;flex-grow:1;.k-NavBar__nav{width:auto;margin:0;padding:0 ", ";background:", ";display:flex;justify-content:center;@media (min-width:", "){padding:0 ", ";}&::before,&::after{content:\"\";flex-grow:1;}}.k-NavBar__list{list-style-type:none;display:flex;align-items:center;margin:0;padding:0;}.k-NavBar__listItem + .k-NavBar__listItem{margin-left:", ";@media (min-width:", "){margin-left:", ";}}.k-NavBar__link{height:", ";box-sizing:border-box;", " font-size:", ";text-decoration:none;text-align:center;display:flex;align-items:center;justify-content:center;flex-direction:row;position:relative;outline:none;color:", ";border-bottom:", " solid ", ";transition:color .2s,border-color .2s;cursor:pointer;&:hover{color:", ";text-decoration:none;}&:focus,&[aria-current=\"page\"]{border-color:", ";color:", ";border-width:", ";}@media (min-width:", "){height:", ";}}&.k-NavBar--big .k-NavBar__link{height:", ";@media (min-width:", "){height:", ";}}"], (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN), function (_ref) {
  var colors = _ref.colors;
  return colors.background || _colorsConfig.default.primary6;
}, (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING), (0, _typography.pxToRem)(25), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(65), _typographyConfig.default.fontStyles.regular, (0, _typography.stepToRem)(-1), function (_ref2) {
  var colors = _ref2.colors;
  return colors.link || _colorsConfig.default.font1;
}, (0, _typography.pxToRem)(4), function (_ref3) {
  var colors = _ref3.colors;
  return colors.border || 'transparent';
}, function (_ref4) {
  var colors = _ref4.colors;
  return colors.activeLink || _colorsConfig.default.primary1;
}, function (_ref5) {
  var colors = _ref5.colors;
  return colors.activeBorder || _colorsConfig.default.primary1;
}, function (_ref6) {
  var colors = _ref6.colors;
  return colors.activeLink || _colorsConfig.default.primary1;
}, (0, _typography.pxToRem)(4), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(100));

var NavBarItem = function NavBarItem(_ref7) {
  var active = _ref7.active,
      children = _ref7.children,
      className = _ref7.className,
      linkProps = _ref7.linkProps,
      props = (0, _objectWithoutProperties2.default)(_ref7, ["active", "children", "className", "linkProps"]);
  return /*#__PURE__*/_react.default.createElement("li", (0, _extends2.default)({}, props, {
    className: (0, _classnames.default)('k-NavBar__listItem', className)
  }), /*#__PURE__*/_react.default.createElement("a", (0, _extends2.default)({
    "aria-current": active ? 'page' : null
  }, linkProps, {
    className: (0, _classnames.default)('k-NavBar__link', linkProps.className)
  }), children));
};

var NavBar = function NavBar(_ref8) {
  var children = _ref8.children,
      className = _ref8.className,
      navProps = _ref8.navProps,
      listProps = _ref8.listProps,
      colors = _ref8.colors,
      modifier = _ref8.modifier,
      props = (0, _objectWithoutProperties2.default)(_ref8, ["children", "className", "navProps", "listProps", "colors", "modifier"]);
  return /*#__PURE__*/_react.default.createElement(StyledNavBar, (0, _extends2.default)({}, props, {
    className: (0, _classnames.default)('k-NavBar', "k-NavBar--".concat(modifier), className),
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
  modifier: 'regular'
};
NavBar.propTypes = {
  colors: _propTypes.default.shape({
    background: _propTypes.default.string,
    link: _propTypes.default.string,
    border: _propTypes.default.string,
    activeLink: _propTypes.default.string,
    activeBorder: _propTypes.default.string
  }),
  modifier: _propTypes.default.oneOf(['regular', 'big'])
};