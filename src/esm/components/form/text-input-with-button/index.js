import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import { TextInput } from '../../../components/form/text-input';
import PropTypes from 'prop-types';
import TYPOGRAPHY from '../../../constants/typography-config';
import { pxToRem, stepToRem } from '../../../helpers/utils/typography';
import COLORS from '../../../constants/colors-config';
import { modifierStyles } from '../../../components/buttons/button/helpers/modifier-styles';
import deprecated from 'prop-types-extra/lib/deprecated';
var StyledTextInputWithButton = styled.div.withConfig({
  displayName: "text-input-with-button__StyledTextInputWithButton",
  componentId: "sc-1yqni7d-0"
})(["display:flex;.k-Form-TextInputWithButton__input{border-right:0;}.k-Form-TextInputWithButton__button{", ";font-size:", ";line-height:1.3;flex:1 0 auto;appearance:none;cursor:pointer;padding:0 ", ";border-radius:0;", ";}&.k-Form-TextInputWithButton__button--valid{background-color:", ";border-color:", ";}&.k-Form-TextInputWithButton__button--error{cursor:not-allowed;background-color:", ";border-color:", ";input:invalid:not(:focus) + &{background-color:", ";border-color:", ";}}"], TYPOGRAPHY.fontStyles.regular, stepToRem(-1), pxToRem(30), function (_ref) {
  var modifier = _ref.modifier;
  return modifierStyles(modifier);
}, COLORS.valid, COLORS.valid, COLORS.error, COLORS.error, COLORS.error, COLORS.error);
export var TextInputWithButton = function TextInputWithButton(_ref2) {
  var valid = _ref2.valid,
      error = _ref2.error,
      disabled = _ref2.disabled,
      size = _ref2.size,
      value = _ref2.value,
      buttonValue = _ref2.buttonValue,
      modifier = _ref2.modifier,
      buttonProps = _ref2.buttonProps,
      inputValue = _ref2.inputValue,
      className = _ref2.className,
      others = _objectWithoutProperties(_ref2, ["valid", "error", "disabled", "size", "value", "buttonValue", "modifier", "buttonProps", "inputValue", "className"]);

  return /*#__PURE__*/React.createElement(StyledTextInputWithButton, {
    className: "k-Form-TextInputWithButton",
    modifier: modifier
  }, /*#__PURE__*/React.createElement(TextInput, _extends({
    className: classNames('k-Form-TextInputWithButton__input', className)
  }, others, {
    valid: valid,
    error: error,
    disabled: disabled,
    size: size,
    value: inputValue
  })), /*#__PURE__*/React.createElement("button", _extends({}, buttonProps, {
    className: classNames('k-Form-TextInputWithButton__button', {
      'k-Form-TextInputWithButton__button--valid': valid,
      'k-Form-TextInputWithButton__button--error': error,
      'k-Form-TextInputWithButton__button--disabled': disabled
    }),
    type: "button",
    disabled: disabled
  }), value || buttonValue));
};
TextInputWithButton.propTypes = {
  valid: PropTypes.bool,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  size: PropTypes.string,
  modifier: PropTypes.string,
  inputValue: PropTypes.string,
  // DEPRECATED: do not use prop `value`. Use `buttonValue` instead.
  value: deprecated(PropTypes.node, 'Use `buttonValue` instead.'),
  buttonValue: PropTypes.node
};
TextInputWithButton.defaultProps = {
  valid: false,
  error: false,
  disabled: false,
  size: 'regular',
  buttonValue: 'Button',
  modifier: 'beryllium'
};