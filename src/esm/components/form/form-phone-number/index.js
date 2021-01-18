import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import { TextInputAndSelect } from '../../../components/form/text-input-and-select';
export var FormPhoneNumber = function FormPhoneNumber(props) {
  var areaOptions = props.areaOptions,
      areaName = props.areaName,
      areaValue = props.areaValue,
      textInputAndSelectProps = _objectWithoutProperties(props, ["areaOptions", "areaName", "areaValue"]);

  return /*#__PURE__*/React.createElement(TextInputAndSelect, _extends({
    selectOptions: areaOptions,
    selectName: areaName,
    selectValue: areaValue,
    appendSelect: true,
    type: "tel"
  }, textInputAndSelectProps));
};
FormPhoneNumber.defaultProps = {
  tiny: false,
  disabled: false,
  areaOptions: [{
    value: '+33',
    label: '+33'
  }],
  areaName: null,
  areaValue: null,
  digits: null // 2 or 12 for now

};