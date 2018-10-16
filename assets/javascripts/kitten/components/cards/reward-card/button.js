import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'
import { Button as ButtonBase } from 'kitten/components/buttons/button'
import { styles } from 'kitten/components/cards/reward-card'

const Button = Radium(ButtonBase)

export const RewardCardButton = ({
  label,
  onMouseEnter,
  onMouseLeave,
  onClick,
  isDisabled,
  isTinyVersion,
}) => {
  if (!label) return null

  const buttonStyles = isTinyVersion ? styles.button.tinyVersion : styles.button

  return (
    <Button
      size="big"
      modifier="helium"
      type="button"
      aria-labelledby={label}
      style={buttonStyles}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      disabled={isDisabled}
    >
      {label}
    </Button>
  )
}

RewardCardButton.propTypes = {
  label: PropTypes.string,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onClick: PropTypes.func,
  isDisabled: PropTypes.bool.required,
  isTinyVersion: PropTypes.bool.required,
}

RewardCardButton.defaultProps = {
  label: '',
  onMouseEnter: () => {},
  onMouseLeave: () => {},
  onClick: () => {},
}
