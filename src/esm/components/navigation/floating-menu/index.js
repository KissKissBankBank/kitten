import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["className", "children"],
    _excluded2 = ["className", "isActive", "children", "as"];
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import TYPOGRAPHY from '../../../constants/typography-config';
import { pxToRem } from '../../../helpers/utils/typography';
import { mq, ScreenConfig } from '../../../constants/screen-config';
var StyledFloatingMenu = styled.nav.withConfig({
  displayName: "floating-menu__StyledFloatingMenu",
  componentId: "sc-11idy8q-0"
})(["border:var(--border);display:flex;flex-direction:column;gap:", ";background-color:var(--color-grey-000);overflow:hidden;min-width:", ";border-bottom-left-radius:var(--border-radius-m);border-bottom-right-radius:var(--border-radius-m);@media ", "{border-top:0;}@media ", "{border-radius:var(--border-radius-m);padding:", " 0;}.k-FloatingMenu__list{margin:0;padding:0 ", ";list-style:none;display:flex;gap:", " ", ";justify-content:space-around;flex-direction:row;overflow-x:auto;@media ", "{padding:0;flex-direction:column;}.k-FloatingMenu__item{height:", ";padding-bottom:", ";display:flex;align-items:center;line-height:", ";color:var(--color-grey-900);", " font-size:", ";text-decoration:none;transition:border-color var(--transition);white-space:nowrap;border-color:transparent;border-width:", " 0 0;border-style:solid;@media (max-width:", "px){font-size:", ";}@media ", "{padding-bottom:0;padding-left:", ";border-width:0 0 0 ", ";}&[aria-current]{", " border-color:var(--color-gray-900);}&:hover,&:active{", "}&:focus-visible{outline-style:auto;}}}"], pxToRem(30), pxToRem(185), mq.mobile, mq.desktop, pxToRem(10), pxToRem(10), pxToRem(2), pxToRem(10), mq.desktop, pxToRem(50), pxToRem(4), pxToRem(20), TYPOGRAPHY.fontStyles.light, pxToRem(16), pxToRem(4), ScreenConfig.XXS.max, pxToRem(14), mq.desktop, pxToRem(16), pxToRem(4), TYPOGRAPHY.fontStyles.bold, TYPOGRAPHY.fontStyles.bold);
export var FloatingMenu = function FloatingMenu(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement(StyledFloatingMenu, _extends({
    className: classNames('k-FloatingMenu', className)
  }, props), /*#__PURE__*/React.createElement("ul", {
    className: "k-FloatingMenu__list"
  }, children));
};

var Item = function Item(_ref2) {
  var className = _ref2.className,
      isActive = _ref2.isActive,
      children = _ref2.children,
      as = _ref2.as,
      props = _objectWithoutPropertiesLoose(_ref2, _excluded2);

  var Element = as;
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