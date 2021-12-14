"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeskMenu = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _typography = require("../../../helpers/utils/typography");

var _reactElements = require("../../../helpers/react/react-elements");

var StyledDeskMenu = _styledComponents.default.nav.withConfig({
  displayName: "desk-menu__StyledDeskMenu",
  componentId: "fr099i-0"
})(["--deskMenu-padding:", ";--deskMenu-image-size:", ";&.k-DeskMenuWrapper--hasImage{padding-top:calc(var(--deskMenu-image-size) / 2);}.k-DeskMenu{border:var(--border);border-radius:var(--border-radius-m);padding:var(--deskMenu-padding);display:flex;flex-direction:column;gap:", ";background-color:var(--color-grey-000);}.k-DeskMenu__header{.k-DeskMenu__header__image{margin-top:calc( -1 * (var(--deskMenu-padding) + (var(--deskMenu-image-size) / 2)) );margin-left:auto;margin-right:auto;margin-bottom:", ";width:var(--deskMenu-image-size);height:var(--deskMenu-image-size);object-fit:cover;object-position:center;display:block;border-radius:var(--border-radius-rounded);}.k-DeskMenu__header__content{text-align:center;}}.k-DeskMenu__list{margin:0;padding:0;list-style:none;display:flex;flex-direction:column;gap:", ";.k-DeskMenu__item{", " font-size:", ";text-decoration:none;transition:background-color var(--transition),color var(--transition);}.k-DeskMenu__item:not(.k-DeskMenu__item--link){display:block;padding:", " ", ";border:0;background-color:var(--color-grey-000);border-radius:var(--border-radius-xs);text-align:left;color:var(--color-grey-900);&[aria-current]{background-color:var(--color-primary-100);}&:hover,&:active{background-color:var(--color-primary-300);}&:focus-visible{outline-style:auto;}}.k-DeskMenu__item.k-DeskMenu__item--link{color:var(--color-primary-500);display:block;text-align:center;margin-bottom:", ";&:hover{color:var(--color-primary-700);}&:active{color:var(--color-primary-900);}&:focus-visible{outline-style:auto;}}}"], (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(70), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(2), _typographyConfig.default.fontStyles.regular, (0, _typography.pxToRem)(14), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(5));

var DeskMenu = function DeskMenu(_ref) {
  var _HeaderChild$props;

  var className = _ref.className,
      children = _ref.children,
      props = (0, _objectWithoutProperties2.default)(_ref, ["className", "children"]);
  var HeaderChild = (0, _reactElements.getReactElementsByType)({
    children: children,
    type: Header
  })[0];
  var imageProps = Object.keys((HeaderChild === null || HeaderChild === void 0 ? void 0 : (_HeaderChild$props = HeaderChild.props) === null || _HeaderChild$props === void 0 ? void 0 : _HeaderChild$props.imageProps) || {}) || [];
  return /*#__PURE__*/_react.default.createElement(StyledDeskMenu, (0, _extends2.default)({
    className: (0, _classnames.default)('k-DeskMenuWrapper', className, {
      'k-DeskMenuWrapper--hasImage': imageProps.length > 0
    })
  }, props), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-DeskMenu"
  }, children));
};

exports.DeskMenu = DeskMenu;

var Header = function Header(_ref2) {
  var children = _ref2.children,
      className = _ref2.className,
      imageProps = _ref2.imageProps,
      props = (0, _objectWithoutProperties2.default)(_ref2, ["children", "className", "imageProps"]);
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)('k-DeskMenu__header', className)
  }, props), Object.keys(imageProps).length > 0 && /*#__PURE__*/_react.default.createElement("img", (0, _extends2.default)({
    alt: ""
  }, imageProps, {
    className: (0, _classnames.default)('k-DeskMenu__header__image', imageProps.className)
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-DeskMenu__header__content"
  }, children));
};

var List = function List(_ref3) {
  var className = _ref3.className,
      props = (0, _objectWithoutProperties2.default)(_ref3, ["className"]);
  return /*#__PURE__*/_react.default.createElement("ul", (0, _extends2.default)({
    className: (0, _classnames.default)('k-DeskMenu__list', className)
  }, props));
};

var Item = function Item(_ref4) {
  var className = _ref4.className,
      isActive = _ref4.isActive,
      children = _ref4.children,
      as = _ref4.as,
      linkStyle = _ref4.linkStyle,
      props = (0, _objectWithoutProperties2.default)(_ref4, ["className", "isActive", "children", "as", "linkStyle"]);
  var Element = as;
  return /*#__PURE__*/_react.default.createElement("li", {
    className: "k-DeskMenu__itemWrapper"
  }, /*#__PURE__*/_react.default.createElement(Element, (0, _extends2.default)({
    className: (0, _classnames.default)('k-DeskMenu__item', className, {
      'k-DeskMenu__item--link': linkStyle
    }),
    "aria-current": isActive ? 'page' : null
  }, props), children));
};

Header.defaultProps = {
  imageProps: {}
};
Header.propTypes = {
  imageProps: _propTypes.default.object
};
Item.defaultProps = {
  isActive: false,
  as: 'a',
  linkStyle: false
};
Item.proptypes = {
  isActive: _propTypes.default.bool,
  as: _propTypes.default.oneOf(['a', 'button']),
  linkStyle: _propTypes.default.bool
};
DeskMenu.Header = Header;
DeskMenu.List = List;
DeskMenu.Item = Item;