import "core-js/modules/es.symbol.js";
import "core-js/modules/es.symbol.description.js";
import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.promise.js";
import React, { useRef, useCallback, useState, useEffect } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import COLORS from '../../../constants/colors-config';
import { ScreenConfig } from '../../../constants/screen-config';
import { pxToRem, stepToRem } from '../../../helpers/utils/typography';
import { CopyIcon } from '../../graphics/icons/copy-icon';
import { ArrowContainer } from '../../molecules/boxes/arrow-container';
import { Text } from '../../atoms/typography/text';
import { VisuallyHidden } from '../../accessibility/visually-hidden';
import { Button } from '../../molecules/buttons/button';
import { TextInput } from '../../form/text-input';
var fadeInAndOut = keyframes(["0%,100%{opacity:0;}10%,90%{opacity:1;}"]);
var Wrapper = styled.button.withConfig({
  displayName: "text-copy__Wrapper",
  componentId: "sc-hjbj35-0"
})(["position:relative;display:flex;width:100%;.k-TextCopy__text{display:flex;align-items:center;justify-content:flex-start;line-height:calc(1.15 * ", ");text-align:left;overflow:hidden;span{max-width:100%;max-height:calc(2 * 1.15 * ", ");overflow:hidden;text-overflow:ellipsis;}&.k-TextCopy__text--forceOneLine span{white-space:nowrap;}}.k-TextCopy__buttonTextButton{min-width:0;flex:1 0 auto;padding:0 ", ";align-self:stretch;box-sizing:border-box;}.k-TextCopy__iconButton{display:flex;cursor:pointer;align-items:center;padding:", ";border:", " solid ", ";align-self:stretch;box-sizing:border-box;}.k-TextCopy__tooltip{position:absolute;left:0;bottom:-", ";animation:3s ", " ease-out;}&.k-TextCopy--andromeda{.k-TextCopy__text{border-right:0;}}&.k-TextCopy--orion{gap:", ";&:hover{.k-Button{border-color:", ";background-color:", ";}}&:active{.k-Button{border-color:", ";background-color:", ";}}@media (max-width:", "){flex-direction:column;}.k-Button.k-Button--orion{border-radius:", ";}}"], stepToRem(-1), stepToRem(-1), pxToRem(15), pxToRem(10), pxToRem(2), COLORS.line1, pxToRem(50), fadeInAndOut, pxToRem(5), COLORS.primary2, COLORS.primary2, COLORS.primary3, COLORS.primary3, pxToRem(ScreenConfig.XS.max), pxToRem(4));
export var TextCopy = function TextCopy(_ref) {
  var children = _ref.children,
      textToCopy = _ref.textToCopy,
      alertMessage = _ref.alertMessage,
      description = _ref.description,
      forceOneLine = _ref.forceOneLine,
      buttonText = _ref.buttonText,
      buttonModifier = _ref.buttonModifier,
      variant = _ref.variant;

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
    if (!navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    } else {
      // IE11
      var hiddenElement = document.createElement('textarea');
      hiddenElement.style.position = 'absolute';
      hiddenElement.style.opacity = 0;
      hiddenElement.value = text;
      document.body.appendChild(hiddenElement);
      hiddenElement.select();
      return new Promise(function (res, rej) {
        document.execCommand('copy') ? res() : rej();
        document.body.removeChild(hiddenElement);
      });
    }
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
    className: classNames('k-TextCopy', 'k-u-reset-button', "k-TextCopy--" + variant),
    type: "button",
    onClick: copyText
  }, description && /*#__PURE__*/React.createElement(VisuallyHidden, null, description), /*#__PURE__*/React.createElement(TextInput, {
    as: "div",
    className: classNames('k-TextCopy__text', 'k-u-reset-button', {
      'k-TextCopy__text--forceOneLine': forceOneLine
    }),
    variant: variant
  }, /*#__PURE__*/React.createElement("span", {
    ref: textElement
  }, children)), /*#__PURE__*/React.createElement(Button, {
    as: "span",
    modifier: !!buttonText ? buttonModifier : 'hydrogen',
    className: "k-TextCopy__buttonTextButton",
    variant: variant,
    icon: !buttonText
  }, !!buttonText ? buttonText : /*#__PURE__*/React.createElement(CopyIcon, null)), alertMessage && isMessageVisible && /*#__PURE__*/React.createElement(ArrowContainer, {
    color: COLORS.primary1,
    position: "top",
    padding: 10,
    centered: true,
    role: "alert",
    className: "k-TextCopy__tooltip"
  }, /*#__PURE__*/React.createElement(Text, {
    color: "background1",
    weight: "light",
    size: "micro"
  }, alertMessage)));
};
TextCopy.propTypes = {
  alertMessage: PropTypes.string,
  textToCopy: PropTypes.string,
  description: PropTypes.string,
  forceOneLine: PropTypes.bool,
  buttonText: PropTypes.string,
  buttonModifier: PropTypes.string
};
TextCopy.defaultProps = {
  alertMessage: undefined,
  textToCopy: undefined,
  description: undefined,
  forceOneLine: false,
  buttonText: undefined,
  buttonModifier: 'helium'
};