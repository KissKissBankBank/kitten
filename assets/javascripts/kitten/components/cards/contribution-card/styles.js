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
  display: flex;
  flex-direction: row;
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
  

  /* IMAGE */

  .k-ContributionCard__imageWrapper {
    flex: 0 0 ${pxToRem(80)};
    top: ${pxToRem(20)};
    left: ${pxToRem(20)};
    position: relative;
    max-width: calc(100% + 2 * var(--contributionCard--border-width));
    overflow: hidden;

    @media (min-width: ${ScreenConfig.S.min}px) {
     
      /* IE11 defaults */
      border-top-left-radius: ${pxToRem(8)};
      border-bottom-left-radius: ${pxToRem(8)};

      border-top-left-radius: var(--contributionCard--border-radius);
      border-bottom-left-radius: var(--contributionCard--border-radius);
        
      display: flex;
      align-items: center;
      flex: 0 0 ${pxToRem(140)};
      top: 0;
      left: 0;
    }

    img,
    figure {
      position: absolute;
      width: ${pxToRem(80)};
  
      @media (min-width: ${ScreenConfig.S.min}px) {
        object-fit: cover;
        object-position: center center;
        width: ${pxToRem(140)};
        height: 100%;
        transition: transform 0.2s ease-in-out;

        /* IE11 default */
        border-top-left-radius: ${pxToRem(8)};
        border-bottom-left-radius: ${pxToRem(8)};

        border-top-left-radius: var(--contributionCard--border-radius);
        border-bottom-left-radius: var(--contributionCard--border-radius);
      }
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
    
    &.k-ContributionCard__shouldHide {
      pointer-events: none;
      animation: ${fadeOut} 0.4s cubic-bezier(0.895, 0.03, 0.685, 0.22) forwards;
    }
  }

  .k-ContributionCard__gridWrapper {
    width: 100%;
    display: grid;
    padding-top: ${pxToRem(20)};
    padding-bottom: ${pxToRem(20)};
    padding-left:${pxToRem(40)};
    align-items: center;
    align-content: flex-start;
    justify-self: center;

    grid-gap: ${pxToRem(20)} ${pxToRem(10)};
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr auto;

    grid-template-areas:
      "cc-text cc-text"
      "cc-input cc-action";

    @media (min-width: ${ScreenConfig.S.min}px) {
      padding-top: ${pxToRem(20)};
      padding-bottom: ${pxToRem(20)};
      padding-left: ${pxToRem(30)};

      grid-gap: 0 ${pxToRem(10)};
      grid-template-columns: auto ${pxToRem(85)} ${pxToRem(150)};
      grid-template-rows: 1fr;
      grid-template-areas:
        "cc-text cc-input cc-action";
    }
  }

  /* IE 11 */
  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
    display: -ms-grid;
  }

  /* SUBCOMPONENTS */

  .k-ContributionCard__title {
    grid-area: cc-text;
    font-size: ${stepToRem(-1)};
    line-height: ${pxToRem(16)};
    place-self: center start;
    margin-right: ${pxToRem(30)};
    margin-top: ${pxToRem(10)};

    @media (min-width: ${ScreenConfig.S.min}px) {
      font-size: ${stepToRem(0)};
      margin-top: 0;
      margin-right: 0;
    }
  }

  .k-ContributionCard__pillNumber {
    grid-area: cc-input;
    place-self:  center flex-start;
    @media (min-width: ${ScreenConfig.S.min}px) {
      place-self: center flex-start;
    }
  }
  .k-ContributionCard__amount {
    margin-right: ${pxToRem(30)};
    grid-area: cc-action;
    place-self: center center;

    @media (min-width: ${ScreenConfig.S.min}px) {
      margin-right: ${pxToRem(60)};
      place-self: center flex-end;
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
    margin-right: ${pxToRem(20)};
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
  }

  > .k-ContributionCard__input--isEmpty + .k-ContributionCard__action {
      cursor: not-allowed;
      border-color: ${COLORS.line2};
      background-color: ${COLORS.line2};
      color: ${COLORS.background1};
    }

  .k-ContributionCard__description {
    margin-right: ${pxToRem(20)};
    margin-top: ${pxToRem(5)};
    margin-bottom: 0;

    @media (min-width: ${ScreenConfig.S.min}px) {
      margin-right: 0;
    }
  }
`
