import React from 'react'
import classNames from 'classnames'
import { Button as KittenButton } from '../../../buttons/button/button'

export const Button = ({ className, ...props }) => (
  <KittenButton
    borderRadius={4}
    modifier="helium"
    {...props}
    className={classNames(
      'k-BackingCard__button',
      'k-BackingCard__drawer',
      className,
    )}
  />
)
