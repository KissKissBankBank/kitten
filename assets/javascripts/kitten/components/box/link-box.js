import React, { Component, Fragment } from 'react'
import Radium, { StyleRoot } from 'radium'
import classNames from 'classnames'
import { ArrowIcon } from 'kitten/components/icons/arrow-icon'
import { Text } from 'kitten/components/typography/text'
import COLORS from 'kitten/constants/colors-config'
import { ScreenConfig } from 'kitten/constants/screen-config'
import { mediaQueries } from 'kitten/hoc/media-queries'

export class LinkBox extends Component {
  renderIcon() {
    const { displayIcon, children } = this.props

    return (
      <Fragment>
        {displayIcon && <div style={styles.icon}>{children}</div>}
      </Fragment>
    )
  }

  render() {
    const { displayIcon, isExternal, href, title, text, linkProps } = this.props

    const linkBoxStyles = [
      styles.linkBox,
      displayIcon && styles.linkBox.withIcon,
    ]

    const target = isExternal ? { target: '_blank' } : {}

    return (
      <StyleRoot>
        <a {...linkProps} style={linkBoxStyles} href={href} {...target}>
          <div style={styles.container}>
            {this.renderIcon()}

            <div style={styles.paragraph}>
              <Text
                weight="regular"
                size="tiny"
                color="font1"
                lineHeight="normal"
              >
                {title}
              </Text>
              <Text
                weight="light"
                size="tiny"
                color="font1"
                className={{ lineHeight: 1.3 }}
              >
                {text}
              </Text>
            </div>

            <div style={styles.navigation}>
              <ArrowIcon className="k-ButtonIcon__svg" />
            </div>
          </div>
        </a>
      </StyleRoot>
    )
  }
}

const styles = {
  linkBox: {
    display: 'inline-block',
    color: COLORS.font1,
    textDecoration: 'none',
  },

  container: {
    display: 'flex',
    justifyContent: 'space-between',
    minHeight: 90,
    maxWidth: 440,
    boxSizing: 'border-box',
    color: COLORS.font1,
    backgroundColor: COLORS.background1,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: COLORS.line1,
    transition: 'background .2s',
    ':active': {
      backgroundColor: COLORS.line1,
    },
    hover: {
      backgroundColor: COLORS.background2,
    },
  },

  icon: {
    display: 'none',
    marginTop: -2,
    marginLeft: -2,
    marginBottom: -2,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 90,
    backgroundColor: COLORS.primary4,

    [`@media (min-width: ${ScreenConfig.S.min}px)`]: {
      display: 'flex',
    },
  },

  paragraph: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 18,
    paddingTop: 10,
    paddingBottom: 15,
    [`@media (min-width: ${ScreenConfig.S.min}px)`]: {
      paddingLeft: 30,
      paddingRight: 20,
    },
  },

  navigation: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 22,
    paddingTop: 15,
    paddingBottom: 15,
    [`@media (min-width: ${ScreenConfig.S.min}px)`]: {
      paddingRight: 32,
    },
  },
}

LinkBox.defaultProps = {
  displayIcon: false,
  href: '#',
  isExternal: false,
}

// DEPRECATED: do not use default export.
export default LinkBox
