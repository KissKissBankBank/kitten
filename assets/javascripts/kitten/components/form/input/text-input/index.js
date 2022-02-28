import React, { PureComponent } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography'
import TYPOGRAPHY from '../../../../constants/typography-config'
import { ScreenConfig } from '../../../../constants/screen-config'
import classNames from 'classnames'

export const StyledInput = styled.input`
  --input-padding-horizontal: ${pxToRem(15)};
  --input-border-width: var(--border-width);
  --input-height: ${pxToRem(50)};

  font-size: ${stepToRem(-1)};
  line-height: 1em;
  ${TYPOGRAPHY.fontStyles.light};
  box-sizing: border-box;
  border-width: var(--input-border-width);
  border-style: solid;
  border-radius: 0;
  width: 100%;
  appearance: none;
  background-color: var(--color-grey-000);
  color: var(--color-grey-900);
  border-color: var(--color-grey-400);
  height: var(--input-height);
  min-height: var(--input-height);

  transition: border-color 0.2s ease;

  ::placeholder {
    color: var(--color-grey-700);
  }

  // SIZES

  &.k-Form-TextInput--tiny {
    --input-height: ${pxToRem(40)};
  }

  &.k-Form-TextInput--regular {
    --input-height: ${pxToRem(50)};
  }

  &.k-Form-TextInput--big {
    --input-height: ${pxToRem(60)};

    @media (min-width: ${ScreenConfig.M.min}px) {
      --input-height: ${pxToRem(70)};
      font-size: ${stepToRem(0)};
    }
  }

  &.k-Form-TextInput--huge {
    --input-height: ${pxToRem(70)};

    @media (min-width: ${ScreenConfig.M.min}px) {
      --input-height: ${pxToRem(80)};
      font-size: ${stepToRem(0)};
    }
  }

  &.k-Form-TextInput--giant {
    --input-height: ${pxToRem(70)};

    @media (min-width: ${ScreenConfig.M.min}px) {
      --input-height: ${pxToRem(90)};
      font-size: ${stepToRem(0)};
    }
  }

  padding: ${pxToRem(10)} var(--input-padding-horizontal);
  border-radius: var(--border-radius-s);

  &.k-Form-TextInput--rounded {
    border-radius: var(--border-radius-rounded);
  }

  // TEXT

  &.k-Form-TextInput--alignCenter {
    text-align: center;
  }

  // STATES

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

  &.k-Form-TextInput--valid {
    color: var(--color-grey-900);
    border: var(--border-success);
  }

  &.k-Form-TextInput--error {
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

  // DIGITS

  &.k-Form-TextInput-hasDigits {
    width: calc(
      var(--input-content-width) * 1ch +
        (2 * (var(--input-padding-horizontal) + var(--input-border-width)))
    );
  }

  &.k-Form-TextInput-hasDigits_2 {
    text-align: center;
  }

  /* Prevents zooming on  */
  @media (max-width: ${ScreenConfig.XS.max}px) {
    font-size: ${stepToRem(0)};
  }

  // DARK BACKGROUND
  &.k-Form-TextInput--darkBackground {
    background-color: var(--color-grey-800);
    border-color: var(--color-grey-800);
    color: var(--color-grey-000);

    ::placeholder {
      color: var(--color-grey-400);
    }
  }
`

