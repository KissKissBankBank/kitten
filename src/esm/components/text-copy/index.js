import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { useRef, useCallback, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes, css } from 'styled-components';
import TYPOGRAPHY from '../../constants/typography-config';
import COLORS from '../../constants/colors-config';
import { pxToRem, stepToRem } from '../../helpers/utils/typography';
import { CopyIcon } from '../icons/copy-icon';
import { ArrowContainer } from '../layout/arrow-container';
import { Text } from '../typography/text';
import { VisuallyHidden } from '../accessibility/visually-hidden';
import { modifierStyles } from '../../components/buttons/button/helpers/modifier-styles';
var StyledButton = styled(function (_ref) {
  var buttonModifier = _ref.buttonModifier,
      others = _objectWithoutProperties(_ref, ["buttonModifier"]);

  return /*#__PURE__*/React.createElement("button", others);
}).withConfig({
  displayName: "text-copy__StyledButton",
  componentId: "sc-1ikj7bl-0"
})(["", ";font-size:", ";line-height:1.3;flex:1 0 auto;outline:none;appearance:none;cursor:pointer;padding:0 ", ";border-radius:0;align-self:stretch;box-sizing:border-box;", ";"], TYPOGRAPHY.fontStyles.regular, stepToRem(-1), pxToRem(30), function (_ref2) {
  var buttonModifier = _ref2.buttonModifier;
  return modifierStyles(buttonModifier);
});
var fadeInAndOut = keyframes(["0%,100%{opacity:0;}10%,90%{opacity:1;}"]);
var Wrapper = styled(function (_ref3) {
  var buttonText = _ref3.buttonText,
      others = _objectWithoutProperties(_ref3, ["buttonText"]);

  return /*#__PURE__*/React.createElement("div", others);
}).withConfig({
  displayName: "text-copy__Wrapper",
  componentId: "sc-1ikj7bl-1"
})(["position:relative;display:flex;align-items:center;justify-content:space-between;", ""], function (_ref4) {
  var buttonText = _ref4.buttonText;
  return !buttonText && css(["border:", " solid ", ";background-color:", ";"], pxToRem(2), COLORS.line1, COLORS.background1);
});
var StyledText = styled(function (_ref5) {
  var buttonText = _ref5.buttonText,
      forceOneLine = _ref5.forceOneLine,
      className = _ref5.className,
      children = _ref5.children,
      others = _objectWithoutProperties(_ref5, ["buttonText", "forceOneLine", "className", "children"]);

  return /*#__PURE__*/React.createElement(Text, _extends({
    className: className
  }, others), children);
}).withConfig({
  displayName: "text-copy__StyledText",
  componentId: "sc-1ikj7bl-2"
})(["padding:", " ", ";width:100%;", " ", ""], pxToRem(10), pxToRem(15), function (_ref6) {
  var buttonText = _ref6.buttonText;
  return buttonText && css(["border:", " solid ", ";background-color:", ";border-right:0;"], pxToRem(2), COLORS.line1, COLORS.background1);
}, function (_ref7) {
  var forceOneLine = _ref7.forceOneLine;
  return forceOneLine && css(["overflow:hidden;white-space:nowrap;"]);
});
var IconWrapper = styled.div.withConfig({
  displayName: "text-copy__IconWrapper",
  componentId: "sc-1ikj7bl-3"
})(["display:flex;cursor:pointer;align-items:center;padding:", ";border-left:", " solid ", ";align-self:stretch;box-sizing:border-box;"], pxToRem(10), pxToRem(2), COLORS.line1);
var StyledArrowContainer = styled(ArrowContainer).withConfig({
  displayName: "text-copy__StyledArrowContainer",
  componentId: "sc-1ikj7bl-4"
})(["position:absolute;left:0;bottom:-", ";animation:3s ", " ease-out;"], pxToRem(50), fadeInAndOut);
export var TextCopy = function TextCopy(_ref8) {
  var children = _ref8.children,
      textToCopy = _ref8.textToCopy,
      alertMessage = _ref8.alertMessage,
      description = _ref8.description,
      forceOneLine = _ref8.forceOneLine,
      buttonText = _ref8.buttonText,
      buttonModifier = _ref8.buttonModifier;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      shouldShowMessage = _useState2[0],
      isMessageShown = _useState2[1];

  var textRef = useRef(null);
  var selectText = useCallback(function () {
    var range = document.createRange();
    range.selectNode(textRef.current);
    window.getSelection().addRange(range);
  });
  useEffect(function () {
    var hideTimeout;

    if (shouldShowMessage) {
      hideTimeout = setTimeout(function () {
        return isMessageShown(false);
      }, 3000);
    }

    return function () {
      return clearTimeout(hideTimeout);
    };
  }, [shouldShowMessage]);
  var copyText = useCallback(function () {
    isMessageShown(false);

    if (textToCopy) {
      var el = document.createElement('textarea');
      el.value = textToCopy;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      var range = document.createRange();
      range.selectNode(textRef.current);
      window.getSelection().addRange(range);
    } else {
      selectText();
      document.execCommand('copy');
    }

    setTimeout(function () {
      return isMessageShown(true);
    }, 1);
  });

  var Action = function Action(_ref9) {
    var copyText = _ref9.copyText,
        buttonText = _ref9.buttonText,
        buttonModifier = _ref9.buttonModifier,
        buttonProps = _ref9.buttonProps;
    return /*#__PURE__*/React.createElement(React.Fragment, null, !buttonText && /*#__PURE__*/React.createElement(IconWrapper, {
      "aria-hidden": true,
      onClick: copyText
    }, /*#__PURE__*/React.createElement(CopyIcon, null)), buttonText && /*#__PURE__*/React.createElement(StyledButton, _extends({
      type: "button",
      buttonModifier: buttonModifier,
      onClick: copyText,
      "aria-label": copyText
    }, buttonProps), buttonText));
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Wrapper, {
    buttonText: buttonText
  }, description && /*#__PURE__*/React.createElement(VisuallyHidden, null, description), /*#__PURE__*/React.createElement(StyledText, {
    weight: "light",
    size: "micro",
    lineHeight: "normal",
    forceOneLine: forceOneLine,
    onClick: selectText,
    buttonText: buttonText
  }, /*#__PURE__*/React.createElement("span", {
    ref: textRef
  }, children)), /*#__PURE__*/React.createElement(Action, {
    copyText: copyText,
    buttonText: buttonText,
    buttonModifier: buttonModifier
  }), alertMessage && shouldShowMessage && /*#__PURE__*/React.createElement(StyledArrowContainer, {
    color: COLORS.primary1,
    position: "top",
    padding: 10,
    centered: true,
    role: "alert"
  }, /*#__PURE__*/React.createElement(Text, {
    color: "background1",
    weight: "light",
    size: "micro"
  }, alertMessage))));
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