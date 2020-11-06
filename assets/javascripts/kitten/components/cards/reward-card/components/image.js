import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

export const RewardCardImage = ({ alt, className, disabled, ...others }) => (
  <div className="k-RewardCard__responsiveElement">
    <img
      {...others}
      alt={alt}
      className={classNames('k-RewardCard__image', className, {
        'k-RewardCard__image--disabled': disabled,
      })}
    />
  </div>
)

RewardCardImage.propTypes = {
  alt: PropTypes.string,
  disabled: PropTypes.bool,
}

RewardCardImage.defaultProps = {
  alt: '',
  disabled: false,
}
