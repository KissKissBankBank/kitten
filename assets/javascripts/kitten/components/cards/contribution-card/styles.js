import styled, { keyframes } from 'styled-components'
import COLORS from '../../../constants/colors-config'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import { ScreenConfig } from '../../../constants/screen-config'

const fadeOut = keyframes`
0% { opacity: 1; }
100% { opacity: 0; }
`

export const StyledContributionCard = styled.article`
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

  border-width: var(--contributionCard--border-width);
  border-style: var(--contributionCard--border-style);
  border-color: var(--contributionCard--border-color);
  border-radius: var(--contributionCard--border-radius);

  @media (min-width: ${ScreenConfig.S.min}px) {
    height: calc(${pxToRem(100)} + 2 * var(--contributionCard--border-width));
    display: flex;
  }

  /* IMAGE */

  .k-ContributionCard__imageWrapper {
    position: relative;
    overflow: hidden;

    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: ${ScreenConfig.XS.max}px) {
      padding-top: calc(5 / 8 * 100%);
    }

    @media (min-width: ${ScreenConfig.S.min}px) {
      flex: 0 0 ${pxToRem(160)};
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

      @media (min-width: ${ScreenConfig.S.min}px) {
        width: 100%;
      }
    }
  }

  /* STRUCTURE */

  .k-ContributionCard__close {
    position: absolute;
    right: 0;
    top: 0;
    border-right: none;
    border-top: none;
  }

  .k-ContributionCard__gridWrapper {
    display: grid;
    padding: ${pxToRem(20)};
    align-items: center;
    align-content: flex-start;
    grid-gap: ${pxToRem(20)} ${pxToRem(10)};
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr auto;

    grid-template-areas:
      'cc-text cc-text'
      'cc-input cc-action';

    @media (min-width: ${ScreenConfig.S.min}px) {
      width: 100%;
      grid-gap: 0 ${pxToRem(10)};
      grid-template-columns: auto ${pxToRem(85)} ${pxToRem(150)};
      grid-template-rows: 1fr;
      grid-template-areas: 'cc-text cc-input cc-action';

      &.k-ContributionCard__gridWrapper--largeInput {
        grid-template-columns: auto ${pxToRem(102)} ${pxToRem(150)};
      }
    }

  }

  /* SUBCOMPONENTS */

  .k-ContributionCard__title {
    grid-area: cc-text;
    font-size: ${stepToRem(-1)};
    line-height: ${pxToRem(16)};
    place-self: center start;

    @media (min-width: ${ScreenConfig.S.min}px) {
      font-size: ${stepToRem(0)};
      margin-top: 0;
    }
  }

  .k-ContributionCard__pillNumber {
    grid-area: cc-input;
    place-self: center flex-start;

    @media (min-width: ${ScreenConfig.S.min}px) {
      place-self: center flex-start;
    }
  }
  .k-ContributionCard__amount {
    grid-area: cc-action;
    place-self: center flex-end;

    @media (min-width: ${ScreenConfig.S.min}px) {
      margin-right: ${pxToRem(40)};
      margin-top: 0;
    }
  }

  /* PETIT PLUS */

  .k-ContributionCard__input {
    grid-area: cc-input;
    place-self: flex-start center;

    @media (min-width: ${ScreenConfig.S.min}px) {
      place-self: center flex-start;
    }
  }

  .k-ContributionCard__action {
    grid-area: cc-action;
    place-self: flex-start center;
    min-width: auto;

    border-color: ${COLORS.primary1};
    background-color: ${COLORS.primary1};
    color: ${COLORS.background1};

    @media (min-width: ${ScreenConfig.S.min}px) {
      margin-right: ${pxToRem(30)};
      place-self: center flex-end;
    }

    &.k-ContributionCard__actionHide {
      display: none;
    }
  }

  .k-ContributionCard__inputWrapper--isEmpty + .k-ContributionCard__action {
    cursor: not-allowed;
    border-color: ${COLORS.line2};
    background-color: ${COLORS.line2};
    color: ${COLORS.background1};
  }

  .k-ContributionCard__description {
    margin-top: ${pxToRem(5)};
    margin-bottom: 0;
  }
`
