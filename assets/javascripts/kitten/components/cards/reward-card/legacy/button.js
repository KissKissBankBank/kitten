import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '../../../../components/buttons/button'
import { Deprecated } from '../../../../helpers/utils/deprecated'

export const RewardCardButton = ({
  label,
  onMouseEnter,
  onMouseLeave,
  onClick,
  isDisabled,
}) => {
  if (!label) return null

  return (
    <Deprecated warningMessage="Please use RewardCard sub-component to make your composition. You can check some examples on https://kisskissbankbank.github.io/../../../">
      <Button
        size="big"
        modifier="helium"
        type="button"
        aria-labelledby={label}
        className="k-LegacyRewardCard__button"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        disabled={isDisabled}
      >
        {label}
      </Button>
    </Deprecated>
  )
}

RewardCardButton.propTypes = {
  label: PropTypes.string,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onClick: PropTypes.func,
  isDisabled: PropTypes.bool,
}

RewardCardButton.defaultProps = {
  label: '',
  onMouseEnter: () => {},
  onMouseLeave: () => {},
  onClick: () => {},
  disabled: false,
}
