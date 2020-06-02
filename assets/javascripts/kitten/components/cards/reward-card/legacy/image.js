import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Deprecated } from '../../../../helpers/utils/deprecated'

export const RewardCardImage = ({ isDisabled, imageProps }) => {
  const shouldDisplayImage = imageProps && imageProps.src

  if (!shouldDisplayImage) return null

  return (
    <Deprecated warningMessage="Please use RewardCard sub-component to make your composition. You can check some examples on https://kisskissbankbank.github.io/../../../">
      <div
        className={isDisabled ? 'k-LegacyRewardCard__element--disabled' : null}
      >
        <img
          {...imageProps}
          alt={imageProps.alt || ''}
          className={classNames(
            'k-LegacyRewardCard__image',
            imageProps.className,
          )}
        />
      </div>
    </Deprecated>
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
