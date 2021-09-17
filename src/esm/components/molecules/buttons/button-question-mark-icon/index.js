import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { Button } from '../../../../components/molecules/buttons/button';
import { QuestionMarkIcon } from '../../../../components/graphics/icons/question-mark-icon';
export var ButtonQuestionMarkIcon = function ButtonQuestionMarkIcon(props) {
  return /*#__PURE__*/React.createElement(Button, _extends({
    modifier: "helium",
    size: "nano",
    rounded: true,
    icon: true,
    type: "button"
  }, props), /*#__PURE__*/React.createElement(QuestionMarkIcon, {
    width: "10",
    height: "10"
  }));
};