"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DashboardMenu = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _find = _interopRequireDefault(require("lodash/fp/find"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _typography = require("../../../helpers/utils/typography");

var _arrowIcon = require("../../../components/icons/arrow-icon");

var StyledDashboardMenu = _styledComponents.default.nav.withConfig({
  displayName: "dashboard-menu__StyledDashboardMenu",
  componentId: "prb1iz-0"
})(["color:", ";.k-DashboardMenu__expandable__title,.k-DashboardMenu__item{&,&:visited,&:link{color:", ";font-size:", ";text-decoration:none;transition:color .2s ease,background-color .2s ease;}&:focus,&:hover{background-color:", " !important;}&:focus{outline:", " solid ", ";outline-offset:", ";}}.k-DashboardMenu__list,.k-DashboardMenu__expandable__list{margin:0;padding:0;list-style:none;}.k-DashboardMenu__expandable summary{list-style:none;&:focus{outline:", " solid ", ";outline-offset:", ";}&::-webkit-details-marker{display:none;}}.k-DashboardMenu__item .k-DashboardMenu__item__text,.k-DashboardMenu__expandable .k-DashboardMenu__expandable__title__text{flex:1 0 auto;}.k-DashboardMenu__expandable{border-radius:", ";background-color:", ";.k-DashboardMenu__expandable__list{padding:0 ", " ", " ", ";display:flex;flex-direction:column;gap:", ";}}.k-DashboardMenu__list > li > .k-DashboardMenu__expandable .k-DashboardMenu__expandable__title,.k-DashboardMenu__list > li > .k-DashboardMenu__item{display:flex;height:", ";align-items:center;gap:", ";padding:0 ", ";border-radius:", ";}.k-DashboardMenu__expandable .k-DashboardMenu__expandable__title,.k-DashboardMenu__list > li > .k-DashboardMenu__item{", " background-color:", ";cursor:pointer;}.k-DashboardMenu__expandable[open] .k-DashboardMenu__expandable__title,.k-DashboardMenu__expandable--hasActiveInside .k-DashboardMenu__expandable__title,.k-DashboardMenu__list > li > .k-DashboardMenu__item[aria-current=\"page\"]{color:", ";background-color:", ";}.k-DashboardMenu__expandable__list > li > .k-DashboardMenu__item{", " line-height:", ";&:hover,&:focus,&[aria-current=\"page\"]{", " color:", ";}}.k-DashboardMenu__iconWrapper{display:inline-flex;width:", ";height:", ";align-items:center;justify-content:center;svg{max-width:", ";max-height:", ";&[fill],d[fill]{transition:fill .2s ease-in-out;}}}.k-DashboardMenu__expandable__title__arrow{flex:0 0 auto;padding:", ";svg{display:block;fill:currentColor;transition:transform .2s ease-in-out;}}[open] .k-DashboardMenu__expandable__title__arrow svg{transform:rotate(360deg) !important;}"], _colorsConfig.default.font2, _colorsConfig.default.font2, (0, _typography.stepToRem)(-1), _colorsConfig.default.line3, _colorsConfig.default.primary3, (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(2), _colorsConfig.default.primary3, (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(6), _colorsConfig.default.line3, (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(60), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(6), _typographyConfig.default.fontStyles.regular, _colorsConfig.default.font1, _colorsConfig.default.background1, _colorsConfig.default.line3, _typographyConfig.default.fontStyles.light, (0, _typography.pxToRem)(18), _typographyConfig.default.fontStyles.regular, _colorsConfig.default.background1, (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(25), (0, _typography.pxToRem)(25), (0, _typography.pxToRem)(5));

var DashboardMenu = function DashboardMenu(_ref) {
  var className = _ref.className,
      props = (0, _objectWithoutProperties2.default)(_ref, ["className"]);
  return /*#__PURE__*/_react.default.createElement(StyledDashboardMenu, {
    className: (0, _classnames.default)('k-DashboardMenu', className)
  }, /*#__PURE__*/_react.default.createElement("ul", (0, _extends2.default)({
    className: "k-DashboardMenu__list"
  }, props)));
};

exports.DashboardMenu = DashboardMenu;

var Item = function Item(_ref2) {
  var className = _ref2.className,
      icon = _ref2.icon,
      isActive = _ref2.isActive,
      children = _ref2.children,
      props = (0, _objectWithoutProperties2.default)(_ref2, ["className", "icon", "isActive", "children"]);
  return /*#__PURE__*/_react.default.createElement("li", {
    className: "k-DashboardMenu__itemWrapper"
  }, /*#__PURE__*/_react.default.createElement("a", (0, _extends2.default)({
    className: (0, _classnames.default)('k-DashboardMenu__item', className),
    "aria-current": isActive ? 'page' : null
  }, props), icon && /*#__PURE__*/_react.default.createElement("span", {
    className: "k-DashboardMenu__iconWrapper"
  }, icon()), /*#__PURE__*/_react.default.createElement("span", {
    className: "k-DashboardMenu__item__text"
  }, children)));
};

var Expandable = function Expandable(_ref3) {
  var className = _ref3.className,
      children = _ref3.children,
      icon = _ref3.icon,
      title = _ref3.title,
      props = (0, _objectWithoutProperties2.default)(_ref3, ["className", "children", "icon", "title"]);

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      hasActiveInside = _useState2[0],
      setActiveInside = _useState2[1];

  (0, _react.useEffect)(function () {
    setActiveInside(false);
    var hasActiveChild = (0, _find.default)(function (child) {
      var _child$props;

      return child === null || child === void 0 ? void 0 : (_child$props = child.props) === null || _child$props === void 0 ? void 0 : _child$props.isActive;
    })(children);
    setActiveInside(hasActiveChild);
  });
  return /*#__PURE__*/_react.default.createElement("li", {
    className: "k-DashboardMenu__expandableWrapper"
  }, /*#__PURE__*/_react.default.createElement("details", (0, _extends2.default)({
    className: (0, _classnames.default)('k-DashboardMenu__expandable', className, {
      'k-DashboardMenu__expandable--hasActiveInside': hasActiveInside
    }),
    open: hasActiveInside ? hasActiveInside : null
  }, props), /*#__PURE__*/_react.default.createElement("summary", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "k-DashboardMenu__expandable__title"
  }, icon && /*#__PURE__*/_react.default.createElement("span", {
    className: "k-DashboardMenu__iconWrapper"
  }, icon()), /*#__PURE__*/_react.default.createElement("span", {
    className: "k-DashboardMenu__expandable__title__text"
  }, title), /*#__PURE__*/_react.default.createElement("span", {
    className: "k-DashboardMenu__expandable__title__arrow"
  }, /*#__PURE__*/_react.default.createElement(_arrowIcon.ArrowIcon, {
    direction: "bottom"
  })))), /*#__PURE__*/_react.default.createElement("ul", {
    className: "k-DashboardMenu__expandable__list"
  }, children)));
};

Item.proptypes = {
  icon: _propTypes.default.func,
  isActive: _propTypes.default.bool
};
Expandable.proptypes = {
  icon: _propTypes.default.func,
  title: _propTypes.default.node
};
DashboardMenu.Item = Item;
DashboardMenu.Expandable = Expandable;