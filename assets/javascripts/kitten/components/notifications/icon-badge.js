import React, { Component } from 'react'
import Radium, { StyleRoot } from 'radium'
import classNames from 'classnames'
import COLORS from 'kitten/constants/colors-config'

export class IconBadge extends Component {
  render() {
    const { children, valid, big, huge, ...others } = this.props

    const styleBadge = [
      styles.badge,
      valid && styles.badge.isValid,
      big && styles.badge.big,
      huge && styles.badge.huge,
    ]

    const styleContent = [
      styles.content,
      big && styles.content.big,
      huge && styles.content.huge,
    ]

    return (
      <StyleRoot>
        <span style={styleBadge}>
          <span style={styleContent}>{children}</span>
        </span>
      </StyleRoot>
    )
  }
}

const bigSize = {
  minWidth: 40,
  minHeight: 40,
  borderRadius: 40,
}

const hugeSize = {
  minWidth: 50,
  minHeight: 50,
  borderRadius: 50,
}

const styles = {
  badge: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    minWidth: 30,
    minHeight: 30,
    borderRadius: 30,
    backgroundColor: COLORS.primary1,
    big: bigSize,
    huge: hugeSize,
    isValid: {
      backgroundColor: COLORS.valid,
    },
  },

  content: {
    flexBasis: 11,
    fill: COLORS.background1,
    color: COLORS.background1,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 0,
    big: {
      fontSize: 14,
    },
    huge: {
      fontSize: 14,
    },
  },
}
