import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  section.k-ListTable,\n  section.k-ListTable * {\n    box-sizing: border-box;\n  }\n\n  .k-ListTable__Header {\n    position: sticky;\n    top: 0;\n    background: ", ";\n    color: ", ";\n  }\n\n  .k-ListTable__HeaderList {\n    height: ", ";\n    margin: 0 auto;\n    max-width: ", ";\n    padding-left: ", ";\n    padding-right: ", ";\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    list-style: none;\n\n    @media screen and (min-width: ", "px) {\n      padding-left: ", ";\n      padding-right: ", ";\n    }\n  }\n\n  .k-ListTable__Body {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n  }\n\n  .k-ListTable__Row {\n    border-bottom: 2px solid ", ";\n\n    .k-ListTable__Row--is_highlighted {\n      background: ", ";\n    }\n  }\n\n  .k-ListTable__RowList {\n    height: ", ";\n    margin: 0 auto;\n    max-width: ", ";\n    padding-left: ", ";\n    padding-right: ", ";\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n    list-style: none;\n\n    @media screen and (min-width: ", "px) {\n      padding-left: ", ";\n      padding-right: ", ";\n    }\n  }\n\n  .k-ListTable__Col {\n    flex-grow: 0;\n    flex-shrink: 0;\n\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: 100%;\n\n    &:not(:first-child) {\n      padding-left: ", ";\n    }\n\n    @media screen and (min-width: ", "px) {\n      &:not(:first-child) {\n        padding-left: ", ";\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import { createGlobalStyle } from 'styled-components';
import COLORS from '../../../constants/colors-config';
import { ScreenConfig } from '../../../constants/screen-config';
import { CONTAINER_MAX_WIDTH, CONTAINER_PADDING_THIN, CONTAINER_PADDING } from '../../../constants/grid-config';
import { pxToRem } from '../../../helpers/utils/typography';
export var ListTableStyles = createGlobalStyle(_templateObject(), COLORS.font1, COLORS.background1, pxToRem(90), pxToRem(CONTAINER_MAX_WIDTH), pxToRem(CONTAINER_PADDING_THIN), pxToRem(CONTAINER_PADDING_THIN), ScreenConfig.M.min, pxToRem(CONTAINER_PADDING), pxToRem(CONTAINER_PADDING), COLORS.line1, COLORS.primary6, pxToRem(90), pxToRem(CONTAINER_MAX_WIDTH), pxToRem(CONTAINER_PADDING_THIN), pxToRem(CONTAINER_PADDING_THIN), ScreenConfig.M.min, pxToRem(CONTAINER_PADDING), pxToRem(CONTAINER_PADDING), pxToRem(CONTAINER_PADDING_THIN), ScreenConfig.M.min, pxToRem(CONTAINER_PADDING));