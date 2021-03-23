import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import { Button } from '../../../components/buttons/button';
import { CrossIcon } from '../../../components/icons/cross-icon';
export var CloseButton = function CloseButton(_ref) {
  var closeButtonLabel = _ref.closeButtonLabel,
      buttonModifier = _ref.buttonModifier,
      others = _objectWithoutProperties(_ref, ["closeButtonLabel", "buttonModifier"]);

  return /*#__PURE__*/React.createElement(Button, _extends({
    icon: true,
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
  buttonModifier: 'hydrogen'
};