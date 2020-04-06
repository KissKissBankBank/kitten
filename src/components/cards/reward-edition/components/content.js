"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Content = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _typography = require("../../../../helpers/utils/typography");

var _screenConfig = require("../../../../constants/screen-config");

var Content = _styledComponents.default.div.withConfig({
  displayName: "content__Content",
  componentId: "wthcm6-0"
})(["padding:", ";@media (max-width:", "px){padding:", ";}"], (0, _typography.pxToRem)(40), _screenConfig.ScreenConfig.S.max, (0, _typography.pxToRem)(30));

exports.Content = Content;