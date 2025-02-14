import styled from 'styled-components'
import COLORS from '../../../../constants/colors-config'
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography'
import { ScreenConfig } from '../../../../constants/screen-config'
import TYPOGRAPHY from '../../../../constants/typography-config'

export const Styles = styled.div`
  position: relative;

  .DoubleEntryTable__TableContainer {
    overflow-x: scroll;
    margin-bottom: ${pxToRem(30)};
    border-left: ${pxToRem(2)} solid rgba(255, 255, 255, 0.0667);
    border-right: ${pxToRem(2)} solid rgba(255, 255, 255, 0.0667);

    background: linear-gradient(to right, white 30%, transparent),
      linear-gradient(to left, white 30%, transparent),
      radial-gradient(
        farthest-side at 0 50%,
        rgba(34, 34, 34, 0.2),
        transparent
      ),
      radial-gradient(
        farthest-side at 100% 50%,
        rgba(34, 34, 34, 0.2),
        transparent
      );

    background-repeat: no-repeat;
    background-size: ${pxToRem(40)} 100%, ${pxToRem(40)} 100%,
      ${pxToRem(14)} 100%, ${pxToRem(14)} 100%;
    background-position: ${pxToRem(120)}, 100%;

    /* Opera doesn't support this in the shorthand */
    background-attachment: local, local, scroll, scroll;

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
  }

  .DoubleEntryTable__Column {
    height: ${pxToRem(68)};
    padding: 0 ${pxToRem(20)};
    border: var(--border);
    font-size: ${stepToRem(-1)};
    line-height: 1.3;
    box-sizing: border-box;
    text-align: left;
    width: ${pxToRem(120)} !important;
    vertical-align: middle;

    &.DoubleEntryTable__Column--Col {
      ${TYPOGRAPHY.fontStyles['400']}
      white-space: nowrap;
      border-left-width: 0;
      border-top-width: 0;
    }

    &.DoubleEntryTable__Column--TitleCol {
      ${TYPOGRAPHY.fontStyles['500']}
      background: ${COLORS.background1};
      border-top-width: 0;
      border-left-width: var(--border-width);

      position: sticky;
      left: 0;

      @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
        width: ${({ firstColWidth }) => pxToRem(firstColWidth)} !important;
      }
    }

    &.DoubleEntryTable__Column--HeaderCol {
      ${TYPOGRAPHY.fontStyles['700']}
      background: rgba(0,0,0,.016);
      border-left-width: 0;
      width: ${pxToRem(135)};

      &:first-child {
        background: ${COLORS.background2};
        border-color: var(--color-grey-400);
        border-left-width: var(--border-width);

        position: sticky;
        left: 0;

        @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
          width: ${({ firstColWidth }) => pxToRem(firstColWidth)} !important;
        }
      }
    }
  }
`
