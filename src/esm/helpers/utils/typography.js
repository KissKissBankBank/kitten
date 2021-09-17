import ms from 'modularscale-js';
import TYPOGRAPHY from '../../constants/typography-config';
export var pxToRem = function pxToRem(sizeInPx) {
  if (sizeInPx === 0) return 0;
  var sizeInRem = sizeInPx / TYPOGRAPHY.root;
  return parseFloat(sizeInRem) + "rem";
};
export var stepToRem = function stepToRem(step) {
  var settings = {
    base: [1],
    ratio: TYPOGRAPHY.scaleMultiplier
  };
  return parseFloat(ms(step, settings)) + "rem";
};