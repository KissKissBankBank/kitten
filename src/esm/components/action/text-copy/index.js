import React, { useRef, useCallback, useState, useEffect } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import COLORS from '../../../constants/colors-config';
import { mq } from '../../../constants/screen-config';
import { pxToRem } from '../../../helpers/utils/typography';
import { CopyIcon } from '../../graphics/icons/copy-icon';
import { ArrowContainer } from '../../information/boxes/arrow-container';
import { Text } from '../../typography/text';
import { VisuallyHidden } from '../../accessibility/visually-hidden';
import { TextInput } from '../../form/input/text-input';
const fadeInAndOut = keyframes(["0%,100%{opacity:0;}10%,90%{opacity:1;}"]);
const Wrapper = styled.button.withConfig({
  displayName: "text-copy__Wrapper",
  componentId: "sc-1d5z8sz-0"
})(["position:relative;width:100%;.k-TextInput__wrapper{.k-TextInput{--text-input-height:auto;line-height:1.15;display:flex;align-items:center;}@media ", "{flex-direction:column;}}.k-TextCopy__tooltip{position:absolute;left:50%;transform:translateX(-50%);bottom:-", ";animation:3s ", " ease-out;}&:hover{.k-TextInput{border:var(--border-hover);}.k-Button{border-color:var(--color-primary-700);background-color:var(--color-primary-700);}}&:active{.k-TextInput{border:var(--border-active);}.k-Button{border-color:var(--color-primary-900);background-color:var(--color-primary-900);}}"], mq.mobile, pxToRem(50), fadeInAndOut);
export const TextCopy = _ref => {
  let {
    id,
    children,
    textToCopy,
    alertMessage,
    description,
    forceOneLine,
    buttonText,
    buttonModifier,
    size,
    className
  } = _ref;
  const [isMessageVisible, setMessageVisibility] = useState(false);
  const textElement = useRef(null);
  useEffect(() => {
    let hideTimeout;

    if (isMessageVisible) {
      hideTimeout = setTimeout(() => setMessageVisibility(false), 3000);
    }

    return () => clearTimeout(hideTimeout);
  }, [isMessageVisible]);

  const copyToClipboard = text => {
    return navigator.clipboard.writeText(text);
  };

  const copyText = useCallback(() => {
    var _textElement$current;

    setMessageVisibility(false);
    const copyableText = textToCopy || (textElement == null ? void 0 : (_textElement$current = textElement.current) == null ? void 0 : _textElement$current.innerText) || '';
    copyToClipboard(copyableText).then(() => {
      setTimeout(() => setMessageVisibility(true), 1);
    });
    const range = document.createRange();
    range.selectNode(textElement.current);
    window.getSelection().addRange(range);
  });
  return /*#__PURE__*/React.createElement(Wrapper, {
    className: classNames('k-TextCopy', 'k-u-reset-button', className),
    type: "button",
    onClick: copyText
  }, description && /*#__PURE__*/React.createElement(VisuallyHidden, null, description), /*#__PURE__*/React.createElement(TextInput, {
    id: id,
    tag: "div",
    className: classNames('k-TextCopy__text', 'k-u-reset-button', {
      'k-TextCopy__text--forceOneLine': forceOneLine
    }),
    size: size,
    has: "button",
    buttonProps: {
      as: 'span',
      modifier: !!buttonText ? buttonModifier : 'hydrogen',
      className: 'k-TextCopy__button',
      fit: buttonText ? 'content' : 'icon',
      children: !!buttonText ? buttonText : /*#__PURE__*/React.createElement(CopyIcon, null)
    }
  }, /*#__PURE__*/React.createElement("span", {
    ref: textElement,
    className: classNames({
      'k-u-clamp-1': forceOneLine
    })
  }, children)), alertMessage && isMessageVisible && /*#__PURE__*/React.createElement(ArrowContainer, {
    color: COLORS.primary1,
    position: "top",
    padding: 10,
    centered: true,
    role: "alert",
    className: "k-TextCopy__tooltip",
    borderRadius: "var(--border-radius-s)"
  }, /*#__PURE__*/React.createElement(Text, {
    color: "background1",
    weight: "400",
    size: "micro"
  }, alertMessage)));
};
TextCopy.propTypes = {
  alertMessage: PropTypes.string,
  textToCopy: PropTypes.string,
  description: PropTypes.string,
  forceOneLine: PropTypes.bool,
  buttonText: PropTypes.string,
  buttonModifier: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'huge', 'giant'])
};
TextCopy.defaultProps = {
  id: 'TextCopy',
  alertMessage: undefined,
  textToCopy: undefined,
  description: undefined,
  forceOneLine: false,
  buttonText: undefined,
  buttonModifier: 'helium',
  size: 'medium'
};