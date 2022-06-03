import React from 'react'
import PropTypes from 'prop-types'
import deprecated from 'prop-types-extra/lib/deprecated'
import classNames from 'classnames'
import styled from 'styled-components'
import { pxToRem } from '../../../helpers/utils/typography'
import TYPOGRAPHY from '../../../constants/typography-config'
import { ScreenConfig } from '../../../constants/screen-config'
import {
  checkDeprecatedSizes,
  checkDeprecatedWeights,
} from '../../../helpers/utils/deprecated'

const StyledRadioButton = styled.div`
  margin: ${pxToRem(10)} 0;
  &,
  & * {
    transition: all 0.2s ease;
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
    margin-right: ${pxToRem(10)};
    content: '';
    background-position: center;
    background-repeat: no-repeat;
    background-color: var(--color-grey-000);
    border: var(--border);
    border-radius: var(--border-radius-rounded);
    transition: border 0.2s, background 0.2s;
  }
  /* Hide input */
  .k-Form-RadioButton__input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
  /* Label statuses */
  .k-Form-RadioButton__input:focus + .k-Form-RadioButton__label::before {
    border-color: var(--color-primary-500);
    outline-style: auto;
  }
  .k-Form-RadioButton__input:focus:not(:focus-visible)
    + .k-Form-RadioButton__label::before {
    outline-color: transparent;
  }
  .k-Form-RadioButton__input:focus-visible
    + .k-Form-RadioButton__label::before {
    outline-style: auto;
  }
  .k-Form-RadioButton__input:checked + .k-Form-RadioButton__label::before {
    border: ${pxToRem(5)} solid var(--color-primary-500);
  }
  /* Error */
  &.k-Form-RadioButton--error {
    .k-Form-RadioButton__label::before {
      border-color: var(--color-danger-300);
    }
    .k-Form-RadioButton__input:checked:not(:disabled)
      + .k-Form-RadioButton__label::before {
      border-color: var(--color-danger-500);
    }
  }
  /* Disabled */
  .k-Form-RadioButton__input:disabled {
    & + .k-Form-RadioButton__label {
      border-color: var(--color-grey-400);
    }
    & + .k-Form-RadioButton__label::before {
      background-color: var(--color-grey-300);
      border-color: var(--color-grey-400);
    }
    &:checked + .k-Form-RadioButton__label::before {
      background-color: var(--color-grey-000);
      border-color: var(--color-grey-400);
    }
  }

  /* Label text styles */
  .k-Form-RadioButton__labelText {
    flex: 1 0 calc(100% - ${pxToRem(16 + 10)});
    ${TYPOGRAPHY.fontStyles['400']}
    font-size: ${pxToRem(14)};
    line-height: 1.5;
  }
  :active .k-Form-RadioButton__labelText,
  .k-Form-RadioButton__input:active + .k-Form-RadioButton__labelText {
    color: var(--color-primary-900);
  }

  :disabled .k-Form-RadioButton__labelText,
  .k-Form-RadioButton__input:disabled + .k-Form-RadioButton__labelText {
    color: var(--color-grey-600);
  }
  &.k-Form-RadioButton--largeLabel {
    .k-Form-RadioButton__label::before {
      margin-top: ${pxToRem(8)};
    }
    .k-Form-RadioButton__labelText {
      ${TYPOGRAPHY.fontStyles['500']}
      font-size: ${pxToRem(20)};
    }
  }
  .k-Form-RadioButton__labelText--withContents {
    ${TYPOGRAPHY.fontStyles['500']}
  }
  .k-Form-RadioButton__labelContents {
    margin-top: ${pxToRem(4)};
    margin-left: ${pxToRem(16 + 10)};
    flex: 1 0 calc(100% - ${pxToRem(16 + 10 + 10)});

    ${TYPOGRAPHY.fontStyles['400']}
    font-size: ${pxToRem(12)};
    line-height: ${pxToRem(19)};
    &:empty {
      display: none;
    }
  }
  &.k-Form-RadioButton--largeContent .k-Form-RadioButton__labelContents {
    font-size: ${pxToRem(14)};
  }
  @media (min-width: ${ScreenConfig.S.min}px) {
    .k-Form-RadioButton__labelContents {
      margin-top: ${pxToRem(8)};
      font-size: ${pxToRem(14)};
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
      min-height: ${pxToRem(60)};
      border-radius: var(--border-radius-s);
      border: var(--border);
      padding: ${pxToRem(20 - 2)} ${pxToRem(15)};
      align-items: center;
    }
    .k-Form-RadioButton__input:hover:not(:disabled) {
      & + .k-Form-RadioButton__label {
        border-color: var(--color-primary-300);
      }
    }
    .k-Form-RadioButton__input:focus:not(:disabled) {
      & + .k-Form-RadioButton__label {
        border-color: var(--color-primary-500);
      }
    }
    .k-Form-RadioButton__input:active:not(:disabled) {
      & + .k-Form-RadioButton__label {
        border-color: var(--color-primary-500);
      }
    }
    .k-Form-RadioButton__input:checked:not(:disabled) {
      & + .k-Form-RadioButton__label {
        border-color: var(--color-primary-500);
        background-color: var(--color-primary-100);
      }
    }
    /* Disabled */
    .k-Form-RadioButton__input:disabled {
      & + .k-Form-RadioButton__label {
        border-color: var(--color-grey-300);
        color: var(--color-grey-500);
        cursor: not-allowed;
        &::before {
          background-color: var(--color-grey-000);
        }
      }
      & + .k-Form-RadioButton__labelText {
        color: var(--color-grey-500);
      }
    }
    .k-Form-RadioButton__input:checked:disabled {
      & + .k-Form-RadioButton__label {
        border-color: var(--color-grey-500);
        color: var(--color-grey-600);
        background-color: var(--color-grey-200);
      }
    }
    &.k-Form-RadioButton--error {
      .k-Form-RadioButton__input:not(:disabled) + .k-Form-RadioButton__label {
        border-color: var(--color-danger-300);
        background-color: var(--color-grey-000);
      }
    }
    /* PARAGRAPH STYLE */
    &.k-Form-RadioButton--paragraphStyle {
      .k-Form-RadioButton__label {
        align-items: center;
      }
      .k-Form-RadioButton__label::before {
        margin-right: ${pxToRem(15)};
      }
      .k-Form-RadioButton__labelText {
        flex: 1 0 calc(100% - ${pxToRem(20 + 15)});
      }
    }
    /* FONT STYLES */

    &.k-Form-RadioButton__labelText--regular,
    &.k-Form-RadioButton__labelText--500 {
      .k-Form-RadioButton__labelText {
        ${TYPOGRAPHY.fontStyles['500']};
        line-height: ${pxToRem(20)};
        font-size: ${pxToRem(14)};
      }
    }

    &.k-Form-RadioButton__labelText--light,
    &.k-Form-RadioButton__labelText--400 {
      .k-Form-RadioButton__labelText {
        ${TYPOGRAPHY.fontStyles['400']};
      }
    }

    &.k-Form-RadioButton__labelText--bold,
    &.k-Form-RadioButton__labelText--700 {
      .k-Form-RadioButton__labelText {
        ${TYPOGRAPHY.fontStyles['700']};
      }
    }
    &.k-Form-RadioButton--small {
      width: 100%;
      display: flex;
      .k-Form-RadioButton__label {
        padding: ${pxToRem(11 - 2)} ${pxToRem(15)};
        min-height: ${pxToRem(40)};
      }
    }
    &.k-Form-RadioButton--large {
      .k-Form-RadioButton__label {
        min-height: ${pxToRem(60)};
        padding: ${pxToRem(20 - 2)} ${pxToRem(15)};
      }
    }
    @media (min-width: ${ScreenConfig.S.min}px) {
      margin: ${pxToRem(20)} 0;
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
      &.k-Form-RadioButton--large {
        .k-Form-RadioButton__label {
          min-height: ${pxToRem(80)};
          padding: ${pxToRem(26 - 2)} ${pxToRem(15)};
        }
        .k-Form-RadioButton__label::before {
          margin-right: ${pxToRem(20)};
          width: ${pxToRem(20)};
          height: ${pxToRem(20)};
        }
        .k-Form-RadioButton__labelText {
          flex: 1 0 calc(100% - ${pxToRem(20 + 20)});
          font-size: ${pxToRem(16)};
        }
      }
    }
  }
  /* DESIGN = "check" */
  &.k-Form-RadioButton--check {
    .k-Form-RadioButton__input:checked + .k-Form-RadioButton__label::before {
      border-width: ${pxToRem(2)};
      background-color: var(--color-primary-500);
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 11 8' width='11' height='8' fill='%23fff' %3E%3Cpath d='M.904 4.06l1.414-1.414L4.44 4.768 8.682.525l1.414 1.414L4.44 7.596.904 4.061z' /%3E%3C/svg%3E");
    }
    &.k-Form-RadioButton--error
      .k-Form-RadioButton__input:checked:not(:disabled)
      + .k-Form-RadioButton__label::before {
      background-color: var(--color-danger-500);
    }
    .k-Form-RadioButton__input:disabled + .k-Form-RadioButton__label::before {
      background-color: var(--color-grey-400);
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
  fontWeight, // Deprecated
  weight,
  paragraphStyle,
  ...inputProps
}) => {
  checkDeprecatedSizes(size)
  checkDeprecatedWeights(weight)

  return (
    <StyledRadioButton
      className={classNames(
        'k-Form-RadioButton',
        className,
        `k-Form-RadioButton--${variant || 'orion'}`,
        `k-Form-RadioButton--${design}`,
        `k-Form-RadioButton--${size}`,
        `k-Form-RadioButton__labelText--${fontWeight || weight}`,
        {
          'k-Form-RadioButton--error': error,
          'k-Form-RadioButton--largeLabel': large,
          'k-Form-RadioButton--largeContent': largeContent,
          'k-Form-RadioButton--paragraphStyle': paragraphStyle,
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
  variant: deprecated(
    PropTypes.oneOf(['andromeda', 'orion']),
    'Please use the Radio component instead',
  ),
  design: PropTypes.oneOf(['disc', 'check']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  fontWeight: deprecated(PropTypes.string, 'Prefere use `weight` prop instead'),
  weight: PropTypes.oneOf(['400', '500', '700']),
  paragraphStyle: PropTypes.bool,
}

RadioButton.defaultProps = {
  large: false,
  largeContent: false,
  error: false,
  disabled: false,
  design: 'disc',
  size: 'medium',
  weight: '500',
  paragraphStyle: false,
}
