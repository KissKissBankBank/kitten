import styled from 'styled-components';
import COLORS from '../../../../constants/colors-config';
import { pxToRem } from '../../../../helpers/utils/typography';
export var StyledGridTable = styled.section.withConfig({
  displayName: "styles__StyledGridTable",
  componentId: "sc-139t6d2-0"
})([".k-GridTable{display:grid;}.k-GridTable__Header,.k-GridTable__HeaderList,.k-GridTable__Body,.k-GridTable__Row,.k-GridTable__RowList{display:contents;}.k-GridTable__Col{display:flex;justify-content:space-between;align-items:center;}.k-GridTable__Header .k-GridTable__Col{height:", ";background-color:", ";color:", ";position:sticky;top:0;}.k-GridTable__Row .k-GridTable__Col{min-height:", ";border-bottom:var(--border);background-color:var(--color-grey-000);transition:background-color var(--transition);}.k-GridTable__Row.k-GridTable__Row--is_highlighted .k-GridTable__Col{background-color:var(--color-primary-100);}"], pxToRem(50), COLORS.background3, COLORS.font1, pxToRem(80));