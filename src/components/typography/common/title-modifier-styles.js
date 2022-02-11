"use strict";

exports.__esModule = true;
exports.titleModifiersNames = exports.titleModifiers = exports.titleModifierStyles = exports.titleHelperModifierStyles = void 0;

var _styledComponents = require("styled-components");

var _typography = require("../../../helpers/utils/typography");

var _screenConfig = require("../../../constants/screen-config");

var titleModifiersNames = ['primary', 'secondary', 'tertiary', 'quaternary', 'quinary', 'senary', 'septenary'];
exports.titleModifiersNames = titleModifiersNames;
var titleModifiers = [{
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
exports.titleModifiers = titleModifiers;

var getLetterSpacingFromStep = function getLetterSpacingFromStep(step) {
  if (step > 5) return '-0.02em';
  if (step > 3) return '-0.015em';
  return '-0.01em';
};

var getLineHeightFromStep = function getLineHeightFromStep(step) {
  if (step > 8) return '1em';
  if (step > 4) return "calc(1em + " + (0, _typography.pxToRem)(4) + ")";
  return "calc(1em + " + (0, _typography.pxToRem)(2) + ")";
};

var getStyleFromStep = function getStyleFromStep(step) {
  return (0, _styledComponents.css)(["font-size:", ";letter-spacing:", ";line-height:", ";"], (0, _typography.stepToRem)(step), getLetterSpacingFromStep(step), getLineHeightFromStep(step));
};

var titleModifierStyles = function titleModifierStyles(prefix) {
  return (0, _styledComponents.css)(["", ""], titleModifiers.map(function (key, index) {
    return (0, _styledComponents.css)(["", "{", ";@media (min-width:", "){", ";}@media (min-width:", "){", ";}}"], prefix + "--" + titleModifiersNames[index], getStyleFromStep(key.fontStepOnMobile), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), getStyleFromStep(key.fontStepOnTablet), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.L.min), getStyleFromStep(key.fontStepOnDesktop));
  }));
};

exports.titleModifierStyles = titleModifierStyles;

var titleHelperModifierStyles = function titleHelperModifierStyles(modifier) {
  var modifierIndex = findIndex(function (item) {
    return modifier === item;
  })(titleModifiersNames);
  var modifierDefinitions = titleModifiersNames[modifierIndex];
  return (0, _styledComponents.css)(["", ";@media (min-width:", "){", ";}@media (min-width:", "){", ";}"], getStyleFromStep(modifierDefinitions.fontStepOnMobile), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), getStyleFromStep(modifierDefinitions.fontStepOnTablet), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.L.min), getStyleFromStep(modifierDefinitions.fontStepOnDesktop));
};

exports.titleHelperModifierStyles = titleHelperModifierStyles;