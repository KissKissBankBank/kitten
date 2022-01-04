import styled from 'styled-components'
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography'
import { mq } from '../../../../constants/screen-config'

export const StyledContributionCard = styled.article`
  /* CARD STYLE */

  max-width: 100%;
  position: relative;
  display: block;
  overflow: hidden;
  box-sizing: border-box;

  border-width: var(--border-width);
  border-style: var(--contributionCard--border-style);
  border-color: var(--contributionCard--border-color);
  border-radius: var(--contributionCard--border-radius);

  @media ${mq.tabletAndDesktop} {
    height: calc(${pxToRem(100)} + 2 * var(--border-width));
    display: flex;
  }

  /* IMAGE */

  .k-ContributionCard__imageWrapper {
    position: relative;
    overflow: hidden;

    display: flex;
    align-items: center;
    justify-content: center;

    @media ${mq.tabletAndDesktop} {
      flex: 0 0 ${pxToRem(160)};
    }

    @media ${mq.mobile} {
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

      @media ${mq.tabletAndDesktop} {
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
    z-index: 1;
  }

  .k-ContributionCard__gridWrapper {
    padding: ${pxToRem(20)};

    display: grid;
    align-items: center;
    align-content: flex-start;
    grid-gap: ${pxToRem(20)} ${pxToRem(10)};
    grid-template-columns: 1fr auto;
    grid-template-rows: 1fr auto;

    @media ${mq.tabletAndDesktop} {
      width: 100%;

      grid-gap: 0 ${pxToRem(10)};
      grid-template-columns: auto ${pxToRem(85)} ${pxToRem(110)};
      grid-template-rows: 1fr;

      &.k-ContributionCard__gridWrapper--largeInput {
        grid-template-columns: auto ${pxToRem(102)} ${pxToRem(150)};
      }
    }
  }

  /* SUBCOMPONENTS */

  .k-ContributionCard__title {
    grid-column: 1 / span 2;
    grid-row: 1;

    font-size: ${stepToRem(-1)};
    line-height: ${pxToRem(16)};
    place-self: center start;

    @media ${mq.tabletAndDesktop} {
      font-size: ${stepToRem(0)};
      margin-top: 0;

      :not(.k-ContributionCard__title--large) {
        grid-column: 1;
      }
    }
  }

  .k-ContributionCard__pillNumber {
    place-self: center flex-start;
  }

  .k-ContributionCard__amount {
    place-self: center flex-end;

    @media ${mq.tabletAndDesktop} {
      margin-right: ${pxToRem(10)};
      margin-top: 0;
      place-self: center center;
    }
  }

  /* PETIT PLUS */

  .k-ContributionCard__input {
    place-self: flex-start center;

    @media ${mq.tabletAndDesktop} {
      place-self: center flex-start;
    }
  }

  .k-ContributionCard__action {
    place-self: flex-start center;

    @media ${mq.tabletAndDesktop} {
      place-self: center flex-end;
    }
  }

  .k-ContributionCard__description {
    margin-top: ${pxToRem(5)};
    margin-bottom: 0;
  }
`
