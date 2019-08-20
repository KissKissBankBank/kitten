"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListTableCol = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _screenConfig = require("../../../../constants/screen-config");

var _gridConfig = require("../../../../constants/grid-config");

var _typography = require("../../../../helpers/utils/typography");

var ListTableCol = _styledComponents.default.li.withConfig({
  displayName: "col__ListTableCol",
  componentId: "sc-1vota8e-0"
})(["flex-grow:0;flex-shrink:0;display:flex;justify-content:space-between;align-items:center;height:100%;&:not(:first-child){padding-left:", ";}@media screen and (min-width:", "px){&:not(:first-child){padding-left:", ";}}"], (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN), _screenConfig.ScreenConfig.M.min, (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING));

exports.ListTableCol = ListTableCol;