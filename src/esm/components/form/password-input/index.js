import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { useState } from 'react';
import styled from 'styled-components';
import { TextInput } from '../../../components/form/text-input';
import { PasswordIcon } from '../../../components/icons/password-icon';
import COLORS from '../../../constants/colors-config';
import PropTypes from 'prop-types';
import { pxToRem } from '../../../helpers/utils/typography';
import classNames from 'classnames';
var StyledPasswordInput = styled.div.withConfig({
  displayName: "password-input__StyledPasswordInput",
  componentId: "sc-1futz46-0"
})(["position:relative;display:flex;.k-Form-PasswordInput__input{padding-right:", ";}.k-Form-PasswordInput__icon{display:flex;position:absolute;z-index:1;padding:0 ", ";right:0;top:0;bottom:0;cursor:pointer;align-items:center;&[aria-pressed='true']{svg{fill:", ";transition:all 0.2s;}}}"], pxToRem(40), pxToRem(11), COLORS.primary1);
export var PasswordInput = function PasswordInput(_ref) {
  var name = _ref.name,
      iconLabel = _ref.iconLabel,
      hiddenIconLabel = _ref.hiddenIconLabel,
      others = _objectWithoutProperties(_ref, ["name", "iconLabel", "hiddenIconLabel"]);

  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      isHidden = _useState2[0],
      setIsHidden = _useState2[1];

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
    "aria-label": isHidden ? iconLabel : hiddenIconLabel,
    onClick: handleClick,
    "aria-pressed": !isHidden,
    className: classNames('k-Form-PasswordInput__icon', 'k-u-reset-button')
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