import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { pxToRem, stepToRem } from '../../../helpers/utils/typography';
import TYPOGRAPHY from '../../../constants/typography-config';
import COLORS from '../../../constants/colors-config';
import classNames from 'classnames';
var StyledTagButton = styled.button.withConfig({
  displayName: "tag-button__StyledTagButton",
  componentId: "sc-1cbu4s-0"
})(["min-height:", ";min-width:", ";padding:0 ", ";font-size:", ";@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){height:", ";width:", ";}display:inline-flex;align-items:center;justify-content:center;position:relative;border-radius:", ";border-width:", ";border-style:solid;transition:background-color 0.2s,color 0.2s,border-color 0.2s;box-sizing:border-box;", ";font-size:", ";color:", ";line-height:1.3;text-decoration:none;appareance:none;cursor:pointer;&:focus{outline:", " solid ", ";outline-offset:", ";}&.k-Buttons__tagButton--orion{border-radius:", ";}:disabled{cursor:not-allowed;}>:nth-child(n){margin-right:", ";text-align:left;}&.k-Buttons__tagButton--icon{color:", ";border-color:", ";background-color:", ";&:hover,&:focus{color:", ";border-color:", ";background-color:", ";}&:active{color:", ";border-color:", ";background-color:", ";}}&.k-Buttons__tagButton--tiny{min-height:", ";min-width:", ";padding:0 ", ";font-size:", ";@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){height:", ";width:", ";}}&.k-Buttons__tagButton--big{min-height:", ";min-width:", ";padding:0 ", ";font-size:", ";@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){height:", ";width:", ";}}&.k-Buttons__tagButton--huge{min-height:", ";min-width:", ";padding:0 ", ";font-size:", ";@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){height:", ";width:", ";}}&.k-Buttons__tagButton--helium,&.k-Buttons__tagButton--hydrogen{color:", ";border-color:", ";background-color:", ";&:hover,&:focus{color:", ";border-color:", ";background-color:", ";}&:active{color:", ";border-color:", ";background-color:", ";}}&.k-Buttons__tagButton--carbon{color:", ";border-color:", ";background-color:", ";&:hover,&:focus{color:", ";border-color:", ";background-color:", ";}&:active{color:", ";border-color:", ";background-color:", ";}}&.k-Buttons__tagButton--selected{color:", ";border-color:", ";background-color:", ";}"], pxToRem(40), pxToRem(60), pxToRem(20), stepToRem(-2), pxToRem(40), pxToRem(60), pxToRem(4), pxToRem(2), TYPOGRAPHY.fontStyles.regular, stepToRem(-2), COLORS.font1, COLORS.primary4, pxToRem(2), pxToRem(2), pxToRem(8), pxToRem(10), COLORS.font1, COLORS.line1, COLORS.background1, COLORS.background1, COLORS.primary2, COLORS.primary2, COLORS.primary2, COLORS.primary2, COLORS.background1, pxToRem(30), pxToRem(60), pxToRem(20), stepToRem(-2), pxToRem(40), pxToRem(60), pxToRem(50), pxToRem(80), pxToRem(30), stepToRem(-1), pxToRem(50), pxToRem(80), pxToRem(60), pxToRem(80), pxToRem(30), stepToRem(-1), pxToRem(60), pxToRem(80), COLORS.font1, COLORS.line1, COLORS.background1, COLORS.background1, COLORS.primary2, COLORS.primary2, COLORS.primary2, COLORS.primary2, COLORS.background1, COLORS.font1, COLORS.background1, COLORS.background1, COLORS.primary1, COLORS.background1, COLORS.background1, COLORS.primary1, COLORS.background1, COLORS.background1, COLORS.background1, COLORS.primary1, COLORS.primary1);
export var TagButton = function TagButton(_ref) {
  var children = _ref.children,
      modifier = _ref.modifier,
      selected = _ref.selected,
      tiny = _ref.tiny,
      big = _ref.big,
      huge = _ref.huge,
      icon = _ref.icon,
      className = _ref.className,
      variant = _ref.variant,
      others = _objectWithoutProperties(_ref, ["children", "modifier", "selected", "tiny", "big", "huge", "icon", "className", "variant"]);

  return /*#__PURE__*/React.createElement(StyledTagButton, _extends({
    className: classNames('k-Buttons__tagButton', className, "k-Buttons__tagButton--".concat(modifier), "k-Buttons__tagButton--".concat(variant), {
      'k-Buttons__tagButton--tiny': tiny,
      'k-Buttons__tagButton--big': big,
      'k-Buttons__tagButton--huge': huge,
      'k-Buttons__tagButton--selected': selected,
      'k-Buttons__tagButton--icon': icon
    })
  }, others), children);
};
TagButton.propTypes = {
  modifier: PropTypes.oneOf(['helium', 'hydrogen', 'carbon']),
  tiny: PropTypes.bool,
  big: PropTypes.bool,
  huge: PropTypes.bool,
  icon: PropTypes.bool,
  selected: PropTypes.bool,
  variant: PropTypes.oneOf(['andromeda', 'orion'])
};
TagButton.defaultProps = {
  children: 'Tag',
  modifier: 'hydrogen',
  icon: false,
  tiny: false,
  big: false,
  huge: false,
  selected: false,
  variant: 'andromeda'
};