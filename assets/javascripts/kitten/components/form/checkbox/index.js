import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styled from 'styled-components'
import { Text } from '../../../components/typography/text'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import COLORS from '../../../constants/colors-config'
import TYPOGRAPHY from '../../../constants/typography-config'

const StyledCheckbox = styled.div`
  ${TYPOGRAPHY.fontStyles.light}
  font-size: ${stepToRem(-1)};
  line-height: 1.5;

  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;

  margin: ${pxToRem(10)} 0;

  &.k-Form-Checkbox--disabled input,
  &.k-Form-Checkbox--disabled label {
    cursor: not-allowed;
  }

  .k-Form-Checkbox__label {
    flex-basis: calc(100% - ${pxToRem(20 + 10)});
    cursor: pointer;
    transition: color .2s;
    ${TYPOGRAPHY.fontStyles.light}

    &:active {
      color: ${COLORS.primary3};
    }
  }

  .k-Form-Checkbox__input {
    appearance: none;

    box-sizing: border-box;
    display: inline-block;
    flex-shrink: 0;
    width: ${pxToRem(20)};
    height: ${pxToRem(20)};
    margin: 0 ${pxToRem(10)} 0 0;

    background-color: ${COLORS.background1};
    border: ${pxToRem(2)} solid ${COLORS.line1};
    cursor: pointer;
    transition: border-color .2s, background-color .2s;

    &:focus {
      border-color: ${COLORS.primary1};
      outline: ${COLORS.primary4} solid ${pxToRem(2)};
      outline-offset: ${pxToRem(2)};
    }

    &:checked,
    &:indeterminate {
      background-color: ${COLORS.primary1};
      background-repeat: no-repeat;
      background-position: center;
      border-color: ${COLORS.primary1};
    }

    &:checked {
      background-image: url("data:image/svg+xml,%3Csvg width='11' height='8' viewBox='0 0 11 8' xmlns='http://www.w3.org/2000/svg' fill='%23fff'%0A%3E%3Cpath d='M4.44 7.596L3.024 6.182 8.682.525l1.414 1.414z' /%3E%3Cpath d='M4.44 7.596L.903 4.06l1.414-1.414 3.536 3.536z' /%3E%3C/svg%3E%0A");
    }

    &:indeterminate {
      background-image: url("data:image/svg+xml,%3Csvg width='6' height='2' viewBox='0 0 6 2' xmlns='http://www.w3.org/2000/svg' fill='%23fff'%0A%3E%3Crect width='6' height='2' /%3E%3C/svg%3E%0A");
    }

    &:disabled {
      background-color: ${COLORS.line1};
      border-color: ${COLORS.line2};
    }

    &:disabled:checked {
      background-color: ${COLORS.line2};
      background-image: url("data:image/svg+xml,%3Csvg width='11' height='8' viewBox='0 0 11 8' xmlns='http://www.w3.org/2000/svg' fill='%23b8b8b8'%0A%3E%3Cpath d='M4.44 7.596L3.024 6.182 8.682.525l1.414 1.414z' /%3E%3Cpath d='M4.44 7.596L.903 4.06l1.414-1.414 3.536 3.536z' /%3E%3C/svg%3E%0A");
    }
  }

  &.k-Form-Checkbox--error .k-Form-Checkbox__input {
    border-color: ${COLORS.error3};

    &:checked {
      background-color: ${COLORS.error};
      border-color: ${COLORS.error};

      &:focus {
        box-shadow: 0 0 ${pxToRem(3)} ${COLORS.error};
      }
    }
  }

  &.k-Form-Checkbox--orion .k-Form-Checkbox__input {
    border-radius: ${pxToRem(4)};
  }

  .k-Form-Checkbox__link,
  label a {
    ${TYPOGRAPHY.fontStyles.regular}
    color: ${COLORS.primary1};
    text-decoration: none;
    transition: color .2s;

    &:hover {
      color: ${COLORS.primary3};
      text-decoration: none;
    }

    &:active {
      color: ${COLORS.primary3};
      text-decoration: none;
    }
  }

  .k-Form-Checkbox__content {
    flex: 1 1 100%;
    margin: ${pxToRem(5)} 0 0 ${pxToRem(20 + 10)};
  }
`

export const Checkbox = ({
  className,
  id,
  children,
  inputClassName,
  error,
  disabled,
  textProps,
  onLabelClick,
  indeterminate,
  label,
  variant,
  ...inputProps
}) => {
  const inputElement = useRef(null)

  useEffect(() => {
    if (inputElement.current != null) {
      inputElement.current.indeterminate = indeterminate
    }
  }, [indeterminate])

  return (
    <StyledCheckbox
      className={classNames(
        'k-Form-Checkbox',
        `k-Form-Checkbox--${variant}`,
        {
          'k-Form-Checkbox--error': error,
          'k-Form-Checkbox--disabled': disabled,
        },
        className,
      )}
    >
      <input
        ref={inputElement}
        id={id}
        type="checkbox"
        className={classNames('k-Form-Checkbox__input', inputClassName)}
        disabled={disabled}
        {...inputProps}
      />

      {!label && children && (
        <Text
          tag="label"
          htmlFor={id}
          className="k-Form-Checkbox__label"
          onClick={onLabelClick}
          {...textProps}
        >
          {children}
        </Text>
      )}

      {label && !children && (
        <Text
          tag="label"
          htmlFor={id}
          className="k-Form-Checkbox__label"
          onClick={onLabelClick}
          {...textProps}
        >
          {label}
        </Text>
      )}

      {label && children && (
        <>
          <Text
            tag="label"
            htmlFor={id}
            className="k-Form-Checkbox__label"
            onClick={onLabelClick}
            weight="regular"
          >
            {label}
          </Text>
          <Text
            className="k-Form-Checkbox__content"
            onClick={onLabelClick}
            {...textProps}
          >
            {children}
          </Text>
        </>
      )}
    </StyledCheckbox>
  )
}

Checkbox.defaultProps = {
  id: 'checkbox',
  textProps: {},
  indeterminate: false,
  error: false,
  disabled: false,
  variant: 'andromeda',
}

Checkbox.propTypes = {
  textProps: PropTypes.object,
  indeterminate: PropTypes.bool,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  children: PropTypes.node,
  label: PropTypes.string,
  variant: PropTypes.oneOf(['andromeda', 'orion']),
}
