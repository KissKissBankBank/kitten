import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { TextInput } from '../../../form/input/text-input';
export const TextInputWithUnit = _ref => {
  let {
    unitWord,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement(TextInput, _extends({}, props, {
    has: "unit",
    unitIsWord: unitWord
  }));
};