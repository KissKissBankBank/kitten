import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["name", "iconLabel", "hiddenIconLabel"];
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TextInput } from '../../../form/input/text-input';
import { PasswordIcon } from '../../../graphics/icons/password-icon';
export var PasswordInput = function PasswordInput(_ref) {
  var name = _ref.name,
      iconLabel = _ref.iconLabel,
      hiddenIconLabel = _ref.hiddenIconLabel,
      others = _objectWithoutPropertiesLoose(_ref, _excluded);

  var _useState = useState(true),
      isHidden = _useState[0],
      setIsHidden = _useState[1];

  var handleClick = function handleClick() {
    setIsHidden(!isHidden);
  };

  return /*#__PURE__*/React.createElement(TextInput, _extends({}, others, {
    name: name,
    type: isHidden ? 'password' : 'text',
    has: "button",
    buttonIsInset: true,
    buttonProps: {
      'aria-label': isHidden ? iconLabel : hiddenIconLabel,
      'aria-pressed': !isHidden,
      onClick: handleClick,
      className: 'k-PasswordInput__icon',
      children: /*#__PURE__*/React.createElement(PasswordIcon, {
        color: "var(--color-" + (isHidden ? 'grey-900' : 'primary-500') + ")"
      })
    }
  }));
};
PasswordInput.propTypes = {
  iconLabel: PropTypes.string.isRequired,
  hiddenIconLabel: PropTypes.string.isRequired,
  name: PropTypes.string
};
PasswordInput.defaultProps = {
  name: 'password'
};