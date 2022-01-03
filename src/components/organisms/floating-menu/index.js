"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.FloatingMenu = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _typography = require("../../../helpers/utils/typography");

var _screenConfig = require("../../../constants/screen-config");

var _excluded = ["className", "children"],
    _excluded2 = ["className", "isActive", "children", "as"];

var StyledFloatingMenu = _styledComponents.default.nav.withConfig({
  displayName: "floating-menu__StyledFloatingMenu",
  componentId: "sc-y05ra7-0"
})(["border:var(--border);display:flex;flex-direction:column;gap:", ";background-color:var(--color-grey-000);overflow:hidden;min-width:", ";border-bottom-left-radius:var(--border-radius-m);border-bottom-right-radius:var(--border-radius-m);@media ", "{border-top:0;}@media ", "{border-radius:var(--border-radius-m);padding:", " 0;}.k-FloatingMenu__list{margin:0;padding:0 ", ";list-style:none;display:flex;gap:", " ", ";justify-content:space-around;flex-direction:row;overflow-x:auto;@media ", "{padding:0;flex-direction:column;}.k-FloatingMenu__item{height:", ";padding-bottom:", ";display:flex;align-items:center;line-height:", ";color:var(--color-grey-900);", " font-size:", ";text-decoration:none;transition:border-color var(--transition);white-space:nowrap;border-color:transparent;border-width:", " 0 0;border-style:solid;@media (max-width:", "px){font-size:", ";}@media ", "{padding-bottom:0;padding-left:", ";border-width:0 0 0 ", ";}&[aria-current]{", " border-color:var(--color-gray-900);}&:hover,&:active{", "}&:focus-visible{outline-style:auto;}}}"], (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(185), _screenConfig.mq.mobile, _screenConfig.mq.desktop, (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(10), _screenConfig.mq.desktop, (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(4), (0, _typography.pxToRem)(20), _typographyConfig.default.fontStyles.light, (0, _typography.pxToRem)(16), (0, _typography.pxToRem)(4), _screenConfig.ScreenConfig.XXS.max, (0, _typography.pxToRem)(14), _screenConfig.mq.desktop, (0, _typography.pxToRem)(16), (0, _typography.pxToRem)(4), _typographyConfig.default.fontStyles.bold, _typographyConfig.default.fontStyles.bold);

var FloatingMenu = function FloatingMenu(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(StyledFloatingMenu, (0, _extends2.default)({
    className: (0, _classnames.default)('k-FloatingMenu', className)
  }, props), /*#__PURE__*/_react.default.createElement("ul", {
    className: "k-FloatingMenu__list"
  }, children));
};

exports.FloatingMenu = FloatingMenu;

var Item = function Item(_ref2) {
  var className = _ref2.className,
      isActive = _ref2.isActive,
      children = _ref2.children,
      as = _ref2.as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref2, _excluded2);
  var Element = as;
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