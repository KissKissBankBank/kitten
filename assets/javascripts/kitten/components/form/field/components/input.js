import React from 'react'
import styled from 'styled-components'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { TextInput } from '../../../form/text-input'
import { TextInputWithLimit } from '../../../form/text-input-with-limit'
import { TextInputWithUnit } from '../../../form/text-input-with-unit'

const StyledFieldInput = styled.div`
  &.k-FieldInput--noMargin {
    margin-top: 0;
    margin-bottom: 0;
  }
`

export const FieldInput = ({
  limit,
  unit,
  noMargin,
  className,
  ...props
}) => {

  let Input = TextInput

  if (limit) {
    Input = TextInputWithLimit
  }

  if (unit) {
    Input = TextInputWithUnit
  }

  return (
    <StyledFieldInput
      className={classNames('k-FieldInput',
        className, 
        { 'k-FieldInput--noMargin': noMargin },
        "k-u-margin-top-single",
      )}
    >
      <Input {...props} />
    </StyledFieldInput>
  )
}

FieldInput.propTypes = {
  limit: PropTypes.number,
  unit: PropTypes.string,
  noMargin: PropTypes.bool,
}

FieldInput.defaultProps = {
  limit: undefined,
  unit: undefined,
  noMargin: false,
}
