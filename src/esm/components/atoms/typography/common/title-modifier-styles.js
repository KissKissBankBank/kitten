import { css } from 'styled-components';
import { stepToRem, pxToRem } from '../../../../helpers/utils/typography';
import { ScreenConfig } from '../../../../constants/screen-config';
export var titleModifiersNames = ['primary', 'secondary', 'tertiary', 'quaternary', 'quinary', 'senary', 'septenary'];
export var titleModifiers = [{
  name: 'primary',
  fontStepOnMobile: 7,
  fontStepOnTablet: 9,
  fontStepOnDesktop: 12
}, {
  name: 'secondary',
  fontStepOnMobile: 6,
  fontStepOnTablet: 7,
  fontStepOnDesktop: 9
}, {
  name: 'tertiary',
  fontStepOnMobile: 5,
  fontStepOnTablet: 6,
  fontStepOnDesktop: 7
}, {
  name: 'quaternary',
  fontStepOnMobile: 4,
  fontStepOnTablet: 5,
  fontStepOnDesktop: 6
}, {
  name: 'quinary',
  fontStepOnMobile: 2,
  fontStepOnTablet: 4,
  fontStepOnDesktop: 5
}, {
  name: 'senary',
  fontStepOnMobile: 1,
  fontStepOnTablet: 2,
  fontStepOnDesktop: 4
}, {
  name: 'septenary',
  fontStepOnMobile: 0,
  fontStepOnTablet: 1,
  fontStepOnDesktop: 2
}];

var getLetterSpacingFromStep = function getLetterSpacingFromStep(step) {
  if (step > 5) return '-0.02em';
  if (step > 3) return '-0.015em';
  return '-0.01em';
};

var getLineHeightFromStep = function getLineHeightFromStep(step) {
  if (step > 8) return '1em';
  if (step > 4) return "calc(1em + " + pxToRem(4) + ")";
  return "calc(1em + " + pxToRem(2) + ")";
};

var getStyleFromStep = function getStyleFromStep(step) {
  return css(["font-size:", ";letter-spacing:", ";line-height:", ";"], stepToRem(step), getLetterSpacingFromStep(step), getLineHeightFromStep(step));
};

export var titleModifierStyles = function titleModifierStyles(prefix) {
  return css(["", ""], titleModifiers.map(function (key, index) {
    return css(["", "{", ";@media (min-width:", "){", ";}@media (min-width:", "){", ";}}"], prefix + "--" + titleModifiersNames[index], getStyleFromStep(key.fontStepOnMobile), pxToRem(ScreenConfig.S.min), getStyleFromStep(key.fontStepOnTablet), pxToRem(ScreenConfig.L.min), getStyleFromStep(key.fontStepOnDesktop));
  }));
};
export var titleHelperModifierStyles = function titleHelperModifierStyles(modifier) {
  var modifierIndex = findIndex(function (item) {
    return modifier === item;
  })(titleModifiersNames);
  var modifierDefinitions = titleModifiersNames[modifierIndex];
  return css(["", ";@media (min-width:", "){", ";}@media (min-width:", "){", ";}"], getStyleFromStep(modifierDefinitions.fontStepOnMobile), pxToRem(ScreenConfig.S.min), getStyleFromStep(modifierDefinitions.fontStepOnTablet), pxToRem(ScreenConfig.L.min), getStyleFromStep(modifierDefinitions.fontStepOnDesktop));
};