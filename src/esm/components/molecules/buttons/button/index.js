import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import deprecated from 'prop-types-extra/lib/deprecated';
import styled, { css } from 'styled-components';
import COLORS from '../../../../constants/colors-config';
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography';
import TYPOGRAPHY from '../../../../constants/typography-config';
import { modifierStyles } from './helpers/modifier-styles';
import { ScreenConfig } from '../../../../constants/screen-config';
import classNames from 'classnames';
var StyledButton = styled.button.withConfig({
  displayName: "button__StyledButton",
  componentId: "no9p2t-0"
})(["display:inline-flex;align-items:center;justify-content:center;position:relative;box-sizing:border-box;", ";font-size:", ";color:", ";line-height:1.3;text-decoration:none;appearance:none;cursor:pointer;&:disabled,&.k-Button--disabled{cursor:not-allowed;}&:hover{text-decoration:none;}>:nth-child(n){margin-right:", ";text-align:left;}>:last-child{margin-right:0;}&:focus{outline:", " solid ", ";outline-offset:", ";}&:focus:not(:focus-visible){outline-color:transparent;}&:focus-visible{outline-color:", ";}&.k-Button--hasBorderRadius{border-radius:var(--border-radius);}", " &.k-Button--nano{", "}&.k-Button--micro{", "}&.k-Button--tiny{", "}&.k-Button--big{", "}&.k-Button--huge{", "}&.k-Button--giant{", "}&.k-Button--hasIcon:not(.k-Button--fluid){", " &.k-Button--nano{", "}&.k-Button--micro{", "}&.k-Button--tiny{", "}&.k-Button--big{", "}&.k-Button--huge{", "}&.k-Button--giant{", "}}&.k-Button--fluid{", "}&.k-Button--rounded{", "}&.k-Button--orion{border-radius:", ";@media (min-width:", "){border-radius:", ";}}", ""], TYPOGRAPHY.fontStyles.regular, stepToRem(-1), COLORS.font1, pxToRem(10), COLORS.primary4, pxToRem(2), pxToRem(2), COLORS.primary4, function () {
  return DEFAULT;
}, function () {
  return NANO;
}, function () {
  return MICRO;
}, function () {
  return TINY;
}, function () {
  return BIG;
}, function () {
  return HUGE;
}, function () {
  return GIANT;
}, function () {
  return ICON;
}, function () {
  return ICON_NANO;
}, function () {
  return ICON_MICRO;
}, function () {
  return ICON_TINY;
}, function () {
  return ICON_BIG;
}, function () {
  return ICON_HUGE;
}, function () {
  return ICON_GIANT;
}, function () {
  return FLUID;
}, function () {
  return ROUNDED;
}, pxToRem(6), pxToRem(ScreenConfig.S.min), pxToRem(8), function (_ref) {
  var modifier = _ref.modifier;
  return modifierStyles(modifier);
});
export var FLUID = css(["min-width:initial;width:100%;"]);
export var ROUNDED = css(["border-radius:50%;"]);
export var DEFAULT = css(["min-width:", ";min-height:", ";padding:", " ", ";font-size:", ";@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){width:", ";height:", ";}"], pxToRem(200), pxToRem(50), pxToRem(10), pxToRem(30), stepToRem(-1), pxToRem(200), pxToRem(50));
export var NANO = css(["min-width:", ";min-height:", ";padding:0 ", ";font-size:", ";@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){width:", ";height:", ";}"], pxToRem(100), pxToRem(20), pxToRem(6), stepToRem(-2), pxToRem(100), pxToRem(20));
export var MICRO = css(["min-width:", ";min-height:", ";padding:", " ", ";font-size:", ";@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){width:", ";height:", ";}"], pxToRem(130), pxToRem(30), pxToRem(5), pxToRem(10), stepToRem(-2), pxToRem(100), pxToRem(20));
export var TINY = css(["min-width:", ";min-height:", ";padding:", " ", ";font-size:", ";@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){width:", ";height:", ";}"], pxToRem(160), pxToRem(40), pxToRem(7), pxToRem(20), stepToRem(-1), pxToRem(160), pxToRem(40));
export var BIG = css(["@media (min-width:", "){min-width:", ";min-height:", ";padding:", " ", ";font-size:", ";}@media screen and (min-width:", ") and (-ms-high-contrast:active),(-ms-high-contrast:none){width:", ";height:", ";}"], pxToRem(ScreenConfig.S.min), pxToRem(220), pxToRem(70), pxToRem(10), pxToRem(40), stepToRem(0), pxToRem(ScreenConfig.S.min), pxToRem(220), pxToRem(70));
export var HUGE = css(["min-height:", ";font-size:", ";padding:", " ", ";@media (min-width:", "px){min-width:", ";min-height:", ";font-size:", ";padding:", " ", ";}@media screen and (min-width:", ") and (-ms-high-contrast:active),(-ms-high-contrast:none){width:", ";height:", ";}"], pxToRem(70), stepToRem(-1), pxToRem(10), pxToRem(10), ScreenConfig.M.min, pxToRem(220), pxToRem(80), stepToRem(0), pxToRem(10), pxToRem(40), pxToRem(ScreenConfig.M.min), pxToRem(220), pxToRem(80));
export var GIANT = css(["min-height:", ";font-size:", ";padding:", " ", ";@media (min-width:", "px){min-width:", ";min-height:", ";font-size:", ";padding:", " ", ";}@media screen and (min-width:", ") and (-ms-high-contrast:active),(-ms-high-contrast:none){width:", ";height:", ";}"], pxToRem(70), stepToRem(-1), pxToRem(10), pxToRem(10), ScreenConfig.M.min, pxToRem(220), pxToRem(90), stepToRem(0), pxToRem(10), pxToRem(40), pxToRem(ScreenConfig.M.min), pxToRem(220), pxToRem(90));
export var ICON = css(["min-width:initial;min-height:initial;width:", ";height:", ";padding:0;@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){width:", ";min-width:0;min-height:0;}"], pxToRem(50), pxToRem(50), pxToRem(50));
export var ICON_NANO = css(["width:", ";height:", ";@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){width:", ";}"], pxToRem(20), pxToRem(20), pxToRem(20));
export var ICON_MICRO = css(["width:", ";height:", ";@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){width:", ";}"], pxToRem(30), pxToRem(30), pxToRem(30));
export var ICON_TINY = css(["width:", ";height:", ";@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){width:", ";}"], pxToRem(40), pxToRem(40), pxToRem(40));
export var ICON_BIG = css(["@media (min-width:", "){min-width:0;min-height:0;padding:0;width:", ";height:", ";}@media screen and (min-width:", ") and (-ms-high-contrast:active),(-ms-high-contrast:none){width:", ";}"], pxToRem(ScreenConfig.S.min), pxToRem(70), pxToRem(70), pxToRem(ScreenConfig.S.min), pxToRem(70));
export var ICON_HUGE = css(["min-width:initial;width:", ";height:", ";@media (min-width:", "){min-width:initial;width:", ";height:", ";}@media screen and (min-width:", ") and (-ms-high-contrast:active),(-ms-high-contrast:none){width:", ";}"], pxToRem(70), pxToRem(70), pxToRem(ScreenConfig.M.min), pxToRem(80), pxToRem(80), pxToRem(ScreenConfig.M.min), pxToRem(80));
export var ICON_GIANT = css(["min-width:initial;width:", ";height:", ";@media (min-width:", "){min-width:initial;width:", ";height:", ";}@media screen and (min-width:", ") and (-ms-high-contrast:active),(-ms-high-contrast:none){width:", ";}"], pxToRem(70), pxToRem(70), pxToRem(ScreenConfig.M.min), pxToRem(90), pxToRem(90), pxToRem(ScreenConfig.M.min), pxToRem(90)); // const ForwardedButtonComponent = forwardRef((props, ref) => {
//   return <button ref={ref} {...props}/>
// })

