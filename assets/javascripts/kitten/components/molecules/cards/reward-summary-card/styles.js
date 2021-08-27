import styled from 'styled-components'
import COLORS from '../../../../constants/colors-config'
import TYPOGRAPHY from '../../../../constants/typography-config'
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography'
import { ScreenConfig } from '../../../../constants/screen-config'

export const StyledRewardSummaryCard = styled.div`
  --rewardSummaryCard--border-width: ${pxToRem(2)};
  --rewardSummaryCard--border-radius: ${pxToRem(8)};

  /* CARD STYLE */

  max-width: 100%;
  position: relative;
  display: block;
  box-sizing: border-box;
  text-decoration: none;
  background-color: ${COLORS.background1};

  transition: background-color 0.2s ease, border-color 0.2s ease;

  &:hover {
    background-color: ${COLORS.background2};
  }
  &:active {
    background-color: ${COLORS.background3};
  }

  border-width: var(--rewardSummaryCard--border-width);
  border-style: solid;
  border-color: ${COLORS.line1};
  border-radius: ${pxToRem(8)};

  @media (min-width: ${ScreenConfig.M.min}px) {
    height: calc(${pxToRem(100)} + 2 * var(--rewardSummaryCard--border-width));
    display: flex;
    align-items: center;
  }

  /* ACTION */

  .k-RewardSummaryCard__action {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border-radius: var(--rewardSummaryCard--border-radius);
    cursor: pointer;

    &:focus {
      outline: ${COLORS.primary4} solid ${pxToRem(2)};
      outline-offset: 0;
    }
    &:focus:not(:focus-visible) {
      outline-color: transparent;
    }
    &:focus-visible {
      outline-color: ${COLORS.primary4};
    }
  }

  /* IMAGE */

  .k-RewardSummaryCard__imageWrapper {
    position: relative;
    overflow: hidden;

    align-self: stretch;

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
      border-top-left-radius: calc(
        var(--rewardSummaryCard--border-radius) - ${pxToRem(2)}
      );
      border-bottom-left-radius: calc(
        var(--rewardSummaryCard--border-radius) - ${pxToRem(2)}
      );
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
    grid-gap: ${pxToRem(10)};
    grid-template-columns: 1fr auto;
    grid-template-rows: 1fr auto;

    @media (min-width: ${ScreenConfig.S.min}px) {
      width: 100%;
      padding: ${pxToRem(20)} ${pxToRem(30)};
      grid-template-columns: ${pxToRem(250)} auto auto auto auto;
      grid-template-rows: 1fr;
      grid-gap: 0 ${pxToRem(10)};
    }

    @media (min-width: ${ScreenConfig.L.min}px) {
      grid-gap: 0 ${pxToRem(10)};
      grid-template-columns:
        auto
        ${pxToRem(100)}
        ${pxToRem(100)}
        ${pxToRem(150)}
        auto;
      grid-template-rows: 1fr;
      grid-template-areas: 'info amount contribution availablity options';
    }
  }

  /* SUBCOMPONENTS */

  .k-RewardSummaryCard__title {
    max-height: 4rem;
    text-overflow: ellipsis;
    grid-column: 1 / span 2;
    grid-row: 1;
    padding-right: ${pxToRem(30)};

    font-size: ${stepToRem(-1)};
    line-height: ${pxToRem(16)};
    place-self: center start;

    @media (min-width: ${ScreenConfig.S.min}px) {
      grid-column: 1;
      font-size: ${stepToRem(0)};
      margin-top: 0;
    }

    @media (min-width: ${ScreenConfig.L.min}px) {
      grid-area: info;
    }
  }

  .k-RewardSummaryCard__titleTag {
    justify-self: start;
    display: flex;
    align-items: center;
    gap: ${pxToRem(10)};

    color: ${COLORS.primary1};
    ${TYPOGRAPHY.fontStyles.regular}

    svg,
    path {
      color: inherit;

      &[fill] {
        fill: currentColor;
      }
      &[stroke] {
        stroke: currentColor;
      }
    }
  }

  .k-RewardSummaryCard__amount {
    margin-right: ${pxToRem(10)};
    margin-top: 0;
    place-self: center flex-start;

    @media (min-width: ${ScreenConfig.L.min}px) {
      grid-area: amount;
    }
  }

  .k-RewardSummaryCard__contribution {
    margin-right: ${pxToRem(10)};
    margin-top: 0;
    place-self: center flex-start;

    @media (min-width: ${ScreenConfig.L.min}px) {
      grid-area: contribution;
    }
  }

  .k-RewardSummaryCard__availablity {
    margin-right: ${pxToRem(10)};
    margin-top: 0;
    place-self: center flex-start;

    @media (min-width: ${ScreenConfig.L.min}px) {
      grid-area: availablity;
    }
  }

  .k-RewardSummaryCard__options {
    z-index: 2;
    place-self: stretch flex-end;
    display: flex;
    align-items: stretch;
    justify-content: stretch;
    margin: ${pxToRem(-20)} ${pxToRem(-30)};

    @media (min-width: ${ScreenConfig.L.min}px) {
      grid-area: options;
    }

    .k-DropdownMenu .k-DropdownMenu__button {
      box-sizing: border-box;
      padding: 0 ${pxToRem(30)};

      &:focus {
        outline: ${COLORS.primary4} solid ${pxToRem(2)};
        outline-offset: 0;
      }
      &:focus:not(:focus-visible) {
        outline-color: transparent;
      }
      &:focus-visible {
        outline-color: ${COLORS.primary4};
      }
    }
  }
`
