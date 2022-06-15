import React from 'react'
import styled, { css } from 'styled-components'
import TYPOGRAPHY from '../../../../constants/typography-config'
import { pxToRem } from '../../../../helpers/utils/typography'
import { mq } from '../../../../constants/screen-config'

/* ****************************************
   Type-specific common styles
   ****************************************/

const ownerContributionStyles = css`
  @media ${mq.tabletAndDesktop} {
    .k-SummaryCard-Wrapper__gridWrapper {
      grid-template-columns:
        minmax(${pxToRem(140)}, 1fr)
        ${pxToRem(90)}
        ${pxToRem(100)}
        ${pxToRem(90)}
        ${pxToRem(20)};
      grid-template-areas: 'title amount contribution availability last-stretch';
    }

    &.k-SummaryCard-Wrapper--tablet {
      .k-SummaryCard-Wrapper__imageWrapper {
        display: none;
      }
    }
    &.k-SummaryCard-Wrapper--small,
    &.k-SummaryCard-Wrapper--mobile {
      .k-SummaryCard-Wrapper__imageWrapper {
        display: none;
      }
      .k-SummaryCard-Wrapper__gridWrapper {
        grid-template-columns:
          minmax(${pxToRem(120)}, 1fr)
          ${pxToRem(90)}
          ${pxToRem(90)}
          ${pxToRem(20)};
        grid-template-areas: 'title amount contribution last-stretch';

        & > [class*='__availability'] {
          display: none;
        }
      }
    }
  }
`

const ownerSubscriptionStyles = css`
  @media ${mq.tabletAndDesktop} {
    .k-SummaryCard-Wrapper__gridWrapper {
      grid-template-columns:
        minmax(${pxToRem(80)}, 1fr)
        ${pxToRem(80)}
        ${pxToRem(80)}
        ${pxToRem(90)}
        ${pxToRem(110)}
        ${pxToRem(20)};
      grid-template-areas: 'title amount frequency subscription availability last-stretch';
    }

    &.k-SummaryCard-Wrapper--tablet {
      .k-SummaryCard-Wrapper__imageWrapper {
        display: none;
      }
    }

    &.k-SummaryCard-Wrapper--medium {
      .k-SummaryCard-Wrapper__gridWrapper {
        grid-template-columns:
          minmax(${pxToRem(80)}, 1fr)
          ${pxToRem(60)}
          ${pxToRem(80)}
          ${pxToRem(80)}
          ${pxToRem(90)}
          ${pxToRem(20)};
        }
      }
    }

    &.k-SummaryCard-Wrapper--small {
      .k-SummaryCard-Wrapper__imageWrapper {
        display: none;
      }
      .k-SummaryCard-Wrapper__gridWrapper {
        grid-template-columns:
          minmax(${pxToRem(60)}, 1fr)
          ${pxToRem(90)}
          ${pxToRem(90)}
          ${pxToRem(20)};
        grid-template-areas: 'title amount subscription last-stretch';
        
        & > [class*='__frequency'],
        & > [class*='__availability'] {
          display: none;
        }
      }
    }
  }
`

const contributorContributionStyles = css`
  @media ${mq.tabletAndDesktop} {
    .k-SummaryCard-Wrapper__gridWrapper {
      grid-template-columns:
        minmax(${pxToRem(80)}, 1fr)
        minmax(${pxToRem(80)}, 1fr)
        ${pxToRem(80)}
        ${pxToRem(80)}
        ${pxToRem(120)}
        ${pxToRem(50)};
      grid-template-areas: 'title description amount payment shipping last';
    }

    &.k-SummaryCard-Wrapper--medium {
      .k-SummaryCard-Wrapper__imageWrapper {
        display: none;
      }
    }

    &.k-SummaryCard-Wrapper--tablet,
    &.k-SummaryCard-Wrapper--small,
    &.k-SummaryCard-Wrapper--mobile {
      .k-SummaryCard-Wrapper__imageWrapper {
        display: none;
      }
      .k-SummaryCard-Wrapper__gridWrapper {
        grid-template-columns:
          minmax(${pxToRem(80)}, 1fr)
          minmax(${pxToRem(80)}, 1fr)
          ${pxToRem(70)}
          ${pxToRem(70)}
          ${pxToRem(50)};
        grid-template-areas: 'title description amount payment last';

        & > [class*='__shipping'] {
          display: none;
        }
      }
    }
  }
`

const contributorSubscriptionStyles = css`
  @media ${mq.tabletAndDesktop} {
    .k-SummaryCard-Wrapper__gridWrapper {
      grid-template-columns:
        minmax(${pxToRem(100)}, 3fr)
        minmax(${pxToRem(80)}, 2fr)
        ${pxToRem(120)}
        ${pxToRem(110)}
        ${pxToRem(80)}
        ${pxToRem(110)}
        ${pxToRem(40)};
      grid-template-areas: 'title description amount payment status shipping last';
    }

    &.k-SummaryCard-Wrapper--large,
    &.k-SummaryCard-Wrapper--medium {
      .k-SummaryCard-Wrapper__gridWrapper {
        grid-template-columns:
          minmax(${pxToRem(100)}, 3fr)
          minmax(${pxToRem(80)}, 2fr)
          ${pxToRem(100)}
          ${pxToRem(80)}
          ${pxToRem(70)}
          ${pxToRem(100)}
          ${pxToRem(40)};
        grid-template-areas: 'title description amount payment status shipping last';
      }
    }
    &.k-SummaryCard-Wrapper--medium {
      .k-SummaryCard-Wrapper__imageWrapper {
        display: none;
      }
    }

    &.k-SummaryCard-Wrapper--tablet,
    &.k-SummaryCard-Wrapper--small,
    &.k-SummaryCard-Wrapper--mobile {
      .k-SummaryCard-Wrapper__imageWrapper {
        display: none;
      }
      .k-SummaryCard-Wrapper__gridWrapper {
        grid-template-columns:
          minmax(${pxToRem(80)}, 1fr)
          ${pxToRem(80)}
          ${pxToRem(70)}
          ${pxToRem(60)}
          ${pxToRem(70)}
          ${pxToRem(40)};
        grid-template-areas: 'title description amount payment status last';

        & > [class*='__shipping'] {
          display: none;
        }
      }
    }
  }
`

