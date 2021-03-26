import _extends from "@babel/runtime/helpers/esm/extends";
import React from 'react';
import { Text } from '../../../components/typography/text';
export var SupTitle = function SupTitle(textProps) {
  return /*#__PURE__*/React.createElement(Text, _extends({
    size: "tiny",
    lineHeigth: "normal",
    transform: "uppercase",
    weight: "bold"
  }, textProps));
};
SupTitle.defaultProps = {
  children: 'Lorem ipsum'
};