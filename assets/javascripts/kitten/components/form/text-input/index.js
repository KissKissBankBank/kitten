import React, { PureComponent } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import COLORS from '../../../constants/colors-config'
import TYPOGRAPHY from '../../../constants/typography-config'
import { ScreenConfig } from '../../../constants/screen-config'
import classNames from 'classnames'

const StyledInput = styled.input`
  --input-padding-horizontal: ${pxToRem(15)};
  --input-border-width: ${pxToRem(2)};

  font-size: ${stepToRem(-1)};
  line-height: 1em;
  ${TYPOGRAPHY.fontStyles.light};
  box-sizing: border-box;
  border-width: ${pxToRem(2)}; /* IE11 */
  border-width: var(--input-border-width);
  border-style: solid;
  border-radius: 0;
  width: 100%;
  appearance: none;
  background-color: ${COLORS.background1};
  color: ${COLORS.font1};
  border-color: ${COLORS.line1};

  ::placeholder {
    color: ${COLORS.font2};
  }

  // SIZES

  height: ${pxToRem(50)};

  &.k-Form-TextInput--tiny {
    height: ${pxToRem(40)};
  }

  &.k-Form-TextInput--regular {
    height: ${pxToRem(50)};
  }

  &.k-Form-TextInput--huge {
    height: ${pxToRem(70)};

    @media (min-width: ${ScreenConfig.M.min}px) {
      height: ${pxToRem(80)};
      font-size: ${stepToRem(0)};
    }
  }

  &.k-Form-TextInput--giant {
    height: ${pxToRem(70)};

    @media (min-width: ${ScreenConfig.M.min}px) {
      height: ${pxToRem(90)};
      font-size: ${stepToRem(0)};
    }
  }

  // VARIANTS

  padding: ${pxToRem(10)} ${pxToRem(15)}; /* IE11 */
  padding: ${pxToRem(10)} var(--input-padding-horizontal);

  &.k-Form-TextInput--orion {
    border-radius: ${pxToRem(6)};

    

    &.k-Form-TextInput--regular {
      border-radius: ${pxToRem(4)};
      height: ${pxToRem(50)};
    }

    &.k-Form-TextInput--big {
      height: ${pxToRem(60)};

      @media (min-width: ${ScreenConfig.M.min}px) {
        height: ${pxToRem(70)};
        --input-padding-horizontal: ${pxToRem(30)};
        border-radius: ${pxToRem(8)};
        font-size: ${stepToRem(0)};
  
        /* IE11 */
        @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
          padding: ${pxToRem(10)} ${pxToRem(30)};
        }
      }
    }

  }

  // TEXT

  &.k-Form-TextInput--alignCenter {
    text-align: center;
  }

  // STATES

  :disabled {
    color: ${COLORS.font2};
    border-color: ${COLORS.line1};
    background-color: ${COLORS.line1};
    cursor: not-allowed;
  }

  &.k-Form-TextInput--valid {
    color: ${COLORS.tertiary2};
    border-color: ${COLORS.tertiary2};
  }

  &.k-Form-TextInput--error {
    color: ${COLORS.error3};
    border-color: ${COLORS.error3};
  }

  &:invalid {
    box-shadow: none;
    color: ${COLORS.error3};
    border-color: ${COLORS.error3};
  }

  &:focus {
    color: ${COLORS.font1};
    border-color: ${COLORS.line2};
    outline: ${COLORS.primary4} solid ${pxToRem(2)};
    outline-offset: ${pxToRem(2)};
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

  /* IE11 doesn't support CSS variables */
  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
    &.k-Form-TextInput-hasDigits_2 {
      text-align: center;
      width: calc(2em + ${pxToRem(2 * (10 + 2))});

      &.k-Form-TextInput--orion {
        width: calc(2em + ${pxToRem(2 * (15 + 2))});

        @media (min-width: ${ScreenConfig.M.min}px) {
          width: calc(2em + ${pxToRem(2 * (30 + 2))});
        }
      }
    }

    &.k-Form-TextInput-hasDigits_4 {
      width: calc(4em + ${pxToRem(2 * (10 + 2))});

      &.k-Form-TextInput--orion {
        width: calc(4em + ${pxToRem(2 * (15 + 2))});

        @media (min-width: ${ScreenConfig.M.min}px) {
          width: calc(4em + ${pxToRem(2 * (30 + 2))});
        }
      }
    }

    &.k-Form-TextInput-hasDigits_12 {
      width: calc(12em + ${pxToRem(2 * (10 + 2))});

      &.k-Form-TextInput--orion {
        width: calc(12em + ${pxToRem(2 * (15 + 2))});

        @media (min-width: ${ScreenConfig.M.min}px) {
          width: calc(12em + ${pxToRem(2 * (30 + 2))});
        }
      }
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

    &.k-Form-TextInput--orion {
      padding: ${pxToRem(21)} ${pxToRem(15)} 0;
      min-height: ${pxToRem(60)};

      @media (min-width: ${ScreenConfig.M.min}px) {
        padding: ${pxToRem(25)} ${pxToRem(30)} 0;
        min-height: ${pxToRem(70)};
      }
    }
  }

  .k-Form-TextInput__textareaGradient {
    position: absolute;
    left: ${pxToRem(10)};
    right: ${pxToRem(10)};
    bottom: ${pxToRem(3)};
    height: ${pxToRem(10)};

    background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0),
      ${COLORS.background1}
    );

    pointer-events: none;

    textarea.k-Form-TextInput:disabled + & {
      display: none;
    }
  }
`

