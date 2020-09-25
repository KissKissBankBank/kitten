import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import COLORS from '../../../constants/colors-config';
import { pxToRem } from '../../../helpers/utils/typography';
import classNames from 'classnames';
import { strokeModifierStylesWithoutMargin } from './common/stroke-modifier-styles';
export var MICRO = css(["width:", ";height:", ";"], pxToRem(15), pxToRem(2));
export var TINY = css(["width:", ";height:", ";"], pxToRem(20), pxToRem(2));
export var DEFAULT = css(["width:", ";height:", ";"], pxToRem(30), pxToRem(4));
export var BIG = css(["width:", ";height:", ";"], pxToRem(50), pxToRem(4));
export var HUGE = css(["width:", ";height:", ";"], pxToRem(100), pxToRem(6));
export var StyledHorizontalStroke = styled.div.withConfig({
  displayName: "horizontal-stroke__StyledHorizontalStroke",
  componentId: "sc-15k7x5m-0"
})(["border:none;background:", ";&.k-HorizontalStroke--size--micro{", "}&.k-HorizontalStroke--size--tiny{", "}&.k-HorizontalStroke--size--default{", "}&.k-HorizontalStroke--size--big{", "}&.k-HorizontalStroke--size--huge{", "}", ""], function (_ref) {
  var color = _ref.color;
  return color || COLORS.font1;
}, MICRO, TINY, DEFAULT, BIG, HUGE, strokeModifierStylesWithoutMargin('&.k-HorizontalStroke--modifier'));
export var HorizontalStroke = function HorizontalStroke(_ref2) {
  var className = _ref2.className,
      style = _ref2.style,
      size = _ref2.size,
      modifier = _ref2.modifier,
      customSize = _ref2.customSize,
      color = _ref2.color,
      props = _objectWithoutProperties(_ref2, ["className", "style", "size", "modifier", "customSize", "color"]);

  var modifierClassName = function modifierClassName() {
    if (!modifier) return "k-HorizontalStroke--size--".concat(size);
    return "k-HorizontalStroke--modifier--".concat(modifier);
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
  size: PropTypes.oneOf(['micro', 'tiny', 'default', 'big', 'huge']),
  modifier: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'quaternary', 'quinary', 'senary', 'septenary']),
  customSize: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number
  }),
  color: PropTypes.string
};
HorizontalStroke.defaultProps = {
  size: 'default',
  customSize: {
    width: null,
    height: null
  },
  color: COLORS.font1
};