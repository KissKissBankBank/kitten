"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchInput = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _screenConfig = require("../../../constants/screen-config");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _typography = require("../../../helpers/utils/typography");

var SearchInput = _styledComponents.default.input.attrs({
  type: 'search'
}).withConfig({
  displayName: "search-input__SearchInput",
  componentId: "otbzr0-0"
})(["width:100%;border:none;appearance:none;", ";color:", ";caret-color:", ";font-size:", ";line-height:", ";@media (min-width:", "px){font-size:", ";line-height:", ";}@media (min-width:", "px){font-size:", ";line-height:", ";}::placeholder{color:", ";}&::-webkit-search-decoration,&::-webkit-search-cancel-button,&::-webkit-search-results-button,&::-webkit-search-results-decoration{display:none;}&::-ms-clear{display:none;}&:focus{outline:", " solid ", ";outline-offset:", ";}"], _typographyConfig.default.fontStyles.bold, _colorsConfig.default.text1, _colorsConfig.default.primary1, (0, _typography.pxToRem)(28), (0, _typography.pxToRem)(44), _screenConfig.ScreenConfig.S.min, (0, _typography.pxToRem)(48), (0, _typography.pxToRem)(68), _screenConfig.ScreenConfig.L.min, (0, _typography.pxToRem)(64), (0, _typography.pxToRem)(88), _colorsConfig.default.line1, _colorsConfig.default.primary4, (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(2));

exports.SearchInput = SearchInput;