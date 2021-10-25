import _extends from "@babel/runtime/helpers/esm/extends";
import React from 'react';
import classNames from 'classnames';
import { Text } from '../../../../../components/atoms/typography/text';
export var Amount = function Amount(props) {
  return /*#__PURE__*/React.createElement(Text, _extends({
    color: "font1",
    weight: "light",
    size: "tiny"
  }, props, {
    className: classNames('k-RewardSummaryCard__amount', props.className)
  }));
};