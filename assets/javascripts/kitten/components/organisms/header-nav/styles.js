import styled from 'styled-components'
import { ScreenConfig, mq } from '../../../constants/screen-config'
import TYPOGRAPHY from '../../../constants/typography-config'
import COLORS from '../../../constants/colors-config'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import { HEADER_HEIGHT } from './config'

export const StyledHeader = styled.header`
  position: relative;
  z-index: var(--HeaderNav-zIndex);

  .k-HeaderNav__stickyContainer {
    width: 100%;
    box-shadow: 0 ${pxToRem(1)} 0 rgba(0, 0, 0, 0.08);
  }

  &.k-HeaderNav--menuIsExpanded {
    z-index: var(--HeaderNav-zIndex-openMenu);

    .k-HeaderNav__stickyContainer {
      transition: none;
    }
  }

  .k-HeaderNav {
    display: flex;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    background: ${COLORS.background1};
    transition: background-color 0.2s ease;
    height: ${pxToRem(HEADER_HEIGHT)};

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

    .k-Dropdown__button,
    .k-HeaderNav__Button {
      min-width: ${pxToRem(52)};
      cursor: pointer;
    }
  }

  &.k-HeaderNav--inactiveBackground .k-HeaderNav,
  &.k-HeaderNav--inactiveBackground .k-HeaderNav__Button,
  &.k-HeaderNav--inactiveBackground .quickAccessLink {
    background-color: ${COLORS.background3};
  }

  .k-HeaderNav__BurgerMenu__button {
    padding: 0;
    height: 100%;

    @media (min-width: ${ScreenConfig.S.min}px) {
      padding: 0 ${pxToRem(10)} 0 ${pxToRem(20)};
    }
  }

  .k-HeaderNav__QuickAccessLink {
    position: absolute;
    display: inline-flex;
    align-items: center;
    left: -100%;
    top: 0;
    bottom: 0;
    z-index: var(--HeaderNav_quickAccessLink_zIndex, 2);
    padding: 0 ${pxToRem(30)};
    background-color: ${COLORS.background1};
    border-right: ${pxToRem(1)} solid var(--color-grey-400);
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
    padding: 0;
    display: flex;
    align-items: center;

    @media ${mq.tabletAndDesktop} {
      padding: ${pxToRem(10)};
    }
  }

  @media ${mq.desktop} {
    /* Using an attribute selector because "@" causes trouble */
    .k-HeaderNavDropdown[class*='k-u-hidden@l-up'] + .k-HeaderNav__Logo {
      padding-left: ${pxToRem(40)};
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

    &:hover,
    &:focus {
      color: var(
        --HeaderMenu-Button-colorHover,
        var(--HeaderMenu-Button-color)
      );
      background-color: var(--HeaderMenu-Button-backgroundColorHover);
    }

    &.k-HeaderNav__Button--hasText {
      .k-HeaderNav__Button__text {
        &:first-child {
          margin-left: ${pxToRem(15)};
          margin-right: ${pxToRem(-10)}; /* gap compensation */
        }
        &:last-child {
          margin-right: ${pxToRem(10)};
        }
      }
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
    gap: ${pxToRem(10)};
    margin-right: ${pxToRem(20)};

    @media ${mq.desktop} {
      margin-right: ${pxToRem(40)};
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

  .k-HeaderNav__UserMenu {
    margin-right: ${pxToRem(-50)};

    @media ${mq.tabletAndDesktop} {
      margin-right: ${pxToRem(-40)};
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

    padding-right: ${pxToRem(50)};

    &.k-Dropdown__button,
    &.k-HeaderNav__Button {
      min-width: ${pxToRem(40)};
    }

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
    padding: 0 ${pxToRem(10)};

    border-top: ${pxToRem(4)} solid transparent;
    border-bottom: ${pxToRem(4)} solid transparent;

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
      border-top-color: currentColor;
      color: ${COLORS.primary1};
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
        min-width: max(${pxToRem(250)}, 100%);

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
    transition: max-width 0.2s ease;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    > * {
      flex: 1 1 auto;
    }

    .k-Form-TextInput {
      text-overflow: ellipsis;
      overflow: hidden;
      ${TYPOGRAPHY.fontStyles.light};
      width: 100%;
    }

    @media (max-width: ${pxToRem(ScreenConfig.S.max)}) {
      flex: 0 0 auto;

      &.k-HeaderNav__searchInput--mobileInvisible .k-Form-TextInputWithButton {
        display: none;
      }
      .k-HeaderNav__searchInput__mobileFold {
        flex: 0 0 auto;
        padding-left: ${pxToRem(8)};
        padding-right: ${pxToRem(13)};
        display: inline-flex;
        align-items: center;
        align-self: stretch;
      }
      &:not(.k-HeaderNav__searchInput--mobileInvisible) {
        background: ${COLORS.background1};
        z-index: 2;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        padding-left: ${pxToRem(20)};
      }
    }

    @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
      flex: 1 0 auto;
      max-width: min(100%, ${pxToRem(500)});

      .k-HeaderNav__searchInput__mobileFold {
        display: none;
      }
    }
  }

  .k-HeaderNav__floatingDropdown {
    position: absolute;

    left: 0;
    right: 0;
    min-width: fit-content;

    background-color: ${COLORS.background1};

    z-index: 20;

    margin-top: ${pxToRem(-10)};
    visibility: hidden;
    opacity: 0;

    transition: margin 0.2s, visibility 0.2s, opacity 0.2s;

    @media (max-width: ${pxToRem(ScreenConfig.S.max)}) {
      top: 100%;
      max-height: calc(100vh - 100%);
      max-width: 100vw;
    }

    @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
      top: calc(100% + ${pxToRem(10)});

      /* Max-height is needed to allow scroll on menu.
         The 100% is equal to the button height. */
      max-height: calc(100vh - (100% + ${pxToRem(20)}));

      box-shadow: 0 ${pxToRem(3)} ${pxToRem(4)} rgba(0, 0, 0, 0.1);
      border-radius: ${pxToRem(8)};
    }

    &.k-HeaderNav__floatingDropdown--isExpanded {
      margin-top: 0;
      visibility: visible;
      opacity: 1;
      overflow-x: hidden;
      overflow-y: scroll;
    }
  }
`
