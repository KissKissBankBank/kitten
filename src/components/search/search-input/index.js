"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchInput = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typography = require("../../../helpers/utils/typography");

var SearchInput = _styledComponents.default.input.withConfig({
  displayName: "search-input__SearchInput",
  componentId: "otbzr0-0"
})(["width:100%;outline:0;border:0;padding:", " 0;", " font-size:", ";color:", ";::placeholder{padding-left:", ";color:", ";}"], (0, _typography.pxToRem)(10), _typographyConfig.default.fontStyles.regular, (0, _typography.pxToRem)(60), _colorsConfig.default.primary1, (0, _typography.pxToRem)(10), _colorsConfig.default.line2);

exports.SearchInput = SearchInput;