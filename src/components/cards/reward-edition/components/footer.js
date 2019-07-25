"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Footer = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _typography = require("../../../../helpers/utils/typography");

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _screenConfig = require("../../../../constants/screen-config");

var borderWidth = (0, _typography.pxToRem)(2);
var borderColor = _colorsConfig.default.line1;

var Footer = _styledComponents.default.div.withConfig({
  displayName: "footer__Footer",
  componentId: "ogvwcp-0"
})(["border-top-width:", ";border-top-style:solid;border-top-color:", ";padding:", ";@media (max-width:", "px){padding:", ";}"], borderWidth, borderColor, (0, _typography.pxToRem)(40), _screenConfig.ScreenConfig.S.max, (0, _typography.pxToRem)(30));

exports.Footer = Footer;