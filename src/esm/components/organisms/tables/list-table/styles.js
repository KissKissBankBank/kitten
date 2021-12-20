import { createGlobalStyle } from 'styled-components';
import COLORS from '../../../../constants/colors-config';
import { ScreenConfig } from '../../../../constants/screen-config';
import { CONTAINER_MAX_WIDTH, CONTAINER_PADDING_THIN, CONTAINER_PADDING } from '../../../../constants/grid-config';
import { pxToRem } from '../../../../helpers/utils/typography';
export var ListTableStyles = createGlobalStyle(["section.k-ListTable,section.k-ListTable *{box-sizing:border-box;}.k-ListTable__Header{position:sticky;top:0;background:", ";color:", ";}.k-ListTable__HeaderList{height:", ";margin:0 auto;max-width:", ";padding-left:", ";padding-right:", ";display:flex;justify-content:space-between;align-items:center;list-style:none;@media screen and (min-width:", "px){padding-left:", ";padding-right:", ";}}.k-ListTable__Body{list-style:none;margin:0;padding:0;}.k-ListTable__Row{border-bottom:var(--border);&.k-ListTable__Row--is_highlighted{background:", ";}}.k-ListTable__RowList{height:", ";margin:0 auto;max-width:", ";padding-left:", ";padding-right:", ";display:flex;justify-content:space-between;align-items:flex-end;list-style:none;@media screen and (min-width:", "px){padding-left:", ";padding-right:", ";}}.k-ListTable__Col{flex-grow:0;flex-shrink:0;display:flex;justify-content:space-between;align-items:center;height:100%;&:not(:first-child){padding-left:", ";}@media screen and (min-width:", "px){&:not(:first-child){padding-left:", ";}}}"], COLORS.font1, COLORS.background1, pxToRem(90), pxToRem(CONTAINER_MAX_WIDTH), pxToRem(CONTAINER_PADDING_THIN), pxToRem(CONTAINER_PADDING_THIN), ScreenConfig.M.min, pxToRem(CONTAINER_PADDING), pxToRem(CONTAINER_PADDING), COLORS.primary5, pxToRem(90), pxToRem(CONTAINER_MAX_WIDTH), pxToRem(CONTAINER_PADDING_THIN), pxToRem(CONTAINER_PADDING_THIN), ScreenConfig.M.min, pxToRem(CONTAINER_PADDING), pxToRem(CONTAINER_PADDING), pxToRem(CONTAINER_PADDING_THIN), ScreenConfig.M.min, pxToRem(CONTAINER_PADDING));