const typeStyle = {
  ownerContribution: ownerContributionStyles,
  ownerSubscription: ownerSubscriptionStyles,
  contributorContribution: contributorContributionStyles,
  contributorSubscription: contributorSubscriptionStyles,
}

/* ****************************************
   Common styles
   ****************************************/

const commonStyles = css`
  @media ${mq.tabletAndDesktop} {
    display: flex;
    align-items: center;

    .k-SummaryCard-Wrapper__imageWrapper {
      align-self: stretch;
      flex: 0 0 ${pxToRem(160)};
    }

    .k-SummaryCard-Wrapper__gridWrapper {
      display: grid;
      align-items: center;
      align-content: flex-start;
      width: 100%;
      padding-left: ${pxToRem(30)};
      padding-right: ${pxToRem(30)};
      grid-gap: ${pxToRem(10)} ${pxToRem(20)};
      grid-template-rows: 1fr;

      & > .k-SummaryCard__cell {
        grid-area: var(--summaryCardCell-name);
      }
    }
  }
`

/* ****************************************
   Card styles
   ****************************************/

export const StyledSummaryCard = styled(({ type, ...props }) => (
  <div {...props} />
))`
  /* CARD STYLE */

  max-width: 100%;
  position: relative;
  display: block;
  box-sizing: border-box;
  text-decoration: none;
  background-color: var(--color-grey-000);

  transition: background-color 0.2s ease, border-color 0.2s ease;

  box-shadow: var(--box-shadow-m);
  border-radius: var(--border-radius-m);
  border: var(--border-width) solid var(--color-grey-200);

  &.k-SummaryCard--hasAction {
    &:hover {
      background-color: var(--color-grey-100);
      box-shadow: var(--box-shadow-hover-m);
      border: var(--border-light);
    }
    &:active {
      background-color: var(--color-grey-200);
      border-color: var(--color-grey-600);
    }
  }

  @media ${mq.tabletAndDesktop} {
    min-height: ${pxToRem(100)};
  }

  /* ACTION */

  .k-SummaryCard__action {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    border-radius: var(--border-radius-m);
    cursor: pointer;
    z-index: 1;

    :focus-visible {
      outline: auto;
    }
  }

  /* IMAGE */

  .k-SummaryCard__imageWrapper {
    position: relative;
    overflow: hidden;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

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
      border-top-left-radius: calc(var(--border-radius-m) - ${pxToRem(2)});
      border-top-right-radius: calc(var(--border-radius-m) - ${pxToRem(2)});

      @media ${mq.tabletAndDesktop} {
        border-top-left-radius: calc(var(--border-radius-m) - ${pxToRem(2)});
        border-bottom-left-radius: calc(var(--border-radius-m) - ${pxToRem(2)});
        border-top-right-radius: 0;
      }
    }

    svg {
      width: 80%;

      @media ${mq.tabletAndDesktop} {
        width: 100%;
      }
    }
  }

  /* STRUCTURE */

  .k-SummaryCard__gridWrapper {
    padding: ${pxToRem(15)} ${pxToRem(20)};

    display: grid;
    align-items: center;
    align-content: flex-start;
    grid-gap: ${pxToRem(10)} 0;
    grid-template-columns: 1fr auto;
    grid-template-rows: 1fr auto;

    @media ${mq.mobile} {
      & > :not([class*='__last']) {
        grid-column: 1 / span 1;
      }
      & > [class*='__last'] {
        grid-column: 2 / span 1;
      }
    }
  }

  /* SUBCOMPONENTS */

  .k-SummaryCard__titleTag {
    display: flex;
    align-items: center;
    width: fit-content;
    max-width: 100%;
    gap: ${pxToRem(10)};

    color: var(--color-primary-500);
    ${TYPOGRAPHY.fontStyles['500']}

    span {
      overflow: hidden;
      text-overflow: ellipsis;
    }

    svg,
    path {
      color: inherit;
      flex: 0 0 auto;

      &[fill] {
        fill: currentColor;
      }
      &[stroke] {
        stroke: currentColor;
      }
    }
  }

  .k-SummaryCard__cell[class*='__last-stretch'] {
    place-self: stretch flex-end;
  }
  .k-SummaryCard__cell[class*='__last-stretch'] {
    z-index: 2;
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

  ${({ type }) => typeStyle[type]}
`

/* ****************************************
   Title styles
   ****************************************/

export const StyledSummaryTitles = styled(({ type, ...props }) => (
  <div {...props} />
))`
  ${commonStyles}

  ${({ type }) => typeStyle[type]}
`
