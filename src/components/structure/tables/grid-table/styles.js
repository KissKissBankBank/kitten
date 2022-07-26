"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.StyledGridTable = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _typography = require("../../../../helpers/utils/typography");

const StyledGridTable = _styledComponents.default.section.withConfig({
  displayName: "styles__StyledGridTable",
  componentId: "sc-139t6d2-0"
})([".k-GridTable{display:grid;}.k-GridTable__Header,.k-GridTable__HeaderList,.k-GridTable__Body,.k-GridTable__Row,.k-GridTable__RowList{display:contents;}.k-GridTable__Col{display:flex;justify-content:space-between;align-items:center;}.k-GridTable__Header .k-GridTable__Col{height:", ";background-color:", ";color:", ";position:sticky;top:0;}.k-GridTable__Row .k-GridTable__Col{min-height:", ";border-bottom:var(--border);background-color:var(--color-grey-000);transition:background-color var(--transition);}.k-GridTable__Row.k-GridTable__Row--is_highlighted .k-GridTable__Col{background-color:var(--color-primary-100);}"], (0, _typography.pxToRem)(50), _colorsConfig.default.background3, _colorsConfig.default.font1, (0, _typography.pxToRem)(80));

exports.StyledGridTable = StyledGridTable;