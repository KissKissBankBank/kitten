import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import deprecated from 'prop-types-extra/lib/deprecated';
import COLORS from '../../../../constants/colors-config';
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography';
import TYPOGRAPHY from '../../../../constants/typography-config';
import styled from 'styled-components';
import { modifierStyles } from './helpers/modifier-styles';
import { ScreenConfig } from '../../../../constants/screen-config';
import classNames from 'classnames';
export var buttonModifiers = ['hydrogen', 'helium', 'lithium', 'beryllium', 'carbon', 'oxygen', 'copper', 'boron', 'neon', 'iron', 'social_facebook', 'social_twitter', 'social_linkedin', 'social_instagram', 'social_youtube', 'social_pinterest'];
export var buttonFitOptions = ['icon', 'min-width', 'content', 'fluid'];
export var buttonMobileFitOptions = [null].concat(buttonFitOptions);
export var buttonSizes = ['nano', 'micro', 'tiny', 'big', 'huge', 'giant', 'regular'];
export var buttonVariants = ['andromeda', 'orion'];
var StyledButton = styled.button.withConfig({
  displayName: "button__StyledButton",
  componentId: "no9p2t-0"
})(["position:relative;box-sizing:border-box;min-height:var(--Button-dimension);padding:var(--Button-padding);display:inline-flex;justify-content:center;align-items:center;gap:", ";", ";font-size:", ";color:", ";line-height:1.3;text-decoration:none;appearance:none;cursor:pointer;&:disabled{cursor:not-allowed;}&:hover{text-decoration:none;}&:focus{outline:", " solid ", ";outline-offset:", ";}&:focus:not(:focus-visible){outline-color:transparent;}&:focus-visible{outline-color:", ";}&.k-Button--nano{--Button-dimension:", ";--Button-min-width:", ";--Button-padding:0 ", ";font-size:", ";}&.k-Button--micro{--Button-dimension:", ";--Button-min-width:", ";--Button-padding:", " ", ";font-size:", ";}&.k-Button--tiny{--Button-dimension:", ";--Button-min-width:", ";--Button-padding:", " ", ";}&.k-Button--regular{--Button-dimension:", ";--Button-min-width:", ";--Button-padding:", " ", ";}&.k-Button--big{--Button-dimension:", ";@media (min-width:", "){--Button-min-width:", ";--Button-dimension:", ";--Button-padding:", " ", ";font-size:", ";}}&.k-Button--huge{--Button-dimension:", ";--Button-padding:", " ", ";@media (min-width:", "){--Button-min-width:", ";--Button-dimension:", ";--Button-padding:", " ", ";font-size:", ";}}&.k-Button--giant{--Button-dimension:", ";--Button-padding:", " ", ";@media (min-width:", "){--Button-min-width:", ";--Button-dimension:", ";font-size:", ";--Button-padding:", " ", ";}}&.k-Button--fit-min-width:not(.k-Button--fit-icon):not(.k-Button--fit-fluid){min-width:var(--Button-min-width);}&.k-Button--fit-icon{padding:0;overflow:hidden;width:var(--Button-dimension);height:var(--Button-dimension);}&.k-Button--fit-fluid{width:100%;}@media (max-width:", "){&[class*='k-Button--mobile-fit']:not(.k-Button--mobile-fit-none){min-width:initial !important;padding:var(--Button-padding);width:initial;height:initial;width:initial;&.k-Button--mobile-fit-min-width{min-width:var(--Button-min-width) !important;}&.k-Button--mobile-fit-icon{padding:0;overflow:hidden;width:var(--Button-dimension);height:var(--Button-dimension);}&.k-Button--mobile-fit-fluid{width:100%;}}}&.k-Button--hasBorderRadius{border-radius:var(--Button-border-radius);}&.k-Button--rounded{border-radius:50%;}&.k-Button--orion{border-radius:", ";@media (min-width:", "){border-radius:", ";}}", ""], pxToRem(10), TYPOGRAPHY.fontStyles.regular, stepToRem(-1), COLORS.font1, COLORS.primary4, pxToRem(2), pxToRem(2), COLORS.primary4, pxToRem(20), pxToRem(100), pxToRem(6), stepToRem(-2), pxToRem(30), pxToRem(130), pxToRem(5), pxToRem(10), stepToRem(-2), pxToRem(40), pxToRem(160), pxToRem(7), pxToRem(20), pxToRem(50), pxToRem(200), pxToRem(10), pxToRem(30), pxToRem(50), pxToRem(ScreenConfig.S.min), pxToRem(220), pxToRem(70), pxToRem(10), pxToRem(40), stepToRem(0), pxToRem(70), pxToRem(10), pxToRem(10), pxToRem(ScreenConfig.S.min), pxToRem(220), pxToRem(80), pxToRem(10), pxToRem(40), stepToRem(0), pxToRem(70), pxToRem(10), pxToRem(10), pxToRem(ScreenConfig.S.min), pxToRem(220), pxToRem(90), stepToRem(0), pxToRem(10), pxToRem(40), pxToRem(ScreenConfig.XS.max), pxToRem(6), pxToRem(ScreenConfig.S.min), pxToRem(8), function (_ref) {
  var modifier = _ref.modifier;
  return modifierStyles(modifier);
}); // const ForwardedButtonComponent = forwardRef((props, ref) => {
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
      tag = _ref2.tag,
      fit = _ref2.fit,
      mobileFit = _ref2.mobileFit,
      props = _objectWithoutProperties(_ref2, ["children", "modifier", "variant", "size", "className", "rounded", "fluid", "icon", "borderRadius", "tag", "fit", "mobileFit"]);

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

  return /*#__PURE__*/React.createElement(StyledButton, _extends({
    className: classNames('k-Button', className, "k-Button--".concat(actualSize), "k-Button--".concat(modifier), "k-Button--".concat(variant), "k-Button--fit-".concat(fit), "k-Button--mobile-fit-".concat(mobileFit || 'none'), {
      'k-Button--fit-fluid': fluid && !icon,
      'k-Button--fit-icon': icon && !fluid,
      'k-Button--rounded': rounded,
      'k-Button--hasBorderRadius': borderRadius > 0
    }),
    style: {
      '--Button-border-radius': pxToRem(borderRadius)
    },
    type: "button",
    as: tag,
    modifier: modifier
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
  size: PropTypes.oneOf(buttonSizes),
  fit: PropTypes.oneOf(buttonFitOptions),
  mobileFit: PropTypes.oneOf(buttonMobileFitOptions),
  modifier: PropTypes.oneOf(buttonModifiers),
  variant: PropTypes.oneOf(buttonVariants)
};
Button.defaultProps = {
  tag: 'button',
  fluid: false,
  icon: false,
  rounded: false,
  borderRadius: 0,
  size: 'regular',
  modifier: 'hydrogen',
  variant: 'andromeda',
  fit: 'min-width',
  mobileFit: null
};