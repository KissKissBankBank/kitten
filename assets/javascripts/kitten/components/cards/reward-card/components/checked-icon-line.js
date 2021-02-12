import React from 'react'
import classNames from 'classnames'
import { IconBadge } from '../../../../components/atoms/icon-badge'
import { CheckedIcon } from '../../../../components/icons/checked-icon'

export const RewardCardCheckedIconLine = props => (
  <div
    {...props}
    className={classNames('k-RewardCard__checkedIconLine', props.className)}
  >
    <IconBadge valid className="k-RewardCard__iconBadge">
      <CheckedIcon className="k-IconBadge__svg" />
    </IconBadge>
  </div>
)
