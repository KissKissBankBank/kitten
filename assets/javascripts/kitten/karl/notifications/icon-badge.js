import React from 'react'
import { IconBadge } from 'kitten/components/notifications/icon-badge'
import { CheckedIcon } from 'kitten/components/icons/checked-icon'
import COLORS from 'kitten/constants/colors-config'

export const KarlIconBadgeWithSvg = ({ style, ...props }) => {
  const customBackground = {
    ...style,
    backgroundColor: COLORS.valid,
  }

  return (
    <IconBadge style={customBackground} {...props}>
      <CheckedIcon className="k-IconBadge__svg" />
    </IconBadge>
  )
}
