import React, { useRef, useCallback, useState, useEffect } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import COLORS from '../../../constants/colors-config';
import { mq } from '../../../constants/screen-config';
import { pxToRem, stepToRem } from '../../../helpers/utils/typography';
import { CopyIcon } from '../../graphics/icons/copy-icon';
import { ArrowContainer } from '../../information/boxes/arrow-container';
import { Text } from '../../typography/text';
import { VisuallyHidden } from '../../accessibility/visually-hidden';
import { Button } from '../../action/button';
import { TextInput } from '../../form/input/text-input';
var fadeInAndOut = keyframes(["0%,100%{opacity:0;}10%,90%{opacity:1;}"]);
var Wrapper = styled.button.withConfig({
  displayName: "text-copy__Wrapper",
  componentId: "sc-1d5z8sz-0"
})(["position:relative;display:grid;gap:", ";width:100%;@media ", "{grid-template-rows:1fr 1fr;}@media ", "{grid-template-columns:1fr auto;}.k-TextCopy__text{display:flex;align-items:center;justify-content:flex-start;line-height:calc(1.15 * ", ");text-align:left;overflow:hidden;span{max-width:100%;max-height:calc(2 * 1.15 * ", ");overflow:hidden;text-overflow:ellipsis;}&.k-TextCopy__text--forceOneLine span{white-space:nowrap;}}.k-TextCopy__buttonTextButton{flex:1 0 auto;padding:0 ", ";align-self:stretch;box-sizing:border-box;}.k-TextCopy__iconButton{display:flex;cursor:pointer;align-items:center;padding:", ";border:var(--border);align-self:stretch;box-sizing:border-box;}.k-TextCopy__tooltip{position:absolute;left:50%;transform:translateX(-50%);bottom:-", ";animation:3s ", " ease-out;}&:hover{.k-Button{border-color:", ";background-color:", ";}}&:active{.k-Button{border-color:", ";background-color:", ";}}"], pxToRem(5), mq.mobile, mq.tabletAndDesktop, stepToRem(-1), stepToRem(-1), pxToRem(15), pxToRem(10), pxToRem(50), fadeInAndOut, COLORS.primary2, COLORS.primary2, COLORS.primary3, COLORS.primary3);
export var TextCopy = function TextCopy(_ref) {
  var children = _ref.children,
      textToCopy = _ref.textToCopy,
      alertMessage = _ref.alertMessage,
      description = _ref.description,
      forceOneLine = _ref.forceOneLine,
      buttonText = _ref.buttonText,
      buttonModifier = _ref.buttonModifier,
      size = _ref.size,
      className = _ref.className;

  var _useState = useState(false),
      isMessageVisible = _useState[0],
      setMessageVisibility = _useState[1];

  var textElement = useRef(null);
  useEffect(function () {
    var hideTimeout;

    if (isMessageVisible) {
      hideTimeout = setTimeout(function () {
        return setMessageVisibility(false);
      }, 3000);
    }

    return function () {
      return clearTimeout(hideTimeout);
    };
  }, [isMessageVisible]);

  var copyToClipboard = function copyToClipboard(text) {
    return navigator.clipboard.writeText(text);
  };

  var copyText = useCallback(function () {
    var _textElement$current;

    setMessageVisibility(false);
    var copyableText = textToCopy || (textElement == null ? void 0 : (_textElement$current = textElement.current) == null ? void 0 : _textElement$current.innerText) || '';
    copyToClipboard(copyableText).then(function () {
      setTimeout(function () {
        return setMessageVisibility(true);
      }, 1);
    });
    var range = document.createRange();
    range.selectNode(textElement.current);
    window.getSelection().addRange(range);
  });
  return /*#__PURE__*/React.createElement(Wrapper, {
    className: classNames('k-TextCopy', 'k-u-reset-button', className),
    type: "button",
    onClick: copyText
  }, description && /*#__PURE__*/React.createElement(VisuallyHidden, null, description), /*#__PURE__*/React.createElement(TextInput, {
    as: "div",
    className: classNames('k-TextCopy__text', 'k-u-reset-button', {
      'k-TextCopy__text--forceOneLine': forceOneLine
    }),
    size: size
  }, /*#__PURE__*/React.createElement("span", {
    ref: textElement
  }, children)), /*#__PURE__*/React.createElement(Button, {
    as: "span",
    modifier: !!buttonText ? buttonModifier : 'hydrogen',
    className: "k-TextCopy__buttonTextButton",
    fit: buttonText ? 'content' : 'icon',
    size: size
  }, !!buttonText ? buttonText : /*#__PURE__*/React.createElement(CopyIcon, null)), alertMessage && isMessageVisible && /*#__PURE__*/React.createElement(ArrowContainer, {
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
  alertMessage: undefined,
  textToCopy: undefined,
  description: undefined,
  forceOneLine: false,
  buttonText: undefined,
  buttonModifier: 'helium',
  size: 'medium'
};