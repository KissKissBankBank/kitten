import React, { Component, Fragment } from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import { styles } from 'kitten/components/cards/reward-card'

const RewardCardImageBase = ({ isDisabled, imageProps }) => {
  const imageStyles = [isDisabled && styles.disabled]
  const shouldDisplayImage = imageProps && imageProps.src

  if (!shouldDisplayImage) return null

  return (
    <div style={imageStyles} disabled={isDisabled}>
      <img {...imageProps} alt={ imageProps.alt || '' } style={styles.image} />
    </div>
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