export var Button = function Button(_ref2) {
  var children = _ref2.children,
      modifier = _ref2.modifier,
      variant = _ref2.variant,
      size = _ref2.size,
      className = _ref2.className,
      rounded = _ref2.rounded,
      fluid = _ref2.fluid,
      icon = _ref2.icon,
      borderRadius = _ref2.borderRadius,
      disabled = _ref2.disabled,
      tag = _ref2.tag,
      as = _ref2.as,
      props = _objectWithoutProperties(_ref2, ["children", "modifier", "variant", "size", "className", "rounded", "fluid", "icon", "borderRadius", "disabled", "tag", "as"]);

  var actualSize = function () {
    switch (true) {
      case !!size:
        return size;

      case props.nano:
        return 'nano';

      case props.micro:
        return 'micro';

      case props.tiny:
        return 'tiny';

      case props.big:
        return 'big';

      case props.huge:
        return 'huge';

      case props.giant:
        return 'giant';

      default:
        return 'regular';
    }
  }();

  var internalTag = as || tag;
  return /*#__PURE__*/React.createElement(StyledButton, _extends({
    className: classNames('k-Button', className, "k-Button--".concat(actualSize), "k-Button--".concat(modifier), "k-Button--".concat(variant), {
      'k-Button--disabled': disabled,
      'k-Button--fluid': fluid,
      'k-Button--hasIcon': icon,
      'k-Button--rounded': rounded,
      'k-Button--hasBorderRadius': borderRadius > 0
    }),
    style: {
      '--border-radius': pxToRem(borderRadius)
    },
    modifier: modifier,
    type: "button",
    as: internalTag,
    disabled: internalTag === 'button' ? disabled : null
  }, props), children);
};
Button.propTypes = {
  tag: PropTypes.string,
  borderRadius: PropTypes.number,
  nano: deprecated(PropTypes.bool, 'Use `size` prop instead.'),
  micro: deprecated(PropTypes.bool, 'Use `size` prop instead.'),
  tiny: deprecated(PropTypes.bool, 'Use `size` prop instead.'),
  big: deprecated(PropTypes.bool, 'Use `size` prop instead.'),
  huge: deprecated(PropTypes.bool, 'Use `size` prop instead.'),
  giant: deprecated(PropTypes.bool, 'Use `size` prop instead.'),
  fluid: PropTypes.bool,
  icon: PropTypes.bool,
  rounded: PropTypes.bool,
  size: PropTypes.oneOf(['nano', 'micro', 'tiny', 'big', 'huge', 'giant', 'regular']),
  modifier: PropTypes.oneOf(['hydrogen', 'helium', 'lithium', 'beryllium', 'carbon', 'oxygen', 'copper', 'boron', 'neon', 'iron', 'calcium', 'social_facebook', 'social_twitter', 'social_linkedin', 'social_instagram', 'social_youtube', 'social_pinterest']),
  variant: PropTypes.oneOf(['andromeda', 'orion'])
};
Button.defaultProps = {
  tag: 'button',
  fluid: false,
  icon: false,
  rounded: false,
  borderRadius: 0,
  size: 'regular',
  modifier: 'hydrogen',
  variant: 'andromeda'
};