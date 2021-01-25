import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';
import { pxToRem, stepToRem } from '../../../helpers/utils/typography';
import COLORS from '../../../constants/colors-config';
import TYPOGRAPHY from '../../../constants/typography-config';
import { ScreenConfig } from '../../../constants/screen-config';
var StyledRadioButton = styled.div.withConfig({
  displayName: "radio-button__StyledRadioButton",
  componentId: "wb11e0-0"
})(["margin:", " 0;&,& *{transition:all .2s ease;}.k-Form-RadioButton__label{display:flex;align-items:flex-start;align-self:flex-start;flex-wrap:wrap;cursor:pointer;}.k-Form-RadioButton__label::before{box-sizing:border-box;display:block;flex-shrink:0;width:", ";height:", ";margin:", " ", " 0 0;content:'';background-position:center;background-repeat:no-repeat;background-color:", ";border:", " solid ", ";border-radius:50%;transition:border .2s,background .2s;}.k-Form-RadioButton__input{position:absolute;opacity:0;cursor:pointer;}.k-Form-RadioButton__input:focus + .k-Form-RadioButton__label::before{border-color:", ";outline:", " solid ", ";outline-offset:", ";}.k-Form-RadioButton__input:checked + .k-Form-RadioButton__label::before{border:", " solid ", ";}&.k-Form-RadioButton--error{.k-Form-RadioButton__label::before{border-color:", ";}.k-Form-RadioButton__input:checked:not(:disabled) + .k-Form-RadioButton__label::before{border-color:", ";}}.k-Form-RadioButton__input:disabled{& + .k-Form-RadioButton__label{border-color:", ";}& + .k-Form-RadioButton__label::before{background-color:", ";border-color:", ";}&:checked + .k-Form-RadioButton__label::before{background-color:", ";border-color:", ";}}.k-Form-RadioButton__labelText{flex:1 0 calc(100% - ", ");", " font-size:", ";line-height:1.5;}:active .k-Form-RadioButton__labelText,.k-Form-RadioButton__input:active + .k-Form-RadioButton__labelText{color:", ";}&.k-Form-RadioButton--largeLabel{.k-Form-RadioButton__label::before{margin-top:", ";}.k-Form-RadioButton__labelText{", " font-size:", ";}}.k-Form-RadioButton__labelText--withContents{", "}.k-Form-RadioButton__labelContents{margin-top:", ";margin-left:", ";flex:1 0 calc(100% - ", ");", " font-size:", ";line-height:", ";&:empty{display:none;}}&.k-Form-RadioButton--largeContent .k-Form-RadioButton__labelContents{font-size:", ";}@media (min-width:", "px){.k-Form-RadioButton__labelContents{margin-top:", ";font-size:", ";line-height:", ";}}&.k-Form-RadioButton--orion{margin:", " 0;.k-Form-RadioButton__label{box-sizing:border-box;padding:", " ", ";min-height:", ";border-radius:", ";border:2px solid ", ";}.k-Form-RadioButton__input:checked:not(:disabled),.k-Form-RadioButton__input:focus:not(:disabled){& + .k-Form-RadioButton__label{border-color:", ";}}&.k-Form-RadioButton--error{.k-Form-RadioButton__input:not(:disabled) + .k-Form-RadioButton__label{border-color:", ";}}.k-Form-RadioButton__labelText{", ";line-height:", ";}@media (min-width:", "px){margin:", " 0;.k-Form-RadioButton__label{min-height:", ";border-radius:", ";padding:", " ", ";}.k-Form-RadioButton__label::before{margin-top:", ";width:", ";height:", ";}.k-Form-RadioButton__labelText{font-size:", ";flex:1 0 calc(100% - ", ");line-height:", ";}.k-Form-RadioButton__labelContents{margin-left:", ";flex:1 0 calc(100% - ", ");}.k-Form-RadioButton__input:checked + .k-Form-RadioButton__label::before{border-width:", ";}}}&.k-Form-RadioButton--check{.k-Form-RadioButton__input:checked + .k-Form-RadioButton__label::before{border-width:", ";background-color:", ";background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 11 8' width='11' height='8' fill='%23fff' %3E%3Cpath d='M.904 4.06l1.414-1.414L4.44 4.768 8.682.525l1.414 1.414L4.44 7.596.904 4.061z' /%3E%3C/svg%3E\");}&.k-Form-RadioButton--error .k-Form-RadioButton__input:checked:not(:disabled) + .k-Form-RadioButton__label::before{background-color:", ";}.k-Form-RadioButton__input:disabled + .k-Form-RadioButton__label::before{background-color:", ";}}"], pxToRem(10), pxToRem(16), pxToRem(16), pxToRem(4), pxToRem(10), COLORS.background1, pxToRem(2), COLORS.line1, COLORS.primary1, COLORS.primary4, pxToRem(2), pxToRem(2), pxToRem(5), COLORS.primary1, COLORS.error3, COLORS.error, COLORS.line2, COLORS.line1, COLORS.line2, COLORS.background1, COLORS.line2, pxToRem(16 + 10), TYPOGRAPHY.fontStyles.light, stepToRem(-1), COLORS.primary3, pxToRem(8), TYPOGRAPHY.fontStyles.regular, stepToRem(2), TYPOGRAPHY.fontStyles.regular, pxToRem(4), pxToRem(16 + 10), pxToRem(16 + 10 + 10), TYPOGRAPHY.fontStyles.light, stepToRem(-2), pxToRem(19), stepToRem(-1), ScreenConfig.S.min, pxToRem(8), stepToRem(-1), pxToRem(22), pxToRem(15), pxToRem(18), pxToRem(15), pxToRem(60), pxToRem(6), COLORS.line1, COLORS.primary1, COLORS.error3, TYPOGRAPHY.fontStyles.regular, pxToRem(20), ScreenConfig.S.min, pxToRem(20), pxToRem(80), pxToRem(8), pxToRem(30 - 3), pxToRem(15), pxToRem(2), pxToRem(20), pxToRem(20), stepToRem(0), pxToRem(20 + 10), pxToRem(22), pxToRem(20 + 10), pxToRem(20 + 10 + 10), pxToRem(6), pxToRem(2), COLORS.primary1, COLORS.error, COLORS.line2);
export var RadioButton = function RadioButton(_ref) {
  var className = _ref.className,
      id = _ref.id,
      children = _ref.children,
      inputClassName = _ref.inputClassName,
      large = _ref.large,
      largeContent = _ref.largeContent,
      text = _ref.text,
      error = _ref.error,
      disabled = _ref.disabled,
      variant = _ref.variant,
      design = _ref.design,
      inputProps = _objectWithoutProperties(_ref, ["className", "id", "children", "inputClassName", "large", "largeContent", "text", "error", "disabled", "variant", "design"]);

  return /*#__PURE__*/React.createElement(StyledRadioButton, {
    className: classNames('k-Form-RadioButton', className, "k-Form-RadioButton--".concat(variant), "k-Form-RadioButton--".concat(design), {
      'k-Form-RadioButton--error': error,
      'k-Form-RadioButton--largeLabel': large,
      'k-Form-RadioButton--largeContent': largeContent
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
  variant: PropTypes.oneOf(['andromeda', 'orion']),
  design: PropTypes.oneOf(['disc', 'check'])
};
RadioButton.defaultProps = {
  large: false,
  largeContent: false,
  error: false,
  disabled: false,
  variant: 'andromeda',
  design: 'disc'
};