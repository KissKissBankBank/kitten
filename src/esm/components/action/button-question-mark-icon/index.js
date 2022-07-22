import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { Button } from '../../action/button';
import { QuestionMarkIcon } from '../../graphics/icons/question-mark-icon';
export const ButtonQuestionMarkIcon = props => /*#__PURE__*/React.createElement(Button, _extends({
  modifier: "helium",
  size: "nano",
  rounded: true,
  fit: "icon",
  type: "button"
}, props), /*#__PURE__*/React.createElement(QuestionMarkIcon, {
  width: "10",
  height: "10"
}));