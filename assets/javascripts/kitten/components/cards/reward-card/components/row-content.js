import React from 'react'
import classNames from 'classnames'

export const RewardCardRowContent = props => (
  <div
    {...props}
    className={classNames('k-RewardCard__rowContent', props.className)}
  />
)
