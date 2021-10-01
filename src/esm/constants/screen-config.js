import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

var _ScreenConfig;

export var SCREEN_SIZE_XXS = 'XXS';
export var SCREEN_SIZE_XS = 'XS';
export var SCREEN_SIZE_S = 'S';
export var SCREEN_SIZE_M = 'M';
export var SCREEN_SIZE_L = 'L';
export var SCREEN_SIZE_XL = 'XL';
export var ORDERED_SCREEN_SIZES = [SCREEN_SIZE_XXS, SCREEN_SIZE_XS, SCREEN_SIZE_S, SCREEN_SIZE_M, SCREEN_SIZE_L, SCREEN_SIZE_XL];
export var ScreenConfig = (_ScreenConfig = {}, _defineProperty(_ScreenConfig, SCREEN_SIZE_XXS, {
  min: null,
  max: 399
}), _defineProperty(_ScreenConfig, SCREEN_SIZE_XS, {
  min: 400,
  max: 639
}), _defineProperty(_ScreenConfig, SCREEN_SIZE_S, {
  min: 640,
  max: 767
}), _defineProperty(_ScreenConfig, SCREEN_SIZE_M, {
  min: 768,
  max: 1079
}), _defineProperty(_ScreenConfig, SCREEN_SIZE_L, {
  min: 1080,
  max: 1439
}), _defineProperty(_ScreenConfig, SCREEN_SIZE_XL, {
  min: 1440,
  max: null
}), _ScreenConfig);
export var mq = {
  mobile: "(max-width: ".concat(ScreenConfig.XS.max, "px)"),
  mobileAndTablet: "(max-width: ".concat(ScreenConfig.M.max, "px)"),
  tablet: "(min-width: ".concat(ScreenConfig.S.min, "px) and (max-width: ").concat(ScreenConfig.M.max, "px)"),
  tabletAndDesktop: "(min-width: ".concat(ScreenConfig.S.min, "px)"),
  desktop: "(min-width: ".concat(ScreenConfig.L.min, "px)")
};