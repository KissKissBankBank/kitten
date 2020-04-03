import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'
import { Text as TextBase } from '../../../components/typography/text'
import { HorizontalStroke as HorizontalStrokeBase } from '../../../components/layout/horizontal-stroke'
import { pxToRem } from '../../../helpers/utils/typography'
import COLORS from '../../../constants/colors-config'

const Text = Radium(TextBase)
const HorizontalStroke = Radium(HorizontalStrokeBase)

class RewardCardTitleBase extends Component {
  static propTypes = {
    children: PropTypes.string,
    tagName: PropTypes.string,
    disabled: PropTypes.bool,
  }

  static defaultProps = {
    children: '',
    tagName: 'h6',
    disabled: false,
  }

  render() {
    const { children, tagName, disabled } = this.props
    const titleStyles = [styles.base, disabled && styles.disabled]
    const strokeStyles = [
      styles.stroke.base,
      disabled && styles.stroke.disabled,
    ]

    return (
      <Fragment>
        <Text
          fontStyle="italic"
          weight="bold"
          tag={tagName}
          color="font1"
          style={titleStyles}
        >
          {children}
        </Text>
        <HorizontalStroke size="default" style={strokeStyles} />
      </Fragment>
    )
  }
}

const styles = {
  base: {
    fontSize: pxToRem(24),
    lineHeight: pxToRem(34),
    margin: `0 0 ${pxToRem(15)} 0`,
  },
  stroke: {
    base: {
      marginBottom: pxToRem(30),
    },
    disabled: {
      backgroundColor: COLORS.font2,
    },
  },
  disabled: {
    color: COLORS.font2,
    cursor: 'not-allowed',
  },
}

export const RewardCardTitle = Radium(RewardCardTitleBase)
