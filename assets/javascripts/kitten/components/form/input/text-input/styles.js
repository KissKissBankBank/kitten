import styled from 'styled-components'
import { pxToRem } from '../../../../helpers/utils/typography'
import TYPOGRAPHY from '../../../../constants/typography-config'
import { mq } from '../../../../constants/screen-config'

export const StyledInputWrapper = styled.div`
  --text-input-padding-horizontal: ${pxToRem(15)};
  --text-input-border-width: var(--border-width);
  --text-input-height: ${pxToRem(50)};

  position: relative;

  /* SIZES */

  &.k-TextInput__wrapper--small {
    --text-input-height: ${pxToRem(40)};
    --text-input-textarea-padding: ${pxToRem(9)};
    --text-input-unit-padding: ${pxToRem(10)};
  }

  &.k-TextInput__wrapper--medium {
    --text-input-height: ${pxToRem(50)};
    --text-input-textarea-padding: ${pxToRem(14)};
    --text-input-unit-padding: ${pxToRem(12)};
  }

  &.k-TextInput__wrapper--large {
    --text-input-height: ${pxToRem(60)};
    --text-input-textarea-padding: ${pxToRem(18)};
    --text-input-unit-padding: ${pxToRem(20)};

    @media ${mq.tabletAndDesktop} {
      --text-input-height: ${pxToRem(70)};
      --text-input-textarea-padding: ${pxToRem(21)};

      .k-TextInput {
        font-size: ${pxToRem(16)};
      }
    }
  }

  &.k-TextInput__wrapper--huge {
    --text-input-height: ${pxToRem(70)};
    --text-input-textarea-padding: ${pxToRem(21)};
    --text-input-unit-padding: ${pxToRem(20)};

    @media ${mq.tabletAndDesktop} {
      --text-input-height: ${pxToRem(80)};
      --text-input-textarea-padding: ${pxToRem(27)};

      .k-TextInput {
        font-size: ${pxToRem(16)};
      }
    }
  }

  &.k-TextInput__wrapper--giant {
    --text-input-height: ${pxToRem(70)};
    --text-input-textarea-padding: ${pxToRem(21)};
    --text-input-unit-padding: ${pxToRem(25)};

    @media ${mq.tabletAndDesktop} {
      --text-input-height: ${pxToRem(90)};
      --text-input-textarea-padding: ${pxToRem(32)};

      .k-TextInput {
        font-size: ${pxToRem(16)};
      }
    }
  }

  .k-TextInput {
    font-size: ${pxToRem(14)};
    line-height: 1em;
    ${TYPOGRAPHY.fontStyles.light};
    box-sizing: border-box;
    border-width: var(--text-input-border-width);
    border-style: solid;
    border-radius: 0;
    width: 100%;
    appearance: none;
    background-color: var(--color-grey-000);
    color: var(--color-grey-900);
    border-color: var(--color-grey-400);
    height: var(--text-input-height);
    min-height: var(--text-input-height);
    padding: ${pxToRem(10)} var(--text-input-padding-horizontal);
    border-radius: var(--border-radius-s);

    transition: border-color 0.2s ease;

    ::placeholder {
      color: var(--color-grey-700);
    }

    &.k-TextInput--rounded {
      border-radius: var(--border-radius-rounded);
    }

    /* TEXT */

    &.k-TextInput--alignCenter {
      text-align: center;
    }

    /* STATES */

    :disabled {
      color: var(--color-grey-600);
      border-color: var(--color-grey-300);
      background-color: var(--color-grey-200);
      cursor: not-allowed;

      &:hover {
        border-color: var(--color-grey-300);
      }
      ::placeholder {
        color: var(--color-grey-600);
      }
    }

    &.k-TextInput--valid {
      color: var(--color-grey-900);
      border: var(--border-success);
    }

    &.k-TextInput--error {
      color: var(--color-grey-900);
      border: var(--border-danger);
    }

    &:invalid {
      box-shadow: none;
      color: var(--color-grey-900);
      border: var(--border-danger);
    }

    &:hover {
      border: var(--border-hover);
    }

    &:focus {
      color: var(--color-grey-900);
      border-color: var(--color-grey-500);
      outline: var(--outline-input);
      outline-offset: var(--outline-offset-input);
    }

    /* DIGITS */

    &.k-TextInput-hasDigits {
      width: calc(
        var(--text-input-content-width) * 1ch +
          (
            2 *
              (
                var(--text-input-padding-horizontal) +
                  var(--text-input-border-width)
              )
          )
      );
    }

    &.k-TextInput-hasDigits_2 {
      text-align: center;
    }

    /* Prevents zooming in  */
    @media ${mq.mobile} {
      font-size: ${pxToRem(16)};
    }

    /* DARK BACKGROUND */
    &.k-TextInput--darkBackground {
      background-color: var(--color-grey-800);
      border-color: var(--color-grey-800);
      color: var(--color-grey-000);

      ::placeholder {
        color: var(--color-grey-400);
      }
    }
  }

  /* IS TEXTAREA TAG */

  &.k-TextInput__isTextarea {
    display: flex;

    textarea.k-TextInput {
      margin: 0;
      height: initial;
      resize: vertical;
      line-height: ${pxToRem(18)};
      padding-block: var(--text-input-textarea-padding);

      &:disabled {
        resize: none;
      }

      &.k-TextInput--autoResize {
        resize: none;
      }
    }

    .k-TextInput__textareaGradient {
      position: absolute;
      left: ${pxToRem(10)};
      right: ${pxToRem(2)};
      bottom: ${pxToRem(2)};
      height: ${pxToRem(10)};

      background-image: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0.9)
      );

      pointer-events: none;

      textarea.k-TextInput:disabled + & {
        display: none;
      }
    }

    .k-TextInput:focus-visible + .k-TextInput__textareaGradient {
      bottom: ${pxToRem(3)};
    }
  }

  /* HAS BUTTON */

  .k-TextInput__button {
    ${TYPOGRAPHY.fontStyles.regular};
    font-size: ${pxToRem(14)};
    line-height: 1.3;
    flex: 1 0 auto;
    appearance: none;
    cursor: pointer;
  }

  &:not(.k-TextInput__wrapper--button_inset) {
    display: flex;
    gap: ${pxToRem(10)};
  }

  &.k-TextInput__wrapper--button_inset {
    position: relative;

    .k-TextInput__input {
      padding-right: calc(var(--text-input-height) + ${pxToRem(15)});
    }

    .k-TextInput__button {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: ${pxToRem(4)};
      bottom: ${pxToRem(4)};
      right: ${pxToRem(4)};
      min-width: calc(var(--text-input-height) - ${pxToRem(4)} * 2);
      border-radius: var(--border-radius-s);
      border: none;
      background-color: var(--color-grey-000);
      transition: background-color 0.2s ease;

      &:hover {
        background-color: var(--color-grey-300);
      }
      &:active {
        background-color: var(--color-grey-400);
      }
    }
  }

  .k-TextInput--rounded + .k-TextInput__button {
    border-radius: var(--border-radius-rounded);
  }

  .k-TextInput--valid + .k-TextInput__button {
    background-color: var(--color-success-500);
    border-color: var(--color-success-500);
  }

  .k-TextInput--error + .k-TextInput__button {
    cursor: not-allowed;
    background-color: var(--color-danger-500);
    border-color: var(--color-danger-500);
  }

  /* HAS ICON */
  .k-TextInput__icon {
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    z-index: 1;
    top: 0;
    width: ${pxToRem(50)};
    height: 100%;

    &.k-TextInput__icon--disabled > svg:not(.k-ColorSvg) {
      &[stroke]:not([stroke='none']),
      & [stroke]:not([stroke='none']) {
        stroke: var(--color-grey-500);
      }
      &[fill]:not([fill='none']),
      & [fill]:not([fill='none']) {
        fill: var(--color-grey-500);
      }
    }
  }
  &.k-TextInput__wrapper--icon_left {
    .k-TextInput {
      padding-left: ${pxToRem(50)};
    }

    .k-TextInput__icon {
      left: 0;
    }
  }
  &.k-TextInput__wrapper--icon_right {
    .k-TextInput {
      padding-right: ${pxToRem(50)};
    }

    .k-TextInput__icon {
      right: 0;
    }
  }

  /* HAS LIMIT */

  .k-TextInput__limitNumber {
    ${TYPOGRAPHY.fontStyles.regular};
    font-size: ${pxToRem(12)};
    line-height: 1.3;
    position: absolute;
    bottom: ${pxToRem(15)};
    right: ${pxToRem(15)};

    color: var(--color-grey-600);
    text-shadow: ${pxToRem(2)} 0 0 var(--color-grey-000),
      -${pxToRem(2)} 0 0 var(--color-grey-000),
      0 ${pxToRem(2)} 0 var(--color-grey-000),
      0 -${pxToRem(2)} 0 var(--color-grey-000),
      ${pxToRem(1)} ${pxToRem(1)} var(--color-grey-000),
      -${pxToRem(1)} -${pxToRem(1)} 0 var(--color-grey-000),
      ${pxToRem(1)} -${pxToRem(1)} 0 var(--color-grey-000),
      -${pxToRem(1)} ${pxToRem(1)} 0 var(--color-grey-000);
    pointer-events: none;

    &.k-TextInput__limitNumber--disabled {
      text-shadow: none;
    }
  }

  :focus + .k-TextInput__limitNumber,
  &:focus-within .k-TextInput__limitNumber {
    color: var(--color-grey-600);
  }
  .k-TextInput + .k-TextInput__limitNumber--error {
    color: var(--color-danger-500);
  }

  /* HAS UNIT */

  &.k-TextInput__wrapper--hasUnit {
    width: 1%;

    &:not(.k-TextInput__wrapper--hasDigits) {
      width: 100%;
    }

    .k-TextInput {
      border-radius: var(--border-radius-s);
      padding-right: ${pxToRem(42)};

      &[type='number'] {
        appearance: textfield;

        &::-webkit-inner-spin-button,
        &::-webkit-outer-spin-button {
          margin: 0;
          appearance: none;
        }
      }
    }

    .k-TextInput__unit {
      display: flex;
      z-index: 1;
      position: absolute;
      right: ${pxToRem(3)};
      top: ${pxToRem(3)};
      bottom: ${pxToRem(3)};
      min-width: ${pxToRem(40)};
      align-items: center;
      justify-content: center;
      border-radius: 0;
      box-sizing: border-box;
      color: var(--color-grey-900);
      white-space: nowrap;
      transition: all 0.2s;
      font-size: ${pxToRem(16)};
      ${TYPOGRAPHY.fontStyles.regular};
      background-color: var(--color-grey-000);
      padding-inline: var(--text-input-unit-padding);

      &.k-TextInput__unit--unitIsWord {
        font-size: ${pxToRem(14)};
      }
    }

    .k-TextInput--disabled + .k-TextInput__unit {
      color: var(--color-grey-700);
      background-color: var(--color-grey-200);
    }

    &:focus-within {
      .k-Form-TextInputWithUnit__unit {
        border-color: var(--color-grey-500);
        color: var(--color-grey-900);
      }
    }
  }
`
