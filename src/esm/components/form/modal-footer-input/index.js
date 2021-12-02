import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button } from '../../../components/molecules/buttons/button';
import { pxToRem } from '../../../helpers/utils/typography';
import TYPOGRAPHY from '../../../constants/typography-config';
import { mq } from '../../../constants/screen-config';
import { TextareaAutoResize } from '../../../components/form/textarea-auto-resize';
var InputWrapper = styled.div.withConfig({
  displayName: "modal-footer-input__InputWrapper",
  componentId: "shdmkt-0"
})(["position:relative;width:100%;border-top:var(--border);transition:border var(--transition);:hover{border-top:var(--border-hover);}.k-ModalFooterInput__input{position:relative;display:flex;align-items:center;width:100%;box-sizing:border-box;margin:0;padding:", " ", " ", " ", ";min-height:", ";border:none;", " font-size:", ";line-height:", ";appearance:none;resize:none;transition:font-size var(--transition);@media ", "{padding:", ";padding-right:", ";}:focus{font-size:", ";outline:var(--outline-input);outline-offset:var(--outline-offset-input);}&::placeholder,&:focus::placeholder{font-size:", ";color:var(--color-grey-600);}}.k-ModalFooterInput__button{position:absolute;display:flex;right:", ";bottom:", ";margin:0 !important;}"], pxToRem(15), pxToRem(50), pxToRem(15), pxToRem(10), pxToRem(50), TYPOGRAPHY.fontStyles.light, pxToRem(14), pxToRem(18), mq.tabletAndDesktop, pxToRem(15), pxToRem(60), pxToRem(16), pxToRem(14), pxToRem(5), pxToRem(5));
export var ModalFooterInput = React.forwardRef(function (_ref, ref) {
  var id = _ref.id,
      defaultValue = _ref.defaultValue,
      className = _ref.className,
      placeholder = _ref.placeholder,
      disabled = _ref.disabled,
      buttonContent = _ref.buttonContent,
      onChange = _ref.onChange,
      onSubmit = _ref.onSubmit,
      props = _objectWithoutProperties(_ref, ["id", "defaultValue", "className", "placeholder", "disabled", "buttonContent", "onChange", "onSubmit"]);

  var _useState = useState(defaultValue),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var handleChange = function handleChange(e) {
    setValue(e.target.value.trim());
    onChange(e.target.value.trim());
  };

  var handleKeyDown = function handleKeyDown(event) {
    if (value === '') return;
    if (event.key !== 'Enter') return;
    if (!event.metaKey && !event.ctrlKey) return;
    onSubmit(value);
  };

  var handleSubmit = function handleSubmit() {
    onSubmit(value);
  };

  return /*#__PURE__*/React.createElement(InputWrapper, {
    className: classNames('k-ModalFooterInput', className)
  }, /*#__PURE__*/React.createElement(TextareaAutoResize, {
    ref: ref || null,
    id: id,
    placeholder: placeholder,
    onChange: handleChange,
    onKeyDown: handleKeyDown,
    minRows: 1,
    maxRows: 5,
    "aria-label": props['aria-label'],
    className: "k-ModalFooterInput__input",
    defaultValue: defaultValue
  }), /*#__PURE__*/React.createElement(Button, {
    type: "button",
    modifier: "beryllium",
    fit: "icon",
    size: "tiny",
    disabled: disabled || value.length < 1,
    className: "k-ModalFooterInput__button",
    onClick: handleSubmit
  }, buttonContent));
});
ModalFooterInput.propTypes = {
  id: PropTypes.string.isRequired,
  'aria-label': PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  buttonContent: PropTypes.node,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func
};
ModalFooterInput.defaultProps = {
  defaultValue: '',
  placeholder: '',
  disabled: false,
  buttonContent: 'Send',
  onChange: function onChange() {},
  onSubmit: function onSubmit() {}
};