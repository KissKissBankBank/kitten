import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["children", "modifier", "size", "className", "rounded", "fluid", "icon", "borderRadius", "disabled", "tag", "as", "fit", "mobileFit", "active"];
import React from 'react';
import PropTypes from 'prop-types';
import deprecated from 'prop-types-extra/lib/deprecated';
import COLORS from '../../../constants/colors-config';
import { pxToRem, stepToRem } from '../../../helpers/utils/typography';
import TYPOGRAPHY from '../../../constants/typography-config';
import styled from 'styled-components';
import { modifierStyles } from './helpers/modifier-styles';
import { ScreenConfig } from '../../../constants/screen-config';
import classNames from 'classnames';
var deprecatedModifiers = ['carbon', 'oxygen', 'calcium', 'social_facebook', 'social_twitter', 'social_linkedin', 'social_instagram', 'social_youtube'];
export var buttonModifiers = ['hydrogen', 'helium', 'lithium', 'beryllium', 'copper', 'boron', 'scandium', 'neon', 'iron', 'krypton'];
export var buttonFitOptions = ['icon', 'min-width', 'content', 'fluid'];
export var buttonMobileFitOptions = [null].concat(buttonFitOptions);
export var buttonSizes = ['nano', 'micro', 'tiny', 'big', 'huge', 'giant', 'regular'];
var StyledButton = styled.button.withConfig({
  displayName: "button__StyledButton",
  componentId: "sc-dl59vq-0"
})(["--Button-border-radius:var(--border-radius-s);&.k-Button--rounded{--Button-border-radius:var(--border-radius-rounded);}position:relative;box-sizing:border-box;min-height:var(--Button-dimension);padding:var(--Button-padding);display:inline-flex;justify-content:center;align-items:center;gap:", ";", ";font-size:", ";color:", ";line-height:1.3;text-decoration:none;appearance:none;cursor:pointer;border-radius:var(--Button-border-radius,0);min-width:0;&:disabled,&.k-Button--disabled{cursor:not-allowed;}&:hover{text-decoration:none;}&:focus-visible{outline:auto;}&.k-Button--nano{--Button-dimension:", ";--Button-min-width:", ";--Button-padding:0 ", ";font-size:", ";}&.k-Button--micro{--Button-dimension:", ";--Button-min-width:", ";--Button-padding:", " ", ";font-size:", ";}&.k-Button--tiny{--Button-dimension:", ";--Button-min-width:", ";--Button-padding:", " ", ";}&.k-Button--regular{--Button-dimension:", ";--Button-min-width:", ";--Button-padding:", " ", ";}&.k-Button--big{--Button-dimension:", ";--Button-min-width:", ";--Button-padding:", " ", ";@media (min-width:", "){--Button-min-width:", ";--Button-dimension:", ";--Button-padding:", " ", ";font-size:", ";}}&.k-Button--huge{--Button-dimension:", ";--Button-min-width:", ";--Button-padding:", " ", ";@media (min-width:", "){--Button-min-width:", ";--Button-dimension:", ";--Button-padding:", " ", ";font-size:", ";}}&.k-Button--giant{--Button-dimension:", ";--Button-min-width:", ";--Button-padding:", " ", ";@media (min-width:", "){--Button-min-width:", ";--Button-dimension:", ";--Button-padding:", " ", ";font-size:", ";}}&.k-Button--fit-min-width{min-width:var(--Button-min-width);}&.k-Button--fit-icon{padding:0;overflow:hidden;width:var(--Button-dimension);height:var(--Button-dimension);}&.k-Button--fit-fluid{width:100%;}@media (max-width:", "){&[class*='k-Button--mobile-fit']{min-width:initial !important;padding:var(--Button-padding);width:initial;height:initial;width:initial;&.k-Button--mobile-fit-min-width{min-width:var(--Button-min-width) !important;}&.k-Button--mobile-fit-icon{padding:0;overflow:hidden;width:var(--Button-dimension);height:var(--Button-dimension);}&.k-Button--mobile-fit-fluid{width:100%;}}}", ""], pxToRem(10), TYPOGRAPHY.fontStyles.regular, stepToRem(-1), COLORS.font1, pxToRem(20), pxToRem(100), pxToRem(6), stepToRem(-2), pxToRem(30), pxToRem(130), pxToRem(5), pxToRem(10), stepToRem(-2), pxToRem(40), pxToRem(160), pxToRem(7), pxToRem(20), pxToRem(50), pxToRem(200), pxToRem(10), pxToRem(30), pxToRem(50), pxToRem(200), pxToRem(10), pxToRem(30), pxToRem(ScreenConfig.S.min), pxToRem(220), pxToRem(70), pxToRem(10), pxToRem(40), stepToRem(0), pxToRem(70), pxToRem(200), pxToRem(10), pxToRem(10), pxToRem(ScreenConfig.S.min), pxToRem(220), pxToRem(80), pxToRem(10), pxToRem(40), stepToRem(0), pxToRem(70), pxToRem(200), pxToRem(10), pxToRem(10), pxToRem(ScreenConfig.S.min), pxToRem(220), pxToRem(90), pxToRem(10), pxToRem(40), stepToRem(0), pxToRem(ScreenConfig.XS.max), function (_ref) {
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
      fluid = _ref2.fluid,
      icon = _ref2.icon,
      borderRadius = _ref2.borderRadius,
      disabled = _ref2.disabled,
      tag = _ref2.tag,
      as = _ref2.as,
      fit = _ref2.fit,
      mobileFit = _ref2.mobileFit,
      active = _ref2.active,
      props = _objectWithoutPropertiesLoose(_ref2, _excluded);

  if (deprecatedModifiers.includes(modifier)) {
    console.warn("The modifier " + modifier + " has been deprecated. Please use one for the following: " + buttonModifiers.join(', ') + ".");
  }

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

  var internalModifier = active ? 'lithium' : modifier;
  var internalTag = as || tag;

  var fitClass = function () {
    switch (true) {
      case fluid && !icon:
        return 'fluid';

      case icon && !fluid:
        return 'icon';

      default:
        return fit;
    }
  }();

  return /*#__PURE__*/React.createElement(StyledButton, _extends({
    className: classNames('k-Button', className, "k-Button--" + actualSize, "k-Button--" + internalModifier, "k-Button--fit-" + fitClass, (_classNames = {}, _classNames["k-Button--mobile-fit-" + mobileFit] = !!mobileFit, _classNames['k-Button--disabled'] = disabled, _classNames['k-Button--rounded'] = rounded, _classNames)),
    modifier: internalModifier,
    style: {
      '--Button-border-radius': borderRadius != null ? pxToRem(borderRadius) : null
    },
    type: "button",
    as: internalTag,
    disabled: internalTag === 'button' ? disabled : null
  }, props), children);
};
Button.propTypes = {
  tag: PropTypes.string,
  borderRadius: PropTypes.number,
  fluid: PropTypes.bool,
  icon: PropTypes.bool,
  rounded: PropTypes.bool,
  size: PropTypes.oneOf(buttonSizes),
  fit: PropTypes.oneOf(buttonFitOptions),
  mobileFit: PropTypes.oneOf(buttonMobileFitOptions),
  modifier: PropTypes.oneOf([].concat(buttonModifiers, deprecatedModifiers)),
  active: PropTypes.bool
};
Button.defaultProps = {
  tag: 'button',
  fluid: false,
  icon: false,
  rounded: false,
  borderRadius: null,
  size: 'regular',
  modifier: 'hydrogen',
  fit: 'min-width',
  mobileFit: null,
  active: false
};