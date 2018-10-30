import React, { Component } from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import { pxToRem } from 'kitten/helpers/utils/typography'

class RewardCardRowContentBase extends Component {
  static propTypes = {
    style: PropTypes.object,
    children: PropTypes.node,
  }

  static defaultProps = {
    style: {},
    children: '',
  }

  render() {
    const { children, style } = this.props
    const rowContentStyles = [styles, style]

    return <div style={rowContentStyles}>{children}</div>
  }
}

const styles = {
  // We use an arbitrary huge ratio value for the `flex-grow` rule so that the
  // `<div>` can take the maximum space left (by its siblings) in its container.
  flexGrow: 9999,
  flexBasis: pxToRem(275), // content min-width
  margin: pxToRem(15),
}

export const RewardCardRowContent = Radium(RewardCardRowContentBase)
