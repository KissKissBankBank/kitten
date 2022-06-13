import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["className", "style", "size", "modifier", "customSize", "color"];
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import COLORS from '../../../constants/colors-config';
import { pxToRem } from '../../../helpers/utils/typography';
import classNames from 'classnames';
import { strokeModifierStylesWithoutMargin } from './common/stroke-modifier-styles';
export var MICRO = css(["width:", ";height:", ";"], pxToRem(15), pxToRem(2));
export var SMALL = css(["width:", ";height:", ";"], pxToRem(20), pxToRem(2));
export var MEDIUM = css(["width:", ";height:", ";"], pxToRem(30), pxToRem(4));
export var LARGE = css(["width:", ";height:", ";"], pxToRem(50), pxToRem(4));
export var HUGE = css(["width:", ";height:", ";"], pxToRem(100), pxToRem(6));
export var StyledHorizontalStroke = styled.div.withConfig({
  displayName: "horizontal-stroke__StyledHorizontalStroke",
  componentId: "sc-1ynlu5y-0"
})(["border:none;background:", ";&.k-HorizontalStroke--size--micro{", "}&.k-HorizontalStroke--size--small{", "}&.k-HorizontalStroke--size--medium{", "}&.k-HorizontalStroke--size--large{", "}&.k-HorizontalStroke--size--huge{", "}", ""], function (_ref) {
  var color = _ref.color;
  return color || COLORS.font1;
}, MICRO, SMALL, MEDIUM, LARGE, HUGE, strokeModifierStylesWithoutMargin('&.k-HorizontalStroke--modifier'));
export var HorizontalStroke = function HorizontalStroke(_ref2) {
  var className = _ref2.className,
      style = _ref2.style,
      size = _ref2.size,
      modifier = _ref2.modifier,
      customSize = _ref2.customSize,
      color = _ref2.color,
      props = _objectWithoutPropertiesLoose(_ref2, _excluded);

  var modifierClassName = function modifierClassName() {
    if (!modifier) return "k-HorizontalStroke--size--" + size;
    return "k-HorizontalStroke--modifier--" + modifier;
  };

  var customStyles = function customStyles() {
    if (!customSize) return;
    return {
      height: customSize && customSize.height,
      width: customSize && customSize.width
    };
  };

  return /*#__PURE__*/React.createElement(StyledHorizontalStroke, _extends({}, props, {
    className: classNames('k-HorizontalStroke', className, modifierClassName()),
    style: _extends({}, customStyles(), style),
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