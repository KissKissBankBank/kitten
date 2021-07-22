import _extends from "@babel/runtime/helpers/esm/extends";
import React from 'react';
import classNames from 'classnames';
import { Text } from '../../../../../components/atoms/typography/text';
export var Title = function Title(props) {
  return /*#__PURE__*/React.createElement(Text, _extends({
    color: "font1",
    weight: "bold"
  }, props, {
    className: classNames('k-ContributionCard__title', props.className)
  }));
};