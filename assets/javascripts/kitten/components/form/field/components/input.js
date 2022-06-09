import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { TextInput } from '../../../form/input/text-input'
import { TextInputWithLimit } from '../../../form/input/text-input-with-limit'
import { TextInputWithUnit } from '../../../form/input/text-input-with-unit'

export const FieldInput = ({ limit, unit, noMargin, ...props }) => {
  const has = (() => {
    switch (true) {
      case !!limit:
        return 'limit'
      case !!unit:
        return 'unit'
      default:
        return undefined
    }
  })()

  return (
    <TextInput
      has={has}
      limit={limit}
      unit={unit}
      {...props}
      wrapperProps={{ className: classNames(
        'k-FieldInput',
        'k-Field__control',
        props.className,
        props.wrapperProps.className,
        {
          'k-u-margin-top-single': !noMargin,
        })
      }}
    />
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
