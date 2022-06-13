import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["children", "modifier", "size", "className", "rounded", "borderRadius", "disabled", "tag", "as", "fit", "mobileFit", "active", "style", "hasBullet", "bulletColor"];
import React from 'react';
import PropTypes from 'prop-types';
import COLORS from '../../../constants/colors-config';
import { pxToRem, stepToRem } from '../../../helpers/utils/typography';
import TYPOGRAPHY from '../../../constants/typography-config';
import styled from 'styled-components';
import { modifierStyles } from './helpers/modifier-styles';
import { ScreenConfig } from '../../../constants/screen-config';
import classNames from 'classnames';
export var buttonModifiers = ['hydrogen', 'helium', 'lithium', 'beryllium', 'copper', 'boron', 'scandium', 'neon', 'iron', 'krypton'];
export var buttonFitOptions = ['icon', 'min-width', 'content', 'fluid'];
export var buttonMobileFitOptions = [null].concat(buttonFitOptions);
export var buttonSizes = ['nano', 'micro', 'small', 'medium', 'large', 'huge', 'giant'];
var StyledButton = styled.button.withConfig({
  displayName: "button__StyledButton",
  componentId: "sc-dl59vq-0"
})(["--Button-border-radius:var(--border-radius-s);&.k-Button--rounded{--Button-border-radius:var(--border-radius-rounded);}position:relative;box-sizing:border-box;min-height:var(--Button-dimension);padding:var(--Button-padding);display:inline-flex;justify-content:center;align-items:center;gap:", ";", ";font-size:", ";color:", ";line-height:1.3;text-decoration:none;appearance:none;cursor:pointer;border-radius:var(--Button-border-radius,0);min-width:0;svg{flex:0 0 auto;}&:disabled,&.k-Button--disabled{cursor:not-allowed;}&:hover{text-decoration:none;}&:focus-visible{outline:auto;}&.k-Button--nano{--Button-dimension:", ";--Button-min-width:", ";--Button-padding:0 ", ";font-size:", ";}&.k-Button--micro{--Button-dimension:", ";--Button-min-width:", ";--Button-padding:", " ", ";font-size:", ";}&.k-Button--small{--Button-dimension:", ";--Button-min-width:", ";--Button-padding:", " ", ";}&.k-Button--medium{--Button-dimension:", ";--Button-min-width:", ";--Button-padding:", " ", ";}&.k-Button--large{--Button-dimension:", ";--Button-min-width:", ";--Button-padding:", " ", ";@media (min-width:", "){--Button-min-width:", ";--Button-dimension:", ";--Button-padding:", " ", ";font-size:", ";}}&.k-Button--huge{--Button-dimension:", ";--Button-min-width:", ";--Button-padding:", " ", ";@media (min-width:", "){--Button-min-width:", ";--Button-dimension:", ";--Button-padding:", " ", ";font-size:", ";}}&.k-Button--giant{--Button-dimension:", ";--Button-min-width:", ";--Button-padding:", " ", ";@media (min-width:", "){--Button-min-width:", ";--Button-dimension:", ";--Button-padding:", " ", ";font-size:", ";}}&.k-Button--fit-min-width{min-width:var(--Button-min-width);}&.k-Button--fit-icon{padding:0;overflow:hidden;width:var(--Button-dimension);height:var(--Button-dimension);}&.k-Button--fit-fluid{width:100%;}@media (max-width:", "){&[class*='k-Button--mobile-fit']{min-width:initial !important;padding:var(--Button-padding);width:initial;height:initial;width:initial;&.k-Button--mobile-fit-min-width{min-width:var(--Button-min-width) !important;}&.k-Button--mobile-fit-icon{padding:0;overflow:hidden;width:var(--Button-dimension);height:var(--Button-dimension);}&.k-Button--mobile-fit-fluid{width:100%;}}}&.k-Button--hasBullet{--Button-bullet-radius:", ";--Math-Cos45:0.7071;--Button-radius:var(--Button-border-radius,0);--Button-bullet-distance:calc( var(--Button-radius) - (var(--Button-radius) * var(--Math-Cos45)) - var(--Button-bullet-radius) );&::after{content:'';position:absolute;background-color:var(--Button-bullet-color,var(--color-primary-500));width:", ";height:", ";border-radius:", ";border:", " solid var(--color-grey-000);right:var(--Button-bullet-distance);top:var(--Button-bullet-distance);}&.k-Button--fit-icon{overflow:initial;}&.k-Button--rounded{--Button-radius:calc(var(--Button-dimension) / 2);}}", ""], pxToRem(10), TYPOGRAPHY.fontStyles['500'], stepToRem(-1), COLORS.font1, pxToRem(20), pxToRem(100), pxToRem(6), stepToRem(-2), pxToRem(30), pxToRem(130), pxToRem(5), pxToRem(10), stepToRem(-2), pxToRem(40), pxToRem(160), pxToRem(7), pxToRem(20), pxToRem(50), pxToRem(200), pxToRem(10), pxToRem(30), pxToRem(50), pxToRem(200), pxToRem(10), pxToRem(30), pxToRem(ScreenConfig.S.min), pxToRem(220), pxToRem(70), pxToRem(10), pxToRem(40), stepToRem(0), pxToRem(70), pxToRem(200), pxToRem(10), pxToRem(10), pxToRem(ScreenConfig.S.min), pxToRem(220), pxToRem(80), pxToRem(10), pxToRem(40), stepToRem(0), pxToRem(70), pxToRem(200), pxToRem(10), pxToRem(10), pxToRem(ScreenConfig.S.min), pxToRem(220), pxToRem(90), pxToRem(10), pxToRem(40), stepToRem(0), pxToRem(ScreenConfig.XS.max), pxToRem(3 + 4), pxToRem(8), pxToRem(8), pxToRem(8), pxToRem(3), function (_ref) {
  var modifier = _ref.modifier;
  return modifierStyles(modifier);
}); // const ForwardedButtonComponent = forwardRef((props, ref) => {
//   return <button ref={ref} {...props}/>
// })

