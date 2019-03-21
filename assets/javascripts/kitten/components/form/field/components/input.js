import React from 'react'
import PropTypes from 'prop-types'
import { Marger } from '../../../layout/marger'
import { TextInput } from '../../../form/text-input'
import { TextInputWithLimit } from '../../../form/text-input-with-limit'
import { TextInputWithUnit } from '../../text-input-with-unit'

export const FieldInput = props => {
  let Input = TextInput

  if (props.limit) {
    Input = TextInputWithLimit
  }

  if (props.unit) {
    Input = TextInputWithUnit
  }

  return (
    <Marger top="1.5">
      <Input {...props} />
    </Marger>
  )
}

FieldInput.propTypes = {
  limit: PropTypes.number,
  unit: PropTypes.string,
}

FieldInput.defaultProps = {
  limit: undefined,
  unit: undefined,
}
