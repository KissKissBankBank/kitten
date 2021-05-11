import _extends from "@babel/runtime/helpers/esm/extends";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from './dropdown';
import { Context } from './context';
import { getReactElementsByType } from '../../../../helpers/react/react-elements';
import classNames from 'classnames';
var namespace = 'kkbbAndCo';
var DROPDOWN_CLASS = "".concat(namespace, "-UserMenu k-HeaderNav__UserMenu");
var CLOSE_EVENT = "".concat(namespace, ":userMenu:close");
export var UserMenu = function UserMenu(_ref) {
  var children = _ref.children,
      dropdownContentWidth = _ref.dropdownContentWidth,
      padding = _ref.padding,
      closeEvents = _ref.closeEvents,
      buttonProps = _ref.buttonProps,
      props = _objectWithoutProperties(_ref, ["children", "dropdownContentWidth", "padding", "closeEvents", "buttonProps"]);

  var userDropdownRef = useRef(null);

  var getElementById = function getElementById(id) {
    return function () {
      return document.getElementById(id);
    };
  };

  var getButtonId = function getButtonId(id) {
    return "".concat(id, "UserMenu");
  };

  var button = getReactElementsByType({
    children: children,
    type: UserMenu.Button
  })[0];
  var navigation = getReactElementsByType({
    children: children,
    type: UserMenu.Navigation
  })[0];
  var _button$props = button.props,
      hasArrow = _button$props.hasArrow,
      backgroundColor = _button$props.backgroundColor,
      backgroundColorHover = _button$props.backgroundColorHover,
      backgroundColorActive = _button$props.backgroundColorActive,
      color = _button$props.color,
      colorHover = _button$props.colorHover,
      colorActive = _button$props.colorActive;
  var buttonStyles = {
    '--UserMenu-Button-backgroundColor': backgroundColor,
    '--UserMenu-Button-backgroundColorHover': backgroundColorHover,
    '--UserMenu-Button-backgroundColorActive': backgroundColorActive,
    '--UserMenu-Button-color': color,
    '--UserMenu-Button-colorHover': colorHover,
    '--UserMenu-Button-colorActive': colorActive
  };
  var buttonClassName = classNames('k-HeaderNav__UserMenuButton', {
    'k-HeaderNav__UserMenuButton--hasArrow': hasArrow,
    'k-HeaderNav__UserMenuButton--nopadding': !padding
  }, props.className);
  return /*#__PURE__*/React.createElement(Context.Consumer, null, function (_ref2) {
    var id = _ref2.id,
        callOnToggle = _ref2.callOnToggle;
    return /*#__PURE__*/React.createElement(Dropdown, _extends({}, props, {
      button: button,
      buttonClassName: buttonClassName,
      buttonStyles: buttonStyles,
      buttonId: getButtonId(id),
      className: DROPDOWN_CLASS,
      closeEvents: [CLOSE_EVENT].concat(_toConsumableArray(closeEvents)),
      closeOnOuterClick: true,
      dropdownContent: navigation,
      dropdownContentWidth: dropdownContentWidth,
      hasArrow: hasArrow,
      keepInitialButtonAction: true,
      onToggle: callOnToggle,
      positionedHorizontallyWith: getElementById(getButtonId(id)),
      positionedVerticallyWith: getElementById(id),
      ref: userDropdownRef,
      refreshEvents: ['resize']
    }));
  });
};
UserMenu.propTypes = {
  dropdownContentWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  padding: PropTypes.bool,
  closeEvents: PropTypes.arrayOf(PropTypes.string),
  hasArrow: PropTypes.bool
};
UserMenu.defaultProps = {
  dropdownContentWidth: null,
  padding: true,
  closeEvents: [],
  hasArrow: false
};

UserMenu.Button = function (_ref3) {
  var children = _ref3.children;
  return /*#__PURE__*/React.createElement(React.Fragment, null, children);
};

UserMenu.Navigation = function (_ref4) {
  var children = _ref4.children,
      props = _objectWithoutProperties(_ref4, ["children"]);

  return /*#__PURE__*/React.createElement("div", props, children);
};