import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["className", "id", "children", "inputClassName", "error", "disabled", "textProps", "labelProps", "onLabelClick", "indeterminate", "label", "variant"];
import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';
import { Text } from '../../../components/atoms/typography/text';
import { pxToRem, stepToRem } from '../../../helpers/utils/typography';
import COLORS from '../../../constants/colors-config';
import TYPOGRAPHY from '../../../constants/typography-config';
var StyledCheckbox = styled.div.withConfig({
  displayName: "checkbox__StyledCheckbox",
  componentId: "sc-1fornr-0"
})(["", " font-size:", ";line-height:1.5;display:flex;align-items:flex-start;flex-wrap:wrap;margin:", " 0;&.k-Form-Checkbox--disabled input,&.k-Form-Checkbox--disabled label{cursor:not-allowed;}.k-Form-Checkbox__label{flex-basis:calc(100% - ", ");cursor:pointer;transition:color 0.2s;", " &:active{color:", ";}}.k-Form-Checkbox__input{appearance:none;box-sizing:border-box;display:inline-block;flex-shrink:0;width:", ";height:", ";margin:0 ", " 0 0;background-color:", ";border:var(--border);cursor:pointer;transition:border-color 0.2s,background-color 0.2s;&:focus{border:var(--border-active-primary);}&:checked,&:indeterminate{background-color:", ";background-repeat:no-repeat;background-position:center;border:var(--border-active-primary);}&:checked{background-image:url(\"data:image/svg+xml,%3Csvg width='11' height='8' viewBox='0 0 11 8' xmlns='http://www.w3.org/2000/svg' fill='%23fff'%0A%3E%3Cpath d='M4.44 7.596L3.024 6.182 8.682.525l1.414 1.414z' /%3E%3Cpath d='M4.44 7.596L.903 4.06l1.414-1.414 3.536 3.536z' /%3E%3C/svg%3E%0A\");}&:indeterminate{background-image:url(\"data:image/svg+xml,%3Csvg width='6' height='2' viewBox='0 0 6 2' xmlns='http://www.w3.org/2000/svg' fill='%23fff'%0A%3E%3Crect width='6' height='2' /%3E%3C/svg%3E%0A\");}&:disabled{background-color:", ";border:var(--border-disabled);}&:disabled:checked{border:var(--border-disabled-active);background-color:", ";background-image:url(\"data:image/svg+xml,%3Csvg width='11' height='8' viewBox='0 0 11 8' xmlns='http://www.w3.org/2000/svg' fill='%23b8b8b8'%0A%3E%3Cpath d='M4.44 7.596L3.024 6.182 8.682.525l1.414 1.414z' /%3E%3Cpath d='M4.44 7.596L.903 4.06l1.414-1.414 3.536 3.536z' /%3E%3C/svg%3E%0A\");}}&.k-Form-Checkbox--error .k-Form-Checkbox__input{border:var(--border-danger);&:checked{background-color:", ";&:focus{box-shadow:0 0 ", " ", ";}}}&.k-Form-Checkbox--orion .k-Form-Checkbox__input{border-radius:var(--border-radius-s);}.k-Form-Checkbox__link,label a{", " color:", ";text-decoration:none;transition:color 0.2s;&:hover{color:", ";text-decoration:none;}&:active{color:", ";text-decoration:none;}}.k-Form-Checkbox__content{flex:1 0 calc(100% - ", ");margin:", " 0 0 ", ";}"], TYPOGRAPHY.fontStyles.light, stepToRem(-1), pxToRem(10), pxToRem(20 + 10), TYPOGRAPHY.fontStyles.light, COLORS.primary3, pxToRem(20), pxToRem(20), pxToRem(10), COLORS.background1, COLORS.primary1, COLORS.line1, COLORS.line2, COLORS.error, pxToRem(3), COLORS.error, TYPOGRAPHY.fontStyles.regular, COLORS.primary1, COLORS.primary3, COLORS.primary3, pxToRem(20 + 10), pxToRem(5), pxToRem(20 + 10));
export var Checkbox = function Checkbox(_ref) {
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
      variant = _ref.variant,
      inputProps = _objectWithoutPropertiesLoose(_ref, _excluded);

  var inputElement = useRef(null);
  useEffect(function () {
    if (inputElement.current != null) {
      inputElement.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);
  return /*#__PURE__*/React.createElement(StyledCheckbox, {
    className: classNames('k-Form-Checkbox', "k-Form-Checkbox--" + variant, {
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
    weight: "regular"
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
  variant: 'orion',
  onLabelClick: function onLabelClick() {}
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
  variant: PropTypes.oneOf(['andromeda', 'orion']),
  onLabelClick: PropTypes.func
};