import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { TextInput } from '../../../form/input/text-input';
export var TextInputWithLimit = function TextInputWithLimit(props) {
  return /*#__PURE__*/React.createElement(TextInput, _extends({}, props, {
    has: "limit"
  }));
};