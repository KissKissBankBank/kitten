import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["name", "iconLabel", "hiddenIconLabel"];
import React, { useState } from 'react';
import styled from 'styled-components';
import { TextInput } from '../../../components/form/text-input';
import { PasswordIcon } from '../../../components/graphics/icons/password-icon';
import COLORS from '../../../constants/colors-config';
import PropTypes from 'prop-types';
import { pxToRem } from '../../../helpers/utils/typography';
var StyledPasswordInput = styled.div.withConfig({
  displayName: "password-input__StyledPasswordInput",
  componentId: "sc-1futz46-0"
})(["position:relative;display:flex;.k-Form-PasswordInput__input{padding-right:", ";}.k-Form-PasswordInput__icon{display:flex;position:absolute;z-index:1;padding:0 ", ";right:0;top:0;bottom:0;cursor:pointer;align-items:center;border-radius:var(--border-radius-s);&[aria-pressed='true']{svg{fill:", ";transition:all 0.2s;}}}"], pxToRem(40), pxToRem(11), COLORS.primary1);
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

  return /*#__PURE__*/React.createElement(StyledPasswordInput, {
    className: "k-Form-PasswordInput"
  }, /*#__PURE__*/React.createElement(TextInput, _extends({}, others, {
    name: name,
    type: isHidden ? 'password' : 'text',
    className: "k-Form-PasswordInput__input"
  })), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": isHidden ? iconLabel : hiddenIconLabel,
    onClick: handleClick,
    "aria-pressed": !isHidden,
    className: "k-Form-PasswordInput__icon k-u-reset-button"
  }, /*#__PURE__*/React.createElement(PasswordIcon, null)));
};
PasswordInput.propTypes = {
  iconLabel: PropTypes.string.isRequired,
  hiddenIconLabel: PropTypes.string.isRequired,
  name: PropTypes.string
};
PasswordInput.defaultProps = {
  name: 'password'
};