import React, { useRef, useEffect } from 'react'
import classNames from 'classnames'
import { Text } from '../../components/typography/text'
import styled, { css } from 'styled-components'
import { pxToRem, stepToRem } from '../../helpers/utils/typography'
import COLORS from '../../constants/colors-config'
import TYPOGRAPHY from '../../constants/typography-config'

const CheckboxContainer = styled.div`
  ${TYPOGRAPHY.fontStyles.light}
  line-height: normal;
  font-size: ${stepToRem(-1)};

  margin: ${pxToRem(10)} 0;

  .k-Checkbox__link {
    color: ${COLORS.primary1};
    text-decoration: none;

    &:hover {
      color: ${COLORS.primary1};
      text-decoration: none;
    }

    &:active {
      color: ${COLORS.primary3};
      text-decoration: none;
    }
  }
`

const CheckboxInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`

const CheckboxLabel = styled.label`
  display: inline-flex;
  align-items: flex-start;

  cursor: pointer;
  transition: color 0.2s;

  &:before {
    box-sizing: border-box;
    display: inline-block;
    flex-shrink: 0;
    width: ${pxToRem(20)};
    height: ${pxToRem(20)};
    margin-right: ${pxToRem(10)};

    content: '';
    background-color: ${COLORS.background1};
    border: ${pxToRem(2)} solid ${COLORS.line1};

    transition: border-color 0.2s, background-color 0.2s;
  }

  ${CheckboxInput}:focus + &:before {
    border-color: ${COLORS.primary1};
  }

  &:active {
    color: ${COLORS.primary3};
  }

  ${CheckboxInput}:checked:focus + &:before {
    box-shadow: 0 0 ${pxToRem(3)} ${COLORS.primary1};
  }

  ${CheckboxInput}:checked + &:before {
    background: ${COLORS.primary1}
      url('data:image/svg+xml;base64,PHN2ZwogIHdpZHRoPSIxMSIKICBoZWlnaHQ9IjgiCiAgdmlld0JveD0iMCAwIDExIDgiCiAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIGZpbGw9IiNmZmYiCj4KICA8cGF0aCBkPSJNNC40NCA3LjU5NkwzLjAyNCA2LjE4MiA4LjY4Mi41MjVsMS40MTQgMS40MTR6IiAvPgogIDxwYXRoIGQ9Ik00LjQ0IDcuNTk2TC45MDMgNC4wNmwxLjQxNC0xLjQxNCAzLjUzNiAzLjUzNnoiIC8+Cjwvc3ZnPgo=')
      no-repeat center;
    border-color: ${COLORS.primary1};
  }

  ${CheckboxInput}:disabled + & {
    cursor: not-allowed;

    &:before {
      background-color: ${COLORS.line1};
      border-color: ${COLORS.line1};
    }
  }

  ${CheckboxInput}:disabled:checked + &:before {
    background-image: url('data:image/svg+xml;base64,PHN2ZwogIHdpZHRoPSIxMSIKICBoZWlnaHQ9IjgiCiAgdmlld0JveD0iMCAwIDExIDgiCiAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIGZpbGw9IiNiOGI4YjgiCj4KICA8cGF0aCBkPSJNNC40NCA3LjU5NkwzLjAyNCA2LjE4MiA4LjY4Mi41MjVsMS40MTQgMS40MTR6IiAvPgogIDxwYXRoIGQ9Ik00LjQ0IDcuNTk2TC45MDMgNC4wNmwxLjQxNC0xLjQxNCAzLjUzNiAzLjUzNnoiIC8+Cjwvc3ZnPgo=');
  }

  ${CheckboxInput}:indeterminate + &:before {
    background: ${COLORS.primary1}
      url('data:image/svg+xml;base64,PHN2ZwogIHdpZHRoPSI2IgogIGhlaWdodD0iMiIKICB2aWV3Qm94PSIwIDAgNiAyIgogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICBmaWxsPSIjZmZmIgo+CiAgPHJlY3Qgd2lkdGg9IjYiIGhlaWdodD0iMiIgLz4KPC9zdmc+Cg==')
      no-repeat center;
    border-color: ${COLORS.primary1};
  }

  ${({ isInvalid }) =>
    isInvalid &&
    css`
      ${CheckboxInput} + & {
        border-color: ${COLORS.error3};

        &:before {
          border-color: ${COLORS.error3};
        }
      }

      ${CheckboxInput}:checked:focus + &:before {
        box-shadow: 0 0 ${pxToRem(3)} ${COLORS.error};
      }

      ${CheckboxInput}:checked + &:before {
        background-color: ${COLORS.error};
        border-color: ${COLORS.error};
      }
    `}
`

export const Checkbox = ({
  className,
  id,
  children,
  inputClassName,
  error,
  textProps,
  onLabelClick,
  indeterminate,
  ...inputProps
}) => {
  const inputElement = useRef(null)

  useEffect(() => {
    if (inputElement.current != null) {
      inputElement.current.indeterminate = indeterminate
    }
  }, [indeterminate])

  return (
    <CheckboxContainer className={className}>
      <CheckboxInput
        ref={inputElement}
        id={id}
        type="checkbox"
        className={inputClassName}
        {...inputProps}
      />

      <CheckboxLabel htmlFor={id} isInvalid={error} onClick={onLabelClick}>
        <Text {...textProps}>{children}</Text>
      </CheckboxLabel>
    </CheckboxContainer>
  )
}

Checkbox.defaultProps = {
  children: 'Filter 1',
  textProps: {},
  indeterminate: false,
}
