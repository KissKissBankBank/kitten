import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { IconBadge } from '../../../../components/atoms/icon-badge'
import { DiamondIcon } from '../../../../components/icons/diamond-icon'

export const RewardCardDiamondBadge = ({
  children,
  className,
  disabled,
  ...props
}) => {
  return (
    <div
      {...props}
      className={classNames('k-RewardCard__diamondBadge', className, {
        'k-RewardCard__diamondBadge--disabled': disabled,
      })}
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
  disabled: PropTypes.bool,
  children: PropTypes.node,
}

RewardCardDiamondBadge.defaultProps = {
  disabled: false,
  children: null,
}
