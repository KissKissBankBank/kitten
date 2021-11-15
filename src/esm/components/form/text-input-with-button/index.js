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
import { modifierStyles } from '../../../components/molecules/buttons/button/helpers/modifier-styles';
import deprecated from 'prop-types-extra/lib/deprecated';
import { ScreenConfig } from '../../../constants/screen-config';
var StyledTextInputWithButton = styled.div.withConfig({
  displayName: "text-input-with-button__StyledTextInputWithButton",
  componentId: "sc-1yqni7d-0"
})([".k-Form-TextInputWithButton__button{", ";font-size:", ";line-height:1.3;flex:1 0 auto;appearance:none;cursor:pointer;}&:not(.k-Form-TextInputWithButton--insetButton){display:flex;.k-Form-TextInputWithButton__input{border-right:0;}.k-Form-TextInputWithButton__button{border-radius:0;padding:0 ", ";", ";}&.k-Form-TextInputWithButton--roudedButton{.k-Form-TextInputWithButton__input{border-top-right-radius:0;border-bottom-right-radius:0;}.k-Form-TextInputWithButton__button{border-top-right-radius:var(--text-input-size);border-bottom-right-radius:var(--text-input-size);}}}&.k-Form-TextInputWithButton--insetButton{position:relative;.k-Form-TextInputWithButton__input{padding-right:calc(var(--text-input-size) + ", ");}.k-Form-TextInputWithButton__button{display:flex;align-items:center;justify-content:center;position:absolute;top:", ";bottom:", ";right:", ";min-width:calc(var(--text-input-size) - ", " * 2);border-radius:var(--text-input-button-radius);border:none;background-color:", ";transition:background-color 0.2s ease;&:hover{background-color:", ";}&:active{background-color:", ";}}.k-Form-TextInput--orion + .k-Form-TextInputWithButton__button{--text-input-button-radius:", ";}.k-Form-TextInput--big + .k-Form-TextInputWithButton__button,.k-Form-TextInput--huge + .k-Form-TextInputWithButton__button,.k-Form-TextInput--giant + .k-Form-TextInputWithButton__button{--text-input-button-radius:", ";@media (min-width:", "px){--text-input-button-radius:", ";}}&.k-Form-TextInputWithButton--roudedButton .k-Form-TextInputWithButton__button{--text-input-button-radius:var(--text-input-size);}}&.k-Form-TextInputWithButton--tiny{--text-input-size:", ";}&.k-Form-TextInputWithButton--regular{--text-input-size:", ";}&.k-Form-TextInputWithButton--big{--text-input-size:", ";@media (min-width:", "px){--text-input-size:", ";}}&.k-Form-TextInputWithButton--huge{--text-input-size:", ";@media (min-width:", "px){--text-input-size:", ";}}&.k-Form-TextInputWithButton--giant{--text-input-size:", ";@media (min-width:", "px){--text-input-size:", ";}}&.k-Form-TextInputWithButton__button--valid{background-color:", ";border-color:", ";}&.k-Form-TextInputWithButton__button--error{cursor:not-allowed;background-color:", ";border-color:", ";}"], TYPOGRAPHY.fontStyles.regular, stepToRem(-1), pxToRem(30), function (_ref) {
  var modifier = _ref.modifier;
  return modifierStyles(modifier);
}, pxToRem(15), pxToRem(4), pxToRem(4), pxToRem(4), pxToRem(4), COLORS.background1, COLORS.line1, COLORS.line2, pxToRem(4), pxToRem(6), ScreenConfig.M.min, pxToRem(8), pxToRem(40), pxToRem(50), pxToRem(60), ScreenConfig.M.min, pxToRem(70), pxToRem(70), ScreenConfig.M.min, pxToRem(80), pxToRem(70), ScreenConfig.M.min, pxToRem(90), COLORS.valid, COLORS.valid, COLORS.error, COLORS.error);
export var TextInputWithButton = React.forwardRef(function (_ref2, ref) {
  var valid = _ref2.valid,
      error = _ref2.error,
      disabled = _ref2.disabled,
      size = _ref2.size,
      value = _ref2.value,
      rounded = _ref2.rounded,
      buttonValue = _ref2.buttonValue,
      modifier = _ref2.modifier,
      buttonProps = _ref2.buttonProps,
      inputValue = _ref2.inputValue,
      className = _ref2.className,
      inset = _ref2.inset,
      others = _objectWithoutProperties(_ref2, ["valid", "error", "disabled", "size", "value", "rounded", "buttonValue", "modifier", "buttonProps", "inputValue", "className", "inset"]);

  return /*#__PURE__*/React.createElement(StyledTextInputWithButton, {
    className: classNames('k-Form-TextInputWithButton', "k-Form-TextInputWithButton--".concat(size), {
      'k-Form-TextInputWithButton--insetButton': inset,
      'k-Form-TextInputWithButton--roudedButton': rounded
    }),
    modifier: modifier
  }, /*#__PURE__*/React.createElement(TextInput, _extends({
    className: classNames('k-Form-TextInputWithButton__input', className)
  }, others, {
    valid: valid,
    error: error,
    disabled: disabled,
    size: size,
    rounded: rounded,
    value: inputValue,
    ref: ref || null
  })), /*#__PURE__*/React.createElement("button", _extends({
    type: "button"
  }, buttonProps, {
    className: classNames('k-Form-TextInputWithButton__button', buttonProps === null || buttonProps === void 0 ? void 0 : buttonProps.className, {
      'k-Form-TextInputWithButton__button--valid': valid,
      'k-Form-TextInputWithButton__button--error': error,
      'k-Form-TextInputWithButton__button--disabled': disabled
    }),
    disabled: disabled
  }), value || buttonValue));
});
TextInputWithButton.propTypes = {
  valid: PropTypes.bool,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  size: PropTypes.string,
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
  size: 'regular',
  buttonValue: 'Button',
  buttonProps: {},
  modifier: 'beryllium',
  rounded: false,
  inset: false
};