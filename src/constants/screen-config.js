"use strict";

exports.__esModule = true;
exports.mq = exports.ScreenConfig = exports.SCREEN_SIZE_XXS = exports.SCREEN_SIZE_XS = exports.SCREEN_SIZE_XL = exports.SCREEN_SIZE_S = exports.SCREEN_SIZE_M = exports.SCREEN_SIZE_L = exports.ORDERED_SCREEN_SIZES = void 0;
const SCREEN_SIZE_XXS = 'XXS';
exports.SCREEN_SIZE_XXS = SCREEN_SIZE_XXS;
const SCREEN_SIZE_XS = 'XS';
exports.SCREEN_SIZE_XS = SCREEN_SIZE_XS;
const SCREEN_SIZE_S = 'S';
exports.SCREEN_SIZE_S = SCREEN_SIZE_S;
const SCREEN_SIZE_M = 'M';
exports.SCREEN_SIZE_M = SCREEN_SIZE_M;
const SCREEN_SIZE_L = 'L';
exports.SCREEN_SIZE_L = SCREEN_SIZE_L;
const SCREEN_SIZE_XL = 'XL';
exports.SCREEN_SIZE_XL = SCREEN_SIZE_XL;
const ORDERED_SCREEN_SIZES = [SCREEN_SIZE_XXS, SCREEN_SIZE_XS, SCREEN_SIZE_S, SCREEN_SIZE_M, SCREEN_SIZE_L, SCREEN_SIZE_XL];
exports.ORDERED_SCREEN_SIZES = ORDERED_SCREEN_SIZES;
const ScreenConfig = {
  [SCREEN_SIZE_XXS]: {
    min: null,
    max: 399
  },
  [SCREEN_SIZE_XS]: {
    min: 400,
    max: 639
  },
  [SCREEN_SIZE_S]: {
    min: 640,
    max: 767
  },
  [SCREEN_SIZE_M]: {
    min: 768,
    max: 1079
  },
  [SCREEN_SIZE_L]: {
    min: 1080,
    max: 1439
  },
  [SCREEN_SIZE_XL]: {
    min: 1440,
    max: null
  }
};
exports.ScreenConfig = ScreenConfig;
const mq = {
  mobile: "(max-width: " + ScreenConfig.XS.max + "px)",
  mobileAndTablet: "(max-width: " + ScreenConfig.M.max + "px)",
  tablet: "(min-width: " + ScreenConfig.S.min + "px) and (max-width: " + ScreenConfig.M.max + "px)",
  tabletAndDesktop: "(min-width: " + ScreenConfig.S.min + "px)",
  desktop: "(min-width: " + ScreenConfig.L.min + "px)"
};
exports.mq = mq;