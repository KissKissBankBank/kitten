import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { IconBadge } from '../../../../components/atoms/icon-badge'
import { StarIcon } from '../../../../components/icons/star-icon'

export const RewardCardStarredBadge = ({
  children,
  className,
  disabled,
  ...props
}) => {
  return (
    <div
      {...props}
      className={classNames('k-RewardCard__starredBadge', className, {
        'k-RewardCard__starredBadge--disabled': disabled,
      })}
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
  disabled: PropTypes.bool,
  children: PropTypes.node,
}

RewardCardStarredBadge.defaultProps = {
  disabled: false,
  children: null,
}
