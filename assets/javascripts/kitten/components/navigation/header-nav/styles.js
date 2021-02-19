import styled from 'styled-components'
import { ScreenConfig } from '../../../constants/screen-config'
import TYPOGRAPHY from '../../../constants/typography-config'
import COLORS from '../../../constants/colors-config'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import {
  MOBILE_HEADER_HEIGHT,
  TABLET_HEADER_HEIGHT,
  DESKTOP_HEADER_HEIGHT,
} from './config'

export const StyledHeader = styled.header`
  position: relative;
  z-index: var(--HeaderNav-zIndex);

  &.k-HeaderNav--menuIsExpanded {
    z-index: var(--HeaderNav-zIndex-openMenu);

    .k-HeaderNav__stickyContainer {
      transition: none;
    }
  }

  .k-Spacer + .k-HeaderNav__stickyContainer {
    box-shadow: 0 ${pxToRem(2)} ${pxToRem(4)} rgba(0, 0, 0, 0.1);
  }

  .k-HeaderNav {
    display: flex;
    align-items: center;
    overflow: hidden;
    padding-left: ${pxToRem(10)};
    width: 100vw;
    overflow: hidden;
    box-sizing: border-box;

    &,
    .quickAccessLink {
      height: ${pxToRem(MOBILE_HEADER_HEIGHT)};
      background: ${COLORS.background1};

      @media (min-width: ${ScreenConfig.S.min}px) {
        height: ${pxToRem(TABLET_HEADER_HEIGHT)};
      }

      @media (min-width: ${ScreenConfig.L.min}px) {
        height: ${pxToRem(DESKTOP_HEADER_HEIGHT)};
      }
    }

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      padding-left: ${pxToRem(20)};
    }

    &,
    * {
      ${TYPOGRAPHY.fontStyles.regular};
      box-sizing: border-box;
    }

    *:focus {
      outline-offset: ${pxToRem(-2)};

      outline-width: ${pxToRem(2)};
      outline-style: solid;
      outline-color: ${COLORS.primary4};
    }
  }

  .k-HeaderNav--inactiveBackground .k-HeaderNav,
  .k-HeaderNav--inactiveBackground .quickAccessLink {
    background-color: ${COLORS.background3};
  }

  .k-HeaderNav-Logo {
    padding: ${pxToRem(10)};
    display: flex;
    align-items: center;

    @media (max-width: ${ScreenConfig.XXS.max}) {
      padding-left: ${pxToRem(5)};
      padding-right: ${pxToRem(5)};
    }
  }

  .k-HeaderNav--right,
  .k-HeaderNav--centered {
    display: flex;
    height: 100%;
    align-items: center;
  }

  .k-HeaderNav--right {
    justify-content: flex-end;
    flex-grow: 1;
  }

  .k-HeaderNav--centered {
    justify-content: center;
    flex-grow: 100;
  }

  .k-HeaderNav--column {
    flex-direction: column;
  }

  .k-HeaderNav-nav {
    list-style-type: none;
    display: flex;
    padding: 0;
    margin: 0;
    height: 100%;
  }

  .k-HeaderNav__UserMenu {
    height: 100%;
    display: flex;

    .text--withEllipsis {
      text-overflow: ellipsis;
      max-width: ${pxToRem(145)};
      white-space: nowrap;
      overflow: hidden;
    }
  }

  .k-HeaderNav__UserMenuButton {
    display: flex;
    align-self: center;
    justify-content: center;
    height: 100%;
    padding: 0 ${pxToRem(40)};
    border: 0;
    font-size: ${stepToRem(-1)};
    line-height: normal;
    background-color: ${COLORS.background3};

    .k-Badge {
      border-color: ${COLORS.background3};
    }

    .is-expanded & {
      &,
      &:hover {
        background-color: ${COLORS.background1};

        .k-Badge {
          border-color: ${COLORS.background1};
        }
      }
    }

    .k-ButtonImageWithText {
      align-self: center;
    }

    @media (max-width: ${ScreenConfig.XXS.max}) {
      padding: 0 ${pxToRem(15)};
    }

    &:hover {
      cursor: pointer;
      background-color: ${COLORS.line1};

      .k-Badge {
        border-color: ${COLORS.line1};
      }

      .k-ButtonImageWithText__text {
        color: ${COLORS.font1};
      }
    }
  }

  .k-HeaderNav__UserMenuButton--nopadding {
    padding: 0;
  }

  .k-HeaderNav-nav--center {
    justify-content: center;
  }

  .k-HeaderNav-nav__element {
    -ms-overflow-x: hidden;

    display: flex;
    align-items: stretch;
  }

  .k-HeaderNav-nav__element--fixedSize {
    flex-shrink: 0;
  }

  .k-HeaderNav-nav__item {
    display: flex;
    align-items: center;

    padding: 0 ${pxToRem(40)};
    border-top: ${pxToRem(4)} solid transparent;

    ${TYPOGRAPHY.fontStyles.regular};
    font-size: ${stepToRem(-1)};
    line-height: normal;

    color: ${COLORS.font1};
    text-align: center;
    text-decoration: none;

    cursor: pointer;
    transition: color 0.2s, border-color 0.2s;

    &:hover,
    &:focus {
      color: ${COLORS.primary1};
      text-decoration: none;
    }

    &:active {
      border-color: currentColor;
      color: ${COLORS.primary1};
    }

    &.is-selected {
      border-color: currentColor;
      color: ${COLORS.primary1};
    }
  }
`