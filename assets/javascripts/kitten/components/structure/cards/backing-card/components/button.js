import React from 'react'
import classNames from 'classnames'
import { Button as KittenButton } from '../../../../actions/button'

export const Button = ({ className, ...props }) => (
  <KittenButton
    modifier="helium"
    {...props}
    className={classNames(
      'k-BackingCard__button',
      'k-BackingCard__drawer',
      className,
    )}
  />
)
