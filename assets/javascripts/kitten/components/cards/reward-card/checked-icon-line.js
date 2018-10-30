import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'
import { IconBadge as IconBadgeBase } from 'kitten/components/notifications/icon-badge'
import { CheckedIcon } from 'kitten/components/icons/checked-icon'
import { pxToRem } from 'kitten/helpers/utils/typography'
import COLORS from 'kitten/constants/colors-config'

const IconBadge = Radium(IconBadgeBase)

class RewardCardCheckedIconLineBase extends Component {
  render() {
    return (
      <div style={styles.base}>
        <IconBadge valid style={styles.iconBadge}>
          <CheckedIcon className="k-IconBadge__svg" />
        </IconBadge>
      </div>
    )
  }
}

const styles = {
  base: {
    borderTop: `2px ${COLORS.line1} solid`,
    marginTop: pxToRem(a0),
    display: 'flex',
    justifyContent: 'center',
  },
  iconBadge: {
    marginTop: `-${pxToRem(15)}`,
  },
}
export const RewardCardCheckedIconLine = Radium(RewardCardCheckedIconLineBase)
