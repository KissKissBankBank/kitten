"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.ListTableStyles = void 0;

var _styledComponents = require("styled-components");

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _screenConfig = require("../../../../constants/screen-config");

var _gridConfig = require("../../../../constants/grid-config");

var _typography = require("../../../../helpers/utils/typography");

var ListTableStyles = (0, _styledComponents.createGlobalStyle)(["section.k-ListTable,section.k-ListTable *{box-sizing:border-box;}.k-ListTable__Header{position:sticky;top:0;background:", ";color:", ";}.k-ListTable__HeaderList{height:", ";margin:0 auto;max-width:", ";padding-left:", ";padding-right:", ";display:flex;justify-content:space-between;align-items:center;list-style:none;@media screen and (min-width:", "px){padding-left:", ";padding-right:", ";}}.k-ListTable__Body{list-style:none;margin:0;padding:0;}.k-ListTable__Row{border-bottom:2px solid ", ";.k-ListTable__Row--is_highlighted{background:", ";}}.k-ListTable__RowList{height:", ";margin:0 auto;max-width:", ";padding-left:", ";padding-right:", ";display:flex;justify-content:space-between;align-items:flex-end;list-style:none;@media screen and (min-width:", "px){padding-left:", ";padding-right:", ";}}.k-ListTable__Col{flex-grow:0;flex-shrink:0;display:flex;justify-content:space-between;align-items:center;height:100%;&:not(:first-child){padding-left:", ";}@media screen and (min-width:", "px){&:not(:first-child){padding-left:", ";}}}"], _colorsConfig.default.font1, _colorsConfig.default.background1, (0, _typography.pxToRem)(90), (0, _typography.pxToRem)(_gridConfig.CONTAINER_MAX_WIDTH), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN), _screenConfig.ScreenConfig.M.min, (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING), _colorsConfig.default.line1, _colorsConfig.default.primary6, (0, _typography.pxToRem)(90), (0, _typography.pxToRem)(_gridConfig.CONTAINER_MAX_WIDTH), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN), _screenConfig.ScreenConfig.M.min, (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN), _screenConfig.ScreenConfig.M.min, (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING));
exports.ListTableStyles = ListTableStyles;