const StyledTextareaContainer = styled.div`
  position: relative;
  display: flex;

  textarea.k-Form-TextInput {
    height: initial;
    resize: vertical;
    line-height: 1.3;

    &:disabled {
      resize: none;
    }

    padding-bottom: 0;

    &.k-Form-TextInput--tiny {
      padding-top: ${pxToRem(9)};
      padding-bottom: ${pxToRem(9)};
    }

    &.k-Form-TextInput--regular {
      padding-top: ${pxToRem(14)};
      padding-bottom: ${pxToRem(14)};
    }

    &.k-Form-TextInput--big {
      padding-top: ${pxToRem(18)};
      padding-bottom: ${pxToRem(18)};

      @media (min-width: ${ScreenConfig.M.min}px) {
        padding-top: ${pxToRem(21)};
        padding-bottom: ${pxToRem(21)};
      }
    }

    &.k-Form-TextInput--huge {
      padding-top: ${pxToRem(21)};
      padding-bottom: ${pxToRem(21)};

      @media (min-width: ${ScreenConfig.M.min}px) {
        padding-top: ${pxToRem(27)};
        padding-bottom: ${pxToRem(27)};
      }
    }

    &.k-Form-TextInput--giant {
      padding-top: ${pxToRem(21)};
      padding-bottom: ${pxToRem(21)};

      @media (min-width: ${ScreenConfig.M.min}px) {
        padding-top: ${pxToRem(32)};
        padding-bottom: ${pxToRem(32)};
      }
    }
  }

  &.k-Form-TextInput--rounded {
    border-radius: var(--border-radius-rounded);
  }

  &.k-Form-TextInput--darkBackground {
    background-color: var(--color-grey-800);
    border-color: var(--color-grey-800);
    color: var(--color-grey-000);

    ::placeholder {
      color: var(--color-grey-400);
    }
  }

  .k-Form-TextInput__textareaGradient {
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

    textarea.k-Form-TextInput:disabled + & {
      display: none;
    }
  }
  .k-Form-TextInput:focus-visible + .k-Form-TextInput__textareaGradient {
    bottom: ${pxToRem(3)};
  }
`

export class TextInput extends PureComponent {
  static propTypes = {
    tag: PropTypes.string,
    valid: PropTypes.bool,
    error: PropTypes.bool,
    size: PropTypes.oneOf(['tiny', 'regular', 'big', 'huge', 'giant']),
    center: PropTypes.bool,
    disabled: PropTypes.bool,
    name: PropTypes.string,
    digits: PropTypes.number,
    rounded: PropTypes.bool,
    darkBackground: PropTypes.bool,
  }

  static defaultProps = {
    tag: 'input', // or 'textarea'
    valid: false,
    error: false,
    size: 'regular',
    center: false,
    disabled: false,
    name: 'text',
    digits: null,
    rounded: false,
    darkBackground: false,
  }

  render() {
    const {
      valid,
      error,
      disabled,
      name,
      digits,
      size,
      center,
      tag,
      className,
      style,
      rounded,
      darkBackground,
      ...others
    } = this.props

    const digitsClass = !!digits
      ? `k-Form-TextInput-hasDigits k-Form-TextInput-hasDigits_${digits}`
      : null

    if (tag === 'textarea') {
      return (
        <StyledTextareaContainer
          className={classNames('k-Form-TextInput__textareaContainer')}
        >
          <StyledInput
            ref={input => (this.input = input)}
            as="textarea"
            disabled={disabled}
            name={name}
            className={classNames(
              'k-Form-TextInput',
              className,
              digitsClass,
              `k-Form-TextInput--${size}`,
              {
                'k-Form-TextInput--valid': valid,
                'k-Form-TextInput--error': error,
                'k-Form-TextInput--disabled': disabled,
                'k-Form-TextInput--alignCenter': center,
                'k-Form-TextInput--rounded': rounded,
                'k-Form-TextInput--darkBackground': darkBackground,
              },
            )}
            style={
              !!digits ? { '--input-content-width': digits, ...style } : style
            }
            {...others}
          />
          <div className="k-Form-TextInput__textareaGradient" />
        </StyledTextareaContainer>
      )
    } else {
      return (
        <StyledInput
          ref={input => (this.input = input)}
          disabled={disabled}
          name={name}
          className={classNames(
            'k-Form-TextInput',
            className,
            digitsClass,
            `k-Form-TextInput--${size}`,
            {
              'k-Form-TextInput--valid': valid,
              'k-Form-TextInput--error': error,
              'k-Form-TextInput--disabled': disabled,
              'k-Form-TextInput--alignCenter': center,
              'k-Form-TextInput--rounded': rounded,
              'k-Form-TextInput--darkBackground': darkBackground,
            },
          )}
          style={
            !!digits ? { '--input-content-width': digits, ...style } : style
          }
          {...others}
        />
      )
    }
  }
}
