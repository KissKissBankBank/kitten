import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { pxToRem } from 'kitten/helpers/utils/typography'

export class RewardCardRow extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  render() {
    const { children, style } = this.props

    return <div style={styles}>{children}</div>
  }
}

const styles = {
  display: 'flex',
  flexWrap: 'wrap',
  padding: `0 ${pxToRem(15)}`,
}
