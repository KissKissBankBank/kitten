import React from 'react'
import classNames from 'classnames'
import { Button as KittenButton } from '../../../../molecules/buttons/button'

export const Button = ({ className, ...props }) => (
  <KittenButton
    modifier="helium"
    fit="content"
    className={classNames(
      'k-BackingCard__button',
      'k-BackingCard__drawer',
      className,
    )}
    {...props}
  />
)
