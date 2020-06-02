import React from 'react'
import classNames from 'classnames'

export const RewardCardRow = props => (
  <div
    {...props}
    className={classNames('k-RewardCard__cardRow', props.className)}
  />
)
