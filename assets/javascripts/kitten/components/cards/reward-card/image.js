import React from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import { styles } from '../../../components/cards/reward-card'
import { Deprecated } from '../../../helpers/utils/deprecated'

const RewardCardImageBase = ({ isDisabled, imageProps }) => {
  const imageStyles = [isDisabled && styles.disabled]
  const shouldDisplayImage = imageProps && imageProps.src

  if (!shouldDisplayImage) return null

  return (
    <Deprecated warningMessage="Please use RewardCard sub-component to make your composition. You can check some examples on https://kisskissbankbank.github.io/../../../">
      <div style={imageStyles} disabled={isDisabled}>
        <img {...imageProps} alt={imageProps.alt || ''} style={styles.image} />
      </div>
    </Deprecated>
  )
}

RewardCardImageBase.propTypes = {
  isDisabled: PropTypes.bool,
  imageProps: PropTypes.object,
}

RewardCardImageBase.defaultProps = {
  isDisabled: false,
  imageProps: {},
}

export const RewardCardImage = Radium(RewardCardImageBase)
