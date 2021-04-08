import React from 'react';
import { Deprecated } from '../../../helpers/utils/deprecated';
import { Button as TrueButton } from './index.js';
export var Button = function Button(props) {
  var message = "Please import Button from kitten/buttons/button.";
  return /*#__PURE__*/React.createElement(Deprecated, {
    warningMessage: message
  }, /*#__PURE__*/React.createElement(TrueButton, props));
};