import React from 'react'
import PropTypes from 'prop-types'
import { Marger } from '../../../layout/marger'
import { TextInput } from '../../../form/text-input'
import { TextInputWithLimit } from '../../../form/text-input-with-limit'
import { TextInputWithUnit } from '../../text-input-with-unit'
import { TextInputWithButton } from '../../../form/text-input-with-button'

export const FieldInput = props => {
  let Input = TextInput

  if (props.limit) {
    Input = TextInputWithLimit
  }

  if (props.unit) {
    Input = TextInputWithUnit
  }

  if (props.button) {
    Input = TextInputWithButton
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
  button: PropTypes.bool,
}

FieldInput.defaultProps = {
  limit: undefined,
  unit: undefined,
  button: undefined,
}
