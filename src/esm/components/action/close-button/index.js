import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { Button } from '../../action/button';
import { CrossIconNext } from '../../graphics/icons-next/cross-icon-next';
export const CloseButton = _ref => {
  let {
    closeButtonLabel,
    buttonModifier,
    ...others
  } = _ref;
  return /*#__PURE__*/React.createElement(Button, _extends({
    fit: "icon",
    type: "button",
    title: closeButtonLabel,
    "aria-label": closeButtonLabel,
    modifier: buttonModifier
  }, others), /*#__PURE__*/React.createElement(CrossIconNext, {
    width: "20",
    height: "20"
  }));
};
CloseButton.defaultProps = {
  closeButtonLabel: 'Close',
  buttonModifier: 'hydrogen',
  borderRadius: 0
};