import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
import { TextInput } from '../../../form/input/text-input';
export const TextInputWithButton = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  let {
    buttonValue,
    modifier,
    buttonProps,
    inputValue,
    inset,
    ...others
  } = _ref;
  return /*#__PURE__*/React.createElement(TextInput, _extends({
    ref: ref || null
  }, others, {
    value: inputValue,
    has: "button",
    buttonIsInset: inset,
    buttonProps: {
      modifier: modifier,
      children: buttonValue,
      ...buttonProps
    }
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