import _extends from "@babel/runtime/helpers/esm/extends";
import React from 'react';
import { QuestionMarkIcon } from '../../../components/icons/question-mark-icon';
import { ButtonIcon } from '../../../components/buttons/button-icon';
export var ButtonQuestionMarkIcon = function ButtonQuestionMarkIcon(props) {
  return /*#__PURE__*/React.createElement(ButtonIcon, _extends({
    className: "k-ButtonIcon--tooltip--nano",
    modifier: "helium",
    size: "nano",
    type: "button",
    rounded: true
  }, props), /*#__PURE__*/React.createElement(QuestionMarkIcon, {
    className: "k-ButtonIcon__svg"
  }));
};