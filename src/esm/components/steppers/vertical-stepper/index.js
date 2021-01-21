import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { pxToRem } from '../../../helpers/utils/typography';
import COLORS from '../../../constants/colors-config';
import { Step } from './components/step';
import { Title } from './components/title';
import { Link } from './components/link';
import { List } from './components/list';
import { ScreenConfig } from '../../../constants/screen-config';
import classNames from 'classnames';
export var STEP_CLASSNAME = 'VerticalStepper__step';
export var LINK_CLASSNAME = 'VerticalStepper__link';
export var VerticalStepper = function VerticalStepper(_ref) {
  var children = _ref.children,
      variant = _ref.variant,
      props = _objectWithoutProperties(_ref, ["children", "variant"]);

  return /*#__PURE__*/React.createElement(StyledNav, {
    variant: variant
  }, /*#__PURE__*/React.createElement("ul", _extends({
    role: "tablist",
    className: classNames('k-Steppers--VerticalStepper', "k-Steppers--VerticalStepper__".concat(variant))
  }, props), children));
};
var StyledNav = styled.nav.withConfig({
  displayName: "vertical-stepper__StyledNav",
  componentId: "sc-1uso67w-0"
})(["position:relative;padding:1px 0;.k-Steppers--VerticalStepper{margin:0;padding:0;list-style:none;:before{position:absolute;top:0;bottom:0;left:", ";z-index:-1;content:'';border-left:", " dashed ", ";}&.k-Steppers--VerticalStepper__orion{margin-left:", ";:before{border-left:none;}li:not(:last-of-type){position:relative;&::after{content:'';position:absolute;left:", ";top:", ";background-color:", ";width:", ";height:100%;z-index:-1;@media (min-width:", "px){width:", ";left:", ";}}}li.k-Steppers--VerticalStepper__item--hasActiveLine:not(:last-of-type)::after{background-color:", ";}}}"], pxToRem(14), pxToRem(2), COLORS.line1, pxToRem(-5), pxToRem(16), pxToRem(30), COLORS.line1, pxToRem(2), ScreenConfig.S.min, pxToRem(3), pxToRem(18.5), COLORS.primary1);
VerticalStepper.Step = Step;
VerticalStepper.Title = Title;
VerticalStepper.List = List;
VerticalStepper.Link = Link;
VerticalStepper.propTypes = {
  variant: PropTypes.oneOf(['andromeda', 'orion'])
};
VerticalStepper.defaultProps = {
  variant: 'andromeda'
};