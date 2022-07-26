import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';
import { pxToRem, stepToRem } from '../../../helpers/utils/typography';
import TYPOGRAPHY from '../../../constants/typography-config';
import COLORS from '../../../constants/colors-config';
const StyledTagButton = styled.button.withConfig({
  displayName: "tag-button__StyledTagButton",
  componentId: "sc-9e8qw0-0"
})(["min-height:", ";min-width:", ";padding:0 ", ";font-size:", ";display:inline-flex;align-items:center;justify-content:center;position:relative;border-radius:var(--border-radius-s);border-width:var(--border-width);border-style:solid;transition:background-color 0.2s,color 0.2s,border-color 0.2s;box-sizing:border-box;", ";font-size:", ";color:", ";line-height:1.3;text-decoration:none;appareance:none;cursor:pointer;&:disabled{cursor:not-allowed;}> :nth-child(n){margin-right:", ";text-align:left;}background-color:", ";border:var(--border);color:", ";&:hover,&:focus{border:var(--border-hover-primary);background-color:", ";color:", ";}&:active{background-color:", ";border:var(--border-active-primary);color:", ";}&.k-Buttons__tagButton--small{min-height:", ";min-width:", ";padding:0 ", ";font-size:", ";}&.k-Buttons__tagButton--large{min-height:", ";min-width:", ";padding:0 ", ";font-size:", ";}&.k-Buttons__tagButton--huge{min-height:", ";min-width:", ";padding:0 ", ";font-size:", ";}&:disabled{cursor:not-allowed;border:var(--border-disabled);background-color:", ";color:", ";}&.k-Buttons__tagButton--active{background-color:", ";border:var(--border-active-primary);color:", ";&:hover,&:focus,&:active{border-color:var(--color-primary-700);}}"], pxToRem(40), pxToRem(60), pxToRem(20), stepToRem(-2), TYPOGRAPHY.fontStyles['500'], stepToRem(-2), COLORS.font1, pxToRem(10), COLORS.background1, COLORS.font1, COLORS.background1, COLORS.font1, COLORS.background1, COLORS.font1, pxToRem(30), pxToRem(60), pxToRem(20), stepToRem(-2), pxToRem(50), pxToRem(80), pxToRem(30), stepToRem(-1), pxToRem(60), pxToRem(80), pxToRem(30), stepToRem(-1), COLORS.line1, COLORS.font3, COLORS.primary5, COLORS.font1);
export const TagButton = _ref => {
  let {
    children,
    active,
    className,
    size,
    tag,
    as,
    ...props
  } = _ref;

  const others = (_ref2 => {
    let {
      modifier,
      icon,
      ...rest
    } = _ref2;
    return rest;
  })(props);

  return /*#__PURE__*/React.createElement(StyledTagButton, _extends({
    type: !tag && !as ? 'button' : null,
    className: classNames('k-Buttons__tagButton', className, "k-Buttons__tagButton--" + size, {
      'k-Buttons__tagButton--active': active
    }),
    as: tag || as
  }, others), children);
};
TagButton.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large', 'huge']),
  active: PropTypes.bool
};
TagButton.defaultProps = {
  children: 'Tag',
  size: 'medium',
  active: false
};