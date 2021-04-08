import _extends from "@babel/runtime/helpers/esm/extends";
import React from 'react';
import classNames from 'classnames';
import { Text } from '../../../typography/text';
export var Amount = function Amount(props) {
  return /*#__PURE__*/React.createElement(Text, _extends({
    tag: "p",
    weight: "bold",
    lineHeight: "1"
  }, props, {
    className: classNames('k-BackingCard__amount', 'k-BackingCard__drawer', props.className)
  }));
};