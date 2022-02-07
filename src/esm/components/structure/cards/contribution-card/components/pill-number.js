import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import classNames from 'classnames';
import { PillNumberInput } from '../../../../form/pill-number-input';
export var PillNumber = function PillNumber(props) {
  return /*#__PURE__*/React.createElement(PillNumberInput, _extends({}, props, {
    className: classNames('k-ContributionCard__pillNumber', props.className)
  }));
};