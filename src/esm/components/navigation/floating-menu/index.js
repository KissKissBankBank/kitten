import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import TYPOGRAPHY from '../../../constants/typography-config';
import { pxToRem } from '../../../helpers/utils/typography';
import { mq, ScreenConfig } from '../../../constants/screen-config';
const StyledFloatingMenu = styled.nav.withConfig({
  displayName: "floating-menu__StyledFloatingMenu",
  componentId: "sc-11idy8q-0"
})(["box-shadow:var(--box-shadow-m);display:flex;flex-direction:column;gap:", ";background-color:var(--color-grey-000);overflow:hidden;min-width:", ";.k-FloatingMenu__list{margin:0;padding:0 ", ";list-style:none;display:flex;gap:", " ", ";justify-content:space-around;flex-direction:row;overflow-x:auto;.k-FloatingMenu__item{box-sizing:border-box;height:", ";padding-top:", ";display:flex;align-items:center;line-height:", ";color:var(--color-grey-900);", " font-size:", ";text-decoration:none;transition:border-color var(--transition);white-space:nowrap;border-color:transparent;border-width:0 0 ", ";border-style:solid;@media (max-width:", "px){font-size:", ";}&[aria-current]{", " border-color:var(--color-primary-500);}&:hover,&:active{", "}&:focus-visible{outline-style:auto;}}}@media ", "{border-radius:none;box-shadow:none;.k-FloatingMenu__list{justify-content:flex-start;padding:0;gap:", " ", ";.k-FloatingMenu__item{height:", ";}}}&:not(.k-FloatingMenu--horizontal){@media ", "{box-shadow:var(--box-shadow-m);border-radius:var(--border-radius-m);padding:", " 0;.k-FloatingMenu__list{flex-direction:column;}.k-FloatingMenu__item{padding-top:0;padding-left:", ";border-width:0 0 0 ", ";height:", ";}}}"], pxToRem(30), pxToRem(185), pxToRem(20), pxToRem(2), pxToRem(10), pxToRem(50), pxToRem(4), pxToRem(20), TYPOGRAPHY.fontStyles['400'], pxToRem(16), pxToRem(4), ScreenConfig.XXS.max, pxToRem(14), TYPOGRAPHY.fontStyles['500'], TYPOGRAPHY.fontStyles['500'], mq.desktop, pxToRem(2), pxToRem(30), pxToRem(60), mq.desktop, pxToRem(10), pxToRem(16), pxToRem(4), pxToRem(50));
export const FloatingMenu = _ref => {
  let {
    className,
    children,
    horizontal,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement(StyledFloatingMenu, _extends({
    className: classNames('k-FloatingMenu', className, {
      'k-FloatingMenu--horizontal': horizontal
    })
  }, props), /*#__PURE__*/React.createElement("ul", {
    className: "k-FloatingMenu__list"
  }, children));
};
FloatingMenu.defaultProps = {
  horizontal: false
};
FloatingMenu.proptypes = {
  horizontal: PropTypes.bool
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
  return /*#__PURE__*/React.createElement("li", {
    className: "k-FloatingMenu__itemWrapper"
  }, /*#__PURE__*/React.createElement(Element, _extends({
    className: classNames('k-FloatingMenu__item', className),
    "aria-current": isActive ? 'page' : null
  }, props), children));
};

Item.defaultProps = {
  isActive: false,
  as: 'a'
};
Item.proptypes = {
  isActive: PropTypes.bool,
  as: PropTypes.oneOf(['a', 'button'])
};
FloatingMenu.Item = Item;