import styled from 'styled-components'
import { ScreenConfig } from '../../../constants/screen-config'
import TYPOGRAPHY from '../../../constants/typography-config'
import COLORS from '../../../constants/colors-config'
import {
  CONTAINER_PADDING,
  CONTAINER_PADDING_THIN,
} from '../../../constants/grid-config'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import {
  MOBILE_HEADER_HEIGHT,
  TABLET_HEADER_HEIGHT,
  DESKTOP_HEADER_HEIGHT,
} from './config'

export const StyledHeader = styled.header`
  position: relative;
  z-index: var(--HeaderNav-zIndex);

  .k-HeaderNav__stickyContainer {
    width: 100%;
  }

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
    width: 100%;
    overflow: hidden;
    box-sizing: border-box;
    background: ${COLORS.background1};

    .quickAccessLink {
      background: ${COLORS.background1};
      height: 100%;
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
    *:focus:not(:focus-visible) {
      outline-color: transparent;
    }
    *:focus-visible {
      outline-color: ${COLORS.primary4};
    }
  }

  .k-HeaderNav--inactiveBackground .k-HeaderNav,
  .k-HeaderNav--inactiveBackground .quickAccessLink {
    background-color: ${COLORS.background3};
  }

  .k-Dropdown {
    align-self: stretch;
  }

  .k-HeaderNav__BurgerMenu__button {
    padding: 0 ${pxToRem(10)} 0 ${pxToRem(CONTAINER_PADDING_THIN)};
    height: 100%;

    @media (min-width: ${ScreenConfig.S.min}px) {
      padding: 0 ${pxToRem(15)} 0 ${pxToRem(CONTAINER_PADDING)};
    }
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

    .k-Avatar__text.k-Avatar__text--hasEllipsis {
      max-width: ${pxToRem(145)};
    }
  }

  .k-HeaderNav__UserMenuButton {
    align-self: center;
    display: flex;
    align-items: center;
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

    .k-Dropdown--isExpanded & {
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

  .k-HeaderNav__UserMenuButton--hasArrow {
    padding-right: ${pxToRem(30)};
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

  /* SIZES */
  &.k-HeaderNav--small .k-HeaderNav {
    height: ${pxToRem(MOBILE_HEADER_HEIGHT)};

    .k-HeaderNav__UserMenuButton {
      padding: 0 ${pxToRem(15)};
    }
    .k-HeaderNav-nav__item {
      padding: 0 ${pxToRem(15)};
    }

    .k-HeaderNav__Button--hasIcon {
      min-width: ${pxToRem(MOBILE_HEADER_HEIGHT)};
    }

    .k-HeaderNav__Button--hasText {
      .k-HeaderNav__Button__text {
        &:first-child {
          margin-left: ${pxToRem(15)};
        }
        &:last-child {
          margin-right: ${pxToRem(15)};
        }
      }
    }
  }

  &.k-HeaderNav--regular .k-HeaderNav {
    height: ${pxToRem(MOBILE_HEADER_HEIGHT)};

    @media (min-width: ${ScreenConfig.S.min}px) {
      height: ${pxToRem(TABLET_HEADER_HEIGHT)};
    }

    @media (min-width: ${ScreenConfig.L.min}px) {
      height: ${pxToRem(DESKTOP_HEADER_HEIGHT)};
    }

    .k-HeaderNav__UserMenuButton {
      padding: 0 ${pxToRem(40)};
    }
    .k-HeaderNav-nav__item {
      padding: 0 ${pxToRem(40)};
    }

    .k-HeaderNav__Button--hasIcon {
      min-width: ${pxToRem(MOBILE_HEADER_HEIGHT)};

      @media (min-width: ${ScreenConfig.S.min}px) {
        min-width: ${pxToRem(TABLET_HEADER_HEIGHT)};
      }

      @media (min-width: ${ScreenConfig.L.min}px) {
        min-width: ${pxToRem(DESKTOP_HEADER_HEIGHT)};
      }
    }

    .k-HeaderNav__Button__text:first-child {
      margin-left: ${pxToRem(30)};

      @media (min-width: ${ScreenConfig.S.min}px) {
        margin-left: ${pxToRem(40)};
      }
    }

    .k-HeaderNav__Button__text:last-child {
      margin-right: ${pxToRem(30)};

      @media (min-width: ${ScreenConfig.S.min}px) {
        margin-right: ${pxToRem(40)};
      }
    }
  }

  /* DROPDOWN */
  .k-Dropdown {
    display: flex;
  }

  .k-Dropdown__content {
    position: absolute;
    top: 0;
    z-index: 20;
    min-width: ${pxToRem(200)};
    margin-top: ${pxToRem(-10)};
    visibility: hidden;
    opacity: 0;
    transition: margin 0.2s, visibility 0.2s, opacity 0.2s;
    /* Max-height is needed to allow scroll on menu.
       The 100% is equal to the header height. */
    max-height: calc(100vh - 100%);
    box-shadow: 0 ${pxToRem(3)} ${pxToRem(4)} rgba(0, 0, 0, 0.1);

    @media (max-width: ${pxToRem(ScreenConfig.XS.max)}) {
      min-width: 0;
      width: 100% !important;
      left: 0 !important;
      right: 0 !important;
    }
  }

  .k-Dropdown--isExpanded .k-Dropdown__content {
    margin-top: 0;
    visibility: visible;
    opacity: 1;
    overflow-x: hidden;
    overflow-y: scroll;
  }
`
