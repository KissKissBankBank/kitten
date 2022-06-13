import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["children", "className"];
import React from 'react';
import classNames from 'classnames';
import { Text } from '../../../typography/text';
export var FieldError = function FieldError(_ref) {
  var children = _ref.children,
      className = _ref.className,
      others = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement(Text, _extends({
    tag: "p",
    color: "error",
    size: "micro",
    weight: "500",
    lineHeight: "normal",
    className: classNames(className, 'k-Field__error', 'k-u-margin-none k-u-margin-top-single')
  }, others), children);
};