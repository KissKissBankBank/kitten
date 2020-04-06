import React, { Component } from 'react'
import { IconBadge } from '../../../components/notifications/icon-badge'
import { CheckedIcon } from '../../../components/icons/checked-icon'
import { pxToRem } from '../../../helpers/utils/typography'
import COLORS from '../../../constants/colors-config'

export class RewardCardCheckedIconLine extends Component {
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
    marginTop: pxToRem(20),
    display: 'flex',
    justifyContent: 'center',
  },
  iconBadge: {
    marginTop: `-${pxToRem(15)}`,
  },
}
