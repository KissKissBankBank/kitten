import styled from 'styled-components'
import COLORS from '../../../constants/colors-config'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import { ScreenConfig } from '../../../constants/screen-config'
import TYPOGRAPHY from '../../../constants/typography-config'

export const Styles = styled.div`
  position: relative;

  .DoubleEntryTable__TableContainer {
    overflow-x: scroll;
    margin-bottom: ${pxToRem(30)};
    border-left: ${pxToRem(2)} solid hsla(var(--color-hsl-background1), 0.0667);
    border-right: ${pxToRem(
      2,
    )} solid hsla(var(--color-hsl-background1), 0.0667);

    background: linear-gradient(
        to right,
        white 30%,
        hsla(var(--color-hsl-background1), 0)
      ),
      linear-gradient(to left, white 30%, hsla(var(--color-hsl-background1), 0)),
      radial-gradient(
        farthest-side at 0 50%,
        hsla(var(--color-hsl-font1), 0.2),
        hsla(var(--color-hsl-font1), 0)
      ),
      radial-gradient(
        farthest-side at 100% 50%,
        hsla(var(--color-hsl-font1), 0.2),
        hsla(var(--color-hsl-font1), 0)
      );

    background-repeat: no-repeat;
    background-size: ${pxToRem(40)} 100%, ${pxToRem(40)} 100%,
      ${pxToRem(14)} 100%, ${pxToRem(14)} 100%;
    background-position: ${pxToRem(120)}, 100%;

    /* Opera doesn't support this in the shorthand */
    background-attachment: local, local, scroll, scroll;

    @media screen and (min-width: 0\0) {
      /* IE */
      background: ${COLORS.background1};
    }

    @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
      background-position: ${({ firstColWidth }) => pxToRem(firstColWidth)},
        100%;
    }
  }

  .DoubleEntryTable__Table {
    width: 100%;
    border-spacing: 0;
    table-layout: fixed;
    border-collapse: separate;

    @media screen and (min-width: 0\0) {
      /* IE */
      border-collapse: collapse;
    }
  }

  .DoubleEntryTable__Column {
    height: ${pxToRem(68)};
    padding: 0 ${pxToRem(20)};
    border: ${pxToRem(2)} solid rgba(0, 0, 0, 0.067);
    font-size: ${stepToRem(-1)};
    line-height: 1.3;
    box-sizing: border-box;
    text-align: left;
    width: ${pxToRem(120)} !important;
    vertical-align: middle;

    @media screen and (min-width: 0\0) {
      /* IE */
      border: ${pxToRem(2)} solid ${COLORS.line1};
    }

    &.DoubleEntryTable__Column--Col {
      ${TYPOGRAPHY.fontStyles.light}
      white-space: nowrap;
      border-left-width: 0;
      border-top-width: 0;
    }

    &.DoubleEntryTable__Column--TitleCol {
      ${TYPOGRAPHY.fontStyles.regular}
      background: ${COLORS.background1};
      border-top-width: 0;
      border-left-width: ${pxToRem(2)};

      position: sticky;
      left: 0;

      @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
        width: ${({ firstColWidth }) => pxToRem(firstColWidth)} !important;
      }
    }

    &.DoubleEntryTable__Column--HeaderCol {
      ${TYPOGRAPHY.fontStyles.bold}
      background: rgba(0,0,0,.016);
      border-left-width: 0;
      width: ${pxToRem(135)};

      @media screen and (min-width: 0\0) {
        /* IE */
        background: ${COLORS.background2};
      }

      &:first-child {
        background: ${COLORS.background2};
        border-color: ${COLORS.line1};
        border-left-width: ${pxToRem(2)};

        position: sticky;
        left: 0;

        @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
          width: ${({ firstColWidth }) => pxToRem(firstColWidth)} !important;
        }
      }
    }
  }
`
