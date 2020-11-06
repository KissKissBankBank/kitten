import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { GifVideo } from '../../../../components/videos/gif-video'

export const RewardCardVideo = ({ className, disabled, ...others }) => (
  <GifVideo
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
