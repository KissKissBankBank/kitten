"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeaderCol = exports.TitleCol = exports.Col = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _screenConfig = require("../../../../constants/screen-config");

var _typography = require("../../../../helpers/utils/typography");

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _typographyConfig = _interopRequireDefault(require("../../../../constants/typography-config"));

var colStyle = (0, _styledComponents.css)(["height:", ";padding:0 ", ";border:", " solid rgba(0,0,0,0.067);font-size:", ";line-height:1.3;box-sizing:border-box;text-align:left;width:", " !important;vertical-align:middle;@media screen and (min-width:0\0){border:", " solid ", ";}"], (0, _typography.pxToRem)(68), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(2), (0, _typography.stepToRem)(-1), (0, _typography.pxToRem)(120), (0, _typography.pxToRem)(2), _colorsConfig.default.line1);
var firstColStyle = (0, _styledComponents.css)(["position:sticky;left:0;@media (min-width:", "){width:", " !important;}"], (0, _typography.pxToRem)(_screenConfig.ScreenConfig.M.min), (0, _typography.pxToRem)(210));

var Col = _styledComponents.default.td.withConfig({
  displayName: "col__Col",
  componentId: "sc-11pa91d-0"
})(["", " ", " white-space:nowrap;border-left-width:0;border-top-width:0;"], colStyle, _typographyConfig.default.fontStyles.light);

exports.Col = Col;
var TitleCol = (0, _styledComponents.default)(function (props) {
  return _react.default.createElement("th", (0, _extends2.default)({
    scope: "row"
  }, props));
}).withConfig({
  displayName: "col__TitleCol",
  componentId: "sc-11pa91d-1"
})(["", " ", " white-space:nowrap;background:", ";border-top-width:0;border-left-width:", ";", ""], colStyle, _typographyConfig.default.fontStyles.regular, _colorsConfig.default.background1, (0, _typography.pxToRem)(2), firstColStyle);
exports.TitleCol = TitleCol;
var HeaderCol = (0, _styledComponents.default)(function (props) {
  return _react.default.createElement("th", (0, _extends2.default)({
    scope: "column"
  }, props));
}).withConfig({
  displayName: "col__HeaderCol",
  componentId: "sc-11pa91d-2"
})(["", " ", " background:rgba(0,0,0,.016);border-left-width:0;width:", ";@media screen and (min-width:0\0){background:", ";}&:first-child{background:", ";border-color:", ";border-left-width:", ";", "}"], colStyle, _typographyConfig.default.fontStyles.bold, (0, _typography.pxToRem)(135), _colorsConfig.default.background2, _colorsConfig.default.background2, _colorsConfig.default.line1, (0, _typography.pxToRem)(2), firstColStyle);
exports.HeaderCol = HeaderCol;