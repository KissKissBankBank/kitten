import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["children", "modifier", "selected", "active", "tiny", "big", "huge", "icon", "className", "variant", "size", "tag", "as"];
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';
import deprecated from 'prop-types-extra/lib/deprecated';
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography';
import TYPOGRAPHY from '../../../../constants/typography-config';
import COLORS from '../../../../constants/colors-config';
var StyledTagButton = styled.button.withConfig({
  displayName: "tag-button__StyledTagButton",
  componentId: "sc-1kq5kfr-0"
})(["min-height:", ";min-width:", ";padding:0 ", ";font-size:", ";display:inline-flex;align-items:center;justify-content:center;position:relative;border-radius:var(--border-radius-s);border-width:var(--border-width);border-style:solid;transition:background-color 0.2s,color 0.2s,border-color 0.2s;box-sizing:border-box;", ";font-size:", ";color:", ";line-height:1.3;text-decoration:none;appareance:none;cursor:pointer;&.k-Buttons__tagButton--orion{&.k-Buttons__tagButton--hydrogen{background-color:", ";border:var(--border);color:", ";&:hover,&:focus{border:var(--border-hover-primary);background-color:", ";color:", ";}&:active{background-color:", ";border:var(--border-active-primary);color:", ";}&:disabled{cursor:not-allowed;border:var(--border-disabled);background-color:", ";color:", ";}&.k-Buttons__tagButton--active{background-color:", ";border:var(--border-active-primary);color:", ";&:hover,&:focus,&:active{border-color:var(--color-primary-700);}}}}&:disabled{cursor:not-allowed;}>:nth-child(n){margin-right:", ";text-align:left;}&.k-Buttons__tagButton--icon{color:", ";border-color:var(--color-grey-400);background-color:", ";&:hover,&:focus{color:", ";border-color:", ";background-color:", ";}&:active{color:", ";border-color:", ";background-color:", ";}}&.k-Buttons__tagButton--tiny{min-height:", ";min-width:", ";padding:0 ", ";font-size:", ";}&.k-Buttons__tagButton--big{min-height:", ";min-width:", ";padding:0 ", ";font-size:", ";}&.k-Buttons__tagButton--huge{min-height:", ";min-width:", ";padding:0 ", ";font-size:", ";}&.k-Buttons__tagButton--helium,&.k-Buttons__tagButton--hydrogen{color:", ";border:var(--border);background-color:", ";&:hover,&:focus{color:", ";border:var(--border-hover-primary);background-color:", ";}&:active{color:", ";border:var(--border-active-primary);background-color:", ";}&:disabled{background-color:", ";border-color:", ";color:", ";}}&.k-Buttons__tagButton--carbon{color:", ";border-color:", ";background-color:", ";&:hover,&:focus{color:", ";border-color:", ";background-color:", ";}&:active{color:", ";border-color:", ";background-color:", ";}&:disabled{background-color:", ";border-color:", ";color:", ";}}&.k-Buttons__tagButton--active{color:", ";border:var(--border-active-primary);background-color:", ";&:hover,&:focus,&:active{border-color:var(--color-primary-700);}}"], pxToRem(40), pxToRem(60), pxToRem(20), stepToRem(-2), TYPOGRAPHY.fontStyles.regular, stepToRem(-2), COLORS.font1, COLORS.background1, COLORS.font1, COLORS.background1, COLORS.font1, COLORS.background1, COLORS.font1, COLORS.line1, COLORS.font3, COLORS.primary5, COLORS.font1, pxToRem(10), COLORS.font1, COLORS.background1, COLORS.background1, COLORS.primary2, COLORS.primary2, COLORS.primary2, COLORS.primary2, COLORS.background1, pxToRem(30), pxToRem(60), pxToRem(20), stepToRem(-2), pxToRem(50), pxToRem(80), pxToRem(30), stepToRem(-1), pxToRem(60), pxToRem(80), pxToRem(30), stepToRem(-1), COLORS.font1, COLORS.background1, COLORS.background1, COLORS.primary2, COLORS.primary2, COLORS.background1, COLORS.line2, COLORS.line2, COLORS.background1, COLORS.font1, COLORS.background1, COLORS.background1, COLORS.primary1, COLORS.background1, COLORS.background1, COLORS.primary1, COLORS.background1, COLORS.background1, COLORS.line2, COLORS.line2, COLORS.background1, COLORS.background1, COLORS.primary1);
export var TagButton = function TagButton(_ref) {
  var children = _ref.children,
      modifier = _ref.modifier,
      selected = _ref.selected,
      active = _ref.active,
      tiny = _ref.tiny,
      big = _ref.big,
      huge = _ref.huge,
      icon = _ref.icon,
      className = _ref.className,
      variant = _ref.variant,
      size = _ref.size,
      tag = _ref.tag,
      as = _ref.as,
      others = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement(StyledTagButton, _extends({
    type: !tag && !as ? 'button' : null,
    className: classNames('k-Buttons__tagButton', className, "k-Buttons__tagButton--" + modifier, "k-Buttons__tagButton--" + variant, "k-Buttons__tagButton--" + size, {
      'k-Buttons__tagButton--active': active || selected,
      'k-Buttons__tagButton--icon': icon
    }),
    as: tag || as
  }, others), children);
};
TagButton.propTypes = {
  modifier: PropTypes.oneOf(['helium', 'hydrogen', 'carbon']),
  size: PropTypes.oneOf(['tiny', 'regular', 'big', 'huge']),
  icon: PropTypes.bool,
  active: PropTypes.bool,
  selected: deprecated(PropTypes.bool, 'Please use `active` instead.'),
  variant: PropTypes.oneOf(['andromeda', 'orion'])
};
TagButton.defaultProps = {
  children: 'Tag',
  modifier: 'hydrogen',
  icon: false,
  size: 'regular',
  active: false,
  variant: 'orion'
};