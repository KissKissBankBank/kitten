import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["children", "dropdownContentWidth", "className"];
import React, { useContext } from 'react';
import { BurgerIcon } from '../../../../components/graphics/icons/burger-icon';
import { VisuallyHidden } from '../../../../components/accessibility/visually-hidden';
import COLORS from '../../../../constants/colors-config';
import { Context } from './context';
import classNames from 'classnames';
import { useDropdown } from '../hooks/use-dropdown';
import { DropdownButton } from './dropdown-button';
var namespace = 'kkbbAndCo';
var CLOSE_EVENT = namespace + ":platformMenu:close";
export var BurgerMenuNext = function BurgerMenuNext(_ref) {
  var children = _ref.children,
      dropdownContentWidth = _ref.dropdownContentWidth,
      className = _ref.className,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  var _useContext = useContext(Context),
      id = _useContext.id,
      callOnToggle = _useContext.callOnToggle;

  var _useDropdown = useDropdown({
    dropdownContentWidth: dropdownContentWidth,
    callOnToggle: callOnToggle,
    dropdownAnchorSide: 'left',
    closeEvents: [CLOSE_EVENT],
    buttonId: id + "PlateformMenu",
    menuId: id + "PlateformMenu__content"
  }),
      dropdownProps = _useDropdown.dropdownProps,
      buttonProps = _useDropdown.buttonProps,
      menuProps = _useDropdown.menuProps,
      isDropdownExpanded = _useDropdown.isDropdownExpanded;

  return /*#__PURE__*/React.createElement("div", _extends({}, dropdownProps, props, {
    className: classNames(className, dropdownProps.className)
  }), /*#__PURE__*/React.createElement(DropdownButton, _extends({}, buttonProps, {
    className: classNames(buttonProps.className, 'k-HeaderNav__BurgerMenu__button', 'k-ButtonIcon', 'k-ButtonIcon--tiny')
  }), isDropdownExpanded ? /*#__PURE__*/React.createElement(BurgerIcon, {
    isActive: true,
    hoverColor: COLORS.font1,
    className: "k-ButtonIcon__svg",
    "aria-hidden": "true"
  }) : /*#__PURE__*/React.createElement(BurgerIcon, {
    isAnimatedOnHover: true,
    hoverColor: COLORS.font1,
    className: "k-ButtonIcon__svg",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement(VisuallyHidden, null, "Menu")), /*#__PURE__*/React.createElement("div", menuProps, children));
};