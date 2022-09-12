import styled from 'styled-components'
import {
  NUM_COLUMNS,
  GUTTER,
  CONTAINER_PADDING_THIN,
  CONTAINER_PADDING,
} from '../../../constants/grid-config'
import TYPOGRAPHY from '../../../constants/typography-config'
import { mq } from '../../../constants/screen-config'
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
  .k-DashboardLayout__mainWrapper:focus-visible {
    outline: 1px dotted;
  }

  @media ${mq.desktop} {
    .k-DashboardLayout__siteHeader {
      &,
      & ~ .k-DashboardLayout {
        --dashboardLayout-siteHeaderHeight: ${pxToRem(65)};
      }
    }

    .k-DashboardLayout__siteHeader {
      display: block;
      height: var(--dashboardLayout-siteHeaderHeight);
      background: var(--color-grey-000);

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
    background-color: var(--color-grey-000);

    & > * {
      min-width: 0;
    }

    .k-DashboardLayout__sideWrapper {
      background-color: var(--color-grey-900);
    }
  }

  .k-DashboardLayout__toaster__wrapper {
    position: fixed;
    right: 0;
    left: 0;
    bottom: ${pxToRem(-120)};
    padding: ${pxToRem(20)} ${pxToRem(20)} ${pxToRem(40)};
    background: var(--color-grey-000);
    opacity: 0;
    transition: opacity 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
      bottom 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), left 0.3s ease-in-out;
    z-index: 2;

    & + .k-DashboardLayout__toaster__spacer {
      max-height: 0;
      height: ${pxToRem(100)};
      transition: max-height 0.4s ease;
    }

    &.k-DashboardLayout__toaster--isOpen {
      bottom: ${pxToRem(-20)};
      opacity: 1;

      & + .k-DashboardLayout__toaster__spacer {
        max-height: ${pxToRem(100)};
      }
    }

    &::before {
      content: '';
      position: absolute;
      left: 0;
      width: 100%;
      top: ${pxToRem(-20)};
      height: ${pxToRem(20)};
      background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 1)
      );
    }
  }

  /* TABLET + MOBILE */

  @media ${mq.mobileAndTablet} {
    /* overflow: hidden; */
    position: relative;

    .k-DashboardLayout {
      --DashboardLayout-main-margin: calc(
        ${ONE_COL} + ${pxToRem(GUTTER + CONTAINER_PADDING)}
      );
      --DashboardLayout-side-width: calc(${SIX_COLS});

      width: calc(${SIX_COLS} + 100vw);
      grid-template-columns: var(--DashboardLayout-side-width) calc(
          100vw + ${pxToRem(2)}
        );
      left: calc(-1 * ${SIX_COLS} - ${pxToRem(2)});
      position: absolute;
      transition: left 0.3s ease-in-out;

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
        left: 0;
        transition: left 0.3s ease-in-out;

        .k-DashboardLayout__mainWrapper {
          .k-DashboardLayout__main,
          .k-DashboardLayout__alerts {
            &::before {
              opacity: 0.8;
              background-color: var(--color-grey-900);
              pointer-events: all;
            }
          }
        }

        .k-DashboardLayout__toaster__wrapper {
          left: calc(${SIX_COLS} - ${pxToRem(2)});
        }
      }

      .k-DashboardLayout__sideWrapper {
        height: calc(100vh - var(--dashboardLayout-siteHeaderHeight));
        overflow-y: scroll;
        padding: ${pxToRem(20)} ${pxToRem(30)} ${pxToRem(30)};
        display: flex;
        flex-direction: column;
        gap: ${pxToRem(10)};

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
        background-color: var(--color-grey-000);
        width: calc(100vw + ${pxToRem(2)});
        display: flex;
        align-items: stretch;
        flex-direction: column;
        position: relative;

        .k-DashboardLayout__heading {
          padding-left: ${pxToRem(CONTAINER_PADDING)};
          padding-right: ${pxToRem(CONTAINER_PADDING)};
          height: ${pxToRem(65)};
          flex: 0 0 ${pxToRem(65)};
          display: flex;
          align-items: center;

          background-color: var(--color-grey-900);
          border-left: ${pxToRem(2)} solid var(--color-grey-800);

          > * {
            align-self: initial;
            min-width: 0;
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

        .k-DashboardLayout__alerts,
        .k-DashboardLayout__main {
          position: relative;

          &::before {
            content: '';
            position: absolute;
            top: 0;
            left: ${pxToRem(-2)};
            right: 0;
            bottom: 0;
            background-color: var(--color-grey-000);
            opacity: 0;
            pointer-events: none;
            z-index: var(--DashboardLayout-overlay-zindex, 100);
            transition: background-color 0.2s ease-in-out,
              opacity 0.2s ease-in-out;
          }
        }

        .k-DashboardLayout__main {
          margin-left: ${pxToRem(2)};
          flex: 1 0 auto;

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

      .k-DashboardLayout__toaster__wrapper {
        right: ${pxToRem(-2)};
        width: 100vw;
      }
    }
  }

  /* MOBILE */

  @media ${mq.mobile} {
    .k-DashboardLayout {
      --DashboardLayout-main-margin: ${pxToRem(CONTAINER_PADDING_THIN)};
      --DashboardLayout-side-width: calc(100vw - ${pxToRem(50)});

      width: calc(200vw - ${pxToRem(50 + 2)});
      grid-template-columns: var(--DashboardLayout-side-width) calc(
          100vw + ${pxToRem(2)}
        );
      left: calc(-100vw + ${pxToRem(50 - 2)});

      &.k-DashboardLayout--isOpen {
        .k-DashboardLayout__toaster__wrapper {
          left: calc(100vw - ${pxToRem(50 - 2)});
        }
      }

      .k-DashboardLayout__sideWrapper {
        padding: ${pxToRem(10)} ${pxToRem(20)} ${pxToRem(20)};
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

  /* TABLET + DESKTOP */

  @media ${mq.tabletAndDesktop} {
    .k-DashboardLayout__toaster {
      border-radius: var(--border-radius-s);
      padding: ${pxToRem(20)};
    }

    .k-DashboardLayout__toaster:not(.k-DashboardLayout__toaster--fullSize) {
      margin-inline: calc(var(--DashboardLayout-main-margin) - ${pxToRem(20)});
    }

    .k-DashboardLayout__toaster--dark {
      background-color: var(--color-grey-900);
      color: var(--color-grey-000);
    }
    .k-DashboardLayout__toaster--light {
      background-color: var(--color-grey-200);
      color: var(--color-grey-900);
    }
  }

  /* DESKTOP */

  @media ${mq.desktop} {
    .k-DashboardLayout {
      --DashboardLayout-main-margin: 7.5vw;
      --DashboardLayout-side-width: min(${pxToRem(359)}, 25vw);

      grid-template-columns: var(--DashboardLayout-side-width) 1fr;

      .k-DashboardLayout__sideWrapper {
        display: flex;
        flex-direction: column;
        height: calc(100vh - var(--dashboardLayout-siteHeaderHeight));
        position: sticky;
        top: var(--dashboardLayout-siteHeaderHeight);
        overflow: scroll;
        padding: ${pxToRem(20)} ${pxToRem(30)} ${pxToRem(30)};
        gap: ${pxToRem(10)};

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
        position: relative;
        background-color: var(--color-grey-000);

        &.k-DashboardLayout__mainWrapper--darkBg {
          &,
          .k-DashboardLayout__flow__nav,
          .k-DashboardLayout__flow__content {
            background-color: var(--color-grey-100);
          }

          .k-DashboardLayout__flow__nav::before {
            background: linear-gradient(
              to bottom,
              rgba(251, 251, 251, 0),
              rgba(251, 251, 251, 1)
            );
          }
        }

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
    .k-DashboardLayout__toaster__wrapper {
      width: calc(100% - var(--DashboardLayout-side-width));
      left: initial;
    }
  }

  .k-DashboardLayout__quickAccessLink {
    position: absolute;
    top: 0;
    left: -100%;
    z-index: 110;
    padding: ${pxToRem(20)} ${pxToRem(30)};
    color: var(--color-grey-000);
    background-color: var(--color-grey-900);
    ${TYPOGRAPHY.fontStyles['500']}
    line-height: 1;
    font-size: ${stepToRem(1)};
    text-decoration: none;
    transition: opacity 0.2s ease, left 0.2s ease;
    transition-delay: 0, 0;
    opacity: 0;

    &:focus-visible,
    &:active {
      left: 0;
      opacity: 1;
      transition-delay: 0, 0.2s;
      border: ${pxToRem(2)} solid var(--color-primary-300);
    }
  }

  .k-DashboardLayout__backLink {
    flex: 0 0 ${pxToRem(40)};
    align-self: start;
    gap: ${pxToRem(15)};
    height: ${pxToRem(40)};
    padding: 0 ${pxToRem(15)};
    background-color: var(--color-grey-800);
    border-radius: var(--border-radius-s);
    display: flex;
    align-items: center;
    color: var(--color-grey-000);
    transition: color 0.2s ease, background-color 0.2s ease;
    ${TYPOGRAPHY.fontStyles['500']}
    font-size: ${stepToRem(-1)};
    line-height: 1.2;
    text-decoration: none;

    svg {
      fill: currentColor;
    }

    &:hover {
      color: var(--color-primary-500);
    }
  }
`
