import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { useState } from 'react';
import classNames from 'classnames';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import deprecated from 'prop-types-extra/lib/deprecated';
import { Button } from '../../../../components/molecules/buttons/button';
import { Text } from '../../../../components/atoms/typography/text';
import { TextareaAutoResize } from '../../../../components/form/textarea-auto-resize';
import COLORS from '../../../../constants/colors-config';
import TYPOGRAPHY from '../../../../constants/typography-config';
import { pxToRem } from '../../../../helpers/utils/typography';
var CommentFormWrapper = styled.div.withConfig({
  displayName: "comment-form__CommentFormWrapper",
  componentId: "sc-1hg07ex-0"
})(["--commentForm-arrow-size:", ";display:flex;gap:", ";.k-CommentForm__image{width:", ";flex:0 0 ", ";padding-top:", ";img{width:", ";height:", ";overflow:hidden;object-fit:cover;object-position:center center;border-radius:", ";}}.k-CommentForm__form{flex-grow:1;display:flex;flex-direction:column;gap:", ";margin-left:var(--commentForm-arrow-size);position:relative;}.k-CommentForm__textarea{", " background-color:var(--color-grey-000);font-size:", ";color:", ";padding:", ";border-radius:", ";border:var(--border);resize:vertical;line-height:", ";min-height:", ";max-height:", ";::placeholder{color:var(--color-grey-600);}:hover{border-color:var(--color-grey-500);& + .k-CommentForm__arrow{border-right-color:var(--color-grey-500);}}:active{border-color:var(--color-grey-600);& + .k-CommentForm__arrow{border-right-color:var(--color-grey-600);}}:focus{outline:var(--outline-input);outline-offset:var(--outline-offset-input);& + .k-CommentForm__arrow{border-right-color:var(--color-grey-900);&::before{left:", ";}}}:disabled{cursor:not-allowed;color:var(--color-grey-900);border-color:var(--color-grey-500);background-color:var(--color-grey-300);::placeholder{color:var(--color-grey-600);}& + .k-CommentForm__arrow{border-right-color:var(--color-grey-500);&::before{border-right-color:var(--color-grey-300);}}}}.k-CommentForm__arrow{width:0;height:0;position:absolute;left:calc(-1 * var(--commentForm-arrow-size));top:calc(", " - var(--commentForm-arrow-size));border:var(--commentForm-arrow-size) solid transparent;border-left:0;border-right-color:var(--color-grey-400);z-index:1;&::before{content:'';position:absolute;left:", ";right:0;top:calc(-1 * var(--commentForm-arrow-size));width:0;height:0;border:var(--commentForm-arrow-size) solid transparent;border-left:0;border-right-color:var(--color-grey-000);z-index:2;}}.k-CommentForm__submit{display:inline-block;min-height:0;max-height:0;padding:0 ", ";height:var(--Button-dimension);align-self:flex-end;overflow:hidden;transition:max-height var(--transition),padding var(--transition);}.k-CommentForm__submit--is-visible{max-height:", ";padding:", " ", ";}.k-CommentForm__error{margin-top:", ";}"], pxToRem(7), pxToRem(10), pxToRem(30), pxToRem(30), pxToRem(10), pxToRem(30), pxToRem(30), pxToRem(30), pxToRem(10), TYPOGRAPHY.fontStyles.light, pxToRem(16), COLORS.font1, pxToRem(15), pxToRem(6), pxToRem(20), pxToRem(50 - 30), pxToRem(20 * 5), pxToRem(2), pxToRem(50 / 2), pxToRem(1), pxToRem(20), pxToRem(40), pxToRem(7), pxToRem(20), pxToRem(-5));
export var CommentForm = React.forwardRef(function (_ref, ref) {
  var avatarImgProps = _ref.avatarImgProps,
      placeholder = _ref.placeholder,
      onSubmit = _ref.onSubmit,
      error = _ref.error,
      errorMessage = _ref.errorMessage,
      disabled = _ref.disabled,
      buttonText = _ref.buttonText,
      defaultValue = _ref.defaultValue,
      commentLabel = _ref.commentLabel,
      id = _ref.id,
      className = _ref.className,
      onChange = _ref.onChange,
      props = _objectWithoutProperties(_ref, ["avatarImgProps", "placeholder", "onSubmit", "error", "errorMessage", "disabled", "buttonText", "defaultValue", "commentLabel", "id", "className", "onChange"]);

  var _useState = useState(defaultValue),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var handleChange = function handleChange(event) {
    setValue(event.target.value.trim());
    onChange(event.target.value);
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

  return /*#__PURE__*/React.createElement(CommentFormWrapper, {
    className: classNames('k-CommentForm', className)
  }, /*#__PURE__*/React.createElement("div", {
    className: "k-CommentForm__image"
  }, /*#__PURE__*/React.createElement("img", _extends({
    alt: ""
  }, avatarImgProps))), /*#__PURE__*/React.createElement("div", {
    className: "k-CommentForm__form"
  }, /*#__PURE__*/React.createElement(TextareaAutoResize, {
    ref: ref || null,
    className: "k-CommentForm__textarea",
    id: id,
    defaultValue: defaultValue,
    disabled: disabled,
    placeholder: placeholder,
    onChange: handleChange,
    onKeyDown: handleKeyDown,
    minRows: 1,
    maxRows: 5,
    lineHeight: 20,
    "aria-describedby": "".concat(id, "-description"),
    "aria-label": props['aria-label'] || commentLabel
  }), /*#__PURE__*/React.createElement("span", {
    className: "k-CommentForm__arrow"
  }), error && /*#__PURE__*/React.createElement(Text, {
    id: "".concat(id, "-description"),
    color: "error",
    size: "micro",
    weight: "regular",
    className: "k-CommentForm__error"
  }, errorMessage), (value.length > 0 || !!defaultValue) && /*#__PURE__*/React.createElement(Button, {
    type: "button",
    modifier: "beryllium",
    size: "tiny",
    fit: "content",
    disabled: disabled,
    className: classNames('k-CommentForm__submit', {
      'k-CommentForm__submit--is-visible': value.length > 0
    }),
    onClick: handleSubmit
  }, buttonText)));
});
CommentForm.propTypes = {
  avatarImgProps: PropTypes.object.isRequired,
  'aria-label': PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  placeholder: PropTypes.string,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  defaultValue: PropTypes.string,
  id: PropTypes.string,
  disabled: PropTypes.bool,
  buttonText: PropTypes.string,
  commentButton: deprecated(PropTypes.string, 'Please use buttonText instead.'),
  avatarBadge: deprecated(PropTypes.node, 'Not a feature anymore'),
  isDisabled: deprecated(PropTypes.bool, 'Please use disabled instead'),
  commentLabel: deprecated(PropTypes.string, 'Please use aria-label instead'),
  ariaId: deprecated(PropTypes.string, 'Please use id prop instead.'),
  textareaId: deprecated(PropTypes.string, 'Please use id prop instead.')
};
CommentForm.defaultProps = {
  onChange: function onChange() {},
  onSubmit: function onSubmit() {},
  placeholder: '',
  error: false,
  errorMessage: '',
  defaultValue: '',
  id: 'CommentForm',
  disabled: false,
  buttonText: 'Send'
};