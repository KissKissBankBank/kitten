  
import styled, { keyframes } from 'styled-components'
import COLORS from '../../../constants/colors-config'
import TYPOGRAPHY from '../../../constants/typography-config'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import { ScreenConfig } from '../../../constants/screen-config'

const fadeOut = keyframes`
0% { opacity: 1; }
100% { opacity: 0; }
`

export const StyledContributionCard = styled.article`
  --contributionCard--border-width: ${pxToRem(2)};
  --contributionCard--border-radius: ${pxToRem(8)};
  --contributionCard--grid-col: repeat(auto-fit, minmax(${pxToRem(120)}, 1fr));
  --contributionCard--border-color: ${COLORS.line1};


  /* CARD STYLE */

  max-width: 100%;
  border: var(--contributionCard--border-width) solid
    var(--contributionCard--border-color);
  border-radius: var(--contributionCard--border-radius);
  border: ${pxToRem(2)} solid ${COLORS.line1};

  position: relative;
  display: flex;
  flex-direction: row;

  overflow: hidden;
  box-sizing: border-box;
  
  @media (min-width: ${ScreenConfig.S.min}px) {
    max-width: ${pxToRem(670)};
  }

/* IMAGE */
  .k-ContributionCard__imageWrapper {
    flex: 0 0 ${pxToRem(80)};
    top: ${pxToRem(20)};
    left: ${pxToRem(20)};
    position: relative;

    max-width: calc(100% + 2 * var(--contributionCard--border-width));
    ${'' /* margin: calc(-1 * var(--contributionCard--border-width))
      calc(-1 * var(--contributionCard--border-width)) 0; */}
    
    overflow: hidden;

    @media (min-width: ${ScreenConfig.S.min}px) {
      border-top-left-radius: var(--contributionCard--border-radius);
      border-bottom-left-radius: var(--contributionCard--border-radius);
        
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
        border-top-left-radius: var(--contributionCard--border-radius);
        border-bottom-left-radius: var(--contributionCard--border-radius);
        transition: transform 0.2s ease-in-out;
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
    max-width: 100%;
    display: grid;
    padding: ${pxToRem(20)} ${pxToRem(30)} ${pxToRem(20)} ${pxToRem(40)};
    align-items: center;
    justify-self: center;

    grid-gap: ${pxToRem(20)} auto;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;

    grid-template-areas:
      "cc-text cc-text"
      "cc-pill cc-amount";

    ${'' /* -ms-grid-columns: 1fr auto 1fr;
    -ms-grid-rows: 1fr ${pxToRem(20)} 1fr; */}

 
    @media (min-width: ${ScreenConfig.S.min}px) {
      padding: ${pxToRem(20)} ${pxToRem(60)} ${pxToRem(20)} ${pxToRem(30)};

      grid-gap: auto ${pxToRem(30)};
      grid-template-columns: ${pxToRem(240)} 1fr 1fr;
      grid-template-rows: 1fr;
      grid-template-areas:
      "cc-text cc-pill cc-amount";

      ${'' /* -ms-grid-columns: ${pxToRem(240)} ${pxToRem(30)} 1fr 1fr;
      -ms-grid-rows: 1fr auto; */}
    }
  }

  /* IE 11 */
  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
    display: -ms-grid;
  }

  /* SUBCOMPONENTS */

  .k-ContributionCard__subSummary {
    grid-area: cc-text;

    font-size: ${stepToRem(-1)};
    line-height: ${pxToRem(16)};

    place-self: center start;

    @media (min-width: ${ScreenConfig.XS.min}px) {
      font-size: ${stepToRem(0)};
    }
  }

  .k-ContributionCard__pillNumber {
    grid-area: cc-pill;
    place-self: center start;
  }

  .k-ContributionCard__amount {
    grid-area: cc-amount;
    place-self: center end;
  }
`