export var Button = function Button(_ref2) {
  var _classNames;

  var children = _ref2.children,
      modifier = _ref2.modifier,
      size = _ref2.size,
      className = _ref2.className,
      rounded = _ref2.rounded,
      borderRadius = _ref2.borderRadius,
      disabled = _ref2.disabled,
      tag = _ref2.tag,
      as = _ref2.as,
      fit = _ref2.fit,
      mobileFit = _ref2.mobileFit,
      active = _ref2.active,
      style = _ref2.style,
      hasBullet = _ref2.hasBullet,
      bulletColor = _ref2.bulletColor,
      props = _objectWithoutPropertiesLoose(_ref2, _excluded);

  var internalModifier = active ? 'lithium' : modifier;
  var internalTag = as || tag;
  return /*#__PURE__*/React.createElement(StyledButton, _extends({
    className: classNames('k-Button', className, "k-Button--" + (size || 'regular'), "k-Button--" + (internalModifier || 'hydrogen'), "k-Button--fit-" + (fit || 'min-width'), (_classNames = {}, _classNames["k-Button--mobile-fit-" + mobileFit] = !!mobileFit, _classNames['k-Button--disabled'] = disabled, _classNames['k-Button--rounded'] = rounded, _classNames['k-Button--hasBullet'] = hasBullet, _classNames)),
    modifier: internalModifier,
    style: _extends({}, style, {
      '--Button-border-radius': borderRadius != null ? pxToRem(borderRadius) : null,
      '--Button-bullet-color': hasBullet && bulletColor ? bulletColor : null
    }),
    type: internalTag === 'button' ? 'button' : null,
    as: internalTag,
    disabled: internalTag === 'button' ? disabled : null
  }, props), children);
};
Button.propTypes = {
  tag: PropTypes.string,
  borderRadius: PropTypes.number,
  rounded: PropTypes.bool,
  size: PropTypes.oneOf(buttonSizes),
  fit: PropTypes.oneOf(buttonFitOptions),
  mobileFit: PropTypes.oneOf(buttonMobileFitOptions),
  modifier: PropTypes.oneOf(buttonModifiers),
  active: PropTypes.bool,
  hasBullet: PropTypes.bool,
  bulletColor: PropTypes.string
};
Button.defaultProps = {
  tag: 'button',
  rounded: false,
  borderRadius: null,
  size: 'medium',
  modifier: 'hydrogen',
  fit: 'content',
  mobileFit: null,
  active: false,
  hasBullet: false
};