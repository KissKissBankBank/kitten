import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import classNames from 'classnames';
import { Text } from '../../../../../components/atoms/typography/text';
export var Description = function Description(props) {
  return /*#__PURE__*/React.createElement(Text, _extends({
    tag: "p",
    color: "font1",
    weight: "light",
    size: "micro"
  }, props, {
    className: classNames('k-ContributionCard__description', props.className)
  }));
};