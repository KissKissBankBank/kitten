import React from 'react'
import PropTypes from 'prop-types'
import { IconBadge } from '../../../../components/notifications/icon-badge'
import { StarIcon } from '../../../../components/icons/star-icon'

export const RewardCardStarredBadge = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      {...props}
      className={`k-RewardCard__starredBadge ${className}`}
    >
      <IconBadge big disabled={disabled}>
        <StarIcon
          className="k-RewardCard__starredBadge__starredIcon k-IconBadge__svg"
          aria-hidden
        />
      </IconBadge>
      <div className="k-RewardCard__starredBadge__content">{children}</div>
    </div>
  )
}

RewardCardStarredBadge.propTypes = {
  children: PropTypes.node,
}

RewardCardStarredBadge.defaultProps = {
  children: null,
}
