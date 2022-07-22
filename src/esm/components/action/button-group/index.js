import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import styled from 'styled-components';
import { Button } from '../../action/button';
import { pxToRem } from '../../../helpers/utils/typography';
import classNames from 'classnames';
const StyledButtonGroup = styled.div.withConfig({
  displayName: "button-group__StyledButtonGroup",
  componentId: "sc-yndpz0-0"
})(["display:flex;justify-content:center;.k-ButtonGroup__button{position:relative;z-index:0;min-width:auto;width:auto;border-radius:0;&:not(:last-child){margin-right:", ";}&:first-child{border-top-left-radius:var(--border-radius-s);border-bottom-left-radius:var(--border-radius-s);}&:last-child{border-top-right-radius:var(--border-radius-s);border-bottom-right-radius:var(--border-radius-s);}&:active,&:hover{z-index:1;}&.k-ButtonGroup__button--isActive{z-index:2;}&:focus-visible{z-index:3;}}"], pxToRem(-1));
export const ButtonGroup = _ref => {
  let {
    className,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement(StyledButtonGroup, _extends({
    role: "group"
  }, props, {
    className: classNames('k-ButtonGroup', className)
  }));
};

const ButtonGroupButton = _ref2 => {
  let {
    className,
    active,
    ...props
  } = _ref2;
  return /*#__PURE__*/React.createElement(Button, _extends({}, props, {
    active: active,
    className: classNames('k-ButtonGroup__button', className, {
      'k-ButtonGroup__button--isActive': active
    })
  }));
};

ButtonGroup.Button = ButtonGroupButton;