import React from 'react'
import PropTypes from 'prop-types'
import { IconBadge } from '../../../../components/notifications/icon-badge'
import { DiamondIcon } from '../../../../components/icons/diamond-icon'

export const RewardCardDiamondBadge = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      {...props}
      className="k-RewardCard__diamondBadge"
    >
      <IconBadge big disabled={disabled}>
        <DiamondIcon
          className="k-RewardCard__diamondBadge__diamondIcon k-IconBadge__svg"
          aria-hidden
        />
      </IconBadge>
      <div className="k-RewardCard__diamondBadge__content">{children}</div>
    </div>
  )
}

RewardCardDiamondBadge.propTypes = {
  children: PropTypes.node,
}

RewardCardDiamondBadge.defaultProps = {
  children: null,
}
