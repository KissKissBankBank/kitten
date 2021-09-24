import styled from 'styled-components'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import COLORS from '../../../constants/colors-config'
import TYPOGRAPHY from '../../../constants/typography-config'
import { ScreenConfig } from '../../../constants/screen-config'

export const StyledDropdown = styled.div`
  position: relative;

  --DropdownSelect-buttonHeight: ${pxToRem(50)};
  --DropdownSelect-border: ${pxToRem(2)};

  .k-Form-Dropdown__label--isHidden:not(:focus):not(:active) {
    clip: rect(0 0 0 0);
    clip-path: inset(100%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }

  .k-Form-DropdownCombobox,
  .k-Form-DropdownSelect__button {
    box-sizing: border-box;
    position: relative;
    appearance: none;
    width: 100%;
    height: var(--DropdownSelect-buttonHeight);
    padding: 0;
    margin: 0;

    border: var(--DropdownSelect-border) solid ${COLORS.line1};

    font-size: ${stepToRem(-1)};
    text-align: left;
  }

  .k-Form-DropdownCombobox__input,
  .k-Form-DropdownSelect__content {
    ${TYPOGRAPHY.fontStyles.light}
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    display: inline-block;
    box-sizing: border-box;
  }

  .k-Form-DropdownCombobox__arrowButton,
  .k-Form-DropdownSelect__button__arrowBox {
    position: absolute;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .k-Form-DropdownCombobox__statusBadges,
  .k-Form-DropdownSelect__button__statusBadges {
    position: absolute;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    svg {
      width: ${pxToRem(24)};
      height: ${pxToRem(24)};
    }
  }

  .k-Form-DropdownCombobox__input {
    flex: 1 0 auto;
    border: 0;
    font-size: inherit;
  }
  .k-Form-DropdownCombobox__arrowButton {
    appearance: none;
    border: 0;
    font-size: ${stepToRem(-1)};
    text-align: left;
    display: flex;
  }
  .k-Form-DropdownCombobox__arrowButton__arrowBox {
    line-height: 0;
  }

  .k-Form-Dropdown__list {
    box-sizing: border-box;
    position: absolute;
    z-index: 1000;
    z-index: var(--menu-z-index, 1000);
    width: 100%;
    max-height: ${pxToRem(250)};
    padding: 0;
    margin: 0;
    overflow-y: scroll;
    list-style: none;

    &:not(:empty) {
      border: var(--DropdownSelect-border) solid ${COLORS.line1};
    }
  }

  .k-Form-Dropdown__item {
    transition: background-color 0.2s ease;
    box-sizing: border-box;
    padding: ${pxToRem(15)};
    min-height: ${pxToRem(50)};
    ${TYPOGRAPHY.fontStyles.light}
    font-size: ${stepToRem(-1)};
    user-select: none;
    line-height: 1.3;
    display: flex;
    align-items: center;

    &.k-Form-Dropdown__item--level_2 {
      padding-left: ${pxToRem(30)};
    }
  }

  &.k-Form-Dropdown--error {
    .k-Form-DropdownCombobox,
    .k-Form-DropdownSelect__button,
    .k-Form-DropdownCombobox__arrowButton,
    .k-Form-DropdownSelect__button__arrowBox,
    .k-Form-Dropdown__list {
      border-color: ${COLORS.error3};
    }
  }
  &.k-Form-Dropdown--valid {
    .k-Form-DropdownCombobox,
    .k-Form-DropdownSelect__button,
    .k-Form-DropdownCombobox__arrowButton,
    .k-Form-DropdownSelect__button__arrowBox,
    .k-Form-Dropdown__list {
      border-color: ${COLORS.tertiary2};
    }
  }

  &.k-Form-Dropdown--disabled {
    cursor: not-allowed;
  }

  /* VARIANT: ANDROMEDA */

  &.k-Form-Dropdown--andromeda {
    .k-Form-DropdownCombobox,
    .k-Form-DropdownSelect__button {
      padding: 0 ${pxToRem(40 + 10)} 0 0;
    }

    .k-Form-DropdownCombobox__input,
    .k-Form-DropdownSelect__content {
      padding: 0 ${pxToRem(15)};
    }

    .k-Form-DropdownCombobox__arrowButton {
      width: ${pxToRem(40 + 2)};
      right: 0;
      border-left: inherit;
    }
    .k-Form-DropdownSelect__button__arrowBox {
      width: ${pxToRem(40)};
      right: 0;
      border-left: inherit;
    }

    .k-Form-DropdownCombobox__statusBadges,
    .k-Form-DropdownSelect__button__statusBadges {
      right: ${pxToRem(40 + 10)};
    }
    &.k-Form-Dropdown--error,
    &.k-Form-Dropdown--valid {
      .k-Form-DropdownCombobox,
      .k-Form-DropdownSelect__button {
        padding-right: ${pxToRem(40 + 10 + 24 + 10)};
      }
    }

    /* ANDROMEDA SIZES */

    &.k-Form-Dropdown--tiny {
      --DropdownSelect-buttonHeight: ${pxToRem(40)};
      .k-Form-DropdownCombobox,
      .k-Form-DropdownSelect__button {
        padding-right: ${pxToRem(30 + 10)};
      }

      .k-Form-DropdownCombobox__arrowButton {
        width: ${pxToRem(30 + 2)};
      }
      .k-Form-DropdownSelect__button__arrowBox {
        width: ${pxToRem(30)};
      }

      .k-Form-DropdownCombobox__statusBadges,
      .k-Form-DropdownSelect__button__statusBadges {
        right: ${pxToRem(30 + 10)};

        svg {
          width: ${pxToRem(20)};
          height: ${pxToRem(20)};
        }
      }

      .k-Form-Dropdown__item {
        min-height: ${pxToRem(40)};
        padding-top: ${pxToRem(8)};
        padding-bottom: ${pxToRem(8)};
      }

      &.k-Form-Dropdown--error,
      &.k-Form-Dropdown--valid {
        .k-Form-DropdownCombobox,
        .k-Form-DropdownSelect__button {
          padding-right: ${pxToRem(30 + 10 + 20 + 10)};
        }
      }
    }

    &.k-Form-Dropdown--big {
      @media (min-width: ${ScreenConfig.S.min}px) {
        --DropdownSelect-buttonHeight: ${pxToRem(60)};
        .k-Form-DropdownCombobox,
        .k-Form-DropdownSelect__button {
          padding-right: ${pxToRem(50 + 10)};
        }

        .k-Form-DropdownCombobox__arrowButton {
          width: ${pxToRem(50 + 2)};
        }
        .k-Form-DropdownSelect__button__arrowBox {
          width: ${pxToRem(50)};
        }

        .k-Form-DropdownCombobox__statusBadges,
        .k-Form-DropdownSelect__button__statusBadges {
          right: ${pxToRem(50 + 10)};
        }

        &.k-Form-Dropdown--error,
        &.k-Form-Dropdown--valid {
          .k-Form-DropdownCombobox,
          .k-Form-DropdownSelect__button {
            padding-right: ${pxToRem(50 + 10 + 24 + 10)};
          }
        }
      }
    }

    &.k-Form-Dropdown--huge,
    &.k-Form-Dropdown--giant {
      --DropdownSelect-buttonHeight: ${pxToRem(70)};
      .k-Form-DropdownCombobox,
      .k-Form-DropdownSelect__button {
        padding-right: ${pxToRem(50 + 10)};
        font-size: ${stepToRem(0)};
      }

      .k-Form-DropdownCombobox__arrowButton {
        width: ${pxToRem(50 + 2)};
      }
      .k-Form-DropdownSelect__button__arrowBox {
        width: ${pxToRem(50)};
      }

      .k-Form-DropdownCombobox__statusBadges,
      .k-Form-DropdownSelect__button__statusBadges {
        right: ${pxToRem(50 + 10)};
      }

      &.k-Form-Dropdown--error,
      &.k-Form-Dropdown--valid {
        .k-Form-DropdownCombobox,
        .k-Form-DropdownSelect__button {
          padding-right: ${pxToRem(50 + 10 + 24 + 10)};
        }
      }

      @media (min-width: ${ScreenConfig.M.min}px) {
        .k-Form-DropdownCombobox,
        .k-Form-DropdownSelect__button {
          padding-right: ${pxToRem(60 + 10)};
        }

        .k-Form-DropdownCombobox__arrowButton {
          width: ${pxToRem(60 + 2)};
        }
        .k-Form-DropdownSelect__button__arrowBox {
          width: ${pxToRem(60)};
        }

        .k-Form-DropdownCombobox__statusBadges,
        .k-Form-DropdownSelect__button__statusBadges {
          right: ${pxToRem(60 + 10)};
        }

        &.k-Form-Dropdown--error,
        &.k-Form-Dropdown--valid {
          .k-Form-DropdownCombobox,
          .k-Form-DropdownSelect__button {
            padding-right: ${pxToRem(60 + 10 + 24 + 10)};
          }
        }

        &.k-Form-Dropdown--huge {
          --DropdownSelect-buttonHeight: ${pxToRem(80)};
        }
        &.k-Form-Dropdown--giant {
          --DropdownSelect-buttonHeight: ${pxToRem(90)};
        }
      }
    }
  }

  /* VARIANT: ORION */

  &.k-Form-Dropdown--orion {
    --DropdownSelect-padding: ${pxToRem(10)};
    --DropdownSelect-arrowContainerWidth: ${pxToRem(20)};
    --DropdownSelect-statusPadding: 0px;

    .k-Form-DropdownCombobox,
    .k-Form-DropdownSelect__button {
      border-radius: ${pxToRem(4)};

      display: flex;
      gap: ${pxToRem(10)};
      padding: 0 ${pxToRem(10)};
    }

    .k-Form-DropdownCombobox__input,
    .k-Form-DropdownSelect__content {
      position: relative;
      box-sizing: border-box;
      flex: 1 1 auto;
      line-height: calc(
        var(--DropdownSelect-buttonHeight) - 2 * var(--DropdownSelect-border)
      );
    }

    .k-Form-DropdownSelect__button__arrowBox,
    .k-Form-DropdownCombobox__arrowButton {
      position: relative;
      flex: 0 0 var(--DropdownSelect-arrowContainerWidth);
      width: var(--DropdownSelect-arrowContainerWidth);
    }

    &.k-Form-Dropdown--error,
    &.k-Form-Dropdown--valid {
      --DropdownSelect-statusPadding: ${pxToRem(24 + 10)};
      .k-Form-DropdownCombobox__statusBadges,
      .k-Form-DropdownSelect__button__statusBadges {
        position: relative;
        flex: 0 0 ${pxToRem(24)};
      }
    }

    .k-Form-Dropdown__list {
      border-radius: ${pxToRem(6)};

      @media (min-width: ${ScreenConfig.S.min}px) {
        border-radius: ${pxToRem(8)};
      }
    }

    .k-Form-Dropdown__item {
      min-height: ${pxToRem(40)};
    }

    &.k-Form-Dropdown--micro,
    &.k-Form-Dropdown--tiny {
      .k-Form-DropdownCombobox__statusBadges,
      .k-Form-DropdownSelect__button__statusBadges {
        svg {
          width: ${pxToRem(20)};
          height: ${pxToRem(20)};
        }
      }
    }

    &.k-Form-Dropdown--micro {
      --DropdownSelect-buttonHeight: ${pxToRem(30)};
    }

    &.k-Form-Dropdown--tiny {
      --DropdownSelect-buttonHeight: ${pxToRem(40)};
    }

    &.k-Form-Dropdown--normal {
      --DropdownSelect-buttonHeight: ${pxToRem(50)};
    }

    &.k-Form-Dropdown--big,
    &.k-Form-Dropdown--huge,
    &.k-Form-Dropdown--giant {
      --DropdownSelect-buttonHeight: ${pxToRem(60)};
      @media (min-width: ${ScreenConfig.S.min}px) {
        --DropdownSelect-buttonHeight: ${pxToRem(70)};
        --DropdownSelect-arrowContainerWidth: ${pxToRem(50)};
      }

      .k-Form-DropdownCombobox,
      .k-Form-DropdownSelect__button {
        border-radius: ${pxToRem(6)};

        @media (min-width: ${ScreenConfig.S.min}px) {
          border-radius: ${pxToRem(8)};
        }
      }
    }

    &.k-Form-Dropdown--huge {
      @media (min-width: ${ScreenConfig.M.min}px) {
        --DropdownSelect-buttonHeight: ${pxToRem(80)};
        .k-Form-DropdownCombobox,
        .k-Form-DropdownSelect__button {
          font-size: ${stepToRem(0)};
        }
      }
    }
    &.k-Form-Dropdown--giant {
      @media (min-width: ${ScreenConfig.M.min}px) {
        --DropdownSelect-buttonHeight: ${pxToRem(90)};
        .k-Form-DropdownCombobox,
        .k-Form-DropdownSelect__button {
          font-size: ${stepToRem(0)};
        }
      }
    }
  }

  /* ARROWPOSITION: LEFT */

  &.k-Form-Dropdown--arrowPosition-left {
    .k-Form-DropdownCombobox__input,
    .k-Form-DropdownSelect__content {
      order: 2;
      padding-left: ${pxToRem(5)};
      margin-left: ${pxToRem(-5)};
    }

    .k-Form-DropdownSelect__button__arrowBox,
    .k-Form-DropdownCombobox__arrowButton {
      order: 1;
    }

    .k-Form-DropdownCombobox__statusBadges,
    .k-Form-DropdownSelect__button__statusBadges {
      order: 3;
    }
  }

  /* ARROWPOSITION: RIGHT */

  &.k-Form-Dropdown--arrowPosition-right {
    .k-Form-DropdownCombobox__input,
    .k-Form-DropdownSelect__content {
      order: 1;
      padding-left: ${pxToRem(5)};
    }

    .k-Form-DropdownSelect__button__arrowBox,
    .k-Form-DropdownCombobox__arrowButton {
      order: 3;
    }

    .k-Form-DropdownCombobox__statusBadges,
    .k-Form-DropdownSelect__button__statusBadges {
      order: 2;
    }
  }

  /* MODIFIER: HYDROGEN */

  &.k-Form-Dropdown--hydrogen,
  &.k-Form-Dropdown--nitrogen {
    .k-Form-DropdownCombobox,
    .k-Form-DropdownSelect__button {
      border-color: ${COLORS.line1};
      background-color: ${COLORS.background1};
    }

    .k-Form-DropdownCombobox__input,
    .k-Form-DropdownSelect__content {
      color: ${COLORS.font1};
      background-color: ${COLORS.background1};
    }

    &.k-Form-Dropdown--nitrogen {
      .k-Form-DropdownCombobox,
      .k-Form-DropdownSelect__button {
        background-color: ${COLORS.primary5};
      }

      .k-Form-DropdownCombobox__input,
      .k-Form-DropdownSelect__content {
        background-color: ${COLORS.primary5};
      }
    }

    .k-Form-DropdownCombobox__input:placeholder,
    .k-Form-DropdownSelect__placeholder {
      color: ${COLORS.font2};
    }

    .k-Form-DropdownCombobox__input {
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
      &:disabled {
        background-color: ${COLORS.line1};
      }
    }

    .k-Form-DropdownCombobox__arrowButton {
      background-color: ${COLORS.background1};
    }

    .k-Form-Dropdown__list {
      background-color: ${COLORS.background1};

      &:not(:empty) {
        border: ${pxToRem(2)} solid ${COLORS.line1};
      }

      &:focus {
        outline: ${COLORS.primary4} solid ${pxToRem(2)};
        outline-offset: ${pxToRem(2)};
      }
      &:focus:not(:focus-visible) {
        outline-color: transparent;
      }
      &:focus-visible {
        outline-color: ${COLORS.primary4};
      }
    }

    .k-Form-Dropdown__item {
      color: ${COLORS.font1};

      &[aria-selected='true'] {
        background-color: ${COLORS.background3};
      }

      &[disabled] {
        color: ${COLORS.font2};
      }
    }

    &:focus-within {
      .k-Form-DropdownCombobox,
      .k-Form-DropdownCombobox__arrowButton,
      .k-Form-DropdownSelect__button,
      .k-Form-DropdownSelect__button__arrowBox,
      .k-Form-Dropdown__list {
        border-color: ${COLORS.line2};
      }
    }
    .k-Form-DropdownSelect__button:focus {
      outline: ${COLORS.primary4} solid ${pxToRem(2)};
      outline-offset: ${pxToRem(2)};
    }
    .k-Form-DropdownSelect__button:focus:not(:focus-visible) {
      outline-color: transparent;
    }
    .k-Form-DropdownSelect__button:focus-visible {
      outline-color: ${COLORS.primary4};
    }

    &.k-Form-Dropdown--disabled {
      .k-Form-DropdownCombobox,
      .k-Form-DropdownSelect__button,
      .k-Form-DropdownCombobox__arrowButton,
      .k-Form-DropdownSelect__button__arrowBox,
      .k-Form-Dropdown__list,
      .k-Form-DropdownSelect__content {
        background-color: ${COLORS.line1};
        border-color: ${COLORS.line2};
      }
      .k-Form-DropdownCombobox__input {
        background-color: ${COLORS.line1};
      }
      .k-Form-DropdownCombobox__arrowButton svg,
      .k-Form-DropdownSelect__button__arrowBox svg {
        fill: ${COLORS.font2};
      }
      .k-Form-DropdownCombobox__input,
      .k-Form-DropdownSelect__content {
        color: ${COLORS.font2};
      }
    }
  }

  /* MODIFIER: BORON */

  &.k-Form-Dropdown--boron {
    --DropdownSelect-border: ${pxToRem(1)};

    .k-Form-DropdownCombobox,
    .k-Form-DropdownSelect__button {
      border-color: ${COLORS.line3};
      background-color: ${COLORS.line3};
    }

    .k-Form-DropdownCombobox__input,
    .k-Form-DropdownSelect__content {
      background-color: ${COLORS.line3};
      color: ${COLORS.background1};
    }

    .k-Form-DropdownCombobox__arrowButton svg,
    .k-Form-DropdownSelect__button__arrowBox svg {
      fill: ${COLORS.background1};
    }

    .k-Form-DropdownCombobox__input:placeholder,
    .k-Form-DropdownSelect__placeholder {
      color: ${COLORS.grey1};
    }

    .k-Form-DropdownCombobox__input {
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
      &:disabled {
        background-color: ${COLORS.grey1};
      }
    }

    .k-Form-DropdownCombobox__arrowButton {
      background-color: ${COLORS.line3};
    }

    .k-Form-Dropdown__list {
      background-color: ${COLORS.line3};
      &:not(:empty) {
        border: ${pxToRem(1)} solid ${COLORS.line2};
      }

      &:focus {
        outline: ${COLORS.primary4} solid ${pxToRem(2)};
        outline-offset: ${pxToRem(2)};
      }
      &:focus:not(:focus-visible) {
        outline-color: transparent;
      }
      &:focus-visible {
        outline-color: ${COLORS.primary4};
      }
    }

    &.k-Form-Dropdown--normal,
    &.k-Form-Dropdown--big,
    &.k-Form-Dropdown--huge,
    &.k-Form-Dropdown--giant {
      .k-Form-DropdownCombobox__input,
      .k-Form-DropdownSelect__content {
        ${TYPOGRAPHY.fontStyles.regular}
      }
    }

    .k-Form-Dropdown__item {
      color: ${COLORS.background1};
      &[aria-selected='true'] {
        ${TYPOGRAPHY.fontStyles.regular}
        background-color: ${COLORS.font1};
      }
      &[disabled] {
        color: ${COLORS.font3};
      }
    }

    &:focus-within {
      .k-Form-DropdownCombobox,
      .k-Form-DropdownSelect__button,
      .k-Form-DropdownCombobox__arrowButton,
      .k-Form-DropdownSelect__button__arrowBox,
      .k-Form-Dropdown__list {
        border-color: ${COLORS.line2};
      }
    }
    .k-Form-DropdownSelect__button:focus {
      outline: ${COLORS.primary4} solid ${pxToRem(2)};
      outline-offset: ${pxToRem(2)};
    }
    .k-Form-DropdownSelect__button:focus:not(:focus-visible) {
      outline-color: transparent;
    }
    .k-Form-DropdownSelect__button:focus-visible {
      outline-color: ${COLORS.primary4};
    }

    &.k-Form-Dropdown--disabled {
      .k-Form-DropdownCombobox,
      .k-Form-DropdownSelect__button,
      .k-Form-DropdownCombobox__arrowButton,
      .k-Form-DropdownSelect__button__arrowBox,
      .k-Form-Dropdown__list,
      .k-Form-DropdownSelect__content {
        background-color: ${COLORS.grey1};
        border-color: ${COLORS.grey1};
      }
      .k-Form-DropdownCombobox__input {
        background-color: ${COLORS.grey1};
      }
      .k-Form-DropdownCombobox__arrowButton svg,
      .k-Form-DropdownSelect__button__arrowBox svg {
        fill: ${COLORS.line1};
      }
      .k-Form-DropdownCombobox__input,
      .k-Form-DropdownSelect__content {
        color: ${COLORS.line1};
      }
    }
  }

  /* DIRECTION: DOWN */

  &.k-Form-Dropdown--down {
    .k-Form-Dropdown__list {
      top: 100%;

      &:not(:empty) {
        border-top: 0;
      }
    }

    &.k-Form-Dropdown--orion.k-Form-Dropdown--isOpen {
      .k-Form-DropdownCombobox,
      .k-Form-DropdownSelect__button {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }
      .k-Form-Dropdown__list {
        box-shadow: 0 ${pxToRem(5)} ${pxToRem(5)} 0 rgba(0, 0, 0, 0.1);
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }
    }
  }

  /* DIRECTION: UP */

  &.k-Form-Dropdown--up {
    .k-Form-Dropdown__list {
      bottom: var(--DropdownSelect-buttonHeight);

      &:not(:empty) {
        border-bottom: 0;
      }
    }

    &.k-Form-Dropdown--orion.k-Form-Dropdown--isOpen {
      .k-Form-DropdownCombobox,
      .k-Form-DropdownSelect__button {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }
      .k-Form-Dropdown__list {
        box-shadow: 0 ${pxToRem(-5)} ${pxToRem(5)} 0 rgba(0, 0, 0, 0.1);
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }
    }
  }
`
