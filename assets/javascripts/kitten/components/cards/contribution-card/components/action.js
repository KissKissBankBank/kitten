import React from 'react'
import classNames from 'classnames'
import { Button } from '../../../../components/buttons/button'

export const Action = ({ className, ...props}) => {
  return (
    <Button
      borderRadius={4}
      type="submit"
      {...props}
      className={className}
      className={classNames(
        'k-ContributionCard__action',
        props.className,
      )}
    />
  )
}
