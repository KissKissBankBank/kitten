import _extends from "@babel/runtime/helpers/esm/extends";
import React from 'react';
import { Text } from '../../../../components/atoms/typography/text';
export var SupTitle = function SupTitle(props) {
  return /*#__PURE__*/React.createElement(Text, _extends({
    size: "tiny",
    lineHeight: "normal",
    transform: "uppercase",
    weight: "bold"
  }, props));
};
SupTitle.defaultProps = {
  children: 'Lorem ipsum'
};