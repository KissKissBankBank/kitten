import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["valid", "error", "disabled", "size", "value", "rounded", "buttonValue", "modifier", "buttonProps", "inputValue", "className", "inset"];
import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import deprecated from 'prop-types-extra/lib/deprecated';
import PropTypes from 'prop-types';
import TYPOGRAPHY from '../../../../constants/typography-config';
import { TextInput } from '../../../form/input/text-input';
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography';
import { checkDeprecatedSizes } from '../../../../helpers/utils/deprecated';
import { Button } from '../../../action/button';
import { ScreenConfig } from '../../../../constants/screen-config';
var StyledTextInputWithButton = styled.div.withConfig({
  displayName: "text-input-with-button__StyledTextInputWithButton",
  componentId: "sc-10tfa5q-0"
})([".k-Form-TextInputWithButton__button{", ";font-size:", ";line-height:1.3;flex:1 0 auto;appearance:none;cursor:pointer;}&:not(.k-Form-TextInputWithButton--insetButton){display:flex;gap:", ";}&.k-Form-TextInputWithButton--insetButton{position:relative;.k-Form-TextInputWithButton__input{padding-right:calc(var(--text-input-size) + ", ");}.k-Form-TextInputWithButton__button{display:flex;align-items:center;justify-content:center;position:absolute;top:", ";bottom:", ";right:", ";min-width:calc(var(--text-input-size) - ", " * 2);border-radius:var(--text-input-button-radius);--text-input-button-radius:var(--border-radius-s);border:none;background-color:var(--color-grey-000);transition:background-color 0.2s ease;&:hover{background-color:var(--color-grey-300);}&:active{background-color:var(--color-grey-400);}}&.k-Form-TextInputWithButton--roudedButton .k-Form-TextInputWithButton__button{--text-input-button-radius:var(--border-radius-rounded);}}&.k-Form-TextInputWithButton--tiny,&.k-Form-TextInputWithButton--small{--text-input-size:", ";}&.k-Form-TextInputWithButton--regular,&.k-Form-TextInputWithButton--medium{--text-input-size:", ";}&.k-Form-TextInputWithButton--big,&.k-Form-TextInputWithButton--large{--text-input-size:", ";@media (min-width:", "px){--text-input-size:", ";}}&.k-Form-TextInputWithButton--huge{--text-input-size:", ";@media (min-width:", "px){--text-input-size:", ";}}&.k-Form-TextInputWithButton--giant{--text-input-size:", ";@media (min-width:", "px){--text-input-size:", ";}}&.k-Form-TextInputWithButton__button--valid{background-color:var(--color-success-500);border-color:var(--color-success-500);}&.k-Form-TextInputWithButton__button--error{cursor:not-allowed;background-color:var(--color-danger-500);border-color:var(--color-danger-500);}"], TYPOGRAPHY.fontStyles.regular, stepToRem(-1), pxToRem(10), pxToRem(15), pxToRem(4), pxToRem(4), pxToRem(4), pxToRem(4), pxToRem(40), pxToRem(50), pxToRem(60), ScreenConfig.M.min, pxToRem(70), pxToRem(70), ScreenConfig.M.min, pxToRem(80), pxToRem(70), ScreenConfig.M.min, pxToRem(90));
export var TextInputWithButton = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var valid = _ref.valid,
      error = _ref.error,
      disabled = _ref.disabled,
      size = _ref.size,
      value = _ref.value,
      rounded = _ref.rounded,
      buttonValue = _ref.buttonValue,
      modifier = _ref.modifier,
      buttonProps = _ref.buttonProps,
      inputValue = _ref.inputValue,
      className = _ref.className,
      inset = _ref.inset,
      others = _objectWithoutPropertiesLoose(_ref, _excluded);

  checkDeprecatedSizes(size);
  var ButtonComponent = inset ? 'button' : Button;
  return /*#__PURE__*/React.createElement(StyledTextInputWithButton, {
    className: classNames('k-Form-TextInputWithButton', "k-Form-TextInputWithButton--" + size, {
      'k-Form-TextInputWithButton--insetButton': inset,
      'k-Form-TextInputWithButton--roudedButton': rounded
    })
  }, /*#__PURE__*/React.createElement(TextInput, _extends({
    ref: ref || null
  }, others, {
    className: classNames('k-Form-TextInputWithButton__input', className),
    valid: valid,
    error: error,
    disabled: disabled,
    size: size,
    rounded: rounded,
    value: inputValue
  })), /*#__PURE__*/React.createElement(ButtonComponent, _extends({
    type: "button"
  }, buttonProps, {
    className: classNames('k-Form-TextInputWithButton__button', buttonProps == null ? void 0 : buttonProps.className, {
      'k-Form-TextInputWithButton__button--valid': valid,
      'k-Form-TextInputWithButton__button--error': error,
      'k-Form-TextInputWithButton__button--disabled': disabled || buttonProps.disabled
    }),
    disabled: disabled || buttonProps.disabled,
    modifier: modifier,
    size: size
  }), value || buttonValue));
});
TextInputWithButton.propTypes = {
  valid: PropTypes.bool,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'huge', 'giant']),
  rounded: PropTypes.bool,
  inset: PropTypes.bool,
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
  size: 'medium',
  buttonValue: 'Button',
  buttonProps: {
    disabled: false
  },
  modifier: 'beryllium',
  rounded: false,
  inset: false
};