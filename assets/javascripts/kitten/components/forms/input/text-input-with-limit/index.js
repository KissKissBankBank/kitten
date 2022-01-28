import React, { useState } from 'react'
import styled from 'styled-components'
import { TextInput } from '../../../components/forms/text-input'
import PropTypes from 'prop-types'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import TYPOGRAPHY from '../../../constants/typography-config'
import classNames from 'classnames'

const StyledTextInputWithLimit = styled.div`
  position: relative;
  display: block;

  .k-Form-TextInputWithLimit__limitNumber {
    ${TYPOGRAPHY.fontStyles.regular};
    font-size: ${stepToRem(-2)};
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

    .k-Form-TextInputWithLimit__limitNumber--disabled {
      text-shadow: none;
    }
  }

  &:focus + .k-Form-TextInputWithLimit__limitNumber,
  &:focus-within + .k-Form-TextInputWithLimit__limitNumber {
    color: var(--color-grey-600);
  }
`

export const TextInputWithLimit = ({
  limit,
  onChange,
  disabled,
  value,
  defaultValue,
  ...others
}) => {
  const [textValue] = useState(value || defaultValue)
  const [length, setLength] = useState(textValue.length)

  return (
    <StyledTextInputWithLimit className="k-Form-TextInputWithLimit">
      <TextInput
        onChange={e => {
          const value = e.target.value
          setLength(value.length)
          onChange(e)
        }}
        disabled={disabled}
        defaultValue={textValue}
        {...others}
        className={classNames('k-Form-TextInputWithLimit__input')}
      />
      <div
        className={classNames('k-Form-TextInputWithLimit__limitNumber', {
          'k-Form-TextInputWithLimit__limitNumber--disabled': disabled,
          'k-Form-TextInputWithLimit__limitNumber--error': length > limit,
        })}
      >
        {limit - length}
      </div>
    </StyledTextInputWithLimit>
  )
}

TextInputWithLimit.propTypes = {
  limit: PropTypes.number,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  onChange: PropTypes.func,
  defaultValue: PropTypes.string,
}

TextInputWithLimit.defaultProps = {
  limit: 80,
  disabled: false,
  error: false,
  defaultValue: '',
  onChange: () => {},
}
