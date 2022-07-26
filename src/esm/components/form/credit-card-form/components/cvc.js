import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import { useFormContext } from '../';
import { withCode, getCodeFormat } from './helpers';
export const Cvc = _ref => {
  let {
    label,
    fieldComponent: Field,
    labelComponent: Label,
    inputComponent: Input,
    errorComponent: Error
  } = _ref;
  const {
    values: {
      number,
      cvc
    },
    setInputValues
  } = useFormContext();
  const withCvc = withCode(number);

  const handleChange = _ref2 => {
    let {
      value
    } = _ref2;
    setInputValues({
      cvc: value
    });
  };

  useEffect(() => {
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
  fieldComponent: props => /*#__PURE__*/React.createElement("div", props),
  labelComponent: props => /*#__PURE__*/React.createElement("label", props),
  inputComponent: props => /*#__PURE__*/React.createElement("input", props),
  errorComponent: () => null
};