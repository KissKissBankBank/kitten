"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledRightGradient = exports.StyledLeftGradient = exports.StyledScrollableContainer = exports.StyledContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _screenConfig = require("../../../constants/screen-config");

var _typography = require("../../../helpers/utils/typography");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _container = require("../../../components/grid/container");

var gradientWidth = 20;
var StyledContainer = (0, _styledComponents.default)(_container.Container).withConfig({
  displayName: "styled__StyledContainer",
  componentId: "d41exg-0"
})(["position:relative;padding-left:0;padding-right:0;"]);
exports.StyledContainer = StyledContainer;

var StyledScrollableContainer = _styledComponents.default.div.withConfig({
  displayName: "styled__StyledScrollableContainer",
  componentId: "d41exg-1"
})(["display:flex;white-space:nowrap;overflow-x:auto;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;&::-webkit-scrollbar{display:none;}"]);

exports.StyledScrollableContainer = StyledScrollableContainer;

var StyledLeftGradient = _styledComponents.default.div.withConfig({
  displayName: "styled__StyledLeftGradient",
  componentId: "d41exg-2"
})(["position:absolute;left:0;top:0;bottom:0;width:", ";background:linear-gradient( 90deg,", ",rgba(255,255,255,0) );"], (0, _typography.pxToRem)(gradientWidth), _colorsConfig.default.background1);

exports.StyledLeftGradient = StyledLeftGradient;

var StyledRightGradient = _styledComponents.default.div.withConfig({
  displayName: "styled__StyledRightGradient",
  componentId: "d41exg-3"
})(["position:absolute;right:0;top:0;bottom:0;width:", ";background:linear-gradient( 90deg,rgba(255,255,255,0),", " );"], (0, _typography.pxToRem)(gradientWidth), _colorsConfig.default.background1);

exports.StyledRightGradient = StyledRightGradient;