import React, { createContext, useContext, useState, useEffect } from 'react';
import merge from 'lodash/fp/merge';
import { Number } from './components/number';
import { Expiry } from './components/expiry';
import { Cvc } from './components/cvc';
const defaultProps = {
  values: {
    number: '',
    expiry: '',
    cvc: '',
    type: ''
  },
  onChange: _values => {}
};
const FormContext = /*#__PURE__*/createContext(defaultProps);
export const useFormContext = () => useContext(FormContext);
export const CreditCardForm = _ref => {
  let {
    children,
    ...props
  } = _ref;
  const [inputValues, updateInputValues] = useState(merge(defaultProps.values)(props.values));
  const contextValues = merge(defaultProps)({ ...props,
    values: inputValues,
    setInputValues: v => {
      updateInputValues(merge(inputValues)(v));
    }
  });
  useEffect(() => {
    contextValues.onChange(inputValues);
  }, [inputValues]);
  return /*#__PURE__*/React.createElement(FormContext.Provider, {
    value: contextValues
  }, children);
};
CreditCardForm.Number = Number;
CreditCardForm.Expiry = Expiry;
CreditCardForm.Cvc = Cvc;