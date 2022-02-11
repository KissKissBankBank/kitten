import styled, { keyframes } from 'styled-components'

import COLORS from '../../../constants/colors-config'
import TYPOGRAPHY from '../../../constants/typography-config'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import { mq } from '../../../constants/screen-config'

const zoomInAndOpacity = keyframes`
  0% {
    transform: scaleY(.80);
    opacity: 0;
  }
  to
  {
    transform: scaleY(1);
    opacity: 1;
  }
`
const opacity = keyframes`
  0% {
    opacity: 0;
  }
  to
  {
    opacity: 1;
  }
`

export const StyledDashboardMenu = styled.nav`
  color: ${COLORS.font2};

  /* OVERRIDE DEFAULTS */

  .k-DashboardMenu__expandable__title,
  .k-DashboardMenu__item {
    &,
    &:visited,
    &:link {
      color: ${COLORS.font2};
      font-size: ${stepToRem(-1)};
      text-decoration: none;
      transition: color 0.2s ease, background-color 0.2s ease;
    }

    &:focus,
    &:hover {
      background-color: ${COLORS.line3} !important;
    }
    &:focus {
      z-index: 1;
      position: relative;
    }
    &:focus-visible {
      outline: auto;
    }
  }

  summary.k-DashboardMenu__selectorSummary,
  a.k-DashboardMenu__selectorButton {
    &,
    &:visited,
    &:link {
      color: ${COLORS.background1};
      font-size: ${stepToRem(-1)};
      text-decoration: none;
      transition: color 0.2s ease, background-color 0.2s ease;
    }

    &[aria-current='page'],
    &:hover {
      background-color: ${COLORS.line3} !important;
    }

    &:focus {
      z-index: 1;
      position: relative;
    }
    &:focus-visible {
      outline: auto;
    }
  }

  .k-DashboardMenu__list,
  .k-DashboardMenu__expandable__list {
    margin: 0;
    padding: 0;
    list-style: none;
    transition: opacity 0.2s ease;
  }

  .k-DashboardMenu__list--subList {
    margin-left: ${pxToRem(25)};

    @media ${mq.tabletAndDesktop} {
      margin-left: ${pxToRem(35)};
      margin-right: ${pxToRem(40)};
    }
  }

  .k-DashboardMenu__expandable summary {
    list-style: none;

    &:focus-visible {
      outline: auto;
    }

    &::-webkit-details-marker {
      display: none;
    }
  }

  /* BLOCK STYLES */

  .k-DashboardMenu__selectorButton__text,
  .k-DashboardMenu__item .k-DashboardMenu__item__text,
  .k-DashboardMenu__expandable .k-DashboardMenu__expandable__title__text {
    flex: 1 0 0;
    line-height: 1.4;

    &,
    * {
      white-space: nowrap;
      overflow-x: hidden;
      overflow-y: visible;
      text-overflow: ellipsis;
    }
  }

  .k-DashboardMenu__expandable {
    border-radius: var(--border-radius-s);
    background-color: ${COLORS.line3};

    .k-DashboardMenu__expandable__list {
      padding: 0 ${pxToRem(10)} ${pxToRem(20)} ${pxToRem(60)};
      display: flex;
      flex-direction: column;
      gap: ${pxToRem(10)};
    }

    &.k-DashboardMenu__expandable--small .k-DashboardMenu__expandable__list {
      padding: 0 ${pxToRem(10)} ${pxToRem(20)} ${pxToRem(50)};
    }
  }

  .k-DashboardMenu__list {
    display: flex;
    flex-direction: column;
    gap: ${pxToRem(2)};
  }

  .k-DashboardMenu__list
    > li
    > .k-DashboardMenu__expandable
    .k-DashboardMenu__expandable__title,
  .k-DashboardMenu__list > li > .k-DashboardMenu__item,
  .k-DashboardMenu__selectorButton {
    display: flex;
    height: ${pxToRem(50)};
    align-items: center;
    gap: ${pxToRem(15)};
    padding: 0 ${pxToRem(15)};
    border-radius: var(--border-radius-xs);
  }

  .k-DashboardMenu__list
    > li
    > .k-DashboardMenu__expandable--small
    .k-DashboardMenu__expandable__title,
  .k-DashboardMenu__list > li > .k-DashboardMenu__item--small {
    height: ${pxToRem(40)};
  }

  .k-DashboardMenu__selectorButton {
    height: ${pxToRem(70)};
    flex: 0 0 ${pxToRem(70)};
  }

  /* TEXT STYLES */
  .k-DashboardMenu__expandable .k-DashboardMenu__expandable__title,
  .k-DashboardMenu__list > li > .k-DashboardMenu__item {
    ${TYPOGRAPHY.fontStyles.regular}
    background-color: ${COLORS.font1};
    cursor: pointer;
  }
  .k-DashboardMenu__expandable[open] .k-DashboardMenu__expandable__title,
  .k-DashboardMenu__expandable--hasActiveInside
    .k-DashboardMenu__expandable__title,
  .k-DashboardMenu__list > li > .k-DashboardMenu__item[aria-current='page'] {
    color: ${COLORS.background1};
    background-color: ${COLORS.line3};
  }

  .k-DashboardMenu__expandable__list > li > .k-DashboardMenu__item {
    ${TYPOGRAPHY.fontStyles.light}
    line-height: ${pxToRem(18)};
    max-width: 100%;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    &:hover,
    &:focus,
    &[aria-current='page'] {
      ${TYPOGRAPHY.fontStyles.regular}
      color: ${COLORS.background1};
    }
  }

  .k-DashboardMenu__selectorSummary {
    .k-DashboardMenu__selectorButton__arrow {
      color: ${COLORS.font2};
      transition: color 0.2s ease;
    }
    &:hover,
    &:focus {
      .k-DashboardMenu__selectorButton__arrow {
        color: ${COLORS.background1};
      }
    }
  }

  /* ICON STYLES */

  .k-DashboardMenu__iconWrapper {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    flex: 0 0 ${pxToRem(20)};
    width: ${pxToRem(20)};
    height: ${pxToRem(20)};

    svg {
      max-width: ${pxToRem(20)};
      max-height: ${pxToRem(20)};

      &[fill],
      d[fill] {
        transition: fill 0.2s ease-in-out;
      }
    }
  }

  .k-DashboardMenu__expandable__title__arrow {
    flex: 0 0 auto;
    padding: ${pxToRem(5)};

    svg {
      display: block;
      fill: currentColor;
      transition: transform 0.2s ease-in-out;
    }
  }

  .k-DashboardMenu__expandable[open]
    .k-DashboardMenu__expandable__title__arrow
    svg {
    transform: rotate(360deg) !important;
  }

  .k-DashboardMenu__separator {
    margin-top: ${pxToRem(10)};
    margin-bottom: ${pxToRem(5)};

    hr {
      border: 0;
      border-top: ${pxToRem(1)} solid rgba(151, 151, 151, 0.2);
      margin-bottom: ${pxToRem(15)};
    }
  }

  .k-DashboardMenu__selectorWrapper {
    position: relative;
    margin: ${pxToRem(10)} 0 ${pxToRem(5)};

    &[open] .k-DashboardMenu__selectorList {
      animation: 0.16s ease-out ${zoomInAndOpacity};
    }

    &::before {
      display: block;
      content: '';
      position: absolute;
      top: ${pxToRem(-5)};
      left: ${pxToRem(-5)};
      right: ${pxToRem(-5)};
      bottom: ${pxToRem(-5)};
      border-top-left-radius: var(--border-radius-m);
      border-top-right-radius: var(--border-radius-m);
      border: ${pxToRem(2)} solid ${COLORS.grey1};
      border-bottom: 0;
      opacity: 0;
    }
    &[open]::before {
      animation: 0.16s ease-out ${opacity};
      opacity: 1;
    }

    &[open] + .k-DashboardMenu__list--hideable {
      opacity: 0.5;
      pointer-events: none;
    }
  }

  .k-DashboardMenu__selectorSummary {
    position: relative;
    z-index: 1;

    list-style: none;
    touch-callout: none;
    user-select: none;
    cursor: pointer;

    padding: 0 ${pxToRem(15)};
    height: ${pxToRem(70)};
    border-radius: var(--border-radius-xs);

    ::-webkit-details-marker {
      display: none;
    }

    .k-DashboardMenu__selectorSummary__flex {
      height: 100%;
      align-items: center;
    }
  }

  .k-DashboardMenu__selectorList {
    position: absolute;
    z-index: 5;

    display: flex;
    align-items: stretch;
    flex-direction: column;
    gap: ${pxToRem(2)};

    top: ${pxToRem(70 + 2)};
    left: ${pxToRem(-5)};
    right: ${pxToRem(-5)};
    max-height: ${pxToRem(4 * 70 + 3 * 2 + 2 + 3)};
    padding: 0 ${pxToRem(3)} ${pxToRem(3)};
    overflow-x: hidden;
    overflow-y: scroll;
    overscroll-behavior: contain;

    box-sizing: border-box;
    background: ${COLORS.font1};

    transform-origin: top left;

    border-bottom-left-radius: var(--border-radius-m);
    border-bottom-right-radius: var(--border-radius-m);
    border: ${pxToRem(2)} solid ${COLORS.grey1};
    border-top: 0;
  }
`
