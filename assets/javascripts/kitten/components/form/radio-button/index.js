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

  /* label block */

  .k-Form-RadioButton__label {
    display: flex;
    align-items: flex-start;
    align-self: flex-start;
    flex-wrap: wrap;
    cursor: pointer;
  }

  /* radio box */

  .k-Form-RadioButton__label::before {
    box-sizing: border-box;
    display: block;
    flex-shrink: 0;
    width: ${pxToRem(16)};
    height: ${pxToRem(16)};
    margin: ${pxToRem(4)} ${pxToRem(10)} 0 0;

    content: '';
    background-position: center;
    background-repeat: no-repeat;
    background-color: ${COLORS.background1};
    border: ${pxToRem(2)} solid ${COLORS.line1};
    border-radius: 50%;

    transition: border .2s, background .2s;
  }

  /* Hide input */

  .k-Form-RadioButton__input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  /* Label statuses */

  .k-Form-RadioButton__input:focus + .k-Form-RadioButton__label::before {
    border-color: ${COLORS.primary1};
    outline: ${COLORS.primary4} solid ${pxToRem(2)};
    outline-offset: ${pxToRem(2)};
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
    flex: 1 0 calc(100% - ${pxToRem(16 + 10)});
    ${TYPOGRAPHY.fontStyles.light}
    font-size: ${stepToRem(-1)};
    line-height: 1.5;
  }

  :active .k-Form-RadioButton__labelText,
  .k-Form-RadioButton__input:active + .k-Form-RadioButton__labelText {
    color: ${COLORS.primary3};
  }

  &.k-Form-RadioButton--largeLabel {
    .k-Form-RadioButton__label::before {
      margin-top: ${pxToRem(8)};
    }

    .k-Form-RadioButton__labelText {
      ${TYPOGRAPHY.fontStyles.regular}
      font-size: ${stepToRem(2)};
    }
  }

  .k-Form-RadioButton__labelText--withContents {
    ${TYPOGRAPHY.fontStyles.regular}
  }

  .k-Form-RadioButton__labelContents {
    margin-top: ${pxToRem(4)};
    margin-left: ${pxToRem(16 + 10)};
    flex: 1 0 calc(100% - ${pxToRem(16 + 10 + 10)});

    ${TYPOGRAPHY.fontStyles.light}
    font-size: ${stepToRem(-2)};
    line-height: ${pxToRem(19)};

    &:empty {
      display: none;
    }
  }

  &.k-Form-RadioButton--largeContent .k-Form-RadioButton__labelContents {
    font-size: ${stepToRem(-1)};
  }

  @media (min-width: ${ScreenConfig.S.min}px) {
    .k-Form-RadioButton__labelContents {
      margin-top: ${pxToRem(8)};
      font-size: ${stepToRem(-1)};
      line-height: ${pxToRem(22)};
    }
  }

  /* VARIANT = "orion" */

  &.k-Form-RadioButton--orion {
    margin: ${pxToRem(15)} 0;

    .k-Form-RadioButton__label::before {
      width: ${pxToRem(16)};
      height: ${pxToRem(16)};
    }

    .k-Form-RadioButton__label {
      box-sizing: border-box;
      min-height: ${pxToRem(70)};
      border-radius: ${pxToRem(6)};
      border: 2px solid ${COLORS.line1};
      padding: ${pxToRem(26 - 4)} ${pxToRem(15)};
    }

    .k-Form-RadioButton__label::before {
      margin-top: ${pxToRem(3)};
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
      line-height: ${pxToRem(20)};
      font-size: ${stepToRem(-1)};
    }

    &.k-Form-RadioButton--big {
      .k-Form-RadioButton__label {
        min-height: ${pxToRem(60)};
        padding: ${pxToRem(20 - 4)} ${pxToRem(15)};
      }
    }

    @media (min-width: ${ScreenConfig.S.min}px) {
      margin: ${pxToRem(20)} 0;

      .k-Form-RadioButton__label::before {
        margin-top: ${pxToRem(4)};
      }

      .k-Form-RadioButton__labelText {
        flex: 1 0 calc(100% - ${pxToRem(20 + 10)});
        line-height: ${pxToRem(22)};
      }

      .k-Form-RadioButton__labelContents {
        margin-left: ${pxToRem(20 + 10)};
        flex: 1 0 calc(100% - ${pxToRem(20 + 10 + 10)});
      }

      .k-Form-RadioButton__input:checked + .k-Form-RadioButton__label::before {
        border-width: ${pxToRem(6)};
      }

      &.k-Form-RadioButton--big {
        .k-Form-RadioButton__label {
          min-height: ${pxToRem(80)};
          padding: ${pxToRem(30 - 4)} ${pxToRem(15)};
        }

        .k-Form-RadioButton__label::before {
          margin: ${pxToRem(2)} ${pxToRem(20)} 0 0;
          width: ${pxToRem(20)};
          height: ${pxToRem(20)};
        }

        .k-Form-RadioButton__labelText {
          flex: 1 0 calc(100% - ${pxToRem(20 + 20)});
          font-size: ${stepToRem(0)};
        }
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
  size,
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
        `k-Form-RadioButton--${size}`,
        {
          'k-Form-RadioButton--error': error,
          'k-Form-RadioButton--largeLabel': large,
          'k-Form-RadioButton--largeContent': largeContent,
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
          className={classNames('k-Form-RadioButton__labelText', {
            'k-Form-RadioButton__labelText--withContents': !!children,
          })}
        >
          {text}
        </span>

        {children && (
          <div className="k-Form-RadioButton__labelContents">{children}</div>
        )}
      </label>
    </StyledRadioButton>
  )
}

RadioButton.propTypes = {
  text: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  large: PropTypes.bool,
  largeContent: PropTypes.bool,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(['andromeda', 'orion']),
  design: PropTypes.oneOf(['disc', 'check']),
  size: PropTypes.oneOf(['regular', 'big']),
}

RadioButton.defaultProps = {
  large: false,
  largeContent: false,
  error: false,
  disabled: false,
  variant: 'andromeda',
  design: 'disc',
  size: 'regular',
}
