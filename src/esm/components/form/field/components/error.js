import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import classNames from 'classnames';
import { Text } from '../../../typography/text';
export const FieldError = _ref => {
  let {
    children,
    className,
    ...others
  } = _ref;
  return /*#__PURE__*/React.createElement(Text, _extends({
    tag: "p",
    color: "error",
    size: "micro",
    weight: "500",
    lineHeight: "normal",
    className: classNames(className, 'k-Field__error', 'k-u-margin-none k-u-margin-top-single')
  }, others), children);
};