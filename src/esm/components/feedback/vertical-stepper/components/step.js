import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { pxToRem } from '../../../../helpers/utils/typography';
import COLORS from '../../../../constants/colors-config';
import { Status } from './status';
import classNames from 'classnames';
import { STEP_CLASSNAME, LINK_CLASSNAME } from '../index';
export const Step = _ref => {
  let {
    success,
    valid,
    error,
    waiting,
    disabled,
    statusProps,
    children,
    className,
    bridge,
    onClick,
    ...other
  } = _ref;
  return /*#__PURE__*/React.createElement(StyledItem, {
    className: classNames('k-Steppers--VerticalStepper__item', {
      'k-Steppers--VerticalStepper__item--hasActiveLine': success,
      'k-Steppers--VerticalStepper__item--bridge': bridge
    })
  }, /*#__PURE__*/React.createElement(StyledLink, _extends({
    as: other.href && !disabled ? 'a' : 'span',
    onClick: disabled ? null : onClick
  }, other), /*#__PURE__*/React.createElement(Status, _extends({
    success: success,
    valid: valid,
    error: error,
    waiting: waiting,
    disabled: disabled,
    bridge: bridge
  }, statusProps)), /*#__PURE__*/React.createElement("div", {
    className: classNames(STEP_CLASSNAME, 'k-Steppers--VerticalStepper__step--link--content', {
      'k-Steppers--VerticalStepper__step--link--content--disabled': disabled
    }, className)
  }, children)));
};
const StyledItem = styled.li.withConfig({
  displayName: "step__StyledItem",
  componentId: "sc-10gkb1o-0"
})(["padding:", " 0;&:first-of-type{margin-top:0;padding-top:0;}&:last-of-type{margin-bottom:0;padding-bottom:0;}& li:not(:last-of-type){margin:0 !important;&::after{display:none;}}&.k-Steppers--VerticalStepper__item--bridge{padding:", " 0;}"], pxToRem(15), pxToRem(8));
const StyledLink = styled.a.withConfig({
  displayName: "step__StyledLink",
  componentId: "sc-10gkb1o-1"
})(["display:inline-flex;align-items:center;padding-right:", ";", " .k-Steppers--VerticalStepper__step--link--content{display:flex;flex-direction:column;justify-content:center;flex:1;color:", ";&.k-Steppers--VerticalStepper__step--link--content--disabled{color:", ";}}"], pxToRem(10), _ref2 => {
  let {
    as,
    onClick
  } = _ref2;
  return (as === 'a' || onClick) && css(["cursor:pointer;text-decoration:none;.", "{transition:transform 0.4s;}.", "{transition:color 0.4s;}:hover,:focus,:active{.", "{transform:translateX(", ");}.", "{color:", ";}}"], STEP_CLASSNAME, LINK_CLASSNAME, STEP_CLASSNAME, pxToRem(5), LINK_CLASSNAME, COLORS.primary3);
}, COLORS.font1, COLORS.font2);
Step.propTypes = {
  href: PropTypes.string,
  valid: PropTypes.bool,
  success: PropTypes.bool,
  error: PropTypes.bool,
  waiting: PropTypes.bool,
  disabled: PropTypes.bool,
  bridge: PropTypes.bool
};
Step.defaultProps = {
  href: null,
  valid: false,
  success: false,
  error: false,
  waiting: false,
  disabled: false,
  bridge: false
};