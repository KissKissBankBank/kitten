import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { TextInput } from '../../../forms/text-input'
import { TextInputWithLimit } from '../../../form/text-input-with-limit'
import { TextInputWithUnit } from '../../../form/text-input-with-unit'

export const FieldInput = ({ limit, unit, noMargin, className, ...props }) => {
  let Input = TextInput

  if (limit) {
    Input = TextInputWithLimit
  }

  if (unit) {
    Input = TextInputWithUnit
  }

  return (
    <div
      className={classNames('k-FieldInput', className, {
        'k-u-margin-top-single': !noMargin,
      })}
    >
      <Input limit={limit} unit={unit} {...props} />
    </div>
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
