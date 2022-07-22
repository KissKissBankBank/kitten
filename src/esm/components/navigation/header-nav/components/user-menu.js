import _extends from "@babel/runtime/helpers/extends";
import React, { cloneElement, useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from './context';
import { getReactElementsByType } from '../../../../helpers/react/get-react-elements';
import classNames from 'classnames';
import { DropdownButton } from './dropdown-button';
import { useDropdown } from '../hooks/use-dropdown';
import { ArrowIcon } from '../../../graphics/icons/arrow-icon';
const namespace = 'kkbbAndCo';
const CLOSE_EVENT = namespace + ":userMenu:close";
export const UserMenu = _ref => {
  let {
    children,
    dropdownContentWidth,
    closeEvents,
    dropdownAnchorSide,
    className,
    padding,
    mobilePadding,
    ...props
  } = _ref;
  const {
    id,
    callOnToggle
  } = useContext(Context);
  const buttonChild = getReactElementsByType({
    children,
    type: UserMenu.Button
  })[0];
  const menuChild = getReactElementsByType({
    children,
    type: UserMenu.Navigation
  })[0];
  const {
    dropdownProps,
    buttonProps,
    menuProps,
    isDropdownExpanded
  } = useDropdown({
    dropdownContentWidth,
    callOnToggle,
    dropdownAnchorSide,
    closeEvents: [CLOSE_EVENT, ...closeEvents],
    buttonId: id + "__UserMenu__Button",
    menuId: id + "__UserMenu__Menu"
  });
  return /*#__PURE__*/React.createElement("div", _extends({}, dropdownProps, props, {
    className: classNames('k-HeaderNav__UserMenu', className, dropdownProps.className)
  }), /*#__PURE__*/React.createElement(DropdownButton, _extends({}, buttonProps, {
    style: {
      '--UserMenu-Button-backgroundColor': buttonChild.props.backgroundColor || null,
      '--UserMenu-Button-backgroundColorHover': buttonChild.props.backgroundColorHover || null,
      '--UserMenu-Button-backgroundColorActive': buttonChild.props.backgroundColorActive || null,
      '--UserMenu-Button-color': buttonChild.props.color || null,
      '--UserMenu-Button-colorHover': buttonChild.props.colorHover || null,
      '--UserMenu-Button-colorActive': buttonChild.props.colorActive || null
    },
    className: classNames('k-HeaderNav__UserMenuButton', buttonChild.props.className, buttonProps.className)
  }), /*#__PURE__*/cloneElement(buttonChild), /*#__PURE__*/React.createElement(ArrowIcon, {
    direction: isDropdownExpanded ? 'top' : 'bottom',
    className: "k-u-margin-left-single k-u-hidden@xs-down",
    color: "currentColor"
  })), /*#__PURE__*/React.createElement("div", menuProps, /*#__PURE__*/cloneElement(menuChild)));
};

UserMenu.Button = _ref2 => {
  let {
    children
  } = _ref2;
  return /*#__PURE__*/React.createElement(React.Fragment, null, children);
};

UserMenu.Navigation = _ref3 => {
  let {
    children
  } = _ref3;
  return /*#__PURE__*/React.createElement(React.Fragment, null, children);
};

UserMenu.propTypes = {
  dropdownContentWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  padding: PropTypes.bool,
  mobilePadding: PropTypes.bool,
  closeEvents: PropTypes.arrayOf(PropTypes.string),
  dropdownAnchorSide: PropTypes.oneOf(['left', 'right'])
};
UserMenu.defaultProps = {
  dropdownContentWidth: null,
  closeEvents: [],
  dropdownAnchorSide: 'left'
};