import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { createContext, useContext, useState, useEffect } from 'react';
import merge from 'lodash/fp/merge';
import { Number } from './components/number';
import { Expiry } from './components/expiry';
import { Cvc } from './components/cvc';
var defaultProps = {
  values: {
    number: '',
    expiry: '',
    cvc: '',
    type: ''
  },
  onChange: function onChange(_values) {}
};
var FormContext = createContext(defaultProps);
export var useFormContext = function useFormContext() {
  return useContext(FormContext);
};
export var CreditCardForm = function CreditCardForm(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  var _useState = useState(merge(defaultProps.values)(props.values)),
      _useState2 = _slicedToArray(_useState, 2),
      inputValues = _useState2[0],
      updateInputValues = _useState2[1];

  var contextValues = merge(defaultProps)(_extends({}, props, {
    values: inputValues,
    setInputValues: function setInputValues(v) {
      updateInputValues(merge(inputValues)(v));
    }
  }));
  useEffect(function () {
    contextValues.onChange(inputValues);
  }, [inputValues]);
  return /*#__PURE__*/React.createElement(FormContext.Provider, {
    value: contextValues
  }, children);
};
CreditCardForm.Number = Number;
CreditCardForm.Expiry = Expiry;
CreditCardForm.Cvc = Cvc;