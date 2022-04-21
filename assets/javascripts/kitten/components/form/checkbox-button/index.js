import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styled from 'styled-components'
import { Text } from '../../typography/text'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import COLORS from '../../../constants/colors-config'
import TYPOGRAPHY from '../../../constants/typography-config'
import { mq } from '../../../constants/screen-config'

const StyledCheckboxButton = styled.div`
  ${TYPOGRAPHY.fontStyles.light}
  font-size: ${stepToRem(-1)};
  line-height: 1.5;
  margin: ${pxToRem(10)} 0;

  &.k-Form-CheckboxButton--disabled input,
  &.k-Form-CheckboxButton--disabled label {
    cursor: not-allowed;
  }

  .k-Form-CheckboxButton__label {
    display: flex;
    align-items: flex-start;
    align-self: flex-start;
    flex-wrap: wrap;
    cursor: pointer;

    flex-basis: calc(100% - ${pxToRem(20 + 10)});
    cursor: pointer;
    transition: color var(--transition);
    ${TYPOGRAPHY.fontStyles.light}

    &:active {
      color: ${COLORS.primary3};
    }
  }

  .k-Form-CheckboxButton__label::before {
    display: block;

    content: '';
    box-sizing: border-box;
    display: inline-block;
    flex-shrink: 0;
    width: ${pxToRem(20)};
    height: ${pxToRem(20)};
    margin: 0 ${pxToRem(10)} 0 0;
    border-radius: var(--border-radius-s);

    background-color: ${COLORS.background1};
    border: var(--border);
    cursor: pointer;
    transition: border-color var(--transition), background-color var(--transition);
  }

  .k-Form-CheckboxButton__input:focus + .k-Form-CheckboxButton__label::before {
    border: var(--border-active-primary);
  }

  .k-Form-CheckboxButton__input:checked + .k-Form-CheckboxButton__label::before,
  .k-Form-CheckboxButton__input:indeterminate + .k-Form-CheckboxButton__label::before {
    background-color: ${COLORS.primary1};
    background-repeat: no-repeat;
    background-position: center;
    border: var(--border-active-primary);
  }

  .k-Form-CheckboxButton__input:checked + .k-Form-CheckboxButton__label::before {
    background-image: url("data:image/svg+xml,%3Csvg width='11' height='8' viewBox='0 0 11 8' xmlns='http://www.w3.org/2000/svg' fill='%23fff'%0A%3E%3Cpath d='M4.44 7.596L3.024 6.182 8.682.525l1.414 1.414z' /%3E%3Cpath d='M4.44 7.596L.903 4.06l1.414-1.414 3.536 3.536z' /%3E%3C/svg%3E%0A");
  }

  .k-Form-CheckboxButton__input:indeterminate + .k-Form-CheckboxButton__label::before {
    background-image: url("data:image/svg+xml,%3Csvg width='6' height='2' viewBox='0 0 6 2' xmlns='http://www.w3.org/2000/svg' fill='%23fff'%0A%3E%3Crect width='6' height='2' /%3E%3C/svg%3E%0A");
  }

  .k-Form-CheckboxButton__input:disabled + .k-Form-CheckboxButton__label::before {
    background-color: ${COLORS.line1};
    border: var(--border-disabled);
  }

  .k-Form-CheckboxButton__input:disabled + .k-Form-CheckboxButton__label::before:checked {
    border: var(--border-disabled-active);
    background-color: ${COLORS.line2};
    background-image: url("data:image/svg+xml,%3Csvg width='11' height='8' viewBox='0 0 11 8' xmlns='http://www.w3.org/2000/svg' fill='%23b8b8b8'%0A%3E%3Cpath d='M4.44 7.596L3.024 6.182 8.682.525l1.414 1.414z' /%3E%3Cpath d='M4.44 7.596L.903 4.06l1.414-1.414 3.536 3.536z' /%3E%3C/svg%3E%0A");
  }

  .k-Form-CheckboxButton__input {
    appearance: none;
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  &.k-Form-CheckboxButton--error .k-Form-CheckboxButton__label::before {
    border: var(--border-danger);

    &:checked {
      background-color: ${COLORS.error};

      &:focus {
        box-shadow: 0 0 ${pxToRem(3)} ${COLORS.error};
      }
    }
  }

    .k-Form-CheckboxButton__label {
      box-sizing: border-box;
      min-height: ${pxToRem(70)};
      border-radius: var(--border-radius-s);
      border: var(--border);
      padding: ${pxToRem(26 - 2)} ${pxToRem(15)};
      transition: border var(--transition), background var(--transition);
    }

    .k-Form-CheckboxButton__label::before {
      margin-top: ${pxToRem(3)};
    }

    .k-Form-CheckboxButton__input:hover:not(:disabled) {
      & + .k-Form-CheckboxButton__label {
        border-color: ${COLORS.primary4};
      }
    }

    .k-Form-CheckboxButton__input:focus:not(:disabled) {
      & + .k-Form-CheckboxButton__label {
        border-color: ${COLORS.primary1};
      }
    }

    .k-Form-CheckboxButton__input:active:not(:disabled) {
      & + .k-Form-CheckboxButton__label {
        border-color: ${COLORS.primary1};
      }
    }

    .k-Form-CheckboxButton__input:checked:not(:disabled) {
      & + .k-Form-CheckboxButton__label {
        border-color: ${COLORS.primary1};
        background-color: ${COLORS.primary5};
      }
    }

    /* Disabled */

    .k-Form-CheckboxButton__input:disabled {
      & + .k-Form-CheckboxButton__label {
        border-color: ${COLORS.line1};
        color: ${COLORS.font2};
      }
    }

    .k-Form-CheckboxButton__input:checked:disabled {
      & + .k-Form-CheckboxButton__label {
        border-color: ${COLORS.font2};
        color: ${COLORS.grey1};

        ::before {
          border-color: ${COLORS.font2};
        }
      }
    }

    &.k-Form-CheckboxButton--error {
      .k-Form-CheckboxButton__input:not(:disabled) + .k-Form-CheckboxButton__label {
        border-color: ${COLORS.error3};
      }
    }

    &.k-Form-CheckboxButton--small {

      .k-Form-CheckboxButton__label {
        padding: ${pxToRem(12 - 2)} ${pxToRem(15)};
        min-height: 0;
      }
    }

    &.k-Form-CheckboxButton--large {
      .k-Form-CheckboxButton__label {
        min-height: ${pxToRem(60)};
        padding: ${pxToRem(20 - 2)} ${pxToRem(15)};
      }
    }

    @media ${mq.tabletAndDesktop} {

      &.k-Form-CheckboxButton--large {
        .k-Form-CheckboxButton__label {
          min-height: ${pxToRem(80)};
          padding: ${pxToRem(30 - 2)} ${pxToRem(15)};
        }

        .k-Form-CheckboxButton__label::before {
          margin: ${pxToRem(2)} ${pxToRem(20)} 0 0;
          width: ${pxToRem(20)};
          height: ${pxToRem(20)};
        }


      }
}

  .k-Form-CheckboxButton__content {
    flex: 1 0 calc(100% - ${pxToRem(20 + 10)});
    margin: ${pxToRem(5)} 0 0 ${pxToRem(20 + 10)};
  }
`

