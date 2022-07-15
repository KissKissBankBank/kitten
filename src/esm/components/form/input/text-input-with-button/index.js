import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["buttonValue", "modifier", "buttonProps", "inputValue", "inset"];
import React from 'react';
import PropTypes from 'prop-types';
import { TextInput } from '../../../form/input/text-input';
export var TextInputWithButton = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var buttonValue = _ref.buttonValue,
      modifier = _ref.modifier,
      buttonProps = _ref.buttonProps,
      inputValue = _ref.inputValue,
      inset = _ref.inset,
      others = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement(TextInput, _extends({
    ref: ref || null
  }, others, {
    value: inputValue,
    has: "button",
    buttonIsInset: inset,
    buttonProps: _extends({
      modifier: modifier,
      children: buttonValue
    }, buttonProps)
  }));
});
TextInputWithButton.propTypes = {
  inset: PropTypes.bool,
  modifier: PropTypes.string,
  buttonValue: PropTypes.node,
  buttonProps: PropTypes.object,
  inputValue: PropTypes.string
};
TextInputWithButton.defaultProps = {
  buttonValue: 'Button',
  buttonProps: {
    disabled: false
  },
  modifier: 'beryllium',
  inset: false
};