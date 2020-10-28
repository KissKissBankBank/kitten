import styled from 'styled-components'
import COLORS from '../../../constants/colors-config'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import TYPOGRAPHY from '../../../constants/typography-config'
import { hexToRgba as rgba } from '../../../helpers/utils/hex-to-rgba'
import { ScreenConfig } from '../../../constants/screen-config'

export const Styles = styled.div`
  position: relative;

  &.SingleEntryTable--isSliding .SingleEntryTable__TableContainer {
    overflow-x: scroll;
    margin-bottom: ${pxToRem(30)};
    border-left: ${pxToRem(2)} solid ${rgba(COLORS.background1, 0.0667)};
    border-right: ${pxToRem(2)} solid ${rgba(COLORS.background1, 0.0667)};

    background: linear-gradient(
        to right,
        white 30%,
        ${rgba(COLORS.background1, 0)}
      ),
      linear-gradient(to left, white 30%, ${rgba(COLORS.background1, 0)}),
      radial-gradient(
        farthest-side at 0 50%,
        ${rgba(COLORS.font1, 0.2)},
        ${rgba(COLORS.font1, 0)}
      ),
      radial-gradient(
        farthest-side at 100% 50%,
        ${rgba(COLORS.font1, 0.2)},
        ${rgba(COLORS.font1, 0)}
      );

    background-repeat: no-repeat;
    background-size: ${pxToRem(40)} 100%, ${pxToRem(40)} 100%,
      ${pxToRem(14)} 100%, ${pxToRem(14)} 100%;
    background-position: 0, 100%;

    /* Opera doesn't support this in the shorthand */
    background-attachment: local, local, scroll, scroll;

    @media screen and (min-width: 0\0) {
      /* IE */
      background: ${COLORS.background1};
    }

    @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
      background-position: 0, 100%;
    }
  }

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
    padding: ${pxToRem(20)};
    border: ${pxToRem(2)} solid rgba(0, 0, 0, 0.067);
    font-size: ${stepToRem(-1)};
    line-height: 1.3;
    box-sizing: border-box;
    text-align: left;
    vertical-align: middle;

    &.SingleEntryTable__Column--Col {
      ${TYPOGRAPHY.fontStyles.light}
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
