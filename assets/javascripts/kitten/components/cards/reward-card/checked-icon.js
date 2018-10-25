import React from 'react'
import Radium from 'radium'
import { IconBadge as IconBadgeBase } from 'kitten/components/notifications/icon-badge'
import { CheckedIcon } from 'kitten/components/icons/checked-icon'
import { styles } from 'kitten/components/cards/reward-card'

const IconBadge = Radium(IconBadgeBase)

export const RewardCardCheckedIcon = () => (
  <IconBadge valid style={styles.iconBadge}>
    <CheckedIcon className="k-IconBadge__svg" />
  </IconBadge>
)
