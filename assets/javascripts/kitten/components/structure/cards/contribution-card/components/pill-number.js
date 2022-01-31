import React from 'react'
import classNames from 'classnames'
import { PillNumberInput } from '../../../../forms/pill-number-input'

export const PillNumber = props => {
  return (
    <PillNumberInput
      {...props}
      className={classNames('k-ContributionCard__pillNumber', props.className)}
    />
  )
}
