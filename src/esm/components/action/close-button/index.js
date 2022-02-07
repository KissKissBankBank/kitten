import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["closeButtonLabel", "buttonModifier"];
import React from 'react';
import { Button } from '../../action/button';
import { CrossIcon } from '../../graphics/icons/cross-icon';
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
  }, others), /*#__PURE__*/React.createElement(CrossIcon, {
    width: "8",
    height: "8"
  }));
};
CloseButton.defaultProps = {
  closeButtonLabel: 'Close',
  buttonModifier: 'hydrogen',
  borderRadius: 0
};