export class TextInput extends PureComponent {
  static propTypes = {
    tag: PropTypes.string,
    valid: PropTypes.bool,
    error: PropTypes.bool,
    tiny: PropTypes.bool,
    regular: PropTypes.bool,
    big: PropTypes.bool,
    huge: PropTypes.bool,
    giant: PropTypes.bool,
    center: PropTypes.bool,
    disabled: PropTypes.bool,
    name: PropTypes.string,
    digits: PropTypes.number,
    variant: PropTypes.string,
  }

  static defaultProps = {
    tag: 'input', // or 'textarea'
    valid: false,
    error: false,
    tiny: false,
    regular: true,
    big: true,
    huge: false,
    giant: false,
    center: false,
    disabled: false,
    name: 'text',
    digits: null,
    variant: 'andromeda',
  }

  render() {
    const {
      valid,
      error,
      disabled,
      name,
      digits,
      tiny,
      regular,
      big,
      huge,
      giant,
      center,
      tag,
      variant,
      className,
      style,
      ...others
    } = this.props

    const digitsClass = !!digits
      ? `k-Form-TextInput-hasDigits k-Form-TextInput-hasDigits_${digits}`
      : null

    if (tag === 'textarea') {
      return (
        <StyledTextareaContainer
          className={classNames(
            'k-Form-TextInput__textareaContainer',
            `k-Form-TextInput__textareaContainer--${variant}`,
          )}
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
              `k-Form-TextInput--${variant}`,
              {
                'k-Form-TextInput--valid': valid,
                'k-Form-TextInput--error': error,
                'k-Form-TextInput--disabled': disabled,
                'k-Form-TextInput--tiny': tiny,
                'k-Form-TextInput--regular': regular,
                'k-Form-TextInput--big': big,
                'k-Form-TextInput--huge': huge,
                'k-Form-TextInput--giant': giant,
                'k-Form-TextInput--alignCenter': center,
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
            `k-Form-TextInput--${variant}`,
            {
              'k-Form-TextInput--valid': valid,
              'k-Form-TextInput--error': error,
              'k-Form-TextInput--disabled': disabled,
              'k-Form-TextInput--tiny': tiny,
              'k-Form-TextInput--regular': regular,
              'k-Form-TextInput--big': big,
              'k-Form-TextInput--huge': huge,
              'k-Form-TextInput--giant': giant,
              'k-Form-TextInput--alignCenter': center,
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
