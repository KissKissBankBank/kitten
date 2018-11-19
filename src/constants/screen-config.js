"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScreenConfig = exports.SCREEN_SIZE_XL = exports.SCREEN_SIZE_L = exports.SCREEN_SIZE_M = exports.SCREEN_SIZE_S = exports.SCREEN_SIZE_XS = exports.SCREEN_SIZE_XXS = void 0;

var _ScreenConfig;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
var ScreenConfig = (_ScreenConfig = {}, _defineProperty(_ScreenConfig, SCREEN_SIZE_XXS, {
  min: null,
  max: 479
}), _defineProperty(_ScreenConfig, SCREEN_SIZE_XS, {
  min: 480,
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
exports.ScreenConfig = ScreenConfig;