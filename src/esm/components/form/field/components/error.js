import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import { Text } from '../../../typography/text';
export var FieldError = function FieldError(_ref) {
  var children = _ref.children,
      others = _objectWithoutProperties(_ref, ["children"]);

  return /*#__PURE__*/React.createElement("div", {
    className: "k-u-margin-top-single"
  }, /*#__PURE__*/React.createElement(Text, _extends({
    tag: "p",
    color: "error",
    size: "micro",
    weight: "regular",
    lineHeight: "normal",
    style: {
      margin: 0
    }
  }, others), children));
};