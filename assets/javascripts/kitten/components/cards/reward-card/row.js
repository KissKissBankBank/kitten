import React, { Component } from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'

class RewardCardRowBase extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  static defaultProps = {
    children: '',
  }

  render() {
    const { children } = this.props

    if (!children) return null

    return <div style={styles}>{children}</div>
  }
}

const styles = {
  display: 'flex',
  flexWrap: 'wrap',
}

export const RewardCardRow = Radium(RewardCardRowBase)
