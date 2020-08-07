"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListTableStyles = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = require("styled-components");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _screenConfig = require("../../../constants/screen-config");

var _gridConfig = require("../../../constants/grid-config");

var _typography = require("../../../helpers/utils/typography");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  section.k-ListTable,\n  section.k-ListTable * {\n    box-sizing: border-box;\n  }\n\n  .k-ListTable__Header {\n    position: sticky;\n    top: 0;\n    background: ", ";\n    color: ", ";\n  }\n\n  .k-ListTable__HeaderList {\n    height: ", ";\n    margin: 0 auto;\n    max-width: ", ";\n    padding-left: ", ";\n    padding-right: ", ";\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    list-style: none;\n\n    @media screen and (min-width: ", "px) {\n      padding-left: ", ";\n      padding-right: ", ";\n    }\n  }\n\n  .k-ListTable__Body {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n  }\n\n  .k-ListTable__Row {\n    border-bottom: 2px solid ", ";\n\n    .k-ListTable__Row--is_highlighted {\n      background: ", ";\n    }\n  }\n\n  .k-ListTable__RowList {\n    height: ", ";\n    margin: 0 auto;\n    max-width: ", ";\n    padding-left: ", ";\n    padding-right: ", ";\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n    list-style: none;\n\n    @media screen and (min-width: ", "px) {\n      padding-left: ", ";\n      padding-right: ", ";\n    }\n  }\n\n  .k-ListTable__Col {\n    flex-grow: 0;\n    flex-shrink: 0;\n\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: 100%;\n\n    &:not(:first-child) {\n      padding-left: ", ";\n    }\n\n    @media screen and (min-width: ", "px) {\n      &:not(:first-child) {\n        padding-left: ", ";\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var ListTableStyles = (0, _styledComponents.createGlobalStyle)(_templateObject(), _colorsConfig.default.font1, _colorsConfig.default.background1, (0, _typography.pxToRem)(90), (0, _typography.pxToRem)(_gridConfig.CONTAINER_MAX_WIDTH), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN), _screenConfig.ScreenConfig.M.min, (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING), _colorsConfig.default.line1, _colorsConfig.default.primary6, (0, _typography.pxToRem)(90), (0, _typography.pxToRem)(_gridConfig.CONTAINER_MAX_WIDTH), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN), _screenConfig.ScreenConfig.M.min, (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN), _screenConfig.ScreenConfig.M.min, (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING));
exports.ListTableStyles = ListTableStyles;