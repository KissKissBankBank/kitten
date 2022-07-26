"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.FloatingMenu = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _typography = require("../../../helpers/utils/typography");

var _screenConfig = require("../../../constants/screen-config");

const StyledFloatingMenu = _styledComponents.default.nav.withConfig({
  displayName: "floating-menu__StyledFloatingMenu",
  componentId: "sc-11idy8q-0"
})(["box-shadow:var(--box-shadow-m);display:flex;flex-direction:column;gap:", ";background-color:var(--color-grey-000);overflow:hidden;min-width:", ";.k-FloatingMenu__list{margin:0;padding:0 ", ";list-style:none;display:flex;gap:", " ", ";justify-content:space-around;flex-direction:row;overflow-x:auto;.k-FloatingMenu__item{box-sizing:border-box;height:", ";padding-top:", ";display:flex;align-items:center;line-height:", ";color:var(--color-grey-900);", " font-size:", ";text-decoration:none;transition:border-color var(--transition);white-space:nowrap;border-color:transparent;border-width:0 0 ", ";border-style:solid;@media (max-width:", "px){font-size:", ";}&[aria-current]{", " border-color:var(--color-primary-500);}&:hover,&:active{", "}&:focus-visible{outline-style:auto;}}}@media ", "{border-radius:none;box-shadow:none;.k-FloatingMenu__list{justify-content:flex-start;padding:0;gap:", " ", ";.k-FloatingMenu__item{height:", ";}}}&:not(.k-FloatingMenu--horizontal){@media ", "{box-shadow:var(--box-shadow-m);border-radius:var(--border-radius-m);padding:", " 0;.k-FloatingMenu__list{flex-direction:column;}.k-FloatingMenu__item{padding-top:0;padding-left:", ";border-width:0 0 0 ", ";height:", ";}}}"], (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(185), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(4), (0, _typography.pxToRem)(20), _typographyConfig.default.fontStyles['400'], (0, _typography.pxToRem)(16), (0, _typography.pxToRem)(4), _screenConfig.ScreenConfig.XXS.max, (0, _typography.pxToRem)(14), _typographyConfig.default.fontStyles['500'], _typographyConfig.default.fontStyles['500'], _screenConfig.mq.desktop, (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(60), _screenConfig.mq.desktop, (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(16), (0, _typography.pxToRem)(4), (0, _typography.pxToRem)(50));

const FloatingMenu = _ref => {
  let {
    className,
    children,
    horizontal,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(StyledFloatingMenu, (0, _extends2.default)({
    className: (0, _classnames.default)('k-FloatingMenu', className, {
      'k-FloatingMenu--horizontal': horizontal
    })
  }, props), /*#__PURE__*/_react.default.createElement("ul", {
    className: "k-FloatingMenu__list"
  }, children));
};

exports.FloatingMenu = FloatingMenu;
FloatingMenu.defaultProps = {
  horizontal: false
};
FloatingMenu.proptypes = {
  horizontal: _propTypes.default.bool
};

const Item = _ref2 => {
  let {
    className,
    isActive,
    children,
    as,
    ...props
  } = _ref2;
  const Element = as;
  return /*#__PURE__*/_react.default.createElement("li", {
    className: "k-FloatingMenu__itemWrapper"
  }, /*#__PURE__*/_react.default.createElement(Element, (0, _extends2.default)({
    className: (0, _classnames.default)('k-FloatingMenu__item', className),
    "aria-current": isActive ? 'page' : null
  }, props), children));
};

Item.defaultProps = {
  isActive: false,
  as: 'a'
};
Item.proptypes = {
  isActive: _propTypes.default.bool,
  as: _propTypes.default.oneOf(['a', 'button'])
};
FloatingMenu.Item = Item;