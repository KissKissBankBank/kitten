import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import { useFormContext } from '../';
import { withCode, getCodeFormat } from './helpers';
export var Cvc = function Cvc(_ref) {
  var label = _ref.label,
      Field = _ref.fieldComponent,
      Label = _ref.labelComponent,
      Input = _ref.inputComponent,
      Error = _ref.errorComponent;

  var _useFormContext = useFormContext(),
      _useFormContext$value = _useFormContext.values,
      number = _useFormContext$value.number,
      cvc = _useFormContext$value.cvc,
      setInputValues = _useFormContext.setInputValues;

  var withCvc = withCode(number);

  var handleChange = function handleChange(_ref2) {
    var value = _ref2.value;
    setInputValues({
      cvc: value
    });
  };

  useEffect(function () {
    if (withCvc) return;
    setInputValues({
      cvc: ''
    });
  }, [withCvc]);
  if (!withCode(number)) return null;
  return /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Label, {
    htmlFor: "frmCCCVC"
  }, label), /*#__PURE__*/React.createElement(NumberFormat, {
    name: "cvc",
    id: "frmCCCVC",
    autoComplete: "cc-csc",
    format: getCodeFormat(number),
    inputMode: "numeric",
    placeholder: getCodeFormat(number),
    customInput: Input,
    value: cvc,
    onValueChange: handleChange
  }), /*#__PURE__*/React.createElement(Error, null));
};
Cvc.propTypes = {
  label: PropTypes.string,
  fieldComponent: PropTypes.elementType,
  labelComponent: PropTypes.elementType,
  inputComponent: PropTypes.elementType,
  errorComponent: PropTypes.elementType
};
Cvc.defaultProps = {
  label: 'Card Number',
  fieldComponent: function fieldComponent(props) {
    return /*#__PURE__*/React.createElement("div", props);
  },
  labelComponent: function labelComponent(props) {
    return /*#__PURE__*/React.createElement("label", props);
  },
  inputComponent: function inputComponent(props) {
    return /*#__PURE__*/React.createElement("input", props);
  },
  errorComponent: function errorComponent() {
    return null;
  }
};