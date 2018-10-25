import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'
import { Button as ButtonBase } from 'kitten/components/buttons/button'
import { ScreenConfig } from 'kitten/constants/screen-config'
import { pxToRem } from 'kitten/helpers/utils/typography'

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

  const buttonStyles = isTinyVersion ? styles.tinyVersion : styles.base

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

const styles = {
  base: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: '1.3rem',
    padding: `${pxToRem(22)} ${pxToRem(30)}`,
    [`@media (max-width: ${ScreenConfig['S'].max}px)`]: {
      width: 'calc(100% + 4px)',
      position: 'relative',
      left: -2,
      bottom: -2,
    },
  },
  tinyVersion: {
    width: 'calc(100% + 4px)',
    position: 'relative',
    left: -2,
    bottom: -2,
  },
}

RewardCardButton.propTypes = {
  label: PropTypes.string,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onClick: PropTypes.func,
  isDisabled: PropTypes.bool,
  isTinyVersion: PropTypes.bool.isRequired,
}

RewardCardButton.defaultProps = {
  label: '',
  onMouseEnter: () => {},
  onMouseLeave: () => {},
  onClick: () => {},
  disabled: false,
}
