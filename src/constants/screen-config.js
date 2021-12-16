"use strict";

exports.__esModule = true;
exports.mq = exports.ScreenConfig = exports.SCREEN_SIZE_XXS = exports.SCREEN_SIZE_XS = exports.SCREEN_SIZE_XL = exports.SCREEN_SIZE_S = exports.SCREEN_SIZE_M = exports.SCREEN_SIZE_L = exports.ORDERED_SCREEN_SIZES = void 0;

var _ScreenConfig;

var SCREEN_SIZE_XXS = 'XXS';
exports.SCREEN_SIZE_XXS = SCREEN_SIZE_XXS;
var SCREEN_SIZE_XS = 'XS';
exports.SCREEN_SIZE_XS = SCREEN_SIZE_XS;
var SCREEN_SIZE_S = 'S';
exports.SCREEN_SIZE_S = SCREEN_SIZE_S;
var SCREEN_SIZE_M = 'M';
exports.SCREEN_SIZE_M = SCREEN_SIZE_M;
var SCREEN_SIZE_L = 'L';
exports.SCREEN_SIZE_L = SCREEN_SIZE_L;
var SCREEN_SIZE_XL = 'XL';
exports.SCREEN_SIZE_XL = SCREEN_SIZE_XL;
var ORDERED_SCREEN_SIZES = [SCREEN_SIZE_XXS, SCREEN_SIZE_XS, SCREEN_SIZE_S, SCREEN_SIZE_M, SCREEN_SIZE_L, SCREEN_SIZE_XL];
exports.ORDERED_SCREEN_SIZES = ORDERED_SCREEN_SIZES;
var ScreenConfig = (_ScreenConfig = {}, _ScreenConfig[SCREEN_SIZE_XXS] = {
  min: null,
  max: 399
}, _ScreenConfig[SCREEN_SIZE_XS] = {
  min: 400,
  max: 639
}, _ScreenConfig[SCREEN_SIZE_S] = {
  min: 640,
  max: 767
}, _ScreenConfig[SCREEN_SIZE_M] = {
  min: 768,
  max: 1079
}, _ScreenConfig[SCREEN_SIZE_L] = {
  min: 1080,
  max: 1439
}, _ScreenConfig[SCREEN_SIZE_XL] = {
  min: 1440,
  max: null
}, _ScreenConfig);
exports.ScreenConfig = ScreenConfig;
var mq = {
  mobile: "(max-width: " + ScreenConfig.XS.max + "px)",
  mobileAndTablet: "(max-width: " + ScreenConfig.M.max + "px)",
  tablet: "(min-width: " + ScreenConfig.S.min + "px) and (max-width: " + ScreenConfig.M.max + "px)",
  tabletAndDesktop: "(min-width: " + ScreenConfig.S.min + "px)",
  desktop: "(min-width: " + ScreenConfig.L.min + "px)"
};
exports.mq = mq;