import _extends from "@babel/runtime/helpers/esm/extends";
import React from 'react';
import classNames from 'classnames';
import { Button } from '../../../../components/buttons/button';
export var Action = function Action(props) {
  return /*#__PURE__*/React.createElement(Button, _extends({
    borderRadius: 4,
    type: "submit"
  }, props, {
    className: classNames('k-ContributionCard__action', props.className)
  }));
};