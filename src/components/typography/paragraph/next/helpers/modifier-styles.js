"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.modifierStyles = void 0;

var _styledComponents = require("styled-components");

var _typography = require("../../../../../helpers/utils/typography");

var _screenConfig = require("../../../../../constants/screen-config");

var modifierStyles = function modifierStyles(modifier) {
  var fontStepOnMobile;
  var fontStepOnTablet;
  var fontStepOnDesktop;

  switch (modifier) {
    case 'primary':
      fontStepOnMobile = 0;
      fontStepOnTablet = 1;
      fontStepOnDesktop = 2;
      break;

    case 'secondary':
      fontStepOnMobile = -1;
      fontStepOnTablet = 0;
      fontStepOnDesktop = 0;
      break;

    case 'tertiary':
      fontStepOnMobile = -2;
      fontStepOnTablet = -1;
      fontStepOnDesktop = -1;
      break;

    case 'quaternary':
      fontStepOnMobile = -2;
      fontStepOnTablet = -2;
      fontStepOnDesktop = -2;
      break;
  }

  return (0, _styledComponents.css)(["font-size:", ";line-height:1.6;@media (min-width:", "){font-size:", ";}@media (min-width:", "){font-size:", ";}"], (0, _typography.stepToRem)(fontStepOnMobile), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.stepToRem)(fontStepOnTablet), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.L.min), (0, _typography.stepToRem)(fontStepOnDesktop));
};

exports.modifierStyles = modifierStyles;