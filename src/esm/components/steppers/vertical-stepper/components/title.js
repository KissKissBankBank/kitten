import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography';
import { ScreenConfig } from '../../../../constants/screen-config';
import TYPOGRAPHY from '../../../../constants/typography-config';
import classNames from 'classnames';
var StyledTitle = styled.p.withConfig({
  displayName: "title__StyledTitle",
  componentId: "zdw2ns-0"
})(["margin:0;", ";font-size:", ";line-height:normal;&.k-Stepepers-VerticalStepper__title--orion{font-size:", ";font-weight:bold;line-height:1;margin-bottom:", ";@media (min-width:", "px){font-size:", ";}}"], TYPOGRAPHY.fontStyles.regular, stepToRem(0), stepToRem(-2), pxToRem(5), ScreenConfig.S.min, stepToRem(-1));
export var Title = function Title(_ref) {
  var variant = _ref.variant,
      className = _ref.className,
      children = _ref.children;
  return /*#__PURE__*/React.createElement(StyledTitle, {
    className: classNames("k-Stepepers-VerticalStepper__title--".concat(variant), className)
  }, children);
};
Title.protoTypes = {
  variant: PropTypes.oneOf(['andromeda', 'orion'])
};
Title.defaultProps = {
  variant: 'andromeda'
};