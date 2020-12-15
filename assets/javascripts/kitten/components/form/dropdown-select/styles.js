import styled from 'styled-components'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import COLORS from '../../../constants/colors-config'
import TYPOGRAPHY from '../../../constants/typography-config'
import { ScreenConfig } from '../../../constants/screen-config'

export const StyledDropdown = styled.div`
  position: relative;

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
    height: ${pxToRem(50)};
    overflow: hidden;
    padding: 0;
    margin: 0;

    border: ${pxToRem(2)} solid ${COLORS.line1};
    background-color: ${COLORS.background1};

    font-size: ${stepToRem(-1)};
    text-align: left;
    outline: none;

    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .k-Form-DropdownCombobox__input,
  .k-Form-DropdownSelect__content {
    ${TYPOGRAPHY.fontStyles.light}
    padding: 0 ${pxToRem(15)};
    color: ${COLORS.font1};
  }
  .k-Form-DropdownCombobox__input:placeholder,
  .k-Form-DropdownSelect__placeholder {
    color: ${COLORS.font2};
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
    right: ${pxToRem(40 + 10)};
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

  .k-Form-DropdownCombobox {
    display: flex;
  }

  .k-Form-DropdownCombobox__input {
    flex: 1 0 auto;
    border: 0;
    font-size: inherit;

    &:focus {
      outline: none;
    }
    &:disabled {
      background-color: ${COLORS.line1};
    }
  }
  .k-Form-DropdownCombobox__arrowButton {
    appearance: none;
    border: 0;
    background-color: ${COLORS.background1};
    font-size: ${stepToRem(-1)};
    text-align: left;
    outline: none;
    display: flex;
  }
  .k-Form-DropdownCombobox__arrowButton__arrowBox {
    line-height: 0;
  }


  .k-Form-Dropdown__list {
    box-sizing: border-box;
    position: absolute;
    z-index: 1;
    width: 100%;
    max-height: ${pxToRem(250)};
    padding: 0;
    margin: 0;
    overflow-y: scroll;
    background-color: ${COLORS.background1};
    list-style: none;

    &:not(:empty) {
      border: ${pxToRem(2)} solid ${COLORS.line1};
      border-top: 0;
    }
    &:focus {
      outline: none;
    }
  }

  .k-Form-Dropdown__item {
    transition: background-color .2s ease;
    box-sizing: border-box;
    padding: ${pxToRem(15)};
    min-height: ${pxToRem(50)};
    ${TYPOGRAPHY.fontStyles.light}
    font-size: ${stepToRem(-1)};
    user-select: none;
    line-height: 1.3;
    display: flex;
    align-items: center;

    &[aria-selected="true"] {
      background-color: ${COLORS.background3};
    }

    &[disabled] {
      color: ${COLORS.font2};
    }

    &.k-Form-Dropdown__item--level_2 {
      padding-left: ${pxToRem(30)};
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

  &.k-Form-Dropdown--error {
    .k-Form-DropdownCombobox,
    .k-Form-DropdownSelect__button {
      padding-right: ${pxToRem(40 + 10 + 24 + 10)};
    }

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
    .k-Form-DropdownSelect__button {
      padding-right: ${pxToRem(40 + 10 + 24 + 10)};
    }

    .k-Form-DropdownCombobox,
    .k-Form-DropdownSelect__button,
    .k-Form-DropdownCombobox__arrowButton,
    .k-Form-DropdownSelect__button__arrowBox,
    .k-Form-Dropdown__list {
      border-color: ${COLORS.tertiary2};
    }
  }
  &.k-Form-Dropdown--disabled {
    .k-Form-DropdownCombobox,
    .k-Form-DropdownSelect__button,
    .k-Form-DropdownCombobox__arrowButton,
    .k-Form-DropdownSelect__button__arrowBox,
    .k-Form-Dropdown__list {
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


  /* SIZES */
  &.k-Form-Dropdown--andromeda {
    .k-Form-DropdownCombobox,
    .k-Form-DropdownSelect__button {
      padding: 0 ${pxToRem(40 + 10)} 0 0;
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


    &.k-Form-Dropdown--tiny {
      .k-Form-DropdownCombobox,
      .k-Form-DropdownSelect__button {
        height: ${pxToRem(40)};
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
        .k-Form-DropdownCombobox,
        .k-Form-DropdownSelect__button {
          height: ${pxToRem(60)};
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
      .k-Form-DropdownCombobox,
      .k-Form-DropdownSelect__button {
        height: ${pxToRem(70)};
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

      @media (min-width: ${ScreenConfig.S.min}px) {
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
          .k-Form-DropdownCombobox,
          .k-Form-DropdownSelect__button {
            height: ${pxToRem(80)};
          }
        }
        &.k-Form-Dropdown--giant {
          .k-Form-DropdownCombobox,
          .k-Form-DropdownSelect__button {
            height: ${pxToRem(90)};
          }
        }
      }
    }
  }


  /* ORION */

  &.k-Form-Dropdown--orion {
    .k-Form-DropdownCombobox,
    .k-Form-DropdownSelect__button {
      height: ${pxToRem(60)};
      border-radius: ${pxToRem(6)};
      padding-right: ${pxToRem(10)};

      @media (min-width: ${ScreenConfig.S.min}px) {
        height: ${pxToRem(70)};
        border-radius: ${pxToRem(8)};
        padding-right: ${pxToRem(20)};
      }

    }

    &.k-Form-Dropdown--isOpen {
      .k-Form-DropdownCombobox,
      .k-Form-DropdownSelect__button {
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
        }
    }

    .k-Form-DropdownSelect__button__arrowBox {
      left: ${pxToRem(20)};

      @media (min-width: ${ScreenConfig.S.min}px) {
        left: ${pxToRem(30)};
      }
    }
    .k-Form-DropdownCombobox__arrowButton {
      padding: 0;
      width: ${pxToRem(40)};

      @media (min-width: ${ScreenConfig.S.min}px) {
        width: ${pxToRem(50)};
      }
    }
    .k-Form-DropdownCombobox__arrowButton__arrowBox {
      margin-left: ${pxToRem(6)};
      @media (min-width: ${ScreenConfig.S.min}px) {
        margin-left: ${pxToRem(16)};
      }
    }

    .k-Form-DropdownCombobox__input,
    .k-Form-DropdownSelect__content {
      margin-left: ${pxToRem(20 + 10)};

      @media (min-width: ${ScreenConfig.S.min}px) {
        margin-left: ${pxToRem(30 + 10)};
      }
    }

    .k-Form-DropdownCombobox__statusBadges,
    .k-Form-DropdownSelect__button__statusBadges {
      right: ${pxToRem(10)};

      @media (min-width: ${ScreenConfig.S.min}px) {
        right: ${pxToRem(20)};
      }
    }

    .k-Form-Dropdown__list {
      box-shadow: 0 ${pxToRem(5)} ${pxToRem(5)} 0 rgba(0, 0, 0, 0.1);
      border-bottom-left-radius: ${pxToRem(6)};
      border-bottom-right-radius: ${pxToRem(6)};

      @media (min-width: ${ScreenConfig.S.min}px) {
        border-bottom-left-radius: ${pxToRem(8)};
        border-bottom-right-radius: ${pxToRem(8)};
      }
    }
    .k-Form-Dropdown__item {
      min-height: ${pxToRem(40)};
      padding-top: ${pxToRem(8)};
      padding-bottom: ${pxToRem(8)};
    }

    &.k-Form-Dropdown--error .k-Form-DropdownSelect__button,
    &.k-Form-Dropdown--valid .k-Form-DropdownSelect__button {
      padding-right: ${pxToRem(10 + 10 + 24 + 10)};

      @media (min-width: ${ScreenConfig.S.min}px) {
        padding-right: ${pxToRem(20 + 10 + 24 + 10)};
      }
    }
  }
`
