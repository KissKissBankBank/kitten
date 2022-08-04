import _extends from "@babel/runtime/helpers/extends";
import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';
import { Text } from '../../typography/text';
import { pxToRem, stepToRem } from '../../../helpers/utils/typography';
import COLORS from '../../../constants/colors-config';
import TYPOGRAPHY from '../../../constants/typography-config';
const StyledCheckbox = styled.div.withConfig({
  displayName: "checkbox__StyledCheckbox",
  componentId: "sc-1fornr-0"
})(["", " font-size:", ";line-height:1.5;display:flex;align-items:flex-start;flex-wrap:wrap;margin:", " 0;&.k-Form-Checkbox--disabled input,&.k-Form-Checkbox--disabled label{cursor:not-allowed;color:var(--color-grey-600);}&.k-Form-Checkbox--disabled input:checked,&.k-Form-Checkbox--disabled input:checked + label{color:var(--color-grey-700);}.k-Form-Checkbox__label{flex-basis:calc(100% - ", ");cursor:pointer;transition:color 0.2s;", "}.k-Form-Checkbox__input{appearance:none;box-sizing:border-box;display:inline-block;flex-shrink:0;width:", ";height:", ";margin:0 ", " 0 0;border-radius:var(--border-radius-s);background-color:", ";border:var(--border);cursor:pointer;transition:border-color 0.2s,background-color 0.2s;&:focus{border:var(--border-active-primary);}&:checked,&:indeterminate{background-color:", ";background-repeat:no-repeat;background-position:center;border:var(--border-active-primary);}&:checked{background-image:url(\"data:image/svg+xml,%3Csvg width='11' height='8' viewBox='0 0 11 8' xmlns='http://www.w3.org/2000/svg' fill='%23fff'%0A%3E%3Cpath d='M4.44 7.596L3.024 6.182 8.682.525l1.414 1.414z' /%3E%3Cpath d='M4.44 7.596L.903 4.06l1.414-1.414 3.536 3.536z' /%3E%3C/svg%3E%0A\");}&:indeterminate{background-image:url(\"data:image/svg+xml,%3Csvg width='6' height='2' viewBox='0 0 6 2' xmlns='http://www.w3.org/2000/svg' fill='%23fff'%0A%3E%3Crect width='6' height='2' /%3E%3C/svg%3E%0A\");}&:disabled{background-color:var(--color-grey-200);border:var(--border-disabled);}&:disabled:checked{background-color:var(--color-grey-500);border-color:var(--color-grey-500);}}&.k-Form-Checkbox--error .k-Form-Checkbox__input{border:var(--border-danger);&:checked{background-color:var(--color-danger-500);&:focus{box-shadow:0 0 ", " var(--color-danger-500);}}}.k-Form-Checkbox__link,label a{", " color:", ";text-decoration:none;transition:color 0.2s;&:hover{color:", ";text-decoration:none;}&:active{color:", ";text-decoration:none;}}.k-Form-Checkbox__content{flex:1 0 calc(100% - ", ");margin:", " 0 0 ", ";}"], TYPOGRAPHY.fontStyles['400'], stepToRem(-1), pxToRem(10), pxToRem(20 + 10), TYPOGRAPHY.fontStyles['400'], pxToRem(20), pxToRem(20), pxToRem(10), COLORS.background1, COLORS.primary1, pxToRem(3), TYPOGRAPHY.fontStyles['500'], COLORS.primary1, COLORS.primary3, COLORS.primary3, pxToRem(20 + 10), pxToRem(5), pxToRem(20 + 10));
export const Checkbox = _ref => {
  let {
    className,
    id,
    children,
    inputClassName,
    error,
    disabled,
    textProps,
    labelProps,
    onLabelClick,
    indeterminate,
    label,
    ...inputProps
  } = _ref;
  const inputElement = useRef(null);
  useEffect(() => {
    if (inputElement.current != null) {
      inputElement.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);
  return /*#__PURE__*/React.createElement(StyledCheckbox, {
    className: classNames('k-Form-Checkbox', {
      'k-Form-Checkbox--error': error,
      'k-Form-Checkbox--disabled': disabled
    }, className)
  }, /*#__PURE__*/React.createElement("input", _extends({
    ref: inputElement,
    id: id,
    type: "checkbox",
    className: classNames('k-Form-Checkbox__input', inputClassName),
    disabled: disabled
  }, inputProps)), !label && children && /*#__PURE__*/React.createElement(Text, _extends({
    tag: "label",
    htmlFor: id,
    onClick: onLabelClick
  }, labelProps, textProps, {
    className: classNames('k-Form-Checkbox__label', textProps == null ? void 0 : textProps.className, labelProps == null ? void 0 : labelProps.className)
  }), children), label && !children && /*#__PURE__*/React.createElement(Text, _extends({
    tag: "label",
    htmlFor: id,
    onClick: onLabelClick
  }, labelProps, textProps, {
    className: classNames('k-Form-Checkbox__label', textProps == null ? void 0 : textProps.className, labelProps == null ? void 0 : labelProps.className)
  }), label), label && children && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Text, _extends({
    tag: "label",
    htmlFor: id,
    onClick: onLabelClick,
    weight: "500"
  }, labelProps, {
    className: classNames('k-Form-Checkbox__label', labelProps == null ? void 0 : labelProps.className)
  }), label), /*#__PURE__*/React.createElement(Text, _extends({
    onClick: onLabelClick
  }, textProps, {
    className: classNames('k-Form-Checkbox__content', textProps == null ? void 0 : textProps.className)
  }), children)));
};
Checkbox.defaultProps = {
  id: 'checkbox',
  textProps: {},
  labelProps: {},
  indeterminate: false,
  error: false,
  disabled: false,
  onLabelClick: () => {}
};
Checkbox.propTypes = {
  textProps: PropTypes.object,
  labelProps: PropTypes.object,
  indeterminate: PropTypes.bool,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  children: PropTypes.node,
  label: PropTypes.string,
  onLabelClick: PropTypes.func
};