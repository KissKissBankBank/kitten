"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.titleHelperModifierStyles = exports.titleModifierStyles = exports.titleModifiers = exports.titleModifiersNames = void 0;

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

var titleModifierStyles = function titleModifierStyles(prefix) {
  return (0, _styledComponents.css)(["", ""], titleModifiers.map(function (key, index) {
    return (0, _styledComponents.css)(["", "{font-size:", ";line-height:1.2;@media (min-width:", "){font-size:", ";}@media (min-width:", "){font-size:", ";}}"], "".concat(prefix, "--").concat(titleModifiersNames[index]), (0, _typography.stepToRem)(key.fontStepOnMobile), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.stepToRem)(key.fontStepOnTablet), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.L.min), (0, _typography.stepToRem)(key.fontStepOnDesktop));
  }));
};

exports.titleModifierStyles = titleModifierStyles;

var titleHelperModifierStyles = function titleHelperModifierStyles(modifier) {
  var modifierIndex = findIndex(function (item) {
    return modifier === item;
  })(titleModifiersNames);
  var modifierDefinitions = titleModifiersNames[modifierIndex];
  return (0, _styledComponents.css)(["font-size:", ";line-height:1.2;@media (min-width:", "){font-size:", ";}@media (min-width:", "){font-size:", ";}"], (0, _typography.stepToRem)(modifierDefinitions.fontStepOnMobile), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.stepToRem)(modifierDefinitions.fontStepOnTablet), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.L.min), (0, _typography.stepToRem)(modifierDefinitions.fontStepOnDesktop));
};

exports.titleHelperModifierStyles = titleHelperModifierStyles;