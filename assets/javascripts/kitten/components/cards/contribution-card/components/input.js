import React from 'react'
import classNames from 'classnames'
import { TextInputWithUnit } from '../../../form/text-input-with-unit'

export const Input = props => {
  return (
    <TextInputWithUnit
      className={classNames(
        'k-ContributionCard__input',
        props.classNames,
      )}
      {...props}
      variant="orion"
      unit="€"
    />
  )
}
