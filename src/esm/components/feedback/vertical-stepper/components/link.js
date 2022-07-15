import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["className"];
import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography';
import TYPOGRAPHY from '../../../../constants/typography-config';
import { ScreenConfig } from '../../../../constants/screen-config';
import COLORS from '../../../../constants/colors-config';
import { LINK_CLASSNAME } from '../index';
var StyledParagraph = styled.span.withConfig({
  displayName: "link__StyledParagraph",
  componentId: "sc-kwm1tk-0"
})(["margin:0;padding:0;line-height:1;.k-Steppers--VerticalStepper__link{", ";font-size:", ";line-height:normal;color:", ";text-decoration:none;transition:color 0.4s;@media (min-width:", "px){font-size:", ";}:before{padding:0 ", ";content:'\u25CF';font-size:", ";color:", ";}&:hover,&:focus,&:active{color:", ";}}"], TYPOGRAPHY.fontStyles['500'], stepToRem(-2), COLORS.primary1, ScreenConfig.S.min, stepToRem(-1), pxToRem(8), pxToRem(8), COLORS.font1, COLORS.primary3);
export var Link = function Link(_ref) {
  var className = _ref.className,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement(StyledParagraph, null, /*#__PURE__*/React.createElement("span", _extends({}, props, {
    className: classNames(LINK_CLASSNAME, 'k-Steppers--VerticalStepper__link', className)
  })));
};