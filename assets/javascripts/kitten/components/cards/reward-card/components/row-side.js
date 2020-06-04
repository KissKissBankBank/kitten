import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

export const RewardCardRowSide = ({ withVerticalMargins, ...props }) => (
  <div
    {...props}
    className={classNames('k-RewardCard__rowSide', props.className, {
      'k-RewardCard__rowSide--hasMargins': withVerticalMargins,
    })}
  />
)

RewardCardRowSide.propTypes = {
  withVerticalMargins: PropTypes.bool,
  children: PropTypes.node,
}

RewardCardRowSide.defaultProps = {
  withVerticalMargins: true,
  children: '',
}
