import styled from 'styled-components'
import COLORS from '../../../constants/colors-config'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import TYPOGRAPHY from '../../../constants/typography-config'

export const Styles = styled.div`
  position: relative;

  .SingleEntryTable__Table {
    width: 100%;
    border-spacing: 0;
    table-layout: fixed;
    border-collapse: separate;

    @media screen and (min-width: 0\0) {
      /* IE */
      border-collapse: collapse;
    }
  }

  .SingleEntryTable__Column {
    height: ${pxToRem(68)};
    padding: 0 ${pxToRem(20)};
    border: ${pxToRem(2)} solid ${COLORS.line1};
    font-size: ${stepToRem(-1)};
    line-height: 1.3;
    box-sizing: border-box;
    text-align: left;
    vertical-align: middle;

    &.SingleEntryTable__Column--Col {
      ${TYPOGRAPHY.fontStyles.light}
      white-space: nowrap;
      border-left-width: 0;
      border-top-width: 0;

      &:first-child {
        border-left-width: ${pxToRem(2)};
      }
    }

    &.SingleEntryTable__Column--HeaderCol {
      ${TYPOGRAPHY.fontStyles.bold}
      background: ${COLORS.background2};
      border-left-width: 0;

      &:first-child {
        border-color: ${COLORS.line1};
        border-left-width: ${pxToRem(2)};
      }
    }
  }
`
