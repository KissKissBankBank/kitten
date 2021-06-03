import React from 'react'
import classNames from 'classnames'
import { Button } from '../../../../components/buttons/button'

export const Button  = props => {
  return (
    <Button
      modifier=""
      className={classNames(
        'k-ContributionCard__button',
        props.className,
      )}
      {...props}
    >

    </Button>
  )
}
