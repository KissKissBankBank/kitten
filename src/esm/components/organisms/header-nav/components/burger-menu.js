import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { useContext } from 'react';
import { BurgerIcon } from '../../../../components/graphics/icons/burger-icon';
import { VisuallyHidden } from '../../../../components/accessibility/visually-hidden';
import COLORS from '../../../../constants/colors-config';
import { Context } from './context';
import classNames from 'classnames';
import { useDropdown } from '../hooks/use-dropdown';
import { DropdownButton } from './dropdown-button';
var namespace = 'kkbbAndCo';
var CLOSE_EVENT = "".concat(namespace, ":platformMenu:close");
export var BurgerMenu = function BurgerMenu(_ref) {
  var children = _ref.children,
      dropdownContentWidth = _ref.dropdownContentWidth,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["children", "dropdownContentWidth", "className"]);

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

  return /*#__PURE__*/React.createElement("div", _extends({}, dropdownProps, props, {
    className: classNames(className, dropdownProps.className)
  }), /*#__PURE__*/React.createElement(DropdownButton, _extends({}, buttonProps, {
    className: classNames(buttonProps.className, 'k-HeaderNav__BurgerMenu__button', 'k-ButtonIcon', 'k-ButtonIcon--tiny')
  }), /*#__PURE__*/React.createElement(BurgerIcon, {
    isActive: isDropdownExpanded,
    hoverColor: COLORS.font1,
    className: "k-ButtonIcon__svg",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement(VisuallyHidden, null, "Menu")), /*#__PURE__*/React.createElement("div", menuProps, children));
};