import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import { useFormContext } from '../';

const limit = (val, max) => {
  if (val.length === 1 && val[0] > max[0]) {
    val = '0' + val;
  }

  if (val.length === 2) {
    if (Number(val) === 0) {
      val = '01';
    } else if (val > max) {
      val = max;
    }
  }

  return val;
};

const cardExpiry = val => {
  const month = limit(val.substring(0, 2), '12');
  const fullYear = val.substring(2, 6);
  const year = fullYear.length === 4 ? fullYear.substring(2, 4) : fullYear.substring(0, 2);
  return val ? month + '/' + year : '';
};

export const Expiry = _ref => {
  let {
    label,
    fieldComponent: Field,
    labelComponent: Label,
    inputComponent: Input,
    errorComponent: Error
  } = _ref;
  const {
    values: {
      expiry
    },
    setInputValues
  } = useFormContext();

  const handleChange = _ref2 => {
    let {
      value
    } = _ref2;
    const month = value.substring(0, 2);
    const year = value.substring(2, 4);
    const formattedValue = value ? month + '/' + year : '';
    setInputValues({
      expiry: formattedValue
    });
  };

  return /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Label, {
    htmlFor: "frmCCExp"
  }, label), /*#__PURE__*/React.createElement(NumberFormat, {
    name: "cc-exp",
    id: "frmCCExp",
    autoComplete: "cc-exp",
    format: cardExpiry,
    inputMode: "numeric",
    placeholder: "MM/YY",
    customInput: Input,
    value: expiry,
    onValueChange: handleChange
  }), /*#__PURE__*/React.createElement(Error, null));
};
Expiry.propTypes = {
  label: PropTypes.string,
  fieldComponent: PropTypes.elementType,
  labelComponent: PropTypes.elementType,
  inputComponent: PropTypes.elementType,
  errorComponent: PropTypes.elementType
};
Expiry.defaultProps = {
  label: 'Card Number',
  fieldComponent: props => /*#__PURE__*/React.createElement("div", props),
  labelComponent: props => /*#__PURE__*/React.createElement("label", props),
  inputComponent: props => /*#__PURE__*/React.createElement("input", props),
  errorComponent: () => null
};