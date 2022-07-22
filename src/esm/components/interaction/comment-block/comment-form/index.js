import _extends from "@babel/runtime/helpers/extends";
import React, { useState } from 'react';
import classNames from 'classnames';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import deprecated from 'prop-types-extra/lib/deprecated';
import { Button } from '../../../action/button';
import { Text } from '../../../typography/text';
import { TextareaAutoResize } from '../../../form/input/textarea-auto-resize';
import COLORS from '../../../../constants/colors-config';
import TYPOGRAPHY from '../../../../constants/typography-config';
import { pxToRem } from '../../../../helpers/utils/typography';
const CommentFormWrapper = styled.div.withConfig({
  displayName: "comment-form__CommentFormWrapper",
  componentId: "sc-18rkmct-0"
})(["--commentForm-arrow-size:", ";display:flex;gap:", ";.k-CommentForm__image{width:", ";flex:0 0 ", ";padding-top:", ";img{width:", ";height:", ";overflow:hidden;object-fit:cover;object-position:center center;border-radius:", ";}}.k-CommentForm__form{flex-grow:1;display:flex;flex-direction:column;gap:", ";margin-left:var(--commentForm-arrow-size);position:relative;}.k-CommentForm__textarea{", " background-color:var(--color-grey-000);font-size:", ";color:", ";padding:", ";border-radius:", ";border:var(--border);resize:vertical;line-height:", ";min-height:", ";max-height:", ";::placeholder{color:var(--color-grey-600);}:hover{border-color:var(--color-grey-500);& + .k-CommentForm__arrow{border-right-color:var(--color-grey-500);}}:active{border-color:var(--color-grey-600);& + .k-CommentForm__arrow{border-right-color:var(--color-grey-600);}}:focus{outline:var(--outline-input);outline-offset:var(--outline-offset-input);& + .k-CommentForm__arrow{border-right-color:var(--color-grey-900);&::before{left:", ";}}}:disabled{cursor:not-allowed;color:var(--color-grey-900);border-color:var(--color-grey-500);background-color:var(--color-grey-300);::placeholder{color:var(--color-grey-600);}& + .k-CommentForm__arrow{border-right-color:var(--color-grey-500);&::before{border-right-color:var(--color-grey-300);}}}}.k-CommentForm__arrow{width:0;height:0;position:absolute;left:calc(-1 * var(--commentForm-arrow-size));top:calc(", " - var(--commentForm-arrow-size));border:var(--commentForm-arrow-size) solid transparent;border-left:0;border-right-color:var(--color-grey-400);z-index:1;&::before{content:'';position:absolute;left:", ";right:0;top:calc(-1 * var(--commentForm-arrow-size));width:0;height:0;border:var(--commentForm-arrow-size) solid transparent;border-left:0;border-right-color:var(--color-grey-000);z-index:2;}}.k-CommentForm__submit{display:inline-block;min-height:0;max-height:0;padding:0 ", ";height:var(--Button-dimension);align-self:flex-end;overflow:hidden;transition:max-height var(--transition),padding var(--transition);}.k-CommentForm__submit--is-visible{max-height:", ";padding:", " ", ";}.k-CommentForm__error{margin-top:", ";}"], pxToRem(7), pxToRem(10), pxToRem(30), pxToRem(30), pxToRem(10), pxToRem(30), pxToRem(30), pxToRem(30), pxToRem(10), TYPOGRAPHY.fontStyles['400'], pxToRem(16), COLORS.font1, pxToRem(15), pxToRem(6), pxToRem(20), pxToRem(50 - 30), pxToRem(20 * 5), pxToRem(2), pxToRem(50 / 2), pxToRem(1), pxToRem(20), pxToRem(40), pxToRem(7), pxToRem(20), pxToRem(-5));
export const CommentForm = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  let {
    avatarImgProps,
    placeholder,
    onSubmit,
    error,
    errorMessage,
    disabled,
    buttonText,
    closeButtonText,
    defaultValue,
    commentLabel,
    id,
    className,
    onChange,
    onClose,
    ...props
  } = _ref;
  const [value, setValue] = useState(defaultValue);

  const handleChange = event => {
    setValue(event.target.value.trim());
    onChange(event.target.value);
  };

  const handleKeyDown = event => {
    if (value === '') return;
    if (event.key !== 'Enter') return;
    if (!event.metaKey && !event.ctrlKey) return;
    onSubmit(value);
  };

  const handleSubmit = () => {
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
    "aria-describedby": id + "-description",
    "aria-label": props['aria-label'] || commentLabel
  }), /*#__PURE__*/React.createElement("span", {
    className: "k-CommentForm__arrow"
  }), error && /*#__PURE__*/React.createElement(Text, {
    id: id + "-description",
    color: "error",
    size: "micro",
    weight: "500",
    className: "k-CommentForm__error"
  }, errorMessage), onClose ? /*#__PURE__*/React.createElement("div", {
    className: "k-u-flex k-u-flex-justifyContent-end k-u-flex-gap-single"
  }, /*#__PURE__*/React.createElement(Button, {
    type: "button",
    size: "small",
    fit: "content",
    disabled: disabled,
    onClick: onClose
  }, closeButtonText), /*#__PURE__*/React.createElement(Button, {
    type: "button",
    modifier: "beryllium",
    size: "small",
    fit: "content",
    disabled: disabled,
    onClick: handleSubmit
  }, buttonText)) : (value.length > 0 || !!defaultValue) && /*#__PURE__*/React.createElement(Button, {
    type: "button",
    modifier: "beryllium",
    size: "small",
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
  onClose: PropTypes.func,
  placeholder: PropTypes.string,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  defaultValue: PropTypes.string,
  id: PropTypes.string,
  disabled: PropTypes.bool,
  buttonText: PropTypes.string,
  closeButtonText: PropTypes.string,
  commentButton: deprecated(PropTypes.string, 'Please use buttonText instead.'),
  avatarBadge: deprecated(PropTypes.node, 'Not a feature anymore'),
  isDisabled: deprecated(PropTypes.bool, 'Please use disabled instead'),
  commentLabel: deprecated(PropTypes.string, 'Please use aria-label instead'),
  ariaId: deprecated(PropTypes.string, 'Please use id prop instead.'),
  textareaId: deprecated(PropTypes.string, 'Please use id prop instead.')
};
CommentForm.defaultProps = {
  onChange: () => {},
  onSubmit: () => {},
  placeholder: '',
  error: false,
  errorMessage: '',
  defaultValue: '',
  id: 'CommentForm',
  disabled: false,
  buttonText: 'Send',
  closeButtonText: 'Close'
};