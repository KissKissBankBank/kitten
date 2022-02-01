import React from 'react'
import classNames from 'classnames'
import { Button as KittenButton } from '../../../../molecules/buttons/button'

export const Button = ({ className, ...props }) => (
  <KittenButton
    modifier="helium"
    fit="content"
    {...props}
    className={classNames(
      'k-BackingCard__button',
      'k-BackingCard__drawer',
      className,
    )}
  />
)
