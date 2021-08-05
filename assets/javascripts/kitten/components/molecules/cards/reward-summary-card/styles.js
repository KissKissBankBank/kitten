import styled from 'styled-components'
import COLORS from '../../../../constants/colors-config'
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography'
import { ScreenConfig } from '../../../../constants/screen-config'

export const StyledRewardSummaryCard = styled.article`
  /* CARD STYLE */

  max-width: 100%;
  position: relative;
  display: block;
  overflow: hidden;
  box-sizing: border-box;

  /* IE11 defaults */
  border-width: ${pxToRem(2)};
  border-style: solid;
  border-color: ${COLORS.line1};
  border-radius: ${pxToRem(8)};

  border-width: var(--rewardSummaryCard--border-width);
  border-style: var(--rewardSummaryCard--border-style);
  border-color: var(--rewardSummaryCard--border-color);
  border-radius: var(--rewardSummaryCard--border-radius);

  @media (min-width: ${ScreenConfig.M.min}px) {
    height: calc(${pxToRem(100)} + 2 * var(--rewardSummaryCard--border-width));
    display: flex;
  }

  /* IMAGE */

  .k-RewardSummarynCard__imageWrapper {
    position: relative;
    overflow: hidden;

    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: ${ScreenConfig.M.min}px) {
      flex: 0 0 ${pxToRem(160)};
    }

    @media (max-width: ${ScreenConfig.S.max}px) {
      padding-top: calc(5 / 8 * 100%);
    }

    img,
    figure {
      display: block;
      position: absolute;
      object-fit: cover;
      object-position: center center;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
    }

    svg {
      width: 80%;

      @media (min-width: ${ScreenConfig.M.min}px) {
        width: 100%;
      }
    }
  }

  /* STRUCTURE */

  .k-RewardSummaryCard__gridWrapper {
    padding: ${pxToRem(20)};

    display: grid;
    align-items: center;
    align-content: flex-start;
    grid-gap: ${pxToRem(20)} ${pxToRem(10)};
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr auto;

    @media (min-width: ${ScreenConfig.M.min}px) {
      width: 100%;

      grid-gap: 0 ${pxToRem(10)};
      grid-template-columns: auto ${pxToRem(85)} ${pxToRem(150)};
      grid-template-rows: 1fr;
    }
  }

  /* SUBCOMPONENTS */

  .k-RewardSummaryCard__title {
    grid-column: 1 / span 2;
    grid-row: 1;

    font-size: ${stepToRem(-1)};
    line-height: ${pxToRem(16)};
    place-self: center start;

    @media (min-width: ${ScreenConfig.M.min}px) {
      font-size: ${stepToRem(0)};
      margin-top: 0;
    }
  }

  .k-RewardSummaryCard__amount {
  }

  .k-RewardSummaryCard__rewardNumber {
  }

  .k-RewardSummaryCard__availablity {
  }
`
