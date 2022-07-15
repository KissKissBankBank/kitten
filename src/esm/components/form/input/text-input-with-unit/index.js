import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["unit", "unitWord", "size", "digits", "className", "valid", "error", "disabled", "wrapperProps"];
import React, { useRef } from 'react';
import styled from 'styled-components';
import { TextInput } from '../../../form/input/text-input';
import PropTypes from 'prop-types';
import TYPOGRAPHY from '../../../../constants/typography-config';
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography';
import classNames from 'classnames';
var StyledTextInputWithUnit = styled.div.withConfig({
  displayName: "text-input-with-unit__StyledTextInputWithUnit",
  componentId: "sc-1ci0duj-0"
})(["position:relative;width:1%;&:not(.k-Form-TextInputWithUnit--hasDigits){width:100%;}.k-Form-TextInputWithUnit__input{border-radius:var(--border-radius-s);padding-right:", ";&[type='number']{appearance:textfield;&::-webkit-inner-spin-button,&::-webkit-outer-spin-button{margin:0;appearance:none;}}}.k-Form-TextInputWithUnit__unit{display:flex;z-index:1;position:absolute;right:", ";top:", ";bottom:", ";min-width:", ";align-items:center;justify-content:center;border-radius:0;box-sizing:border-box;color:var(--color-grey-900);white-space:nowrap;transition:all 0.2s;font-size:", ";", ";background-color:var(--color-grey-000);&.k-Form-TextInputWithUnit__unit--disabled{color:var(--color-grey-700);background-color:var(--color-grey-200);}&.k-Form-TextInputWithUnit__unit--small{padding:0 ", ";}&.k-Form-TextInputWithUnit__unit--medium{padding:0 ", ";}&.k-Form-TextInputWithUnit__unit--large,&.k-Form-TextInputWithUnit__unit--huge{padding:0 ", ";}&.k-Form-TextInputWithUnit__unit--giant{padding:0 ", ";}&.k-Form-TextInputWithUnit__unit--hasUnitWord{font-size:", ";}}&:focus-within{.k-Form-TextInputWithUnit__unit{border-color:var(--color-grey-500);color:var(--color-grey-900);}}"], pxToRem(42), pxToRem(3), pxToRem(3), pxToRem(3), pxToRem(40), stepToRem(0), TYPOGRAPHY.fontStyles['500'], pxToRem(10), pxToRem(12), pxToRem(20), pxToRem(25), stepToRem(-1));
export var TextInputWithUnit = function TextInputWithUnit(_ref) {
  var unit = _ref.unit,
      unitWord = _ref.unitWord,
      size = _ref.size,
      digits = _ref.digits,
      className = _ref.className,
      valid = _ref.valid,
      error = _ref.error,
      disabled = _ref.disabled,
      wrapperProps = _ref.wrapperProps,
      others = _objectWithoutPropertiesLoose(_ref, _excluded);

  var input = useRef(null);
  return /*#__PURE__*/React.createElement(StyledTextInputWithUnit, _extends({}, wrapperProps, {
    className: classNames('k-Form-TextInputWithUnit', wrapperProps.className, {
      'k-Form-TextInputWithUnit--hasDigits': !!digits
    })
  }), /*#__PURE__*/React.createElement(TextInput, _extends({
    ref: input
  }, others, {
    valid: valid,
    error: error,
    disabled: disabled,
    size: size,
    className: classNames('k-Form-TextInputWithUnit__input', className)
  })), /*#__PURE__*/React.createElement("span", {
    className: classNames('k-Form-TextInputWithUnit__unit', "k-Form-TextInputWithUnit__unit--" + size, {
      'k-Form-TextInputWithUnit__unit--valid': valid,
      'k-Form-TextInputWithUnit__unit--error': error,
      'k-Form-TextInputWithUnit__unit--disabled': disabled,
      'k-Form-TextInputWithUnit__unit--hasUnitWord': !unit && !!unitWord
    })
  }, unit || unitWord));
};
TextInputWithUnit.propTypes = {
  type: PropTypes.string,
  valid: PropTypes.bool,
  error: PropTypes.bool,
  center: PropTypes.bool,
  disabled: PropTypes.bool,
  unit: PropTypes.string,
  unitWord: PropTypes.bool,
  digits: PropTypes.number,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'huge', 'giant']),
  wrapperProps: PropTypes.object
};
TextInputWithUnit.defaultProps = {
  unit: 'λ',
  unitWord: false,
  type: 'number',
  valid: false,
  error: false,
  center: false,
  size: 'medium',
  disabled: false,
  digits: null,
  wrapperProps: {}
};