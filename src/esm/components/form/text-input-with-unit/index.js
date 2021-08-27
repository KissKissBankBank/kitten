import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["unit", "unitWord", "size", "variant", "digits", "className", "valid", "error", "disabled", "wrapperProps"];
import React, { useRef } from 'react';
import styled from 'styled-components';
import { TextInput } from '../../../components/form/text-input';
import PropTypes from 'prop-types';
import TYPOGRAPHY from '../../../constants/typography-config';
import { pxToRem, stepToRem } from '../../../helpers/utils/typography';
import COLORS from '../../../constants/colors-config';
import classNames from 'classnames';
var StyledTextInputWithUnit = styled.div.withConfig({
  displayName: "text-input-with-unit__StyledTextInputWithUnit",
  componentId: "gjmccx-0"
})(["position:relative;width:1%;&:not(.k-Form-TextInputWithUnit--hasDigits){width:100%;}.k-Form-TextInputWithUnit__input{padding-right:", ";&[type='number']{appearance:textfield;&::-webkit-inner-spin-button,&::-webkit-outer-spin-button{margin:0;appearance:none;}}}.k-Form-TextInputWithUnit__unit{display:flex;z-index:1;position:absolute;right:", ";top:", ";bottom:", ";min-width:", ";align-items:center;justify-content:center;border-left:", " solid ", ";border-radius:0;box-sizing:border-box;color:", ";white-space:nowrap;transition:all 0.2s;font-size:", ";", ";background-color:", ";&.k-Form-TextInputWithUnit__unit--valid{border-color:", ";color:", ";}&.k-Form-TextInputWithUnit__unit--error{border-color:", ";color:", ";}&.k-Form-TextInputWithUnit__unit--disabled{color:", ";background-color:", ";}&.k-Form-TextInputWithUnit__unit--tiny{padding:0 ", ";}&.k-Form-TextInputWithUnit__unit--regular{padding:0 ", ";}&.k-Form-TextInputWithUnit__unit--big,&.k-Form-TextInputWithUnit__unit--huge{padding:0 ", ";}&.k-Form-TextInputWithUnit__unit--giant{padding:0 ", ";}&.k-Form-TextInputWithUnit__unit--hasUnitWord{font-size:", ";}}&:focus-within{.k-Form-TextInputWithUnit__unit{border-color:", ";color:", ";}}&.k-Form-TextInputWithUnit--orion{.k-Form-TextInputWithUnit__input{border-radius:", ";padding-right:", ";}.k-Form-TextInputWithUnit__unit{border:none;}}"], pxToRem(50), pxToRem(2), pxToRem(2), pxToRem(2), pxToRem(42), pxToRem(2), COLORS.line1, COLORS.font1, stepToRem(0), TYPOGRAPHY.fontStyles.regular, COLORS.background1, COLORS.tertiary2, COLORS.valid, COLORS.error3, COLORS.error, COLORS.font2, COLORS.line1, pxToRem(10), pxToRem(15), pxToRem(20), pxToRem(25), stepToRem(-1), COLORS.line2, COLORS.font1, pxToRem(4), pxToRem(42));
export var TextInputWithUnit = function TextInputWithUnit(_ref) {
  var unit = _ref.unit,
      unitWord = _ref.unitWord,
      size = _ref.size,
      variant = _ref.variant,
      digits = _ref.digits,
      className = _ref.className,
      valid = _ref.valid,
      error = _ref.error,
      disabled = _ref.disabled,
      wrapperProps = _ref.wrapperProps,
      others = _objectWithoutProperties(_ref, _excluded);

  var input = useRef(null);
  return /*#__PURE__*/React.createElement(StyledTextInputWithUnit, _extends({}, wrapperProps, {
    className: classNames('k-Form-TextInputWithUnit', "k-Form-TextInputWithUnit--".concat(variant), wrapperProps.className, {
      'k-Form-TextInputWithUnit--hasDigits': !!digits
    })
  }), /*#__PURE__*/React.createElement(TextInput, _extends({
    ref: input
  }, others, {
    valid: valid,
    error: error,
    disabled: disabled,
    size: size,
    className: classNames('k-Form-TextInputWithUnit__input', className),
    variant: variant
  })), /*#__PURE__*/React.createElement("span", {
    className: classNames('k-Form-TextInputWithUnit__unit', "k-Form-TextInputWithUnit__unit--".concat(size), {
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
  variant: PropTypes.oneOf(['andromeda', 'orion']),
  size: PropTypes.oneOf(['tiny', 'regular', 'big', 'huge', 'giant']),
  wrapperProps: PropTypes.object
};
TextInputWithUnit.defaultProps = {
  unit: 'λ',
  unitWord: false,
  type: 'number',
  valid: false,
  error: false,
  center: false,
  size: 'regular',
  disabled: false,
  digits: null,
  variant: 'andromeda',
  wrapperProps: {}
};