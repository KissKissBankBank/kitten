import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import TYPOGRAPHY from '../../../constants/typography-config';
import { pxToRem } from '../../../helpers/utils/typography';
import { getReactElementsByType } from '../../../helpers/react/get-react-elements';
const StyledDeskMenu = styled.nav.withConfig({
  displayName: "desk-menu__StyledDeskMenu",
  componentId: "sc-1s9s459-0"
})(["--deskMenu-padding:", ";--deskMenu-image-size:", ";&.k-DeskMenuWrapper--hasImage{padding-top:calc(var(--deskMenu-image-size) / 2);}.k-DeskMenu{box-shadow:var(--box-shadow-m);border-radius:var(--border-radius-m);padding:var(--deskMenu-padding);display:flex;flex-direction:column;gap:", ";background-color:var(--color-grey-000);}.k-DeskMenu__header{.k-DeskMenu__header__image{margin-top:calc( -1 * (var(--deskMenu-padding) + (var(--deskMenu-image-size) / 2)) );margin-left:auto;margin-right:auto;margin-bottom:", ";width:var(--deskMenu-image-size);height:var(--deskMenu-image-size);object-fit:cover;object-position:center;display:block;border-radius:var(--border-radius-rounded);border:var(--border-width) solid var(--color-grey-300);}.k-DeskMenu__header__content{text-align:center;}}.k-DeskMenu__list{margin:0;padding:0;list-style:none;display:flex;flex-direction:column;gap:", ";.k-DeskMenu__item{", " font-size:", ";text-decoration:none;transition:background-color var(--transition),color var(--transition);}.k-DeskMenu__item:not(.k-DeskMenu__item--link){display:block;padding:", " ", ";border:0;background-color:var(--color-grey-000);border-radius:var(--border-radius-xs);text-align:left;color:var(--color-grey-900);&[aria-current]{background-color:var(--color-primary-100);}&:hover,&:active{background-color:var(--color-primary-300);}&:focus-visible{outline-style:auto;}}.k-DeskMenu__item.k-DeskMenu__item--link{color:var(--color-primary-500);display:block;text-align:center;margin-bottom:", ";&:hover{color:var(--color-primary-700);}&:active{color:var(--color-primary-900);}&:focus-visible{outline-style:auto;}}}"], pxToRem(15), pxToRem(70), pxToRem(30), pxToRem(15), pxToRem(2), TYPOGRAPHY.fontStyles['500'], pxToRem(14), pxToRem(15), pxToRem(20), pxToRem(5));
export const DeskMenu = _ref => {
  var _HeaderChild$props;

  let {
    className,
    children,
    ...props
  } = _ref;
  const HeaderChild = getReactElementsByType({
    children,
    type: Header
  })[0];
  const imageProps = Object.keys((HeaderChild == null ? void 0 : (_HeaderChild$props = HeaderChild.props) == null ? void 0 : _HeaderChild$props.imageProps) || {}) || [];
  return /*#__PURE__*/React.createElement(StyledDeskMenu, _extends({
    className: classNames('k-DeskMenuWrapper', className, {
      'k-DeskMenuWrapper--hasImage': imageProps.length > 0
    })
  }, props), /*#__PURE__*/React.createElement("div", {
    className: "k-DeskMenu"
  }, children));
};

const Header = _ref2 => {
  let {
    children,
    className,
    imageProps,
    ...props
  } = _ref2;
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

const List = _ref3 => {
  let {
    className,
    ...props
  } = _ref3;
  return /*#__PURE__*/React.createElement("ul", _extends({
    className: classNames('k-DeskMenu__list', className)
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