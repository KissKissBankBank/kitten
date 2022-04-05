import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["children", "dropdownContentWidth", "closeEvents", "dropdownAnchorSide", "className", "padding", "mobilePadding"];
import React, { cloneElement, useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from './context';
import { getReactElementsByType } from '../../../../helpers/react/get-react-elements';
import classNames from 'classnames';
import { DropdownButton } from './dropdown-button';
import { useDropdown } from '../hooks/use-dropdown';
import { ArrowIcon } from '../../../graphics/icons/arrow-icon';
var namespace = 'kkbbAndCo';
var CLOSE_EVENT = namespace + ":userMenu:close";
export var UserMenu = function UserMenu(_ref) {
  var children = _ref.children,
      dropdownContentWidth = _ref.dropdownContentWidth,
      closeEvents = _ref.closeEvents,
      dropdownAnchorSide = _ref.dropdownAnchorSide,
      className = _ref.className,
      padding = _ref.padding,
      mobilePadding = _ref.mobilePadding,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  var _useContext = useContext(Context),
      id = _useContext.id,
      callOnToggle = _useContext.callOnToggle;

  var buttonChild = getReactElementsByType({
    children: children,
    type: UserMenu.Button
  })[0];
  var menuChild = getReactElementsByType({
    children: children,
    type: UserMenu.Navigation
  })[0];

  var _useDropdown = useDropdown({
    dropdownContentWidth: dropdownContentWidth,
    callOnToggle: callOnToggle,
    dropdownAnchorSide: dropdownAnchorSide,
    closeEvents: [CLOSE_EVENT].concat(closeEvents),
    buttonId: id + "__UserMenu__Button",
    menuId: id + "__UserMenu__Menu"
  }),
      dropdownProps = _useDropdown.dropdownProps,
      buttonProps = _useDropdown.buttonProps,
      menuProps = _useDropdown.menuProps,
      isDropdownExpanded = _useDropdown.isDropdownExpanded;

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

UserMenu.Button = function (_ref2) {
  var children = _ref2.children;
  return /*#__PURE__*/React.createElement(React.Fragment, null, children);
};

UserMenu.Navigation = function (_ref3) {
  var children = _ref3.children;
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