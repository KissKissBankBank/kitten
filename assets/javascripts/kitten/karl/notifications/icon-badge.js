import React from 'react'
import { IconBadge } from 'kitten/components/notifications/icon-badge'
import { CheckedIcon } from 'kitten/components/icons/checked-icon'

export const KarlIconBadgeWithSvg = props => {
  const customBackground = {
    backgroundColor: '#009682',
  }

  return (
    <IconBadge style={ customBackground } { ...props }>
      <CheckedIcon className="k-IconBadge__svg" />
    </IconBadge>
  )
}
