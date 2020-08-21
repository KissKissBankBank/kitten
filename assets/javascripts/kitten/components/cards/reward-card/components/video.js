import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

export const RewardCardVideo = ({ className, disabled, ...others }) => (
  <video
    loop
    muted
    autoPlay
    {...others}
    className={classNames('k-RewardCard__video', className, {
      'k-RewardCard__image--disabled': disabled,
    })}
  />
)

RewardCardVideo.propTypes = {
  disabled: PropTypes.bool,
}

RewardCardVideo.defaultProps = {
  disabled: false,
}
