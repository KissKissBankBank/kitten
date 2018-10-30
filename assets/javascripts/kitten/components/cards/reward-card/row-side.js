import React, { Component } from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import { pxToRem } from 'kitten/helpers/utils/typography'

class RewardCardRowSideBase extends Component {
  static propTypes = {
    withVerticalMargins: PropTypes.bool,
    children: PropTypes.node,
  }

  static defaultProps = {
    withVerticalMargins: true,
    children: '',
  }

  render() {
    const { children, withVerticalMargins } = this.props
    const rowSideStyle = [
      styles.base,
      withVerticalMargins && styles.withVerticalMargins,
    ]

    return <div style={rowSideStyle}>{children}</div>
  }
}

const styles = {
  base: {
    flexGrow: 1,
    flexBasis: pxToRem(190), // based on image max-width
    marginLeft: pxToRem(15),
    marginRight: pxToRem(15),
  },
  withVerticalMargins: {
    marginTop: pxToRem(15),
    marginBottom: pxToRem(15),
  },
}

export const RewardCardRowSide = Radium(RewardCardRowSideBase)
