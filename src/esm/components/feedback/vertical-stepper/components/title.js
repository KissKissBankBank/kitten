import React from 'react';
import styled from 'styled-components';
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography';
import { ScreenConfig } from '../../../../constants/screen-config';
import TYPOGRAPHY from '../../../../constants/typography-config';
import classNames from 'classnames';
const StyledTitle = styled.p.withConfig({
  displayName: "title__StyledTitle",
  componentId: "sc-1itzaq4-0"
})(["margin:0 0 ", ";", ";font-size:", ";line-height:1;@media (min-width:", "px){font-size:", ";}"], pxToRem(5), TYPOGRAPHY.fontStyles['700'], stepToRem(-2), ScreenConfig.S.min, stepToRem(-1));
export const Title = _ref => {
  let {
    className,
    children
  } = _ref;
  return /*#__PURE__*/React.createElement(StyledTitle, {
    className: classNames('k-Steppers--VerticalStepper__title', className)
  }, children);
};