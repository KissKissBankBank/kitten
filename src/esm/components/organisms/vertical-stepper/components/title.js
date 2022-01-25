import React from 'react';
import styled from 'styled-components';
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography';
import { ScreenConfig } from '../../../../constants/screen-config';
import TYPOGRAPHY from '../../../../constants/typography-config';
import classNames from 'classnames';
var StyledTitle = styled.p.withConfig({
  displayName: "title__StyledTitle",
  componentId: "sc-11r0jm-0"
})(["margin:0 0 ", ";", ";font-size:", ";line-height:1;@media (min-width:", "px){font-size:", ";}"], pxToRem(5), TYPOGRAPHY.fontStyles.bold, stepToRem(-2), ScreenConfig.S.min, stepToRem(-1));
export var Title = function Title(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return /*#__PURE__*/React.createElement(StyledTitle, {
    className: classNames('k-Steppers--VerticalStepper__title', className)
  }, children);
};