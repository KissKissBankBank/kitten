"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScreenConfig = exports.ORDERED_SCREEN_SIZES = exports.SCREEN_SIZE_XL = exports.SCREEN_SIZE_L = exports.SCREEN_SIZE_M = exports.SCREEN_SIZE_S = exports.SCREEN_SIZE_XS = exports.SCREEN_SIZE_XXS = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

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
var ScreenConfig = (_ScreenConfig = {}, (0, _defineProperty2.default)(_ScreenConfig, SCREEN_SIZE_XXS, {
  min: null,
  max: 479
}), (0, _defineProperty2.default)(_ScreenConfig, SCREEN_SIZE_XS, {
  min: 480,
  max: 639
}), (0, _defineProperty2.default)(_ScreenConfig, SCREEN_SIZE_S, {
  min: 640,
  max: 767
}), (0, _defineProperty2.default)(_ScreenConfig, SCREEN_SIZE_M, {
  min: 768,
  max: 1079
}), (0, _defineProperty2.default)(_ScreenConfig, SCREEN_SIZE_L, {
  min: 1080,
  max: 1439
}), (0, _defineProperty2.default)(_ScreenConfig, SCREEN_SIZE_XL, {
  min: 1440,
  max: null
}), _ScreenConfig);
exports.ScreenConfig = ScreenConfig;