import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import { TextInputAndSelect } from '../../components/form/text-input-and-select';
export var FormAmountAndCurrency = function FormAmountAndCurrency(props) {
  var currencyOptions = props.currencyOptions,
      currencyName = props.currencyName,
      currencyValue = props.currencyValue,
      textInputAndSelectProps = _objectWithoutProperties(props, ["currencyOptions", "currencyName", "currencyValue"]);

  return /*#__PURE__*/React.createElement(TextInputAndSelect, _extends({
    selectOptions: currencyOptions,
    selectName: currencyName,
    selectValue: currencyValue,
    key: currencyName,
    type: "number"
  }, textInputAndSelectProps));
};
FormAmountAndCurrency.defaultProps = {
  tiny: false,
  disabled: false,
  currencyOptions: [{
    value: 'eur',
    label: 'EUR'
  }],
  currencyName: null,
  currencyValue: null,
  digits: null // 2 or 12 for now

};