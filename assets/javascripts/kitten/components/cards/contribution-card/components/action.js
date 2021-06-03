import React from 'react'
import classNames from 'classnames'
import { Button } from '../../../../components/buttons/button'

export const Action = props => {
  return (
    <Button
      className={classNames(
        'k-ContributionCard__action',
        props.classNames,
      )}
      borderRadius={4}
      modifier="helium"
      style={{ minWidth: 'auto' }}
      {...props}
    />
  )
}
