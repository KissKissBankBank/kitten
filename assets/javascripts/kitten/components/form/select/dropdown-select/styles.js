import styled from 'styled-components'
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography'
import COLORS from '../../../../constants/colors-config'
import TYPOGRAPHY from '../../../../constants/typography-config'
import { ScreenConfig } from '../../../../constants/screen-config'

export const StyledDropdown = styled.div`
  position: relative;

  --DropdownSelect-buttonHeight: ${pxToRem(50)};
  --DropdownSelect-border: var(--border-width);
  --DropdownSelect-padding: ${pxToRem(10)};
  --DropdownSelect-arrowContainerWidth: ${pxToRem(20)};
  --DropdownSelect-statusPadding: 0px;

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
    margin: 0;
    border-radius: var(--border-radius-s);

    display: flex;
    gap: ${pxToRem(10)};
    padding: 0 ${pxToRem(10)};

    border: var(--border);

    font-size: ${stepToRem(-1)};
    text-align: left;
  }

  .k-Form-DropdownCombobox__input,
  .k-Form-DropdownSelect__content {
    ${TYPOGRAPHY.fontStyles.light}
    display: inline-block;
    box-sizing: border-box;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    border: 0;
    font-size: inherit;

    max-width: calc(
      100% - var(--DropdownSelect-arrowContainerWidth) -
        var(--DropdownSelect-statusPadding)
    );
    flex: 1 1
      calc(
        100% - var(--DropdownSelect-arrowContainerWidth) -
          var(--DropdownSelect-statusPadding)
      );
    line-height: calc(
      var(--DropdownSelect-buttonHeight) - 2 * var(--DropdownSelect-border)
    );
  }
  .k-Form-DropdownCombobox__input:focus {
    outline-offset: var(--outline-offset-input);
  }

  .k-Form-DropdownCombobox__arrowButton,
  .k-Form-DropdownSelect__button__arrowBox {
    height: 100%;
    flex: 0 0 var(--DropdownSelect-arrowContainerWidth);
    width: var(--DropdownSelect-arrowContainerWidth);

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .k-Form-DropdownCombobox__arrowButton {
    appearance: none;
    border: 0;
    font-size: ${stepToRem(-1)};
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
    border-radius: var(--border-radius-s);

    &:not(:empty) {
      border: var(--DropdownSelect-border) solid var(--color-grey-400);
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
    min-height: ${pxToRem(40)};

    &.k-Form-Dropdown__item--level_2 {
      padding-left: ${pxToRem(30)};
    }
  }

  .k-Form-DropdownCombobox__statusBadges,
  .k-Form-DropdownSelect__button__statusBadges {
    &:empty {
      display: none;
    }
  }

  &.k-Form-Dropdown--error,
  &.k-Form-Dropdown--valid {
    --DropdownSelect-statusPadding: ${pxToRem(24 + 10)};

    .k-Form-DropdownCombobox__statusBadges,
    .k-Form-DropdownSelect__button__statusBadges {
      flex: 0 0 ${pxToRem(24)};
      height: 100%;

      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        width: ${pxToRem(24)};
        height: ${pxToRem(24)};
      }
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

    .k-Form-DropdownCombobox,
    .k-Form-DropdownSelect__button {
      border: var(--color-grey-300);
    }
  }

  /* SIZES */

  &.k-Form-Dropdown--micro,
  &.k-Form-Dropdown--tiny,
  &.k-Form-Dropdown--small {
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

  &.k-Form-Dropdown--tiny,
  &.k-Form-Dropdown--small {
    --DropdownSelect-buttonHeight: ${pxToRem(40)};
  }

  &.k-Form-Dropdown--normal,
  &.k-Form-Dropdown--medium {
    --DropdownSelect-buttonHeight: ${pxToRem(50)};
  }

  &.k-Form-Dropdown--big,
  &.k-Form-Dropdown--large,
  &.k-Form-Dropdown--huge,
  &.k-Form-Dropdown--giant {
    --DropdownSelect-buttonHeight: ${pxToRem(60)};
    @media (min-width: ${ScreenConfig.S.min}px) {
      --DropdownSelect-buttonHeight: ${pxToRem(70)};
      --DropdownSelect-arrowContainerWidth: ${pxToRem(50)};
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
      border-color: var(--color-grey-400);
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
      &:disabled {
        background-color: var(--color-grey-200);
      }
    }

    .k-Form-DropdownCombobox__arrowButton {
      background-color: ${COLORS.background1};
    }

    .k-Form-Dropdown__list {
      background-color: ${COLORS.background1};

      &:not(:empty) {
        border: var(--DropdownSelect-border) solid var(--color-grey-400);
      }
    }

    .k-Form-Dropdown__item {
      color: ${COLORS.font1};

      &[aria-selected='true'] {
        background-color: ${COLORS.background3};
      }

      &[disabled] {
        color: var(--color-grey-600);
      }
    }

    &:hover {
      .k-Form-DropdownCombobox,
      .k-Form-DropdownSelect__button,
      .k-Form-Dropdown__list {
        border-color: var(--color-grey-500);
      }
    }

    &:focus-within {
      .k-Form-DropdownCombobox,
      .k-Form-DropdownCombobox__arrowButton,
      .k-Form-DropdownSelect__button,
      .k-Form-DropdownSelect__button__arrowBox,
      .k-Form-Dropdown__list {
        border-color: var(--color-grey-600);
      }
    }

    &.k-Form-Dropdown--disabled {
      .k-Form-DropdownCombobox,
      .k-Form-DropdownSelect__button,
      .k-Form-DropdownCombobox__arrowButton,
      .k-Form-DropdownSelect__button__arrowBox,
      .k-Form-Dropdown__list,
      .k-Form-DropdownSelect__content {
        border: var(--color-grey-300);
        background-color: var(--color-grey-200);
        color: var(--color-grey-600);
      }
      .k-Form-DropdownCombobox__input {
        background-color: var(--color-grey-200);
      }
      .k-Form-DropdownCombobox__arrowButton svg,
      .k-Form-DropdownSelect__button__arrowBox svg {
        fill: var(--color-grey-600);
      }
      .k-Form-DropdownCombobox__input,
      .k-Form-DropdownSelect__content {
        color: var(--color-grey-600);
      }
    }
  }

  /* MODIFIER: BORON */

  &.k-Form-Dropdown--boron {
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
      &:disabled {
        background-color: var(--color-grey-200);
      }
    }

    .k-Form-DropdownCombobox__arrowButton {
      background-color: ${COLORS.line3};
    }

    .k-Form-Dropdown__list {
      background-color: ${COLORS.line3};
      &:not(:empty) {
        border: var(--DropdownSelect-border) solid var(--color-grey-400);
      }
    }

    &.k-Form-Dropdown--normal,
    &.k-Form-Dropdown--medium,
    &.k-Form-Dropdown--big,
    &.k-Form-Dropdown--large,
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
        color: var(--color-grey-600);
      }
    }

    &:hover {
      .k-Form-DropdownCombobox,
      .k-Form-DropdownSelect__button,
      .k-Form-Dropdown__list {
        border-color: var(--color-grey-600);
      }
    }

    &:focus-within {
      .k-Form-DropdownCombobox,
      .k-Form-DropdownSelect__button,
      .k-Form-DropdownCombobox__arrowButton,
      .k-Form-DropdownSelect__button__arrowBox,
      .k-Form-Dropdown__list {
        border-color: var(--color-grey-400);
      }
    }

    &.k-Form-Dropdown--disabled {
      .k-Form-DropdownCombobox,
      .k-Form-DropdownSelect__button,
      .k-Form-DropdownCombobox__arrowButton,
      .k-Form-DropdownSelect__button__arrowBox,
      .k-Form-Dropdown__list,
      .k-Form-DropdownSelect__content {
        border: var(--color-grey-300);
        background-color: var(--color-grey-200);
        color: var(--color-grey-600);
      }
      .k-Form-DropdownCombobox__input {
        background-color: var(--color-grey-200);
      }
      .k-Form-DropdownCombobox__arrowButton svg,
      .k-Form-DropdownSelect__button__arrowBox svg {
        fill: var(--color-grey-600);
      }
      .k-Form-DropdownCombobox__input,
      .k-Form-DropdownSelect__content {
        color: var(--color-grey-600);
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

    &.k-Form-Dropdown--isOpen {
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

    &.k-Form-Dropdown--isOpen {
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
