"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DoubleEntryTable = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _header = require("./components/header");

var _col = require("./components/col");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typography = require("../../../helpers/utils/typography");

var _hexToRgba = require("../../../helpers/utils/hex-to-rgba");

var _screenConfig = require("../../../constants/screen-config");

var StyledContainer = _styledComponents.default.div.withConfig({
  displayName: "double-entry-table__StyledContainer",
  componentId: "sc-155z2j1-0"
})(["position:relative;"]);

var StyledTableContainer = _styledComponents.default.div.withConfig({
  displayName: "double-entry-table__StyledTableContainer",
  componentId: "sc-155z2j1-1"
})(["overflow-x:scroll;margin-bottom:1.875rem;border-left:", " solid ", ";border-right:", " solid ", ";background:linear-gradient( to right,white 30%,", " ),linear-gradient(to left,white 30%,", "),radial-gradient( farthest-side at 0 50%,", ",", " ),radial-gradient( farthest-side at 100% 50%,", ",", " );background-repeat:no-repeat;background-size:", " 100%,", " 100%,", " 100%,", " 100%;background-position:", ",100%;background-attachment:local,local,scroll,scroll;@media screen and (min-width:0\0){background:", ";}@media (min-width:", "){background-position:", ",100%;}"], (0, _typography.pxToRem)(2), (0, _hexToRgba.hexToRgba)(_colorsConfig.default.background1, 0.0667), (0, _typography.pxToRem)(2), (0, _hexToRgba.hexToRgba)(_colorsConfig.default.background1, 0.0667), (0, _hexToRgba.hexToRgba)(_colorsConfig.default.background1, 0), (0, _hexToRgba.hexToRgba)(_colorsConfig.default.background1, 0), (0, _hexToRgba.hexToRgba)(_colorsConfig.default.font1, 0.2), (0, _hexToRgba.hexToRgba)(_colorsConfig.default.font1, 0), (0, _hexToRgba.hexToRgba)(_colorsConfig.default.font1, 0.2), (0, _hexToRgba.hexToRgba)(_colorsConfig.default.font1, 0), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(14), (0, _typography.pxToRem)(14), (0, _typography.pxToRem)(120), _colorsConfig.default.background1, (0, _typography.pxToRem)(_screenConfig.ScreenConfig.M.min), (0, _typography.pxToRem)(210));

var StyledTable = _styledComponents.default.table.withConfig({
  displayName: "double-entry-table__StyledTable",
  componentId: "sc-155z2j1-2"
})(["width:100%;border-spacing:0;table-layout:fixed;border-collapse:separate;@media screen and (min-width:0\0){border-collapse:collapse;}"]);

var DoubleEntryTable = function DoubleEntryTable(props) {
  return _react.default.createElement(StyledContainer, null, _react.default.createElement(StyledTableContainer, null, _react.default.createElement(StyledTable, props)));
};

exports.DoubleEntryTable = DoubleEntryTable;
DoubleEntryTable.Header = _header.Header;

DoubleEntryTable.Body = function (props) {
  return _react.default.createElement("tbody", props);
};

DoubleEntryTable.Row = function (props) {
  return _react.default.createElement("tr", props);
};

DoubleEntryTable.Col = _col.Col;
DoubleEntryTable.HeaderCol = _col.HeaderCol;
DoubleEntryTable.TitleCol = _col.TitleCol;