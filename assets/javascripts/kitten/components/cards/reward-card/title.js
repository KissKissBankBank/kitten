import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'
import { Text as TextBase } from 'kitten/components/typography/text'
import { HorizontalStroke as HorizontalStrokeBase } from 'kitten/components/layout/horizontal-stroke'
import { Marger } from 'kitten/components/layout/marger'
import { pxToRem } from 'kitten/helpers/utils/typography'
import COLORS from 'kitten/constants/colors-config'

const Text = Radium(TextBase)
const HorizontalStroke = Radium(HorizontalStrokeBase)

class RewardCardTitleBase extends Component {
  static propTypes = {
    children: PropTypes.string,
    tagName: PropTypes.string,
    disabled: PropTypes.bool,
    style: PropTypes.object,
  }

  static defaultProps = {
    children: '',
    tagName: 'h6',
    disabled: false,
    style: {},
  }

  render() {
    const { children, tagName, disabled, style } = this.props
    const titleStyles = [styles.base, disabled && styles.disabled, style]
    const strokeStyles = [styles.stroke, disabled && styles.disabled]

    return (
      <Fragment>
        <Text
          fontStyle="italic"
          weight="bold"
          margin={false}
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
    marginBottom: pxToRem(30),
  },
  disabled: {
    filter: 'grayscale(1) opacity(.4)',
    cursor: 'not-allowed',
  },
}

export const RewardCardTitle = Radium(RewardCardTitleBase)
