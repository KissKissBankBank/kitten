import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import NumberFormat from 'react-number-format';
import { useFormContext } from '../';
import { pxToRem } from '../../../../helpers/utils/typography';
import { getCreditCardType, getCreditCardFormat, getIconSvgStringByType } from './helpers';
var StyledNumberFormat = styled(function (_ref) {
  var iconSvg = _ref.iconSvg,
      others = _objectWithoutProperties(_ref, ["iconSvg"]);

  return /*#__PURE__*/React.createElement(NumberFormat, others);
}).withConfig({
  displayName: "number__StyledNumberFormat",
  componentId: "sc-1a38wzf-0"
})(["padding-right:", ";", ""], pxToRem(45), function (_ref2) {
  var iconSvg = _ref2.iconSvg;
  return iconSvg && css(["background:transparent no-repeat;background-image:url(\"data:image/svg+xml,", "\");background-position:calc(100% - ", ") center;"], iconSvg, pxToRem(5));
});
export var Number = function Number(_ref3) {
  var label = _ref3.label,
      Field = _ref3.fieldComponent,
      Label = _ref3.labelComponent,
      Input = _ref3.inputComponent,
      Error = _ref3.errorComponent;

  var _useFormContext = useFormContext(),
      number = _useFormContext.values.number,
      setInputValues = _useFormContext.setInputValues;

  var ccType = getCreditCardType(number);
  var ccFormat = getCreditCardFormat(ccType);
  var ccIconSvg = getIconSvgStringByType(ccType.type);

  var handleChange = function handleChange(_ref4) {
    var value = _ref4.value;

    var _getCreditCardType = getCreditCardType(value),
        type = _getCreditCardType.type;

    setInputValues({
      number: value,
      type: type
    });
  };

  return /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Label, {
    htmlFor: "frmCCNum"
  }, label), /*#__PURE__*/React.createElement(StyledNumberFormat, {
    name: "cardnumber",
    id: "frmCCNum",
    autoComplete: "cc-number",
    format: ccFormat,
    inputMode: "numeric",
    placeholder: ccFormat,
    customInput: Input,
    iconSvg: ccIconSvg,
    value: number,
    onValueChange: handleChange
  }), /*#__PURE__*/React.createElement(Error, null));
};
Number.propTypes = {
  label: PropTypes.string,
  fieldComponent: PropTypes.elementType,
  labelComponent: PropTypes.elementType,
  inputComponent: PropTypes.elementType,
  errorComponent: PropTypes.elementType
};
Number.defaultProps = {
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