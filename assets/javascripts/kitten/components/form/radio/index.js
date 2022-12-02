import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styled from 'styled-components'
import { pxToRem } from '../../../helpers/utils/typography'
import TYPOGRAPHY from '../../../constants/typography-config'
import { mq } from '../../../constants/screen-config'
import { checkDeprecatedWeights } from '../../../helpers/utils/deprecated'
import deprecated from 'prop-types-extra/lib/deprecated'

const StyledRadio = styled.div`
  /* label block */

  .k-Form-Radio__label {
    display: flex;
    align-items: flex-start;
    align-self: flex-start;
    flex-wrap: wrap;
    cursor: pointer;
    transition: color var(--transition);
  }

  /* radio box */

  .k-Form-Radio__label::before {
    box-sizing: border-box;
    display: block;
    flex-shrink: 0;
    width: ${pxToRem(16)};
    height: ${pxToRem(16)};
    margin: ${pxToRem(4)} ${pxToRem(10)} 0 0;

    content: '';
    background-position: center;
    background-repeat: no-repeat;
    background-color: var(--color-grey-000);
    border: var(--border);
    border-radius: var(--border-radius-rounded);

    transition: border var(--transition), background var(--transition);
  }

  /* Hide input */

  .k-Form-Radio__input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  /* Label statuses */

  .k-Form-Radio__input:focus + .k-Form-Radio__label::before {
    border-color: var(--color-primary-500);
    outline-style: auto;
  }
  .k-Form-Radio__input:focus:not(:focus-visible)
    + .k-Form-Radio__label::before {
    outline-color: transparent;
  }
  .k-Form-Radio__input:focus-visible + .k-Form-Radio__label::before {
    outline-style: auto;
  }

  .k-Form-Radio__input:checked + .k-Form-Radio__label::before {
    border: ${pxToRem(5)} solid var(--color-primary-500);
  }

  /* Label text styles */

  .k-Form-Radio__labelText {
    flex: 1 0 calc(100% - ${pxToRem(16 + 10)});
    ${TYPOGRAPHY.fontStyles['400']}
    font-size: ${pxToRem(14)};
    line-height: 1.5;

    &.k-Form-Radio__labelText--normal,
    &.k-Form-Radio__labelText--500 {
      ${TYPOGRAPHY.fontStyles['500']};
    }
    &.k-Form-Radio__labelText--light &.k-Form-Radio__labelText--400 {
      ${TYPOGRAPHY.fontStyles['400']};
    }
    &.k-Form-Radio__labelText--bold,
    &.k-Form-Radio__labelText--700 {
      ${TYPOGRAPHY.fontStyles['700']};
    }
  }

  .k-Form-Radio__input:active + .k-Form-Radio__labelText {
    color: var(--color-primary-500);
  }

  .k-Form-Radio__labelText--withContents {
    ${TYPOGRAPHY.fontStyles['500']}
  }

  .k-Form-Radio__labelContents {
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

  @media ${mq.tabletAndDesktop} {
    .k-Form-Radio__labelContents {
      margin-top: ${pxToRem(8)};
      font-size: ${pxToRem(14)};
      line-height: ${pxToRem(22)};
    }
  }

  /* DESIGN = "check" */

  &.k-Form-Radio--check {
    .k-Form-Radio__input:checked + .k-Form-Radio__label::before {
      border-width: ${pxToRem(2)};
      background-color: var(--color-primary-500);
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 11 8' width='11' height='8' fill='%23fff' %3E%3Cpath d='M.904 4.06l1.414-1.414L4.44 4.768 8.682.525l1.414 1.414L4.44 7.596.904 4.061z' /%3E%3C/svg%3E");
    }

    &.k-Form-Radio--error
      .k-Form-Radio__input:checked:not(:disabled)
      + .k-Form-Radio__label::before {
      background-color: var(--color-danger-500);
    }

    .k-Form-Radio__input:disabled + .k-Form-Radio__label::before {
      background-color: var(--color-grey-500);
    }
  }

  /* Hover */

  &:hover {
    .k-Form-Radio__label::before {
      border-color: var(--color-primary-300);
    }
    .k-Form-Radio__input:checked:not(:disabled) + .k-Form-Radio__label::before {
      border-color: var(--color-primary-500);
    }
  }

  /* Active, Focus */

  &:active,
  &:focus {
    .k-Form-Radio__label::before {
      border-color: var(--color-primary-500);
    }
    .k-Form-Radio__input:checked:not(:disabled) + .k-Form-Radio__label::before {
      border-color: var(--color-primary-500);
    }
  }

  /* Error */

  &.k-Form-Radio--error {
    .k-Form-Radio__label::before {
      border-color: var(--color-danger-300);
    }
    .k-Form-Radio__input:checked:not(:disabled) + .k-Form-Radio__label::before {
      border-color: var(--color-danger-500);
    }
  }

  /* Disabled */

  .k-Form-Radio__input:disabled {
    cursor: not-allowed;

    & + .k-Form-Radio__label {
      color: var(--color-grey-600);
      cursor: not-allowed;
    }

    & + .k-Form-Radio__label::before {
      background-color: var(--color-grey-000);
      border-color: var(--color-grey-400);
    }

    &:checked + .k-Form-Radio__label::before {
      background-color: var(--color-grey-000);
      border-color: var(--color-grey-500);
    }
  }
`

export const Radio = ({
  className,
  id,
  children,
  inputClassName,
  text,
  error,
  disabled,
  design,
  fontWeight, // Deprecated
  weight,
  ...inputProps
}) => {
  checkDeprecatedWeights(weight)

  return (
    <StyledRadio
      className={classNames(
        'k-Form-Radio',
        className,
        `k-Form-Radio--${design}`,
        {
          'k-Form-Radio--error': error,
        },
      )}
    >
      <input
        id={id}
        type="radio"
        className={classNames('k-Form-Radio__input', inputClassName)}
        disabled={disabled}
        {...inputProps}
      />
      <label htmlFor={id} className="k-Form-Radio__label">
        <span
          className={classNames(
            'k-Form-Radio__labelText',
            `k-Form-Radio__labelText--${fontWeight || weight}`,
            {
              'k-Form-Radio__labelText--withContents': !!children,
            },
          )}
        >
          {text}
        </span>

        {children && (
          <div className="k-Form-Radio__labelContents">{children}</div>
        )}
      </label>
    </StyledRadio>
  )
}

Radio.propTypes = {
  text: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  design: PropTypes.oneOf(['disc', 'check']),
  fontWeight: deprecated(PropTypes.string, 'Prefere use `weight` prop instead'),
  weight: PropTypes.oneOf(['400', '500', '600', '700']),
}

Radio.defaultProps = {
  error: false,
  disabled: false,
  design: 'disc',
  weight: '500',
}
