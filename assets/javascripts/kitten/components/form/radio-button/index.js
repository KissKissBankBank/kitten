import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styled from 'styled-components'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import COLORS from '../../../constants/colors-config'
import TYPOGRAPHY from '../../../constants/typography-config'
import { ScreenConfig } from '../../../constants/screen-config'

const StyledRadioButton = styled.div`
  margin: ${pxToRem(10)} 0;

  &, & * {
    transition: all .2s ease;
  }

  /* label */

  .k-Form-RadioButton__label {
    display: flex;
    align-items: center;
    align-self: flex-start;
    flex-wrap: wrap;
    cursor: pointer;

    &::before {
      box-sizing: border-box;
      display: block;
      flex-shrink: 0;
      width: ${pxToRem(16)};
      height: ${pxToRem(16)};
      margin: ${pxToRem(2)} ${pxToRem(10)} 0 0;

      content: '';
      background-position: center;
      background-repeat: no-repeat;
      background-color: ${COLORS.background1};
      border: ${pxToRem(2)} solid ${COLORS.line1};
      border-radius: 50%;

      transition: border .2s, background .2s;
    }
  }

  /* Hide input */

  .k-Form-RadioButton__input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
    overflow: hidden;
  }

  /* Label statuses */

  .k-Form-RadioButton__input:focus + .k-Form-RadioButton__label::before {
    outline: none;
    border-color: ${COLORS.primary1};
  }
  .k-Form-RadioButton__input:checked + .k-Form-RadioButton__label::before {
    border: ${pxToRem(5)} solid ${COLORS.primary1};
  }

  /* Error */

  &.k-Form-RadioButton--error {
    .k-Form-RadioButton__label::before {
      border-color: ${COLORS.error3};
    }
    .k-Form-RadioButton__input:checked:not(:disabled) + .k-Form-RadioButton__label::before {
      border-color: ${COLORS.error};
    }
  }

  /* Disabled */

  .k-Form-RadioButton__input:disabled {
    & + .k-Form-RadioButton__label {
      border-color: ${COLORS.line2};
    }

    & + .k-Form-RadioButton__label::before {
      background-color: ${COLORS.line1};
      border-color: ${COLORS.line2};

    }
    &:checked + .k-Form-RadioButton__label::before {
      background-color: ${COLORS.background1};
      border-color: ${COLORS.line2};
    }
  }


  /* Label text styles */

  .k-Form-RadioButton__labelText {
    ${TYPOGRAPHY.fontStyles.light}
    font-size: ${stepToRem(-1)};
  }

  :active .k-Form-RadioButton__labelText,
  .k-Form-RadioButton__input:active + .k-Form-RadioButton__labelText {
    color: ${COLORS.primary3};
  }

  .k-Form-RadioButton__labelText--large {
    ${TYPOGRAPHY.fontStyles.regular}
    font-size: ${stepToRem(2)};
  }

  .k-Form-RadioButton__labelText--withContents {
    ${TYPOGRAPHY.fontStyles.regular}
  }

  .k-Form-RadioButton__labelContents {
    margin-left: ${pxToRem(16 + 10)};
    flex: 1 0 calc(100% - ${pxToRem(16 + 10 + 10)});
    line-height: 1.5;

    ${TYPOGRAPHY.fontStyles.light}
    font-size: ${stepToRem(-2)};

    &:empty {
      display: none;
    }
  }

  .k-Form-RadioButton__labelContents--large {
    font-size: ${stepToRem(-1)};
  }


  /* VARIANT = "orion" */

  &.k-Form-RadioButton--orion {
    margin: ${pxToRem(20)} 0;

    .k-Form-RadioButton__label {
      box-sizing: border-box;
      padding: ${pxToRem(15)};
      min-height: ${pxToRem(60)};
      border-radius: ${pxToRem(6)};
      border: 2px solid ${COLORS.line1};
    }

    .k-Form-RadioButton__input:checked:not(:disabled),
    .k-Form-RadioButton__input:focus:not(:disabled) {
      & + .k-Form-RadioButton__label {
        border-color: ${COLORS.primary1};
      }
    }

    &.k-Form-RadioButton--error {
      .k-Form-RadioButton__input:not(:disabled) + .k-Form-RadioButton__label {
        border-color: ${COLORS.error3};
      }
    }

    .k-Form-RadioButton__labelText {
      ${TYPOGRAPHY.fontStyles.regular};
    }

    @media (min-width: ${ScreenConfig.S.min}px) {
      .k-Form-RadioButton__label {
        min-height: ${pxToRem(80)};
        border-radius: ${pxToRem(8)};
      }

      .k-Form-RadioButton__label::before {
        width: ${pxToRem(20)};
        height: ${pxToRem(20)};
      }

      .k-Form-RadioButton__labelText {
        font-size: ${stepToRem(0)};
      }

      .k-Form-RadioButton__labelContents {
        margin-left: ${pxToRem(20 + 10)};
        flex: 1 0 calc(100% - ${pxToRem(20 + 10 + 10)});
      }

      .k-Form-RadioButton__input:checked + .k-Form-RadioButton__label::before {
        border-width: ${pxToRem(6)};
      }
    }
  }


  /* DESIGN = "check" */

  &.k-Form-RadioButton--check {
    .k-Form-RadioButton__input:checked + .k-Form-RadioButton__label::before {
      border-width: ${pxToRem(2)};
      background-color: ${COLORS.primary1};
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 11 8' width='11' height='8' fill='%23fff' %3E%3Cpath d='M.904 4.06l1.414-1.414L4.44 4.768 8.682.525l1.414 1.414L4.44 7.596.904 4.061z' /%3E%3C/svg%3E");
    }

    &.k-Form-RadioButton--error .k-Form-RadioButton__input:checked:not(:disabled) + .k-Form-RadioButton__label::before {
      background-color: ${COLORS.error};
    }
    .k-Form-RadioButton__input:disabled + .k-Form-RadioButton__label::before {
      background-color: ${COLORS.line2};
    }
  }

`

export const RadioButton = ({
  className,
  id,
  children,
  inputClassName,
  large,
  largeContent,
  text,
  error,
  disabled,
  variant,
  design,
  ...inputProps
}) => {
  return (
    <StyledRadioButton
      className={classNames(
        'k-Form-RadioButton',
        className,
        `k-Form-RadioButton--${variant}`,
        `k-Form-RadioButton--${design}`,
        {
          'k-Form-RadioButton--error': error,
        },
      )}
    >
      <input
        id={id}
        type="radio"
        className={classNames('k-Form-RadioButton__input', inputClassName)}
        disabled={disabled}
        {...inputProps}
      />
      <label htmlFor={id} className="k-Form-RadioButton__label">
        <span
          className={classNames(
            'k-Form-RadioButton__labelText',
            { 'k-Form-RadioButton__labelText--large': large },
            { 'k-Form-RadioButton__labelText--withContents': !!children },
          )}
        >
          {text}
        </span>

        {children && (
          <div
            className={classNames('k-Form-RadioButton__labelContents', {
              'k-Form-RadioButton__labelContents--large': largeContent,
            })}
          >
            {children}
          </div>
        )}
      </label>
    </StyledRadioButton>
  )
}

RadioButton.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  large: PropTypes.bool,
  largeContent: PropTypes.bool,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(['andromeda', 'orion']),
  design: PropTypes.oneOf(['disc', 'check']),
}

RadioButton.defaultProps = {
  large: false,
  largeContent: false,
  error: false,
  disabled: false,
  variant: 'andromeda',
  design: 'disc',
}
