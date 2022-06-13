import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["className", "id", "children", "inputClassName", "error", "disabled", "textProps", "labelProps", "onLabelClick", "indeterminate", "label", "size"];
import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';
import { Text } from '../../typography/text';
import { pxToRem, stepToRem } from '../../../helpers/utils/typography';
import { mq } from '../../../constants/screen-config';
var StyledCheckboxButton = styled.div.withConfig({
  displayName: "checkbox-button__StyledCheckboxButton",
  componentId: "sc-g6n0w-0"
})(["font-size:", ";line-height:", ";margin:", " 0;&.k-Form-CheckboxButton--disabled input,&.k-Form-CheckboxButton--disabled label{cursor:not-allowed;}.k-Form-CheckboxButton__label{display:flex;align-items:center;align-self:flex-start;flex-wrap:wrap;cursor:pointer;gap:", " ", ";box-sizing:border-box;border-radius:var(--border-radius-s);border:var(--border);transition:border var(--transition),background var(--transition);}.k-Form-CheckboxButton__label::before{display:block;content:'';box-sizing:border-box;display:inline-block;flex-shrink:0;width:", ";height:", ";border-radius:var(--border-radius-s);background-color:var(--color-grey-000);border:var(--border);cursor:pointer;transition:border-color var(--transition),background-color var(--transition);}.k-Form-CheckboxButton__input:focus  & + .k-Form-CheckboxButton__label{border:var(--border-active-primary);}}.k-Form-CheckboxButton__input:checked + .k-Form-CheckboxButton__label::before,.k-Form-CheckboxButton__input:indeterminate + .k-Form-CheckboxButton__label::before{background-color:var(--color-primary-500);background-repeat:no-repeat;background-position:center;border:var(--border-active-primary);}.k-Form-CheckboxButton__input:checked + .k-Form-CheckboxButton__label::before{background-image:url(\"data:image/svg+xml,%3Csvg width='11' height='8' viewBox='0 0 11 8' xmlns='http://www.w3.org/2000/svg' fill='%23fff'%0A%3E%3Cpath d='M4.44 7.596L3.024 6.182 8.682.525l1.414 1.414z' /%3E%3Cpath d='M4.44 7.596L.903 4.06l1.414-1.414 3.536 3.536z' /%3E%3C/svg%3E%0A\");}.k-Form-CheckboxButton__input:indeterminate + .k-Form-CheckboxButton__label::before{background-image:url(\"data:image/svg+xml,%3Csvg width='6' height='2' viewBox='0 0 6 2' xmlns='http://www.w3.org/2000/svg' fill='%23fff'%0A%3E%3Crect width='6' height='2' /%3E%3C/svg%3E%0A\");}.k-Form-CheckboxButton__input{appearance:none;position:absolute;opacity:0;cursor:pointer;}.k-Form-CheckboxButton__input:hover:not(:disabled){& + .k-Form-CheckboxButton__label{border-color:var(--color-primary-300);::before{border-color:var(--color-primary-300);}}}.k-Form-CheckboxButton__input:focus:not(:disabled){& + .k-Form-CheckboxButton__label{border-color:var(--color-primary-500);::before{border-color:var(--color-primary-500);}}}.k-Form-CheckboxButton__input:active:not(:disabled){& + .k-Form-CheckboxButton__label{border-color:var(--color-primary-500);::before{border-color:var(--color-primary-500);}}}.k-Form-CheckboxButton__input:checked:not(:disabled){& + .k-Form-CheckboxButton__label{border-color:var(--color-primary-500);background-color:var(--color-primary-100);}}.k-Form-CheckboxButton__input:disabled{& + .k-Form-CheckboxButton__label{border-color:var(--color-grey-300);color:var(--color-grey-600);&::before{border-color:var(--color-grey-400);background-color:var(--color-grey-000);}}}.k-Form-CheckboxButton__input:checked:disabled{& + .k-Form-CheckboxButton__label{border-color:var(--color-grey-600);color:var(--color-grey-600);background-color:var(--color-grey-200);&::before{border-color:var(--color-grey-500);background-color:var(--color-grey-500);}}}&.k-Form-CheckboxButton--error{.k-Form-CheckboxButton__input:not(:disabled){& + .k-Form-CheckboxButton__label{background-color:var(--color-grey-000);border-color:var(--color-danger-300);&::before{border-color:var(--color-danger-500);}}&:checked + .k-Form-CheckboxButton__label::before{background-color:var(--color-danger-500);}&:checked:focus + .k-Form-CheckboxButton__label::before{box-shadow:0 0 ", " var(--color-danger-500);}}}&.k-Form-CheckboxButton--small .k-Form-CheckboxButton__label{padding:", " ", ";min-height:", ";}&.k-Form-CheckboxButton--medium .k-Form-CheckboxButton__label{padding:", " ", ";min-height:", ";}&.k-Form-CheckboxButton--large .k-Form-CheckboxButton__label{padding:", " ", ";min-height:", ";}@media ", "{&.k-Form-CheckboxButton--large .k-Form-CheckboxButton__label{padding:", " ", ";min-height:", ";}}.k-Form-CheckboxButton__labelText{flex-basis:calc(100% - ", ");}.k-Form-CheckboxButton__content{flex:1 0 calc(100% - ", ");margin:0 0 0 ", ";}"], stepToRem(-1), pxToRem(18), pxToRem(10), pxToRem(5 + 2), pxToRem(15), pxToRem(20), pxToRem(20), pxToRem(3), pxToRem(10 - 1), pxToRem(15), pxToRem(40), pxToRem(20 - 1), pxToRem(20), pxToRem(60), pxToRem(20 - 1), pxToRem(20), pxToRem(60), mq.tabletAndDesktop, pxToRem(30 - 1), pxToRem(30), pxToRem(80), pxToRem(20 + 15), pxToRem(20 + 15), pxToRem(20 + 15));
export var CheckboxButton = function CheckboxButton(_ref) {
  var className = _ref.className,
      id = _ref.id,
      children = _ref.children,
      inputClassName = _ref.inputClassName,
      error = _ref.error,
      disabled = _ref.disabled,
      textProps = _ref.textProps,
      labelProps = _ref.labelProps,
      onLabelClick = _ref.onLabelClick,
      indeterminate = _ref.indeterminate,
      label = _ref.label,
      size = _ref.size,
      inputProps = _objectWithoutPropertiesLoose(_ref, _excluded);

  var inputElement = useRef(null);
  useEffect(function () {
    if (inputElement.current != null) {
      inputElement.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);
  return /*#__PURE__*/React.createElement(StyledCheckboxButton, {
    className: classNames('k-Form-CheckboxButton', "k-Form-CheckboxButton--" + size, {
      'k-Form-CheckboxButton--error': error,
      'k-Form-CheckboxButton--disabled': disabled
    }, className)
  }, /*#__PURE__*/React.createElement("input", _extends({
    ref: inputElement,
    id: id,
    type: "checkbox",
    className: classNames('k-Form-CheckboxButton__input', inputClassName),
    disabled: disabled
  }, inputProps)), !label && children && /*#__PURE__*/React.createElement(Text, _extends({
    tag: "label",
    htmlFor: id,
    onClick: onLabelClick,
    weight: "500"
  }, labelProps, textProps, {
    className: classNames('k-Form-CheckboxButton__label', textProps == null ? void 0 : textProps.className, labelProps == null ? void 0 : labelProps.className)
  }), /*#__PURE__*/React.createElement("span", {
    className: "k-Form-CheckboxButton__labelText"
  }, children)), label && !children && /*#__PURE__*/React.createElement(Text, _extends({
    tag: "label",
    htmlFor: id,
    onClick: onLabelClick,
    weight: "500"
  }, labelProps, textProps, {
    className: classNames('k-Form-CheckboxButton__label', textProps == null ? void 0 : textProps.className, labelProps == null ? void 0 : labelProps.className)
  }), /*#__PURE__*/React.createElement("span", {
    className: "k-Form-CheckboxButton__labelText"
  }, label)), label && children && /*#__PURE__*/React.createElement("label", {
    className: classNames('k-Form-CheckboxButton__label'),
    htmlFor: id,
    onClick: onLabelClick
  }, /*#__PURE__*/React.createElement(Text, _extends({
    weight: "500"
  }, labelProps, {
    className: classNames('k-Form-CheckboxButton__labelText', labelProps == null ? void 0 : labelProps.className)
  }), label), /*#__PURE__*/React.createElement(Text, _extends({}, textProps, {
    className: classNames('k-Form-CheckboxButton__content', textProps == null ? void 0 : textProps.className)
  }), children)));
};
CheckboxButton.defaultProps = {
  id: 'checkbox',
  textProps: {},
  labelProps: {},
  indeterminate: false,
  error: false,
  disabled: false,
  onLabelClick: function onLabelClick() {},
  size: 'medium'
};
CheckboxButton.propTypes = {
  textProps: PropTypes.object,
  labelProps: PropTypes.object,
  indeterminate: PropTypes.bool,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  children: PropTypes.node,
  label: PropTypes.string,
  onLabelClick: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'large'])
};