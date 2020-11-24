import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import { useFormContext } from '../';

var limit = function limit(val, max) {
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

var cardExpiry = function cardExpiry(val) {
  var month = limit(val.substring(0, 2), '12');
  var fullYear = val.substring(2, 6);
  var year = fullYear.length === 4 ? fullYear.substring(2, 4) : fullYear.substring(0, 2);
  return val ? month + '/' + year : '';
};

export var Expiry = function Expiry(_ref) {
  var label = _ref.label,
      Field = _ref.fieldComponent,
      Label = _ref.labelComponent,
      Input = _ref.inputComponent,
      Error = _ref.errorComponent;

  var _useFormContext = useFormContext(),
      expiry = _useFormContext.values.expiry,
      setInputValues = _useFormContext.setInputValues;

  var handleChange = function handleChange(_ref2) {
    var value = _ref2.value;
    var month = value.substring(0, 2);
    var year = value.substring(2, 4);
    var formattedValue = value ? month + '/' + year : '';
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