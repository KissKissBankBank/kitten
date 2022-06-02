import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { TextInput } from '../../../form/input/text-input'
import { PasswordIcon } from '../../../graphics/icons/password-icon'

export const PasswordInput = ({
  name,
  iconLabel,
  hiddenIconLabel,
  ...others
}) => {
  const [isHidden, setIsHidden] = useState(true)

  const handleClick = () => {
    setIsHidden(!isHidden)
  }

  return (
    <TextInput
      {...others}
      name={name}
      type={isHidden ? 'password' : 'text'}
      has="button"
      buttonIsInset={true}
      buttonProps={{
        'aria-label': isHidden ? iconLabel : hiddenIconLabel,
        'aria-pressed': !isHidden,
        onClick: handleClick,
        className: 'k-PasswordInput__icon',
        children: <PasswordIcon color={`var(--color-${ isHidden ? 'grey-900' : 'primary-500' })`} />
      }}
    />
  )
}

PasswordInput.propTypes = {
  iconLabel: PropTypes.string.isRequired,
  hiddenIconLabel: PropTypes.string.isRequired,
  name: PropTypes.string,
}

PasswordInput.defaultProps = {
  name: 'password',
}
