"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.StyledLinkBox = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _screenConfig = require("../../../../constants/screen-config");

var _typography = require("../../../../helpers/utils/typography");

const StyledLinkBox = _styledComponents.default.a.withConfig({
  displayName: "styles__StyledLinkBox",
  componentId: "sc-17xm0p0-0"
})(["display:flex;color:var(--LinkBox-text-color);text-decoration:none;&:focus{.k-LinkBox__arrow{transform:translate(", ",", ");}}.k-LinkBox__link{display:flex;min-height:", ";width:100%;box-sizing:border-box;color:", ";background-color:var(--LinkBox-background-color);border:var(--border);border-radius:var(--border-radius-s);transition:background-color 0.2s ease;&:hover{background-color:", ";.k-LinkBox__arrow{transform:translate(", ",", ");}}&:active{background-color:", ";}}.k-LinkBox__textContainer{display:flex;flex-direction:column;justify-content:center;flex-grow:1;margin:", " 0 ", " ", ";}.k-LinkBox__icon{display:flex;align-items:center;justify-content:center;padding:", " 0 ", " ", ";background-color:transparent;}.k-LinkBox__arrow{display:flex;align-items:center;padding:", " ", " ", " ", ";transition:transform 0.2s ease-in-out;@media (min-width:", "){padding-left:", ";padding-right:", ";}}.k-LinkBox__link--orion{min-height:", ";padding-top:", ";padding-bottom:", ";background-color:var(--LinkBox-background-color);border:var(--border-width) solid var(--LinkBox-background-color);&.k-LinkBox__link--size-small{min-height:", ";padding-top:0;padding-bottom:0;}&:hover{background-color:var(--LinkBox-background-color);border:var(--border-width) solid var(--LinkBox-background-color);.k-LinkBox__arrow{transform:translate(", ",", ");}}&:active{background-color:var(--LinkBox-background-color);border:var(--border-width) solid var(--LinkBox-background-color);}.k-LinkBox__arrow{padding-left:", ";padding-right:", ";}.k-LinkBox__textContainer{margin:0 0 0 ", ";color:var(--LinkBox-text-color);}}"], (0, _typography.pxToRem)(5), (0, _typography.pxToRem)(0), (0, _typography.pxToRem)(90), _colorsConfig.default.font1, _colorsConfig.default.background2, (0, _typography.pxToRem)(5), (0, _typography.pxToRem)(0), _colorsConfig.default.background3, (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(22), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(18), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(32), (0, _typography.pxToRem)(60), (0, _typography.pxToRem)(7), (0, _typography.pxToRem)(7), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(5), (0, _typography.pxToRem)(0), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(18), (0, _typography.pxToRem)(20));

exports.StyledLinkBox = StyledLinkBox;