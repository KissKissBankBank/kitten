import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import styled from 'styled-components';
import { pxToRem } from '../../../helpers/utils/typography';
import COLORS from '../../../constants/colors-config';
import { Step } from './components/step';
import { Title } from './components/title';
import { Link } from './components/link';
import { List } from './components/list';
import { ScreenConfig } from '../../../constants/screen-config';
import classNames from 'classnames';
export const STEP_CLASSNAME = 'VerticalStepper__step';
export const LINK_CLASSNAME = 'VerticalStepper__link';
export const VerticalStepper = _ref => {
  let {
    children,
    variant,
    className,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement(StyledNav, null, /*#__PURE__*/React.createElement("ul", _extends({
    role: "tablist",
    className: classNames('k-Steppers--VerticalStepper', className)
  }, props), children));
};
const StyledNav = styled.nav.withConfig({
  displayName: "vertical-stepper__StyledNav",
  componentId: "sc-1qjaek8-0"
})(["position:relative;padding:1px 0;.k-Steppers--VerticalStepper{margin:0;padding:0;margin-left:", ";list-style:none;:before{position:absolute;top:0;bottom:0;left:", ";z-index:-1;border-left:none;content:'';border-left:", " dashed ", ";}& li:not(:last-of-type){position:relative;&::after{content:'';position:absolute;left:", ";top:", ";background-color:", ";width:", ";height:100%;z-index:-1;@media (min-width:", "px){width:", ";left:", ";}}}li.k-Steppers--VerticalStepper__item--hasActiveLine:not(:last-of-type)::after{background-color:", ";}}"], pxToRem(-5), pxToRem(14), pxToRem(2), COLORS.line1, pxToRem(16), pxToRem(30), COLORS.line1, pxToRem(2), ScreenConfig.S.min, pxToRem(3), pxToRem(18.5), COLORS.primary1);
VerticalStepper.Step = Step;
VerticalStepper.Title = Title;
VerticalStepper.List = List;
VerticalStepper.Link = Link;