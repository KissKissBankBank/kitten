import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'
import { Text } from 'kitten/components/typography/text'
import { HorizontalStroke } from 'kitten/components/layout/horizontal-stroke'
import { Marger } from 'kitten/components/layout/marger'
import { pxToRem } from 'kitten/helpers/utils/typography'
import COLORS from 'kitten/constants/colors-config'

class RewardCardTitleBase extends Component {
  static propTypes = {
    children: PropTypes.string,
    tagName: PropTypes.string,
  }

  static defaultProps = {
    children: '',
    tagName: 'h6',
  }

  render() {
    const { children, tagName } = this.props

    return (
      <Fragment>
        <Marger bottom="2">
          <Text
            fontStyle="italic"
            weight="bold"
            margin={false}
            tag={tagName}
            color="font1"
            style={styles}
          >
            {children}
          </Text>
        </Marger>
        <HorizontalStroke size="default" />
      </Fragment>
    )
  }
}

const styles = {
  fontSize: pxToRem(24),
  margin: 0,
}

export const RewardCardTitle = Radium(RewardCardTitleBase)
