"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _screenConfig = require("../../../constants/screen-config");

var _typography = require("../../../helpers/utils/typography");

var _gridConfig = require("../../../constants/grid-config");

var StyledContainer = _styledComponents.default.div.withConfig({
  displayName: "styled__StyledContainer",
  componentId: "tuad86-0"
})(["margin-left:auto;margin-right:auto;box-sizing:border-box;max-width:", ";padding-left:", ";padding-right:", ";@media (min-width:", "px){padding-left:", ";padding-right:", ";}", " ", ""], (0, _typography.pxToRem)(_gridConfig.CONTAINER_MAX_WIDTH), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN), _screenConfig.ScreenConfig.S.min, (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING), function (props) {
  return props.fullWidthBelowScreenSize && (0, _styledComponents.css)(["@media (max-width:", "px){padding-right:0;padding-left:0;}"], _screenConfig.ScreenConfig[props.fullWidthBelowScreenSize].max);
}, function (props) {
  return props.styles;
});

exports.StyledContainer = StyledContainer;