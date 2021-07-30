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

  &.k-HeaderNav--shadow {
    .k-Spacer + .k-HeaderNav__stickyContainer {
      box-shadow: 0 ${pxToRem(2)} ${pxToRem(4)} rgba(0, 0, 0, 0.1);
    }
  }
  &.k-HeaderNav--border {
    .k-Spacer + .k-HeaderNav__stickyContainer {
      box-shadow: 0 ${pxToRem(1)} 0 rgba(0, 0, 0, 0.08);
    }
  }

  .k-HeaderNav {
    display: flex;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    background: ${COLORS.background1};
    transition: background-color 0.2s ease;

    .quickAccessLink {
      background: ${COLORS.background1};
      transition: background-color 0.2s ease;
      height: 100%;
    }

    &,
    * {
      ${TYPOGRAPHY.fontStyles.regular};
      box-sizing: border-box;
    }

    *:not(input):focus {
      outline-offset: ${pxToRem(-2)};

      outline-width: ${pxToRem(2)};
      outline-style: solid;
      outline-color: ${COLORS.primary4};
    }
    *:not(input):focus:not(:focus-visible) {
      outline-color: transparent;
    }
    *:not(input):focus-visible {
      outline-color: ${COLORS.primary4};
    }
  }

  &.k-HeaderNav--inactiveBackground .k-HeaderNav,
  &.k-HeaderNav--inactiveBackground .k-HeaderNav__Button,
  &.k-HeaderNav--inactiveBackground .quickAccessLink {
    background-color: ${COLORS.background3};
  }

  .k-HeaderNav__BurgerMenu__button {
    padding: 0 ${pxToRem(10)} 0 ${pxToRem(CONTAINER_PADDING_THIN)};
    height: 100%;

    @media (min-width: ${ScreenConfig.S.min}px) {
      padding: 0 ${pxToRem(15)} 0 ${pxToRem(CONTAINER_PADDING)};
    }
  }

  .k-HeaderNav__QuickAccessLink {
    position: absolute;
    display: inline-flex;
    align-items: center;
    left: -100%;
    top: 0;
    z-index: var(--HeaderNav_quickAccessLink_zIndex, 2);
    padding: 0 ${pxToRem(30)};
    background-color: ${COLORS.background1};
    border-right: ${pxToRem(1)} solid ${COLORS.line1};
    ${TYPOGRAPHY.fontStyles.regular}
    color: ${COLORS.font1};
    line-height: 1;
    font-size: ${pxToRem(16)};
    text-decoration: none;
    transition: all 0.2s ease;
    transition-delay: 0, 0;
    opacity: 0;

    &:focus,
    &:active {
      left: 0;
      opacity: 1;
      transition-delay: 0, 0.2s;
    }
  }

  .k-HeaderNav__Logo {
    padding: ${pxToRem(10)};
    display: flex;
    align-items: center;

    @media (max-width: ${ScreenConfig.XXS.max}) {
      padding-left: ${pxToRem(5)};
      padding-right: ${pxToRem(5)};
    }
  }

  .k-HeaderNav__Button {
    ${TYPOGRAPHY.fontStyles.regular}
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${pxToRem(10)};
    height: 100%;
    font-size: ${stepToRem(-1)};
    color: var(--HeaderMenu-Button-color);
    background-color: var(--HeaderMenu-Button-backgroundColor);
    text-decoration: none;
    transition: background-color 0.2s ease, color 0.2s ease;

    &:focus {
      outline: ${COLORS.primary4} solid ${pxToRem(2)};
      outline-offset: ${pxToRem(-4)};
    }
    &:focus:not(:focus-visible) {
      outline-color: transparent;
    }
    &:focus-visible {
      outline-color: ${COLORS.primary4};
    }

    &:hover,
    &:focus {
      color: var(
        --HeaderMenu-Button-colorHover,
        var(--HeaderMenu-Button-color)
      );
      background-color: var(--HeaderMenu-Button-backgroundColorHover);
    }

    .k-HeaderNav__Button__text:first-child {
      margin-right: ${pxToRem(-10)}; /* gap compensation */
    }
  }

  .k-HeaderNav__right,
  .k-HeaderNav__centered {
    display: flex;
    height: 100%;
    align-items: center;
  }

  .k-HeaderNav__right {
    justify-content: flex-end;
    flex-grow: 1;

    &.k-HeaderNav__right--padded {
      padding-right: ${pxToRem(15)};
      gap: ${pxToRem(15)};

      .k-HeaderNav__Button:last-child {
        margin-right: ${pxToRem(-15)};
      }
    }
  }

  .k-HeaderNav__centered {
    justify-content: center;
    flex-grow: 100;
  }

  .k-HeaderNav__column {
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
    border: 0;
    font-size: ${stepToRem(-1)};
    line-height: normal;
    background-color: ${COLORS.background3};
    background-color: var(
      --UserMenu-Button-backgroundColor,
      ${COLORS.background3}
    );

    .k-Badge {
      border-color: ${COLORS.background3};
      border-color: var(
        --UserMenu-Button-backgroundColor,
        ${COLORS.background3}
      );
    }

    &,
    .k-Avatar__text {
      color: ${COLORS.font1};
      color: var(--UserMenu-Button-color, ${COLORS.font1});
      transition: background-color 0.2s ease, color 0.2s ease;
    }

    .k-Avatar {
      align-self: center;
    }

    @media (max-width: ${ScreenConfig.S.max}) {
      padding: 0 ${pxToRem(15)};
    }

    &:hover {
      cursor: pointer;
      background-color: ${COLORS.line1};
      background-color: var(
        --UserMenu-Button-backgroundColorHover,
        ${COLORS.line1}
      );

      .k-Badge {
        border-color: ${COLORS.line1};
        border-color: var(
          --UserMenu-Button-backgroundColorHover,
          ${COLORS.line1}
        );
      }

      &,
      .k-Avatar__text {
        color: ${COLORS.font1};
        color: var(--UserMenu-Button-colorHover, ${COLORS.font1});
      }
    }
  }

  .k-HeaderNav__UserMenuButton[aria-expanded='true'],
  .k-Dropdown--isExpanded .k-HeaderNav__UserMenuButton {
    &,
    &:hover {
      background-color: ${COLORS.background1};
      background-color: var(
        --UserMenu-Button-backgroundColorActive,
        ${COLORS.background1}
      );

      .k-Badge {
        border-color: ${COLORS.background1};
        border-color: var(
          --UserMenu-Button-backgroundColorActive,
          ${COLORS.background1}
        );
      }

      &,
      .k-Avatar__text {
        color: ${COLORS.font1};
        color: var(--UserMenu-Button-colorActive, ${COLORS.font1});
      }
    }
  }

  .k-HeaderNav__UserMenuButton--hasArrow {
    padding-right: ${pxToRem(30)};
  }

  .k-HeaderNav__UserMenuButton--noPadding {
    padding: 0 !important;
  }

  @media (max-width: ${pxToRem(ScreenConfig.XS.max)}) {
    .k-HeaderNav__UserMenuButton--noPaddingMobile {
      padding: 0 !important;
    }
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

    .k-Dropdown__button,
    .k-HeaderNav__Button {
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

    .k-Dropdown__button,
    .k-HeaderNav__Button {
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
    align-self: stretch;
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

  /* DROPDOWN */
  .k-HeaderNavDropdown {
    align-self: stretch;

    .k-HeaderNavDropdown__menu {
      position: absolute;
      top: 100%;
      z-index: 20;
      /* Max-height is needed to allow scroll on menu.
         The 100% is equal to the button height. */
      max-height: calc(100vh - 100%);
      box-shadow: 0 ${pxToRem(3)} ${pxToRem(4)} rgba(0, 0, 0, 0.1);
      transition: margin 0.2s, visibility 0.2s, opacity 0.2s;

      margin-top: ${pxToRem(-10)};
      visibility: hidden;
      opacity: 0;
    }

    @media (max-width: ${pxToRem(ScreenConfig.XS.max)}) {
      .k-HeaderNavDropdown__menu {
        min-width: 100vw;
        max-width: 100vw;
        left: 0;
        right: 0;
      }
    }

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      position: relative;

      .k-HeaderNavDropdown__menu {
        min-width: max(${pxToRem(200)}, 100%);

        &.k-HeaderNavDropdown__menu--is-left {
          left: 0;
        }

        &.k-HeaderNavDropdown__menu--is-right {
          right: 0;
        }
      }

    }

    &.k-HeaderNavDropdown--isExpanded .k-HeaderNavDropdown__menu {
      margin-top: 0;
      visibility: visible;
      opacity: 1;
      overflow-x: hidden;
      overflow-y: scroll;
    }
  }

  @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
    .k-HeaderNav__right--padded .k-HeaderNavDropdown__menu {
      margin-left: ${pxToRem(-15)};
      margin-right: ${pxToRem(-15)};
    }
  }

  .k-HeaderNav__searchInput {
    position: relative;
    flex: 1 0 auto;
    max-width: min(100%, ${pxToRem(500)});
    transition: max-width .2s ease;
    height: 100%;
    display: flex;
    align-items: center;

    > * {
      flex: 1 0 auto;
    }

    .k-Form-TextInput {
      ${TYPOGRAPHY.fontStyles.light};
      width: 100%;
    }

    &.k-HeaderNav__searchInput--expanded {
      max-width: min(100%, ${pxToRem(500)});
    }

    @media (max-width: ${pxToRem(ScreenConfig.XS.max)}) {
      &.k-HeaderNav__searchInput--mobileInvisible .k-Form-TextInputWithIcon {
        display: none;
      }
      .k-HeaderNav__searchInput__mobileFold {
        flex: 0 0 auto;
        padding: ${pxToRem(20)};
      }
      &:not(.k-HeaderNav__searchInput--mobileInvisible) {
        background: ${COLORS.background1};
        z-index: 2;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }
    }
    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      .k-HeaderNav__searchInput__mobileFold {
        display: none;
      }
    }
  }

  .k-HeaderNav__floatingDropdown {
    position: absolute;

    left: 0;
    right: 0;

    background-color: ${COLORS.background1};

    z-index: 20;

    margin-top: ${pxToRem(-10)};
    visibility: hidden;
    opacity: 0;

    transition: margin 0.2s, visibility 0.2s, opacity 0.2s;

    @media (max-width: ${pxToRem(ScreenConfig.XS.max)}) {
      top: 100%;
      height: calc(100vh - 100%);
    }

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      top: calc(100% + ${pxToRem(10)});

      box-shadow: 0 ${pxToRem(4)} ${pxToRem(20)} rgba(0, 0, 0, 0.25);
      border-radius: ${pxToRem(4)};
      /* Max-height is needed to allow scroll on menu.
         The 100% is equal to the button height. */
      max-height: calc(100vh - (100% + ${pxToRem(20)}));
      box-shadow: 0 ${pxToRem(3)} ${pxToRem(4)} rgba(0, 0, 0, 0.1);
    }

    &.k-HeaderNav__floatingDropdown--visible {
      margin-top: 0;
      visibility: visible;
      opacity: 1;
      overflow-x: hidden;
      overflow-y: scroll;
    }
  }

`
