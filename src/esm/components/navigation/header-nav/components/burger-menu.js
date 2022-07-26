import _extends from "@babel/runtime/helpers/extends";
import React, { useContext } from 'react';
import { BurgerIcon } from '../../../graphics/icons/burger-icon';
import { VisuallyHidden } from '../../../accessibility/visually-hidden';
import COLORS from '../../../../constants/colors-config';
import { Context } from './context';
import classNames from 'classnames';
import { useDropdown } from '../hooks/use-dropdown';
import { DropdownButton } from './dropdown-button';
const namespace = 'kkbbAndCo';
const CLOSE_EVENT = namespace + ":platformMenu:close";
export const BurgerMenu = _ref => {
  let {
    children,
    dropdownContentWidth,
    className,
    ...props
  } = _ref;
  const {
    id,
    callOnToggle
  } = useContext(Context);
  const {
    dropdownProps,
    buttonProps,
    menuProps,
    isDropdownExpanded
  } = useDropdown({
    dropdownContentWidth,
    callOnToggle,
    dropdownAnchorSide: 'left',
    closeEvents: [CLOSE_EVENT],
    buttonId: id + "PlateformMenu",
    menuId: id + "PlateformMenu__content"
  });
  return /*#__PURE__*/React.createElement("div", _extends({}, dropdownProps, props, {
    className: classNames(className, dropdownProps.className)
  }), /*#__PURE__*/React.createElement(DropdownButton, _extends({}, buttonProps, {
    className: classNames(buttonProps.className, 'k-HeaderNav__BurgerMenu__button')
  }), /*#__PURE__*/React.createElement(BurgerIcon, {
    isActive: isDropdownExpanded,
    hoverColor: COLORS.font1,
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement(VisuallyHidden, null, "Menu")), /*#__PURE__*/React.createElement("div", menuProps, children));
};