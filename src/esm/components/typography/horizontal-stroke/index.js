import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import COLORS from '../../../constants/colors-config';
import { pxToRem } from '../../../helpers/utils/typography';
import classNames from 'classnames';
import { strokeModifierStylesWithoutMargin } from './common/stroke-modifier-styles';
export const MICRO = css(["width:", ";height:", ";"], pxToRem(15), pxToRem(2));
export const SMALL = css(["width:", ";height:", ";"], pxToRem(20), pxToRem(2));
export const MEDIUM = css(["width:", ";height:", ";"], pxToRem(30), pxToRem(4));
export const LARGE = css(["width:", ";height:", ";"], pxToRem(50), pxToRem(4));
export const HUGE = css(["width:", ";height:", ";"], pxToRem(100), pxToRem(6));
export const StyledHorizontalStroke = styled.div.withConfig({
  displayName: "horizontal-stroke__StyledHorizontalStroke",
  componentId: "sc-1ynlu5y-0"
})(["border:none;background:", ";&.k-HorizontalStroke--size--micro{", "}&.k-HorizontalStroke--size--small{", "}&.k-HorizontalStroke--size--medium{", "}&.k-HorizontalStroke--size--large{", "}&.k-HorizontalStroke--size--huge{", "}", ""], _ref => {
  let {
    color
  } = _ref;
  return color || COLORS.font1;
}, MICRO, SMALL, MEDIUM, LARGE, HUGE, strokeModifierStylesWithoutMargin('&.k-HorizontalStroke--modifier'));
export const HorizontalStroke = _ref2 => {
  let {
    className,
    style,
    size,
    modifier,
    customSize,
    color,
    ...props
  } = _ref2;

  const modifierClassName = () => {
    if (!modifier) return "k-HorizontalStroke--size--" + size;
    return "k-HorizontalStroke--modifier--" + modifier;
  };

  const customStyles = () => {
    if (!customSize) return;
    return {
      height: customSize && customSize.height,
      width: customSize && customSize.width
    };
  };

  return /*#__PURE__*/React.createElement(StyledHorizontalStroke, _extends({}, props, {
    className: classNames('k-HorizontalStroke', className, modifierClassName()),
    style: { ...customStyles(),
      ...style
    },
    color: color
  }));
};
HorizontalStroke.propTypes = {
  size: PropTypes.oneOf(['micro', 'small', 'medium', 'large', 'huge']),
  modifier: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'quaternary', 'quinary', 'senary', 'septenary']),
  customSize: PropTypes.shape({
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  }),
  color: PropTypes.string
};
HorizontalStroke.defaultProps = {
  size: 'medium',
  customSize: {
    width: null,
    height: null
  },
  color: COLORS.font1
};