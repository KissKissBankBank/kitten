"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.DeskMenu = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _typography = require("../../../helpers/utils/typography");

var _getReactElements = require("../../../helpers/react/get-react-elements");

const StyledDeskMenu = _styledComponents.default.nav.withConfig({
  displayName: "desk-menu__StyledDeskMenu",
  componentId: "sc-1s9s459-0"
})(["--deskMenu-padding:", ";--deskMenu-image-size:", ";&.k-DeskMenuWrapper--hasImage{padding-top:calc(var(--deskMenu-image-size) / 2);}.k-DeskMenu{box-shadow:var(--box-shadow-m);border-radius:var(--border-radius-m);padding:var(--deskMenu-padding);display:flex;flex-direction:column;gap:", ";background-color:var(--color-grey-000);}.k-DeskMenu__header{.k-DeskMenu__header__image{margin-top:calc( -1 * (var(--deskMenu-padding) + (var(--deskMenu-image-size) / 2)) );margin-left:auto;margin-right:auto;margin-bottom:", ";width:var(--deskMenu-image-size);height:var(--deskMenu-image-size);object-fit:cover;object-position:center;display:block;border-radius:var(--border-radius-rounded);border:var(--border-width) solid var(--color-grey-300);}.k-DeskMenu__header__content{text-align:center;}}.k-DeskMenu__list{margin:0;padding:0;list-style:none;display:flex;flex-direction:column;gap:", ";.k-DeskMenu__item{", " font-size:", ";text-decoration:none;transition:background-color var(--transition),color var(--transition);}.k-DeskMenu__item:not(.k-DeskMenu__item--link){display:block;padding:", " ", ";border:0;background-color:var(--color-grey-000);border-radius:var(--border-radius-xs);text-align:left;color:var(--color-grey-900);&[aria-current]{background-color:var(--color-primary-100);}&:hover,&:active{background-color:var(--color-primary-300);}&:focus-visible{outline-style:auto;}}.k-DeskMenu__item.k-DeskMenu__item--link{color:var(--color-primary-500);display:block;text-align:center;margin-bottom:", ";&:hover{color:var(--color-primary-700);}&:active{color:var(--color-primary-900);}&:focus-visible{outline-style:auto;}}}"], (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(70), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(2), _typographyConfig.default.fontStyles['500'], (0, _typography.pxToRem)(14), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(5));

const DeskMenu = _ref => {
  var _HeaderChild$props;

  let {
    className,
    children,
    ...props
  } = _ref;
  const HeaderChild = (0, _getReactElements.getReactElementsByType)({
    children,
    type: Header
  })[0];
  const imageProps = Object.keys((HeaderChild == null ? void 0 : (_HeaderChild$props = HeaderChild.props) == null ? void 0 : _HeaderChild$props.imageProps) || {}) || [];
  return /*#__PURE__*/_react.default.createElement(StyledDeskMenu, (0, _extends2.default)({
    className: (0, _classnames.default)('k-DeskMenuWrapper', className, {
      'k-DeskMenuWrapper--hasImage': imageProps.length > 0
    })
  }, props), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-DeskMenu"
  }, children));
};

exports.DeskMenu = DeskMenu;

const Header = _ref2 => {
  let {
    children,
    className,
    imageProps,
    ...props
  } = _ref2;
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

const List = _ref3 => {
  let {
    className,
    ...props
  } = _ref3;
  return /*#__PURE__*/_react.default.createElement("ul", (0, _extends2.default)({
    className: (0, _classnames.default)('k-DeskMenu__list', className)
  }, props));
};

const Item = _ref4 => {
  let {
    className,
    isActive,
    children,
    as,
    linkStyle,
    ...props
  } = _ref4;
  const Element = as;
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