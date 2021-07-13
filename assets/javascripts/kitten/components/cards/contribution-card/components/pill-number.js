import React from 'react'
import classNames from 'classnames'
import { PillNumberInput } from '../../../../components/form/pill-number-input'

export const PillNumber = props => {
  return (
    <PillNumberInput
      {...props}
      className={classNames('k-ContributionCard__pillNumber', props.className)}
    />
  )
}
