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
    const strokeStyles = [disabled && styles.disabled]

    return (
      <Fragment>
        <Marger bottom="2">
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
        </Marger>
        <HorizontalStroke size="default" style={strokeStyles} />
      </Fragment>
    )
  }
}

const styles = {
  base: {
    fontSize: pxToRem(24),
    margin: 0,
  },
  disabled: {
    filter: 'grayscale(1) opacity(.4)',
    cursor: 'not-allowed',
  },
}

export const RewardCardTitle = Radium(RewardCardTitleBase)
