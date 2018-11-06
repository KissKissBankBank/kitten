import React, { Component } from 'react'
import Radium, { StyleRoot } from 'radium'
import PropTypes from 'prop-types'
import { ArrowIcon } from 'kitten/components/icons/arrow-icon'
import { Text } from 'kitten/components/typography/text'
import { Marger } from 'kitten/components/layout/marger'
import COLORS from 'kitten/constants/colors-config'
import { ScreenConfig } from 'kitten/constants/screen-config'
import { mediaQueries } from 'kitten/hoc/media-queries'

export class LinkBox extends Component {
  static propTypes = {
    displayIcon: PropTypes.bool,
    href: PropTypes.string,
    isExternal: PropTypes.bool,
    title: PropTypes.string.isRequired,
    titleTag: PropTypes.string,
    text: PropTypes.string,
    textTag: PropTypes.string,
    linkProps: PropTypes.object,
  }

  static defaultProps = {
    displayIcon: false,
    href: '#',
    isExternal: false,
    titleTag: 'span',
    text: '',
    textTag: 'span',
  }

  renderIcon() {
    const { displayIcon, children } = this.props

    if (!displayIcon) return null

    return <div style={styles.icon}>{children}</div>
  }

  render() {
    const {
      isExternal,
      href,
      title,
      text,
      linkProps,
      titleTag,
      textTag,
      viewportIsMobile,
    } = this.props

    const target = isExternal ? { target: '_blank', rel: 'noopener' } : {}

    return (
      <StyleRoot>
        <a {...linkProps} style={styles.linkBox} href={href} {...target}>
          <div style={styles.container}>
            {this.renderIcon()}
            <div style={styles.paragraph}>
              <Marger bottom={text ? 0.5 : 0}>
                <Text
                  tag={titleTag}
                  weight="regular"
                  size={viewportIsMobile ? 'tiny' : 'default'}
                  color="font1"
                  lineHeight="normal"
                >
                  {title}
                </Text>
              </Marger>

              {text && (
                <Text
                  tag={textTag}
                  weight="light"
                  size="tiny"
                  color="font1"
                  style={{ lineHeight: 1.3 }}
                >
                  {text}
                </Text>
              )}
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
    display: 'flex',
    color: COLORS.font1,
    textDecoration: 'none',
  },

  container: {
    display: 'flex',
    minHeight: 90,
    width: '100%',
    boxSizing: 'border-box',
    color: COLORS.font1,
    backgroundColor: COLORS.background1,
    border: `2px solid ${COLORS.line1}`,
    transition: 'backgroundColor .2s',
    ':active': {
      position: 'relative',
      left: 5,
      transition: 'left .5s',
    },
    ':hover': {
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
    justifyContent: 'center',
    flexGrow: 1,
    paddingTop: 10,
    paddingBottom: 15,
    paddingLeft: 20,
    [`@media (min-width: ${ScreenConfig.S.min}px)`]: {
      paddingLeft: 30,
    },
  },

  navigation: {
    display: 'flex',
    alignItems: 'center',
    padding: '15px 22px 15px 18px',
    [`@media (min-width: ${ScreenConfig.S.min}px)`]: {
      paddingLeft: 30,
      paddingRight: 32,
    },
  },
}

// DEPRECATED: do not use default export.
export default LinkBox
