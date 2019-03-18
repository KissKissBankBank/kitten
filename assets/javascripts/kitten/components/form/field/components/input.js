import React from 'react'
import PropTypes from 'prop-types'
import { Marger } from '../../../layout/marger'
import { TextInput } from '../../../form/text-input'
import { TextInputWithLimit } from '../../../form/text-input-with-limit'
import { TextInputWithUnit } from '../../text-input-with-unit.js'

export const FieldInput = props => {
  const { limit, unit, withoutMargin } = props
  let Input = TextInput
  if (limit) {
    Input = TextInputWithLimit
  }
  if (unit) {
    Input = TextInputWithUnit
  }

  if (withoutMargin) {
    return <Input {...props} />
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
  withoutMargin: PropTypes.bool,
}

FieldInput.defaultProps = {
  limit: undefined,
  unit: undefined,
}
