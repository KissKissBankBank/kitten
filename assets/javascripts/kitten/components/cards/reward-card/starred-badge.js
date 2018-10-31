import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'
import { IconBadge as IconBadgeBase } from 'kitten/components/notifications/icon-badge'
import { StarIcon } from 'kitten/components/icons/star-icon'
import { pxToRem } from 'kitten/helpers/utils/typography'
import COLORS from 'kitten/constants/colors-config'

const IconBadge = Radium(IconBadgeBase)

class RewardCardStarredBadgeBase extends Component {
  static propTypes = {
    disabled: PropTypes.bool,
    children: PropTypes.node,
  }

  static defaultProps = {
    disabled: false,
    children: null,
  }

  render() {
    const { children, disabled } = this.props
    const starredBadgeStyles = [styles.base, disabled && styles.disabled]
    const iconBadgeStyles = [
      styles.badge.base,
      disabled && styles.badge.disabled,
    ]

    return (
      <div style={starredBadgeStyles}>
        <IconBadge big style={iconBadgeStyles}>
          <StarIcon className="k-IconBadge__svg" style={styles.icon} />
        </IconBadge>
        <div style={styles.content}>{children}</div>
      </div>
    )
  }
}

const styles = {
  base: {
    display: 'flex',
    lineHeight: '1rem',
    alignItems: 'center',
    marginBottom: pxToRem(20),
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
  },
  badge: {
    base: {
      marginRight: pxToRem(10),
    },
    disabled: {
      backgroundColor: COLORS.line2,
    },
  },
  icon: {
    height: pxToRem(14),
    width: pxToRem(14),
  },
  disabled: {
    color: COLORS.font2,
    cursor: 'not-allowed',
  },
}

export const RewardCardStarredBadge = Radium(RewardCardStarredBadgeBase)
