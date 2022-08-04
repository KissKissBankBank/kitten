import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
import deprecated from 'prop-types-extra/lib/deprecated';
import classNames from 'classnames';
import styled from 'styled-components';
import { pxToRem } from '../../../helpers/utils/typography';
import TYPOGRAPHY from '../../../constants/typography-config';
import { ScreenConfig } from '../../../constants/screen-config';
import { checkDeprecatedWeights } from '../../../helpers/utils/deprecated';
const StyledRadioButton = styled.div.withConfig({
  displayName: "radio-button__StyledRadioButton",
  componentId: "sc-wb11e0-0"
})(["margin:", " 0;&,& *{transition:all 0.2s ease;}.k-Form-RadioButton__label{box-sizing:border-box;display:flex;align-items:center;align-self:flex-start;flex-wrap:wrap;cursor:pointer;min-height:", ";border-radius:var(--border-radius-s);border:var(--border);padding:", " ", ";}.k-Form-RadioButton__label::before{box-sizing:border-box;display:block;flex-shrink:0;width:", ";height:", ";margin-right:", ";content:'';background-position:center;background-repeat:no-repeat;background-color:var(--color-grey-000);border:var(--border);border-radius:var(--border-radius-rounded);transition:border 0.2s,background 0.2s;}.k-Form-RadioButton__input{position:absolute;opacity:0;cursor:pointer;}.k-Form-RadioButton__input:hover:not(:disabled){& + .k-Form-RadioButton__label{border-color:var(--color-primary-300);}}.k-Form-RadioButton__input:focus:not(:disabled){& + .k-Form-RadioButton__label{border-color:var(--color-primary-500);}}.k-Form-RadioButton__input:active:not(:disabled){& + .k-Form-RadioButton__label{border-color:var(--color-primary-500);}}.k-Form-RadioButton__input:checked:not(:disabled){& + .k-Form-RadioButton__label{border-color:var(--color-primary-500);background-color:var(--color-primary-100);}}&.k-Form-RadioButton--small{width:100%;display:flex;.k-Form-RadioButton__label{padding:", " ", ";min-height:", ";}}&.k-Form-RadioButton--large{.k-Form-RadioButton__label{min-height:", ";padding:", " ", ";}}@media (min-width:", "px){margin:", " 0;.k-Form-RadioButton__labelText{flex:1 0 calc(100% - ", ");line-height:", ";}.k-Form-RadioButton__labelContents{margin-left:", ";flex:1 0 calc(100% - ", ");}.k-Form-RadioButton__input:checked + .k-Form-RadioButton__label::before{border-width:", ";}&.k-Form-RadioButton--large{.k-Form-RadioButton__label{min-height:", ";padding:", " ", ";}.k-Form-RadioButton__label::before{margin-right:", ";width:", ";height:", ";}.k-Form-RadioButton__labelText{flex:1 0 calc(100% - ", ");font-size:", ";}}}.k-Form-RadioButton__input:focus + .k-Form-RadioButton__label::before{border-color:var(--color-primary-500);outline-style:auto;}.k-Form-RadioButton__input:focus:not(:focus-visible) + .k-Form-RadioButton__label::before{outline-color:transparent;}.k-Form-RadioButton__input:focus-visible + .k-Form-RadioButton__label::before{outline-style:auto;}.k-Form-RadioButton__input:checked + .k-Form-RadioButton__label::before{border:", " solid var(--color-primary-500);}&.k-Form-RadioButton--error{.k-Form-RadioButton__label::before{border-color:var(--color-danger-300);}.k-Form-RadioButton__input:checked:not(:disabled) + .k-Form-RadioButton__label::before{border-color:var(--color-danger-500);}}.k-Form-RadioButton__input:checked:disabled{& + .k-Form-RadioButton__label{border-color:var(--color-grey-500);color:var(--color-grey-700);background-color:var(--color-grey-300);}& + .k-Form-RadioButton__label::before{background-color:var(--color-grey-000);border-color:var(--color-grey-500);}}.k-Form-RadioButton__input:disabled{& + .k-Form-RadioButton__label{border-color:var(--color-grey-300);color:var(--color-grey-600);cursor:not-allowed;&::before{background-color:var(--color-grey-200);border-color:var(--color-grey-400);}}& + .k-Form-RadioButton__labelText{color:var(--color-grey-600);}}&.k-Form-RadioButton--error{.k-Form-RadioButton__input:not(:disabled) + .k-Form-RadioButton__label{border-color:var(--color-danger-300);background-color:var(--color-grey-000);}}&.k-Form-RadioButton--paragraphStyle{.k-Form-RadioButton__label{align-items:center;}.k-Form-RadioButton__label::before{margin-right:", ";}.k-Form-RadioButton__labelText{flex:1 0 calc(100% - ", ");}}.k-Form-RadioButton__labelText{flex:1 0 calc(100% - ", ");", " font-size:", ";line-height:", ";}:active .k-Form-RadioButton__labelText,.k-Form-RadioButton__input:active + .k-Form-RadioButton__labelText{color:var(--color-primary-900);}:disabled .k-Form-RadioButton__labelText,.k-Form-RadioButton__input:disabled + .k-Form-RadioButton__labelText{color:var(--color-grey-600);}&.k-Form-RadioButton--largeLabel{.k-Form-RadioButton__label::before{margin-top:", ";}.k-Form-RadioButton__labelText{", " font-size:", ";}}.k-Form-RadioButton__labelText--withContents{", "}.k-Form-RadioButton__labelContents{margin-top:", ";margin-left:", ";flex:1 0 calc(100% - ", ");", " font-size:", ";line-height:", ";&:empty{display:none;}}&.k-Form-RadioButton--largeContent .k-Form-RadioButton__labelContents{font-size:", ";}@media (min-width:", "px){.k-Form-RadioButton__labelContents{margin-top:", ";font-size:", ";line-height:", ";}}&.k-Form-RadioButton--weight-500,&.k-Form-RadioButton--weight-regular{.k-Form-RadioButton__labelText{", ";}}&.k-Form-RadioButton--weight-400,&.k-Form-RadioButton--weight-light{.k-Form-RadioButton__labelText{", ";}}&.k-Form-RadioButton--weight-700,&.k-Form-RadioButton--weight-bold{.k-Form-RadioButton__labelText{", ";}}&.k-Form-RadioButton--check{.k-Form-RadioButton__input:checked + .k-Form-RadioButton__label::before{border-width:", ";background-color:var(--color-primary-500);background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 11 8' width='11' height='8' fill='%23fff' %3E%3Cpath d='M.904 4.06l1.414-1.414L4.44 4.768 8.682.525l1.414 1.414L4.44 7.596.904 4.061z' /%3E%3C/svg%3E\");}&.k-Form-RadioButton--error .k-Form-RadioButton__input:checked:not(:disabled) + .k-Form-RadioButton__label::before{background-color:var(--color-danger-500);}.k-Form-RadioButton__input:disabled + .k-Form-RadioButton__label::before{background-color:var(--color-grey-400);}}"], pxToRem(15), pxToRem(60), pxToRem(20 - 2), pxToRem(15), pxToRem(16), pxToRem(16), pxToRem(10), pxToRem(11 - 2), pxToRem(15), pxToRem(40), pxToRem(60), pxToRem(20 - 2), pxToRem(15), ScreenConfig.S.min, pxToRem(20), pxToRem(20 + 10), pxToRem(22), pxToRem(20 + 10), pxToRem(20 + 10 + 10), pxToRem(6), pxToRem(80), pxToRem(26 - 2), pxToRem(15), pxToRem(20), pxToRem(20), pxToRem(20), pxToRem(20 + 20), pxToRem(16), pxToRem(5), pxToRem(15), pxToRem(20 + 15), pxToRem(16 + 10), TYPOGRAPHY.fontStyles.light, pxToRem(14), pxToRem(20), pxToRem(8), TYPOGRAPHY.fontStyles.regular, pxToRem(20), TYPOGRAPHY.fontStyles.regular, pxToRem(4), pxToRem(16 + 10), pxToRem(16 + 10 + 10), TYPOGRAPHY.fontStyles.light, pxToRem(12), pxToRem(19), pxToRem(14), ScreenConfig.S.min, pxToRem(8), pxToRem(14), pxToRem(22), TYPOGRAPHY.fontStyles.regular, TYPOGRAPHY.fontStyles.light, TYPOGRAPHY.fontStyles.bold, pxToRem(2));
export const RadioButton = _ref => {
  let {
    className,
    id,
    children,
    inputClassName,
    large,
    largeContent,
    size,
    text,
    error,
    disabled,
    design,
    fontWeight,
    // Deprecated
    weight,
    paragraphStyle,
    ...inputProps
  } = _ref;
  checkDeprecatedWeights(weight);
  return /*#__PURE__*/React.createElement(StyledRadioButton, {
    className: classNames('k-Form-RadioButton', className, "k-Form-RadioButton--" + design, "k-Form-RadioButton--" + size, "k-Form-RadioButton--weight-" + (fontWeight || weight), {
      'k-Form-RadioButton--error': error,
      'k-Form-RadioButton--largeLabel': large,
      'k-Form-RadioButton--largeContent': largeContent,
      'k-Form-RadioButton--paragraphStyle': paragraphStyle
    })
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    type: "radio",
    className: classNames('k-Form-RadioButton__input', inputClassName),
    disabled: disabled
  }, inputProps)), /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    className: "k-Form-RadioButton__label"
  }, /*#__PURE__*/React.createElement("span", {
    className: classNames('k-Form-RadioButton__labelText', {
      'k-Form-RadioButton__labelText--withContents': !!children
    })
  }, text), children && /*#__PURE__*/React.createElement("div", {
    className: "k-Form-RadioButton__labelContents"
  }, children)));
};
RadioButton.propTypes = {
  text: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  large: PropTypes.bool,
  largeContent: PropTypes.bool,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  design: PropTypes.oneOf(['disc', 'check']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  fontWeight: deprecated(PropTypes.string, 'Prefere use `weight` prop instead'),
  weight: PropTypes.oneOf(['400', '500', '700']),
  paragraphStyle: PropTypes.bool
};
RadioButton.defaultProps = {
  large: false,
  largeContent: false,
  error: false,
  disabled: false,
  design: 'disc',
  size: 'medium',
  weight: '500',
  paragraphStyle: false
};