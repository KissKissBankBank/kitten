import React from 'react'
import Radium from 'radium'
import { IconBadge as IconBadgeBase } from '../../../../components/notifications/icon-badge'
import { CheckedIcon } from '../../../../components/icons/checked-icon'
import { styles } from '../index'

const IconBadge = Radium(IconBadgeBase)

export const RewardCardCheckedIcon = () => (
  <IconBadge valid style={styles.iconBadge}>
    <CheckedIcon className="k-IconBadge__svg" />
  </IconBadge>
)