export const CheckboxButton = ({
  className,
  id,
  children,
  inputClassName,
  error,
  disabled,
  textProps,
  labelProps,
  onLabelClick,
  indeterminate,
  label,
  size,
  ...inputProps
}) => {
  const inputElement = useRef(null)

  useEffect(() => {
    if (inputElement.current != null) {
      inputElement.current.indeterminate = indeterminate
    }
  }, [indeterminate])

  return (
    <StyledCheckboxButton
      className={classNames(
        'k-Form-CheckboxButton',
        `k-Form-CheckboxButton--${size}`,
        {
          'k-Form-CheckboxButton--error': error,
          'k-Form-CheckboxButton--disabled': disabled,
        },
        className,
      )}
    >
      <input
        ref={inputElement}
        id={id}
        type="checkbox"
        className={classNames('k-Form-CheckboxButton__input', inputClassName)}
        disabled={disabled}
        {...inputProps}
      />

      {!label && children && (
        <Text
          tag="label"
          htmlFor={id}
          onClick={onLabelClick}
          {...labelProps}
          {...textProps}
          className={classNames(
            'k-Form-CheckboxButton__label',
            textProps?.className,
            labelProps?.className,
          )}
        >
          {children}
        </Text>
      )}

      {label && !children && (
        <Text
          tag="label"
          htmlFor={id}
          onClick={onLabelClick}
          {...labelProps}
          {...textProps}
          className={classNames(
            'k-Form-CheckboxButton__label',
            textProps?.className,
            labelProps?.className,
          )}
        >
          {label}
        </Text>
      )}

      {label && children && (
        <label className={classNames(
              'k-Form-CheckboxButton__label'
          )}>
          <Text
            htmlFor={id}
            onClick={onLabelClick}
            weight="regular"
            {...labelProps}
            className={classNames(
              'k-Form-CheckboxButton__labelText',
              labelProps?.className,
            )}
          >
            {label}
          </Text>
          <Text
            onClick={onLabelClick}
            {...textProps}
            className={classNames(
              'k-Form-CheckboxButton__content',
              textProps?.className,
            )}
          >
            {children}
          </Text>
        </label>
      )}
    </StyledCheckboxButton>
  )
}

CheckboxButton.defaultProps = {
  id: 'checkbox',
  textProps: {},
  labelProps: {},
  indeterminate: false,
  error: false,
  disabled: false,
  onLabelClick: () => {},
  size: 'medium',
}


CheckboxButton.propTypes = {
  textProps: PropTypes.object,
  labelProps: PropTypes.object,
  indeterminate: PropTypes.bool,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  children: PropTypes.node,
  label: PropTypes.string,
  onLabelClick: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
}
