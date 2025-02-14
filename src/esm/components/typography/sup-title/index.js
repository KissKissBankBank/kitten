import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { Text } from '../../typography/text';
export const SupTitle = props => /*#__PURE__*/React.createElement(Text, _extends({
  size: "small",
  lineHeight: "normal",
  transform: "uppercase",
  weight: "700"
}, props));
SupTitle.defaultProps = {
  children: 'Lorem ipsum'
};