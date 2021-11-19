import styled, { css } from 'styled-components'
import COLORS from '../../../../constants/colors-config'
import TYPOGRAPHY from '../../../../constants/typography-config'
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography'
import { ScreenConfig } from '../../../../constants/screen-config'

const commonStyles = css`
  @media (min-width: ${ScreenConfig.S.min}px) {
    display: flex;
    align-items: center;
  }

  .k-RewardSummaryCard-Wrapper__imageWrapper {
    @media (min-width: ${ScreenConfig.S.min}px) {
      align-self: stretch;
      flex: 0 0 ${pxToRem(160)};
    }
  }

  .k-RewardSummaryCard-Wrapper__gridWrapper {
    @media (min-width: ${ScreenConfig.S.min}px) {
      display: grid;
      align-items: center;
      align-content: flex-start;
      width: 100%;
      padding-left: ${pxToRem(30)};
      padding-right: ${pxToRem(30)};
      grid-template-columns:
        minmax(${pxToRem(250)}, 1fr)
        ${pxToRem(90)}
        ${pxToRem(100)}
        ${pxToRem(90)}
        ${pxToRem(20)};
      grid-template-rows: 1fr;
      grid-template-areas: 'info amount contribution availability options';
    }

    & > [class*='__info'] {
      grid-area: info;
    }

    & > [class*='__amount'] {
      @media (min-width: ${ScreenConfig.S.min}px) {
        grid-area: amount;
      }
    }

    & > [class*='__contribution'] {
      grid-area: contribution;
    }

    & > [class*='__availability'] {
      grid-area: availability;
    }

    & > [class*='__options'] {
      grid-area: options;
    }
  }

  @media (min-width: ${ScreenConfig.S.min}px) {
    &.k-RewardSummaryCard-Wrapper--tablet {
      .k-RewardSummaryCard-Wrapper__imageWrapper {
        display: none;
      }
    }
    &.k-RewardSummaryCard-Wrapper--small,
    &.k-RewardSummaryCard-Wrapper--mobile {
      .k-RewardSummaryCard-Wrapper__imageWrapper {
        display: none;
      }
      .k-RewardSummaryCard-Wrapper__gridWrapper {
        grid-template-columns:
          minmax(${pxToRem(120)}, 1fr)
          ${pxToRem(90)}
          ${pxToRem(90)}
          ${pxToRem(20)};
        grid-template-areas: 'info amount contribution options';

        & > [class*='__availability'] {
          display: none;
        }
      }
    }
  }
`

export const StyledRewardSummaryCard = styled.div`
  --rewardSummaryCard--border-width: var(--border-width);
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
  border-color: var(--color-grey-400);
  border-radius: var(--rewardSummaryCard--border-radius);

  @media (min-width: ${ScreenConfig.S.min}px) {
    min-height: ${pxToRem(100)};
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
    z-index: 1;

    :focus-visible {
      outline: auto;
    }
  }

  /* IMAGE */

  .k-RewardSummaryCard__imageWrapper {
    position: relative;
    overflow: hidden;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: ${ScreenConfig.XS.max}px) {
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
      border-top-right-radius: calc(
        var(--rewardSummaryCard--border-radius) - ${pxToRem(2)}
      );

      @media (min-width: ${ScreenConfig.S.min}px) {
        border-top-left-radius: calc(
          var(--rewardSummaryCard--border-radius) - ${pxToRem(2)}
        );
        border-bottom-left-radius: calc(
          var(--rewardSummaryCard--border-radius) - ${pxToRem(2)}
        );
        border-top-right-radius: 0;
      }
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
    padding: ${pxToRem(15)} ${pxToRem(20)};

    display: grid;
    align-items: center;
    align-content: flex-start;
    grid-gap: ${pxToRem(10)} 0;
    grid-template-columns: 1fr auto;
    grid-template-rows: 1fr auto;
  }

  /* SUBCOMPONENTS */

  .k-RewardSummaryCard__title {
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;

    max-height: 4.5rem;
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
  }

  .k-RewardSummaryCard__contribution {
    margin-right: ${pxToRem(10)};
    margin-top: 0;
    place-self: center flex-start;
  }

  .k-RewardSummaryCard__availability {
    margin-right: ${pxToRem(10)};
    margin-top: 0;
    place-self: center flex-start;
  }

  .k-RewardSummaryCard__options {
    z-index: 2;
    place-self: stretch flex-end;
    display: flex;
    align-items: stretch;
    justify-content: stretch;
    margin: ${pxToRem(-20)} ${pxToRem(-30)};

    .k-DropdownMenu .k-DropdownMenu__button {
      box-sizing: border-box;
      padding: 0 ${pxToRem(30)};

      &:focus-visible .k-DropdownMenu__button__inside {
        outline: auto;
        outline-offset: ${pxToRem(-2)};
      }
    }
  }

  ${commonStyles}
`

export const StyledRewardSummaryTitles = styled.div`
  ${commonStyles}
`
