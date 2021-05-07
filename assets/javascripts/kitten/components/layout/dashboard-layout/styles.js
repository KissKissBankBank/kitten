import styled from 'styled-components'
import {
  NUM_COLUMNS,
  GUTTER,
  CONTAINER_PADDING_THIN,
  CONTAINER_PADDING,
} from '../../../constants/grid-config'
import COLORS from '../../../constants/colors-config'
import TYPOGRAPHY from '../../../constants/typography-config'
import { ScreenConfig } from '../../../constants/screen-config'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'

const ALL_COLS = `(100vw - ${pxToRem(
  2 * CONTAINER_PADDING + (NUM_COLUMNS - 1) * GUTTER,
)})`
const ONE_COL = `(${ALL_COLS} / ${NUM_COLUMNS})`
const SIX_COLS = `(${ALL_COLS} / 2 + ${pxToRem(
  5 * GUTTER + CONTAINER_PADDING,
)})`

export const StyledDashboard = styled.div`
  --dashboardLayout-siteHeaderHeight: 0px;

  position: relative;
  overscroll-behavior: none;

  * {
    box-sizing: border-box;
  }

  .k-DashboardLayout__siteHeader {
    &,
    & ~ .k-DashboardLayout__quickAccessLink {
      display: none;
    }
  }

  @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
    .k-DashboardLayout__siteHeader {
      &, & ~ .k-DashboardLayout {
        --dashboardLayout-siteHeaderHeight: ${pxToRem(65)};
      }
    }

    .k-DashboardLayout__siteHeader {
      display: block;
      height: var(--dashboardLayout-siteHeaderHeight);
      background: ${COLORS.background1};

      & ~ .k-DashboardLayout .k-DashboardLayout__backLink {
        display: none;
      }
    }
  }

  .k-DashboardLayout {
    min-height: calc(100vh - var(--dashboardLayout-siteHeaderHeight));
    /* mobile viewport bug fix */
    min-height: -webkit-fill-available;

    display: grid;
    background-color: ${COLORS.background1};

    .k-DashboardLayout__sideWrapper {
      background-color: ${COLORS.font1};
    }
  }

  .k-DashboardLayout__backLink:focus {
    outline: ${COLORS.primary4} solid ${pxToRem(2)};
    outline-offset: ${pxToRem(2)};
  }
  .k-DashboardLayout__backLink:focus:not(:focus-visible) {
    outline-color: transparent;
  }
  .k-DashboardLayout__backLink:focus-visible {
    outline-color: ${COLORS.primary4};
  }

  /* TABLET + MOBILE */

  @media (max-width: ${pxToRem(ScreenConfig.M.max)}) {
    overflow: hidden;
    position: relative;

    .k-DashboardLayout {
      --DashboardLayout-main-margin: calc(
        ${ONE_COL} + ${pxToRem(GUTTER + CONTAINER_PADDING)}
      );

      width: calc(${SIX_COLS} + 100vw);
      grid-template-columns: calc(${SIX_COLS}) calc(100vw + ${pxToRem(2)});
      transform: translateX(calc(-1 * ${SIX_COLS} - ${pxToRem(2)}));
      transition: transform 0.3s ease-in-out;

      .k-DashboardLayout__heading__button__text {
        clip: rect(0 0 0 0);
        clip-path: inset(100%);
        height: ${pxToRem(1)};
        overflow: hidden;
        position: absolute;
        white-space: nowrap;
        width: ${pxToRem(1)};
      }

      &.k-DashboardLayout--isOpen {
        position: fixed;
        transform: none;
        transition: transform 0.3s ease-in-out;

        .k-DashboardLayout__mainWrapper .k-DashboardLayout__main::before {
          opacity: .8;
          background-color: ${COLORS.font1};
          pointer-events: all;
        }
      }

      .k-DashboardLayout__sideWrapper {
        height: calc(100vh - var(--dashboardLayout-siteHeaderHeight));
        overflow-y: scroll;
        padding: ${pxToRem(30)};
        display: flex;
        flex-direction: column;

        & > :not(:last-child) {
          margin-bottom: ${pxToRem(30)};
        }

        .k-DashboardLayout__heading {
          display: none;
        }
        .k-DashboardLayout__navigation {
          flex: 1 1 100%;
        }
        .k-DashboardLayout__footer {
          flex: 0 1 auto;
        }
      }

      .k-DashboardLayout__mainWrapper {
        background-color: ${COLORS.background1};
        width: calc(100vw + ${pxToRem(2)});
        display: flex;
        align-items: stretch;
        flex-direction: column;

        .k-DashboardLayout__heading {
          padding-left: ${pxToRem(CONTAINER_PADDING)};
          padding-right: ${pxToRem(CONTAINER_PADDING)};
          height: ${pxToRem(65)};
          flex: 0 0 ${pxToRem(65)};
          display: flex;
          align-items: center;

          background-color: ${COLORS.font1};
          border-left: ${pxToRem(2)} solid ${COLORS.line3};

          > * {
            align-self: initial;
          }
        }

        .k-DashboardLayout__heading__buttonWrapper {
          flex: 0 0 ${pxToRem(12 + 12 * 2)};
          margin-left: ${pxToRem(-12)};
          margin-right: ${pxToRem(12)};
        }

        .k-DashboardLayout__heading__button {
          padding: ${pxToRem(12)};
        }

        .k-DashboardLayout__main {
          position: relative;
          margin-left: ${pxToRem(2)};
          flex: 1 0 auto;

          &::before {
            content: "";
            position: absolute;
            top: 0;
            left: ${pxToRem(-2)};
            right: 0;
            bottom: 0;
            background-color: ${COLORS.background1};
            opacity: 0;
            pointer-events: none;
            z-index: 100;
            transition: background-color .2s ease-in-out, opacity .2s ease-in-out;
          }

          &:not(.k-DashboardLayout__main--fullHeight) {
            padding-top: ${pxToRem(80)};
            padding-bottom: ${pxToRem(80)};
          }

          > *:not(.k-DashboardLayout__fullWidth) {
            margin-left: var(--DashboardLayout-main-margin);
            margin-right: var(--DashboardLayout-main-margin);
          }
        }
      }
    }
  }

  /* MOBILE */

  @media (max-width: ${pxToRem(ScreenConfig.XS.max)}) {
    .k-DashboardLayout {
      --DashboardLayout-main-margin: ${pxToRem(CONTAINER_PADDING_THIN)};
      width: calc(200vw - ${pxToRem(50 + 2)});
      grid-template-columns: calc(100vw - ${pxToRem(50)}) calc(
          100vw + ${pxToRem(2)}
        );
      transform: translateX(calc(-100vw + ${pxToRem(50 - 2)}));

      .k-DashboardLayout__sideWrapper {
        padding: ${pxToRem(20)};
      }
      .k-DashboardLayout__mainWrapper {
        .k-DashboardLayout__heading {
          padding-left: ${pxToRem(CONTAINER_PADDING_THIN)};
          padding-right: ${pxToRem(CONTAINER_PADDING_THIN)};
        }
        .k-DashboardLayout__main {
          &:not(.k-DashboardLayout__main--fullHeight) {
            padding-top: ${pxToRem(50)};
            padding-bottom: ${pxToRem(50)};
          }
        }
      }
    }
  }

  /* DESKTOP */

  @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
    .k-DashboardLayout {
      --DashboardLayout-main-margin: 7.5vw;
      grid-template-columns: 25vw 1fr;

      .k-DashboardLayout__sideWrapper {
        display: flex;
        flex-direction: column;
        height: calc(100vh - var(--dashboardLayout-siteHeaderHeight));
        position: sticky;
        top: var(--dashboardLayout-siteHeaderHeight);
        overflow: scroll;
        padding: ${pxToRem(30)};

        & > :not(:last-child) {
          margin-bottom: ${pxToRem(30)};
        }

        .k-DashboardLayout__heading {
          flex: 0 1 auto;
        }
        .k-DashboardLayout__navigation {
          flex: 1 1 100%;
        }
        .k-DashboardLayout__footer {
          flex: 0 1 auto;
        }
      }

      .k-DashboardLayout__mainWrapper {
        background-color: ${COLORS.background1};

        .k-DashboardLayout__heading {
          display: none;
        }

        .k-DashboardLayout__main {
          &:not(.k-DashboardLayout__main--fullHeight) {
            padding-top: ${pxToRem(80)};
            padding-bottom: ${pxToRem(80)};
          }

          > *:not(.k-DashboardLayout__fullWidth) {
            margin-left: var(--DashboardLayout-main-margin);
            margin-right: var(--DashboardLayout-main-margin);
          }
        }
      }
    }
  }

  /* SUPER DESKTOP */
  @media (min-width: ${pxToRem(ScreenConfig.XL.min)}) {
    .k-DashboardLayout {
      grid-template-columns: ${pxToRem(385)} 1fr;
    }
  }

  .k-DashboardLayout__sideWrapper,
  .k-DashboardLayout__mainWrapper {
    &:focus {
      outline: ${pxToRem(2)} solid ${COLORS.primary4};
    }
  }

  .k-DashboardLayout__quickAccessLink {
    position: absolute;
    top: 0;
    left: -100%;
    z-index: 110;
    padding: ${pxToRem(20)} ${pxToRem(30)};
    color: ${COLORS.background1};
    background-color: ${COLORS.font1};
    ${TYPOGRAPHY.fontStyles.regular}
    line-height: 1;
    font-size: ${stepToRem(1)};
    text-decoration: none;
    transition: opacity .2s ease, left .2s ease;
    transition-delay: 0, 0;
    opacity: 0;

    &:focus, &:active {
      left: 0;
      opacity: 1;
      transition-delay: 0, .2s;
      outline: ${pxToRem(2)} solid ${COLORS.primary4};
    }
  }

  .k-DashboardLayout__backLink {
    flex: 0 0 ${pxToRem(40)};
    align-self: start;
    height: ${pxToRem(40)};
    padding: 0 ${pxToRem(15)};
    background-color: ${COLORS.line3};
    border-radius: ${pxToRem(6)};
    display: flex;
    align-items: center;
    color: ${COLORS.background1};
    transition: color .2s ease, background-color .2s ease;
    ${TYPOGRAPHY.fontStyles.regular}
    font-size: ${stepToRem(-1)};
    line-height: 1.2;
    text-decoration: none;

    svg {
      fill: currentColor;
    }

    &:hover {
      color: ${COLORS.primary1};
    }

    .k-DashboardLayout__backLink__text {
      margin-left: ${pxToRem(15)};
    }
  }


`
