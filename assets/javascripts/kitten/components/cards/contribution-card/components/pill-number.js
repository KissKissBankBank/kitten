import React from 'react'
import classNames from 'classnames'
import { PillNumberInput } from '../../../../components/form/pill-number-input'

export const PillNumber = ({ value, min, max, ...props }) => {
  return (
    <PillNumberInput 
      value={value}
      min={min}
      max={max}
      className={classNames(
        'k-ContributionCard__pillNumber',
        props.className,
      )}
      {...props}
    />
  )
}
