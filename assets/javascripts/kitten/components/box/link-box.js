import React, { Component } from 'react'
import classNames from 'classnames'
import Radium, { StyleRoot } from 'radium'
import { ArrowIcon } from 'kitten/components/icons/arrow-icon'
import { Text } from 'kitten/components/typography/text'
import COLORS from 'kitten/constants/colors-config'
import { ScreenConfig } from 'kitten/constants/screen-config'
import { mediaQueries } from 'kitten/hoc/media-queries'

export class LinkBox extends Component {
  renderIcon() {
    const { displayIcon, children, viewportIsTabletOrLess } = this.props

    if (displayIcon && viewportIsTabletOrLess) {
      return <div style={styles.linkBox.icon}>{children}</div>
    }
  }

  render() {
    const { displayIcon, isExternal, href, title, text, linkProps } = this.props

    // const linkBoxStyles = [
    //  styles.linkBox,
    //  // displayIcon && styles.linkBox.withIcon,
    // ]

    const target = isExternal ? { target: '_blank' } : {}

    return (
      <a style={styles.linkBox} href={href} {...target}>
        <div style={styles.linkBox.container}>
          {this.renderIcon()}

          <div style={styles.linkBox.paragraph}>
            <Text weight="regular" size="default">
              {title}
            </Text>
            <Text weight="light" size="tiny" className={{ lineHeight: 1.3 }}>
              {text}
            </Text>
          </div>

          <div style={styles.linkBox.navigation}>
            <ArrowIcon className="k-ButtonIcon__svg" />
          </div>
        </div>
      </a>
    )
  }
}

const styles = {
  linkBox: {
    display: 'inline-block',
    color: COLORS.font1,
    textDecoration: 'none',

    [`@media (min-width: ${ScreenConfig.S.min}px)`]: {
      display: 'none',
    },

    container: {
      display: 'flex',
      justifyContent: 'space-between',
      minHeight: 90,
      boxSizing: 'border-box',
      color: COLORS.font1,
      backgroundColor: COLORS.background1,
      borderWidth: 2,
      borderStyle: 'solid',
      borderColor: COLORS.line1,
      transition: 'background .2s',
      // ':active': {
      //   backgroundColor: COLORS.line1,
      // },
      // 'hover': {
      //   backgroundColor: COLORS.background2,
      // },
    },

    icon: {
      display: 'flex',
      marginTop: -2,
      marginLeft: -2,
      marginBottom: -2,
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: 90,
      backgroundColor: COLORS.primary4,
    },

    paragraph: {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      justifyContent: 'center',
      paddingTop: 10,
      paddingLeft: 10,
      paddingBottom: 15,
      paddingRight: 20,
    },

    navigation: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 15,
      paddingRight: 20,
      paddingBottom: 15,
      paddingLeft: 10,
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
