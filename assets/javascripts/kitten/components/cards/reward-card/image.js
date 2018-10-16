import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { styles } from 'kitten/components/cards/reward-card'

export const RewardCardImage = ({ isDisabled, imageProps }) => {
  const imageStyles = [isDisabled && styles.disabled]
  const shouldDisplayImage = imageProps && imageProps.src

  if (!shouldDisplayImage) return null

  return (
    <div style={imageStyles} disabled={isDisabled}>
      <img {...imageProps} style={styles.image} />
    </div>
  )
}

RewardCardImage.propTypes = {
  isDisabled: PropTypes.bool,
  imageProps: PropTypes.object,
}

RewardCardImage.defaultProps = {
  isDisabled: false,
  imageProps: {},
}
