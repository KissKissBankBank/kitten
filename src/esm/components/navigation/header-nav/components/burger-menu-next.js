import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { useContext } from 'react';
import { BurgerIcon } from '../../../../components/icons/burger-icon';
import { Dropdown } from './dropdown';
import { VisuallyHidden } from '../../../../components/accessibility/visually-hidden';
import COLORS from '../../../../constants/colors-config';
import { Context } from './context';
import classNames from 'classnames';
import { useDropdown } from '../hooks/use-dropdown';
import { DropdownButton } from './dropdown-button';
var namespace = 'kkbbAndCo';
var DROPDOWN_CLASS = "".concat(namespace, "-PlatformMenu");
var CLOSE_EVENT = "".concat(namespace, ":platformMenu:close");
export var BurgerMenuNext = function BurgerMenuNext(_ref) {
  var children = _ref.children,
      dropdownContentWidth = _ref.dropdownContentWidth,
      props = _objectWithoutProperties(_ref, ["children", "dropdownContentWidth"]);

  var _useContext = useContext(Context),
      id = _useContext.id,
      callOnToggle = _useContext.callOnToggle;

  var _useDropdown = useDropdown({
    dropdownContentWidth: dropdownContentWidth,
    callOnToggle: callOnToggle,
    dropdownAnchorSide: 'left',
    closeEvents: [CLOSE_EVENT],
    buttonId: "".concat(id, "PlateformMenu"),
    menuId: "".concat(id, "PlateformMenu__content")
  }),
      dropdownProps = _useDropdown.dropdownProps,
      buttonProps = _useDropdown.buttonProps,
      menuProps = _useDropdown.menuProps,
      isDropdownExpanded = _useDropdown.isDropdownExpanded;

  return /*#__PURE__*/React.createElement("div", dropdownProps, /*#__PURE__*/React.createElement(DropdownButton, _extends({}, buttonProps, {
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