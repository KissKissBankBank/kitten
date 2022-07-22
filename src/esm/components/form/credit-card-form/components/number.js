import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import NumberFormat from 'react-number-format';
import { useFormContext } from '../';
import { pxToRem } from '../../../../helpers/utils/typography';
import { getCreditCardType, getCreditCardFormat, getIconSvgStringByType } from './helpers';
const StyledNumberFormat = styled(_ref => {
  let {
    iconSvg,
    ...others
  } = _ref;
  return /*#__PURE__*/React.createElement(NumberFormat, others);
}).withConfig({
  displayName: "number__StyledNumberFormat",
  componentId: "sc-1a38wzf-0"
})(["padding-right:", ";", ""], pxToRem(45), _ref2 => {
  let {
    iconSvg
  } = _ref2;
  return iconSvg && css(["background:transparent no-repeat;background-image:url('data:image/svg+xml,", "');background-position:calc(100% - ", ") center;"], iconSvg, pxToRem(5));
});
export const Number = _ref3 => {
  let {
    label,
    fieldComponent: Field,
    labelComponent: Label,
    inputComponent: Input,
    errorComponent: Error
  } = _ref3;
  const {
    values: {
      number
    },
    setInputValues
  } = useFormContext();
  const ccType = getCreditCardType(number);
  const ccFormat = getCreditCardFormat(ccType);
  const ccIconSvg = getIconSvgStringByType(ccType.type);

  const handleChange = _ref4 => {
    let {
      value
    } = _ref4;
    const {
      type
    } = getCreditCardType(value);
    setInputValues({
      number: value,
      type
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
  fieldComponent: props => /*#__PURE__*/React.createElement("div", props),
  labelComponent: props => /*#__PURE__*/React.createElement("label", props),
  inputComponent: props => /*#__PURE__*/React.createElement("input", props),
  errorComponent: () => null
};