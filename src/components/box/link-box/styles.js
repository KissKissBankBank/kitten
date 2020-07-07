"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledLinkBox = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _screenConfig = require("../../../constants/screen-config");

var _typography = require("../../../helpers/utils/typography");

var StyledLinkBox = _styledComponents.default.a.withConfig({
  displayName: "styles__StyledLinkBox",
  componentId: "sc-1c7kjy-0"
})(["display:flex;color:", ";text-decoration:none;.k-LinkBox__link{display:flex;min-height:", ";width:100%;box-sizing:border-box;color:", ";background-color:", ";border:", " solid ", ";border-radius:", ";&:hover{background-color:", ";.k-LinkBox__arrow{transform:translate(", ",", ");}}&:active{background-color:", ";}}.k-LinkBox__link--deprecated{border-radius:0;}.k-LinkBox__textContainer{display:flex;flex-direction:column;justify-content:center;flex-grow:1;margin-left:", ";}.k-LinkBox__textContainer--deprecated{margin-left:", ";@media (min-width:", "){margin-left:", ";}}.k-LinkBox__icon{display:flex;align-items:center;justify-content:center;padding:", " 0 ", " ", ";background-color:transparent;}.k-LinkBox__icon--deprecated{padding:0;margin:", " 0 ", " ", ";min-width:", ";background-color:", ";}.k-LinkBox__arrow{display:flex;align-items:center;padding:", " ", " ", " ", ";transition:transform 0.4s ease-in-out;@media (min-width:", "){padding-left:", ";padding-right:", ";}}"], _colorsConfig.default.font1, (0, _typography.pxToRem)(90), _colorsConfig.default.font1, _colorsConfig.default.background1, (0, _typography.pxToRem)(2), _colorsConfig.default.line1, (0, _typography.pxToRem)(4), _colorsConfig.default.background2, (0, _typography.pxToRem)(5), (0, _typography.pxToRem)(0), _colorsConfig.default.background3, (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(-2), (0, _typography.pxToRem)(-2), (0, _typography.pxToRem)(-2), (0, _typography.pxToRem)(90), _colorsConfig.default.primary4, (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(22), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(18), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(32));

exports.StyledLinkBox = StyledLinkBox;