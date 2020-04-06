import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { pxToRem } from '../../../helpers/utils/typography'

export class RewardCardRow extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  render() {
    return <div style={styles}>{this.props.children}</div>
  }
}

const styles = {
  display: 'flex',
  flexWrap: 'wrap',
  padding: `0 ${pxToRem(15)}`,
}
