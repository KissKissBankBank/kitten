import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["unitWord"];
import React from 'react';
import { TextInput } from '../../../form/input/text-input';
export var TextInputWithUnit = function TextInputWithUnit(_ref) {
  var unitWord = _ref.unitWord,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement(TextInput, _extends({}, props, {
    has: "unit",
    unitIsWord: unitWord
  }));
};