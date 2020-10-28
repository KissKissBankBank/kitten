import { css } from 'styled-components';
import { stepToRem, pxToRem } from '../../../helpers/utils/typography';
import { ScreenConfig } from '../../../constants/screen-config';
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
export var titleModifierStyles = function titleModifierStyles(prefix) {
  return css(["", " @media (min-width:", "){", "}@media (min-width:", "){", "}"], titleModifiers.map(function (key) {
    return css(["", "{font-size:", ";line-height:1.2;}"], "".concat(prefix, "--").concat(key.name), stepToRem(key.fontStepOnMobile));
  }), pxToRem(ScreenConfig.S.min), titleModifiers.map(function (key) {
    return css(["", "{font-size:", ";}"], "".concat(prefix, "--").concat(key.name), stepToRem(key.fontStepOnTablet));
  }), pxToRem(ScreenConfig.L.min), titleModifiers.map(function (key) {
    return css(["", "{font-size:", ";}"], "".concat(prefix, "--").concat(key.name), stepToRem(key.fontStepOnDesktop));
  }));
};