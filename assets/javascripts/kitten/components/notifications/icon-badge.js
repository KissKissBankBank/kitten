import React, { Component } from 'react'
import Radium, { StyleRoot } from 'radium'
import classNames from 'classnames'
import COLORS from 'kitten/constants/colors-config'

export class IconBadge extends Component {
  render() {
    const { children, valid, big, ...others } = this.props

    const styleBadge = [
      styles.badge,
      valid && styles.badge.isValid,
      big && styles.badge.big,
    ]

    const styleContent = [styles.content, big && styles.content.big]

    return (
      <StyleRoot>
        <span style={styleBadge}>
          <span style={styleContent}>{children}</span>
        </span>
      </StyleRoot>
    )
  }
}

const styles = {
  badge: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 30,
    minHeight: 30,
    padding: 0,
    borderRadius: 30,
    backgroundColor: COLORS.primary1,
    big: {
      minWidth: 40,
      minHeight: 40,
      borderRadius: 40,
    },
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
  },
}
