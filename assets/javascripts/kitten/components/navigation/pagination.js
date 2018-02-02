import React, { Component } from 'react'
import Radium, { StyleRoot } from 'radium'
import classNames from 'classnames'
import { Text } from 'kitten/components/typography/text'
import { ArrowIcon as ArrowIconBase } from 'kitten/components/icons/arrow-icon'
// import { createMatchMediaMax } from 'kitten/helpers/utils/media-queries'
// import { ScreenConfig,
//   SCREEN_SIZE_M,
// } from 'kitten/constants/screen-config'
import COLORS from 'kitten/constants/colors-config'
import { parseHtml } from 'kitten/helpers/utils/parser'

const ArrowIcon = Radium(ArrowIconBase)

class PaginationBase extends Component {
  render() {
    return (
      <StyleRoot>
        { this.renderList() }
      </StyleRoot>
    )
  }

  renderList() {
    const {
      buttonIconPager,
      buttonIconPager2,
      buttonIconPager3,
      buttonIconPagerPoints,
      buttonIconPager6,
    } = this.props

    const styleButtonIcon = [
      styles.group.list.buttonIcon,
      this.props.disabled && styles.group.list.buttonIcon.disabled,
    ]

    return (
      <ul style={ styles.group }>
        <li style={ styles.group.list }>
          <button
            key="1"
            style={ styles.group.list.buttonIcon }
          >
            <ArrowIcon
              style={ styles.group.list.buttonIcon.svg }
              direction="left"
            />
          </button>
        </li>

        <li style={ styles.group.list }>
          <button
            key="2"
            style={ styleButtonIcon }
          >
            <Text
              weight="regular"
              size="tiny"
            >
              { parseHtml(buttonIconPager) }
            </Text>
          </button>
        </li>
        <li style={ styles.group.list }>
          <button
            key="3"
            style={ styleButtonIcon }
          >
            <Text
              weight="regular"
              size="tiny"
            >
              { parseHtml(buttonIconPager2) }
            </Text>
          </button>
        </li>
        <li style={ styles.group.list }>
          <button
            key="4"
            style={ styleButtonIcon }
          >
            <Text
              weight="regular"
              size="tiny"
            >
              { parseHtml(buttonIconPager3) }
            </Text>
          </button>
        </li>
        <li style={ styles.group.list }>
          <button
            key="5"
            style={ styleButtonIcon }
          >
            <Text
              weight="regular"
              size="tiny"
            >
              { parseHtml(buttonIconPagerPoints) }
            </Text>
          </button>
        </li>
        <li style={ styles.group.list }>
          <button
            key="6"
            style={ styleButtonIcon }
          >
            <Text
              weight="regular"
              size="tiny"
            >
              { parseHtml(buttonIconPager6) }
            </Text>
          </button>
        </li>

        <li style={ styles.group.list }>
          <button
            key="7"
            style={ styleButtonIcon }
          >
            <ArrowIcon
              style={ styles.group.list.buttonIcon.svg }
              direction="right"
            />
          </button>
        </li>
      </ul>
    )
  }
}

const styles = {
  group: {
    display: 'inline-flex',

    list: {
      listStyleType: 'none',
      marginRight: '15px',
      lastChild: {
        marginRight: 0,
      },

      buttonIcon: {
        boxSizing: 'border-box',
        cursor: 'pointer',
        width: '40px',
        height: '40px',
        borderRadius: 0,
        borderWidth: '2px',
        borderStyle: 'solid',
        textDecoration: 'none',
        outline: 'none',
        backgroundColor: `${COLORS.background1}`,
        borderColor: `${COLORS.line1}`,
        color: `${COLORS.font1}`,
        ':hover': {
          borderColor: `${COLORS.primary1}`,
          color: `${COLORS.primary1}`,
        },
        ':focus': {
          borderColor: `${COLORS.primary1}`,
          color: `${COLORS.primary1}`,
        },
        ':active': {
          backgroundColor: `${COLORS.primary1}`,
          borderColor: `${COLORS.primary1}`,
          color: `${COLORS.background1}`,
        },

        disabled: {
          color: `${COLORS.background1}`,
          backgroundColor: `${COLORS.line2}`,
          borderColor:  `${COLORS.line2}`,
        },

        svg: {
          alignSelf: 'center',
          margin: '0 auto',
          width: '12px',
          height: '14px',
          pointerEvents: 'none',
          ':hover': {
            color: `${COLORS.primary1}`,
          },
          ':focus': {
            color: `${COLORS.primary1}`,
          },
          ':active': {
            color: `${COLORS.background1}`,
          },

        },
      },
    },
  },
}

PaginationBase.defaultProps = {
  buttonIconPager: '1',
  buttonIconPager2: '2',
  buttonIconPager3: '3',
  buttonIconPagerPoints: '…',
  buttonIconPager6: '6',
}

export const Pagination = Radium(PaginationBase)
