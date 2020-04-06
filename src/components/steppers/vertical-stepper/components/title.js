"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _typography = require("../../../../helpers/utils/typography");

var _typographyConfig = _interopRequireDefault(require("../../../../constants/typography-config"));

var Title = _styledComponents.default.p.withConfig({
  displayName: "title__Title",
  componentId: "zdw2ns-0"
})(["margin:0 0 ", ";", ";font-size:", ";line-height:normal;"], (0, _typography.pxToRem)(2), _typographyConfig.default.fontStyles.regular, (0, _typography.pxToRem)(16));

exports.Title = Title;