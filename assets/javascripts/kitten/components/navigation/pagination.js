import React, { Component } from 'react'
import Radium, { StyleRoot } from 'radium'
import classNames from 'classnames'
import { Text } from 'kitten/components/typography/text'
import { ArrowIcon as ArrowIconBase } from 'kitten/components/icons/arrow-icon'
import { ScreenConfig,
  SCREEN_SIZE_M,
} from 'kitten/constants/screen-config'
import COLORS from 'kitten/constants/colors-config'
import { parseHtml } from 'kitten/helpers/utils/parser'

const ArrowIcon = Radium(ArrowIconBase)

export class Pagination extends Component {
  render() {
    const {
      buttonIconPager,
    } = this.props

    const styleButtonIcon = [
      styles.group.list.buttonIcon,
      this.props.disabled && styles.list.buttonIcon.disabled,
    ]

    return (
      <StyleRoot>
        <ul style={ styles.group }>
          <li style={ styles.group.list } >
            <a style={ styleButtonIcon }>
              <ArrowIcon
                style={ styles.group.list.buttonIcon.svg }
                direction="left"
              />
            </a>
          </li>
          <li style={ styles.group.list } >
            <a style={ styleButtonIcon }>
              <div
                style={ styles.group.list.buttonIcon.number }
              >
                <Text
                  weight="regular"
                  size="tiny"
                  tag="p"
                >
                  { parseHtml(buttonIconPager) }
                </Text>
              </div>
            </a>
          </li>
        </ul>
      </StyleRoot>
    )
  }
}

const styles = {
  group: {
    display: 'inline-flex',

    list: {
      listStyleType: 'none',
      marginRight: '15px',
      // &:lastChild: {
      //   marginRight: 0,
      // }

      buttonIcon: {
        display: 'flex',
        boxSizing: 'border-box',
        cursor: 'pointer',
        verticalAlign: 'middle',
        width: '40px',
        height: '40px',
        borderRadius: 0,
        borderWidth: '2px',
        borderStyle: 'solid',
        backgroundColor: `${COLORS.background1}`,
        borderColor: `${COLORS.line1}`,
        color: `${COLORS.font1}`,
        textAlign: 'center',

        ':active': {
          backgroundColor: `${COLORS.background1}`,
          borderColor: `${COLORS.primary3}`,
          color: `${COLORS.primary3}`,
        },
        ':hover': {
          backgroundColor: `${COLORS.background1}`,
          borderColor: `${COLORS.primary1}`,
          color: `${COLORS.primary1}`,
        },
        ':focus': {
          backgroundColor: `${COLORS.background1}`,
          borderColor: `${COLORS.primary1}`,
          color: `${COLORS.primary1}`,
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
        },

        number: {
          margin: '0 auto',
          alignSelf: 'center',
        },
      },
    },
  },
}


Pagination.defaultProps = {
  buttonIconPager: '1',
  buttonIconPager2: '2',
}
