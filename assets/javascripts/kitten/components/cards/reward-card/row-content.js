import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { pxToRem } from '../../../helpers/utils/typography'

export class RewardCardRowContent extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  static defaultProps = {
    children: '',
  }

  render() {
    const { children } = this.props

    return <div style={styles}>{children}</div>
  }
}

const styles = {
  // We use an arbitrary huge ratio value for the `flex-grow` rule so that the
  // `<div>` can take the maximum space left (by its siblings) in its container.
  flexGrow: 9999,
  flexBasis: pxToRem(275), // content min-width
  margin: pxToRem(15),
}
