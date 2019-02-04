"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Label = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _typography = require("../../../../helpers/utils/typography");

var _typographyConfig = _interopRequireDefault(require("../../../../constants/typography-config"));

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var Label = _styledComponents.default.p.withConfig({
  displayName: "label__Label",
  componentId: "sc-33pwaa-0"
})(["margin:0 0 ", ";", ";font-size:", ";line-height:normal;color:", ";"], (0, _typography.pxToRem)(2), _typographyConfig.default.fontStyles.regular, (0, _typography.pxToRem)(16), _colorsConfig.default.font1);

exports.Label = Label;