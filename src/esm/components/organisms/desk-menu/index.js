import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["className", "children"],
    _excluded2 = ["children", "className", "imageProps"],
    _excluded3 = ["className"],
    _excluded4 = ["className", "isActive", "children", "as", "linkStyle"];
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import TYPOGRAPHY from '../../../constants/typography-config';
import { pxToRem } from '../../../helpers/utils/typography';
import { getReactElementsByType } from '../../../helpers/react/react-elements';
var StyledDeskMenu = styled.nav.withConfig({
  displayName: "desk-menu__StyledDeskMenu",
  componentId: "sc-fr099i-0"
})(["--deskMenu-padding:", ";--deskMenu-image-size:", ";&.k-DeskMenuWrapper--hasImage{padding-top:calc(var(--deskMenu-image-size) / 2);}.k-DeskMenu{border:var(--border);border-radius:var(--border-radius-m);padding:var(--deskMenu-padding);display:flex;flex-direction:column;gap:", ";background-color:var(--color-grey-000);}.k-DeskMenu__header{.k-DeskMenu__header__image{margin-top:calc( -1 * (var(--deskMenu-padding) + (var(--deskMenu-image-size) / 2)) );margin-left:auto;margin-right:auto;margin-bottom:", ";width:var(--deskMenu-image-size);height:var(--deskMenu-image-size);object-fit:cover;object-position:center;display:block;border-radius:var(--border-radius-rounded);}.k-DeskMenu__header__content{text-align:center;}}.k-DeskMenu__list{margin:0;padding:0;list-style:none;display:flex;flex-direction:column;gap:", ";.k-DeskMenu__item{", " font-size:", ";text-decoration:none;transition:background-color var(--transition),color var(--transition);}.k-DeskMenu__item:not(.k-DeskMenu__item--link){display:block;padding:", " ", ";border:0;background-color:var(--color-grey-000);border-radius:var(--border-radius-xs);text-align:left;color:var(--color-grey-900);&[aria-current]{background-color:var(--color-primary-100);}&:hover,&:active{background-color:var(--color-primary-300);}&:focus-visible{outline-style:auto;}}.k-DeskMenu__item.k-DeskMenu__item--link{color:var(--color-primary-500);display:block;text-align:center;margin-bottom:", ";&:hover{color:var(--color-primary-700);}&:active{color:var(--color-primary-900);}&:focus-visible{outline-style:auto;}}}"], pxToRem(15), pxToRem(70), pxToRem(30), pxToRem(15), pxToRem(2), TYPOGRAPHY.fontStyles.regular, pxToRem(14), pxToRem(15), pxToRem(20), pxToRem(5));
export var DeskMenu = function DeskMenu(_ref) {
  var _HeaderChild$props;

  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  var HeaderChild = getReactElementsByType({
    children: children,
    type: Header
  })[0];
  var imageProps = Object.keys((HeaderChild == null ? void 0 : (_HeaderChild$props = HeaderChild.props) == null ? void 0 : _HeaderChild$props.imageProps) || {}) || [];
  return /*#__PURE__*/React.createElement(StyledDeskMenu, _extends({
    className: classNames('k-DeskMenuWrapper', className, {
      'k-DeskMenuWrapper--hasImage': imageProps.length > 0
    })
  }, props), /*#__PURE__*/React.createElement("div", {
    className: "k-DeskMenu"
  }, children));
};

var Header = function Header(_ref2) {
  var children = _ref2.children,
      className = _ref2.className,
      imageProps = _ref2.imageProps,
      props = _objectWithoutPropertiesLoose(_ref2, _excluded2);

  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('k-DeskMenu__header', className)
  }, props), Object.keys(imageProps).length > 0 && /*#__PURE__*/React.createElement("img", _extends({
    alt: ""
  }, imageProps, {
    className: classNames('k-DeskMenu__header__image', imageProps.className)
  })), /*#__PURE__*/React.createElement("div", {
    className: "k-DeskMenu__header__content"
  }, children));
};

var List = function List(_ref3) {
  var className = _ref3.className,
      props = _objectWithoutPropertiesLoose(_ref3, _excluded3);

  return /*#__PURE__*/React.createElement("ul", _extends({
    className: classNames('k-DeskMenu__list', className)
  }, props));
};

var Item = function Item(_ref4) {
  var className = _ref4.className,
      isActive = _ref4.isActive,
      children = _ref4.children,
      as = _ref4.as,
      linkStyle = _ref4.linkStyle,
      props = _objectWithoutPropertiesLoose(_ref4, _excluded4);

  var Element = as;
  return /*#__PURE__*/React.createElement("li", {
    className: "k-DeskMenu__itemWrapper"
  }, /*#__PURE__*/React.createElement(Element, _extends({
    className: classNames('k-DeskMenu__item', className, {
      'k-DeskMenu__item--link': linkStyle
    }),
    "aria-current": isActive ? 'page' : null
  }, props), children));
};

Header.defaultProps = {
  imageProps: {}
};
Header.propTypes = {
  imageProps: PropTypes.object
};
Item.defaultProps = {
  isActive: false,
  as: 'a',
  linkStyle: false
};
Item.proptypes = {
  isActive: PropTypes.bool,
  as: PropTypes.oneOf(['a', 'button']),
  linkStyle: PropTypes.bool
};
DeskMenu.Header = Header;
DeskMenu.List = List;
DeskMenu.Item = Item;