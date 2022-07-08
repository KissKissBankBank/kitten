import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["closeButtonLabel", "buttonModifier"];
import React from 'react';
import { Button } from '../../action/button';
import { CrossIconNext } from '../../graphics/icons-next/cross-icon-next';
export var CloseButton = function CloseButton(_ref) {
  var closeButtonLabel = _ref.closeButtonLabel,
      buttonModifier = _ref.buttonModifier,
      others = _objectWithoutPropertiesLoose(_ref, _excluded);

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